import React, { useState } from 'react';
import Success_Message from '../01 Interaction components/Success_Message';

/**
 * Block Button Component
 * 
 * Renders the primary action button for blocking URLs.
 * Uses ETH red-100 outline to indicate negative action. Shows success modal with overlay
 * when clicked, providing feedback for the expert's decision.
 * 
 * @returns {JSX.Element} Block button with success modal functionality
 */
function Block_Button() {
  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  /**
   * Handles the button click event
   * Shows the success modal when the block button is clicked
   */
  const handleClick = () => {
    setShowModal(true);
  };

  /**
   * Handles the OK button click in the modal
   * Closes the success modal when OK is clicked
   */
  const handleOKClick = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Main Block Button - red outline indicates blocking action */}
      <div 
        data-has-icon-end="false" 
        data-has-icon-start="false" 
        data-size="Medium" 
        data-state="Default" 
        data-variant="Subtle" 
        className="w-96 h-16 p-3 bg-white rounded-lg outline outline-4 outline-offset-[-4px] inline-flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
        style={{ outlineColor: 'var(--eth-red-100)' }}
        onClick={handleClick}
      >
        {/* Button text */}
        <div className="justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-normal">
          Block URL
        </div>
      </div>

      {/* Success message modal */}
      {showModal && (
        <Success_Message 
          onClose={handleOKClick}
          decisionType="block"
          actor="human"
        />
      )}
    </>
  );
}

export default Block_Button;
