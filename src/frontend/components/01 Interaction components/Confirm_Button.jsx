import React, { useState } from 'react';
import { ChevronsRight } from 'lucide-react';
import Success_Message from './Success_Message';

/**
 * Confirm Button Component
 * 
 * This component displays a confirm button with the specified design.
 * It includes a chevrons right icon and "Confirm" text.
 * Handles success states internally like other button components.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onNext - Callback function when Next URL is clicked
 * @param {string} props.classification - The AI classification ('Malicious' or 'Non-Malicious')
 * @param {string} props.tooltipText - Tooltip text to show on hover (optional)
 * @returns {JSX.Element} Confirm button component
 */
function Confirm_Button({ onNext, classification = 'Malicious', tooltipText = "Confirm the AI's recommendation" }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false);

  /**
   * Handles the button click event
   * Shows the success modal when the confirm button is clicked
   */
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="relative">
        <button 
          onClick={handleClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="w-96 h-11 p-3 rounded-lg outline outline-1 outline-offset-[-1px] inline-flex justify-center items-center gap-2 overflow-hidden transition-colors duration-200"
          style={{ backgroundColor: 'var(--eth-blue-100)', outlineColor: 'var(--eth-blue-100)' }}
        >
          <div data-svg-wrapper data-size="16" className="relative">
            <ChevronsRight className="w-4 h-4 text-white" />
          </div>
          <div className="justify-start text-white text-2xl font-semibold font-['Inter'] leading-normal">
            Confirm AI Action
          </div>
        </button>
        
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-50 whitespace-nowrap">
            {tooltipText}
            {/* Tooltip arrow */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
          </div>
        )}
      </div>

      {/* Success message modal */}
      {showModal && (
        <Success_Message 
          decisionType={classification === 'Malicious' ? 'block' : 'allow'}
          actor="ai"
          onNext={() => {
            onNext();
            setShowModal(false); // Reset modal state when onNext is called
          }}
        />
      )}
    </>
  );
}

export default Confirm_Button;
