import React, { useState } from 'react';
import { Info } from 'lucide-react';
import Cancel_Button from '../ALLOW/Cancel_Button';
import AI_progress_bar from '../../06 AI Action Implementation/AI_progress_bar';

/**
 * Veto Non Malicious Message Component
 * 
 * This component displays a message about vetoing a non-malicious URL.
 * It includes an info icon, message text, a cancel button, and a progress bar.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onCancel - Cancel button click handler
 * @param {Function} props.onComplete - Progress completion handler
 * @param {boolean} props.hidden - Whether to hide this component
 * @returns {JSX.Element} Veto non malicious message component
 */
function Veto_non_malicious_message({ onCancel, onComplete, hidden = false }) {
  if (hidden) {
    return null;
  }

  return (
    <div className="w-[1250px] h-72 relative">
      <div className="w-[1250px] h-72 min-w-60 px-8 py-6 left-0 top-0 absolute bg-white rounded-lg border-4 border-green-600" />
      
      {/* Content container with relative positioning */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        {/* Info Icon */}
        <div data-svg-wrapper data-size="32" className="absolute left-[32px] top-[31px]">
          <Info className="w-[55px] h-[38px] text-stone-900" />
        </div>
        
        {/* Main Title */}
        <div className="w-[934.78px] h-10 ml-[95px] text-center text-stone-900 text-3xl font-semibold font-['Inter'] leading-10">
          URL is likely non-malicious
        </div>
        
        {/* Subtitle */}
        <div className="w-[934.78px] h-9 ml-[95px] text-center text-stone-900 text-2xl font-semibold font-['Inter'] leading-loose">
          Proceeding to allow URL
        </div>
        
        {/* Progress Bar - positioned centrally */}
        <div className="flex justify-center mt-4">
          <AI_progress_bar duration={10000} onComplete={onComplete} />
        </div>
        
        {/* Cancel Button - positioned below progress bar */}
        <div className="flex justify-center mt-4">
          <Cancel_Button onClick={onCancel} />
        </div>
      </div>
    </div>
  );
}

export default Veto_non_malicious_message;
