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
    <div className="flex flex-col items-center space-y-4 w-full">
      {/* Toggle button with eye/eye-off icons */}
      <div 
        onClick={() => {
          // Log that the view information button was clicked
          localStorage.setItem('view_information_clicked', '1');
          console.log('View information button clicked');
          setShowAnalysis(!showAnalysis);
        }}
        className="px-6 py-3 bg-white rounded-4xl outline outline-2 outline-offset-[-2px] inline-flex justify-center items-center gap-2 overflow-hidden cursor-pointer shadow-xl hover:opacity-85 hover:shadow-md transition-all duration-200"
        style={{ outlineColor: 'var( --decision-button-bg)',
          backgroundColor: 'var( --decision-button-bg)'
         }}
      >
        {/* Conditional icon and text based on current state */}
        {showAnalysis ? (
          <div className="flex items-center space-x-2">
            <EyeOff size={20} style={{ color: 'black' }} />
            <div className="justify-start text-black text-xs font-bold font-['ui-sans-serif']  leading-normal">
              Hide Information
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <Eye size={20} style={{ color: 'black' }} />
            <div className="justify-start text-black text-xs font-bold font-['ui-sans-serif']  leading-normal">
              View Information
            </div>
          </div>
        )}
      </div>

      {/* AI analysis display - shown when analysis is visible */}
      {showAnalysis && (
        <div className="w-full">
          <AI_URL_Info_Display isAnalysisDisplayed={true} />
        </div>
      )}
    </div>
  );
}

export default View_Information_Button;
