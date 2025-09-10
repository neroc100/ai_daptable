import React from 'react';
import View_Information_Button from '../01 Interaction components/View_Information_Button';
import Decision_Button from '../01 Interaction components/Decision_Button';
import AI_Action_Message_Box from './AI_Action_Message_Box';

/**
 * AI Allow Display Component
 * 
 * Displays AI recommendation interface where AI requests user permission.
 * Provides confirm and deny options for AI's recommendation.
 * Used in AI-assisted scenarios where user has final decision authority.
 * 
 * @param {Object} props - Component props
 * @param {string} props.classification - AI classification ('Malicious' or 'Non-Malicious')
 * @returns {JSX.Element} AI allow display component
 */
function AI_allow_display({ classification = 'Malicious' }) {
  return (
    <>
      {/* Main container with ETH blue outline styling */}
      <div className="w-[1250px] p-6 bg-white rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col items-center space-y-4" style={{ outlineColor: 'var(--eth-blue-100)' }}>
        
        {/* AI recommendation request message */}
        <AI_Action_Message_Box 
          text={`AI requests to ${classification === 'Malicious' ? 'block' : 'allow'} the URL`}
        />
        
        {/* Action buttons container */}
        <div className="flex flex-row space-x-4">
          {/* Confirm AI recommendation button */}
          <Decision_Button 
            type="confirm"
            classification={classification}
          />
          {/* Deny AI recommendation button with custom text */}
          <Decision_Button 
            type="override"
            classification={classification}
            text={`Deny and ${classification === 'Malicious' ? 'allow' : 'block'} instead`}
          />
        </div>
        
        {/* Toggle button for viewing AI analysis information */}
        <View_Information_Button />
      </div>
    </>
  );
}

export default AI_allow_display;
