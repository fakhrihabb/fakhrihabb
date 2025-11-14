'use client';

import { useEffect, useState } from 'react';

export default function MatrixCursor() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    let trailId = 0;
    let lastTime = 0;
    const throttleDelay = 100; // Only create trails every 100ms

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < throttleDelay) return; // Throttle to reduce trail frequency
      lastTime = now;

      // Generate random binary numbers scattered throughout the circle
      const numbers = [];
      const numCount = 5; // Further reduced for less density
      const binaryValue = trailId % 2 === 0 ? '1' : '0'; // Alternate between 1 and 0

      for (let i = 0; i < numCount; i++) {
        // Random angle
        const angle = Math.random() * 2 * Math.PI;
        // Random radius (0 to max radius) to fill the entire circle
        const radius = Math.random() * 100;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        numbers.push({
          value: binaryValue, // All numbers in this trail use the same value
          x,
          y,
          delay: Math.random() * 0.2,
        });
      }

      const newTrail = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
        numbers,
      };

      setTrails((prev) => [...prev, newTrail]);

      // Remove trail after animation completes (faster fade)
      setTimeout(() => {
        setTrails((prev) => prev.filter((trail) => trail.id !== newTrail.id));
      }, 1200);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="absolute"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            width: '200px',
            height: '200px',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {trail.numbers.map((number, index) => (
            <span
              key={index}
              className="absolute text-matrix-green font-mono text-base font-bold matrix-number"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${number.x}px), calc(-50% + ${number.y}px))`,
                animationDelay: `${number.delay}s`,
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
