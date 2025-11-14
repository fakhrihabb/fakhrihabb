'use client';

import { useEffect, useState, useRef } from 'react';

export default function MatrixCursor() {
  const [trails, setTrails] = useState([]);
  const poolSize = 8; // Limit maximum concurrent trails
  const timeoutRefs = useRef([]);
  const trailIdRef = useRef(0); // Use ref to persist across renders

  useEffect(() => {
    let lastTime = 0;
    const throttleDelay = 150; // Increase throttle delay

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < throttleDelay) return;
      lastTime = now;

      // Limit number of active trails
      setTrails((prevTrails) => {
        if (prevTrails.length >= poolSize) return prevTrails;

        // Reduce number count for better performance
        const numbers = [];
        const numCount = 3; // Reduced from 5
        const currentTrailId = trailIdRef.current++;
        const binaryValue = currentTrailId % 2 === 0 ? '1' : '0';

        for (let i = 0; i < numCount; i++) {
          const angle = Math.random() * 2 * Math.PI;
          const radius = Math.random() * 80; // Reduced radius
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          numbers.push({
            id: `${currentTrailId}-${i}`, // Unique ID for each number
            value: binaryValue,
            x,
            y,
            delay: Math.random() * 0.15,
          });
        }

        const newTrail = {
          id: currentTrailId,
          x: e.clientX,
          y: e.clientY,
          numbers,
        };

        // Remove trail after animation
        const timeoutId = setTimeout(() => {
          setTrails((prev) => prev.filter((trail) => trail.id !== newTrail.id));
        }, 1000); // Reduced from 1200ms
        
        timeoutRefs.current.push(timeoutId);

        // Keep only the most recent trails
        const updated = [...prevTrails, newTrail];
        return updated.slice(-poolSize);
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      timeoutRefs.current.forEach(clearTimeout);
    };
  }, []); // Remove dependency on trails.length

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]" style={{ willChange: 'auto' }}>
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="absolute"
          style={{
            left: `${Math.min(Math.max(trail.x, 100), typeof window !== 'undefined' ? window.innerWidth - 100 : trail.x)}px`,
            top: `${Math.min(Math.max(trail.y, 100), typeof window !== 'undefined' ? window.innerHeight - 100 : trail.y)}px`,
            width: '160px',
            height: '160px',
            transform: 'translate(-50%, -50%)',
            willChange: 'auto',
          }}
        >
          {trail.numbers.map((number) => (
            <span
              key={number.id}
              className="absolute text-matrix-green font-mono text-base font-bold matrix-number"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${number.x}px), calc(-50% + ${number.y}px))`,
                animationDelay: `${number.delay}s`,
                willChange: 'auto',
              }}
            >
              {number.value}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
