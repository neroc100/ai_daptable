import React from 'react';
import AI_Action_Message_Box from './AI_Action_Message_Box';

/**
 * AI Auto Display Component
 * 
 * Displays AI auto-decision interface where AI has already made a decision.
 * Shows success message and provides navigation to next URL.
 * Used in fully automated scenarios where no user interaction is required.
 * 
 * @param {Object} props - Component props
 * @param {string} props.classification - AI classification ('Malicious' or 'Non-Malicious')
 * @returns {JSX.Element} AI auto display component
 */
function AI_auto_display({ classification = 'Non-Malicious' }) {
  return (
    <>
      {/* Main container with ETH blue outline styling */}
          <h1 className="w-full text-center font-bold font-['ui-sans-serif'] pb-1 mt-1 mb-1">Completed Action</h1>
        {/* AI decision  message */}
        <AI_Action_Message_Box 
          text={`AI ${classification === 'Malicious' ? 'Blocked' : 'Allowed'} the URL`}
        />

    </>
  );
}

export default AI_auto_display;
