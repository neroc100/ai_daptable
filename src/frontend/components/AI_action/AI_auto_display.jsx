import React from 'react';
import Next_Button from '../01 Interaction components/Next_Button';
import View_Information_Button from '../01 Interaction components/View_Information_Button';
import AI_Action_Message_Box from './AI_Action_Message_Box';

/**
 * AI Auto Display Component
 * 
 * Displays a box with ETH blue outline containing confirm and override AI action buttons for auto scenarios.
 * 
 * @param {Object} props - Component props
 * @param {string} props.classification - The AI classification ('Malicious' or 'Non-Malicious')
 * @returns {JSX.Element} AI auto display component
 */
function AI_auto_display({ classification = 'Non-Malicious' }) {
  return (
    <div className="w-[1250px] p-6 bg-white rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col items-center space-y-4" style={{ outlineColor: 'var(--eth-blue-100)' }}>
      
      {/* Title */}
      <AI_Action_Message_Box 
        text={`AI successfully ${classification === 'Malicious' ? 'blocked' : 'allowed'} the URL`}
      />
      
      {/* Next Button */}
      <div className="flex justify-center">
        <Next_Button 
          className="px-12 py-4 text-lg"
        />
      </div>
      
      {/* View Information Button */}
      <View_Information_Button />
    </div>
  );
}

export default AI_auto_display;
