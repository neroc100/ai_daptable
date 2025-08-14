import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

/**
 * Feature Display Box Component
 * 
 * This component displays a feature analysis box with title, icon, and value.
 * It includes a collapsible arrow indicator and structured layout for feature information.
 * The arrow is clickable and expands to show three feature-value combinations.
 * 
 * @returns {JSX.Element} Feature display box component
 */
function Feature_Display_Box() {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleArrowClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className={`w-96 min-w-72 relative bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 transition-all duration-200 ease-in-out overflow-hidden ${isExpanded ? 'h-80' : 'h-48'}`}>
      {/* Title section - "URL String Analysis" */}
      <div className="w-56 h-14 left-[24px] top-[24px] absolute inline-flex justify-start items-start">
        <div className="flex-1 justify-start text-stone-900 text-2xl font-semibold font-['Inter'] leading-7">
          URL String Analysis<br/>
        </div>
      </div>
      
      {/* Feature content section - shows features based on expanded state */}
      <div className="absolute left-[24px] top-[106px] flex flex-col space-y-3">
        {/* First feature-value combination - always visible */}
        <div className="flex flex-col justify-start items-start">
          <div className="text-stone-900 text-xl font-semibold font-['Inter'] leading-7">
            Feature 1
          </div>
          <div className="text-zinc-400 text-base font-normal font-['Inter'] leading-snug">
            Value 1
          </div>
        </div>
        
        {/* Second feature-value combination - always visible */}
        <div className="flex flex-col justify-start items-start">
          <div className="text-stone-900 text-xl font-semibold font-['Inter'] leading-7">
            Feature 2
          </div>
          <div className="text-zinc-400 text-base font-normal font-['Inter'] leading-snug">
            Value 2
          </div>
        </div>
        
        {/* Third feature-value combination - only visible when expanded */}
        {isExpanded && (
          <div className="flex flex-col justify-start items-start">
            <div className="text-stone-900 text-xl font-semibold font-['Inter'] leading-7">
              Feature 3
            </div>
            <div className="text-zinc-400 text-base font-normal font-['Inter'] leading-snug">
              Value 3
            </div>
          </div>
        )}
      </div>
      
      {/* Collapsible arrow indicator - positioned in top-right */}
      <div 
        className="left-[350px] top-[23px] absolute cursor-pointer hover:opacity-70 transition-opacity"
        onClick={handleArrowClick}
      >
        {isExpanded ? (
          <ChevronUp className="w-6 h-6 text-gray-800" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-800" />
        )}
      </div>
    </div>
  );
}

export default Feature_Display_Box;
