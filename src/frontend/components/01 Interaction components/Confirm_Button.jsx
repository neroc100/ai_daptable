import React from 'react';
import { ChevronsRight } from 'lucide-react';
import { useSuccessModal } from '../../context/SuccessModalContext';

/**
 * Confirm Button Component
 * 
 * Button for confirming AI recommendations in AI-assisted decision scenarios.
 * Triggers global success modal when clicked.
 * Uses ETH blue styling with chevron icon.
 * 
 * @param {Object} props - Component props
 * @param {string} props.classification - AI classification ('Malicious' or 'Non-Malicious')
 * @returns {JSX.Element} Confirm button component
 */
function Confirm_Button({ classification = 'Malicious' }) {
  const { showSuccessMessage } = useSuccessModal();


  return (
    <>
      {/* Main Confirm Button - ETH blue with chevron icon */}
      <button 
        onClick={() => showSuccessMessage({
          decisionType: classification === 'Malicious' ? 'block' : 'allow',
          actor: 'ai',
          classification: classification,
          actionType: 'confirm'
        })}
        className="w-96 h-11 p-3 rounded-lg outline outline-1 outline-offset-[-1px] inline-flex justify-center items-center gap-2 overflow-hidden transition-colors duration-200"
        style={{ backgroundColor: 'var(--eth-blue-100)', outlineColor: 'var(--eth-blue-100)' }}
      >
        <div className="relative">
          <ChevronsRight className="w-4 h-4 text-white" />
        </div>
        <div className="justify-start text-white text-2xl font-semibold font-['Inter'] leading-normal">
          Confirm AI Action
        </div>
      </button>
    </>
  );
}

export default Confirm_Button;
