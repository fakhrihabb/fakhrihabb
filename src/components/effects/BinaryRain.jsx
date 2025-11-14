'use client';

import { useEffect, useRef } from 'react';

export default function BinaryRain() {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    
    // Set canvas size with device pixel ratio for sharpness
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio, 2); // Cap at 2x for performance
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 250);
    };
    window.addEventListener('resize', handleResize);

    // Reduce column count for performance
    const fontSize = 20;
    const columns = Math.floor(window.innerWidth / fontSize);
    const drops = new Array(columns).fill(0).map(() => Math.random() * -50);

    // Pre-calculate characters
    const matrixChars = ['0', '1'];

    let lastTime = 0;
    const fps = 30; // Reduce from 60fps to 30fps
    const interval = 1000 / fps;

    // Animation with requestAnimationFrame
    const draw = (currentTime) => {
      animationFrameRef.current = requestAnimationFrame(draw);
      
      const deltaTime = currentTime - lastTime;
      if (deltaTime < interval) return;
      
      lastTime = currentTime - (deltaTime % interval);

      // Fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.font = `bold ${fontSize}px monospace`;

      // Batch draw operations
      for (let i = 0; i < columns; i++) {
        const text = matrixChars[Math.floor(Math.random() * 2)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Simplified brightness
        const brightness = Math.random() > 0.5 ? 255 : 200;
        ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
        ctx.fillText(text, x, y);

        // Reset drop
        if (y > window.innerHeight && Math.random() > 0.98) {
          drops[i] = 0;
        }

        drops[i] += 0.7;
      }
    };

    animationFrameRef.current = requestAnimationFrame(draw);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-background pointer-events-none"
      style={{ opacity: 0.3, willChange: 'auto' }}
    />
  );
}
