import React from 'react';

const PIXEL_COLORS: Record<number, (agentColor: string) => string> = {
  0: () => 'transparent',
  1: (c) => c,
  2: (c) => c + '80',
};

interface PixelSpriteProps {
  pixels: number[][];
  color: string;
  pixelSize?: number;
  active?: boolean;
  complete?: boolean;
  className?: string;
}

const PixelSprite: React.FC<PixelSpriteProps> = ({
  pixels,
  color,
  pixelSize = 10,
  active = false,
  complete = false,
  className = '',
}) => (
  <div
    role="img" aria-hidden="true"
    className={`${active ? 'animate-pixel-bounce' : complete ? '' : 'animate-agent-breathe'} ${className}`}
    style={{
      display: 'inline-grid',
      gridTemplateColumns: `repeat(${pixels[0].length}, ${pixelSize}px)`,
      gap: 0,
      imageRendering: 'pixelated' as React.CSSProperties['imageRendering'],
    }}
  >
    {pixels.flat().map((cell, i) => (
      <div
        key={i}
        style={{
          width: pixelSize,
          height: pixelSize,
          backgroundColor: PIXEL_COLORS[cell]?.(color) ?? 'transparent',
        }}
      />
    ))}
  </div>
);

export default PixelSprite;
