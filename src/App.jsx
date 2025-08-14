import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HumanActionSelection from './pages/01 Human_Ac_Sel/human_action_selection';
import HumanActionImplementation from './pages/02 Human_Ac_Impl/human_action_implementation';
import AI_info_acquisition from './pages/03 AI_Info_Acquisition/AI_info_acquisition';
import AI_info_acquisition_display from './pages/03 AI_Info_Acquisition/AI_info_acquisition_display';
import AI_info_analysis from './pages/04 AI_Info_Analysis/AI_info_analysis';
import AI_info_analysis_display from './pages/04 AI_Info_Analysis/AI_info_analysis_display';
import Dummy from './pages/dummy';
import { ButtonProvider, useButtonContext } from './context/ButtonContext';

/**
 * Main Page Component with Button Click Handling
 * 
 * This component handles button clicks on the main page and sets the button number
 * globally using the ButtonContext. It uses the global setButtonClicked function
 * to store which button was clicked, making it accessible throughout the app.
 * 
 * ButtonContext Usage:
 * - Uses useButtonContext() to access setButtonClicked
 * - Sets the button number globally when any button is clicked
 * - Enables other components to access the button number without prop drilling
 * 
 * @returns {JSX.Element} Main page component with button grid
 */
function MainPage() {
  const navigate = useNavigate();
  // Access the global button context to set the clicked button number
  const { setButtonClicked } = useButtonContext();

  /**
   * Handles button clicks and sets the button number globally
   * 
   * This function is called when any of the 5 buttons is clicked.
   * It sets the button number in the global ButtonContext and then
   * navigates to the appropriate page.
   * 
   * @param {number} buttonNumber - The number of the button that was clicked (1-5)
   */
  const handleButtonClick = (buttonNumber) => {
    // Set the button number globally using ButtonContext
    setButtonClicked(buttonNumber);
    
    if (buttonNumber === 1) {
      navigate('/human-action-selection');
    } else if (buttonNumber === 2) {
      navigate('/ai-info-acquisition');
    } else if (buttonNumber === 3) {
      navigate('/ai-info-acquisition');
    } else if (buttonNumber === 4) {
      navigate('/ai-info-acquisition');
    } else if (buttonNumber === 5) {
      navigate('/ai-info-acquisition');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-8">
          URL Analysis Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Welcome to the URL Analysis Dashboard. Select a condition to get started.
        </p>
        
        {/* Condition Buttons */}
        <div className="grid grid-cols-5 gap-4 max-w-2xl mx-auto">
          <button 
            onClick={() => handleButtonClick(1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl py-6 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            1
          </button>
          <button 
            onClick={() => handleButtonClick(2)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl py-6 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            2
          </button>
          <button 
            onClick={() => handleButtonClick(3)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl py-6 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            3
          </button>
          <button 
            onClick={() => handleButtonClick(4)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl py-6 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            4
          </button>
          <button 
            onClick={() => handleButtonClick(5)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl py-6 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            5
          </button>
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
 * - Enables all child components to access buttonClicked state
 * - Provides global state management for button selection
 * 
 * @returns {JSX.Element} App component with global context provider
 */
function App() {
  return (
    <ButtonProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <main>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/human-action-selection" element={<HumanActionSelection />} />
              <Route path="/human-action-implementation" element={<HumanActionImplementation />} />
              <Route path="/ai-info-acquisition" element={<AI_info_acquisition />} />
              <Route path="/ai-info-acquisition-display" element={<AI_info_acquisition_display />} />
              <Route path="/ai-info-analysis" element={<AI_info_analysis />} />
              <Route path="/ai-info-analysis-display" element={<AI_info_analysis_display />} />
              <Route path="/dummy" element={<Dummy />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ButtonProvider>
  );
}

export default App;
