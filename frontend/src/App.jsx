import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Manual from './pages/01_manual';
import Info_acquisition from './pages/02_info_acquisition';
import Info_analysis from './pages/03_info_analysis';
import Allow from './pages/04_allow';
import Veto from './pages/05_veto';
import Auto from './pages/06_auto';
import Dummy from './pages/dummy';
import MentalEffortRatingPage from './pages/mental_effort_rating';
import RedirectPage from './pages/redirect';
import ErrorBoundary from './components/ErrorBoundary';
import { ButtonProvider } from './context/ConditionContext';
import { UrlCounterProvider } from './context/UrlCounterContext';
import { SuccessModalProvider } from './context/SuccessModalContext';
import { FreezeProbeProvider } from './context/FreezeProbeContext';
import FreezeProbeModal from './components/01 Interaction components/FreezeProbeModal';
import { ParticipantIdProvider } from './context/ParticipantIdContext';
import Success_Message from './components/01 Interaction components/Success_Message';
import { useEffect } from 'react';
import {useSearchParams} from 'react-router-dom';
import { useParticipantId } from './context/ParticipantIdContext';

/**
 * Component to handle URL parameter extraction for participant ID
 * This component must be inside ParticipantIdProvider to use the context
 */
function AppContent() {
  const { setParticipantId } = useParticipantId();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const participantIdFromUrl = searchParams.get('participantId');
    if (participantIdFromUrl) {
      setParticipantId(participantIdFromUrl);
      console.log('Participant ID set from URL:', participantIdFromUrl);
    }
  }, [searchParams, setParticipantId]);

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mental-effort-rating" element={<MentalEffortRatingPage />} />
          <Route path="/redirect" element={<RedirectPage />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/info-acquisition" element={<Info_acquisition />} />
          <Route path="/info-analysis" element={<Info_analysis />} />
          <Route path="/allow" element={<Allow />} />
          <Route path="/veto" element={<Veto />} />
          <Route path="/auto" element={<Auto/>} />
          <Route path="/dummy" element={<Dummy />} />
        </Routes>
      </main>
      {/* Global Success Message Modal */}
      <Success_Message />
      {/* Global Freeze Probe Modal */}
      <FreezeProbeModal />
    </Router>
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
                <AppContent />
              </SuccessModalProvider>
            </FreezeProbeProvider>
          </UrlCounterProvider>
        </ButtonProvider>
      </ParticipantIdProvider>
    </ErrorBoundary>
  );
}

export default App;
