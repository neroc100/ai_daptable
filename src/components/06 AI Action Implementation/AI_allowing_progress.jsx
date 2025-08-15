import React from 'react';
import { Loader2 } from 'lucide-react';
import AI_progress_bar from './AI_progress_bar';

/**
 * AI Allowing Progress Component
 * 
 * This component displays a progress message while AI is proceeding to allow a URL.
 * It includes a loading spinner icon, title, description, and a progress indicator that
 * fills up over 5 seconds.
 * 
 * @param {Function} onComplete - Callback function called when progress reaches 100%
 * @returns {JSX.Element} AI allowing progress component
 */
function AI_allowing_progress({ onComplete }) {
  return (
    <div className="w-[647px] h-64 relative">
      <div className="w-[647px] h-64 min-w-60 px-8 py-6 left-0 top-0 absolute bg-white rounded-lg border-4 border-zinc-800" />
      
      {/* Content container with relative positioning */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div data-svg-wrapper data-size="32" className="absolute left-[32px] top-[31px]">
          <Loader2 className="w-10 h-10 text-stone-900 animate-spin" />
        </div>
        
        <div className="w-[475px] h-12 ml-[95px] justify-start text-stone-900 text-3xl font-semibold font-['Inter'] leading-10">
          Allowing URL
        </div>
        
        <div className="w-[520px] h-11 ml-[95px] justify-start text-neutral-500 text-2xl font-normal font-['Inter'] leading-loose">
          AI is proceeding to allow URL. Please wait.
        </div>
        
        <div className="flex justify-center mt-4">
          <AI_progress_bar duration={5000} onComplete={onComplete} />
        </div>
      </div>
    </div>
  );
}

export default AI_allowing_progress;
