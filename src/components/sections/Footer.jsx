'use client';

import { personalInfo, socialLinks } from '@/data/portfolio';

const iconMap = {
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  email: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  instagram: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
    </svg>
  ),
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 md:px-12 z-content border-t-4 border-brand-primary pixel-bg overflow-hidden">
      <div className="container mx-auto max-w-7xl w-full">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3
              className="text-2xl font-bold gradient-text"
              style={{ fontFamily: 'var(--font-press-start), monospace' }}
            >
              {personalInfo.name}
            </h3>
            <p className="text-text-secondary text-lg" style={{ fontFamily: 'var(--font-vt323), monospace' }}>
              {'> '}{personalInfo.tagline}
            </p>
            <p className="text-text-muted text-lg" style={{ fontFamily: 'var(--font-vt323), monospace' }}>
              {'> '}{personalInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-brand-primary" style={{ fontFamily: 'var(--font-press-start), monospace' }}>
              [ LINKS ]
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#about"
                className="text-text-secondary hover:text-brand-primary transition-colors duration-200 text-lg"
                style={{ fontFamily: 'var(--font-vt323), monospace' }}
              >
                {'> ABOUT'}
              </a>
              <a
                href="#experience"
                className="text-text-secondary hover:text-brand-primary transition-colors duration-200 text-lg"
                style={{ fontFamily: 'var(--font-vt323), monospace' }}
              >
                {'> EXPERIENCE'}
              </a>
              <a
                href="#projects"
                className="text-text-secondary hover:text-brand-primary transition-colors duration-200 text-lg"
                style={{ fontFamily: 'var(--font-vt323), monospace' }}
              >
                {'> PROJECTS'}
              </a>
              <a
                href="#contact"
                className="text-text-secondary hover:text-brand-primary transition-colors duration-200 text-lg"
                style={{ fontFamily: 'var(--font-vt323), monospace' }}
              >
                {'> CONTACT'}
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-brand-primary" style={{ fontFamily: 'var(--font-press-start), monospace' }}>
              [ CONNECT ]
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-bg-secondary border-2 border-brand-primary/40 text-text-secondary hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/10 transition-all duration-200 hover:scale-110 pixel-corners neon-glow"
                  aria-label={social.name}
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </div>
            <p className="text-text-muted text-lg mt-4" style={{ fontFamily: 'var(--font-vt323), monospace' }}>
              {'> STATUS: OPEN_FOR_OPPORTUNITIES'}
            </p>
          </div>
        </div>

        {/* Divider - Pixelated */}
        <div className="w-full h-1 bg-brand-primary/30 mb-8" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, var(--brand-primary) 0px, var(--brand-primary) 4px, transparent 4px, transparent 8px)'
        }}></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-lg" style={{ fontFamily: 'var(--font-vt323), monospace' }}>
            {'© '}{currentYear} {personalInfo.name}{' // ALL_RIGHTS_RESERVED'}
          </p>

          <div className="flex items-center gap-6">
            <p className="text-text-muted text-lg" style={{ fontFamily: 'var(--font-vt323), monospace' }}>
              {'> BUILT_WITH: NEXT.JS + GSAP'}
            </p>
            <button
              onClick={scrollToTop}
              className="w-12 h-12 flex items-center justify-center bg-brand-primary/10 border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-bg-primary transition-all duration-200 hover:scale-110 pixel-corners neon-glow"
              aria-label="Scroll to top"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Gradient - Pixelated */}
      <div className="absolute bottom-0 left-0 w-full h-1" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 4px, var(--brand-primary) 4px, var(--brand-primary) 8px)'
      }}></div>
    </footer>
  );
}
