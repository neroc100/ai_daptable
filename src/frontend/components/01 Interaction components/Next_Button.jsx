import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUrlCounter } from '../../context/UrlCounterContext';

/**
 * Next Button Component
 * 
 * Universal navigation button for URL progression in the experiment.
 * Automatically navigates to next URL or main page when max URLs reached.
 * Uses ETH blue styling consistent with application theme.
 * 
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes for the button
 * @param {string} props.text - Button text (defaults to "Next URL")
 * @param {Function} props.onClick - Optional custom click handler (executes before navigation)
 * @returns {JSX.Element} Next button component
 */
function Next_Button({ className = "", text = "Next URL", onClick }) {
  const navigate = useNavigate();
  const { urlCount, maxUrls, incrementUrlCount, switchUrl } = useUrlCounter();

  const handleClick = () => {
    // Execute custom click handler first (e.g., hide modal)
    if (onClick) {
      onClick();
    }
    
    // Handle navigation logic
    if (urlCount >= maxUrls) {
      navigate('/'); // Return to main page
    } else {
      incrementUrlCount(); // Increment URL counter
      switchUrl(); // Switch to next URL
    }
  };

  return (
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
