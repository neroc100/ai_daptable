import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Next Button Component
 * 
 * A reusable button component that navigates to the main page when clicked.
 * Uses ETH blue styling consistent with the application theme.
 * 
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes for the button
 * @param {Function} props.onClick - Optional custom click handler (if not provided, navigates to main page)
 * @param {string} props.text - Button text (defaults to "Next")
 * @returns {JSX.Element} Next button component
 */
function Next_Button({ className = "", onClick, text = "Next" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    navigate('/');
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
