import React from 'react';

/**
 * Success Message Component for URL Allowed Action
 * 
 * This component displays a modal success message when a URL is successfully allowed.
 * It includes a green checkmark icon, success text, and an OK button to close the modal.
 * 
 * @param {Function} onOKClick - Callback function to handle OK button click (closes modal)
 * @returns {JSX.Element} Success message modal component
 */
function Success_Message_URL_Allowed({ onOKClick }) {
  return (
    // Main modal container with white background and dark border
    <div className="w-[568px] h-60 min-w-60 px-8 py-6 bg-white rounded-lg border-4 border-zinc-800">
      {/* Inner content container with relative positioning */}
      <div className="w-[611px] h-44 relative">
        
        {/* Success title - positioned absolutely for precise layout */}
        <div className="w-[532.39px] h-12 left-[78.61px] top-[0.12px] absolute justify-start text-stone-900 text-3xl font-semibold font-['Inter'] leading-10">
          Successfully allowed URL
        </div>
        
        {/* Success description - two-line message about allowing traffic */}
        <div className="w-[507px] h-16 left-[104px] top-[42px] absolute justify-start text-neutral-500 text-2xl font-normal font-['Inter'] leading-loose">
          You have successfully allowed<br/>traffic to this URL
        </div>
        
        {/* OK Button - clickable button to close the modal */}
        <div 
          data-has-icon-end="false" 
          data-has-icon-start="true" 
          data-size="Medium" 
          data-state="Default" 
          data-variant="Primary" 
          className="w-44 h-14 p-3 left-[158px] top-[129px] absolute bg-zinc-800 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-800 inline-flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
          onClick={onOKClick}
        >
          {/* Double arrow icon inside OK button */}
          <div data-svg-wrapper data-size="16" className="relative">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Path defining two right-pointing arrows */}
              <path d="M9.16667 11.8327L12.5 8.49935L9.16667 5.16602M4.5 11.8327L7.83333 8.49935L4.5 5.16602" stroke="#F5F5F5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {/* OK button text */}
          <div className="justify-start text-neutral-100 text-2xl font-semibold font-['Inter'] leading-normal">
            OK
          </div>
        </div>
        
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

export default Success_Message_URL_Allowed;
