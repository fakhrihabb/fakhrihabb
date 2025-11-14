'use client';

import { experiences } from '@/data/portfolio';
import { useEffect, useRef } from 'react';
import { fadeInUp, staggerReveal, createScrollTimeline, flip3D, scaleIn, parallax } from '@/utils/scrollAnimations';

export default function Experience() {
  const experienceRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleLineRef = useRef(null);
  const timelineItemsRef = useRef([]);
  const timelineLineRef = useRef(null);
  const decorativeElementRef = useRef(null);

  useEffect(() => {
    if (!experienceRef.current) return;

    // Animate section title
    if (titleRef.current) fadeInUp(titleRef.current, { delay: 0.05, duration: 0.4 });
    if (titleLineRef.current) fadeInUp(titleLineRef.current, { delay: 0.1, duration: 0.4 });

    // Animate timeline line
    if (timelineLineRef.current) {
      fadeInUp(timelineLineRef.current, { delay: 0.15, duration: 0.4 });
    }

    // Animate timeline items
    const validItems = timelineItemsRef.current.filter(Boolean);
    if (validItems.length > 0) {
      staggerReveal(validItems, {
        stagger: 0.12,
        y: 25,
        delay: 0.2,
        duration: 0.4,
      });
    }

    // Cleanup
    return () => {
      // GSAP animations will be cleaned up by the SmoothScrollProvider
    };
  }, []);

  return (
    <section
      ref={experienceRef}
      id="experience"
      className="relative pt-32 pb-32 px-4 sm:px-6 md:px-12 z-content overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl w-full">
        {/* Section Title - Pixelated */}
        <div ref={titleRef} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4" style={{ fontFamily: 'var(--font-press-start), monospace' }}>
            {'< EXPERIENCE />'}
          </h2>
          <div ref={titleLineRef} className="w-24 h-1 bg-brand-primary mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            ref={timelineLineRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-tertiary hidden md:block"
          ></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={el => timelineItemsRef.current[index] = el}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-5/12 glass glass-hover p-6 rounded-2xl">
                  {/* Type Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-brand-primary/20 border border-brand-primary rounded-full text-base font-semibold text-brand-primary uppercase tracking-wider" style={{ fontFamily: 'var(--font-vt323), monospace' }}>
                      {exp.type}
                    </span>
                    <span className="text-lg text-text-muted" style={{ fontFamily: 'var(--font-vt323), monospace' }}>{exp.duration}</span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-brand-primary font-medium mb-3 neon-text">
                    {exp.organization}
                  </p>

                  {/* Period */}
                  <p className="text-lg text-text-muted mb-4" style={{ fontFamily: 'var(--font-vt323), monospace' }}>{exp.period}</p>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((desc, descIndex) => (
                      <li
                        key={descIndex}
                        className="text-text-secondary text-xl flex gap-2"
                        style={{ fontFamily: 'var(--font-vt323), monospace' }}
                      >
                        <span className="text-brand-primary mt-1">▹</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-bg-tertiary border border-brand-primary/30 rounded-md text-base text-text-secondary"
                        style={{ fontFamily: 'var(--font-vt323), monospace' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="relative">
                    <div className="w-6 h-6 bg-brand-primary rounded-full border-4 border-bg-primary neon-glow animate-pulse-glow"></div>
                    {/* Connector Line */}
                    <div
                      className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-brand-primary/50 ${
                        index % 2 === 0 ? 'right-full' : 'left-full'
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements with parallax */}
      <div
        ref={decorativeElementRef}
        className="hidden lg:block absolute top-1/3 right-0 w-48 lg:w-80 h-48 lg:h-80 bg-brand-secondary opacity-5 rounded-full blur-3xl pointer-events-none -z-10"
      ></div>
    </section>
  );
}
