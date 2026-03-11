import type { SpriteData, FurnitureCatalogEntry } from './types';
import { Direction } from './types';

const _ = '';

// ─── Furniture Sprites ────────────────────────────────────────

/** Square desk: 32x32 pixels (2x2 tiles) */
export const DESK_SPRITE: SpriteData = (() => {
  const W = '#8B6914';
  const L = '#A07828';
  const S = '#B8922E';
  const D = '#6B4E0A';
  const rows: string[][] = [];
  rows.push(new Array(32).fill(_));
  rows.push([_, ...new Array(30).fill(W), _]);
  for (let r = 0; r < 4; r++) rows.push([_, W, ...new Array(28).fill(r < 1 ? L : S), W, _]);
  rows.push([_, D, ...new Array(28).fill(W), D, _]);
  for (let r = 0; r < 6; r++) rows.push([_, W, ...new Array(28).fill(S), W, _]);
  rows.push([_, W, ...new Array(28).fill(L), W, _]);
  for (let r = 0; r < 6; r++) rows.push([_, W, ...new Array(28).fill(S), W, _]);
  rows.push([_, D, ...new Array(28).fill(W), D, _]);
  for (let r = 0; r < 4; r++) rows.push([_, W, ...new Array(28).fill(r > 2 ? L : S), W, _]);
  rows.push([_, ...new Array(30).fill(W), _]);
  for (let r = 0; r < 4; r++) {
    const row = new Array(32).fill(_) as string[];
    row[1] = D; row[2] = D; row[29] = D; row[30] = D;
    rows.push(row);
  }
  rows.push(new Array(32).fill(_));
  rows.push(new Array(32).fill(_));
  return rows;
})();

/** Plant in pot: 16x24 */
export const PLANT_SPRITE: SpriteData = (() => {
  const G = '#3D8B37';
  const D = '#2D6B27';
  const T = '#6B4E0A';
  const P = '#8B5E3C';
  const rows: string[][] = [];
  for (let i = 0; i < 4; i++) rows.push(new Array(16).fill(_));
  rows.push([_,_,_,_,_,_,_,G,G,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,G,G,G,G,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,G,G,D,D,G,G,_,_,_,_,_]);
  rows.push([_,_,_,_,G,G,D,G,G,D,G,G,_,_,_,_]);
  rows.push([_,_,_,G,G,D,G,G,G,G,D,G,G,_,_,_]);
  rows.push([_,_,_,G,D,G,G,G,G,G,G,D,G,_,_,_]);
  rows.push([_,_,_,_,G,G,G,D,D,G,G,G,_,_,_,_]);
  rows.push([_,_,_,_,G,G,D,G,G,D,G,G,_,_,_,_]);
  rows.push([_,_,_,_,_,G,G,G,G,G,G,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,G,D,D,G,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,_,T,T,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,_,T,T,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,_,T,T,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_]);
  rows.push([_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_]);
  rows.push([_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,P,P,P,P,_,_,_,_,_,_]);
  for (let i = 0; i < 3; i++) rows.push(new Array(16).fill(_));
  return rows;
})();

