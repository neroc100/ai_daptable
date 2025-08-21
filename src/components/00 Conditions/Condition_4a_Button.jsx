import React, { useState } from 'react';

/**
 * Condition 4a Button Component
 * 
 * This component displays a button for condition 4a with a hover tooltip.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onClick - Click handler function
 * @returns {JSX.Element} Condition 4a button component
 */
function Condition_4a_Button({ onClick }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl py-6 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        4a
      </button>
      
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-50 whitespace-nowrap">
          condition 4a description
          {/* Tooltip arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
}

export default Condition_4a_Button;
