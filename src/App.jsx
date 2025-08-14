import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HumanActionSelection from './pages/01 Human_Ac_Sel/human_action_selection';
import HumanActionImplementation from './pages/02 Human_Ac_Impl/human_action_implementation';
import AI_info_acquisition from './pages/03 AI_Info_Acquisition/AI_info_acquisition';
import AI_info_acquisition_display from './pages/03 AI_Info_Acquisition/AI_info_acquisition_display';
import AI_info_analysis from './pages/03 AI_Info_Acquisition/AI_info_analysis';
import Dummy from './pages/dummy';

// Main page component with button click handling
function MainPage() {
  const navigate = useNavigate();

  const handleButtonClick = (buttonNumber) => {
    if (buttonNumber === 1) {
      navigate('/human-action-selection');
    } else if (buttonNumber === 2) {
      navigate('/ai-info-acquisition', { state: { buttonClicked: 2 } });
    } else if (buttonNumber === 3) {
      navigate('/ai-info-acquisition', { state: { buttonClicked: 3 } });
    } else if (buttonNumber === 4) {
      navigate('/ai-info-acquisition', { state: { buttonClicked: 4 } });
    } else if (buttonNumber === 5) {
      navigate('/ai-info-acquisition', { state: { buttonClicked: 5 } });
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

function App() {
  return (
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
            <Route path="/dummy" element={<Dummy />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
