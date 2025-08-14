import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Success Message Button Component
 * 
 * This component renders the OK button used in success message modals.
 * It includes a double arrow icon and navigates back to the main page when clicked.
 * 
 * @param {Function} onOKClick - Callback function to handle OK button click (closes modal)
 * @returns {JSX.Element} OK button component for success messages
 */
function Success_Message_Button({ onOKClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Close the modal first
    onOKClick();
    // Then navigate back to the main page
    navigate('/');
  };

  return (
    <div 
      data-has-icon-end="false" 
      data-has-icon-start="true" 
      data-size="Medium" 
      data-state="Default" 
      data-variant="Primary" 
      className="w-44 h-14 p-3 left-[158px] top-[129px] absolute bg-zinc-800 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-800 inline-flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
      onClick={handleClick}
    >
      {/* Double arrow icon inside OK button */}
      <div data-svg-wrapper data-size="16" className="relative">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Path defining two right-pointing arrows */}
          <path d="M9.16667 11.8327L12.5 8.49935L9.16667 5.16602M4.5 11.8327L7.83333 8.49935L4.5 5.16602" stroke="#F5F5F5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* OK button text */}
      <div className="justify-start text-neutral-100 text-2xl font-semibold font-['Inter'] leading-normal">
        OK
      </div>
    </div>
  );
}

export default Success_Message_Button;
