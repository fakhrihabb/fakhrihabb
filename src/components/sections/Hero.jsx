'use client';

import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center z-content overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center space-y-8">
          {/* Main Title */}
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            <span className="block gradient-text animate-gradient">
              {personalInfo.name}
            </span>
          </h1>

          {/* Tagline */}
          <div className="space-y-2">
            <p className="text-xl md:text-2xl lg:text-3xl text-text-secondary font-light">
              {personalInfo.title}
            </p>
            <p className="text-lg md:text-xl text-brand-primary font-medium neon-text">
              {personalInfo.tagline}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#projects"
              className="glass glass-hover px-8 py-4 rounded-full text-lg font-medium text-text-primary transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full text-lg font-medium bg-brand-primary text-bg-primary transition-all duration-300 hover:bg-brand-secondary hover:scale-105 neon-glow"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
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

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-brand-primary opacity-10 rounded-full blur-3xl animate-pulse-glow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-brand-tertiary opacity-10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" style={{ animationDelay: '1s' }}></div>
    </section>
  );
}
