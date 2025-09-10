import React from 'react';
import Next_Button from '../01 Interaction components/Next_Button';
import View_Information_Button from '../01 Interaction components/View_Information_Button';
import Cancel_Button from '../01 Interaction components/Cancel_Button';
import AI_Action_Message_Box from './AI_Action_Message_Box';

/**
 * AI Veto Display Component
 * Displays override button for AI veto scenarios with ETH blue styling.
 * 
 * @param {string} classification - AI classification ('Malicious' or 'Non-Malicious')
 * @returns {JSX.Element} AI veto display component
 */
function AI_veto_display({ classification = 'Non-Malicious' }) {
  return (
    <>
      <div className="w-[1250px] p-6 bg-white rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col items-center space-y-4" style={{ outlineColor: 'var(--eth-blue-100)' }}>
        {/* Title */}
        <AI_Action_Message_Box 
          text={`AI successfully ${classification === 'Malicious' ? 'blocked' : 'allowed'} the URL`}
        />
        
        {/* Buttons */}
        <div className="flex flex-row space-x-4">
          <Cancel_Button 
            classification={classification}
            className="px-12 py-4 text-lg"
          />
          <Next_Button 
            className="px-12 py-4 text-lg"
          />
        </div>
        
        {/* View Information Button */}
        <View_Information_Button />
      </div>

    </>
  );
}

export default AI_veto_display;
