import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUrlCounter } from '../../context/UrlCounterContext';
import { useSuccessModal } from '../../context/SuccessModalContext';
import { useButtonContext } from '../../context/ConditionContext';

/**
 * Next Button Component
 * 
 * Universal navigation button for URL progression in the experiment.
 * Automatically navigates to next URL or main page when max URLs reached.
 * Uses ETH blue styling consistent with application theme.
 * 
 */
function Next_Button({ className = "", text = "Next URL", isInSuccessModal = false }) {
  // Navigation and URL counter hooks
  const navigate = useNavigate();
  const { urlCount, maxUrls, incrementUrlCount, switchUrl } = useUrlCounter();
  // Modal control hook
  const { hideSuccessMessage } = useSuccessModal();
  // Get current condition to determine if we should log timestamp
  const { Condition, logConditionTime } = useButtonContext();

  // Determine button style based on context
  const getButtonStyle = () => {
    // Blue styling for success modal
    if (isInSuccessModal) {
      return {
        outlineColor: 'var(--eth-blue-20)',
        backgroundColor: 'var(--eth-blue-20)'
      };
    }
    
    // Gray styling for conditions 5 and 6 on the page
    if (Condition === 5 || Condition === 6) {
      return {
        outlineColor: 'var( --decision-button-bg)',
        backgroundColor: 'var( --decision-button-bg)'
      };
    }
    
  };

  const handleClick = () => {
    // Check if we should trigger freeze probe immediately on button click (only when not in success modal)
    if (!isInSuccessModal) {
      triggerProbeOnClick();
    }
    
    // Only log condition time when NOT in success modal (to avoid duplicate logging with Decision_Button)
    if (!isInSuccessModal) {
      // Log time spent on current condition before proceeding (for all conditions)
      logConditionTime(null); // Pass null since we're not switching to a new condition
    }
    
    // Only log timestamp and human action for conditions 5 (veto) and 6 (auto) where Next_Button is the primary interaction
    // AND only when NOT in success modal (to avoid overriding Decision_Button actions)
    if ((Condition === 5 || Condition === 6) && !isInSuccessModal) {
      const buttonClickTime = Date.now();
      localStorage.setItem('decision_button_click_time', buttonClickTime.toString());
      localStorage.setItem('human_action', 'none');
      console.log('Next button clicked at:', buttonClickTime, '(Condition', Condition, ')');
      console.log('Human action logged: none');
    }
    
    // Always hide success modal first
    hideSuccessMessage();
    
    // Navigate to mental effort rating page
    navigate('/mental-effort-rating');
  };

  return (
    // ETH blue outline styled button with navigation logic
    <div 
      className={`px-6 py-2 h-12 p-1 bg-white rounded-4xl outline outline-3 outline-offset-[-3px] inline-flex justify-center items-center gap-1 overflow-hidden cursor-pointer shadow-xl hover:opacity-85 hover:shadow-md transition-all duration-200 ${className}`}
      style={getButtonStyle()}
      onClick={handleClick}
    >
      {/* Button text with ETH styling */}
      <div className="justify-start text-black text-sm font-bold font-['Arial'] leading-normal">
        {text}
      </div>
    </div>
  );
}

export default Next_Button;
