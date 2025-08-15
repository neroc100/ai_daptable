import React from 'react';
import AI_progress_bar from './AI_progress_bar';

/**
 * AI Blocking Progress Component
 * 
 * This component displays a progress message while AI is proceeding to block a URL.
 * It includes an information icon, title, description, and a progress indicator that
 * fills up over 5 seconds.
 * 
 * @param {Function} onComplete - Callback function called when progress reaches 100%
 * @returns {JSX.Element} AI blocking progress component
 */
function AI_blocking_progress({ onComplete }) {
  return (
    <div className="w-[647px] h-64 relative">
      <div className="w-[647px] h-64 min-w-60 px-8 py-6 left-0 top-0 absolute bg-white rounded-lg border-4 border-zinc-800" />
      
      {/* Content container with relative positioning */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div data-svg-wrapper data-size="32" className="absolute left-[32px] top-[31px]">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.0007 26.6663V19.9997M20.0007 13.333H20.0173M36.6673 19.9997C36.6673 29.2044 29.2054 36.6663 20.0007 36.6663C10.7959 36.6663 3.33398 29.2044 3.33398 19.9997C3.33398 10.7949 10.7959 3.33301 20.0007 3.33301C29.2054 3.33301 36.6673 10.7949 36.6673 19.9997Z" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div className="w-[475px] h-12 ml-[95px] justify-start text-stone-900 text-3xl font-semibold font-['Inter'] leading-10">
          AI in progress
        </div>
        
        <div className="w-[520px] h-11 ml-[95px] justify-start text-neutral-500 text-2xl font-normal font-['Inter'] leading-loose">
          AI is proceeding to block URL. Please wait.
        </div>
        
        <div className="flex justify-center mt-4">
          <AI_progress_bar duration={5000} onComplete={onComplete} />
        </div>
      </div>
    </div>
  );
}

export default AI_blocking_progress;
