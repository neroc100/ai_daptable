import React from 'react';
import Success_Message_Button from './Success_Message_Button';

/**
 * Success Message Component for URL Blocked Action
 * 
 * This component displays a modal success message when a URL is successfully blocked.
 * It includes a green checkmark icon, success text, and an OK button to close the modal.
 * 
 * @param {Function} onOKClick - Callback function to handle OK button click (closes modal)
 * @returns {JSX.Element} Success message modal component
 */
function Success_Message_URL_Blocked({ onOKClick }) {
  return (
    // Main modal container with white background and dark border
    <div className="w-[568px] h-60 min-w-60 px-8 py-6 bg-white rounded-lg border-4 border-zinc-800">
      {/* Inner content container with relative positioning */}
      <div className="w-[611px] h-44 relative">
        
        {/* Success title - positioned absolutely for precise layout */}
        <div className="w-[532.39px] h-12 left-[78.61px] top-[0.12px] absolute justify-start text-stone-900 text-3xl font-semibold font-['Inter'] leading-10">
          Successfully blocked URL
        </div>
        
        {/* Success description - two-line message about blocking the URL */}
        <div className="w-[507px] h-16 left-[104px] top-[42px] absolute justify-start text-neutral-500 text-2xl font-normal font-['Inter'] leading-loose">
          You successfully blocked<br/>the URL
        </div>
        
        {/* OK Button - clickable button to close the modal */}
        <Success_Message_Button onOKClick={onOKClick} />
        
        {/* Green checkmark icon - success indicator in top-left corner */}
        <div data-svg-wrapper className="left-0 top-0 absolute">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Path defining the checkmark shape */}
            <path d="M40 12L18 34L8 24" stroke="#14AE5C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Success_Message_URL_Blocked;
