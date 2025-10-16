import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Fade in animation with slide up
 */
export const fadeInUp = (element, options = {}) => {
  const {
    delay = 0,
    duration = 1,
    y = 60,
    ease = 'power3.out',
    scrollTrigger,
  } = options;

  return gsap.from(element, {
    opacity: 0,
    y,
    duration,
    delay,
    ease,
    scrollTrigger: scrollTrigger
      ? {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          ...scrollTrigger,
        }
      : undefined,
  });
};

/**
 * Fade in animation with slide from left
 */
export const fadeInLeft = (element, options = {}) => {
  const {
    delay = 0,
    duration = 1,
    x = -60,
    ease = 'power3.out',
    scrollTrigger,
  } = options;

  return gsap.from(element, {
    opacity: 0,
    x,
    duration,
    delay,
    ease,
    scrollTrigger: scrollTrigger
      ? {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          ...scrollTrigger,
        }
      : undefined,
  });
};

/**
 * Fade in animation with slide from right
 */
export const fadeInRight = (element, options = {}) => {
  const {
    delay = 0,
    duration = 1,
    x = 60,
    ease = 'power3.out',
    scrollTrigger,
  } = options;

  return gsap.from(element, {
    opacity: 0,
    x,
    duration,
    delay,
    ease,
    scrollTrigger: scrollTrigger
      ? {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          ...scrollTrigger,
        }
      : undefined,
  });
};

/**
 * Stagger animation for multiple elements
 */
export const staggerFadeIn = (elements, options = {}) => {
  const {
    delay = 0,
    duration = 0.8,
    stagger = 0.2,
    y = 40,
    ease = 'power3.out',
    scrollTrigger,
  } = options;

  return gsap.from(elements, {
    opacity: 0,
    y,
    duration,
    delay,
    stagger,
    ease,
    scrollTrigger: scrollTrigger
      ? {
          trigger: elements[0] || elements,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          ...scrollTrigger,
        }
      : undefined,
  });
};

/**
 * Scale in animation
 */
export const scaleIn = (element, options = {}) => {
  const {
    delay = 0,
    duration = 1,
    scale = 0.8,
    ease = 'back.out(1.7)',
    scrollTrigger,
  } = options;

  return gsap.from(element, {
    opacity: 0,
    scale,
    duration,
    delay,
    ease,
    scrollTrigger: scrollTrigger
      ? {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          ...scrollTrigger,
        }
      : undefined,
  });
};

/**
 * Parallax effect
 */
export const parallax = (element, options = {}) => {
  const { speed = 1, scrollTrigger } = options;

  return gsap.to(element, {
    y: () => -window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: scrollTrigger
      ? {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          ...scrollTrigger,
        }
      : {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
  });
};

/**
 * Text reveal animation (line by line)
 */
export const textReveal = (element, options = {}) => {
  const { delay = 0, duration = 1, stagger = 0.1, ease = 'power3.out' } = options;

  // Split text into lines or words if needed
  const lines = element.querySelectorAll('.line') || [element];

  return gsap.from(lines, {
    opacity: 0,
    y: 30,
    rotateX: -90,
    transformOrigin: 'top center',
    duration,
    delay,
    stagger,
    ease,
  });
};

/**
 * Pin section animation
 */
export const pinSection = (element, options = {}) => {
  const { duration, scrollTrigger } = options;

  return ScrollTrigger.create({
    trigger: element,
    pin: true,
    start: 'top top',
    end: duration ? `+=${duration}` : 'bottom bottom',
    pinSpacing: true,
    ...scrollTrigger,
  });
};

/**
 * Scroll-linked progress animation
 */
export const scrollProgress = (element, animation, options = {}) => {
  return gsap.to(element, {
    ...animation,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      ...options.scrollTrigger,
    },
  });
};

/**
 * Magnetic hover effect
 */
export const magneticHover = (element, options = {}) => {
  const { strength = 0.3 } = options;

  element.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY, target } = e;
    const { offsetWidth, offsetHeight } = target;

    const x = (offsetX - offsetWidth / 2) * strength;
    const y = (offsetY - offsetHeight / 2) * strength;

    gsap.to(target, {
      x,
      y,
      duration: 0.3,
      ease: 'power2.out',
    });
  });

  element.addEventListener('mouseleave', (e) => {
    gsap.to(e.target, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: 'elastic.out(1, 0.3)',
    });
  });
};

/**
 * Cleanup all ScrollTriggers
 */
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

/**
 * Refresh ScrollTrigger after layout changes
 */
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};
