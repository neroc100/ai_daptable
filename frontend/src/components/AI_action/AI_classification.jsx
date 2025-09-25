import React, { useState, useEffect } from 'react';

/**
 * AI Classification Component
 * 
 * Displays the AI classification result with Malicious or Non-Malicious.
 * Uses red colors for Malicious and green colors for Non-Malicious.
 * 
 * @param {Object} props - Component props
 * @param {string} props.classification - The classification to display ('Malicious' or 'Non-Malicious')
 * @returns {JSX.Element} AI classification component
 */
function AI_classification({ classification = 'Malicious' }) {

  const isMalicious = classification === 'Malicious';
  
  const containerStyle = {
    backgroundColor: isMalicious ? 'var(--eth-red-10)' : 'var(--eth-green-20)',
    outlineColor: isMalicious ? 'var(--eth-red-100)' : 'var(--eth-green-100)'
  };

  const textStyle = {
    color: isMalicious ? 'var(--eth-red-100)' : 'var(--eth-green-100)'
  };

  return (
    <div className="w-full p-3 rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col text-center items-center" style={containerStyle}>
      {/* AI Classification label */}
      <div className="self-stretch text-stone-900 text-xl font-semibold font-['Arial'] leading-loose mb-1">AI Classification:</div>
      
      {/* Separator line */}
      <div className="w-full h-px bg-gray-300 mb-1"></div>
      
      {/* Classification result */}
      <div className="text-lg font-semibold " style={textStyle}>{classification}</div>
    </div>
  );
}

export default AI_classification;
