import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Highlight_Malicious_Display from './Highlight_Malicious_Display';

/**
 * Review Button Component
 * 
 * This component provides a button that allows users to review the analyzed information.
 * When clicked, it toggles the display of the Analyzed_Info_Display component.
 * 
 * @returns {JSX.Element} Review button component with toggle functionality
 */
function Review_Button() {
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleReviewClick = () => {
    setShowAnalysis(!showAnalysis);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Review Button */}
      <button
        onClick={handleReviewClick}
        className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
      >
        {showAnalysis ? (
          <>
            <EyeOff size={20} />
            <span>Hide Information</span>
          </>
        ) : (
          <>
            <Eye size={20} />
            <span>Review Information</span>
          </>
        )}
      </button>

      {/* Highlight Malicious Display - Shows when button is toggled on */}
      {showAnalysis && (
        <div className="mt-6">
          <Highlight_Malicious_Display />
        </div>
      )}
    </div>
  );
}

export default Review_Button;
