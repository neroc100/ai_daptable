import React, { useState, useEffect } from 'react';

/**
 * AI Progress Bar Component
 * 
 * This component renders a progress bar with animated fill and indicator dot.
 * It handles the progress animation logic and is used across various AI message components.
 * 
 * @param {number} duration - Duration in milliseconds (default: 2000ms)
 * @param {Function} onComplete - Callback function called when progress reaches 100%
 * @returns {JSX.Element} Progress bar component
 */
function AI_progress_bar({ duration = 2000, onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 50;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + increment;
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) {
              onComplete();
            }
          }, 100);
          return 100;
        }
        
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [duration, onComplete]);

  return (
    <div data-value={`${Math.round(progress)}%`} className="w-96 h-24">
      {/* Progress track - gray background */}
      <div className="w-96 h-1.5 bg-neutral-400 rounded-[3px] relative overflow-hidden">
        {/* Green progress fill - animated based on progress state */}
        <div 
          className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-50 ease-linear rounded-[3px]"
          style={{ width: `${progress}%` }}
        />
        {/* Green progress indicator dot - positioned at the end of the fill */}
        <div 
          data-svg-wrapper 
          className="absolute top-0 transition-all duration-50 ease-linear"
          style={{ left: `${(progress / 100) * (384 - 6)}px` }}
        >
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Circular indicator filled with green color */}
            <rect width="6" height="6" rx="3" fill="#14AE5C"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default AI_progress_bar;
