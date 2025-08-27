import React from 'react';
import { Info } from 'lucide-react';
import Confirm_Button from './Confirm_Button';
import Cancel_Button from './Cancel_Button';
import Review_Button from '../Review_Button';

/**
 * Malicious Message Component
 * 
 * This component displays a warning message about a potentially malicious URL.
 * It includes an info icon, warning text, and confirm/cancel buttons.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onConfirm - Confirm button click handler
 * @param {Function} props.onCancel - Cancel button click handler
 * @param {boolean} props.showReview - Whether to show the review analysis
 * @param {Function} props.onReviewClick - Review button click handler
 * @returns {JSX.Element} Malicious message component
 */
function Malicious_Message({ onConfirm, onCancel, showReview = false, onReviewClick }) {
  return (
    <div className="w-[1250px] h-72 relative">
      <div className="w-[1250px] h-72 min-w-60 px-8 py-6 left-0 top-0 absolute bg-white rounded-lg border-4 border-red-600" />
      
      {/* Info Icon */}
      <div data-svg-wrapper data-size="32" className="left-[252px] top-[25px] absolute">
        <Info className="w-[55px] h-[38px] text-stone-900" />
      </div>
      
      {/* Main Title */}
      <div className="w-[934.78px] h-10 left-[145.48px] top-[21.76px] absolute text-center justify-start text-stone-900 text-3xl font-semibold font-['Inter'] leading-10">
        URL is likely malicious
      </div>
      
      {/* Subtitle */}
      <div className="w-[934.78px] h-9 left-[145.48px] top-[71.99px] absolute text-center justify-start text-stone-900 text-2xl font-semibold font-['Inter'] leading-loose">
        The AI requests to block the URL
      </div>
      
      {/* Confirm Button */}
      <div className="left-[150px] top-[140px] absolute">
        <Confirm_Button 
          onClick={onConfirm} 
          tooltipText="AI will block the URL"
        />
      </div>
      
      {/* Cancel Button */}
      <div className="left-[750px] top-[140px] absolute">
        <Cancel_Button 
          onClick={onCancel} 
          tooltipText="Override: AI will allow the URL instead"
        />
      </div>
      
      {/* Review Button */}
      <div className="flex justify-center absolute top-[200px] left-0 right-0">
        <Review_Button 
          onClick={onReviewClick}
          showAnalysis={showReview}
        />
      </div>
    </div>
  );
}

export default Malicious_Message;
