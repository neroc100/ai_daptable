import React, { useState } from 'react';
import { ChevronsRight } from 'lucide-react';

/**
 * Confirm Button Component
 * 
 * This component displays a confirm button with the specified design.
 * It includes a chevrons right icon and "Confirm" text.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onClick - Click handler function
 * @param {string} props.tooltipText - Tooltip text to show on hover (optional)
 * @returns {JSX.Element} Confirm button component
 */
function Confirm_Button({ onClick, tooltipText = "Confirm the AI's recommendation" }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-96 h-11 p-3 rounded-lg outline outline-1 outline-offset-[-1px] inline-flex justify-center items-center gap-2 overflow-hidden transition-colors duration-200"
        style={{ backgroundColor: 'var(--eth-blue-100)', outlineColor: 'var(--eth-blue-100)' }}
      >
        <div data-svg-wrapper data-size="16" className="relative">
          <ChevronsRight className="w-4 h-4 text-white" />
        </div>
        <div className="justify-start text-white text-2xl font-semibold font-['Inter'] leading-normal">
          Confirm AI Action
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

export default Confirm_Button;
