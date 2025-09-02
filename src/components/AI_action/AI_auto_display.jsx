import React from 'react';
import Next_Button from '../01 Interaction components/Next_Button';

/**
 * AI Auto Display Component
 * 
 * Displays a box with ETH blue outline containing confirm and override AI action buttons for auto scenarios.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onViewInfo - Callback function for view information button
 * @param {Function} props.onNext - Callback function for next button
 * @param {string} props.classification - The AI classification ('Malicious' or 'Non-Malicious')
 * @returns {JSX.Element} AI auto display component
 */
function AI_auto_display({ onViewInfo, onNext, classification = 'Non-Malicious' }) {
  return (
    <div className="w-[1250px] p-6 bg-white rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col items-center space-y-4" style={{ outlineColor: 'var(--eth-blue-100)' }}>
      {/* Title */}
      <div className="text-2xl font-semibold text-black mb-4">
        AI successfully {classification === 'Malicious' ? 'blocked' : 'allowed'} the URL
      </div>
      
      {/* Next Button */}
      <div className="flex justify-center">
        <Next_Button 
          className="px-12 py-4 text-lg"
          onClick={onNext}
        />
      </div>
      
      {/* View Information Button */}
      <button
        onClick={onViewInfo}
        className="px-6 py-2 text-black font-semibold rounded-lg transition-colors duration-200"
        style={{ backgroundColor: 'var(--eth-blue-20)' }}
      >
        View Information
      </button>
    </div>
  );
}

export default AI_auto_display;
