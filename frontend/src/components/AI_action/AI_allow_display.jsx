import React from 'react';
import View_Information_Button from '../01 Interaction components/View_Information_Button';
import Decision_Button from '../01 Interaction components/Decision_Button';
import AI_Action_Message_Box from './AI_Action_Message_Box';
import AI_classification from './AI_classification';

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
        {/* AI recommendation request message */}
        {/* Header outside the colored component */}
    <h1 className="w-full text-center font-bold font-['ui-sans-serif'] pb-1 mt-1 mb-1">Recommended Action</h1>
        <AI_Action_Message_Box 
          text={`AI Requests to ${classification === 'Malicious' ? 'Block' : 'Allow'} the URL`}
        />      
    </>
  );
}

export default AI_allow_display;
