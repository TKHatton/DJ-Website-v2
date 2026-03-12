import type { SpriteData, FurnitureCatalogEntry } from './types';
import { Direction } from './types';

const _ = '';

// ─── Furniture Sprites ────────────────────────────────────────

/** Square desk: 32x32 pixels (2x2 tiles) - wood desk with monitor, keyboard, and coffee mug */
export const DESK_SPRITE: SpriteData = (() => {
  const Wl = '#B8922E';
  const Wm = '#A07828';
  const Wd = '#8B6914';
  const We = '#6B4E0A';
  const Sc = '#222233';
  const Sg = '#44BB66';
  const Sb = '#4488CC';
  const Sr = '#CC4444';
  const Mf = '#555555';
  const Kb = '#444444';
  const Kk = '#666666';
  const Cw = '#FFFFFF';
  const Cb = '#8B4513';
  const rows: string[][] = [];
  rows.push(new Array(32).fill(_));
  rows.push([_, We,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,We, _]);
  rows.push([_, Wd,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wd, _]);
  rows.push([_, Wd,Wl,Wm,Wl,Wl,Wl,Wl,Wl,Wl,Mf,Mf,Mf,Mf,Mf,Mf,Mf,Mf,Mf,Mf,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wd, _]);
  rows.push([_, Wd,Wm,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Mf,Sc,Sc,Sc,Sc,Sc,Sc,Sc,Sc,Mf,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wm,Wd, _]);
  rows.push([_, Wd,Wl,Wl,Wm,Wl,Wl,Wl,Wl,Wl,Mf,Sc,Sg,Sg,Sc,Sb,Sc,Sc,Sc,Mf,Wl,Wl,Wl,Wl,Wl,Wl,Cw,Cw,Wl,Wl,Wd, _]);
  rows.push([_, Wd,Wl,Wl,Wl,Wl,Wm,Wl,Wl,Wl,Mf,Sc,Sc,Sb,Sb,Sc,Sr,Sc,Sc,Mf,Wl,Wl,Wl,Wl,Wl,Wl,Cw,Cb,Wl,Wl,Wd, _]);
  rows.push([_, Wd,Wm,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Mf,Sc,Sr,Sc,Sg,Sg,Sc,Sc,Sc,Mf,Wl,Wl,Wl,Wl,Wl,Wl,Cw,Cb,Wl,Wl,Wd, _]);
  rows.push([_, Wd,Wl,Wl,Wl,Wm,Wl,Wl,Wl,Wl,Mf,Sc,Sc,Sc,Sb,Sc,Sg,Sg,Sc,Mf,Wl,Wl,Wl,Wl,Wl,Wl,Cw,Cb,Wl,Wl,Wd, _]);
  rows.push([_, Wd,Wl,Wl,Wl,Wl,Wl,Wm,Wl,Wl,Mf,Sc,Sg,Sc,Sc,Sr,Sc,Sb,Sc,Mf,Wl,Wl,Wl,Wl,Wl,Wl,Cw,Cb,Wl,Wl,Wd, _]);
  rows.push([_, Wd,Wl,Wm,Wl,Wl,Wl,Wl,Wl,Wl,Mf,Sc,Sc,Sb,Sc,Sg,Sc,Sc,Sc,Mf,Wl,Wl,Wl,Wl,Wl,Wl,Cw,Cw,Wl,Wl,Wd, _]);
  rows.push([_, Wd,Wl,Wl,Wl,Wl,Wl,Wl,Wm,Wl,Mf,Sc,Sr,Sc,Sc,Sc,Sb,Sb,Sc,Mf,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wd, _]);
  rows.push([_, Wd,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Mf,Mf,Mf,Mf,Mf,Mf,Mf,Mf,Mf,Mf,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wd, _]);
  rows.push([_, Wd,Wm,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Mf,Mf,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wm,Wl,Wd, _]);
  rows.push([_, Wd,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Mf,Mf,Mf,Mf,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wd, _]);
  rows.push([_, Wd,Wl,Wl,Wm,Wl,Wl,Wl,Wl,Kb,Kb,Kb,Kb,Kb,Kb,Kb,Kb,Kb,Kb,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wm,Wd, _]);
  rows.push([_, Wd,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Kb,Kk,Kk,Kk,Kk,Kk,Kk,Kk,Kk,Kb,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wd, _]);
  rows.push([_, Wd,Wl,Wl,Wl,Wl,Wm,Wl,Wl,Kb,Kk,Kk,Kk,Kk,Kk,Kk,Kk,Kk,Kb,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wd, _]);
  rows.push([_, Wd,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Kb,Kb,Kb,Kb,Kb,Kb,Kb,Kb,Kb,Kb,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wd, _]);
  rows.push([_, Wd,Wm,Wm,Wl,Wl,Wl,Wl,Wm,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wm,Wl,Wl,Wl,Wl,Wm,Wl,Wl,Wl,Wm,Wm,Wd, _]);
  rows.push([_, Wd,Wl,Wl,Wl,Wm,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wm,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wd, _]);
  rows.push([_, Wd,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wm,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wl,Wm,Wl,Wl,Wl,Wl,Wd, _]);
  rows.push([_, We,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,Wm,We, _]);
  rows.push([_, We,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,Wd,We, _]);
  rows.push([_, _,We,We, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,We,We, _]);
  rows.push([_, _,We,We, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,We,We, _]);
  rows.push([_, _,We,We, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,We,We, _]);
  rows.push([_, _,We,We, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,We,We, _]);
  rows.push([_, _,We,We, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,We,We, _]);
  rows.push([_, _,We,We, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,We,We, _]);
  rows.push(new Array(32).fill(_));
  rows.push(new Array(32).fill(_));
  return rows;
})();

