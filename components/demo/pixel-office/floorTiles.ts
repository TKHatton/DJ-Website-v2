/**
 * Floor tile pattern storage and caching.
 * Ported from pixel-agents reference.
 */

import { TILE_SIZE } from './constants';
import { clearColorizeCache, getColorizedSprite } from './colorize';
import type { FloorColor, SpriteData } from './types';

const FALLBACK_FLOOR_COLOR = '#808080';

const DEFAULT_FLOOR_SPRITE: SpriteData = Array.from(
  { length: TILE_SIZE },
  () => Array(TILE_SIZE).fill(FALLBACK_FLOOR_COLOR) as string[],
);

let floorSprites: SpriteData[] = [];

export const WALL_COLOR = '#3A3A5C';

export function setFloorSprites(sprites: SpriteData[]): void {
  floorSprites = sprites;
  clearColorizeCache();
}

export function getFloorSprite(patternIndex: number): SpriteData | null {
  const idx = patternIndex - 1;
  if (idx < 0) return null;
  if (idx < floorSprites.length) return floorSprites[idx];
  if (floorSprites.length === 0 && patternIndex >= 1) return DEFAULT_FLOOR_SPRITE;
  return null;
}

export function hasFloorSprites(): boolean {
  return true;
}

export function getColorizedFloorSprite(patternIndex: number, color: FloorColor): SpriteData {
  const base = getFloorSprite(patternIndex);
  if (!base) {
    return Array.from({ length: 16 }, () => Array(16).fill('#FF00FF'));
  }
  const key = `floor-${patternIndex}-${color.h}-${color.s}-${color.b}-${color.c}`;
  return getColorizedSprite(key, base, { ...color, colorize: true });
}
