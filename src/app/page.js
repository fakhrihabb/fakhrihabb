'use client';

import ScrollProgress from '@/components/ui/ScrollProgress';
import SmoothNavigation from '@/components/ui/SmoothNavigation';
import BinaryRain from '@/components/effects/BinaryRain';
import MatrixCursor from '@/components/effects/MatrixCursor';
import ScanLine from '@/components/effects/ScanLine';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="relative overflow-x-hidden max-w-full">
      {/* Background Layers - Binary Rain */}
      <BinaryRain />

      {/* Matrix Cursor Effect */}
      <MatrixCursor />

      {/* OCR Scan Line Effect - On top of everything */}
      <ScanLine />

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
  );
}
