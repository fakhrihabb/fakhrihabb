'use client';

import { personalInfo, socialLinks } from '@/data/portfolio';
import { useEffect, useRef } from 'react';
import { fadeInUp, staggerReveal, scaleIn, parallax, textReveal } from '@/utils/scrollAnimations';

const iconMap = {
  github: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  email: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  twitter: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  ),
};

export default function Contact() {
  const contactRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const subtitleRef = useRef(null);
  const socialLinksRef = useRef([]);
  const ctaRef = useRef(null);
  const decorativeElementsRef = useRef([]);

  useEffect(() => {
    if (!contactRef.current) return;

    // Animate section title with simple fade-in
    if (titleRef.current) fadeInUp(titleRef.current, { delay: 0.1 });
    
    if (titleLineRef.current) fadeInUp(titleLineRef.current, { delay: 0.2, duration: 0.5 });
    if (subtitleRef.current) fadeInUp(subtitleRef.current, { delay: 0.3 });

    // Simple fade-in for social links
    setTimeout(() => {
      socialLinksRef.current.forEach((ref, index) => {
        if (ref) {
          fadeInUp(ref, { delay: index * 0.1 });
        }
      });
    }, 400);

    // Animate CTA section with fade-in
    if (ctaRef.current) {
      fadeInUp(ctaRef.current, {
        delay: 0.8,
        duration: 0.6,
      });
    }

    // Parallax effects for decorative elements
    decorativeElementsRef.current.forEach((element, index) => {
      if (element) {
        parallax(element, {
          speed: 0.2 + (index * 0.05),
          direction: index % 2 === 0 ? 'vertical' : 'horizontal',
        });
      }
    });

    // Cleanup
    return () => {
      // GSAP animations will be cleaned up by the SmoothScrollProvider
    };
  }, []);

  return (
    <section
      ref={contactRef}
      id="contact"
      className="relative min-h-screen py-32 px-6 md:px-12 z-content flex items-center justify-center"
    >
      <div className="container mx-auto max-w-4xl text-center">
        {/* Section Title */}
        <div className="mb-8">
          <h2 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-4">
            Let's Connect
          </h2>
          <div ref={titleLineRef} className="w-24 h-1 bg-brand-primary rounded-full mx-auto"></div>
        </div>

        {/* Subtitle */}
        <p ref={subtitleRef} className="text-xl md:text-2xl text-text-secondary mb-16 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              ref={el => socialLinksRef.current[index] = el}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover p-6 rounded-2xl flex items-center gap-4 group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-brand-primary/10 rounded-full text-brand-primary group-hover:bg-brand-primary group-hover:text-bg-primary transition-all duration-300 group-hover:scale-110">
                {iconMap[social.icon]}
              </div>
              <div className="text-left flex-1">
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-brand-primary transition-colors duration-300">
                  {social.name}
                </h3>
                <p className="text-sm text-text-secondary">{social.handle}</p>
              </div>
              <svg
                className="w-5 h-5 text-brand-primary transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="glass p-8 rounded-2xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Have a project in mind?
          </h3>
          <p className="text-text-secondary mb-6">
            Feel free to reach out via email or any of the platforms above.
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-bg-primary rounded-full font-semibold hover:bg-brand-secondary transition-all duration-300 hover:scale-105 neon-glow"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Send Email</span>
          </a>
        </div>
      </div>

      {/* Decorative Elements with parallax */}
      <div
        ref={el => decorativeElementsRef.current[0] = el}
        className="absolute top-1/4 left-10 w-80 h-80 bg-brand-primary opacity-10 rounded-full blur-3xl animate-pulse-glow pointer-events-none"
      ></div>
      <div
        ref={el => decorativeElementsRef.current[1] = el}
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-brand-tertiary opacity-10 rounded-full blur-3xl animate-pulse-glow pointer-events-none"
        style={{ animationDelay: '1s' }}
      ></div>
    </section>
  );
}
