import {
  INACTIVE_SEAT_TIMER_MIN_SEC,
  INACTIVE_SEAT_TIMER_RANGE_SEC,
  TILE_SIZE,
  CAMERA_LERP_SPEED,
} from './constants';
import { createCharacter, updateCharacter } from './characters';
import { createDJOfficeLayout, getBlockedTiles, layoutToFurnitureInstances, layoutToSeats, layoutToTileMap } from './layout';
import { findPath, getWalkableTiles } from './tileMap';
import type {
  Camera,
  Character,
  FurnitureInstance,
  OfficeLayout,
  Seat,
  TileType as TileTypeVal,
} from './types';
import { CharacterState, Direction } from './types';

export class OfficeState {
  layout: OfficeLayout;
  tileMap: TileTypeVal[][];
  seats: Map<string, Seat>;
  blockedTiles: Set<string>;
  furniture: FurnitureInstance[];
  walkableTiles: Array<{ col: number; row: number }>;
  characters: Map<number, Character> = new Map();
  camera: Camera;
  activeAgentId: number | null = null;
  officePhase: 'idle' | 'active' | 'complete' = 'idle';
  whiteboardProgress: number = 0;

  constructor(layout?: OfficeLayout) {
    this.layout = layout || createDJOfficeLayout();
    this.tileMap = layoutToTileMap(this.layout);
    this.seats = layoutToSeats(this.layout.furniture);
    this.blockedTiles = getBlockedTiles(this.layout.furniture);
    this.furniture = layoutToFurnitureInstances(this.layout.furniture);
    this.walkableTiles = getWalkableTiles(this.tileMap, this.blockedTiles);
    // Initialize camera to center of office
    const cx = this.layout.cols * TILE_SIZE / 2;
    const cy = this.layout.rows * TILE_SIZE / 2;
    this.camera = { x: cx, y: cy, targetX: cx, targetY: cy };
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

  setActiveAgent(id: number | null): void {
    this.activeAgentId = id;
  }

  setOfficePhase(phase: string): void {
    let newPhase: 'idle' | 'active' | 'complete';
    if (phase === 'select' || phase === 'customize') {
      newPhase = 'idle';
    } else if (phase === 'generating' || phase === 'revealing') {
      newPhase = 'active';
    } else if (phase === 'complete') {
      newPhase = 'complete';
    } else {
      newPhase = 'idle';
    }

    const wasComplete = this.officePhase === 'complete';
    this.officePhase = newPhase;

    if (newPhase === 'complete' && !wasComplete) {
      // Transition to complete: set all characters to CELEBRATE
      // Gathering line at row 6, cols spread from 7 to 12
      const chars = Array.from(this.characters.values());
      const gatherCols = [7, 8, 9, 10, 11, 12];
      const gatherRow = 6;
      chars.forEach((ch, i) => {
        ch.state = CharacterState.CELEBRATE;
        ch.isActive = false;
        ch.bubble = 'none';
        ch.bubbleTimer = 0;
        ch.frame = 0;
        ch.frameTimer = 0;
        const targetCol = gatherCols[i % gatherCols.length];
        // Temporarily unblock own seat
        const seatKey = ch.seatId ? this.getSeatKey(ch) : null;
        if (seatKey) this.blockedTiles.delete(seatKey);
        const path = findPath(ch.tileCol, ch.tileRow, targetCol, gatherRow, this.tileMap, this.blockedTiles);
        if (seatKey) this.blockedTiles.add(seatKey);
        if (path.length > 0) {
          ch.path = path;
          ch.moveProgress = 0;
        } else {
          // If no path found, just teleport
          const center = { x: targetCol * TILE_SIZE + TILE_SIZE / 2, y: gatherRow * TILE_SIZE + TILE_SIZE / 2 };
          ch.x = center.x;
          ch.y = center.y;
          ch.tileCol = targetCol;
          ch.tileRow = gatherRow;
          ch.path = [];
        }
      });
    } else if (newPhase === 'idle' && wasComplete) {
      // Transition from complete to idle: reset all characters to desks
      for (const ch of this.characters.values()) {
        ch.state = CharacterState.IDLE;
        ch.isActive = false;
        ch.bubble = 'none';
        ch.bubbleTimer = 0;
        ch.frame = 0;
        ch.frameTimer = 0;
        if (ch.seatId) {
          const seat = this.seats.get(ch.seatId);
          if (seat) {
            const center = { x: seat.seatCol * TILE_SIZE + TILE_SIZE / 2, y: seat.seatRow * TILE_SIZE + TILE_SIZE / 2 };
            ch.x = center.x;
            ch.y = center.y;
            ch.tileCol = seat.seatCol;
            ch.tileRow = seat.seatRow;
            ch.dir = seat.facingDir;
          }
        }
        ch.path = [];
        ch.moveProgress = 0;
      }
    }
  }

  private getSeatKey(ch: Character): string | null {
    if (!ch.seatId) return null;
    const seat = this.seats.get(ch.seatId);
    if (!seat) return null;
    return seat.seatCol + ',' + seat.seatRow;
  }

  private ownSeatKey(ch: Character): string | null {
    return this.getSeatKey(ch);
  }

  update(dt: number): void {
    for (const ch of this.characters.values()) {
      // Temporarily unblock own seat so character can pathfind to it
      const key = this.ownSeatKey(ch);
      if (key) this.blockedTiles.delete(key);

      updateCharacter(ch, dt, this.walkableTiles, this.seats, this.tileMap, this.blockedTiles, this.officePhase);

      if (key) this.blockedTiles.add(key);
    }

    // Update camera: lerp toward target
    if (this.activeAgentId !== null) {
      const activeChar = this.characters.get(this.activeAgentId);
      if (activeChar) {
        this.camera.targetX = activeChar.x;
        this.camera.targetY = activeChar.y;
      }
    } else {
      // Target center of office
      this.camera.targetX = this.layout.cols * TILE_SIZE / 2;
      this.camera.targetY = this.layout.rows * TILE_SIZE / 2;
    }

    this.camera.x += (this.camera.targetX - this.camera.x) * CAMERA_LERP_SPEED * dt;
    this.camera.y += (this.camera.targetY - this.camera.y) * CAMERA_LERP_SPEED * dt;

    // Clamp camera
    const minX = TILE_SIZE * 2;
    const maxX = this.layout.cols * TILE_SIZE - TILE_SIZE * 2;
    const minY = TILE_SIZE * 2;
    const maxY = this.layout.rows * TILE_SIZE - TILE_SIZE * 2;
    this.camera.x = Math.max(minX, Math.min(maxX, this.camera.x));
    this.camera.y = Math.max(minY, Math.min(maxY, this.camera.y));
  }

  getCharacters(): Character[] {
    return Array.from(this.characters.values());
  }
}
