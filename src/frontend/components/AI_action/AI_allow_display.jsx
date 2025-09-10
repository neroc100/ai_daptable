import React from 'react';
import View_Information_Button from '../01 Interaction components/View_Information_Button';
import Confirm_Button from '../01 Interaction components/Confirm_Button';
import Cancel_Button from '../01 Interaction components/Cancel_Button';
import AI_Action_Message_Box from './AI_Action_Message_Box';

/**
 * AI Allow Display Component
 * Displays confirm/override buttons for AI recommendations with ETH blue styling.
 */
function AI_allow_display({ classification = 'Malicious' }) {
  return (
    <>
      {/* Main container with ETH blue outline */}
      <div className="w-[1250px] p-6 bg-white rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col items-center space-y-4" style={{ outlineColor: 'var(--eth-blue-100)' }}>
        
        {/* Header section with AI recommendation */}
        <AI_Action_Message_Box 
          text={`AI requests to ${classification === 'Malicious' ? 'block' : 'allow'} the URL`}
        />
        
        {/* Action buttons container */}
        <div className="flex flex-row space-x-4">
          {/* Confirm AI recommendation button */}
          <Confirm_Button 
            classification={classification}
          />
          {/* Override AI recommendation button */}
          <Cancel_Button 
            classification={classification}
          />
        </div>
        
        {/* Information toggle button */}
        <View_Information_Button />
      </div>
    </>
  );
}

export default AI_allow_display;
