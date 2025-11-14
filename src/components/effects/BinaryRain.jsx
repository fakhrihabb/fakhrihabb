'use client';

import { useEffect, useRef } from 'react';

export default function BinaryRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix rain configuration - more dense for better effect
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1).map(() => Math.random() * -100);

    // Characters - binary only for true matrix aesthetic
    const chars = '01';
    const matrixChars = chars.split('');

    // Animation
    const draw = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set font with pixelated style
      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];

        // Calculate position
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Gradient effect - varying brightness for depth
        const brightness = Math.random() * 80 + 175;
        ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;

        // Draw character
        ctx.fillText(text, x, y);

        // Reset drop randomly with varying frequency
        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }

        // Move drop with slight speed variation
        drops[i] += 0.5 + Math.random() * 0.3;
      }
    };

    // Animation loop - smoother 60fps
    const interval = setInterval(draw, 50); // Adjusted for better performance

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-background pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  );
}
