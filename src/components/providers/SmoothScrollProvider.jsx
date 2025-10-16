'use client';

import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

// Register GSAP ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef();
  const scrollTriggerInstances = useRef([]);

  useEffect(() => {
    // Store the lenis instance
    const lenis = lenisRef.current?.lenis;
    
    // Connect GSAP ScrollTrigger to Lenis
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    // Add GSAP ticker to update Lenis with performance optimizations
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0); // Remove lag smoothing for smoother animations

    // Update ScrollTrigger when Lenis scrolls
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
      
      // Performance optimization: Throttle scroll events
      let ticking = false;
      lenis.on('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            ticking = false;
          });
          ticking = true;
        }
      });
    }

    // Handle resize events with debouncing
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      gsap.ticker.remove(update);
      
      // Kill all ScrollTrigger instances
      scrollTriggerInstances.current.forEach(instance => {
        if (instance.kill) instance.kill();
      });
      scrollTriggerInstances.current = [];
      
      // Remove Lenis event listener
      if (lenis) {
        lenis.off('scroll', ScrollTrigger.update);
      }
      
      // Clean up resize listener
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Function to add ScrollTrigger instances to our tracking array
  const addScrollTrigger = (instance) => {
    scrollTriggerInstances.current.push(instance);
    return instance;
  };

  // Expose a method to get the lenis instance
  useEffect(() => {
    // Make ScrollTrigger and addScrollTrigger available globally
    if (typeof window !== 'undefined') {
      window.gsap = gsap;
      window.ScrollTrigger = ScrollTrigger;
      window.addScrollTrigger = addScrollTrigger;
      window.getLenis = () => lenisRef.current?.lenis;
    }
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        autoRaf: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
