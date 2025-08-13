import React from 'react';

/**
 * Progress Bar Component
 * 
 * This component displays a progress indicator showing the current progress
 * through a list of URLs. It includes a thin white progress track with a blue
 * circular indicator and descriptive text below.
 * 
 * @returns {JSX.Element} Progress bar component with indicator and text
 */
function Progress_Bar() {
  return (
    <>
      {/* Progress bar container with data attribute for current value */}
      <div data-value="0%" className="w-96 h-11 relative">
        {/* White progress track - thin horizontal line */}
        <div className="w-96 h-1.5 left-[16px] top-[20px] absolute bg-white rounded-[3px]">
          {/* Blue circular progress indicator */}
          <div data-svg-wrapper className="left-0 top-0 absolute">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Circular indicator filled with blue color */}
              <rect width="6" height="6" rx="3" fill="#0088FF"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Progress text - shows current progress count */}
      <div className="w-48 justify-center text-white text-base font-normal font-['Inter'] leading-none">
        Progress x out of 12 URLs
      </div>
    </>
  );
}

export default Progress_Bar;
