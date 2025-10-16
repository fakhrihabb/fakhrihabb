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

    // Animate section title with consistent faster delays
    if (titleRef.current) fadeInUp(titleRef.current, { delay: 0.1 });
    if (titleLineRef.current) fadeInUp(titleLineRef.current, { delay: 0.15 });

    // Animate bio section
    if (bioRef.current) fadeInLeft(bioRef.current, { delay: 0.2 });

    // Animate contact info
    if (contactInfoRef.current) fadeInRight(contactInfoRef.current, { delay: 0.25 });

    // Animate skills sections with reduced delay
    skillsRefs.current.forEach((ref, index) => {
      if (ref) fadeInUp(ref, { delay: 0.3 + (index * 0.05) });
    });

    // Animate tech stack title
    if (techStackTitleRef.current) fadeInUp(techStackTitleRef.current, { delay: 0.4 });

    // Simple fade-in for tech stack items
    setTimeout(() => {
      techStackRefs.current.forEach((ref, index) => {
        if (ref) {
          fadeInUp(ref, { delay: index * 0.03 });
        }
      });
    }, 450);

    // Parallax effect for decorative element
    if (decorativeElementRef.current) {
      parallax(decorativeElementRef.current, {
        speed: 0.2,
        direction: 'horizontal',
      });
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
      className="relative min-h-screen py-32 px-6 md:px-12 z-content"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div ref={titleRef} className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div ref={titleLineRef} className="w-24 h-1 bg-brand-primary rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio Section */}
          <div className="space-y-6">
            <div ref={bioRef} className="glass glass-hover p-8 rounded-2xl">
              <p className="text-lg text-text-secondary leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Location & Email */}
            <div ref={contactInfoRef} className="flex flex-wrap gap-4">
              <div className="glass px-6 py-3 rounded-full flex items-center gap-2">
                <span className="text-brand-primary text-xl">📍</span>
                <span className="text-text-secondary">{personalInfo.location}</span>
              </div>
              <div className="glass px-6 py-3 rounded-full flex items-center gap-2">
                <span className="text-brand-primary text-xl">✉️</span>
                <span className="text-text-secondary">{personalInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            {skills.map((skillCategory, index) => (
              <div
                key={index}
                ref={el => skillsRefs.current[index] = el}
                className="glass glass-hover p-6 rounded-2xl"
              >
                <h3 className="text-2xl font-semibold text-brand-primary mb-4 neon-text">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-bg-secondary border border-brand-primary/20 rounded-lg text-text-secondary hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <h3 ref={techStackTitleRef} className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Tech Stack & Tools
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                ref={el => techStackRefs.current[index] = el}
                className="glass glass-hover p-6 rounded-xl flex flex-col items-center justify-center gap-3 group"
              >
                <span className="text-4xl group-hover:scale-125 transition-transform duration-300">
                  {tech.icon}
                </span>
                <span className="text-sm text-text-secondary text-center group-hover:text-brand-primary transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Gradient with parallax */}
      <div
        ref={decorativeElementRef}
        className="absolute top-1/2 left-0 w-96 h-96 bg-brand-primary opacity-5 rounded-full blur-3xl pointer-events-none"
      ></div>
    </section>
  );
}
