'use client';

import { personalInfo, skills, techStack } from '@/data/portfolio';
import { useEffect, useRef } from 'react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerReveal, scaleIn, parallax } from '@/utils/scrollAnimations';

export default function About() {
  const aboutRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const bioRef = useRef(null);
  const contactInfoRef = useRef(null);
  const skillsRefs = useRef([]);
  const techStackTitleRef = useRef(null);
  const techStackRefs = useRef([]);
  const decorativeElementRef = useRef(null);

  useEffect(() => {
    if (!aboutRef.current) return;

    // Animate section title
    if (titleRef.current) fadeInUp(titleRef.current, { delay: 0.05, duration: 0.4 });
    if (titleLineRef.current) fadeInUp(titleLineRef.current, { delay: 0.1, duration: 0.4 });

    // Animate bio section
    if (bioRef.current) fadeInLeft(bioRef.current, { delay: 0.15, duration: 0.4 });

    // Animate contact info
    if (contactInfoRef.current) fadeInRight(contactInfoRef.current, { delay: 0.2, duration: 0.4 });

    // Animate skills sections
    const validSkills = skillsRefs.current.filter(Boolean);
    if (validSkills.length > 0) {
      staggerReveal(validSkills, { stagger: 0.08, delay: 0.25, duration: 0.4 });
    }

    // Animate tech stack items
    const validTechStack = techStackRefs.current.filter(Boolean);
    if (validTechStack.length > 0) {
      staggerReveal(validTechStack, { stagger: 0.02, delay: 0.35, duration: 0.4 });
    }

    // Cleanup
    return () => {
      // GSAP animations will be cleaned up by the SmoothScrollProvider
    };
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative pt-32 pb-32 px-4 sm:px-6 md:px-12 z-content overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl w-full">
        {/* Section Title - Pixelated */}
        <div ref={titleRef} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4" style={{ fontFamily: 'var(--font-press-start), monospace' }}>
            {'< ABOUT_ME />'}
          </h2>
          <div ref={titleLineRef} className="w-24 h-1 bg-brand-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio Section - Pixelated */}
          <div className="space-y-6">
            <div ref={bioRef} className="glass glass-hover p-8 border-2 border-brand-primary/30 pixel-corners">
              <p className="text-xl text-text-secondary leading-relaxed mb-4" style={{ fontFamily: 'var(--font-vt323), monospace' }}>
                {personalInfo.bio}
              </p>
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-brand-primary font-semibold hover:text-brand-secondary transition-colors duration-200 cursor-pointer inline-flex items-center gap-2 group border-2 border-brand-primary px-4 py-2 pixel-corners neon-glow"
                style={{ fontFamily: 'var(--font-vt323), monospace', fontSize: '1.2rem' }}
              >
                {'> CONNECT_NOW'}
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>

            {/* Location & Email - Pixelated */}
            <div ref={contactInfoRef} className="flex flex-wrap gap-4">
              <div className="glass px-4 sm:px-6 py-3 border-2 border-brand-primary/30 flex items-center gap-2 pixel-corners max-w-full" style={{ fontFamily: 'var(--font-vt323), monospace', fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>
                <span className="text-brand-primary text-xl flex-shrink-0">{'>'}</span>
                <span className="text-text-secondary truncate">{personalInfo.location}</span>
              </div>
              <div className="glass px-4 sm:px-6 py-3 border-2 border-brand-primary/30 flex items-center gap-2 pixel-corners max-w-full overflow-hidden" style={{ fontFamily: 'var(--font-vt323), monospace', fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)' }}>
                <span className="text-brand-primary text-xl flex-shrink-0">{'@'}</span>
                <span className="text-text-secondary truncate break-all">{personalInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Skills Section - Pixelated */}
          <div className="space-y-6">
            {skills.map((skillCategory, index) => (
              <div
                key={skillCategory.category}
                ref={el => skillsRefs.current[index] = el}
                className="glass glass-hover p-6 border-2 border-brand-primary/30 pixel-corners"
              >
                <h3 className="text-xl font-semibold text-brand-primary mb-4 neon-text" style={{ fontFamily: 'var(--font-press-start), monospace' }}>
                  {'[ '}{skillCategory.category.toUpperCase()}{' ]'}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillCategory.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-bg-secondary border-2 border-brand-primary/20 text-text-secondary hover:border-brand-primary hover:text-brand-primary transition-all duration-200 pixel-corners"
                      style={{ fontFamily: 'var(--font-vt323), monospace', fontSize: '1.1rem' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack - Pixelated */}
        <div className="mt-8 w-full">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 sm:gap-6">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                ref={el => techStackRefs.current[index] = el}
                className="glass glass-hover p-6 border-2 border-brand-primary/30 flex flex-col items-center justify-center gap-3 group pixel-corners"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 group-hover:scale-110 transition-transform duration-200"
                  style={{ imageRendering: 'pixelated' }}
                />
                <span className="text-sm text-text-secondary text-center group-hover:text-brand-primary transition-colors duration-200" style={{ fontFamily: 'var(--font-vt323), monospace' }}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
