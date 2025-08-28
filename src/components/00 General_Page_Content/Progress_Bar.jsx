import React from 'react';

/**
 * Progress Bar Component
 * 
 * Displays experiment progress through the URL evaluation sequence.
 * Shows current position (x out of 12 URLs) with a visual progress indicator.
 * Uses ETH styling with black text and outline for consistency.
 * 
 * @returns {JSX.Element} Progress bar component with text and visual indicator
 */
function Progress_Bar() {
  return (
    <div className="w-96 h-11 relative">
      {/* Progress text - centered over the progress bar */}
      <div className="w-96 justify-center text-black text-base font-normal font-['Inter'] leading-none absolute top-0 left-0 z-10">
        Progress x out of 12 URLs
      </div>
      
      {/* Progress bar container with data attribute for current value */}
      <div data-value="0%" className="w-96 h-11 relative">
        {/* White progress track - thin horizontal line with outline */}
        <div className="w-96 h-1.5 left-[16px] top-[20px] absolute bg-white rounded-[3px] outline outline-1 outline-black">
          {/* Blue circular progress indicator */}
          <div data-svg-wrapper className="left-0 top-0 absolute">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Circular indicator filled with blue color */}
              <rect width="6" height="6" rx="3" fill="#0088FF"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress_Bar;
