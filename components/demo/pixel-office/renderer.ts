/**
 * Pixel Office renderer.
 * Rendering pipeline ported from pixel-agents reference.
 * Custom features: phase-aware behavior, celebrate, camera follow, custom bubbles.
 */

import {
  CHARACTER_SITTING_OFFSET_PX,
  CHARACTER_Z_SORT_OFFSET,
  TILE_SIZE,
} from './constants';
import { getColorizedFloorSprite, hasFloorSprites, WALL_COLOR } from './floorTiles';
import { hasWallSprites, getWallInstances, wallColorToHex } from './wallTiles';
import { getCachedSprite } from './spriteCache';
import { getCharacterSprites, getBubbleSprite } from './sprites';
import { getCharacterSprite } from './characters';
import type {
  Camera,
  Character,
  FloorColor,
  FurnitureInstance,
  SpriteData,
  TileType as TileTypeVal,
} from './types';
import { CharacterState, TileType } from './types';

const FALLBACK_FLOOR_COLOR = '#808080';
const GRID_LINE_COLOR = 'rgba(255,255,255,0.12)';

// ── Tile grid ─────────────────────────────────────────────────

function renderTileGrid(
  ctx: CanvasRenderingContext2D,
  tileMap: TileTypeVal[][],
  offsetX: number,
  offsetY: number,
  zoom: number,
  tileColors?: Array<FloorColor | null>,
  cols?: number,
): void {
  const s = TILE_SIZE * zoom;
  const useSpriteFloors = hasFloorSprites();
  const tmRows = tileMap.length;
  const tmCols = tmRows > 0 ? tileMap[0].length : 0;
  const layoutCols = cols ?? tmCols;

  for (let r = 0; r < tmRows; r++) {
    for (let c = 0; c < tmCols; c++) {
      const tile = tileMap[r][c];
      if (tile === TileType.VOID) continue;

      if (tile === TileType.WALL || !useSpriteFloors) {
        // Wall tiles or fallback: solid color
        if (tile === TileType.WALL) {
          const colorIdx = r * layoutCols + c;
          const wallColor = tileColors?.[colorIdx];
          ctx.fillStyle = wallColor ? wallColorToHex(wallColor) : WALL_COLOR;
        } else {
          ctx.fillStyle = FALLBACK_FLOOR_COLOR;
        }
        ctx.fillRect(offsetX + c * s, offsetY + r * s, s, s);
        continue;
      }

      // Floor tile: colorized sprite
      const colorIdx = r * layoutCols + c;
      const color = tileColors?.[colorIdx] ?? { h: 0, s: 0, b: 0, c: 0 };
      const sprite = getColorizedFloorSprite(tile, color);
      const cached = getCachedSprite(sprite, zoom);
      ctx.drawImage(cached, offsetX + c * s, offsetY + r * s);
    }
  }
}

// ── Grid overlay (subtle white lines) ──────────────────────────

function renderGridOverlay(
  ctx: CanvasRenderingContext2D,
  offsetX: number,
  offsetY: number,
  zoom: number,
  cols: number,
  rows: number,
): void {
  const s = TILE_SIZE * zoom;
  ctx.strokeStyle = GRID_LINE_COLOR;
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let c = 0; c <= cols; c++) {
    const x = offsetX + c * s + 0.5;
    ctx.moveTo(x, offsetY);
    ctx.lineTo(x, offsetY + rows * s);
  }
  for (let r = 0; r <= rows; r++) {
    const y = offsetY + r * s + 0.5;
    ctx.moveTo(offsetX, y);
    ctx.lineTo(offsetX + cols * s, y);
  }
  ctx.stroke();
}

// ── Z-sorted scene ─────────────────────────────────────────────