/** Bookshelf: 16x32 (1x2 tiles) */
export const BOOKSHELF_SPRITE: SpriteData = (() => {
  const W = '#6B4E0A';
  const S = '#8B6914';
  const B1 = '#CC4444';
  const B2 = '#4488CC';
  const B3 = '#44AA66';
  const B4 = '#AA55CC';
  const B5 = '#CCAA33';
  const rows: string[][] = [];
  rows.push([_,_,W,W,W,W,W,W,W,W,W,W,W,W,_,_]);
  rows.push([_,_,W,S,S,S,S,S,S,S,S,S,S,W,_,_]);
  rows.push([_,_,W,B1,B1,B2,B2,B3,B3,B4,B4,B5,B5,W,_,_]);
  rows.push([_,_,W,B1,B1,B2,B2,B3,B3,B4,B4,B5,B5,W,_,_]);
  rows.push([_,_,W,B1,B1,B2,B2,B3,B3,B4,B4,B5,B5,W,_,_]);
  rows.push([_,_,W,B1,B1,B2,B2,B3,B3,B4,B4,B5,B5,W,_,_]);
  rows.push([_,_,W,W,W,W,W,W,W,W,W,W,W,W,_,_]);
  rows.push([_,_,W,S,S,S,S,S,S,S,S,S,S,W,_,_]);
  rows.push([_,_,W,B3,B3,B5,B5,B1,B1,B2,B2,B4,B4,W,_,_]);
  rows.push([_,_,W,B3,B3,B5,B5,B1,B1,B2,B2,B4,B4,W,_,_]);
  rows.push([_,_,W,B3,B3,B5,B5,B1,B1,B2,B2,B4,B4,W,_,_]);
  rows.push([_,_,W,B3,B3,B5,B5,B1,B1,B2,B2,B4,B4,W,_,_]);
  rows.push([_,_,W,W,W,W,W,W,W,W,W,W,W,W,_,_]);
  rows.push([_,_,W,S,S,S,S,S,S,S,S,S,S,W,_,_]);
  rows.push([_,_,W,B2,B2,B4,B4,B5,B5,B1,B1,B3,B3,W,_,_]);
  rows.push([_,_,W,B2,B2,B4,B4,B5,B5,B1,B1,B3,B3,W,_,_]);
  rows.push([_,_,W,B2,B2,B4,B4,B5,B5,B1,B1,B3,B3,W,_,_]);
  rows.push([_,_,W,B2,B2,B4,B4,B5,B5,B1,B1,B3,B3,W,_,_]);
  rows.push([_,_,W,W,W,W,W,W,W,W,W,W,W,W,_,_]);
  for (let i = 0; i < 13; i++) {
    const row = new Array(16).fill(_) as string[];
    row[2] = W; row[3] = W; row[12] = W; row[13] = W;
    rows.push(row);
  }
  return rows;
})();

/** Water cooler: 16x16 */
export const COOLER_SPRITE: SpriteData = (() => {
  const M = '#AAAAAA';
  const L = '#CCCCCC';
  const D = '#666666';
  const B = '#88BBDD';
  const rows: string[][] = [];
  rows.push(new Array(16).fill(_));
  rows.push([_,_,_,_,_,_,B,B,B,B,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,B,B,B,B,B,B,_,_,_,_,_]);
  rows.push([_,_,_,_,_,B,B,B,B,B,B,_,_,_,_,_]);
  rows.push([_,_,_,_,_,B,B,B,B,B,B,_,_,_,_,_]);
  rows.push([_,_,_,_,_,M,M,M,M,M,M,_,_,_,_,_]);
  rows.push([_,_,_,_,_,L,L,L,L,L,L,_,_,_,_,_]);
  rows.push([_,_,_,_,_,L,L,L,L,L,L,_,_,_,_,_]);
  rows.push([_,_,_,_,_,L,L,D,D,L,L,_,_,_,_,_]);
  rows.push([_,_,_,_,_,L,L,L,L,L,L,_,_,_,_,_]);
  rows.push([_,_,_,_,_,L,L,L,L,L,L,_,_,_,_,_]);
  rows.push([_,_,_,_,_,D,D,D,D,D,D,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,D,_,_,D,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,D,_,_,D,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,D,D,D,D,D,D,_,_,_,_,_]);
  rows.push(new Array(16).fill(_));
  return rows;
})();

