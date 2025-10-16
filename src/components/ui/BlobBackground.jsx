'use client';

import { useRef, useEffect } from 'react';
import useScrollProgressOptimized from '@/utils/useScrollProgressOptimized';

export default function BlobBackground() {
  const blobRef = useRef(null);
  const blobInnerRef = useRef(null);
  const scrollProgress = useScrollProgressOptimized();

  useEffect(() => {
    if (!blobRef.current) return;

    // Calculate transform values based on scroll progress
    const translateX = Math.sin(scrollProgress * Math.PI * 2) * 100;
    const translateY = Math.cos(scrollProgress * Math.PI * 1.5) * 50;
    const scale = 1 + Math.sin(scrollProgress * Math.PI) * 0.3;
    const rotate = scrollProgress * 360;

    // Apply CSS transforms
    blobRef.current.style.transform = `
      translate(${translateX}px, ${translateY}px)
      scale(${scale})
      rotate(${rotate}deg)
    `;
    
    // Morph the blob by changing border-radius
    if (blobInnerRef.current) {
      const borderRadius1 = 40 + Math.sin(scrollProgress * Math.PI * 2) * 20;
      const borderRadius2 = 60 + Math.cos(scrollProgress * Math.PI * 2) * 20;
      blobInnerRef.current.style.borderRadius = `${borderRadius1}% ${borderRadius2}% ${60 - borderRadius1}% ${40 - borderRadius2}%`;
      
      // Change filter based on scroll
      const blurAmount = 30 + Math.sin(scrollProgress * Math.PI) * 20;
      blobInnerRef.current.style.filter = `blur(${blurAmount}px)`;
    }
  }, [scrollProgress]);

  return (
    <div className="fixed inset-0 z-background pointer-events-none overflow-hidden">
      <div
        ref={blobRef}
        className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out"
      >
        {/* Main blob */}
        <div
          ref={blobInnerRef}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(0,255,136,0.8) 0%, rgba(0,255,136,0.4) 25%, rgba(0,204,106,0.2) 50%, transparent 70%)',
            filter: 'blur(30px)',
            borderRadius: '50%',
          }}
        />
        
        {/* Secondary blob for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 70% 70%, rgba(102,255,170,0.6) 0%, rgba(102,255,170,0.3) 30%, transparent 60%)',
            filter: 'blur(40px)',
            borderRadius: '50%',
            transform: 'scale(0.8) translate(10%, 10%)',
          }}
        />
        
        {/* Tertiary blob for glow effect */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle, rgba(0,255,136,0.9) 0%, rgba(0,255,136,0.5) 20%, transparent 50%)',
            filter: 'blur(20px)',
            borderRadius: '50%',
            transform: 'scale(0.6) translate(-20%, -20%)',
            opacity: 0.7,
          }}
        />
      </div>
    </div>
  );
}