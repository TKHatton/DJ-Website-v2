import {
  INACTIVE_SEAT_TIMER_MIN_SEC,
  INACTIVE_SEAT_TIMER_RANGE_SEC,
  TILE_SIZE,
} from './constants';
import { createCharacter, updateCharacter } from './characters';
import { createDJOfficeLayout, getBlockedTiles, layoutToFurnitureInstances, layoutToSeats, layoutToTileMap } from './layout';
import { getWalkableTiles } from './tileMap';
import type {
  Character,
  FurnitureInstance,
  OfficeLayout,
  Seat,
  TileType as TileTypeVal,
} from './types';
import { CharacterState } from './types';

export class OfficeState {
  layout: OfficeLayout;
  tileMap: TileTypeVal[][];
  seats: Map<string, Seat>;
  blockedTiles: Set<string>;
  furniture: FurnitureInstance[];
  walkableTiles: Array<{ col: number; row: number }>;
  characters: Map<number, Character> = new Map();

  constructor(layout?: OfficeLayout) {
    this.layout = layout || createDJOfficeLayout();
    this.tileMap = layoutToTileMap(this.layout);
    this.seats = layoutToSeats(this.layout.furniture);
    this.blockedTiles = getBlockedTiles(this.layout.furniture);
    this.furniture = layoutToFurnitureInstances(this.layout.furniture);
    this.walkableTiles = getWalkableTiles(this.tileMap, this.blockedTiles);
  }

  private findFreeSeat(): string | null {
    for (const [uid, seat] of this.seats) {
      if (!seat.assigned) return uid;
    }
    return null;
  }

  addAgent(id: number, palette: number): void {
    if (this.characters.has(id)) return;

    const seatId = this.findFreeSeat();
    let ch: Character;

    if (seatId) {
      const seat = this.seats.get(seatId)!;
      seat.assigned = true;
      ch = createCharacter(id, palette, seatId, seat);
    } else {
      const spawn = this.walkableTiles.length > 0
        ? this.walkableTiles[Math.floor(Math.random() * this.walkableTiles.length)]
        : { col: 1, row: 1 };
      ch = createCharacter(id, palette, null, null);
      ch.x = spawn.col * TILE_SIZE + TILE_SIZE / 2;
      ch.y = spawn.row * TILE_SIZE + TILE_SIZE / 2;
      ch.tileCol = spawn.col;
      ch.tileRow = spawn.row;
    }

    this.characters.set(id, ch);
  }

  setAgentActive(id: number, active: boolean): void {
    const ch = this.characters.get(id);
    if (!ch) return;
    ch.isActive = active;
    if (!active) {
      ch.seatTimer = -1; // sentinel: skip long rest on arrival
      ch.path = [];
      ch.moveProgress = 0;
    }
  }

  private ownSeatKey(ch: Character): string | null {
    if (!ch.seatId) return null;
    const seat = this.seats.get(ch.seatId);
    if (!seat) return null;
    return `${seat.seatCol},${seat.seatRow}`;
  }

  update(dt: number): void {
    for (const ch of this.characters.values()) {
      // Temporarily unblock own seat so character can pathfind to it
      const key = this.ownSeatKey(ch);
      if (key) this.blockedTiles.delete(key);

      updateCharacter(ch, dt, this.walkableTiles, this.seats, this.tileMap, this.blockedTiles);

      if (key) this.blockedTiles.add(key);
    }
  }

  getCharacters(): Character[] {
    return Array.from(this.characters.values());
  }
}
