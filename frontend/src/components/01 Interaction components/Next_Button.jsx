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
function Next_Button({ className = "", text = "Next URL" }) {
  // Navigation and URL counter hooks
  const navigate = useNavigate();
  const { urlCount, maxUrls, incrementUrlCount, switchUrl } = useUrlCounter();
  // Modal control hook
  const { hideSuccessMessage } = useSuccessModal();
  // Get current condition to determine if we should log timestamp
  const { Condition } = useButtonContext();

  const handleClick = () => {
    // Only log timestamp for conditions 5 (veto) and 6 (auto) where Next_Button is the primary interaction
    // On other conditions, Next_Button appears after Decision_Button and would overwrite the decision timestamp
    if (Condition === 5 || Condition === 6) {
      const buttonClickTime = Date.now();
      localStorage.setItem('decision_button_click_time', buttonClickTime.toString());
      
    }
    
    // Always hide success modal first
    hideSuccessMessage();
    
    // Navigate to mental effort rating page
    navigate('/mental-effort-rating');
  };

  return (
    // ETH blue styled button with navigation logic
    <button
      onClick={handleClick}
      className={`px-8 py-3 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl ${className}`}
      style={{ backgroundColor: 'var(--eth-blue-100)' }}
    >
      {text}
    </button>
  );
}

export default Next_Button;