/** Plant in pot: 16x24 - bushy plant with leaf clusters and terracotta pot */
export const PLANT_SPRITE: SpriteData = (() => {
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
  rows.push([_,_,_,_,_,_,_,Gl,Gm,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Gl,Gm,Gm,Gl,Gm,_,_,_,_,_,_]);
  rows.push([_,_,_,_,Gm,Gl,Gd,Gm,Gm,Gd,Gl,_,_,_,_,_]);
  rows.push([_,_,_,Gl,Gm,Gd,Gm,Gl,Gl,Gm,Gd,Gm,Gl,_,_,_]);
  rows.push([_,_,Gm,Gd,Gl,Gm,Gd,Gm,Gm,Gd,Gm,Gl,Gd,Gm,_,_]);
  rows.push([_,_,Gl,Gm,Gd,Gl,Gm,Gl,Gl,Gm,Gl,Gd,Gm,Gl,_,_]);
  rows.push([_,_,Gm,Gl,Gm,Gd,Gd,Gm,Gm,Gd,Gd,Gm,Gl,Gm,_,_]);
  rows.push([_,_,_,Gd,Gm,Gl,Gm,Gd,Gd,Gm,Gl,Gm,Gd,_,_,_]);
  rows.push([_,_,_,Gm,Gd,Gm,Gl,Gm,Gm,Gl,Gm,Gd,Gm,_,_,_]);
  rows.push([_,_,_,_,Gm,Gd,Gm,Gl,Gl,Gm,Gd,Gm,_,_,_,_]);
  rows.push([_,_,_,_,_,Gm,Gd,Gm,Gm,Gd,Gm,_,_,_,_,_]);
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

/** Bookshelf: 16x32 (1x2 tiles) - with varied book heights, globe ornament */
export const BOOKSHELF_SPRITE: SpriteData = (() => {
  const W  = '#6B4E0A';
  const S  = '#8B6914';
  const Sd = '#5A3D08';
  const B1 = '#CC4444';
  const B2 = '#4488CC';
  const B3 = '#44AA66';
  const B4 = '#AA55CC';
  const B5 = '#CCAA33';
  const B6 = '#DD7733';
  const Gl = '#DDC060';
  const Gd = '#BBA040';
  const rows: string[][] = [];
  rows.push([_,_,W,W,W,W,W,W,W,W,W,W,W,W,_,_]);
  rows.push([_,_,W,S,S,S,S,S,S,S,S,S,S,W,_,_]);
  rows.push([_,_,W,S,S,S,S,S,S,S,Gd,Gl,Gl,W,_,_]);
  rows.push([_,_,W,B1,B1,B2,B2,S,S,S,Gl,Gl,Gl,W,_,_]);
  rows.push([_,_,W,B1,B1,B2,B2,B3,B3,S,Gd,Gl,Gd,W,_,_]);
  rows.push([_,_,W,B1,B1,B2,B2,B3,B3,B4,B4,S,S,W,_,_]);
  rows.push([_,_,W,B1,B1,B2,B2,B3,B3,B4,B4,B5,B5,W,_,_]);
  rows.push([_,_,W,W,W,W,W,W,W,W,W,W,W,W,_,_]);
  rows.push([_,_,W,Sd,Sd,Sd,Sd,Sd,Sd,Sd,Sd,Sd,Sd,W,_,_]);
  rows.push([_,_,W,S,B5,B5,S,B6,B6,B1,B1,S,S,W,_,_]);
  rows.push([_,_,W,B3,B5,B5,B6,B6,B6,B1,B1,B4,S,W,_,_]);
  rows.push([_,_,W,B3,B5,B5,B6,B4,B6,B1,B1,B4,B2,W,_,_]);
  rows.push([_,_,W,B3,B5,B5,B6,B6,B4,B1,B1,B4,B2,W,_,_]);
  rows.push([_,_,W,W,W,W,W,W,W,W,W,W,W,W,_,_]);
  rows.push([_,_,W,Sd,Sd,Sd,Sd,Sd,Sd,Sd,Sd,Sd,Sd,W,_,_]);
  rows.push([_,_,W,S,S,B2,B2,B4,B4,S,B6,B6,S,W,_,_]);
  rows.push([_,_,W,B4,S,B2,B2,B4,B4,B5,B6,B6,B1,W,_,_]);
  rows.push([_,_,W,B4,B3,B2,B2,B4,B4,B5,B6,B6,B1,W,_,_]);
  rows.push([_,_,W,B4,B3,B2,B2,B4,B4,B5,B6,B6,B1,W,_,_]);
  rows.push([_,_,W,W,W,W,W,W,W,W,W,W,W,W,_,_]);
  for (let i = 0; i < 12; i++) {
    const row = new Array(16).fill(_) as string[];
    row[2] = W; row[3] = W; row[12] = W; row[13] = W;
    rows.push(row);
  }
  return rows;
})();

/** Water cooler: 16x16 - with water jug gradient, red tap, and paper cup */
export const COOLER_SPRITE: SpriteData = (() => {
  const Wt = '#AAD4FF';
  const Wm = '#88BBEE';
  const Wl = '#6699CC';
  const Bb = '#DDDDDD';
  const Bd = '#CCCCCC';
  const Rd = '#CC4444';
  const Ba = '#999999';
  const Bk = '#AAAAAA';
  const Cw = '#FFFFFF';
  const Cd = '#EEEEEE';
  const rows: string[][] = [];
  rows.push(new Array(16).fill(_));
  rows.push([_,_,_,_,_,_,_,Wt,Wt,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Wt,Wt,Wt,Wt,Wt,Wt,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Wt,Wm,Wt,Wt,Wm,Wt,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Wm,Wm,Wm,Wm,Wm,Wm,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Wl,Wm,Wl,Wl,Wm,Wl,_,_,_,_,_]);
  rows.push([_,_,_,_,Ba,Bb,Bb,Bb,Bb,Bb,Bb,Ba,_,_,_,_]);
  rows.push([_,_,_,_,Ba,Bb,Bb,Bb,Bb,Bb,Bb,Ba,_,_,_,_]);
  rows.push([_,_,_,_,Ba,Bb,Bb,Rd,Rd,Bb,Bb,Ba,_,Cw,_,_]);
  rows.push([_,_,_,_,Ba,Bb,Bb,Rd,Bd,Bb,Bb,Ba,_,Cw,_,_]);
  rows.push([_,_,_,_,Ba,Bb,Bd,Bd,Bb,Bb,Bd,Ba,_,Cw,_,_]);
  rows.push([_,_,_,_,Ba,Bd,Bd,Bd,Bd,Bd,Bd,Ba,_,Cw,Cd,_]);
  rows.push([_,_,_,Ba,Ba,Ba,Ba,Ba,Ba,Ba,Ba,Ba,Ba,_,_,_]);
  rows.push([_,_,_,_,Ba,_,_,Ba,Ba,_,_,Ba,_,_,_,_]);
  rows.push([_,_,_,Bk,Ba,Bk,_,Ba,Ba,_,Bk,Ba,Bk,_,_,_]);
  rows.push(new Array(16).fill(_));
  return rows;
})();

/** Whiteboard: 32x16 (2x1 tiles) - with diagram boxes, arrows, and marker tray */
export const WHITEBOARD_SPRITE: SpriteData = (() => {
  const F  = '#EEEEEE';
  const B  = '#888888';
  const Bs = '#777777';
  const E  = '#AAAAAA';
  const Lb = '#4488CC';
  const Lr = '#CC4444';
  const Lg = '#44AA66';
  const Ln = '#999999';
  const Tr = '#777777';
  const rows: string[][] = [];
  rows.push(new Array(32).fill(_));
  rows.push([_,_,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,_,_]);
  rows.push([_,_,B,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,Bs,_,_]);
  rows.push([_,_,B,F,F,Lb,Lb,Lb,Lb,F,F,F,F,F,F,F,F,F,F,F,F,Lr,Lr,Lr,Lr,F,F,F,F,Bs,_,_]);
  rows.push([_,_,B,F,F,Lb,F,F,Lb,F,Ln,Ln,Ln,Ln,F,F,F,F,Ln,Ln,Ln,Lr,F,F,Lr,F,F,F,F,Bs,_,_]);
  rows.push([_,_,B,F,F,Lb,Lb,Lb,Lb,F,F,F,F,Ln,F,F,F,Ln,F,F,F,Lr,Lr,Lr,Lr,F,F,F,F,Bs,_,_]);
  rows.push([_,_,B,F,F,F,F,F,F,F,F,F,F,Ln,F,F,F,Ln,F,F,F,F,F,F,F,F,F,F,F,Bs,_,_]);
  rows.push([_,_,B,F,F,F,F,F,F,F,F,F,Lb,Lb,Lb,Lb,Lb,Lb,Lb,Lb,F,F,F,F,F,F,F,F,F,Bs,_,_]);
  rows.push([_,_,B,F,F,F,F,F,F,F,F,F,Lb,F,F,Lg,Lg,F,F,Lb,F,F,F,F,F,F,F,F,F,Bs,_,_]);
  rows.push([_,_,B,F,F,F,F,F,F,F,F,F,Lb,Lb,Lb,Lb,Lb,Lb,Lb,Lb,F,F,F,F,F,F,F,F,F,Bs,_,_]);
  rows.push([_,_,B,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,Bs,_,_]);
  rows.push([_,_,B,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Tr,Bs,_,_]);
  rows.push([_,_,Bs,Bs,Bs,Bs,Bs,Bs,Lr,Lr,Bs,Lb,Lb,Bs,Lg,Lg,Bs,Bs,Bs,Bs,Bs,Bs,Bs,Bs,Bs,Bs,Bs,Bs,Bs,Bs,_,_]);
  rows.push([_,_,_,_,_,_,_,_,_,_,_,_,_,_,E,E,E,E,_,_,_,_,_,_,_,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,_,_,_,_,_,_,_,_,E,_,_,E,_,_,_,_,_,_,_,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,_,_,_,_,_,_,_,_,E,_,_,E,_,_,_,_,_,_,_,_,_,_,_,_,_,_]);
  return rows;
})();

/** Chair: 16x16 - dark gray office chair with armrests and wheels */
export const CHAIR_SPRITE: SpriteData = (() => {
  const Bk = '#555555';
  const Hl = '#777777';
  const Am = '#666666';
  const Po = '#444444';
  const Wh = '#333333';
  const Fr = '#4A4A4A';
  const rows: string[][] = [];
  rows.push(new Array(16).fill(_));
  rows.push([_,_,_,_,_,Bk,Bk,Bk,Bk,Bk,Bk,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Bk,Hl,Hl,Hl,Hl,Bk,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Bk,Hl,Bk,Bk,Hl,Bk,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Bk,Bk,Bk,Bk,Bk,Bk,_,_,_,_,_]);
  rows.push([_,_,_,_,Am,Fr,Fr,Fr,Fr,Fr,Fr,Am,_,_,_,_]);
  rows.push([_,_,_,_,Am,Bk,Hl,Hl,Hl,Hl,Bk,Am,_,_,_,_]);
  rows.push([_,_,_,_,Am,Bk,Hl,Bk,Bk,Hl,Bk,Am,_,_,_,_]);
  rows.push([_,_,_,_,Am,Bk,Bk,Bk,Bk,Bk,Bk,Am,_,_,_,_]);
  rows.push([_,_,_,_,_,Fr,Fr,Fr,Fr,Fr,Fr,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,_,Po,Po,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,_,_,Po,Po,_,_,_,_,_,_,_]);
  rows.push([_,_,_,_,_,Po,Po,Po,Po,Po,Po,_,_,_,_,_]);
  rows.push([_,_,_,_,Wh,_,Po,_,_,Po,_,Wh,_,_,_,_]);
  rows.push([_,_,_,Wh,Wh,_,_,_,_,_,_,Wh,Wh,_,_,_]);
  rows.push(new Array(16).fill(_));
  return rows;
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

// ─── Character Sprites (re-exported from characterSprites.ts) ──

export { getCharacterSprites, CHARACTER_PALETTES } from "./characterSprites";
export type { CharacterSprites, CharPalette } from "./characterSprites";

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
  { type: 'cactus', label: 'Cactus', footprintW: 1, footprintH: 1, sprite: CACTUS_SPRITE, isDesk: false, category: 'decor' }
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
