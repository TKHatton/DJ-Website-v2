import React, { useCallback, useEffect, useRef, useState } from 'react';
import { OfficeState } from './officeState';
import { startGameLoop } from './gameLoop';
import { renderFrame } from './renderer';
import { loadCharacterSpriteSheets } from './sprites';
import { loadWallSpriteSheet } from './wallSpriteLoader';

interface PixelOfficeProps {
  /** Current demo phase */
  phase: 'select' | 'customize' | 'generating' | 'revealing' | 'complete';
  /** Index of currently revealing agent (0-5) */
  revealIndex: number;
  /** Number of agents */
  agentCount: number;
}

const PixelOffice: React.FC<PixelOfficeProps> = ({ phase, revealIndex, agentCount }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const officeRef = useRef<OfficeState | null>(null);
  const [zoom, setZoom] = useState(5);
  const [ready, setReady] = useState(false);

  // Initialize: load sprite sheets then create office state
  useEffect(() => {
    let cancelled = false;
    Promise.all([loadCharacterSpriteSheets(), loadWallSpriteSheet()]).then(() => {
      if (cancelled) return;
      const office = new OfficeState();
      // Add agents with palette indices
      for (let i = 0; i < Math.min(agentCount, 6); i++) {
        office.addAgent(i, i);
      }
      officeRef.current = office;
      setReady(true);
    });
    return () => { cancelled = true; };
  }, [agentCount]);

  // Respond to phase/revealIndex changes
  useEffect(() => {
    const office = officeRef.current;
    if (!office) return;

    // Update office phase
    office.setOfficePhase(phase);

    if (phase === 'select' || phase === 'customize') {
      // All agents idle (wandering)
      for (let i = 0; i < agentCount; i++) {
        office.setAgentActive(i, false);
      }
      office.setActiveAgent(null);
    } else if (phase === 'generating') {
      // All agents idle, waiting
      for (let i = 0; i < agentCount; i++) {
        office.setAgentActive(i, false);
      }
      office.setActiveAgent(null);
    } else if (phase === 'revealing') {
      // Activate agents up to revealIndex
      for (let i = 0; i < agentCount; i++) {
        if (i <= revealIndex) {
          office.setAgentActive(i, true);
        } else {
          office.setAgentActive(i, false);
        }
      }
      office.setActiveAgent(revealIndex);
    } else if (phase === 'complete') {
      // All agents complete
      for (let i = 0; i < agentCount; i++) {
        office.setAgentActive(i, false);
      }
      office.setActiveAgent(null);
    }
  }, [phase, revealIndex, agentCount]);

  // Responsive zoom based on container width
  const updateZoom = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const width = container.clientWidth;
    // Office is 22 tiles x 16px = 352px base width
    // Calculate zoom to fill container
    const idealZoom = Math.floor(width / 352);
    const newZoom = Math.max(5, Math.min(8, idealZoom));
    setZoom(newZoom);
  }, []);

  useEffect(() => {
    updateZoom();
    const observer = new ResizeObserver(() => updateZoom());
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [updateZoom]);

  // Resize canvas backing store and run game loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const office = officeRef.current;
    if (!canvas || !container || !office) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    resizeCanvas();
    const observer = new ResizeObserver(() => resizeCanvas());
    observer.observe(container);

    const dpr = window.devicePixelRatio || 1;
    const effectiveZoom = zoom * dpr;

    const stop = startGameLoop(canvas, {
      update: (dt) => {
        office.update(dt);
      },
      render: (ctx) => {
        renderFrame(
          ctx,
          canvas.width,
          canvas.height,
          office.tileMap,
          office.furniture,
          office.getCharacters(),
          effectiveZoom,
          office.layout.tileColors,
          office.layout.cols,
          office.layout.rows,
          // Camera follow disabled — map fits in viewport, use simple centering
        );
      },
    });

    return () => {
      stop();
      observer.disconnect();
    };
  }, [zoom, ready]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden rounded-2xl md:rounded-3xl"
      style={{
        height: '400px',
        background: '#1E1E2E',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block' }}
        aria-hidden="true"
      />
    </div>
  );
};

export default PixelOffice;
