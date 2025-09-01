import React from 'react';

/**
 * AI Classification Component
 * 
 * Displays the AI classification result with a red outline.
 * Shows "AI Classification - malicious" in a styled box.
 * 
 * @returns {JSX.Element} AI classification component
 */
function AI_classification() {
  return (
    <div className="w-full p-4 rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col justify-start items-start" style={{ backgroundColor: 'var(--eth-red-10)', outlineColor: 'var(--eth-red-100)' }}>
      {/* AI Classification label */}
      <div className="self-stretch justify-start text-stone-900 text-2xl font-semibold font-['Inter'] leading-loose mb-2">AI Classification:</div>
      
      {/* Separator line */}
      <div className="w-full h-px bg-gray-300 mb-2"></div>
      
      {/* Classification result */}
      <div className="text-xl font-semibold" style={{ color: 'var(--eth-red-100)' }}>Malicious</div>
    </div>
  );
}

export default AI_classification;
