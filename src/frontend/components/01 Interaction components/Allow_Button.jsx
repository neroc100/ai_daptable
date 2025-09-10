import React from 'react';
import { useSuccessModal } from '../../context/SuccessModalContext';

/**
 * Allow Button Component
 * 
 * Primary action button for allowing URLs in manual decision scenarios.
 * Triggers global success modal when clicked.
 * Uses ETH blue styling consistent with application theme.
 * 
 * @returns {JSX.Element} Allow button component
 */
function Allow_Button() {
  const { showSuccessMessage } = useSuccessModal();




  return (
    <>
      {/* Main Allow Button - ETH blue outline for positive action */}
      <div 
        data-has-icon-end="false" 
        data-has-icon-start="false" 
        data-size="Medium" 
        data-state="Default" 
        data-variant="Subtle" 
        className="w-96 h-16 p-3 bg-white rounded-lg outline outline-4 outline-offset-[-4px] inline-flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
        style={{ outlineColor: 'var(--eth-blue-100)' }}
        onClick={() => showSuccessMessage({
          decisionType: 'allow',
          actor: 'human',
          classification: 'Malicious',
          actionType: 'confirm'
        })}
      >
        {/* Button text */}
        <div className="justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-normal">
          Allow URL
        </div>
      </div>
    </>
  );
}

export default Allow_Button;
