import React from 'react';
import { useNavigate } from 'react-router-dom';
import { STARTING_CONDITION, PARTICIPANT_ID } from '../constants/config';
import { useParticipantId } from '../context/ParticipantIdContext';
import { useButtonContext } from '../context/ConditionContext';

/**
 * Landing Page Component
 * 
 * Welcome page for the URL Analysis Experiment.
 * Provides an introduction to the experiment and a start button.
 * 
 * Features:
 * - Welcome message explaining the experiment
 * - Clear instructions for participants
 * - Start experiment button that navigates to condition selection
 * - Professional styling consistent with the experiment design
 */
function LandingPage() {
  const navigate = useNavigate();
  const { setParticipantId } = useParticipantId();
  const { setCondition } = useButtonContext();

  /**
   * Handles the start experiment button click
   * Sets the participant ID and condition from config, then navigates to the appropriate experiment page
   */
  const handleStartExperiment = () => {
    // Set participant ID from config
    setParticipantId(PARTICIPANT_ID.toString());
    
    // Set condition from config
    setCondition(STARTING_CONDITION);
    
    // Navigate directly to the appropriate experiment page based on starting condition
    if (STARTING_CONDITION === 1) {
      navigate('/manual');
    } else if (STARTING_CONDITION === 2) {
      navigate('/info-acquisition');
    } else if (STARTING_CONDITION === 3) {
      navigate('/info-analysis');
    } else if (STARTING_CONDITION === 4) {
      navigate('/allow');
    } else if (STARTING_CONDITION === 5) {
      navigate('/veto');
    } else if (STARTING_CONDITION === 6) {
      navigate('/auto');
    } else {
      // Fallback to manual if invalid condition
      navigate('/manual');
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center">
      <div className="text-center w-full max-w-4xl px-4">
        {/* Main heading */}
        <h1 className="text-4xl font-bold text-black mb-6">
          Welcome to the URL Analysis Experiment
        </h1>
        
      
        
        {/* Experiment description */}
        <div className="rounded-lg p-8 mb-8 max-w-3xl mx-auto" style={{ backgroundColor: 'var(--eth-blue-10)' }}>
          <h2 className="text-2xl font-semibold text-black mb-4">
            About This Experiment
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            In this experiment, you will be asked to evaluate URLs for potential security threats. 
            You'll work with different types of AI assistance to help you make decisions about 
            whether URLs are safe or potentially malicious.
          </p>
        
        </div>
        
  
        
        {/* Start button */}
        <div 
          className="px-12 py-4 h-16 p-3 rounded-4xl outline outline-4 outline-offset-[-4px] inline-flex justify-center items-center gap-2 overflow-hidden cursor-pointer shadow-xl hover:opacity-85 hover:shadow-md transition-all duration-200"
          style={{ 
            outlineColor: 'var(--eth-blue-100)',
            backgroundColor: 'var(--eth-blue-100)'
          }}
          onClick={handleStartExperiment}
        >
          {/* Button text with ETH styling */}
          <div className="justify-start text-white text-2xl font-bold font-['Arial'] leading-normal">
            Start Experiment
          </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default LandingPage;
