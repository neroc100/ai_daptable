import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Info_Display from '../03 AI_Info_Acquisition/Info_Display';

/**
 * Review Button Component
 * 
 * This component provides a button that allows users to view the analyzed information.
 * When clicked, it toggles the display of the Info_Display component.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onClick - External click handler (optional)
 * @param {boolean} props.showAnalysis - External state for showing analysis (optional)
 * @returns {JSX.Element} Review button component with toggle functionality
 */
function Review_Button({ onClick, showAnalysis: externalShowAnalysis }) {
  const [internalShowAnalysis, setInternalShowAnalysis] = useState(false);
  
  // Use external state if provided, otherwise use internal state
  const showAnalysis = externalShowAnalysis !== undefined ? externalShowAnalysis : internalShowAnalysis;
  const setShowAnalysis = externalShowAnalysis !== undefined ? onClick : setInternalShowAnalysis;

  const handleReviewClick = () => {
    if (onClick) {
      onClick();
    } else {
      setInternalShowAnalysis(!internalShowAnalysis);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Review Button */}
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

      {/* Info Display - Shows when button is toggled on (only when using internal state) */}
      {showAnalysis && !onClick && (
        <div className="mt-6">
          <Info_Display isAnalysisDisplayed={true} />
        </div>
      )}
    </div>
  );
}

export default Review_Button;