/** Whiteboard: 32x16 (2x1 tiles) */
export const WHITEBOARD_SPRITE: SpriteData = (() => {
  const F = '#DDDDDD';
  const B = '#888888';
  const E = '#AAAAAA';
  const rows: string[][] = [];
  rows.push(new Array(32).fill(_));
  rows.push([_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,_]);
  for (let i = 0; i < 10; i++) {
    rows.push([_,_,B,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,B,_,_]);
  }
  rows.push([_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,_]);
  rows.push([_,_,_,_,_,_,_,_,_,_,_,_,_,_,E,E,E,E,_,_,_,_,_,_,_,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,_,_,_,_,_,_,_,_,E,_,_,E,_,_,_,_,_,_,_,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,_,_,_,_,_,_,_,_,E,_,_,E,_,_,_,_,_,_,_,_,_,_,_,_,_,_]);
  rows.push(new Array(32).fill(_));
  return rows;
})();

/** Chair: 16x16 */
export const CHAIR_SPRITE: SpriteData = (() => {
  const W = '#6B4E0A';
  const S = '#8B6914';
  const P = '#994444';
  const rows: string[][] = [];
  for (let i = 0; i < 3; i++) rows.push(new Array(16).fill(_));
  rows.push([_,_,_,_,W,W,W,W,W,W,W,W,_,_,_,_]);
  rows.push([_,_,_,_,W,P,P,P,P,P,P,W,_,_,_,_]);
  rows.push([_,_,_,_,W,P,P,P,P,P,P,W,_,_,_,_]);
  rows.push([_,_,_,_,W,P,P,P,P,P,P,W,_,_,_,_]);
  rows.push([_,_,_,_,W,P,P,P,P,P,P,W,_,_,_,_]);
  rows.push([_,_,_,_,S,S,S,S,S,S,S,S,_,_,_,_]);
  rows.push([_,_,_,_,S,P,P,P,P,P,P,S,_,_,_,_]);
  rows.push([_,_,_,_,S,P,P,P,P,P,P,S,_,_,_,_]);
  rows.push([_,_,_,_,S,S,S,S,S,S,S,S,_,_,_,_]);
  rows.push([_,_,_,_,_,W,_,_,_,_,W,_,_,_,_,_]);
  rows.push([_,_,_,_,_,W,_,_,_,_,W,_,_,_,_,_]);
  rows.push([_,_,_,_,W,W,W,W,W,W,W,W,_,_,_,_]);
  rows.push(new Array(16).fill(_));
  return rows;
})();

// ─── Character Palettes ───────────────────────────────────────

export const CHARACTER_PALETTES = [
  { skin: '#FFCC99', shirt: '#E2725B', pants: '#443322', hair: '#553322', shoes: '#222222' }, // World Builder (terracotta)
  { skin: '#FFCC99', shirt: '#4A7C7A', pants: '#334444', hair: '#FFD700', shoes: '#222222' }, // Pathfinder (teal)
  { skin: '#DEB887', shirt: '#6B4E71', pants: '#443355', hair: '#222222', shoes: '#333333' }, // Strategist (plum)
  { skin: '#FFCC99', shirt: '#DC2626', pants: '#333333', hair: '#111111', shoes: '#222222' }, // Chaos Engine (red)
  { skin: '#DEB887', shirt: '#EBC06D', pants: '#444433', hair: '#553322', shoes: '#333333' }, // Moral Weaver (honey)
  { skin: '#FFCC99', shirt: '#1A1A1A', pants: '#222222', hair: '#AA4422', shoes: '#333333' }, // Storyteller (charcoal)
] as const;

interface CharPalette {
  skin: string;
  shirt: string;
  pants: string;
  hair: string;
  shoes: string;
}

const H = 'hair';
const K = 'skin';
const S = 'shirt';
const P = 'pants';
const O = 'shoes';
const E = '#FFFFFF';

type TemplateCell = typeof H | typeof K | typeof S | typeof P | typeof O | typeof E | typeof _;

function resolveTemplate(template: TemplateCell[][], palette: CharPalette): SpriteData {
  return template.map((row) =>
    row.map((cell) => {
      if (cell === _) return '';
      if (cell === E) return E;
      if (cell === H) return palette.hair;
      if (cell === K) return palette.skin;
      if (cell === S) return palette.shirt;
      if (cell === P) return palette.pants;
      if (cell === O) return palette.shoes;
      return cell;
    }),
  );
}

