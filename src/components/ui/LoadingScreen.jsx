'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('');
  const [matrixChars, setMatrixChars] = useState([]);

  const messages = [
    'INITIALIZING SYSTEM...',
    'BOOTING FAW_OS...',
    'COMPILING MATRIX_V2.exe...',
    'ESTABLISHING CONNECTION...',
    'SYSTEM READY'
  ];

  useEffect(() => {
    // Generate random matrix characters for background
    const chars = [];
    const letters = ['F', 'H'];
    for (let i = 0; i < 30; i++) {
      chars.push({
        id: i,
        char: letters[Math.floor(Math.random() * letters.length)],
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2
      });
    }
    setMatrixChars(chars);

    // Simulate loading progress
    let currentProgress = 0;
    let messageIndex = 0;

    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 8 + 3;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressInterval);
        
        // Wait a moment before fading out
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      }

      setProgress(Math.min(currentProgress, 100));

      // Update loading message based on progress
      const newMessageIndex = Math.floor((currentProgress / 100) * messages.length);
      if (newMessageIndex !== messageIndex && newMessageIndex < messages.length) {
        messageIndex = newMessageIndex;
        setLoadingText(messages[messageIndex]);
      }
    }, 400);

    return () => clearInterval(progressInterval);
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-bg-primary flex items-center justify-center transition-opacity duration-700 ${
        progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Matrix falling characters background */}
      <div className="absolute inset-0 overflow-hidden">
        {matrixChars.map((item) => (
          <div
            key={item.id}
            className="absolute top-0 text-brand-primary opacity-20 font-mono text-2xl animate-matrix-fall"
            style={{
              left: `${item.left}%`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`
            }}
          >
            {item.char}
          </div>
        ))}
      </div>

      {/* Main loading container */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 max-w-2xl w-full">
        {/* Terminal-style header */}
        <div className="w-full mb-8 pixel-border p-6 glass">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-brand-primary animate-pulse"></div>
            <div className="w-3 h-3 bg-brand-secondary"></div>
            <div className="w-3 h-3 bg-brand-tertiary"></div>
          </div>
          
          {/* Loading text with typing effect */}
          <div className="font-mono text-brand-primary text-lg mb-6 h-8">
            <span className="neon-text">{loadingText}</span>
            <span className="animate-pulse ml-1">_</span>
          </div>

          {/* Progress bar container */}
          <div className="relative w-full h-8 bg-bg-secondary border-2 border-brand-dark overflow-hidden">
            {/* Progress bar fill */}
            <div
              className="h-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Animated scan line on progress bar */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-scan"></div>
              
              {/* Pixelated edge effect */}
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-brand-primary shadow-glow"></div>
            </div>

            {/* Grid overlay for pixelated look */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px),
                repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)
              `
            }}></div>
          </div>

          {/* Progress percentage */}
          <div className="mt-4 text-right font-mono text-brand-secondary">
            <span className="text-2xl font-display">{Math.floor(progress)}%</span>
          </div>
        </div>

        {/* Bottom decoration - ASCII art style */}
        <div className="font-mono text-brand-dark text-xs opacity-50 text-center">
          {'>'} LOADING PORTFOLIO {'<'}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-brand-primary opacity-30"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-brand-primary opacity-30"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-brand-primary opacity-30"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-brand-primary opacity-30"></div>
    </div>
  );
}
