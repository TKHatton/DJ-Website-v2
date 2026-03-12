import { TILE_SIZE } from './constants';
import { getCatalogEntry } from './sprites';
import type {
  FloorColor,
  FurnitureInstance,
  OfficeLayout,
  PlacedFurniture,
  Seat,
  TileType as TileTypeVal,
} from './types';
import { Direction, TileType } from './types';

export function layoutToTileMap(layout: OfficeLayout): TileTypeVal[][] {
  const map: TileTypeVal[][] = [];
  for (let r = 0; r < layout.rows; r++) {
    const row: TileTypeVal[] = [];
    for (let c = 0; c < layout.cols; c++) {
      row.push(layout.tiles[r * layout.cols + c]);
    }
    map.push(row);
  }
  return map;
}

export function layoutToFurnitureInstances(furniture: PlacedFurniture[]): FurnitureInstance[] {
  const instances: FurnitureInstance[] = [];
  for (const item of furniture) {
    const entry = getCatalogEntry(item.type);
    if (!entry) continue;
    const x = item.col * TILE_SIZE;
    const y = item.row * TILE_SIZE;
    const spriteH = entry.sprite.length;
    let zY = y + spriteH;

    // Chairs: cap zY so characters render in front
    if (entry.category === 'chairs') {
      zY = (item.row + 1) * TILE_SIZE;
    }

    instances.push({ sprite: entry.sprite, x, y, zY });
  }
  return instances;
}

export function getBlockedTiles(furniture: PlacedFurniture[]): Set<string> {
  const tiles = new Set<string>();
  for (const item of furniture) {
    const entry = getCatalogEntry(item.type);
    if (!entry) continue;
    const bgRows = entry.backgroundTiles || 0;
    for (let dr = 0; dr < entry.footprintH; dr++) {
      if (dr < bgRows) continue;
      for (let dc = 0; dc < entry.footprintW; dc++) {
        tiles.add(`${item.col + dc},${item.row + dr}`);
      }
    }
  }
  return tiles;
}

export function layoutToSeats(furniture: PlacedFurniture[]): Map<string, Seat> {
  const seats = new Map<string, Seat>();

  // Build set of all desk tiles
  const deskTiles = new Set<string>();
  for (const item of furniture) {
    const entry = getCatalogEntry(item.type);
    if (!entry || !entry.isDesk) continue;
    for (let dr = 0; dr < entry.footprintH; dr++) {
      for (let dc = 0; dc < entry.footprintW; dc++) {
        deskTiles.add(`${item.col + dc},${item.row + dr}`);
      }
    }
  }

  const dirs: Array<{ dc: number; dr: number; facing: Direction }> = [
    { dc: 0, dr: -1, facing: Direction.UP },
    { dc: 0, dr: 1, facing: Direction.DOWN },
    { dc: -1, dr: 0, facing: Direction.LEFT },
    { dc: 1, dr: 0, facing: Direction.RIGHT },
  ];

  for (const item of furniture) {
    const entry = getCatalogEntry(item.type);
    if (!entry || entry.category !== 'chairs') continue;

    let facingDir: Direction = Direction.DOWN;
    for (const d of dirs) {
      if (deskTiles.has(`${item.col + d.dc},${item.row + d.dr}`)) {
        facingDir = d.facing;
        break;
      }
    }

    seats.set(item.uid, {
      uid: item.uid,
      seatCol: item.col,
      seatRow: item.row,
      facingDir,
      assigned: false,
    });
  }

  return seats;
}

