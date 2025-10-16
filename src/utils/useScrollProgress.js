'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Create a ScrollTrigger instance to track scroll progress
    const scrollTrigger = ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        setScrollProgress(self.progress);
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