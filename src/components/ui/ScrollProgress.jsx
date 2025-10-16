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
    <div className="fixed top-0 left-0 w-full h-1 bg-bg-secondary/20 z-50">
      <div
        ref={progressBarRef}
        className="h-full bg-gradient-to-r from-brand-primary to-brand-tertiary origin-left"
      ></div>
    </div>
  );
}