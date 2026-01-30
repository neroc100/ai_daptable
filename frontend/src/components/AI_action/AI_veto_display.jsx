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
          <h1 className="w-full text-center font-bold font-['ui-sans-serif'] pb-1 mt-1 mb-1">Completed Action</h1>
        {/* AI decision  message */}
        <AI_Action_Message_Box 
          text={`AI ${classification === 'Malicious' ? 'Blocked' : 'Allowed'} the URL`}
        />

    </>
  );
}

export default AI_veto_display;