// ─── Character Templates (16x24 per frame) ────────────────────

// Walk DOWN frame 1 (left step)
const WALK_DOWN_1: TemplateCell[][] = [
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,H,H,H,H,_,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,K,E,K,K,E,K,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,_,S,S,S,S,_,_,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,S,S,S,S,S,S,S,S,_,_,_,_],
  [_,_,_,_,S,S,S,S,S,S,S,S,_,_,_,_],
  [_,_,_,_,K,S,S,S,S,S,S,K,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,_,_,P,P,P,P,_,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,_,P,P,_,_,_,_,P,P,_,_,_,_],
  [_,_,_,_,P,P,_,_,_,_,P,P,_,_,_,_],
  [_,_,_,_,O,O,_,_,_,_,_,O,O,_,_,_],
  [_,_,_,_,O,O,_,_,_,_,_,O,O,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
];

// Walk DOWN frame 2 (standing neutral)
const WALK_DOWN_2: TemplateCell[][] = [
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,H,H,H,H,_,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,K,E,K,K,E,K,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,_,S,S,S,S,_,_,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,S,S,S,S,S,S,S,S,_,_,_,_],
  [_,_,_,_,S,S,S,S,S,S,S,S,_,_,_,_],
  [_,_,_,_,K,S,S,S,S,S,S,K,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,_,_,P,P,P,P,_,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,_,_,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,_,_,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,_,_,P,P,_,_,_,_,_],
  [_,_,_,_,_,O,O,_,_,O,O,_,_,_,_,_],
  [_,_,_,_,_,O,O,_,_,O,O,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
];

// Walk DOWN frame 3 (right step - mirror of frame 1)
const WALK_DOWN_3: TemplateCell[][] = [
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,H,H,H,H,_,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,K,E,K,K,E,K,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,_,S,S,S,S,_,_,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,S,S,S,S,S,S,S,S,_,_,_,_],
  [_,_,_,_,S,S,S,S,S,S,S,S,_,_,_,_],
  [_,_,_,_,K,S,S,S,S,S,S,K,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,_,_,P,P,P,P,_,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,O,O,_,_,_,_,_,_,P,P,_,_,_],
  [_,_,_,O,O,_,_,_,_,_,_,P,P,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,O,O,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,O,O,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
];

// Typing DOWN frame 1 (arms at keyboard)
const TYPE_DOWN_1: TemplateCell[][] = [
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,H,H,H,H,_,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,K,E,K,K,E,K,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,_,S,S,S,S,_,_,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,S,S,S,S,S,S,S,S,_,_,_,_],
  [_,_,_,K,K,S,S,S,S,S,S,K,K,_,_,_],
  [_,_,_,_,K,S,S,S,S,S,S,K,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,_,_,P,P,P,P,_,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,_,_,P,P,_,_,_,_,_],
  [_,_,_,_,_,O,O,_,_,O,O,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
];

// Typing DOWN frame 2 (arms slightly shifted)
const TYPE_DOWN_2: TemplateCell[][] = [
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,H,H,H,H,_,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,K,E,K,K,E,K,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,_,S,S,S,S,_,_,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,S,S,S,S,S,S,S,S,_,_,_,_],
  [_,_,_,_,K,S,S,S,S,S,S,K,K,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,K,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,_,_,P,P,P,P,_,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,_,_,P,P,_,_,_,_,_],
  [_,_,_,_,_,O,O,_,_,O,O,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
];

