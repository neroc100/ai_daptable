import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HumanActionSelection from './pages/01 Human_Ac_Sel/human_action_selection';
import HumanActionSelectionA from './pages/01 Human_Ac_Sel/human_action_selection_a';
import HumanActionImplementation from './pages/02 Human_Ac_Impl/human_action_implementation';
import AI_info_acquisition from './pages/03 AI_Info_Acquisition/AI_info_acquisition';
import AI_info_acquisition_display from './pages/03 AI_Info_Acquisition/AI_info_acquisition_display';
import AI_info_acquisition_display_a from './pages/03 AI_Info_Acquisition/AI_info_acquisition_display_a';
import AI_info_analysis from './pages/04 AI_Info_Analysis/AI_info_analysis';
import AI_info_analysis_display from './pages/04 AI_Info_Analysis/AI_info_analysis_display';
import AI_info_analysis_display_a from './pages/04 AI_Info_Analysis/AI_info_analysis_display_a';
import AI_Action_Selection from './pages/05 AI_Action_Selection/AI_Action_Selection';
import Allow_malicious from './pages/05 AI_Action_Selection/ALLOW/allow_malicious';
import Allow_malicious_a from './pages/05 AI_Action_Selection/ALLOW/allow_malicious_a';
import Allow_non_malicious from './pages/05 AI_Action_Selection/ALLOW/allow_non_malicious';
import Veto_Malicious from './pages/05 AI_Action_Selection/VETO/Veto_malicious';
import Veto_Non_Malicious from './pages/05 AI_Action_Selection/VETO/Veto_non_malicious';
import Veto_non_malicious_a from './pages/05 AI_Action_Selection/VETO/veto_non_malicious_a';
import Auto_Malicious from './pages/05 AI_Action_Selection/AUTO/Auto_malicious';
import Auto_Non_Malicious from './pages/05 AI_Action_Selection/AUTO/Auto_non_malicious';
import Auto_malicious_a from './pages/05 AI_Action_Selection/AUTO/Auto_malicious_a';
import Dummy from './pages/dummy';
import { ButtonProvider, useButtonContext } from './context/ConditionContext';


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

  /**
   * Handles button clicks and sets the button number globally
   * 
   * This function is called when any of the 8 buttons is clicked.
   * It sets the button number in the global ButtonContext and then
   * navigates to the appropriate page.
   * 
   * @param {number} buttonNumber - The number of the button that was clicked (1, 1a, 2, 2a, 3-6)
   */
  const handleButtonClick = (buttonNumber) => {
    // Set the button number globally using ButtonContext
    setCondition(buttonNumber);
    
    if (buttonNumber === 1) {
      navigate('/human-action-selection-a');
    } else if (buttonNumber === '1a') {
      navigate('/human-action-selection-a');
    } else if (buttonNumber === 2) {
      navigate('/ai-info-acquisition-display-a');
    } else if (buttonNumber === '2a') {
      navigate('/ai-info-acquisition-display-a');
    } else if (buttonNumber === 3) {
      navigate('/ai-info-analysis-display-a');
    } else if (buttonNumber === '3a') {
      navigate('/ai-info-analysis-display-a');
    } else if (buttonNumber === 4) {
      navigate('/allow-malicious-a');
    } else if (buttonNumber === 5) {
      navigate('/veto-non-malicious-a');
    } else if (buttonNumber === '4a') {
      navigate('/allow-malicious-a');
    } else if (buttonNumber === '5a') {
      navigate('/veto-non-malicious-a');
    } else if (buttonNumber === '6a') {
      navigate('/auto-malicious-a');
    } else if (buttonNumber === 6) {
      navigate('/auto-malicious-a');
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
          
          {/* "a" condition buttons row */}
          <div className="grid grid-cols-6 gap-4">
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
      <Router>
        <div className="min-h-screen bg-gray-50">
          <main>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/human-action-selection" element={<HumanActionSelection />} />
              <Route path="/human-action-selection-a" element={<HumanActionSelectionA />} />
              <Route path="/human-action-implementation" element={<HumanActionImplementation />} />
              <Route path="/ai-info-acquisition" element={<AI_info_acquisition />} />
              <Route path="/ai-info-acquisition-display" element={<AI_info_acquisition_display />} />
              <Route path="/ai-info-acquisition-display-a" element={<AI_info_acquisition_display_a />} />
              <Route path="/ai-info-analysis" element={<AI_info_analysis />} />
              <Route path="/ai-info-analysis-display" element={<AI_info_analysis_display />} />
              <Route path="/ai-info-analysis-display-a" element={<AI_info_analysis_display_a />} />
              <Route path="/ai-action-selection" element={<AI_Action_Selection />} />
              <Route path="/allow-malicious" element={<Allow_malicious />} />
              <Route path="/allow-malicious-a" element={<Allow_malicious_a />} />
              <Route path="/allow-non-malicious" element={<Allow_non_malicious />} />
              <Route path="/veto-malicious" element={<Veto_Malicious />} />
              <Route path="/veto-non-malicious" element={<Veto_Non_Malicious />} />
              <Route path="/veto-non-malicious-a" element={<Veto_non_malicious_a />} />
              <Route path="/auto-malicious" element={<Auto_Malicious />} />
              <Route path="/auto-non-malicious" element={<Auto_Non_Malicious />} />
              <Route path="/auto-malicious-a" element={<Auto_malicious_a />} />
              <Route path="/dummy" element={<Dummy />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ButtonProvider>
  );
}

export default App;
