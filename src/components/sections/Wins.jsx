'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { fadeInUp, staggerReveal } from '@/utils/scrollAnimations';
import { wins } from '@/data/portfolio';

export default function Wins() {
  const winsRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const winCardsRef = useRef([]);

  useEffect(() => {
    if (!winsRef.current) return;

    // Animate section title
    if (titleRef.current) fadeInUp(titleRef.current, { delay: 0.05, duration: 0.4 });
    if (titleLineRef.current) fadeInUp(titleLineRef.current, { delay: 0.1, duration: 0.4 });

    // Animate win cards - ensure they all start from the same position
    const validCards = winCardsRef.current.filter(Boolean);
    if (validCards.length > 0) {
      staggerReveal(validCards, { stagger: 0.15, delay: 0.15, duration: 0.4, y: 30 });
    }

    // Cleanup
    return () => {
      // GSAP animations will be cleaned up by the SmoothScrollProvider
    };
  }, []);

  return (
    <section
      ref={winsRef}
      id="wins"
      className="relative pt-32 pb-32 px-4 sm:px-6 md:px-12 z-content overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl w-full">
        {/* Section Title - Pixelated */}
        <div ref={titleRef} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4" style={{ fontFamily: 'var(--font-press-start), monospace' }}>
            {'< WINS />'}
          </h2>
          <div ref={titleLineRef} className="w-24 h-1 bg-brand-primary mx-auto"></div>
        </div>

        {/* Wins Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {wins.map((win, index) => (
            <div
              key={win.id}
              ref={el => winCardsRef.current[index] = el}
              className="group glass glass-hover rounded-2xl overflow-hidden relative flex flex-col h-full"
              style={{ transform: 'none' }}
            >
              {/* Win Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={win.image}
                  alt={win.competition}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex flex-col flex-grow">

              {/* Rank Badge */}
              <div className="flex justify-center">
                <span className="px-3 py-1 bg-brand-primary/20 border-2 border-brand-primary text-sm font-bold text-brand-primary uppercase tracking-wider rounded-full" style={{ fontFamily: 'var(--font-vt323), monospace' }}>
                  {win.rank}
                </span>
              </div>

              {/* Competition Name */}
              <h3 className="text-2xl font-bold text-text-primary text-center group-hover:text-brand-primary transition-colors duration-300">
                {win.competition}
              </h3>

              {/* Organizer */}
              <p className="text-lg text-text-secondary text-center" style={{ fontFamily: 'var(--font-vt323), monospace' }}>
                {win.organizer}
              </p>

              {/* Date */}
              <p className="text-lg text-text-tertiary text-center" style={{ fontFamily: 'var(--font-vt323), monospace' }}>
                {win.date}
              </p>

              {/* Description */}
              <p className="text-xl text-text-secondary leading-relaxed text-center pt-4 flex-grow" style={{ fontFamily: 'var(--font-vt323), monospace' }}>
                {win.description}
              </p>

              {/* Technologies/Categories */}
              {win.categories && (
                <div className="flex flex-wrap gap-2 justify-center pt-4">
                  {win.categories.map((category, catIndex) => (
                    <span
                      key={catIndex}
                      className="px-3 py-1 bg-bg-tertiary border border-brand-primary/30 rounded-md text-base text-text-secondary hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
                      style={{ fontFamily: 'var(--font-vt323), monospace' }}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}

              {/* Link */}
              {win.link && win.link !== "#" && (
                <div className="flex justify-center pt-4">
                  <a
                    href={win.link}
                    className="flex items-center gap-2 text-lg text-brand-primary hover:text-brand-secondary transition-colors duration-300 group/link"
                    style={{ fontFamily: 'var(--font-vt323), monospace' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Details</span>
                    <svg
                      className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform duration-300"
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
                </div>
              )}

              {/* Neon Border Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none neon-border"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hidden lg:block absolute top-1/4 right-1/4 w-64 lg:w-96 h-64 lg:h-96 bg-brand-secondary opacity-5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="hidden lg:block absolute bottom-1/4 left-1/4 w-64 lg:w-96 h-64 lg:h-96 bg-brand-primary opacity-5 rounded-full blur-3xl pointer-events-none -z-10"></div>
    </section>
  );
}
