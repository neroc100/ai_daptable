import React from 'react';

/**
 * Condition 6a Button Component
 * 
 * This component displays a button for condition 6a.
 * It follows the same design pattern as other condition buttons.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onClick - Click handler function
 * @returns {JSX.Element} Condition 6a button component
 */
function Condition_6a_Button({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl py-6 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
    >
      6a
    </button>
  );
}

export default Condition_6a_Button;
