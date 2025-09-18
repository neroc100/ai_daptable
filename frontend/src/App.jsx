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
import ParticipantIdPage from './pages/participant_id';
import MentalEffortRatingPage from './pages/mental_effort_rating';
import ErrorBoundary from './components/ErrorBoundary';
import { ButtonProvider, useButtonContext } from './context/ConditionContext';
import { UrlCounterProvider, useUrlCounter } from './context/UrlCounterContext';
import { SuccessModalProvider } from './context/SuccessModalContext';
import { FreezeProbeProvider } from './context/FreezeProbeContext';
import FreezeProbeModal from './components/01 Interaction components/FreezeProbeModal';
import FreezeProbe from './pages/freeze_probe';
import { ParticipantIdProvider } from './context/ParticipantIdContext';
import Success_Message from './components/01 Interaction components/Success_Message';


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
  
  console.log('MainPage is rendering');
  
  // Access the global button context to set the clicked button number
  const { setCondition } = useButtonContext();
  // Access the global URL counter context to reset when returning to main page
  const { resetUrlCounter } = useUrlCounter();
  
  console.log('MainPage context values:', { setCondition, resetUrlCounter });

  // Reset URL counter and clear all localStorage when returning to main page
  React.useEffect(() => {
    resetUrlCounter();
    
    // Clear all localStorage items related to the experiment
    localStorage.removeItem('url_page_load_time');
    localStorage.removeItem('current_url_for_timestamp');
    localStorage.removeItem('decision_button_click_time');
    localStorage.removeItem('human_action');
    localStorage.removeItem('view_information_clicked');
    localStorage.removeItem('initial_condition_logged_for_url');
    localStorage.removeItem('conditions_seen_for_current_url');
    localStorage.removeItem('condition_times_for_current_url');
    localStorage.removeItem('condition_timer_start');
    localStorage.removeItem('experiment_condition');
    
    console.log('Main page loaded - all localStorage cleared');
  }, [resetUrlCounter]);

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
    <ErrorBoundary>
      <ParticipantIdProvider>
        <ButtonProvider>
          <UrlCounterProvider>
            <FreezeProbeProvider>
              <SuccessModalProvider>
              <Router>
                <div className="min-h-screen bg-gray-50">
                  <main>
                    <Routes>
                      <Route path="/" element={<MainPage />} />
                      <Route path="/participant-id" element={<ParticipantIdPage />} />
                      <Route path="/mental-effort-rating" element={<MentalEffortRatingPage />} />
                      <Route path="/manual" element={<Manual />} />
                      <Route path="/info-acquisition" element={<Info_acquisition />} />
                      <Route path="/info-analysis" element={<Info_analysis />} />
                      <Route path="/allow" element={<Allow />} />
                      <Route path="/veto" element={<Veto />} />
                      <Route path="/auto" element={<Auto/>} />
                      <Route path="/dummy" element={<Dummy />} />
                      <Route path="/freeze-probe" element={<FreezeProbe />} />
                    </Routes>
                  </main>
                  {/* Global Success Message Modal */}
                  <Success_Message />
                  {/* Global Freeze Probe Modal */}
                  <FreezeProbeModal />
                </div>
              </Router>
            </SuccessModalProvider>
            </FreezeProbeProvider>
          </UrlCounterProvider>
        </ButtonProvider>
      </ParticipantIdProvider>
    </ErrorBoundary>
  );
}

export default App;
