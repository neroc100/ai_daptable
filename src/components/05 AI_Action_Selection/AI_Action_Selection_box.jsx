import React, { useState, useEffect } from 'react';
import Info_Display from '../03 AI_Info_Acquisition/Info_Display';
import { Check, Square } from 'lucide-react';

/**
 * AI Action Selection Box Component
 * 
 * This component displays a loading icon that transitions to a checkmark with square outline
 * after the loading period. It includes the "AI Action Selection" label and uses
 * the info display component.
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isLoading - Whether the component is in loading state
 * @param {boolean} props.showDisplay - Whether to show the feature display
 * @returns {JSX.Element} AI Action Selection box component
 */
function AI_Action_Selection_box({ isLoading = true, showDisplay = false }) {
  const [showCheckmark, setShowCheckmark] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowCheckmark(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <div className="text-white text-lg font-semibold">AI Action Selection</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Checkmark with square outline and text positioned next to it */}
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Square className="w-6 h-6 text-blue-400" strokeWidth={2} />
          <Check className="w-4 h-4 text-blue-400 absolute inset-0 m-auto" strokeWidth={3} />
        </div>
        <div className="text-white text-lg font-semibold">AI Action Selection</div>
      </div>
      
      {/* Feature Display */}
      {!isLoading && showDisplay && (
        <Info_Display isAnalysisDisplayed={false} />
      )}
    </div>
  );
}

export default AI_Action_Selection_box;
