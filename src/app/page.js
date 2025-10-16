'use client';

import { Suspense, lazy } from 'react';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import ParticleBackground from '@/components/particles/ParticleBackground';
import ScrollProgress from '@/components/ui/ScrollProgress';
import SmoothNavigation from '@/components/ui/SmoothNavigation';
import BlobBackground from '@/components/ui/BlobBackground';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <SmoothScrollProvider>
      <div className="relative">
        {/* Background Layers */}
        <BlobBackground />
        <ParticleBackground />

        {/* Navigation & Progress Indicators */}
        <SmoothNavigation />
        <ScrollProgress />

        {/* Main Content */}
        <main className="relative">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
