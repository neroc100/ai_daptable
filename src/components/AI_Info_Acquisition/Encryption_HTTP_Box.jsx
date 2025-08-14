import React, { useState } from 'react';

/**
 * Encryption and HTTP Response Feature Display Box Component
 * 
 * This component displays encryption and HTTP response analysis features with title, icon, and values.
 * It includes a collapsible arrow indicator and structured layout for security analysis information.
 * The arrow is clickable and expands to show all feature-value combinations.
 * 
 * @returns {JSX.Element} Encryption and HTTP Response feature display box component
 */
function Encryption_HTTP_Box() {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleArrowClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`w-[420px] min-w-72 relative bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 transition-all duration-200 ease-in-out overflow-hidden ${isExpanded ? 'h-80' : 'h-48'}`}>
      {/* Title section - "Encryption and HTTP Response" */}
      <div className="w-80 h-14 left-[24px] top-[24px] absolute inline-flex justify-start items-start">
        <div className="flex-1 justify-start text-stone-900 text-2xl font-semibold font-['Inter'] leading-7">
          Encryption and<br/>HTTP Response
        </div>
      </div>
      
      {/* Feature content section - shows features based on expanded state */}
      <div className="absolute left-[24px] top-[106px] flex flex-col space-y-3">
        {/* First feature-value combination - always visible */}
        <div className="flex flex-col justify-start items-start">
          <div className="text-stone-900 text-xl font-semibold font-['Inter'] leading-7">
            SSL Certificate
          </div>
          <div className="text-zinc-400 text-base font-normal font-['Inter'] leading-snug">
            Valid (Let's Encrypt)
          </div>
        </div>
        
        {/* Second feature-value combination - always visible */}
        <div className="flex flex-col justify-start items-start">
          <div className="text-stone-900 text-xl font-semibold font-['Inter'] leading-7">
            HTTP Status
          </div>
          <div className="text-zinc-400 text-base font-normal font-['Inter'] leading-snug">
            200 OK
          </div>
        </div>
        
        {/* Third feature-value combination - only visible when expanded */}
        {isExpanded && (
          <div className="flex flex-col justify-start items-start">
            <div className="text-stone-900 text-xl font-semibold font-['Inter'] leading-7">
              Security Headers
            </div>
            <div className="text-zinc-400 text-base font-normal font-['Inter'] leading-snug">
              HSTS, CSP enabled
            </div>
          </div>
        )}
      </div>
      
      {/* Collapsible arrow indicator - positioned in top-right */}
      <div 
        data-svg-wrapper 
        data-size="24" 
        className="left-[350px] top-[23px] absolute cursor-pointer hover:opacity-70 transition-opacity"
        onClick={handleArrowClick}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ 
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease-in-out'
          }}
        >
          {/* Arrow that rotates based on expanded state */}
          <path 
            d="M18 15L12 9L6 15" 
            stroke="#1E1E1E" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Encryption_HTTP_Box;
