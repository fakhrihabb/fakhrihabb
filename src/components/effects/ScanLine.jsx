'use client';

import { useEffect, useState } from 'react';

export default function ScanLine() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      {/* Main scan line */}
      <div className="scan-line-container">
        <div className="scan-line"></div>
      </div>

      <style jsx>{`
        .scan-line-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          overflow: hidden;
        }

        .scan-line {
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 25%,
            rgba(255, 255, 255, 0.9) 50%,
            rgba(255, 255, 255, 0.1) 75%,
            rgba(255, 255, 255, 0) 100%
          );
          box-shadow: 
            0 0 10px rgba(255, 255, 255, 0.8),
            0 0 20px rgba(255, 255, 255, 0.6),
            0 0 30px rgba(255, 255, 255, 0.4),
            0 0 40px rgba(255, 255, 255, 0.2);
          animation: scan 4s linear infinite;
          filter: blur(0.5px);
        }

        .scan-line::before {
          content: '';
          position: absolute;
          top: -20px;
          left: 0;
          width: 100%;
          height: 40px;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        .scan-line::after {
          content: '';
          position: absolute;
          top: -1px;
          left: 0;
          width: 100%;
          height: 3px;
          background: rgba(255, 255, 255, 0.3);
          filter: blur(1px);
        }

        @keyframes scan {
          0% {
            top: -5%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 105%;
            opacity: 0;
          }
        }

        /* Optional: Add a subtle CRT scanline effect across the entire page */
        .scan-line-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.03) 0px,
            rgba(0, 0, 0, 0.03) 1px,
            transparent 1px,
            transparent 2px
          );
          pointer-events: none;
          animation: scanlines 0.5s steps(60) infinite;
        }

        @keyframes scanlines {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(2px);
          }
        }

        /* Add some chromatic aberration to the scan line for extra retro effect */
        @media (prefers-reduced-motion: no-preference) {
          .scan-line {
            animation: scan 4s linear infinite, flicker 0.15s infinite;
          }
        }

        @keyframes flicker {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.95;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .scan-line {
            animation: scan 8s linear infinite;
          }
          .scan-line-container::before {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
