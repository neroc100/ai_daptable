import React, { useState, useEffect } from 'react';

/**
 * AI Allowing Progress Component
 * 
 * This component displays a progress message while AI is proceeding to allow a URL.
 * It includes an information icon, title, description, and a progress indicator that
 * fills up over 2 seconds.
 * 
 * @param {Function} onComplete - Callback function called when progress reaches 100%
 * @returns {JSX.Element} AI allowing progress component
 */
function AI_allowing_progress({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;
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
  }, [onComplete]);

  return (
    <div className="w-[602px] h-64 relative">
      <div className="w-[602px] h-64 min-w-60 px-8 py-6 left-0 top-0 absolute bg-white rounded-lg border-4 border-zinc-800" />
      
      <div data-svg-wrapper data-size="32" className="left-[32px] top-[31px] absolute">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.0007 26.6663V19.9997M20.0007 13.333H20.0173M36.6673 19.9997C36.6673 29.2044 29.2054 36.6663 20.0007 36.6663C10.7959 36.6663 3.33398 29.2044 3.33398 19.9997C3.33398 10.7949 10.7959 3.33301 20.0007 3.33301C29.2054 3.33301 36.6673 10.7949 36.6673 19.9997Z" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className="w-[475px] h-12 left-[95px] top-[31.12px] absolute justify-start text-stone-900 text-3xl font-semibold font-['Inter'] leading-10">
        AI in progress
      </div>
      
      <div className="w-[475px] h-11 left-[95px] top-[90.78px] absolute justify-start text-neutral-500 text-2xl font-normal font-['Inter'] leading-loose">
        AI is proceeding to allow URL. Please wait.
      </div>
      
      <div data-value={`${Math.round(progress)}%`} className="w-96 h-24 left-[95px] top-[113px] absolute">
        <div className="w-96 h-1.5 left-[16px] top-[44px] absolute bg-neutral-400 rounded-[3px] relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-50 ease-linear rounded-[3px]"
            style={{ width: `${progress}%` }}
          />
          <div 
            data-svg-wrapper 
            className="absolute top-0 transition-all duration-50 ease-linear"
            style={{ left: `${(progress / 100) * (384 - 6)}px` }}
          >
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="6" height="6" rx="3" fill="#14AE5C"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AI_allowing_progress;
