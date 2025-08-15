import React from 'react';
import AI_Success_Message_Button from './AI_Success_Message_Button';

/**
 * AI Blocked Message Component
 * 
 * This component displays a modal success message when AI successfully blocks a URL.
 * It includes a green checkmark icon, success text, and an OK button to close the modal.
 * 
 * @param {Function} onOKClick - Callback function to handle OK button click (closes modal)
 * @returns {JSX.Element} AI blocked success message modal component
 */
function AI_blocked_message({ onOKClick }) {
  return (
    <div className="w-[568px] h-60 min-w-60 px-8 py-6 bg-white rounded-lg border-4 border-zinc-800">
      <div className="w-[611px] h-44 relative">
        
        <div className="w-[532.39px] h-12 left-[78.61px] top-[0.12px] absolute justify-start text-stone-900 text-3xl font-semibold font-['Inter'] leading-10">
          AI successfully blocked URL
        </div>
        
        <div className="w-[507px] h-16 left-[104px] top-[42px] absolute justify-start text-neutral-500 text-2xl font-normal font-['Inter'] leading-loose">
          The AI has successfully blocked<br/>traffic to this URL
        </div>
        
        <AI_Success_Message_Button onOKClick={onOKClick} />
        
        <div data-svg-wrapper className="left-0 top-0 absolute">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 12L18 34L8 24" stroke="#14AE5C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default AI_blocked_message;
