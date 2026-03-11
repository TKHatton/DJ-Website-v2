import {
  CHARACTER_SITTING_OFFSET_PX,
  CHARACTER_Z_SORT_OFFSET,
  TILE_SIZE,
  WALL_COLOR,
  FLOOR_FALLBACK_COLOR,
} from './constants';
import { getCachedSprite } from './spriteCache';
import { getCharacterSprites } from './sprites';
import { getCharacterSprite } from './characters';
import type {
  Character,
  FloorColor,
  FurnitureInstance,
  SpriteData,
  TileType as TileTypeVal,
} from './types';
import { CharacterState, TileType } from './types';

// Simple HSL to hex conversion for floor coloring
function hslToHex(h: number, s: number, l: number): string {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hp = h / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  let r1 = 0, g1 = 0, b1 = 0;
  if (hp < 1) { r1 = c; g1 = x; }
  else if (hp < 2) { r1 = x; g1 = c; }
  else if (hp < 3) { g1 = c; b1 = x; }
  else if (hp < 4) { g1 = x; b1 = c; }
  else if (hp < 5) { r1 = x; b1 = c; }
  else { r1 = c; b1 = x; }
  const m = l - c / 2;
  const toHex = (v: number) => Math.max(0, Math.min(255, Math.round((v + m) * 255))).toString(16).padStart(2, '0');
  return `#${toHex(r1)}${toHex(g1)}${toHex(b1)}`;
}

function floorColorToHex(color: FloorColor): string {
  let lightness = 0.4; // base floor lightness
  if (color.b !== 0) lightness += color.b / 200;
  if (color.c !== 0) {
    const factor = (100 + color.c) / 100;
    lightness = 0.5 + (lightness - 0.5) * factor;
  }
  lightness = Math.max(0, Math.min(1, lightness));
  return hslToHex(color.h, color.s / 100, lightness);
}

interface ZDrawable {
  zY: number;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

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
  const tmRows = tileMap.length;
  const tmCols = tmRows > 0 ? tileMap[0].length : 0;
  const layoutCols = cols ?? tmCols;

  for (let r = 0; r < tmRows; r++) {
    for (let c = 0; c < tmCols; c++) {
      const tile = tileMap[r][c];
      if (tile === TileType.VOID) continue;

      if (tile === TileType.WALL) {
        ctx.fillStyle = WALL_COLOR;
      } else {
        const colorIdx = r * layoutCols + c;
        const color = tileColors?.[colorIdx];
        ctx.fillStyle = color ? floorColorToHex(color) : FLOOR_FALLBACK_COLOR;
      }
      ctx.fillRect(offsetX + c * s, offsetY + r * s, s, s);
    }
  }
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

  // Furniture
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
    const drawX = Math.round(offsetX + ch.x * zoom - cached.width / 2);
    const drawY = Math.round(offsetY + (ch.y + sittingOffset) * zoom - cached.height);
    const charZY = ch.y + TILE_SIZE / 2 + CHARACTER_Z_SORT_OFFSET;

    drawables.push({
      zY: charZY,
      draw: (c) => c.drawImage(cached, drawX, drawY),
    });
  }

  // Sort by Y (lower = in front = drawn later)
  drawables.sort((a, b) => a.zY - b.zY);
  for (const d of drawables) {
    d.draw(ctx);
  }
}

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
): void {
  // Clear
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  const cols = layoutCols ?? (tileMap.length > 0 ? tileMap[0].length : 0);
  const rows = layoutRows ?? tileMap.length;

  // Center map in viewport
  const mapW = cols * TILE_SIZE * zoom;
  const mapH = rows * TILE_SIZE * zoom;
  const offsetX = Math.floor((canvasWidth - mapW) / 2);
  const offsetY = Math.floor((canvasHeight - mapH) / 2);

  // Draw tiles
  renderTileGrid(ctx, tileMap, offsetX, offsetY, zoom, tileColors, layoutCols);

  // Draw furniture + characters (z-sorted)
  renderScene(ctx, furniture, characters, offsetX, offsetY, zoom);
}
