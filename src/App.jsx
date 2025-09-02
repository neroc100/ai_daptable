import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Manual from './pages/01_manual';
import Info_acquisition from './pages/02_info_acquisition';
import Info_analysis from './pages/03_info_analysis';
import Allow from './pages/04_allow';
import Veto from './pages/05_veto';
import Auto from './pages/06_auto';
import Dummy from './pages/dummy';
import { ButtonProvider, useButtonContext } from './context/ConditionContext';
import { UrlCounterProvider, useUrlCounter } from './context/UrlCounterContext';


/**
 * Main Page Component with Button Click Handling
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
 * @returns {JSX.Element} Main page component with button grid
 */
function MainPage() {
  const navigate = useNavigate();
  // Access the global button context to set the clicked button number
  const { setCondition } = useButtonContext();
  // Access the global URL counter context to reset when returning to main page
  const { resetForNewExperiment } = useUrlCounter();

  // Reset URL counter when returning to main page
  React.useEffect(() => {
    resetForNewExperiment();
  }, [resetForNewExperiment]);

  /**
   * Handles button clicks and sets the button number globally
   * 
   * This function is called when any of the 6 buttons is clicked.
   * It sets the button number in the global ButtonContext and then
   * navigates to the appropriate page.
   * 
   * @param {number} buttonNumber - The number of the button that was clicked (1-6)
   */
  const handleButtonClick = (buttonNumber) => {
    // Set the button number globally using ButtonContext
    setCondition(buttonNumber);
    
    if (buttonNumber === 1) {
      navigate('/manual');
    } else if (buttonNumber === 2) {
      navigate('/info-acquisition');
    } else if (buttonNumber === 3) {
      navigate('/info-analysis');
    } else if (buttonNumber === 4) {
      navigate('/allow');
    } else if (buttonNumber === 5) {
      navigate('/veto');
    } else if (buttonNumber === 6) {
      navigate('/auto');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
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

/**
 * Main App Component
 * 
 * This component wraps the entire application with the ButtonProvider
 * to enable global access to the button state throughout the app.
 * 
 * ButtonContext Integration:
 * - Wraps the entire app with ButtonProvider
 * - Enables all child components to access Condition state
 * - Provides global state management for button selection
 * 
 * @returns {JSX.Element} App component with global context provider
 */
function App() {
  return (
    <ButtonProvider>
      <UrlCounterProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <main>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/manual" element={<Manual />} />
                <Route path="/info-acquisition" element={<Info_acquisition />} />
                <Route path="/info-analysis" element={<Info_analysis />} />
                <Route path="/allow" element={<Allow />} />
                <Route path="/veto" element={<Veto />} />
                <Route path="/auto" element={<Auto/>} />
                <Route path="/dummy" element={<Dummy />} />
              </Routes>
            </main>
          </div>
        </Router>
      </UrlCounterProvider>
    </ButtonProvider>
  );
}

export default App;
