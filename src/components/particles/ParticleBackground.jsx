'use client';

import { useEffect, useState, useRef } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ParticleBackground() {
  const [init, setInit] = useState(false);
  const particlesRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    if (!init || !particlesRef.current) return;

    // Create scroll-based animation for particles
    const particlesContainer = particlesRef.current;
    
    // Animate particle movement based on scroll
    const scrollTrigger = ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        if (particlesContainer) {
          const progress = self.progress;
          
          // Move particles container based on scroll
          gsap.to(particlesContainer, {
            x: Math.sin(progress * Math.PI * 2) * 50,
            y: Math.cos(progress * Math.PI * 1.5) * 30,
            duration: 0.5,
            ease: 'power2.out'
          });
          
          // Try to access particles instance for more control
          try {
            const particles = particlesContainer.particles;
            if (particles) {
              // Adjust particle speed based on scroll
              const speed = 0.5 + progress * 2;
              particles.options.move.speed = speed;
              
              // Adjust particle opacity based on scroll
              const opacity = 0.1 + Math.sin(progress * Math.PI) * 0.3;
              particles.options.opacity.value = { min: opacity, max: opacity + 0.2 };
            }
          } catch (e) {
            // Fallback if particle instance is not accessible
          }
        }
      }
    });

    // Add to global ScrollTrigger tracking for cleanup
    if (window.addScrollTrigger) {
      window.addScrollTrigger(scrollTrigger);
    }

    return () => {
      scrollTrigger.kill();
    };
  }, [init]);

  const particlesLoaded = (container) => {
    console.log('Particles loaded:', container);
    particlesRef.current = container;
  };

  if (!init) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-particles pointer-events-none overflow-hidden">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        className="w-full h-full"
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: ['grab', 'bubble'],
                parallax: {
                  enable: true,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              grab: {
                distance: 200,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 0.5,
                },
              },
              bubble: {
                distance: 250,
                size: 8,
                duration: 2,
                opacity: 0.8,
                speed: 3,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ['#00ff88', '#00cc6a', '#66ffaa'],
            },
            links: {
              color: '#00ff88',
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: { min: 0.1, max: 0.5 },
              animation: {
                enable: true,
                speed: 1,
                sync: false,
              },
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 3 },
              animation: {
                enable: true,
                speed: 2,
                sync: false,
              },
            },
          },
          detectRetina: true,
          smooth: true,
          fullScreen: false,
          responsive: [
            {
              maxWidth: 768,
              options: {
                particles: {
                  number: {
                    value: 40,
                  },
                  links: {
                    enable: false,
                  },
                },
                interactivity: {
                  events: {
                    onHover: {
                      enable: false,
                    },
                  },
                },
              },
            },
          ],
        }}
      />
    </div>
  );
}
