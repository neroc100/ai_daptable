import React from 'react';
import Next_Button from '../01 Interaction components/Next_Button';

/**
 * AI Veto Request Component
 * 
 * Displays a box with ETH blue outline containing confirm and override AI action buttons for veto scenarios.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onOverride - Callback function for override action
 * @param {Function} props.onViewInfo - Callback function for view information button
 * @param {Function} props.onNext - Callback function for next URL button
 * @param {string} props.classification - The AI classification ('Malicious' or 'Non-Malicious')
 * @returns {JSX.Element} AI veto request component
 */
function AI_veto_request({ onOverride, onViewInfo, onNext, classification = 'Non-Malicious' }) {
  return (
    <div className="w-[1250px] p-6 bg-white rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col items-center space-y-4" style={{ outlineColor: 'var(--eth-blue-100)' }}>
      {/* Title */}
      <div className="text-2xl font-semibold text-black mb-4">
        AI successfully {classification === 'Malicious' ? 'blocked' : 'allowed'} the URL
      </div>
      
      {/* Buttons */}
      <div className="flex flex-row space-x-4">
        <button
          onClick={onOverride}
          className="px-12 py-4 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg"
          style={{ backgroundColor: 'var(--eth-blue-100)' }}
        >
          Override and {classification === 'Malicious' ? 'Allow' : 'Block'} URL instead
        </button>
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

export default AI_veto_request;