/** Create the DJ Agent Office layout (22 cols x 14 rows, 2 rooms, 6 desks) */
export function createDJOfficeLayout(): OfficeLayout {
  const W = TileType.WALL;
  const F1 = TileType.FLOOR_1;
  const F2 = TileType.FLOOR_2;
  const cols = 22;
  const rows = 14;

  // Build tile grid
  const tiles: TileTypeVal[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Perimeter walls
      if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) {
        tiles.push(W);
        continue;
      }
      // Middle divider at col 10 with doorway at rows 5-7
      if (c === 10 && (r < 5 || r > 7)) {
        tiles.push(W);
        continue;
      }
      // Left room (cols 1-9) uses FLOOR_1, right room (cols 11-20) uses FLOOR_2
      if (c < 10) {
        tiles.push(F1);
      } else {
        tiles.push(F2);
      }
    }
  }

  // ----------------------------------------------------------------
  // Furniture placement
  //
  // Desks are 2x2 tiles. A desk at (col, row) occupies:
  //   (col, row), (col+1, row), (col, row+1), (col+1, row+1)
  //
  // Chairs are 1x1. They detect adjacent desk tiles to determine
  // facing direction automatically via layoutToSeats().
  //
  //   chair at (col, row+2) relative to desk at (col, row)
  //     -> desk tile (col, row+1) is directly above -> faces UP
  //
  //   chair at (col, row-1) relative to desk at (col, row)
  //     -> desk tile (col, row) is directly below -> faces DOWN
  // ----------------------------------------------------------------
  const furniture: PlacedFurniture[] = [
    // === LEFT ROOM: 3 desks with chairs + PCs + lamps ===

    // Desk 0 at (2,2) with PC and lamp
    { uid: 'desk-0', type: 'desk', col: 2, row: 2 },
    { uid: 'chair-0', type: 'chair', col: 3, row: 4 },
    { uid: 'pc-0', type: 'pc', col: 2, row: 2 },
    { uid: 'lamp-0', type: 'lamp', col: 3, row: 2 },

    // Desk 1 at (5,2) with PC and lamp
    { uid: 'desk-1', type: 'desk', col: 5, row: 2 },
    { uid: 'chair-1', type: 'chair', col: 6, row: 4 },
    { uid: 'pc-1', type: 'pc', col: 5, row: 2 },
    { uid: 'lamp-1', type: 'lamp', col: 6, row: 2 },

    // Desk 2 at (2,8) with PC and lamp
    { uid: 'desk-2', type: 'desk', col: 2, row: 8 },
    { uid: 'chair-2', type: 'chair', col: 3, row: 7 },
    { uid: 'pc-2', type: 'pc', col: 2, row: 9 },
    { uid: 'lamp-2', type: 'lamp', col: 3, row: 9 },

    // === RIGHT ROOM: 3 desks with chairs + PCs + lamps ===

    // Desk 3 at (12,2) with PC and lamp
    { uid: 'desk-3', type: 'desk', col: 12, row: 2 },
    { uid: 'chair-3', type: 'chair', col: 13, row: 4 },
    { uid: 'pc-3', type: 'pc', col: 12, row: 2 },
    { uid: 'lamp-3', type: 'lamp', col: 13, row: 2 },

    // Desk 4 at (15,2) with PC and lamp
    { uid: 'desk-4', type: 'desk', col: 15, row: 2 },
    { uid: 'chair-4', type: 'chair', col: 16, row: 4 },
    { uid: 'pc-4', type: 'pc', col: 15, row: 2 },
    { uid: 'lamp-4', type: 'lamp', col: 16, row: 2 },

    // Desk 5 at (12,8) with PC and lamp
    { uid: 'desk-5', type: 'desk', col: 12, row: 8 },
    { uid: 'chair-5', type: 'chair', col: 13, row: 7 },
    { uid: 'pc-5', type: 'pc', col: 12, row: 9 },
    { uid: 'lamp-5', type: 'lamp', col: 13, row: 9 },

    // === PLANTS (generous placement for life/color) ===
    { uid: 'plant-0', type: 'plant', col: 1, row: 1 },
    { uid: 'plant-1', type: 'plant_tall', col: 8, row: 1 },
    { uid: 'plant-2', type: 'plant', col: 1, row: 6 },
    { uid: 'plant-3', type: 'plant_tall', col: 9, row: 5 },
    { uid: 'cactus-0', type: 'cactus', col: 1, row: 12 },
    { uid: 'plant-5', type: 'plant', col: 20, row: 1 },
    { uid: 'plant-6', type: 'plant_tall', col: 20, row: 6 },
    { uid: 'plant-7', type: 'plant', col: 20, row: 12 },
    { uid: 'cactus-1', type: 'cactus', col: 9, row: 12 },
    { uid: 'plant-8', type: 'plant', col: 11, row: 12 },

    // === STORAGE & WALL ITEMS ===
    { uid: 'bookshelf-0', type: 'bookshelf', col: 8, row: 8 },
    { uid: 'bookshelf-1', type: 'bookshelf', col: 19, row: 5 },
    { uid: 'bookshelf-2', type: 'bookshelf', col: 1, row: 9 },
    { uid: 'whiteboard-0', type: 'whiteboard', col: 16, row: 8 },

    // Windows on top walls
    { uid: 'window-0', type: 'window', col: 3, row: 0 },
    { uid: 'window-1', type: 'window', col: 14, row: 0 },

    // === MISC ITEMS ===
    { uid: 'cooler-0', type: 'cooler', col: 5, row: 12 },
    { uid: 'coffee-0', type: 'coffee_machine', col: 7, row: 12 },
    { uid: 'server-0', type: 'server_rack', col: 11, row: 1 },
    { uid: 'rug-0', type: 'rug', col: 14, row: 6 },
  ];

  // Tile colors: uniform warm tones per room (no checkerboard)
  const leftColor: FloorColor = { h: 35, s: 30, b: 15, c: 0 };
  const rightColor: FloorColor = { h: 35, s: 28, b: 12, c: 0 };
  const tileColors: Array<FloorColor | null> = tiles.map((tile, i) => {
    if (tile === W) return null;
    const c = i % cols;
    if (c < 10) return leftColor;
    return rightColor;
  });

  return { version: 1, cols, rows, tiles, furniture, tileColors };
}
