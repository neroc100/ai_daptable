import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import AI_URL_Info_Display from '../AI_action/AI_URL_Info_Display';

/**
 * View Information Button Component
 * 
 * Toggle button for showing/hiding AI analysis information.
 * Can use external click handler or manage internal state for analysis visibility.
 * Displays eye/eye-off icons and appropriate text based on current state.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onClick - External click handler (optional)
 * @returns {JSX.Element} View information button with toggle functionality
 */
function View_Information_Button({ onClick }) {
  // Internal state for analysis visibility when no external handler provided
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleReviewClick = () => {
    if (onClick) {
      onClick(); // Use external handler if provided
    } else {
      setShowAnalysis(!showAnalysis); // Toggle internal state
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Toggle button with eye/eye-off icons */}
      <button
        onClick={handleReviewClick}
        className="flex items-center space-x-2 px-6 py-3 font-semibold rounded-lg transition-colors duration-200"
        style={{ backgroundColor: 'var(--eth-blue-20)' }}
      >
        {showAnalysis ? (
          <>
            <EyeOff size={20} style={{ color: 'black' }} />
            <span style={{ color: 'black' }}>Hide Information</span>
          </>
        ) : (
          <>
            <Eye size={20} style={{ color: 'black' }} />
            <span style={{ color: 'black' }}>View Information</span>
          </>
        )}
      </button>

      {/* AI analysis display - only shown when using internal state */}
      {showAnalysis && !onClick && (
        <div className="mt-6">
          <AI_URL_Info_Display isAnalysisDisplayed={true} />
        </div>
      )}
    </div>
  );
}

export default View_Information_Button;
