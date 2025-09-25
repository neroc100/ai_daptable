import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useButtonContext } from '../context/ConditionContext';
import { useUrlCounter } from '../context/UrlCounterContext';
import { useFreezeProbe } from '../context/FreezeProbeContext';

/**
 * Condition Selection Page Component
 * 
 * This component handles button clicks on the main page and sets the button number
 * globally using the ButtonContext. It uses the global setCondition function
 * to store which button was clicked, making it accessible throughout the app.
 * 
 * ButtonContext Usage:
 * - Uses useButtonContext() to access setCondition
 * - Sets the button number globally when any button is clicked
 * - Enables other components to access the button number without prop drilling
 * 
 * @returns {JSX.Element} Condition selection page component with button grid
 */
function ConditionPage() {
  const navigate = useNavigate();
  
  console.log('ConditionPage is rendering');
  
  // Access the global button context to set the clicked button number
  const { setCondition } = useButtonContext();
  // Access the global URL counter context to reset when returning to main page
  const { resetUrlCounter } = useUrlCounter();
  // Access the freeze probe context to reset freeze probe selections
  const { resetFreezeProbes } = useFreezeProbe();
  
  console.log('ConditionPage context values:', { setCondition, resetUrlCounter });


  /**
   * Handles button clicks and sets the button number globally
   * 
   * This function is called when any of the 6 buttons is clicked.
   * It sets the button number in the global ButtonContext and then
   * navigates to the participant ID page first.
   * 
   * @param {number} buttonNumber - The number of the button that was clicked (1-6)
   */
  const handleButtonClick = (buttonNumber) => {
    // Set the button number globally using ButtonContext
    setCondition(buttonNumber);
    
    // Navigate to participant ID page first
    navigate('/participant-id');
  };

  return (
    <div className="h-full w-full bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-black mb-8">
          URL Analysis Dashboard
        </h1>
        <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
          Welcome to the URL Analysis Dashboard. Select a condition to get started.
        </p>
        
        {/* Condition Buttons */}
        <div className="max-w-6xl mx-auto">
          {/* Main numbered buttons row */}
          <div className="grid grid-cols-6 gap-4 mb-4">
            <button 
              onClick={() => handleButtonClick(1)}
              className="text-white font-bold text-2xl py-6 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              style={{ backgroundColor: 'var(--eth-blue-100)' }}
            >
              1
            </button>
            <button 
              onClick={() => handleButtonClick(2)}
              className="text-white font-bold text-2xl py-6 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              style={{ backgroundColor: 'var(--eth-blue-100)' }}
            >
              2
            </button>
            <button 
              onClick={() => handleButtonClick(3)}
              className="text-white font-bold text-2xl py-6 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              style={{ backgroundColor: 'var(--eth-blue-100)' }}
            >
              3
            </button>
            <button 
              onClick={() => handleButtonClick(4)}
              className="text-white font-bold text-2xl py-6 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              style={{ backgroundColor: 'var(--eth-blue-100)' }}
            >
              4
            </button>
            <button 
              onClick={() => handleButtonClick(5)}
              className="text-white font-bold text-2xl py-6 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              style={{ backgroundColor: 'var(--eth-blue-100)' }}
            >
              5
            </button>
            <button 
              onClick={() => handleButtonClick(6)}
              className="text-white font-bold text-2xl py-6 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              style={{ backgroundColor: 'var(--eth-blue-100)' }}
            >
              6
            </button>
          </div>
          

        </div>
      </div>
    </div>
  );
}

export default ConditionPage;
