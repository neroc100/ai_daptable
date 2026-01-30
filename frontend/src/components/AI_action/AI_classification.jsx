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
    borderColor: isMalicious ? 'var(--eth-red-60)' : 'var(--eth-green-60)'
  };

  const textStyle = {
    color: isMalicious ? 'var(--eth-red-100)' : 'var(--eth-green-100)'
  };

  return (
  <>
    {/* Header outside the colored component */}
    <h1 className="w-full text-center font-bold font-['ui-sans-serif'] pb-2 mb-3">Classification</h1>
    
    {/* Color-coded component */}
    <div className="w-full px-6 py-4 rounded-2xl border-2 flex flex-col text-center items-center shadow-sm" style={containerStyle}>
      {/* Classification result */}
      <div className="text-xl font-bold" style={textStyle}>{classification}</div>
    </div>
  </>
);
}
export default AI_classification;
