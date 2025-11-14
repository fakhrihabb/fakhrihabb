'use client';

import { personalInfo } from '@/data/portfolio';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TypingAnimation from '@/components/effects/TypingAnimation';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const buttonsRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80; // Account for fixed nav height
      const targetPosition = section.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (!heroRef.current) return;

    // Initial animations on mount - faster and simpler
    const tl = gsap.timeline();

    // Set initial states
    if (titleRef.current) gsap.set(titleRef.current, { opacity: 0, y: 30 });
    if (buttonsRef.current) gsap.set(buttonsRef.current, { opacity: 0, y: 15 });

    // Animate in sequence with consistent faster durations
    if (titleRef.current) tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
    if (buttonsRef.current) tl.to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2');

    // Cleanup
    return () => {
      // GSAP animations will be cleaned up by the SmoothScrollProvider
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center z-content overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl w-full">
        <div className="text-center space-y-8 max-w-full">
          {/* Main Title - Pixelated Matrix Style */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold pixel-corners"
            style={{ fontFamily: 'var(--font-press-start), monospace' }}
          >
            <span className="block gradient-text animate-gradient tracking-wider leading-relaxed">
              {personalInfo.name}
            </span>
          </h1>

          {/* Typing Animation - Code-like messages */}
          <TypingAnimation />

          {/* CTA Buttons - Pixelated Style */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8 w-full px-4">
            <div data-animation="fadeInLeft" className="w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('projects')}
                className="glass glass-hover px-4 sm:px-8 py-3 sm:py-4 text-lg font-medium text-text-primary transition-all border-2 border-brand-primary w-full sm:w-auto whitespace-nowrap"
                style={{ fontFamily: 'var(--font-vt323), monospace', fontSize: 'clamp(0.9rem, 3.5vw, 1.5rem)' }}
              >
                [ VIEW_PROJECTS ]
              </button>
            </div>
            <div data-animation="fadeInRight" className="w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 sm:px-8 py-3 sm:py-4 text-lg font-medium bg-brand-primary text-bg-primary transition-all border-2 border-brand-primary hover:bg-brand-secondary neon-glow w-full sm:w-auto whitespace-nowrap"
                style={{ fontFamily: 'var(--font-vt323), monospace', fontSize: 'clamp(0.9rem, 3.5vw, 1.5rem)' }}
              >
                [ CONNECT ]
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
