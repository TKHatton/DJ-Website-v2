import type { SpriteData, FurnitureCatalogEntry } from './types';
import { Direction } from './types';

const _ = '';

// ─── Furniture Sprites ────────────────────────────────────────

/** Square desk: 32x32 pixels (2x2 tiles) - 3/4 perspective with front panel */
export const DESK_SPRITE: SpriteData = (() => {
  const W = '#8B6914'; // wood edge
  const L = '#A07828'; // lighter wood
  const S = '#B8922E'; // surface
  const D = '#6B4E0A'; // dark edge/shadow
  const F = '#7A5A10'; // front panel
  const Fd = '#5C4308'; // front panel dark
  const Fl = '#9A7420'; // front panel highlight
  const rows: string[][] = [];
  // Top surface (visible from above)
  rows.push(new Array(32).fill(_));
  rows.push([_, ...new Array(30).fill(W), _]);
  rows.push([_, W, ...new Array(28).fill(L), W, _]);
  for (let r = 0; r < 3; r++) {
    rows.push([_, W, ...new Array(28).fill(S), W, _]);
  }
  rows.push([_, D, ...new Array(28).fill(W), D, _]);
  for (let r = 0; r < 4; r++) {
    rows.push([_, W, ...new Array(28).fill(S), W, _]);
  }
  rows.push([_, W, ...new Array(28).fill(L), W, _]);
  for (let r = 0; r < 4; r++) {
    rows.push([_, W, ...new Array(28).fill(S), W, _]);
  }
  // Front edge transition (thick lip)
  rows.push([_, D, ...new Array(28).fill(D), D, _]);
  rows.push([_, D, ...new Array(28).fill(W), D, _]);
  // Front panel face (visible side of desk)
  rows.push([_, D, Fl, ...new Array(26).fill(F), Fl, D, _]);
  for (let r = 0; r < 3; r++) {
    rows.push([_, D, ...new Array(28).fill(F), D, _]);
  }
  rows.push([_, D, ...new Array(28).fill(Fd), D, _]);
  // Legs
  rows.push([_, D, D, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, D, D, _]);
  rows.push([_, D, D, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, D, D, _]);
  rows.push(new Array(32).fill(_));
  rows.push(new Array(32).fill(_));
  return rows;
})();

