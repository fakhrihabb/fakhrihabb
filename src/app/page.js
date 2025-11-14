'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import LoadingScreen from '@/components/ui/LoadingScreen';
import ScrollProgress from '@/components/ui/ScrollProgress';
import SmoothNavigation from '@/components/ui/SmoothNavigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Wins from '@/components/sections/Wins';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

// Lazy load heavy visual effects
const BinaryRain = dynamic(() => import('@/components/effects/BinaryRain'), {
  ssr: false,
  loading: () => null,
});

const MatrixCursor = dynamic(() => import('@/components/effects/MatrixCursor'), {
  ssr: false,
  loading: () => null,
});

const ScanLine = dynamic(() => import('@/components/effects/ScanLine'), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  return (
    <div className="relative overflow-x-hidden max-w-full pixel-bg">
      {/* Loading Screen */}
      <LoadingScreen />
      {/* Background Layers - Binary Rain */}
      <Suspense fallback={null}>
        <BinaryRain />
      </Suspense>

      {/* Matrix Cursor Effect */}
      <Suspense fallback={null}>
        <MatrixCursor />
      </Suspense>

      {/* OCR Scan Line Effect - On top of everything */}
      <Suspense fallback={null}>
        <ScanLine />
      </Suspense>

      {/* Navigation & Progress Indicators */}
      <SmoothNavigation />
      <ScrollProgress />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <About />
        <Wins />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
