import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  
  // Performance optimizations
  gsap.config({
    nullTargetWarn: false,
    trialWarn: false,
  });
  
  // Optimize ScrollTrigger performance
  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    ignoreMobileResize: true,
    limitCallbacks: true,
  });
}

/**
 * Fade in animation with slide up effect
 */
export const fadeInUp = (element, options = {}) => {
  if (!element) return null;
  
  const {
    delay = 0,
    duration = 1,
    y = 60,
    ease = 'power3.out',
    scrollTrigger = {},
    stagger,
  } = options;

  try {
    const animation = gsap.from(element, {
      opacity: 0,
      y,
      duration,
      delay,
      ease,
      stagger,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        ...scrollTrigger,
      },
    });

    // Track the ScrollTrigger instance for cleanup
    if (typeof window !== 'undefined' && window.addScrollTrigger) {
      window.addScrollTrigger(animation.scrollTrigger);
    }

    return animation;
  } catch (error) {
    console.warn('Error in fadeInUp animation:', error);
    return null;
  }
};

/**
 * Fade in animation with slide from left
 */
export const fadeInLeft = (element, options = {}) => {
  if (!element) return null;
  
  const {
    delay = 0,
    duration = 1,
    x = -60,
    ease = 'power3.out',
    scrollTrigger = {},
    stagger,
  } = options;

  try {
    const animation = gsap.from(element, {
      opacity: 0,
      x,
      duration,
      delay,
      ease,
      stagger,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        ...scrollTrigger,
      },
    });

    if (typeof window !== 'undefined' && window.addScrollTrigger) {
      window.addScrollTrigger(animation.scrollTrigger);
    }

    return animation;
  } catch (error) {
    console.warn('Error in fadeInLeft animation:', error);
    return null;
  }
};

/**
 * Fade in animation with slide from right
 */
export const fadeInRight = (element, options = {}) => {
  if (!element) return null;
  
  const {
    delay = 0,
    duration = 1,
    x = 60,
    ease = 'power3.out',
    scrollTrigger = {},
    stagger,
  } = options;

  try {
    const animation = gsap.from(element, {
      opacity: 0,
      x,
      duration,
      delay,
      ease,
      stagger,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        ...scrollTrigger,
      },
    });

    if (typeof window !== 'undefined' && window.addScrollTrigger) {
      window.addScrollTrigger(animation.scrollTrigger);
    }

    return animation;
  } catch (error) {
    console.warn('Error in fadeInRight animation:', error);
    return null;
  }
};

/**
 * Scale in animation with bounce effect
 */
export const scaleIn = (element, options = {}) => {
  const {
    delay = 0,
    duration = 1,
    scale = 0.8,
    ease = 'back.out(1.7)',
    scrollTrigger = {},
    stagger,
  } = options;

  const animation = gsap.from(element, {
    opacity: 0,
    scale,
    duration,
    delay,
    ease,
    stagger,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...scrollTrigger,
    },
  });

  if (typeof window !== 'undefined' && window.addScrollTrigger) {
    window.addScrollTrigger(animation.scrollTrigger);
  }

  return animation;
};

/**
 * Parallax effect for background elements
 */
export const parallax = (element, options = {}) => {
  if (!element) return null;
  
  const {
    speed = 0.5,
    direction = 'vertical',
    scrollTrigger = {},
    ease = 'none'
  } = options;

  try {
    const animationProperties = {};
    
    if (direction === 'vertical') {
      animationProperties.y = () => -window.innerHeight * speed;
    } else if (direction === 'horizontal') {
      animationProperties.x = () => -window.innerWidth * speed;
    }

    const animation = gsap.to(element, {
      ...animationProperties,
      ease,
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        ...scrollTrigger,
      },
    });

    if (typeof window !== 'undefined' && window.addScrollTrigger) {
      window.addScrollTrigger(animation.scrollTrigger);
    }

    return animation;
  } catch (error) {
    console.warn('Error in parallax animation:', error);
    return null;
  }
};

/**
 * Text reveal animation with word-by-word or character-by-character effect
 */
export const textReveal = (element, options = {}) => {
  const { 
    delay = 0, 
    duration = 1, 
    stagger = 0.05, 
    ease = 'power3.out',
    type = 'words', // 'words' or 'chars'
    scrollTrigger = {}
  } = options;

  // Split text into words or characters
  let elements;
  if (type === 'chars') {
    // Split into characters
    const text = element.innerText;
    element.innerHTML = '';
    elements = [];
    
    text.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(100%) rotateX(90deg)';
      element.appendChild(span);
      elements.push(span);
    });
  } else {
    // Split into words
    const words = element.innerText.split(' ');
    element.innerHTML = '';
    elements = [];
    
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(100%) rotateX(90deg)';
      element.appendChild(span);
      elements.push(span);
      
      // Add space after word (except last one)
      if (index < words.length - 1) {
        const space = document.createElement('span');
        space.textContent = '\u00A0';
        element.appendChild(space);
      }
    });
  }

  const animation = gsap.to(elements, {
    opacity: 1,
    y: 0,
    rotateX: 0,
    duration,
    delay,
    stagger,
    ease,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...scrollTrigger,
    },
  });

  if (typeof window !== 'undefined' && window.addScrollTrigger) {
    window.addScrollTrigger(animation.scrollTrigger);
  }

  return animation;
};

