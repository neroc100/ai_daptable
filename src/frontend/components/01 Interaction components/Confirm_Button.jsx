import React, { useState } from 'react';
import { ChevronsRight } from 'lucide-react';
import { useSuccessModal } from '../../context/SuccessModalContext';

/**
 * Confirm Button Component
 * 
 * Button for confirming AI recommendations in AI-assisted decision scenarios.
 * Triggers global success modal when clicked.
 * Includes tooltip and ETH blue styling with chevron icon.
 * 
 * @param {Object} props - Component props
 * @param {string} props.classification - AI classification ('Malicious' or 'Non-Malicious')
 * @param {string} props.tooltipText - Tooltip text on hover (optional)
 * @returns {JSX.Element} Confirm button component
 */
function Confirm_Button({ classification = 'Malicious', tooltipText = "Confirm the AI's recommendation" }) {
  // Tooltip visibility state
  const [showTooltip, setShowTooltip] = useState(false);
  const { showSuccessMessage } = useSuccessModal();


  return (
    <>
      <div className="relative">
        {/* Main Confirm Button - ETH blue with chevron icon */}
        <button 
          onClick={() => showSuccessMessage({
            decisionType: classification === 'Malicious' ? 'block' : 'allow',
            actor: 'ai',
            classification: classification,
            actionType: 'confirm'
          })}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
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
        
        {/* Hover tooltip */}
        {showTooltip && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-50 whitespace-nowrap">
            {tooltipText}
            {/* Tooltip arrow */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
          </div>
        )}
      </div>

    </>
  );
}

export default Confirm_Button;
