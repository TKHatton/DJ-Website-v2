import { MAX_DELTA_TIME_SEC } from './constants';

export interface GameLoopCallbacks {
  update: (dt: number) => void;
  render: (ctx: CanvasRenderingContext2D) => void;
}

// Target ~30fps on mobile (33ms), ~45fps on desktop (22ms) — still smooth but much less GPU work
const MOBILE_FRAME_INTERVAL_MS = 33;
const DESKTOP_FRAME_INTERVAL_MS = 22;

export function startGameLoop(canvas: HTMLCanvasElement, callbacks: GameLoopCallbacks): () => void {
  const ctx = canvas.getContext('2d')!;
  ctx.imageSmoothingEnabled = false;

  const isMobile = navigator.maxTouchPoints > 0 || window.innerWidth < 768;
  const minInterval = isMobile ? MOBILE_FRAME_INTERVAL_MS : DESKTOP_FRAME_INTERVAL_MS;

  let lastTime = 0;
  let lastRenderTime = 0;
  let rafId = 0;
  let stopped = false;

  const frame = (time: number) => {
    if (stopped) return;
    const dt = lastTime === 0 ? 0 : Math.min((time - lastTime) / 1000, MAX_DELTA_TIME_SEC);
    lastTime = time;

    // Always update logic at full rate for smooth movement
    callbacks.update(dt);

    // Throttle rendering to target fps
    if (time - lastRenderTime >= minInterval) {
      lastRenderTime = time;
      ctx.imageSmoothingEnabled = false;
      callbacks.render(ctx);
    }

    rafId = requestAnimationFrame(frame);
  };

  rafId = requestAnimationFrame(frame);

  return () => {
    stopped = true;
    cancelAnimationFrame(rafId);
  };
}
