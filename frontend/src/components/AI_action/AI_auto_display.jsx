import React from 'react';
import Next_Button from '../01 Interaction components/Next_Button';
import View_Information_Button from '../01 Interaction components/View_Information_Button';
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
    // Main container with ETH blue outline styling
    <div className="w-[833px] p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col items-center space-y-3" style={{ outlineColor: 'var(--eth-blue-100)', backgroundColor: 'var(--box-bg)' }}>
      
      {/* AI decision message */}
      <AI_Action_Message_Box 
        text={`AI ${classification === 'Malicious' ? 'blocked' : 'allowed'} the URL`}
      />
      
      {/* Toggle button for viewing AI analysis information */}
      <View_Information_Button />
      
      {/* Navigation button to proceed to next URL */}
      <div className="flex justify-center">
        <Next_Button 
          className="px-12 py-4 text-lg"
        />
      </div>
    </div>
  );
}

export default AI_auto_display;
