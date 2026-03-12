import type { SpriteData } from './types';
import { Direction } from './types';
import type { CharacterSprites } from './characterSprites';

const CHAR_FRAME_W = 16;
const CHAR_FRAME_H = 32;
const CHAR_FRAMES_PER_ROW = 7;
const CHAR_COUNT = 6;
const PNG_ALPHA_THRESHOLD = 128;

/** Direction rows in the sprite sheet: row 0=down, row 1=up, row 2=right */
const DIR_ROWS: Array<'down' | 'up' | 'right'> = ['down', 'up', 'right'];

interface LoadedCharacterData {
  down: SpriteData[];
  up: SpriteData[];
  right: SpriteData[];
}

/** Loaded sprite sheet data. Null until loadCharacterSpriteSheets() resolves. */
let loadedCharacters: LoadedCharacterData[] | null = null;

/** Check if sprite sheets have been loaded */
export function hasLoadedSpriteSheets(): boolean {
  return loadedCharacters !== null;
}

/** Flip a SpriteData horizontally */
function flipSpriteHorizontal(sprite: SpriteData): SpriteData {
  return sprite.map(row => [...row].reverse());
}

/**
 * Load a single PNG and extract RGBA pixel data.
 * Returns a promise that resolves with the ImageData.
 */
function loadImageData(src: string): Promise<ImageData> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0);
      resolve(ctx.getImageData(0, 0, img.width, img.height));
    };
    img.onerror = () => reject(new Error());
    img.src = src;
  });
}

/**
 * Extract a single frame from ImageData as SpriteData.
 */
function extractFrame(
  imageData: ImageData,
  frameX: number,
  frameY: number,
  w: number,
  h: number,
): SpriteData {
  const sprite: SpriteData = [];
  for (let y = 0; y < h; y++) {
    const row: string[] = [];
    for (let x = 0; x < w; x++) {
      const idx = ((frameY + y) * imageData.width + (frameX + x)) * 4;
      const r = imageData.data[idx];
      const g = imageData.data[idx + 1];
      const b = imageData.data[idx + 2];
      const a = imageData.data[idx + 3];
      if (a < PNG_ALPHA_THRESHOLD) {
        row.push('');
      } else {
        row.push(
          '#' +
            r.toString(16).padStart(2, '0') +
            g.toString(16).padStart(2, '0') +
            b.toString(16).padStart(2, '0')
        );
      }
    }
    sprite.push(row);
  }
  return sprite;
}

/**
 * Load all 6 character sprite sheets from /assets/characters/char_N.png.
 * Each PNG is 112x96 (7 frames x 16px wide, 3 direction rows x 32px tall).
 * Stores the result internally for getLoadedCharacterSprites() to use.
 */
export async function loadCharacterSpriteSheets(): Promise<void> {
  try {
    const characters: LoadedCharacterData[] = [];

    for (let ci = 0; ci < CHAR_COUNT; ci++) {
      const src = '/assets/characters/char_' + ci + '.png';
      const imageData = await loadImageData(src);

      const charData: LoadedCharacterData = { down: [], up: [], right: [] };

      for (let dirIdx = 0; dirIdx < DIR_ROWS.length; dirIdx++) {
        const dir = DIR_ROWS[dirIdx];
        const rowOffsetY = dirIdx * CHAR_FRAME_H;
        const frames: SpriteData[] = [];

        for (let f = 0; f < CHAR_FRAMES_PER_ROW; f++) {
          const frameOffsetX = f * CHAR_FRAME_W;
          frames.push(extractFrame(imageData, frameOffsetX, rowOffsetY, CHAR_FRAME_W, CHAR_FRAME_H));
        }
        charData[dir] = frames;
      }
      characters.push(charData);
    }

    loadedCharacters = characters;
    console.log('[SpriteSheetLoader] Loaded ' + characters.length + ' character sprite sheets');
  } catch (err) {
    console.warn('[SpriteSheetLoader] Failed to load sprite sheets, using fallback:', err);
    loadedCharacters = null;
  }
}

/**
 * Get CharacterSprites for a given palette index from loaded PNG sprite sheets.
 * Returns null if PNGs haven't been loaded yet.
 *
 * Frame mapping (per direction row):
 *   0,1,2 = walk frames (cycle: 0,1,2,1)
 *   3,4   = typing frames
 *   5,6   = reading frames (mapped to typing for now)
 */
export function getLoadedCharacterSprites(paletteIndex: number): CharacterSprites | null {
  if (!loadedCharacters) return null;

  const char = loadedCharacters[paletteIndex % loadedCharacters.length];
  const d = char.down;
  const u = char.up;
  const rt = char.right;
  const flip = flipSpriteHorizontal;

  return {
    walk: {
      [Direction.DOWN]: [d[0], d[1], d[2], d[1]],
      [Direction.UP]: [u[0], u[1], u[2], u[1]],
      [Direction.RIGHT]: [rt[0], rt[1], rt[2], rt[1]],
      [Direction.LEFT]: [flip(rt[0]), flip(rt[1]), flip(rt[2]), flip(rt[1])],
    },
    typing: {
      [Direction.DOWN]: [d[3], d[4]],
      [Direction.UP]: [u[3], u[4]],
      [Direction.RIGHT]: [rt[3], rt[4]],
      [Direction.LEFT]: [flip(rt[3]), flip(rt[4])],
    },
  };
}
