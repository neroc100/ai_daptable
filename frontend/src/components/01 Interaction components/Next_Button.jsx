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
  const { Condition } = useButtonContext();

  const handleClick = () => {
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
      className={`px-12 py-4 h-16 p-3 bg-white rounded-lg outline outline-4 outline-offset-[-4px] inline-flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:opacity-90 hover:shadow-lg transition-all duration-200 ${className}`}
      style={{ outlineColor: 'var(--eth-blue-100)' }}
      onClick={handleClick}
    >
      {/* Button text with ETH styling */}
      <div className="justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-normal">
        {text}
      </div>
    </div>
  );
}

export default Next_Button;
