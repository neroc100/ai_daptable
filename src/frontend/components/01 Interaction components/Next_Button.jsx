import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUrlCounter } from '../../context/UrlCounterContext';
import { useSuccessModal } from '../../context/SuccessModalContext';

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

  const handleClick = () => {
    // Always hide success modal first
    hideSuccessMessage();
    
    // Navigate to main page if max URLs reached
    if (urlCount >= maxUrls) {
      navigate('/');
    } else {
      // Otherwise, progress to next URL
      incrementUrlCount();
      switchUrl();
    }
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