interface ZDrawable {
  zY: number;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

function renderScene(
  ctx: CanvasRenderingContext2D,
  furniture: FurnitureInstance[],
  characters: Character[],
  offsetX: number,
  offsetY: number,
  zoom: number,
): void {
  const drawables: ZDrawable[] = [];

  // Furniture (includes wall instances when wall sprites are loaded)
  for (const f of furniture) {
    const cached = getCachedSprite(f.sprite, zoom);
    const fx = offsetX + f.x * zoom;
    const fy = offsetY + f.y * zoom;
    drawables.push({
      zY: f.zY,
      draw: (c) => c.drawImage(cached, fx, fy),
    });
  }

  // Characters
  for (const ch of characters) {
    const sprites = getCharacterSprites(ch.palette);
    const spriteData = getCharacterSprite(ch, sprites);
    const cached = getCachedSprite(spriteData, zoom);
    const sittingOffset = ch.state === CharacterState.TYPE ? CHARACTER_SITTING_OFFSET_PX : 0;

    // Celebrate bounce
    let celebrateBounce = 0;
    if (ch.state === CharacterState.CELEBRATE && ch.path.length === 0) {
      celebrateBounce = Math.sin(ch.frameTimer * 4) * 2 * zoom;
    }

    const drawX = Math.round(offsetX + ch.x * zoom - cached.width / 2);
    const drawY = Math.round(offsetY + (ch.y + sittingOffset) * zoom - cached.height - celebrateBounce);
    const charZY = ch.y + TILE_SIZE / 2 + CHARACTER_Z_SORT_OFFSET;

    drawables.push({
      zY: charZY,
      draw: (c) => {
        // Monitor glow for active typing
        if (ch.state === CharacterState.TYPE && ch.isActive) {
          const glowAlpha = 0.15 + Math.sin(Date.now() / 300) * 0.05;
          c.fillStyle = `rgba(100, 200, 255, ${glowAlpha})`;
          const glowW = TILE_SIZE * zoom;
          const glowH = TILE_SIZE * zoom * 0.5;
          const glowX = Math.round(offsetX + ch.x * zoom - glowW / 2);
          const glowY = Math.round(offsetY + ch.y * zoom - glowH);
          c.fillRect(glowX, glowY, glowW, glowH);
        }

        c.drawImage(cached, drawX, drawY);

        // Bubble rendering
        if (ch.bubble !== 'none') {
          const bubbleSprite = getBubbleSprite(ch.bubble);
          if (bubbleSprite) {
            const bubbleCached = getCachedSprite(bubbleSprite, zoom);
            const bx = drawX + 4 * zoom;
            const by = drawY - bubbleCached.height - 2 * zoom;
            c.drawImage(bubbleCached, bx, by);
          }
        }
      },
    });
  }

  // Sort by Y (lower = in front = drawn later)
  drawables.sort((a, b) => a.zY - b.zY);
  for (const d of drawables) {
    d.draw(ctx);
  }
}

// ── Main render frame ──────────────────────────────────────────

export function renderFrame(
  ctx: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number,
  tileMap: TileTypeVal[][],
  furniture: FurnitureInstance[],
  characters: Character[],
  zoom: number,
  tileColors?: Array<FloorColor | null>,
  layoutCols?: number,
  layoutRows?: number,
  camera?: Camera,
): void {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  const cols = layoutCols ?? (tileMap.length > 0 ? tileMap[0].length : 0);
  const rows = layoutRows ?? tileMap.length;

  let offsetX: number;
  let offsetY: number;

  if (camera) {
    const halfVW = canvasWidth / (2 * zoom);
    const halfVH = canvasHeight / (2 * zoom);
    const clampedX = Math.max(halfVW, Math.min(cols * TILE_SIZE - halfVW, camera.x));
    const clampedY = Math.max(halfVH, Math.min(rows * TILE_SIZE - halfVH, camera.y));
    offsetX = Math.floor(canvasWidth / 2 - clampedX * zoom);
    offsetY = Math.floor(canvasHeight / 2 - clampedY * zoom);
  } else {
    const mapW = cols * TILE_SIZE * zoom;
    const mapH = rows * TILE_SIZE * zoom;
    offsetX = Math.floor((canvasWidth - mapW) / 2);
    offsetY = Math.floor((canvasHeight - mapH) / 2);
  }

  // Draw floor tiles + wall base colors
  renderTileGrid(ctx, tileMap, offsetX, offsetY, zoom, tileColors, layoutCols);

  // Draw grid overlay (subtle white lines, matching reference)
  renderGridOverlay(ctx, offsetX, offsetY, zoom, cols, rows);

  // Build wall instances for z-sorting (auto-tiled wall sprites)
  const wallInstances = hasWallSprites() ? getWallInstances(tileMap, tileColors, layoutCols) : [];
  const allFurniture = wallInstances.length > 0 ? [...wallInstances, ...furniture] : furniture;

  // Draw walls + furniture + characters (z-sorted)
  renderScene(ctx, allFurniture, characters, offsetX, offsetY, zoom);
}