// Walk UP frame 1
const WALK_UP_1: TemplateCell[][] = [
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,H,H,H,H,_,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,K,H,H,K,H,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,_,S,S,S,S,_,_,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,S,S,S,S,S,S,S,S,_,_,_,_],
  [_,_,_,_,S,S,S,S,S,S,S,S,_,_,_,_],
  [_,_,_,_,K,S,S,S,S,S,S,K,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,_,_,P,P,P,P,_,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,_,P,P,_,_,_,_,P,P,_,_,_,_],
  [_,_,_,_,P,P,_,_,_,_,P,P,_,_,_,_],
  [_,_,_,O,O,_,_,_,_,_,_,O,O,_,_,_],
  [_,_,_,O,O,_,_,_,_,_,_,O,O,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
];

// Walk UP frame 2 (standing)
const WALK_UP_2: TemplateCell[][] = [
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,H,H,H,H,_,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,K,H,H,K,H,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,_,S,S,S,S,_,_,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,S,S,S,S,S,S,S,S,_,_,_,_],
  [_,_,_,_,S,S,S,S,S,S,S,S,_,_,_,_],
  [_,_,_,_,K,S,S,S,S,S,S,K,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,_,_,P,P,P,P,_,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,_,_,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,_,_,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,_,_,P,P,_,_,_,_,_],
  [_,_,_,_,_,O,O,_,_,O,O,_,_,_,_,_],
  [_,_,_,_,_,O,O,_,_,O,O,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
];

// Walk UP frame 3 (mirror of frame 1)
const WALK_UP_3: TemplateCell[][] = [
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,H,H,H,H,_,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,K,H,H,K,H,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,_,S,S,S,S,_,_,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,S,S,S,S,S,S,S,S,_,_,_,_],
  [_,_,_,_,S,S,S,S,S,S,S,S,_,_,_,_],
  [_,_,_,_,K,S,S,S,S,S,S,K,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,_,_,P,P,P,P,_,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,P,P,_,_,_,_,_,_,O,O,_,_,_],
  [_,_,_,P,P,_,_,_,_,_,_,O,O,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,O,O,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,O,O,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
];

// Typing UP frames (same body, arms at keyboard but from behind)
const TYPE_UP_1: TemplateCell[][] = [
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,H,H,H,H,_,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,K,H,H,K,H,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,_,S,S,S,S,_,_,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,S,S,S,S,S,S,S,S,_,_,_,_],
  [_,_,_,K,K,S,S,S,S,S,S,K,K,_,_,_],
  [_,_,_,_,K,S,S,S,S,S,S,K,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,_,_,P,P,P,P,_,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,_,_,P,P,_,_,_,_,_],
  [_,_,_,_,_,O,O,_,_,O,O,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
];

const TYPE_UP_2: TemplateCell[][] = [
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,H,H,H,H,_,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,K,H,H,K,H,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,K,_,_,_,_,_],
  [_,_,_,_,_,_,S,S,S,S,_,_,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,S,S,S,S,S,S,S,S,_,_,_,_],
  [_,_,_,_,K,S,S,S,S,S,S,K,K,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,K,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,_,_,P,P,P,P,_,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,_,_,P,P,_,_,_,_,_],
  [_,_,_,_,_,O,O,_,_,O,O,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
];

// Walk RIGHT frame 1
const WALK_RIGHT_1: TemplateCell[][] = [
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,H,H,H,H,_,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,H,_,_,_,_,_],
  [_,_,_,_,_,K,K,E,K,K,H,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,_,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,_,_,_,_,_,_],
  [_,_,_,_,_,_,S,S,S,S,_,_,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,K,S,S,S,S,S,S,K,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,K,_,_,_,_],
  [_,_,_,_,_,_,S,S,S,S,_,_,_,_,_,_],
  [_,_,_,_,_,_,P,P,P,P,_,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,_,P,P,_,_,_,_,_,_],
  [_,_,_,_,P,P,_,_,_,P,P,_,_,_,_,_],
  [_,_,_,_,P,P,_,_,_,P,P,_,_,_,_,_],
  [_,_,_,_,O,O,_,_,_,_,O,O,_,_,_,_],
  [_,_,_,_,O,O,_,_,_,_,O,O,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
];

