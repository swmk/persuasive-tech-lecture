import React, { useEffect, useState } from 'react';

interface LaserPointerProps {
  active: boolean;
}

interface Point {
  x: number;
  y: number;
  id: number;
}

export const LaserPointer: React.FC<LaserPointerProps> = ({ active }) => {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [trail, setTrail] = useState<Point[]>([]);
  const [clicks, setClicks] = useState<Point[]>([]);

  useEffect(() => {
    if (!active) {
      document.body.style.cursor = '';
      setPos(null);
      setTrail([]);
      return;
    }

    document.body.style.cursor = 'none';

    let pointId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPos(newPos);

      // Add point to trail for a smooth laser beam effect
      const p = { x: e.clientX, y: e.clientY, id: ++pointId };
      setTrail(prev => [...prev.slice(-6), p]);
    };

    const handleMouseDown = (e: MouseEvent) => {
      const clickPoint = { x: e.clientX, y: e.clientY, id: ++pointId };
      setClicks(prev => [...prev.slice(-4), clickPoint]);

      // Remove click ripple after animation
      setTimeout(() => {
        setClicks(prev => prev.filter(c => c.id !== clickPoint.id));
      }, 600);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [active]);

  if (!active || !pos) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Laser Trail */}
      {trail.map((pt, idx) => {
        const opacity = (idx + 1) / trail.length;
        const size = 6 + idx * 1.2;
        return (
          <div
            key={pt.id}
            className="absolute rounded-full bg-red-500 transform -translate-x-1/2 -translate-y-1/2 transition-opacity"
            style={{
              left: pt.x,
              top: pt.y,
              width: `${size}px`,
              height: `${size}px`,
              opacity: opacity * 0.5,
              boxShadow: '0 0 8px #ff0033, 0 0 16px #ff0033'
            }}
          />
        );
      })}

      {/* Click Burst Shockwaves */}
      {clicks.map(click => (
        <div
          key={click.id}
          className="absolute rounded-full border-2 border-red-500 transform -translate-x-1/2 -translate-y-1/2 animate-ping"
          style={{
            left: click.x,
            top: click.y,
            width: '32px',
            height: '32px',
            boxShadow: '0 0 20px #ff0000',
            animationDuration: '0.6s'
          }}
        />
      ))}

      {/* Main Bright Red Laser Pointer Core Dot */}
      <div
        className="absolute rounded-full bg-red-500 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: pos.x,
          top: pos.y,
          width: '12px',
          height: '12px',
          boxShadow: '0 0 6px #ffffff, 0 0 12px #ff0000, 0 0 24px #ff0000, 0 0 36px #ff0033',
          background: 'radial-gradient(circle, #ffffff 0%, #ff1a1a 40%, #cc0000 100%)'
        }}
      >
        <div className="w-full h-full rounded-full animate-pulse bg-red-400 opacity-80" />
      </div>

      {/* Subtle floating badge informing user how to exit */}
      <div className="absolute top-20 right-6 bg-red-950/80 border border-red-500/50 text-red-200 px-3 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
        Laser Pointer Active [L]
      </div>
    </div>
  );
};
