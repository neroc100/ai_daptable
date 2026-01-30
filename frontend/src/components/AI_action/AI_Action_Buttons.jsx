import React from 'react';
import Decision_Button from '../01 Interaction components/Decision_Button';

/**
 * AI Action Buttons Component
 * 
 * Displays the action buttons for AI recommendation decisions.
 * Contains confirm and override buttons for user to accept or deny AI recommendation.
 * 
 * @param {Object} props - Component props
 * @param {string} props.classification - AI classification ('Malicious' or 'Non-Malicious')
 * @param {string} props.case - Type of case: 'allow' or 'veto'
 * @returns {JSX.Element} Action buttons container
 */
function AI_Action_Buttons({ classification = 'Malicious', case: caseType = 'allow' }) {
  return (
    <div className="relative flex justify-center items-center w-full py-3 sm:flex sm:flex-row flex-col gap-3">
      {caseType === 'allow' ? (
        <>
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
        </>
      ) : caseType === 'veto' ? (
        <>
          <Decision_Button 
            type="confirm"
            classification={classification}
            text={`Confirm ${classification} Classification`}
          />
          {/* Override AI veto recommendation button - positioned right of center */}
          <Decision_Button 
            type="override"
            classification={classification}
            text={`Override and ${classification === 'Malicious' ? 'Allow' : 'Block'} URL Instead`}
          />
        </>
      ) : null}
    </div>
  );
}

export default AI_Action_Buttons;
