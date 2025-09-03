import React from 'react';

/**
 * AI Action Request Component
 * 
 * Displays a box with ETH blue outline containing confirm and override AI action buttons.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onConfirm - Callback function for confirm action
 * @param {Function} props.onOverride - Callback function for override action
 * @param {Function} props.onViewInfo - Callback function for view information button
 * @param {string} props.classification - The AI classification ('Malicious' or 'Non-Malicious')
 * @returns {JSX.Element} AI action request component
 */
function AI_Action_request({ onConfirm, onOverride, onViewInfo, classification = 'Malicious' }) {
  return (
    <div className="w-[1250px] p-6 bg-white rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col items-center space-y-4" style={{ outlineColor: 'var(--eth-blue-100)' }}>
      {/* Title */}
     <div className="text-3xl font-semibold text-black mb-4 animate-pulse">
          AI requests to {classification === 'Malicious' ? 'block' : 'allow'} the URL

      </div>
      
      {/* Buttons */}
      <div className="flex flex-row space-x-4">
        <button
          onClick={onConfirm}
          className="px-12 py-4 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg"
          style={{ backgroundColor: 'var(--eth-blue-100)' }}
        >
          Confirm AI Action
        </button>
        <button
          onClick={onOverride}
          className="px-12 py-4 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg"
          style={{ backgroundColor: 'var(--eth-blue-100)' }}
        >
          {classification === 'Malicious' ? 'Allow URL instead' : 'Block URL instead'}
        </button>
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

export default AI_Action_request;
