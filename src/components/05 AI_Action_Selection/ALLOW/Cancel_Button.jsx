import React, { useState } from 'react';
import { ChevronsRight } from 'lucide-react';

/**
 * Cancel Button Component
 * 
 * This component displays a cancel button with the specified design.
 * It includes a chevrons right icon and "Cancel" text.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onClick - Click handler function
 * @param {string} props.tooltipText - Tooltip text to show on hover (optional)
 * @returns {JSX.Element} Cancel button component
 */
function Cancel_Button({ onClick, tooltipText = "Override the AI's recommendation" }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-96 h-11 p-3 bg-zinc-800 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-800 inline-flex justify-center items-center gap-2 overflow-hidden hover:bg-zinc-700 transition-colors duration-200"
      >
        <div data-svg-wrapper data-size="16" className="relative">
          <ChevronsRight className="w-4 h-4 text-neutral-100" />
        </div>
        <div className="justify-start text-neutral-100 text-2xl font-semibold font-['Inter'] leading-normal">
          Cancel
        </div>
      </button>
      
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-50 whitespace-nowrap">
          {tooltipText}
          {/* Tooltip arrow */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
        </div>
      )}
    </div>
  );
}

export default Cancel_Button;
