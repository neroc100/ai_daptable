import React, { useState } from 'react';
import Success_Message_URL_Blocked from './Success_Message_URL_Blocked';

/**
 * Block Button Component
 * 
 * This component renders a button that blocks URLs. When clicked, it shows a success modal
 * with a white overlay background. The button has a red outline to indicate blocking action.
 * 
 * @returns {JSX.Element} Block button with modal functionality
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

      {/* Modal Overlay - appears when button is clicked */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
          {/* Success message modal component */}
          <Success_Message_URL_Blocked onOKClick={handleOKClick} />
        </div>
      )}
    </>
  );
}

export default Block_Button;