/** Plant in pot: 16x24 */
export const PLANT_SPRITE: SpriteData = (() => {
  const G = '#3D8B37';
  const D = '#2D6B27';
  const T = '#6B4E0A';
  const P = '#B85C3A';
  const R = '#8B4422';
  return [
    [_, _, _, _, _, _, G, G, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, G, G, G, G, _, _, _, _, _, _, _],
    [_, _, _, _, G, G, D, G, G, G, _, _, _, _, _, _],
    [_, _, _, G, G, D, G, G, D, G, G, _, _, _, _, _],
    [_, _, G, G, G, G, G, G, G, G, G, G, _, _, _, _],
    [_, G, G, D, G, G, G, G, G, G, D, G, G, _, _, _],
    [_, G, G, G, G, D, G, G, D, G, G, G, G, _, _, _],
    [_, _, G, G, G, G, G, G, G, G, G, G, _, _, _, _],
    [_, _, _, G, G, G, D, G, G, G, G, _, _, _, _, _],
    [_, _, _, _, G, G, G, G, G, G, _, _, _, _, _, _],
    [_, _, _, _, _, G, G, G, G, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, T, T, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, T, T, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, T, T, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, R, R, R, R, R, _, _, _, _, _, _],
    [_, _, _, _, R, P, P, P, P, P, R, _, _, _, _, _],
    [_, _, _, _, R, P, P, P, P, P, R, _, _, _, _, _],
    [_, _, _, _, R, P, P, P, P, P, R, _, _, _, _, _],
    [_, _, _, _, R, P, P, P, P, P, R, _, _, _, _, _],
    [_, _, _, _, R, P, P, P, P, P, R, _, _, _, _, _],
    [_, _, _, _, R, P, P, P, P, P, R, _, _, _, _, _],
    [_, _, _, _, _, R, P, P, P, R, _, _, _, _, _, _],
    [_, _, _, _, _, _, R, R, R, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ];
})();

/** Bookshelf: 16x32 (1x2 tiles) */
export const BOOKSHELF_SPRITE: SpriteData = (() => {
  const W = '#8B6914';
  const D = '#6B4E0A';
  const R = '#CC4444';
  const B = '#4477AA';
  const G = '#44AA66';
  const Y = '#CCAA33';
  const P = '#9955AA';
  return [
    [_, W, W, W, W, W, W, W, W, W, W, W, W, W, W, _],
    [W, D, D, D, D, D, D, D, D, D, D, D, D, D, D, W],
    [W, D, R, R, B, B, G, G, Y, Y, R, R, B, B, D, W],
    [W, D, R, R, B, B, G, G, Y, Y, R, R, B, B, D, W],
    [W, D, R, R, B, B, G, G, Y, Y, R, R, B, B, D, W],
    [W, D, R, R, B, B, G, G, Y, Y, R, R, B, B, D, W],
    [W, D, R, R, B, B, G, G, Y, Y, R, R, B, B, D, W],
    [W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W],
    [W, D, D, D, D, D, D, D, D, D, D, D, D, D, D, W],
    [W, D, P, P, Y, Y, B, B, G, G, P, P, R, R, D, W],
    [W, D, P, P, Y, Y, B, B, G, G, P, P, R, R, D, W],
    [W, D, P, P, Y, Y, B, B, G, G, P, P, R, R, D, W],
    [W, D, P, P, Y, Y, B, B, G, G, P, P, R, R, D, W],
    [W, D, P, P, Y, Y, B, B, G, G, P, P, R, R, D, W],
    [W, D, P, P, Y, Y, B, B, G, G, P, P, R, R, D, W],
    [W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W],
    [W, D, D, D, D, D, D, D, D, D, D, D, D, D, D, W],
    [W, D, G, G, R, R, P, P, B, B, Y, Y, G, G, D, W],
    [W, D, G, G, R, R, P, P, B, B, Y, Y, G, G, D, W],
    [W, D, G, G, R, R, P, P, B, B, Y, Y, G, G, D, W],
    [W, D, G, G, R, R, P, P, B, B, Y, Y, G, G, D, W],
    [W, D, G, G, R, R, P, P, B, B, Y, Y, G, G, D, W],
    [W, D, G, G, R, R, P, P, B, B, Y, Y, G, G, D, W],
    [W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W],
    [W, D, D, D, D, D, D, D, D, D, D, D, D, D, D, W],
    [W, D, D, D, D, D, D, D, D, D, D, D, D, D, D, W],
    [W, D, D, D, D, D, D, D, D, D, D, D, D, D, D, W],
    [W, D, D, D, D, D, D, D, D, D, D, D, D, D, D, W],
    [W, D, D, D, D, D, D, D, D, D, D, D, D, D, D, W],
    [W, D, D, D, D, D, D, D, D, D, D, D, D, D, D, W],
    [W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W],
    [_, W, W, W, W, W, W, W, W, W, W, W, W, W, W, _],
  ];
})();

/** Water cooler: 16x24 */
export const COOLER_SPRITE: SpriteData = (() => {
  const W = '#CCDDEE';
  const L = '#88BBDD';
  const D = '#999999';
  const B = '#666666';
  return [
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, D, D, D, D, D, D, _, _, _, _, _],
    [_, _, _, _, D, L, L, L, L, L, L, D, _, _, _, _],
    [_, _, _, _, D, L, L, L, L, L, L, D, _, _, _, _],
    [_, _, _, _, D, L, L, L, L, L, L, D, _, _, _, _],
    [_, _, _, _, D, L, L, L, L, L, L, D, _, _, _, _],
    [_, _, _, _, D, L, L, L, L, L, L, D, _, _, _, _],
    [_, _, _, _, _, D, D, D, D, D, D, _, _, _, _, _],
    [_, _, _, _, _, D, W, W, W, W, D, _, _, _, _, _],
    [_, _, _, _, _, D, W, W, W, W, D, _, _, _, _, _],
    [_, _, _, _, _, D, W, W, W, W, D, _, _, _, _, _],
    [_, _, _, _, _, D, W, W, W, W, D, _, _, _, _, _],
    [_, _, _, _, _, D, W, W, W, W, D, _, _, _, _, _],
    [_, _, _, _, D, D, W, W, W, W, D, D, _, _, _, _],
    [_, _, _, _, D, W, W, W, W, W, W, D, _, _, _, _],
    [_, _, _, _, D, W, W, W, W, W, W, D, _, _, _, _],
    [_, _, _, _, D, D, D, D, D, D, D, D, _, _, _, _],
    [_, _, _, _, _, D, B, B, B, B, D, _, _, _, _, _],
    [_, _, _, _, _, D, B, B, B, B, D, _, _, _, _, _],
    [_, _, _, _, _, D, B, B, B, B, D, _, _, _, _, _],
    [_, _, _, _, D, D, B, B, B, B, D, D, _, _, _, _],
    [_, _, _, _, D, B, B, B, B, B, B, D, _, _, _, _],
    [_, _, _, _, D, D, D, D, D, D, D, D, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ];
})();

/** Whiteboard: 32x16 (2x1 tiles) - hangs on wall */
export const WHITEBOARD_SPRITE: SpriteData = (() => {
  const F = '#AAAAAA';
  const W = '#EEEEFF';
  const M = '#CC4444';
  const B = '#4477AA';
  return [
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, _],
    [_, F, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, F, _],
    [_, F, W, W, M, M, M, W, W, W, W, W, B, B, B, B, W, W, W, W, W, W, W, M, W, W, W, W, W, W, F, _],
    [_, F, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, B, B, W, W, M, W, W, W, W, W, W, F, _],
    [_, F, W, W, W, W, M, M, M, M, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, B, B, W, W, F, _],
    [_, F, W, W, W, W, W, W, W, W, W, W, W, B, B, B, W, W, W, W, W, W, W, W, W, W, W, W, W, W, F, _],
    [_, F, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, M, M, M, W, W, W, W, W, W, W, F, _],
    [_, F, W, M, M, W, W, W, W, W, W, W, W, W, W, W, B, B, W, W, W, W, W, W, W, W, W, W, W, W, F, _],
    [_, F, W, W, W, W, W, W, B, B, B, W, W, W, W, W, W, W, W, W, W, W, W, W, M, M, M, M, W, W, F, _],
    [_, F, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, F, _],
    [_, F, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, F, _],
    [_, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ];
})();

/** Chair: 16x16 - top-down desk chair */
export const CHAIR_SPRITE: SpriteData = (() => {
  const W = '#8B6914';
  const D = '#6B4E0A';
  const B = '#5C3D0A';
  const S = '#A07828';
  return [
    [_, _, _, _, _, D, D, D, D, D, D, _, _, _, _, _],
    [_, _, _, _, D, B, B, B, B, B, B, D, _, _, _, _],
    [_, _, _, _, D, B, S, S, S, S, B, D, _, _, _, _],
    [_, _, _, _, D, B, S, S, S, S, B, D, _, _, _, _],
    [_, _, _, _, D, B, S, S, S, S, B, D, _, _, _, _],
    [_, _, _, _, D, B, S, S, S, S, B, D, _, _, _, _],
    [_, _, _, _, D, B, S, S, S, S, B, D, _, _, _, _],
    [_, _, _, _, D, B, S, S, S, S, B, D, _, _, _, _],
    [_, _, _, _, D, B, S, S, S, S, B, D, _, _, _, _],
    [_, _, _, _, D, B, B, B, B, B, B, D, _, _, _, _],
    [_, _, _, _, _, D, D, D, D, D, D, _, _, _, _, _],
    [_, _, _, _, _, _, D, W, W, D, _, _, _, _, _, _],
    [_, _, _, _, _, _, D, W, W, D, _, _, _, _, _, _],
    [_, _, _, _, _, D, D, D, D, D, D, _, _, _, _, _],
    [_, _, _, _, _, D, _, _, _, _, D, _, _, _, _, _],
    [_, _, _, _, _, D, _, _, _, _, D, _, _, _, _, _],
  ];
})();

/** PC monitor: 16x16 - top-down monitor on stand */
export const PC_SPRITE: SpriteData = (() => {
  const F = '#555555';
  const S = '#3A3A5C';
  const B = '#6688CC';
  const D = '#444444';
  return [
    [_, _, _, F, F, F, F, F, F, F, F, F, F, _, _, _],
    [_, _, _, F, S, S, S, S, S, S, S, S, F, _, _, _],
    [_, _, _, F, S, B, B, B, B, B, B, S, F, _, _, _],
    [_, _, _, F, S, B, B, B, B, B, B, S, F, _, _, _],
    [_, _, _, F, S, B, B, B, B, B, B, S, F, _, _, _],
    [_, _, _, F, S, B, B, B, B, B, B, S, F, _, _, _],
    [_, _, _, F, S, B, B, B, B, B, B, S, F, _, _, _],
    [_, _, _, F, S, B, B, B, B, B, B, S, F, _, _, _],
    [_, _, _, F, S, S, S, S, S, S, S, S, F, _, _, _],
    [_, _, _, F, F, F, F, F, F, F, F, F, F, _, _, _],
    [_, _, _, _, _, _, _, D, D, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, D, D, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, D, D, D, D, _, _, _, _, _, _],
    [_, _, _, _, _, D, D, D, D, D, D, _, _, _, _, _],
    [_, _, _, _, _, D, D, D, D, D, D, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ];
})();

/** Laptop: 16x16 - open laptop with blue screen glow */
export const LAPTOP_SPRITE: SpriteData = (() => {
  const F = '#444444'; // frame / body
  const S = '#333333'; // screen bezel
  const B = '#5588CC'; // screen glow
  const L = '#77AAEE'; // screen highlight
  const K = '#555555'; // keyboard
  const T = '#666666'; // trackpad / keys
  return [
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
    [_, _, _, _, S, B, B, B, B, B, B, S, _, _, _, _],
    [_, _, _, _, S, B, L, L, L, L, B, S, _, _, _, _],
    [_, _, _, _, S, B, L, L, L, L, B, S, _, _, _, _],
    [_, _, _, _, S, B, B, B, B, B, B, S, _, _, _, _],
    [_, _, _, _, S, S, S, S, S, S, S, S, _, _, _, _],
    [_, _, _, F, F, F, F, F, F, F, F, F, F, _, _, _],
    [_, _, _, F, K, K, K, K, K, K, K, K, F, _, _, _],
    [_, _, _, F, K, T, T, T, T, T, T, K, F, _, _, _],
    [_, _, _, F, K, K, K, K, K, K, K, K, F, _, _, _],
    [_, _, _, F, F, F, F, F, F, F, F, F, F, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ];
})();

/** Desk lamp: 16x16 - top-down lamp with light cone */
export const LAMP_SPRITE: SpriteData = (() => {
  const Y = '#FFDD55';
  const L = '#FFEE88';
  const D = '#888888';
  const B = '#555555';
  const G = '#FFFFCC';
  return [
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, G, G, G, G, _, _, _, _, _, _],
    [_, _, _, _, _, G, Y, Y, Y, Y, G, _, _, _, _, _],
    [_, _, _, _, G, Y, Y, L, L, Y, Y, G, _, _, _, _],
    [_, _, _, _, Y, Y, L, L, L, L, Y, Y, _, _, _, _],
    [_, _, _, _, Y, Y, L, L, L, L, Y, Y, _, _, _, _],
    [_, _, _, _, _, Y, Y, Y, Y, Y, Y, _, _, _, _, _],
    [_, _, _, _, _, _, D, D, D, D, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, D, D, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, D, D, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, D, D, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, _, D, D, _, _, _, _, _, _, _],
    [_, _, _, _, _, _, D, D, D, D, _, _, _, _, _, _],
    [_, _, _, _, _, B, B, B, B, B, B, _, _, _, _, _],
    [_, _, _, _, _, B, B, B, B, B, B, _, _, _, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  ];
})();

/** Tall plant variant: 16x24 (1x1 tile) - tall narrow trunk with leaf clusters */
export const PLANT_TALL_SPRITE: SpriteData = (() => {
  const Gl = '#5DAF57';
  const Gm = '#3D8B37';
  const Gd = '#2D6B27';
  const T  = '#6B4E0A';
  const Pb = '#8B5E3C';
  const Pr = '#A0714A';
  const Pd = '#6B4226';
  const rows: string[][] = [];
  rows.push(new Array(16).fill(_));
  rows.push(new Array(16).fill(_));
  rows.push([_,_,_,_,_,_,_,Gl,_,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,Gm,Gl,Gm,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Gl,Gd,Gm,Gd,Gl,_,_,_,_,_,_]);
  rows.push([_,_,_,_,Gm,Gd,Gm,Gl,Gm,Gd,Gm,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Gl,Gm,T,Gm,Gl,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,_,T,T,Gm,Gl,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,_,T,Gd,Gm,Gl,Gm,_,_,_,_]);
  rows.push([_,_,_,_,_,_,_,T,T,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,Gl,Gm,Gd,T,T,_,_,_,_,_,_,_]);
  rows.push([_,_,_,Gm,Gl,Gd,Gm,T,_,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,_,T,T,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,_,T,T,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,_,T,T,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,Pr,Pr,Pr,Pr,Pr,Pr,Pr,Pr,_,_,_,_]);
  rows.push([_,_,_,_,Pd,Pb,Pb,Pb,Pb,Pb,Pb,Pd,_,_,_,_]);
  rows.push([_,_,_,_,_,Pb,Pb,Pb,Pb,Pb,Pb,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Pb,Pd,Pb,Pb,Pd,Pb,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Pd,Pb,Pb,Pb,Pb,Pd,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,Pd,Pb,Pb,Pd,_,_,_,_,_,_]);
  rows.push(new Array(16).fill(_));
  rows.push(new Array(16).fill(_));
  rows.push(new Array(16).fill(_));
  return rows;
})();



/** Coffee machine: 16x16 - dark body with chrome accents, red power light, steam */
export const COFFEE_MACHINE_SPRITE: SpriteData = (() => {
  const Db = '#333333';
  const Ch = '#999999';
  const Rd = '#CC4444';
  const Bs = '#555555';
  const St = '#CCCCCC';
  const Dk = '#444444';
  const rows: string[][] = [];
  rows.push(new Array(16).fill(_));
  rows.push([_,_,_,_,_,_,_,St,_,St,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,St,_,_,_,St,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Ch,Ch,Ch,Ch,Ch,Ch,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Db,Db,Db,Db,Db,Db,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Db,Dk,Dk,Dk,Dk,Db,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Db,Dk,Db,Db,Dk,Db,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Db,Dk,Dk,Dk,Dk,Db,Rd,_,_,_,_]);
  rows.push([_,_,_,_,_,Db,Db,Db,Db,Db,Db,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Ch,Db,Db,Db,Db,Ch,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Ch,_,_,_,_,Ch,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Ch,_,Ch,Ch,_,Ch,_,_,_,_,_]);
  rows.push([_,_,_,_,Bs,Bs,Bs,Bs,Bs,Bs,Bs,Bs,_,_,_,_]);
  rows.push([_,_,_,_,Bs,_,_,_,_,_,_,Bs,_,_,_,_]);
  rows.push(new Array(16).fill(_));
  rows.push(new Array(16).fill(_));
  return rows;
})();

/** Server rack: 16x32 (1x2 tiles) - gray body, ventilation lines, LED dots */
export const SERVER_RACK_SPRITE: SpriteData = (() => {
  const Gb = '#555555';
  const Gl = '#666666';
  const Dk = '#333333';
  const Lg = '#44BB66';
  const Am = '#FFAA00';
  const Mt = '#777777';
  const rows: string[][] = [];
  // Top bracket
  rows.push([_,_,Mt,Mt,Mt,Mt,Mt,Mt,Mt,Mt,Mt,Mt,Mt,Mt,_,_]);
  rows.push([_,_,Dk,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Dk,_,_]);
  // Panel 1
  rows.push([_,_,Dk,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Dk,_,_]);
  rows.push([_,_,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,_,_]);
  rows.push([_,_,Dk,Gb,Gb,Gb,Lg,Gb,Gb,Gb,Gb,Am,Gb,Dk,_,_]);
  rows.push([_,_,Dk,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Dk,_,_]);
  rows.push([_,_,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,_,_]);
  // Panel 2
  rows.push([_,_,Dk,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Dk,_,_]);
  rows.push([_,_,Dk,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Dk,_,_]);
  rows.push([_,_,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,_,_]);
  rows.push([_,_,Dk,Gb,Am,Gb,Gb,Lg,Gb,Gb,Gb,Gb,Gb,Dk,_,_]);
  rows.push([_,_,Dk,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Dk,_,_]);
  // Panel 3
  rows.push([_,_,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,_,_]);
  rows.push([_,_,Dk,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Dk,_,_]);
  rows.push([_,_,Dk,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Dk,_,_]);
  rows.push([_,_,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,_,_]);
  rows.push([_,_,Dk,Gb,Lg,Gb,Gb,Gb,Am,Gb,Gb,Lg,Gb,Dk,_,_]);
  rows.push([_,_,Dk,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Dk,_,_]);
  // Panel 4
  rows.push([_,_,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,_,_]);
  rows.push([_,_,Dk,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Dk,_,_]);
  rows.push([_,_,Dk,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Dk,_,_]);
  rows.push([_,_,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,_,_]);
  rows.push([_,_,Dk,Gb,Am,Gb,Lg,Gb,Gb,Gb,Am,Gb,Gb,Dk,_,_]);
  rows.push([_,_,Dk,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Dk,_,_]);
  // Bottom
  rows.push([_,_,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,_,_]);
  rows.push([_,_,Dk,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Gb,Dk,_,_]);
  rows.push([_,_,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,Dk,_,_]);
  // Feet
  rows.push([_,_,_,Dk,Dk,_,_,_,_,_,_,Dk,Dk,_,_,_]);
  rows.push([_,_,Dk,Dk,Dk,Dk,_,_,_,_,Dk,Dk,Dk,Dk,_,_]);
  rows.push(new Array(16).fill(_));
  rows.push(new Array(16).fill(_));
  return rows;
})();

/** Rug: 32x16 (2x1 tiles) - terracotta border, cream center, teal accent */
export const RUG_SPRITE: SpriteData = (() => {
  const Tb = '#E2725B';
  const Cm = '#FDFBF7';
  const Cd = '#F0E8DA';
  const Tl = '#4A7C7A';
  const rows: string[][] = [];
  rows.push([_,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,_]);
  rows.push([Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb]);
  rows.push([Tb,Tb,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Tb,Tb]);
  rows.push([Tb,Tb,Cm,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cm,Tb,Tb]);
  rows.push([Tb,Tb,Cm,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cm,Tb,Tb]);
  rows.push([Tb,Tb,Cm,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cm,Tb,Tb]);
  rows.push([Tb,Tb,Cm,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Cm,Tb,Tb]);
  rows.push([Tb,Tb,Cm,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cm,Tb,Tb]);
  rows.push([Tb,Tb,Cm,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cm,Tb,Tb]);
  rows.push([Tb,Tb,Cm,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cm,Tb,Tb]);
  rows.push([Tb,Tb,Cm,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Tl,Cm,Tb,Tb]);
  rows.push([Tb,Tb,Cm,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cd,Cm,Tb,Tb]);
  rows.push([Tb,Tb,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Cm,Tb,Tb]);
  rows.push([Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb]);
  rows.push([_,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,Tb,_]);
  rows.push(new Array(32).fill(_));
  return rows;
})();

/** Window: 32x16 (2x1 tiles) - 4-pane window with frame, glass, highlight */
export const WINDOW_SPRITE: SpriteData = (() => {
  const Fr = '#444444';
  const Gl = '#AAD4FF';
  const Hi = '#FFFFFF';
  const rows: string[][] = [];
  rows.push(new Array(32).fill(_));
  rows.push([_,_,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,_,_]);
  rows.push([_,_,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,_,_]);
  rows.push([_,_,Fr,Fr,Hi,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Fr,Fr,Fr,Fr,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Fr,Fr,_,_]);
  rows.push([_,_,Fr,Fr,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Fr,Fr,Fr,Fr,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Fr,Fr,_,_]);
  rows.push([_,_,Fr,Fr,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Fr,Fr,Fr,Fr,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Fr,Fr,_,_]);
  rows.push([_,_,Fr,Fr,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Fr,Fr,Fr,Fr,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Fr,Fr,_,_]);
  rows.push([_,_,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,_,_]);
  rows.push([_,_,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,_,_]);
  rows.push([_,_,Fr,Fr,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Fr,Fr,Fr,Fr,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Fr,Fr,_,_]);
  rows.push([_,_,Fr,Fr,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Fr,Fr,Fr,Fr,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Fr,Fr,_,_]);
  rows.push([_,_,Fr,Fr,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Fr,Fr,Fr,Fr,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Fr,Fr,_,_]);
  rows.push([_,_,Fr,Fr,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Fr,Fr,Fr,Fr,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Gl,Fr,Fr,_,_]);
  rows.push([_,_,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,_,_]);
  rows.push([_,_,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,Fr,_,_]);
  rows.push(new Array(32).fill(_));
  rows.push(new Array(32).fill(_));
  return rows;
})();

/** Cactus: 16x16 - green body with ribs, one arm, flower on top, terracotta pot */
export const CACTUS_SPRITE: SpriteData = (() => {
  const Gl = '#3D8B37';
  const Gd = '#2D6B27';
  const Fl = '#CC4444';
  const Pb = '#8B5E3C';
  const Pd = '#6B4226';
  const rows: string[][] = [];
  rows.push(new Array(16).fill(_));
  rows.push([_,_,_,_,_,_,_,Fl,Fl,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,Fl,Gl,Fl,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,Gl,Gd,Gl,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,Gl,Gd,Gl,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,Gl,Gd,Gl,Gl,Gl,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,Gl,Gd,Gl,Gd,Gl,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,Gl,Gd,Gl,Gd,Gl,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,Gl,Gd,Gl,_,Gl,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,Gl,Gd,Gl,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,Gl,Gd,Gl,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Pd,Pd,Pd,Pd,Pd,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Pb,Pb,Pb,Pb,Pb,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Pb,Pd,Pb,Pd,Pb,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,Pd,Pb,Pd,_,_,_,_,_,_,_]);
  rows.push(new Array(16).fill(_));
  return rows;
})();

// ─── Character Sprites ──────────────────────────────────────────
// Prefers PNG sprite sheets when loaded, falls back to code-based sprites

import { getLoadedCharacterSprites } from './spriteSheetLoader';
import { getCharacterSprites as getCodeCharacterSprites, CHARACTER_PALETTES as CODE_PALETTES } from './characterSprites';
export type { CharacterSprites, CharPalette } from './characterSprites';
export { loadCharacterSpriteSheets, hasLoadedSpriteSheets } from './spriteSheetLoader';
export const CHARACTER_PALETTES = CODE_PALETTES;

export function getCharacterSprites(palette: number) {
  // Prefer PNG sprite sheets if loaded
  const loaded = getLoadedCharacterSprites(palette);
  if (loaded) return loaded;
  // Fallback to code-based sprites
  return getCodeCharacterSprites(palette);
}

// ─── Furniture Catalog ────────────────────────────────────────

export const FURNITURE_CATALOG: FurnitureCatalogEntry[] = [
  { type: 'desk', label: 'Desk', footprintW: 2, footprintH: 2, sprite: DESK_SPRITE, isDesk: true, category: 'desks' },
  { type: 'bookshelf', label: 'Bookshelf', footprintW: 1, footprintH: 2, sprite: BOOKSHELF_SPRITE, isDesk: false, category: 'storage' },
  { type: 'plant', label: 'Plant', footprintW: 1, footprintH: 1, sprite: PLANT_SPRITE, isDesk: false, category: 'decor' },
  { type: 'cooler', label: 'Cooler', footprintW: 1, footprintH: 1, sprite: COOLER_SPRITE, isDesk: false, category: 'misc' },
  { type: 'whiteboard', label: 'Whiteboard', footprintW: 2, footprintH: 1, sprite: WHITEBOARD_SPRITE, isDesk: false, category: 'decor' },
  { type: 'chair', label: 'Chair', footprintW: 1, footprintH: 1, sprite: CHAIR_SPRITE, isDesk: false, category: 'chairs' },
  { type: 'plant_tall', label: 'Tall Plant', footprintW: 1, footprintH: 1, sprite: PLANT_TALL_SPRITE, isDesk: false, category: 'decor' },
  { type: 'coffee_machine', label: 'Coffee Machine', footprintW: 1, footprintH: 1, sprite: COFFEE_MACHINE_SPRITE, isDesk: false, category: 'misc' },
  { type: 'server_rack', label: 'Server Rack', footprintW: 1, footprintH: 2, sprite: SERVER_RACK_SPRITE, isDesk: false, category: 'tech' },
  { type: 'rug', label: 'Rug', footprintW: 2, footprintH: 1, sprite: RUG_SPRITE, isDesk: false, category: 'decor', backgroundTiles: 1 },
  { type: 'window', label: 'Window', footprintW: 2, footprintH: 1, sprite: WINDOW_SPRITE, isDesk: false, category: 'decor', backgroundTiles: 1 },
  { type: 'cactus', label: 'Cactus', footprintW: 1, footprintH: 1, sprite: CACTUS_SPRITE, isDesk: false, category: 'decor' },
  { type: 'pc', label: 'PC Monitor', footprintW: 1, footprintH: 1, sprite: PC_SPRITE, isDesk: false, category: 'electronics' },
  { type: 'laptop', label: 'Laptop', footprintW: 1, footprintH: 1, sprite: LAPTOP_SPRITE, isDesk: false, category: 'electronics' },
  { type: 'lamp', label: 'Desk Lamp', footprintW: 1, footprintH: 1, sprite: LAMP_SPRITE, isDesk: false, category: 'decor' }
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
