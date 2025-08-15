import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useButtonContext } from '../../context/ConditionContext';
import { Loader2 } from 'lucide-react';
import AI_progress_bar from '../06 AI Action Implementation/AI_progress_bar';

/**
 * AI Action Selection Message Component
 * 
 * This component displays a message indicating that AI is currently finding appropriate action.
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
 * - Button 4: Randomly navigate to allow-malicious or allow-non-malicious
 * - Button 5: Randomly navigate to veto-malicious or veto-non-malicious
 * - Button 6: Navigate to dummy page
 * 
 * @returns {JSX.Element} AI action selection message component
 */
function AI_Action_Selection_message() {
  const navigate = useNavigate();
  const { Condition } = useButtonContext();

  const handleComplete = () => {
    if (Condition === 4) {
      const seed = 42;
      const hash = Condition.toString().split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
      }, seed);
      if (hash % 2 === 0) {
        navigate('/allow-malicious');
      } else {
        navigate('/allow-non-malicious');
      }
    } else if (Condition === 5) {
      const seed = 42;
      const hash = Condition.toString().split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
      }, seed);
      if (hash % 2 === 0) {
        navigate('/veto-malicious');
      } else {
        navigate('/veto-non-malicious');
      }
    } else if (Condition === 6) {
      navigate('/dummy');
    } else {
      navigate('/dummy');
    }
  };

  return (
    <div className="w-[602px] h-64 relative">
      <div className="w-[602px] h-64 min-w-60 px-8 py-6 pr-10 left-0 top-0 absolute bg-white rounded-lg border-4 border-zinc-800" />
      
      {/* Content container with relative positioning */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div data-svg-wrapper data-size="32" className="absolute left-[32px] top-[31px]">
          <Loader2 className="w-10 h-10 text-stone-900 animate-spin" />
        </div>
        <div className="w-[475px] h-12 ml-[95px] justify-start text-stone-900 text-3xl font-semibold font-['Inter'] leading-10">
          Finding appropriate action
        </div>
        <div className="w-[500px] h-11 ml-[95px] justify-start text-neutral-500 text-2xl font-normal font-['Inter'] leading-loose">
          AI is finding appropriate action. Please wait.
        </div>
        <div className="flex justify-center mt-4">
          <AI_progress_bar onComplete={handleComplete} />
        </div>
      </div>
    </div>
  );
}

export default AI_Action_Selection_message;
