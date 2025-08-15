import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useButtonContext } from '../../context/ConditionContext';
import AI_progress_bar from '../06 AI Action Implementation/AI_progress_bar';

/**
 * AI Info Analysis Message Component
 * 
 * This component displays a message indicating that AI is currently analyzing information.
 * It includes an information icon, title, description, and a progress indicator that
 * fills up over 2 seconds before automatically navigating to the appropriate page
 * based on which button was clicked on the main page.
 * 
 * ButtonContext Integration:
 * - Uses useButtonContext() to access the globally stored Condition value
 * - Determines navigation logic based on the button number from global state
 * - No longer depends on React Router navigation state
 * 
 * Navigation logic:
 * - Button 3: Navigate to AI info analysis display page
 * - Buttons 4, 5, 6: Navigate to AI Action Selection page
 * 
 * @returns {JSX.Element} AI info analysis message component
 */
function AI_info_analysis_message() {
  const navigate = useNavigate();
  // Access the globally stored button number from ButtonContext
  const { Condition } = useButtonContext();

  const handleComplete = () => {
    // Navigate to appropriate page based on globally stored button number
    if (Condition === 3) {
      // Button 3 leads to AI info analysis display
      navigate('/ai-info-analysis-display');
    } else if (Condition === 4 || Condition === 5 || Condition === 6) {
      // Buttons 4, 5, 6 lead to AI Action Selection page
      navigate('/ai-action-selection');
    } else {
      // Default fallback to AI info analysis display
      navigate('/ai-info-analysis-display');
    }
  };

  return (
    <div className="w-[602px] h-64 relative">
      {/* Main container with white background and dark border */}
      <div className="w-[602px] h-64 min-w-60 px-8 py-6 left-0 top-0 absolute bg-white rounded-lg border-4 border-zinc-800" />
      
      {/* Information icon - positioned in top-left area */}
      <div data-svg-wrapper data-size="32" className="left-[32px] top-[31px] absolute">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Information circle icon with exclamation mark */}
          <path d="M20.0007 26.6663V19.9997M20.0007 13.333H20.0173M36.6673 19.9997C36.6673 29.2044 29.2054 36.6663 20.0007 36.6663C10.7959 36.6663 3.33398 29.2044 3.33398 19.9997C3.33398 10.7949 10.7959 3.33301 20.0007 3.33301C29.2054 3.33301 36.6673 10.7949 36.6673 19.9997Z" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* Title - "AI in progress" */}
      <div className="w-[475px] h-12 left-[95px] top-[31.12px] absolute justify-start text-stone-900 text-3xl font-semibold font-['Inter'] leading-10">
        AI in progress
      </div>
      
      {/* Description text */}
      <div className="w-[475px] h-11 left-[95px] top-[90.78px] absolute justify-start text-neutral-500 text-2xl font-normal font-['Inter'] leading-loose">
        AI is analyzing information. Please wait.
      </div>
      
      {/* Progress bar component */}
      <AI_progress_bar onComplete={handleComplete} />
    </div>
  );
}

export default AI_info_analysis_message;
