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

    // Show navigation after scroll
    const showNavigation = () => {
      if (!isNavVisible && window.scrollY > window.innerHeight * 0.5) {
        setIsNavVisible(true);
        gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
        gsap.to(navItemsRef.current, { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          ease: 'power3.out',
          stagger: 0.05,
          delay: 0.2,
        });
      } else if (isNavVisible && window.scrollY < window.innerHeight * 0.5) {
        setIsNavVisible(false);
        gsap.to(navRef.current, { y: -100, opacity: 0, duration: 0.4, ease: 'power3.in' });
      }
    };

    // Track active section
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
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
    };

    window.addEventListener('scroll', showNavigation);
    window.addEventListener('scroll', updateActiveSection);
    showNavigation();
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', showNavigation);
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, [isNavVisible]);

  const scrollToSection = (sectionId) => {
    // Special case for 'hero' section - scroll to top of page
    if (sectionId === 'hero') {
      if (window.getLenis) {
        const lenis = window.getLenis();
        lenis.scrollTo(0, {
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      } else {
        // Fallback to native smooth scrolling
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      // Use Lenis for smooth scrolling if available
      if (window.getLenis) {
        const lenis = window.getLenis();
        lenis.scrollTo(section, {
          offset: -80, // Account for fixed nav height
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      } else {
        // Fallback to native smooth scrolling
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-brand-primary/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text cursor-pointer" onClick={() => scrollToSection('hero')}>
            FH
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section, index) => (
              <button
                key={section.id}
                ref={el => navItemsRef.current[index] = el}
                onClick={() => scrollToSection(section.id)}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  activeSection === section.id 
                    ? 'text-brand-primary' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {section.label}
                
                {/* Active indicator */}
                {activeSection === section.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-primary"
            onClick={() => {
              // For mobile, you might want to implement a mobile menu
              scrollToSection('about');
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}