// Walk RIGHT frame 2 (standing)
const WALK_RIGHT_2: TemplateCell[][] = [
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,H,H,H,H,_,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,H,H,H,H,H,H,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,H,_,_,_,_,_],
  [_,_,_,_,_,K,K,E,K,K,H,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,_,_,_,_,_,_],
  [_,_,_,_,_,K,K,K,K,K,_,_,_,_,_,_],
  [_,_,_,_,_,_,S,S,S,S,_,_,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,_,_,_,_,_],
  [_,_,_,_,K,S,S,S,S,S,S,K,_,_,_,_],
  [_,_,_,_,_,S,S,S,S,S,S,K,_,_,_,_],
  [_,_,_,_,_,_,S,S,S,S,_,_,_,_,_,_],
  [_,_,_,_,_,_,P,P,P,P,_,_,_,_,_,_],
  [_,_,_,_,_,P,P,P,P,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,_,_,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,_,_,P,P,_,_,_,_,_],
  [_,_,_,_,_,P,P,_,_,P,P,_,_,_,_,_],
  [_,_,_,_,_,O,O,_,_,O,O,_,_,_,_,_],
  [_,_,_,_,_,O,O,_,_,O,O,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
  [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
];

// Type RIGHT frames (side view with arms forward, reuse typing down templates)
const TYPE_RIGHT_1: TemplateCell[][] = TYPE_DOWN_1.map(row => [...row]);
const TYPE_RIGHT_2: TemplateCell[][] = TYPE_DOWN_2.map(row => [...row]);

// ─── Character Sprite Assembly ────────────────────────────────

export interface CharacterSprites {
  walk: Record<Direction, SpriteData[]>;
  typing: Record<Direction, SpriteData[]>;
}

const spriteCache = new Map<number, CharacterSprites>();

export function getCharacterSprites(paletteIndex: number): CharacterSprites {
  const cached = spriteCache.get(paletteIndex);
  if (cached) return cached;

  const pal = CHARACTER_PALETTES[paletteIndex % CHARACTER_PALETTES.length];

  // Resolve walk templates
  const walkDown = [
    resolveTemplate(WALK_DOWN_1, pal),
    resolveTemplate(WALK_DOWN_2, pal),
    resolveTemplate(WALK_DOWN_3, pal),
    resolveTemplate(WALK_DOWN_2, pal),
  ];
  const walkUp = [
    resolveTemplate(WALK_UP_1, pal),
    resolveTemplate(WALK_UP_2, pal),
    resolveTemplate(WALK_UP_3, pal),
    resolveTemplate(WALK_UP_2, pal),
  ];
  const walkRight = [
    resolveTemplate(WALK_RIGHT_1, pal),
    resolveTemplate(WALK_RIGHT_2, pal),
    resolveTemplate(WALK_RIGHT_1, pal),
    resolveTemplate(WALK_RIGHT_2, pal),
  ];
  const walkLeft = walkRight.map(frame => frame.map(row => [...row].reverse()));

  // Resolve typing templates
  const typeDown = [resolveTemplate(TYPE_DOWN_1, pal), resolveTemplate(TYPE_DOWN_2, pal)];
  const typeUp = [resolveTemplate(TYPE_UP_1, pal), resolveTemplate(TYPE_UP_2, pal)];
  const typeRight = [resolveTemplate(TYPE_RIGHT_1, pal), resolveTemplate(TYPE_RIGHT_2, pal)];
  const typeLeft = typeRight.map(frame => frame.map(row => [...row].reverse()));

  const sprites: CharacterSprites = {
    walk: {
      [Direction.DOWN]: walkDown,
      [Direction.UP]: walkUp,
      [Direction.RIGHT]: walkRight,
      [Direction.LEFT]: walkLeft,
    },
    typing: {
      [Direction.DOWN]: typeDown,
      [Direction.UP]: typeUp,
      [Direction.RIGHT]: typeRight,
      [Direction.LEFT]: typeLeft,
    },
  };

  spriteCache.set(paletteIndex, sprites);
  return sprites;
}

// ─── Furniture Catalog ────────────────────────────────────────

export const FURNITURE_CATALOG: FurnitureCatalogEntry[] = [
  { type: 'desk', label: 'Desk', footprintW: 2, footprintH: 2, sprite: DESK_SPRITE, isDesk: true, category: 'desks' },
  { type: 'bookshelf', label: 'Bookshelf', footprintW: 1, footprintH: 2, sprite: BOOKSHELF_SPRITE, isDesk: false, category: 'storage' },
  { type: 'plant', label: 'Plant', footprintW: 1, footprintH: 1, sprite: PLANT_SPRITE, isDesk: false, category: 'decor' },
  { type: 'cooler', label: 'Cooler', footprintW: 1, footprintH: 1, sprite: COOLER_SPRITE, isDesk: false, category: 'misc' },
  { type: 'whiteboard', label: 'Whiteboard', footprintW: 2, footprintH: 1, sprite: WHITEBOARD_SPRITE, isDesk: false, category: 'decor' },
  { type: 'chair', label: 'Chair', footprintW: 1, footprintH: 1, sprite: CHAIR_SPRITE, isDesk: false, category: 'chairs' },
];

export function getCatalogEntry(type: string): FurnitureCatalogEntry | undefined {
  return FURNITURE_CATALOG.find(e => e.type === type);
}


/** Gear bubble (working) - white bg, gray gear icon */
export const BUBBLE_GEAR_SPRITE: SpriteData = [
  ['', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', ''],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#888888', '#888888', '#888888', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#888888', '#FFFFFF', '#888888', '#FFFFFF', '#888888', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#888888', '#888888', '#888888', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#888888', '#FFFFFF', '#888888', '#FFFFFF', '#888888', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#888888', '#888888', '#888888', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['', '#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#CCCCCC', ''],
  ['', '', '', '', '#CCCCCC', '', '', '', ''],
  ['', '', '', '', '#CCCCCC', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
];

/** Lightbulb bubble (idea) - white bg, yellow bulb */
export const BUBBLE_LIGHTBULB_SPRITE: SpriteData = [
  ['', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', ''],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFD700', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFD700', '#FFD700', '#FFD700', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFD700', '#FFD700', '#FFD700', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFD700', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#888888', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['', '#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#CCCCCC', ''],
  ['', '', '', '', '#CCCCCC', '', '', '', ''],
  ['', '', '', '', '#CCCCCC', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
];

/** Checkmark bubble (done) - white bg, green check */
export const BUBBLE_CHECK_SPRITE: SpriteData = [
  ['', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', ''],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#44BB66', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#44BB66', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#44BB66', '#FFFFFF', '#44BB66', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#44BB66', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['', '#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#CCCCCC', ''],
  ['', '', '', '', '#CCCCCC', '', '', '', ''],
  ['', '', '', '', '#CCCCCC', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
];

/** Dots bubble (thinking) - white bg, gray dots */
export const BUBBLE_DOTS_SPRITE: SpriteData = [
  ['', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', ''],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#888888', '#FFFFFF', '#888888', '#FFFFFF', '#888888', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#CCCCCC'],
  ['', '#CCCCCC', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#CCCCCC', ''],
  ['', '', '', '', '#CCCCCC', '', '', '', ''],
  ['', '', '', '', '#CCCCCC', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
];

export function getBubbleSprite(type: string): SpriteData | null {
  switch (type) {
    case 'gear': return BUBBLE_GEAR_SPRITE;
    case 'lightbulb': return BUBBLE_LIGHTBULB_SPRITE;
    case 'check': return BUBBLE_CHECK_SPRITE;
    case 'dots': return BUBBLE_DOTS_SPRITE;
    default: return null;
  }
}

// Whiteboard Variant Sprites

/** Whiteboard with some progress marks: 32x16 (2x1 tiles) */
export const WHITEBOARD_PROGRESS_SPRITE: SpriteData = (() => {
  const F = '#DDDDDD';
  const B = '#888888';
  const E = '#AAAAAA';
  const R = '#CC4444';
  const BL = '#4488CC';
  const rows: string[][] = [];
  rows.push(new Array(32).fill(_));
  rows.push([_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,_]);
  rows.push([_,_,B,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,B,_,_]);
  rows.push([_,_,B,F,F,R,R,R,R,R,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,B,_,_]);
  rows.push([_,_,B,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,B,_,_]);
  rows.push([_,_,B,F,F,F,F,F,F,F,F,BL,BL,BL,BL,BL,BL,F,F,F,F,F,F,F,F,F,F,F,F,B,_,_]);
  rows.push([_,_,B,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,B,_,_]);
  rows.push([_,_,B,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,B,_,_]);
  rows.push([_,_,B,F,F,F,F,R,R,R,R,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,B,_,_]);
  rows.push([_,_,B,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,B,_,_]);
  rows.push([_,_,B,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,B,_,_]);
  rows.push([_,_,B,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,B,_,_]);
  rows.push([_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,_]);
  rows.push([_,_,_,_,_,_,_,_,_,_,_,_,_,_,E,E,E,E,_,_,_,_,_,_,_,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,_,_,_,_,_,_,_,_,E,_,_,E,_,_,_,_,_,_,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,_,_,_,_,_,_,_,_,E,_,_,E,_,_,_,_,_,_,_,_,_,_,_,_,_]);
  return rows;
})();

/** Whiteboard fully covered with marks: 32x16 (2x1 tiles) */
export const WHITEBOARD_FULL_SPRITE: SpriteData = (() => {
  const F = '#DDDDDD';
  const B = '#888888';
  const E = '#AAAAAA';
  const R = '#CC4444';
  const BL = '#4488CC';
  const G = '#44AA66';
  const rows: string[][] = [];
  rows.push(new Array(32).fill(_));
  rows.push([_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,_]);
  rows.push([_,_,B,F,R,R,R,R,R,R,F,F,BL,BL,BL,BL,F,F,G,G,G,G,F,F,F,R,R,R,F,B,_,_]);
  rows.push([_,_,B,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,B,_,_]);
  rows.push([_,_,B,F,BL,BL,BL,BL,BL,F,F,R,R,R,R,R,R,F,F,BL,BL,BL,BL,F,F,F,F,F,F,B,_,_]);
  rows.push([_,_,B,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,B,_,_]);
  rows.push([_,_,B,F,R,R,R,F,F,G,G,G,G,G,F,F,BL,BL,BL,BL,F,F,R,R,R,R,F,F,F,B,_,_]);
  rows.push([_,_,B,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,B,_,_]);
  rows.push([_,_,B,F,G,G,G,G,F,F,BL,BL,BL,BL,BL,F,F,R,R,R,R,R,F,F,G,G,G,F,F,B,_,_]);
  rows.push([_,_,B,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,B,_,_]);
  rows.push([_,_,B,F,BL,BL,F,F,R,R,R,R,F,F,G,G,G,G,G,F,F,BL,BL,BL,F,F,R,R,F,B,_,_]);
  rows.push([_,_,B,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,B,_,_]);
  rows.push([_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,_]);
  rows.push([_,_,_,_,_,_,_,_,_,_,_,_,_,_,E,E,E,E,_,_,_,_,_,_,_,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,_,_,_,_,_,_,_,_,E,_,_,E,_,_,_,_,_,_,_,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,_,_,_,_,_,_,_,_,E,_,_,E,_,_,_,_,_,_,_,_,_,_,_,_,_]);
  return rows;
})();
