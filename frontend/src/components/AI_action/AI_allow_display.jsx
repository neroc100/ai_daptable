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
      <div className="w-[833px] p-5 rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col items-center space-y-3" style={{ outlineColor: 'var(--eth-blue-40)', backgroundColor: 'var( --box-bg)' }}>
        
        {/* AI recommendation request message */}
        <AI_Action_Message_Box 
          text={`AI Requests to ${classification === 'Malicious' ? 'Block' : 'Allow'} the URL`}
        />
        
        {/* Toggle button for viewing AI analysis information */}
        <View_Information_Button />

        {/* Action buttons container - equally distant from center */}
        <div className="relative flex justify-center items-center w-full py-3 sm:flex sm:flex-row flex-col gap-3">
            <Decision_Button 
              type="confirm"
              classification={classification}
            />
          {/* Deny AI recommendation button - positioned right of center */}
            <Decision_Button 
              type="override"
              classification={classification}
              text={`Deny and ${classification === 'Malicious' ? 'Allow' : 'Block'} URL Instead`}
            />
        </div>
        
        
      </div>
    </>
  );
}

export default AI_allow_display;
