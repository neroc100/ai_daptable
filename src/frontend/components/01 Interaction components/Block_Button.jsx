import React from 'react';
import { useSuccessModal } from '../../context/SuccessModalContext';

/**
 * Block Button Component
 * 
 * Primary action button for blocking URLs in manual decision scenarios.
 * Triggers global success modal when clicked.
 * Uses ETH blue styling consistent with application theme.
 * 
 * @returns {JSX.Element} Block button component
 */
function Block_Button() {
  const { showSuccessMessage } = useSuccessModal();




  return (
    <>
      {/* Main Block Button - ETH blue outline for negative action */}
      <div 
        className="w-96 h-16 p-3 bg-white rounded-lg outline outline-4 outline-offset-[-4px] inline-flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
        style={{ outlineColor: 'var(--eth-blue-100)' }}
        onClick={() => showSuccessMessage({
          decisionType: 'block',
          actor: 'human',
          classification: 'Malicious',
          actionType: 'confirm'
        })}
      >
        {/* Button text */}
        <div className="justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-normal">
          Block URL
        </div>
      </div>
    </>
  );
}

export default Block_Button;
