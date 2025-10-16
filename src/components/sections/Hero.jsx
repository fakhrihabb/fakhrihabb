'use client';

import { personalInfo } from '@/data/portfolio';
import { useEffect, useRef } from 'react';
import { textReveal, parallax } from '@/utils/scrollAnimations';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const floatingElementsRef = useRef([]);

  const scrollToSection = (sectionId) => {
    if (window.getLenis) {
      const lenis = window.getLenis();
      const section = document.getElementById(sectionId);
      if (section) {
        lenis.scrollTo(section, {
          offset: -80, // Account for fixed nav height
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    } else {
      // Fallback to native smooth scrolling
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const scrollToAbout = () => {
    scrollToSection('about');
  };

  useEffect(() => {
    if (!heroRef.current) return;

    // Initial animations on mount - faster and simpler
    const tl = gsap.timeline();
    
    // Set initial states
    if (titleRef.current) gsap.set(titleRef.current, { opacity: 0, y: 30 });
    if (subtitleRef.current) gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
    if (taglineRef.current) gsap.set(taglineRef.current, { opacity: 0, y: 20 });
    if (buttonsRef.current) gsap.set(buttonsRef.current, { opacity: 0, y: 15 });
    if (scrollIndicatorRef.current) gsap.set(scrollIndicatorRef.current, { opacity: 0, y: 15 });
    
    // Animate in sequence with consistent faster durations
    if (titleRef.current) tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
    if (subtitleRef.current) tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2');
    if (taglineRef.current) tl.to(taglineRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2');
    if (buttonsRef.current) tl.to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2');
    if (scrollIndicatorRef.current) tl.to(scrollIndicatorRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2');

    // Parallax effect for floating elements
    if (floatingElementsRef.current.length > 0) {
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          parallax(el, {
            speed: 0.2 + (index * 0.05),
            direction: 'vertical',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
            },
          });
        }
      });
    }

    // Cleanup
    return () => {
      // GSAP animations will be cleaned up by the SmoothScrollProvider
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center z-content overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center space-y-8">
          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            <span className="block gradient-text animate-gradient">
              {personalInfo.name}
            </span>
          </h1>

          {/* Tagline */}
          <div ref={subtitleRef} className="space-y-2">
            {/* <p className="text-xl md:text-2xl lg:text-3xl text-text-secondary font-light">
              {personalInfo.title}
            </p> */}
            <p ref={taglineRef} className="text-lg md:text-xl text-brand-primary font-medium neon-text">
              {personalInfo.tagline}
            </p>
          </div>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <div data-animation="fadeInLeft">
              <button
                onClick={() => scrollToSection('projects')}
                className="glass glass-hover px-8 py-4 rounded-full text-lg font-medium text-text-primary transition-all duration-300 hover:scale-105"
              >
                View My Work
              </button>
            </div>
            <div data-animation="fadeInRight">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-full text-lg font-medium bg-brand-primary text-bg-primary transition-all duration-300 hover:bg-brand-secondary hover:scale-105 neon-glow"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <div className="flex flex-col items-center gap-2 animate-float">
          <span className="text-sm text-text-secondary uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-brand-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-brand-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements with parallax */}
      <div
        ref={el => floatingElementsRef.current[0] = el}
        className="absolute top-1/4 left-10 w-32 h-32 bg-brand-primary opacity-10 rounded-full blur-3xl animate-pulse-glow pointer-events-none"
      ></div>
      <div
        ref={el => floatingElementsRef.current[1] = el}
        className="absolute bottom-1/4 right-10 w-40 h-40 bg-brand-tertiary opacity-10 rounded-full blur-3xl animate-pulse-glow pointer-events-none"
        style={{ animationDelay: '1s' }}
      ></div>
    </section>
  );
}
