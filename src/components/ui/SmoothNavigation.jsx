'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';

export default function SmoothNavigation() {
  const navRef = useRef(null);
  const navItemsRef = useRef([]);
  const [activeSection, setActiveSection] = useState('hero');
  const [isNavVisible, setIsNavVisible] = useState(false);
  const router = useRouter();

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    if (!navRef.current) return;

    // Initial animation for navigation
    gsap.set(navRef.current, { y: -100, opacity: 0 });
    gsap.set(navItemsRef.current, { y: -20, opacity: 0 });

    let scrollTimeout;
    let lastScrollY = window.scrollY;

    // Throttled scroll handler
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const currentScrollY = window.scrollY;
        
        // Show/hide navigation
        if (!isNavVisible && currentScrollY > window.innerHeight * 0.5) {
          setIsNavVisible(true);
          gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' });
          gsap.to(navItemsRef.current, { 
            y: 0, 
            opacity: 1, 
            duration: 0.5, 
            ease: 'power2.out',
            stagger: 0.04,
            delay: 0.15,
          });
        } else if (isNavVisible && currentScrollY < window.innerHeight * 0.5) {
          setIsNavVisible(false);
          gsap.to(navRef.current, { y: -100, opacity: 0, duration: 0.3, ease: 'power2.in' });
        }

        // Update active section
        const scrollPosition = currentScrollY + window.innerHeight / 2;
        
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section.id);
              break;
            }
          }
        }
        
        lastScrollY = currentScrollY;
      }, 100); // Throttle to 100ms
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isNavVisible]);

  const scrollToSection = (sectionId) => {
    // Special case for 'hero' section - scroll to top of page
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

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

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 glass border-b-2 border-brand-primary/30 pixel-bg w-full"
    >
      <div className="max-w-7xl mx-auto px-3 md:px-6 py-3 md:py-4 w-full">
        <div className="flex items-center justify-between gap-2 w-full">
          {/* Logo - Pixelated Style */}
          <div
            className="text-sm sm:text-base md:text-2xl font-bold gradient-text cursor-pointer px-2 md:px-3 py-1 border-2 border-brand-primary/50 flex-shrink-0"
            onClick={() => scrollToSection('hero')}
            style={{ fontFamily: 'var(--font-press-start), monospace' }}
          >
            {'[ FH ]'}
          </div>

          {/* Navigation Items - Retro Style */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {sections.map((section, index) => (
              <button
                key={section.id}
                ref={el => navItemsRef.current[index] = el}
                onClick={() => scrollToSection(section.id)}
                className={`relative text-lg font-medium transition-colors duration-200 px-3 py-1 border border-transparent ${
                  activeSection === section.id
                    ? 'text-brand-primary border-brand-primary neon-glow'
                    : 'text-text-secondary hover:text-text-primary hover:border-brand-primary/50'
                }`}
                style={{ fontFamily: 'var(--font-vt323), monospace' }}
              >
                {activeSection === section.id ? `> ${section.label.toUpperCase()}` : section.label.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button - Pixelated */}
          <button
            className="md:hidden text-brand-primary border-2 border-brand-primary p-1.5 md:p-2 flex-shrink-0"
            onClick={() => {
              // For mobile, you might want to implement a mobile menu
              scrollToSection('about');
            }}
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="square" strokeLinejoin="miter" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}