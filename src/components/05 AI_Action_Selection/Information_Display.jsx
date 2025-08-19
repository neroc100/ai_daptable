import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Analyzed_Info_Display from '../../components/04 AI_Info_Analysis/Analyzed_Info_Display';

/**
 * Information Display Component
 * 
 * This component displays a simple toggle button to show/hide the analyzed information display.
 * 
 * @returns {JSX.Element} Information display component
 */
function Information_Display() {
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleToggleAnalysis = () => {
    setShowAnalysis(!showAnalysis);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Toggle Button */}
      <div className="flex justify-center">
        <button 
          onClick={handleToggleAnalysis}
          className="w-72 h-8 relative bg-gray-800 hover:bg-gray-700 rounded transition-colors duration-200"
        >
          <div className="left-0 top-0 absolute justify-start text-neutral-100 text-2xl font-semibold font-['Inter'] leading-loose">
            Review information
          </div>
          <div className="left-[246px] top-[2px] absolute">
            {showAnalysis ? (
              <ChevronDown className="w-8 h-8 text-white" />
            ) : (
              <ChevronUp className="w-8 h-8 text-white" />
            )}
          </div>
        </button>
      </div>

      {/* Analyzed Info Display - shown when toggled */}
      {showAnalysis && (
        <div className="transition-all duration-300 ease-in-out flex justify-center">
          <Analyzed_Info_Display isAnalysisDisplayed={true} />
        </div>
      )}
    </div>
  );
}

export default Information_Display;
