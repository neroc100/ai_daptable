import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import AI_URL_Info_Display from '../AI_action/AI_URL_Info_Display';

/**
 * View Information Button Component
 * 
 * Toggle button for showing/hiding AI analysis information.
 * Manages internal state for analysis visibility.
 * Displays eye/eye-off icons and appropriate text based on current state.
 * 
 * @returns {JSX.Element} View information button with toggle functionality
 */
function View_Information_Button() {
  // Internal state for analysis visibility
  const [showAnalysis, setShowAnalysis] = useState(false);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Toggle button with eye/eye-off icons */}
      <div 
        onClick={() => {
          // Log that the view information button was clicked
          localStorage.setItem('view_information_clicked', '1');
          console.log('View information button clicked');
          setShowAnalysis(!showAnalysis);
        }}
         className={`px-6 py-1 rounded-xl cursor-pointer shadow-sm transition-all duration-200
          ${showAnalysis
          ? 'bg-white hover:bg-[var(--eth-gray-20)] text-[var(--eth-gray-100)] mb-4'
          : 'bg-white hover:bg-[var(--eth-gray-10)] text-[var(--eth-gray-100)]'}`}
        >
        <span className="text-xs font-semibold font-['ui-sans-serif'] leading-normal">
          {showAnalysis ? 'Hide Information' : 'View Information'}
        </span>
      </div>

      {/* AI analysis display */}
      {showAnalysis && (
        <div className="w-full">
          <AI_URL_Info_Display isAnalysisDisplayed={true} />
        </div>
      )}
    </div>
  );
}
export default View_Information_Button;
