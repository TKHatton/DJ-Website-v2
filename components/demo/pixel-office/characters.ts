import {
  WALK_SPEED_PX_PER_SEC,
  WALK_FRAME_DURATION_SEC,
  TYPE_FRAME_DURATION_SEC,
  WANDER_PAUSE_MIN_SEC,
  WANDER_PAUSE_MAX_SEC,
  WANDER_MOVES_BEFORE_REST_MIN,
  WANDER_MOVES_BEFORE_REST_MAX,
  SEAT_REST_MIN_SEC,
  SEAT_REST_MAX_SEC,
  INACTIVE_SEAT_TIMER_MIN_SEC,
  INACTIVE_SEAT_TIMER_RANGE_SEC,
  TILE_SIZE,
  CALM_IDLE_PAUSE_MIN_SEC,
  CALM_IDLE_PAUSE_MAX_SEC,
  CALM_STAND_CHANCE,
  CALM_TYPE_FRAME_DURATION_SEC,
  ACTIVE_WALK_SPEED_PX_PER_SEC,
  ACTIVE_WANDER_PAUSE_MIN_SEC,
  ACTIVE_WANDER_PAUSE_MAX_SEC,
  BUBBLE_ROTATE_SEC,
  BUBBLE_CHECK_DURATION_SEC,
  BUBBLE_DOTS_CHANCE,
  BUBBLE_DOTS_DURATION_SEC,
} from './constants';
import { findPath } from './tileMap';
import type { Character, Seat, TileType as TileTypeVal, SpriteData, WhiteboardTarget } from './types';
import { CharacterState, Direction } from './types';
import type { CharacterSprites } from './sprites';

function tileCenter(col: number, row: number): { x: number; y: number } {
  return { x: col * TILE_SIZE + TILE_SIZE / 2, y: row * TILE_SIZE + TILE_SIZE / 2 };
}

function directionBetween(fromCol: number, fromRow: number, toCol: number, toRow: number): Direction {
  const dc = toCol - fromCol;
  const dr = toRow - fromRow;
  if (dc > 0) return Direction.RIGHT;
  if (dc < 0) return Direction.LEFT;
  if (dr > 0) return Direction.DOWN;
  return Direction.UP;
}

