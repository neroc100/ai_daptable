import React from 'react';
import { ChevronsRight } from 'lucide-react';
import { useSuccessModal } from '../../context/SuccessModalContext';

/**
 * Cancel Button Component
 * 
 * Button for overriding AI recommendations in AI-assisted decision scenarios.
 * Triggers global success modal when clicked.
 * Uses ETH blue styling with chevron icon.
 * 
 * @param {Object} props - Component props
 * @param {string} props.classification - AI classification ('Malicious' or 'Non-Malicious')
 * @param {string} props.className - Additional CSS classes (optional)
 * @returns {JSX.Element} Cancel button component
 */
function Cancel_Button({ classification = 'Malicious', className = "" }) {
  const { showSuccessMessage } = useSuccessModal();


  return (
    <>
      {/* Main Cancel Button - ETH blue with chevron icon */}
      <button 
        onClick={() => showSuccessMessage({
          decisionType: classification === 'Malicious' ? 'allow' : 'block',
          actor: 'human',
          classification: classification,
          actionType: 'override'
        })}
        className={`w-96 h-11 p-3 rounded-lg outline outline-1 outline-offset-[-1px] inline-flex justify-center items-center gap-2 overflow-hidden transition-colors duration-200 ${className}`}
        style={{ backgroundColor: 'var(--eth-blue-100)', outlineColor: 'var(--eth-blue-100)' }}
      >
        <div className="relative">
          <ChevronsRight className="w-4 h-4 text-white" />
        </div>
        <div className="justify-start text-white text-2xl font-semibold font-['Inter'] leading-normal">
          Override AI Action
        </div>
      </button>
    </>
  );
}

export default Cancel_Button;
