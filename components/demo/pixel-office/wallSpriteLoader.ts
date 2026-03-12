/**
 * Browser-side loader for walls.png.
 * Extracts 16 wall sprite pieces (16x32 each) from a 64x128 sprite sheet.
 * 4 columns x 4 rows, indexed by bitmask (N=1, E=2, S=4, W=8).
 */

import type { SpriteData } from './types';
import { setWallSprites } from './wallTiles';

const WALL_PIECE_W = 16;
const WALL_PIECE_H = 32;
const WALL_GRID_COLS = 4;
const WALL_BITMASK_COUNT = 16;

let loaded = false;

export function hasLoadedWallSprites(): boolean {
  return loaded;
}

export async function loadWallSpriteSheet(): Promise<void> {
  if (loaded) return;

  return new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) { reject(new Error('No 2d context')); return; }
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const { data, width } = imageData;

      const sprites: SpriteData[] = [];
      for (let mask = 0; mask < WALL_BITMASK_COUNT; mask++) {
        const ox = (mask % WALL_GRID_COLS) * WALL_PIECE_W;
        const oy = Math.floor(mask / WALL_GRID_COLS) * WALL_PIECE_H;
        const sprite: string[][] = [];
        for (let r = 0; r < WALL_PIECE_H; r++) {
          const row: string[] = [];
          for (let c = 0; c < WALL_PIECE_W; c++) {
            const idx = ((oy + r) * width + (ox + c)) * 4;
            const rv = data[idx];
            const gv = data[idx + 1];
            const bv = data[idx + 2];
            const av = data[idx + 3];
            if (av < 128) {
              row.push('');
            } else {
              row.push(`#${rv.toString(16).padStart(2, '0')}${gv.toString(16).padStart(2, '0')}${bv.toString(16).padStart(2, '0')}`);
            }
          }
          sprite.push(row);
        }
        sprites.push(sprite);
      }

      setWallSprites(sprites);
      loaded = true;
      console.log(`[WallLoader] Loaded ${sprites.length} wall sprites from walls.png`);
      resolve();
    };
    img.onerror = () => {
      console.warn('[WallLoader] Failed to load walls.png, using fallback wall rendering');
      resolve(); // Don't reject - gracefully degrade
    };
    img.src = '/assets/walls.png';
  });
}
