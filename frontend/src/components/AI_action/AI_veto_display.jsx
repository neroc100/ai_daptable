import React from 'react';
import Next_Button from '../01 Interaction components/Next_Button';
import View_Information_Button from '../01 Interaction components/View_Information_Button';
import Decision_Button from '../01 Interaction components/Decision_Button';
import AI_Action_Message_Box from './AI_Action_Message_Box';

/**
 * AI Veto Display Component
 * 
 * Displays AI veto interface where AI has already made a decision.
 * Provides override option for users to change the AI's decision.
 * Used in scenarios where AI acts autonomously but user can still intervene.
 * 
 * @param {Object} props - Component props
 * @param {string} props.classification - AI classification ('Malicious' or 'Non-Malicious')
 * @returns {JSX.Element} AI veto display component
 */
function AI_veto_display({ classification = 'Non-Malicious' }) {
  return (
    <>
      {/* Main container with ETH blue outline styling */}
      <div className="w-[833px] p-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col items-center space-y-3" style={{ outlineColor: 'var(--eth-blue-40)', backgroundColor: 'var(--box-bg)' }}>
        {/* AI decision  message */}
        <AI_Action_Message_Box 
          text={`AI ${classification === 'Malicious' ? 'Blocked' : 'Allowed'} the URL`}
        />
        
        {/* Toggle button for viewing AI analysis information */}
        <View_Information_Button />
        
        {/* Action buttons - equally distant from center */}
        <div className="relative flex justify-center items-center w-full py-3 sm:flex sm:flex-row flex-col gap-3">
          {/* Override button to change AI's decision - positioned left of center */}
            <Decision_Button 
              type="override"
              classification={classification}
            />
          {/* Navigation button to proceed to next URL - positioned right of center */}
            <Next_Button/>
        </div>
      </div>

    </>
  );
}

export default AI_veto_display;
