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

    // Animate section title and subtitle with consistent faster delays
    if (titleRef.current) fadeInUp(titleRef.current, { delay: 0.1 });
    if (subtitleRef.current) fadeInUp(subtitleRef.current, { delay: 0.15 });
    if (titleLineRef.current) fadeInUp(titleLineRef.current, { delay: 0.2 });

    // Animate timeline line with simple fade-in
    if (timelineLineRef.current) {
      fadeInUp(timelineLineRef.current, { delay: 0.25 });
    }

    // Animate timeline items with simpler stagger effect
    if (timelineItemsRef.current.length > 0) {
      const validItems = timelineItemsRef.current.filter(Boolean);
      staggerReveal(validItems, {
        stagger: 0.1,
        y: 30,
        delay: 0.3,
        scrollTrigger: {
          start: 'top 85%',
        },
      });
    }

    // Parallax effect for decorative element
    if (decorativeElementRef.current) {
      parallax(decorativeElementRef.current, {
        speed: 0.2,
        direction: 'vertical',
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
      className="relative min-h-screen py-32 px-6 md:px-12 z-content"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-20 text-center">
          <h2 ref={titleRef} className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Experience
          </h2>
          <p ref={subtitleRef} className="text-xl text-text-secondary mt-4">
            My journey through internships and organizations
          </p>
          <div ref={titleLineRef} className="w-24 h-1 bg-brand-primary rounded-full mx-auto mt-6"></div>
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
                    <span className="px-3 py-1 bg-brand-primary/20 border border-brand-primary rounded-full text-xs font-semibold text-brand-primary uppercase tracking-wider">
                      {exp.type}
                    </span>
                    <span className="text-sm text-text-muted">{exp.duration}</span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-brand-primary font-medium mb-3 neon-text">
                    {exp.organization}
                  </p>

                  {/* Period */}
                  <p className="text-sm text-text-muted mb-4">{exp.period}</p>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((desc, descIndex) => (
                      <li
                        key={descIndex}
                        className="text-text-secondary text-sm flex gap-2"
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
                        className="px-3 py-1 bg-bg-tertiary border border-brand-primary/30 rounded-md text-xs text-text-secondary"
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
        className="absolute top-1/3 right-0 w-80 h-80 bg-brand-secondary opacity-5 rounded-full blur-3xl pointer-events-none"
      ></div>
    </section>
  );
}
