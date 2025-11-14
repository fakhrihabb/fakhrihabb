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
            rgba(255, 255, 255, 0.7) 50%,
            rgba(255, 255, 255, 0.1) 75%,
            rgba(255, 255, 255, 0) 100%
          );
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
          animation: scan 4s linear infinite;
          will-change: transform;
        }

        .scan-line::before {
          content: '';
          position: absolute;
          top: -15px;
          left: 0;
          width: 100%;
          height: 30px;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.03) 50%,
            rgba(255, 255, 255, 0) 100%
          );
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
            rgba(0, 0, 0, 0.02) 0px,
            rgba(0, 0, 0, 0.02) 1px,
            transparent 1px,
            transparent 3px
          );
          pointer-events: none;
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
