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
    <div className="w-full p-4 rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col justify-start items-start" style={containerStyle}>
      {/* AI Classification label */}
      <div className="self-stretch justify-start text-stone-900 text-2xl font-semibold font-['Inter'] leading-loose mb-2">AI Classification:</div>
      
      {/* Separator line */}
      <div className="w-full h-px bg-gray-300 mb-2"></div>
      
      {/* Classification result */}
      <div className="text-xl font-semibold" style={textStyle}>{classification}</div>
    </div>
  );
}

export default AI_classification;
