'use client';

import { useEffect, useRef } from 'react';
import { scrollProgress } from '@/utils/scrollAnimations';

export default function ScrollProgress() {
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (!progressBarRef.current) return;

    // Create horizontal scroll progress bar
    scrollProgress(progressBarRef.current, {
      direction: 'horizontal',
      scrollTrigger: {
        start: 'top top',
        end: 'bottom bottom',
      },
    });

    return () => {
      // Cleanup will be handled by the SmoothScrollProvider
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-bg-secondary/40 z-50">
      <div
        ref={progressBarRef}
        className="h-full bg-brand-primary origin-left"
        style={{
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
        }}
      ></div>
    </div>
  );
}