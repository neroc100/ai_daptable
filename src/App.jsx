import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HumanActionSelection from './pages/Human_Ac_Sel/human_action_selection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <main>
          <Routes>
            <Route path="/" element={
              <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-5xl font-bold text-gray-800 mb-8">
                    URL Analysis Dashboard
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Welcome to the URL Analysis Dashboard. Select your action to get started.
                  </p>
                  <Link 
                    to="/human-action-selection" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-lg"
                  >
                    Go to Human Action Selection
                  </Link>
                </div>
              </div>
            } />
            <Route path="/human-action-selection" element={<HumanActionSelection />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
