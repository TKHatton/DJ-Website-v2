import React, { useCallback, useEffect, useRef, useState } from 'react';
import { OfficeState } from './officeState';
import { startGameLoop } from './gameLoop';
import { renderFrame } from './renderer';

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
  const [zoom, setZoom] = useState(3);

  // Initialize office state once
  useEffect(() => {
    const office = new OfficeState();
    // Add 6 agents with palette indices 0-5
    for (let i = 0; i < Math.min(agentCount, 6); i++) {
      office.addAgent(i, i);
    }
    officeRef.current = office;
  }, [agentCount]);

  // Respond to phase/revealIndex changes
  useEffect(() => {
    const office = officeRef.current;
    if (!office) return;

    if (phase === 'select' || phase === 'customize') {
      // All agents idle (wandering)
      for (let i = 0; i < agentCount; i++) {
        office.setAgentActive(i, false);
      }
    } else if (phase === 'generating') {
      // All agents idle, waiting
      for (let i = 0; i < agentCount; i++) {
        office.setAgentActive(i, false);
      }
    } else if (phase === 'revealing') {
      // Activate agents up to revealIndex
      for (let i = 0; i < agentCount; i++) {
        if (i <= revealIndex) {
          office.setAgentActive(i, true);
        } else {
          office.setAgentActive(i, false);
        }
      }
    } else if (phase === 'complete') {
      // All agents complete - deactivate so they wander
      for (let i = 0; i < agentCount; i++) {
        office.setAgentActive(i, false);
      }
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
    const newZoom = Math.max(2, Math.min(5, idealZoom));
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
        );
      },
    });

    return () => {
      stop();
      observer.disconnect();
    };
  }, [zoom]);

  // Calculate canvas height based on zoom and office dimensions
  // Office is 22x14 tiles, each 16px, so height = 14 * 16 * zoom = 224 * zoom
  const canvasHeight = 14 * 16 * zoom;

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden rounded-2xl md:rounded-3xl"
      style={{
        height: `${Math.min(canvasHeight + 32, 600)}px`,
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
