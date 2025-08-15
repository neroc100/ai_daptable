import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useButtonContext } from '../../context/ConditionContext';
import { Loader2 } from 'lucide-react';
import AI_progress_bar from '../06 AI Action Implementation/AI_progress_bar';

/**
 * AI Info Analysis Message Component
 * 
 * This component displays a message indicating that AI is currently analyzing information.
 * It includes a loading spinner icon, title, description, and a progress indicator that
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
      
      {/* Content container with relative positioning */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        {/* Loading spinner icon - positioned in top-left area */}
        <div data-svg-wrapper data-size="32" className="absolute left-[32px] top-[31px]">
          <Loader2 className="w-10 h-10 text-stone-900 animate-spin" />
        </div>
        
        {/* Title - "AI in progress" */}
        <div className="w-[475px] h-12 ml-[95px] justify-start text-stone-900 text-3xl font-semibold font-['Inter'] leading-10">
          Analyzing information
        </div>
        
        {/* Description text */}
        <div className="w-[475px] h-11 ml-[95px] justify-start text-neutral-500 text-2xl font-normal font-['Inter'] leading-loose">
          AI is analyzing information. Please wait.
        </div>
        
        {/* Progress bar component */}
        <div className="flex justify-center mt-4">
          <AI_progress_bar onComplete={handleComplete} />
        </div>
      </div>
    </div>
  );
}

export default AI_info_analysis_message;
