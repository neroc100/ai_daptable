import React from 'react';
import { Info } from 'lucide-react';
import Confirm_Button from './Confirm_Button';
import Cancel_Button from './Cancel_Button';

/**
 * Non Malicious Message Component
 * 
 * This component displays a message about a potentially safe URL.
 * It includes an info icon, message text, and confirm/cancel buttons.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onConfirm - Confirm button click handler
 * @param {Function} props.onCancel - Cancel button click handler
 * @returns {JSX.Element} Non malicious message component
 */
function Non_malicious_message({ onConfirm, onCancel }) {
  return (
    <div className="w-[1250px] h-56 relative">
      <div className="w-[1250px] h-56 min-w-60 px-8 py-6 left-0 top-0 absolute bg-white rounded-lg border-4 border-green-600" />
      
      {/* Info Icon */}
      <div data-svg-wrapper data-size="32" className="left-[252px] top-[25px] absolute">
        <Info className="w-[55px] h-[38px] text-stone-900" />
      </div>
      
      {/* Main Title */}
      <div className="w-[934.78px] h-10 left-[145.48px] top-[21.76px] absolute text-center justify-start text-stone-900 text-3xl font-semibold font-['Inter'] leading-10">
        URL is likely non-malicious
      </div>
      
      {/* Subtitle */}
      <div className="w-[934.78px] h-9 left-[145.48px] top-[71.99px] absolute text-center justify-start text-stone-900 text-2xl font-semibold font-['Inter'] leading-loose">
        The AI requests to allow the URL
      </div>
      
      {/* Confirm Button */}
      <div className="left-[182.43px] top-[123.88px] absolute">
        <Confirm_Button onClick={onConfirm} />
      </div>
      
      {/* Cancel Button */}
      <div className="left-[686.78px] top-[123.88px] absolute">
        <Cancel_Button onClick={onCancel} />
      </div>
    </div>
  );
}

export default Non_malicious_message;
