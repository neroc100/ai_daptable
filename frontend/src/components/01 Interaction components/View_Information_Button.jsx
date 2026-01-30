import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
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
        className={`px-6 py-2 bg-gray-100 rounded-2xl inline-flex justify-center items-center gap-1 overflow-hidden cursor-pointer shadow-lg hover:shadow-xl border border-gray-400 transition-all duration-200 ${showAnalysis ? 'mb-4' : ''}`}

      >
        <div className="flex items-center space-x-1">
          {showAnalysis ? <ChevronUp size={16} style={{ color: 'black' }} /> : <ChevronDown size={16} style={{ color: 'black' }} />}
          <div className="justify-start text-black text-sm font-bold font-['ui-sans-serif'] leading-normal">
            {showAnalysis ? 'Hide URL Analysis' : 'View URL Analysis'}
          </div>
        </div>
      </div>

      {/* AI analysis display */}
      {showAnalysis && (
        <div className="w-[90%]">
          <AI_URL_Info_Display isAnalysisDisplayed={true} />
        </div>
      )}
    </div>
  );
}
export default View_Information_Button;