function randomRange(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function randomInt(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}

export function createCharacter(
  id: number,
  palette: number,
  seatId: string | null,
  seat: Seat | null,
): Character {
  const col = seat ? seat.seatCol : 1;
  const row = seat ? seat.seatRow : 1;
  const center = tileCenter(col, row);
  return {
    id,
    state: seat ? CharacterState.TYPE : CharacterState.IDLE,
    dir: seat ? seat.facingDir : Direction.DOWN,
    x: center.x,
    y: center.y,
    tileCol: col,
    tileRow: row,
    path: [],
    moveProgress: 0,
    currentTool: null,
    palette,
    frame: 0,
    frameTimer: 0,
    wanderTimer: randomRange(WANDER_PAUSE_MIN_SEC, WANDER_PAUSE_MAX_SEC),
    wanderCount: 0,
    wanderLimit: randomInt(WANDER_MOVES_BEFORE_REST_MIN, WANDER_MOVES_BEFORE_REST_MAX),
    isActive: false,
    seatId,
    seatTimer: seat ? randomRange(15, 45) : 0,
    bubble: 'none',
    bubbleTimer: 0,
    whiteboardTarget: null,
    whiteboardTimer: 0,
  };
}

export function updateCharacter(
  ch: Character,
  dt: number,
  walkableTiles: Array<{ col: number; row: number }>,
  seats: Map<string, Seat>,
  tileMap: TileTypeVal[][],
  blockedTiles: Set<string>,
  officePhase: string = 'idle',
): void {
  ch.frameTimer += dt;

  // Update bubble timer
  if (ch.bubble === 'check') {
    ch.bubbleTimer -= dt;
    if (ch.bubbleTimer <= 0) {
      ch.bubble = 'none';
      ch.bubbleTimer = 0;
    }
  } else if (ch.bubble === 'dots') {
    ch.bubbleTimer -= dt;
    if (ch.bubbleTimer <= 0) {
      ch.bubble = 'none';
      ch.bubbleTimer = 0;
    }
  }

  switch (ch.state) {
    case CharacterState.TYPE: {
      const typeSpeed = officePhase === 'idle' ? CALM_TYPE_FRAME_DURATION_SEC : TYPE_FRAME_DURATION_SEC;
      if (ch.frameTimer >= typeSpeed) {
        ch.frameTimer -= typeSpeed;
        ch.frame = (ch.frame + 1) % 2;
      }

      if (officePhase === 'active' && ch.isActive) {
        ch.bubbleTimer += dt;
        if (ch.bubbleTimer >= BUBBLE_ROTATE_SEC) {
          ch.bubbleTimer -= BUBBLE_ROTATE_SEC;
          ch.bubble = ch.bubble === 'gear' ? 'lightbulb' : 'gear';
        }
      } else if (officePhase === 'idle' && ch.bubble === 'none') {
        if (Math.random() < BUBBLE_DOTS_CHANCE * dt) {
          ch.bubble = 'dots';
          ch.bubbleTimer = BUBBLE_DOTS_DURATION_SEC;
        }
      }

      // During active phase, ALL agents stay at desks typing
      // But if at whiteboard, count down timer then go to desk
      if (officePhase === 'active') {
        if (ch.whiteboardTarget && ch.whiteboardTimer > 0) {
          ch.whiteboardTimer -= dt;
          if (ch.whiteboardTimer <= 0) {
            // Done writing on whiteboard, go to desk
            ch.whiteboardTarget = null;
            ch.whiteboardTimer = 0;
            ch.state = CharacterState.IDLE;
            ch.bubble = 'gear';
            ch.bubbleTimer = 0;
            ch.frame = 0;
            ch.frameTimer = 0;
          }
          break;
        }
        break;
      }

      if (!ch.isActive) {
        if (ch.seatTimer > 0) {
          ch.seatTimer -= dt;
          break;
        }
        ch.seatTimer = 0;
        ch.state = CharacterState.IDLE;
        ch.frame = 0;
        ch.frameTimer = 0;
        ch.bubble = 'none';
        ch.bubbleTimer = 0;
        if (officePhase === 'idle') {
          ch.wanderTimer = randomRange(CALM_IDLE_PAUSE_MIN_SEC, CALM_IDLE_PAUSE_MAX_SEC);
        } else {
          ch.wanderTimer = randomRange(WANDER_PAUSE_MIN_SEC, WANDER_PAUSE_MAX_SEC);
        }
        ch.wanderCount = 0;
        ch.wanderLimit = randomInt(WANDER_MOVES_BEFORE_REST_MIN, WANDER_MOVES_BEFORE_REST_MAX);
      }
      break;
    }

    case CharacterState.IDLE: {
      ch.frame = 0;
      if (ch.seatTimer < 0) ch.seatTimer = 0;

      // During active phase, ALL agents go straight to their desks
      if (officePhase === 'active' && ch.seatId) {
        const seat = seats.get(ch.seatId);
        if (seat) {
          if (ch.tileCol === seat.seatCol && ch.tileRow === seat.seatRow) {
            ch.state = CharacterState.TYPE;
            ch.dir = seat.facingDir;
            ch.frame = 0;
            ch.frameTimer = 0;
            ch.bubble = ch.isActive ? 'gear' : 'none';
            ch.bubbleTimer = 0;
            break;
          }
          const seatKey = seat.seatCol + ',' + seat.seatRow;
          blockedTiles.delete(seatKey);
          const pathToSeat = findPath(ch.tileCol, ch.tileRow, seat.seatCol, seat.seatRow, tileMap, blockedTiles);
          blockedTiles.add(seatKey);
          if (pathToSeat.length > 0) {
            ch.path = pathToSeat;
            ch.moveProgress = 0;
            ch.state = CharacterState.WALK;
            ch.frame = 0;
            ch.frameTimer = 0;
          } else {
            // Can't path to seat, just start typing where we are
            ch.state = CharacterState.TYPE;
            ch.frame = 0;
            ch.frameTimer = 0;
          }
        }
        break;
      }

      if (officePhase === 'idle' && ch.seatId && !ch.isActive) {
        const seat = seats.get(ch.seatId);
        if (seat && ch.tileCol === seat.seatCol && ch.tileRow === seat.seatRow) {
          ch.state = CharacterState.TYPE;
          ch.dir = seat.facingDir;
          ch.frame = 0;
          ch.frameTimer = 0;
          ch.seatTimer = randomRange(CALM_IDLE_PAUSE_MIN_SEC, CALM_IDLE_PAUSE_MAX_SEC);
          break;
        }
      }

      if (ch.isActive) {
        // If agent has a whiteboard target, go there first
        if (ch.whiteboardTarget) {
          const wb = ch.whiteboardTarget;
          if (ch.tileCol === wb.col && ch.tileRow === wb.row) {
            // Already at whiteboard - start writing
            ch.state = CharacterState.TYPE;
            ch.dir = wb.facingDir;
            ch.frame = 0;
            ch.frameTimer = 0;
            ch.bubble = 'lightbulb';
            ch.bubbleTimer = 0;
            ch.whiteboardTimer = 2.5 + Math.random() * 1.5; // 2.5-4 seconds
            break;
          }
          const wbPath = findPath(ch.tileCol, ch.tileRow, wb.col, wb.row, tileMap, blockedTiles);
          if (wbPath.length > 0) {
            ch.path = wbPath;
            ch.moveProgress = 0;
            ch.state = CharacterState.WALK;
            ch.frame = 0;
            ch.frameTimer = 0;
            break;
          }
          // Can't reach whiteboard, skip to desk
          ch.whiteboardTarget = null;
        }

        if (!ch.seatId) {
          ch.state = CharacterState.TYPE;
          ch.frame = 0;
          ch.frameTimer = 0;
          ch.bubble = 'gear';
          ch.bubbleTimer = 0;
          break;
        }
        const seat = seats.get(ch.seatId);
        if (seat) {
          const path = findPath(ch.tileCol, ch.tileRow, seat.seatCol, seat.seatRow, tileMap, blockedTiles);
          if (path.length > 0) {
            ch.path = path;
            ch.moveProgress = 0;
            ch.state = CharacterState.WALK;
            ch.frame = 0;
            ch.frameTimer = 0;
          } else {
            ch.state = CharacterState.TYPE;
            ch.dir = seat.facingDir;
            ch.frame = 0;
            ch.frameTimer = 0;
            ch.bubble = 'gear';
            ch.bubbleTimer = 0;
          }
        }
        break;
      }

      const pauseMin = officePhase === 'idle' ? CALM_IDLE_PAUSE_MIN_SEC :
        (officePhase === 'active' ? ACTIVE_WANDER_PAUSE_MIN_SEC : WANDER_PAUSE_MIN_SEC);
      const pauseMax = officePhase === 'idle' ? CALM_IDLE_PAUSE_MAX_SEC :
        (officePhase === 'active' ? ACTIVE_WANDER_PAUSE_MAX_SEC : WANDER_PAUSE_MAX_SEC);

      ch.wanderTimer -= dt;
      if (ch.wanderTimer <= 0) {
        if (officePhase === 'idle') {
          if (Math.random() > CALM_STAND_CHANCE) {
            ch.wanderTimer = randomRange(pauseMin, pauseMax);
            if (ch.seatId) {
              const seat = seats.get(ch.seatId);
              if (seat && ch.tileCol === seat.seatCol && ch.tileRow === seat.seatRow) {
                ch.state = CharacterState.TYPE;
                ch.dir = seat.facingDir;
                ch.frame = 0;
                ch.frameTimer = 0;
                ch.seatTimer = randomRange(CALM_IDLE_PAUSE_MIN_SEC, CALM_IDLE_PAUSE_MAX_SEC);
              }
            }
            break;
          }
        }

        if (ch.wanderCount >= ch.wanderLimit && ch.seatId) {
          const seat = seats.get(ch.seatId);
          if (seat) {
            const path = findPath(ch.tileCol, ch.tileRow, seat.seatCol, seat.seatRow, tileMap, blockedTiles);
            if (path.length > 0) {
              ch.path = path;
              ch.moveProgress = 0;
              ch.state = CharacterState.WALK;
              ch.frame = 0;
              ch.frameTimer = 0;
              break;
            }
          }
        }
        if (walkableTiles.length > 0) {
          const target = walkableTiles[Math.floor(Math.random() * walkableTiles.length)];
          const path = findPath(ch.tileCol, ch.tileRow, target.col, target.row, tileMap, blockedTiles);
          if (path.length > 0) {
            ch.path = path;
            ch.moveProgress = 0;
            ch.state = CharacterState.WALK;
            ch.frame = 0;
            ch.frameTimer = 0;
            ch.wanderCount++;
          }
        }
        ch.wanderTimer = randomRange(pauseMin, pauseMax);
      }
      break;
    }

    case CharacterState.WALK: {
      if (ch.frameTimer >= WALK_FRAME_DURATION_SEC) {
        ch.frameTimer -= WALK_FRAME_DURATION_SEC;
        ch.frame = (ch.frame + 1) % 4;
      }

      if (ch.path.length === 0) {
        const center = tileCenter(ch.tileCol, ch.tileRow);
        ch.x = center.x;
        ch.y = center.y;

        if (ch.isActive) {
          // Check if arrived at whiteboard target
          if (ch.whiteboardTarget) {
            const wb = ch.whiteboardTarget;
            if (ch.tileCol === wb.col && ch.tileRow === wb.row) {
              ch.state = CharacterState.TYPE;
              ch.dir = wb.facingDir;
              ch.bubble = 'lightbulb';
              ch.bubbleTimer = 0;
              ch.whiteboardTimer = 2.5 + Math.random() * 1.5;
              ch.frame = 0;
              ch.frameTimer = 0;
              break;
            }
          }
          if (!ch.seatId) {
            ch.state = CharacterState.TYPE;
            ch.bubble = 'gear';
            ch.bubbleTimer = 0;
          } else {
            const seat = seats.get(ch.seatId);
            if (seat && ch.tileCol === seat.seatCol && ch.tileRow === seat.seatRow) {
              ch.state = CharacterState.TYPE;
              ch.dir = seat.facingDir;
              ch.bubble = 'gear';
              ch.bubbleTimer = 0;
            } else {
              ch.state = CharacterState.IDLE;
            }
          }
        } else {
          if (ch.seatId) {
            const seat = seats.get(ch.seatId);
            if (seat && ch.tileCol === seat.seatCol && ch.tileRow === seat.seatRow) {
              ch.state = CharacterState.TYPE;
              ch.dir = seat.facingDir;
              if (ch.seatTimer < 0) {
                ch.seatTimer = 0;
              } else {
                ch.seatTimer = randomRange(SEAT_REST_MIN_SEC, SEAT_REST_MAX_SEC);
              }
              ch.wanderCount = 0;
              ch.wanderLimit = randomInt(WANDER_MOVES_BEFORE_REST_MIN, WANDER_MOVES_BEFORE_REST_MAX);
              ch.frame = 0;
              ch.frameTimer = 0;
              break;
            }
          }
          ch.state = CharacterState.IDLE;
          const pMin = officePhase === 'active' ? ACTIVE_WANDER_PAUSE_MIN_SEC : WANDER_PAUSE_MIN_SEC;
          const pMax = officePhase === 'active' ? ACTIVE_WANDER_PAUSE_MAX_SEC : WANDER_PAUSE_MAX_SEC;
          ch.wanderTimer = randomRange(pMin, pMax);
        }
        ch.frame = 0;
        ch.frameTimer = 0;
        break;
      }

      const nextTile = ch.path[0];
      ch.dir = directionBetween(ch.tileCol, ch.tileRow, nextTile.col, nextTile.row);

      const walkSpeed = (officePhase === 'active' && ch.isActive) ? ACTIVE_WALK_SPEED_PX_PER_SEC : WALK_SPEED_PX_PER_SEC;
      ch.moveProgress += (walkSpeed / TILE_SIZE) * dt;

      const fromCenter = tileCenter(ch.tileCol, ch.tileRow);
      const toCenter = tileCenter(nextTile.col, nextTile.row);
      const t = Math.min(ch.moveProgress, 1);
      ch.x = fromCenter.x + (toCenter.x - fromCenter.x) * t;
      ch.y = fromCenter.y + (toCenter.y - fromCenter.y) * t;

      if (ch.moveProgress >= 1) {
        ch.tileCol = nextTile.col;
        ch.tileRow = nextTile.row;
        ch.x = toCenter.x;
        ch.y = toCenter.y;
        ch.path.shift();
        ch.moveProgress = 0;
      }

      if (ch.isActive) {
        // If heading to whiteboard, path to whiteboard
        if (ch.whiteboardTarget) {
          const wb = ch.whiteboardTarget;
          const lastStep = ch.path[ch.path.length - 1];
          if (!lastStep || lastStep.col !== wb.col || lastStep.row !== wb.row) {
            const newPath = findPath(ch.tileCol, ch.tileRow, wb.col, wb.row, tileMap, blockedTiles);
            if (newPath.length > 0) {
              ch.path = newPath;
              ch.moveProgress = 0;
            }
          }
        } else if (ch.seatId) {
          const seat = seats.get(ch.seatId);
          if (seat) {
            const lastStep = ch.path[ch.path.length - 1];
            if (!lastStep || lastStep.col !== seat.seatCol || lastStep.row !== seat.seatRow) {
              const newPath = findPath(ch.tileCol, ch.tileRow, seat.seatCol, seat.seatRow, tileMap, blockedTiles);
              if (newPath.length > 0) {
                ch.path = newPath;
                ch.moveProgress = 0;
              }
            }
          }
        }
      }
      break;
    }

    case CharacterState.CELEBRATE: {
      if (ch.path.length > 0) {
        if (ch.frameTimer >= WALK_FRAME_DURATION_SEC) {
          ch.frameTimer -= WALK_FRAME_DURATION_SEC;
          ch.frame = (ch.frame + 1) % 4;
        }
        const nextTile = ch.path[0];
        ch.dir = directionBetween(ch.tileCol, ch.tileRow, nextTile.col, nextTile.row);
        ch.moveProgress += (WALK_SPEED_PX_PER_SEC / TILE_SIZE) * dt;
        const fromCenter = tileCenter(ch.tileCol, ch.tileRow);
        const toCenter = tileCenter(nextTile.col, nextTile.row);
        const t = Math.min(ch.moveProgress, 1);
        ch.x = fromCenter.x + (toCenter.x - fromCenter.x) * t;
        ch.y = fromCenter.y + (toCenter.y - fromCenter.y) * t;
        if (ch.moveProgress >= 1) {
          ch.tileCol = nextTile.col;
          ch.tileRow = nextTile.row;
          ch.x = toCenter.x;
          ch.y = toCenter.y;
          ch.path.shift();
          ch.moveProgress = 0;
        }
      } else {
        ch.dir = Direction.DOWN;
        ch.frame = 0;
        ch.bubble = 'check';
      }
      break;
    }
  }
}

export function getCharacterSprite(ch: Character, sprites: CharacterSprites): SpriteData {
  switch (ch.state) {
    case CharacterState.TYPE:
      return sprites.typing[ch.dir][ch.frame % 2];
    case CharacterState.WALK:
      return sprites.walk[ch.dir][ch.frame % 4];
    case CharacterState.CELEBRATE:
      if (ch.path.length > 0) {
        return sprites.walk[ch.dir][ch.frame % 4];
      }
      return sprites.walk[ch.dir][1];
    case CharacterState.IDLE:
      return sprites.walk[ch.dir][1];
    default:
      return sprites.walk[ch.dir][1];
  }
}