/**
 * Stagger animation for multiple elements with creative effects
 */
export const staggerReveal = (elements, options = {}) => {
  if (!elements || elements.length === 0) return null;
  
  const {
    delay = 0,
    duration = 0.8,
    stagger = 0.15,
    y = 50,
    rotation = 0,
    scale = 1,
    ease = 'power3.out',
    scrollTrigger = {},
    from = 'start', // 'start', 'center', 'end', 'random'
  } = options;

  try {
    const animation = gsap.from(elements, {
      opacity: 0,
      y,
      rotation,
      scale,
      duration,
      delay,
      stagger: {
        each: stagger,
        from,
      },
      ease,
      scrollTrigger: {
        trigger: elements[0] || elements,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        ...scrollTrigger,
      },
    });

    if (typeof window !== 'undefined' && window.addScrollTrigger) {
      window.addScrollTrigger(animation.scrollTrigger);
    }

    return animation;
  } catch (error) {
    console.warn('Error in staggerReveal animation:', error);
    return null;
  }
};

/**
 * Pin section animation for creating scroll-based sequences
 */
export const pinSection = (element, options = {}) => {
  const { 
    duration = '100%',
    scrollTrigger = {},
    pinSpacing = true
  } = options;

  const trigger = ScrollTrigger.create({
    trigger: element,
    pin: true,
    start: 'top top',
    end: `+=${duration}`,
    pinSpacing,
    ...scrollTrigger,
  });

  if (typeof window !== 'undefined' && window.addScrollTrigger) {
    window.addScrollTrigger(trigger);
  }

  return trigger;
};

/**
 * Timeline animation for complex sequences
 */
export const createScrollTimeline = (element, animations, options = {}) => {
  const {
    scrollTrigger = {},
    defaults = {
      ease: 'power3.out',
      duration: 1,
    },
  } = options;

  const tl = gsap.timeline({
    ...defaults,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...scrollTrigger,
    },
  });

  // Add all animations to the timeline
  animations.forEach(anim => {
    tl[anim.type](...anim.params);
  });

  if (typeof window !== 'undefined' && window.addScrollTrigger) {
    window.addScrollTrigger(tl.scrollTrigger);
  }

  return tl;
};

/**
 * Morphing animation for SVG paths
 */
export const morphPath = (element, toPath, options = {}) => {
  const {
    delay = 0,
    duration = 1.5,
    ease = 'power3.inOut',
    scrollTrigger = {},
  } = options;

  const animation = gsap.to(element, {
    attr: { d: toPath },
    duration,
    delay,
    ease,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...scrollTrigger,
    },
  });

  if (typeof window !== 'undefined' && window.addScrollTrigger) {
    window.addScrollTrigger(animation.scrollTrigger);
  }

  return animation;
};

/**
 * 3D flip animation for cards
 */
export const flip3D = (element, options = {}) => {
  const {
    delay = 0,
    duration = 1,
    direction = 'y', // 'x', 'y', or 'z'
    ease = 'power3.inOut',
    scrollTrigger = {},
  } = options;

  const rotationProperty = direction === 'x' ? 'rotationX' : 
                          direction === 'y' ? 'rotationY' : 'rotationZ';

  const animation = gsap.from(element, {
    opacity: 0,
    [rotationProperty]: direction === 'x' || direction === 'y' ? 90 : 180,
    transformPerspective: 1000,
    duration,
    delay,
    ease,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...scrollTrigger,
    },
  });

  if (typeof window !== 'undefined' && window.addScrollTrigger) {
    window.addScrollTrigger(animation.scrollTrigger);
  }

  return animation;
};

/**
 * Magnetic hover effect (not scroll-based but useful for interactive elements)
 */
export const magneticHover = (element, options = {}) => {
  const { strength = 0.3 } = options;

  const handleMouseMove = (e) => {
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
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.target, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  // Return cleanup function
  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
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

/**
 * Create a scroll progress indicator
 */
export const scrollProgress = (element, options = {}) => {
  const {
    direction = 'horizontal', // 'horizontal' or 'vertical'
    ease = 'none',
    scrollTrigger = {},
  } = options;

  const animationProperties = {};
  
  if (direction === 'horizontal') {
    animationProperties.scaleX = 1;
  } else {
    animationProperties.scaleY = 1;
  }

  // Set initial state
  gsap.set(element, {
    scaleX: 0,
    scaleY: 0,
    transformOrigin: direction === 'horizontal' ? 'left center' : 'center top',
  });

  const animation = gsap.to(element, {
    ...animationProperties,
    ease,
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      ...scrollTrigger,
    },
  });

  if (typeof window !== 'undefined' && window.addScrollTrigger) {
    window.addScrollTrigger(animation.scrollTrigger);
  }

  return animation;
};