'use client';

import { useState, useEffect } from 'react';

export default function TypingAnimation() {
  const messages = [
    '> WELCOME_TO_PORTFOLIO.init()',
    '> LOADING_PROFILE_DATA...',
    '> STATUS: READY_FOR_CONNECTION',
    '> VISITOR_DETECTED: INITIALIZING...',
    '> SYSTEM_ONLINE // EXPLORE_FREELY',
    '> ACCESS_GRANTED: BROWSE_MODE',
    '> CONNECTION_ESTABLISHED...',
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];

    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    let timeout;

    if (!isDeleting && displayedText === currentMessage) {
      // Pause at end of message
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      // Move to next message
      setIsDeleting(false);
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    } else {
      // Type or delete character
      const delay = isDeleting ? 30 : 60;
      timeout = setTimeout(() => {
        setDisplayedText(prev => {
          if (isDeleting) {
            return currentMessage.substring(0, prev.length - 1);
          } else {
            return currentMessage.substring(0, prev.length + 1);
          }
        });
      }, delay);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(cursorInterval);
    };
  }, [displayedText, isDeleting, currentMessageIndex]);

  return (
    <div className="text-base sm:text-xl md:text-2xl text-text-secondary min-h-[3rem] flex items-center justify-center px-2" style={{ fontFamily: 'var(--font-vt323), monospace' }}>
      <span className="inline-block px-2 sm:px-4 py-2 border-2 border-brand-primary max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
        {displayedText}
        <span className={`inline-block w-2 h-5 ml-1 bg-brand-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`} style={{ verticalAlign: 'middle' }}></span>
      </span>
    </div>
  );
}
