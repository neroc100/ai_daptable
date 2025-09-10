import React, { useState } from 'react';
import Success_Message from '../01 Interaction components/Success_Message';

/**
 * Allow Button Component
 * 
 * Renders the primary action button for allowing URLs.
 * Uses ETH green-100 outline to indicate positive action. Shows success modal with overlay
 * when clicked, providing feedback for the expert's decision.
 * 
 * @param {Function} props.onNext - Callback function when Next URL is clicked
 * @returns {JSX.Element} Allow button with success modal functionality
 */
function Allow_Button({ onNext }) {
  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  /**
   * Handles the button click event
   * Shows the success modal when the allow button is clicked
   */
  const handleClick = () => {
    setShowModal(true);
  };



  return (
    <>
      {/* Main Allow Button - green outline indicates allowing action */}
      <div 
        data-has-icon-end="false" 
        data-has-icon-start="false" 
        data-size="Medium" 
        data-state="Default" 
        data-variant="Subtle" 
        className="w-96 h-16 p-3 bg-white rounded-lg outline outline-4 outline-offset-[-4px] inline-flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
        style={{ outlineColor: 'var(--eth-blue-100)' }}
        onClick={handleClick}
      >
        {/* Button text */}
        <div className="justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-normal">
          Allow URL
        </div>
      </div>

      {/* Success message modal */}
      {showModal && (
        <Success_Message 
          decisionType="allow"
          actor="human"
          onNext={() => {
            onNext();
            setShowModal(false); // Reset modal state when onNext is called
          }}
        />
      )}
    </>
  );
}

export default Allow_Button;
