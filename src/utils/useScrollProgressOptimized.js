'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function useScrollProgressOptimized() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const tickingRef = useRef(false);
  const lastProgressRef = useRef(0);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Create a ScrollTrigger instance to track scroll progress
    const scrollTrigger = ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        // Only update if progress changed significantly (throttling)
        if (!tickingRef.current && Math.abs(self.progress - lastProgressRef.current) > 0.01) {
          tickingRef.current = true;
          
          // Use requestAnimationFrame for smooth updates
          requestAnimationFrame(() => {
            setScrollProgress(self.progress);
            lastProgressRef.current = self.progress;
            tickingRef.current = false;
          });
        }
      },
    });

    // Add to global ScrollTrigger tracking for cleanup
    if (window.addScrollTrigger) {
      window.addScrollTrigger(scrollTrigger);
    }

    // Cleanup on unmount
    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return scrollProgress;
}