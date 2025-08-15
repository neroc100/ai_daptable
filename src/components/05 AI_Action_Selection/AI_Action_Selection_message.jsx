import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useButtonContext } from '../../context/ConditionContext';
import AI_progress_bar from '../06 AI Action Implementation/AI_progress_bar';

/**
 * AI Action Selection Message Component
 * 
 * This component displays a message indicating that AI is currently finding appropriate action.
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
      <div data-svg-wrapper data-size="32" className="left-[32px] top-[31px] absolute">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.0007 26.6663V19.9997M20.0007 13.333H20.0173M36.6673 19.9997C36.6673 29.2044 29.2054 36.6663 20.0007 36.6663C10.7959 36.6663 3.33398 29.2044 3.33398 19.9997C3.33398 10.7949 10.7959 3.33301 20.0007 3.33301C29.2054 3.33301 36.6673 10.7949 36.6673 19.9997Z" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="w-[475px] h-12 left-[95px] top-[31.12px] absolute justify-start text-stone-900 text-3xl font-semibold font-['Inter'] leading-10">
        AI in progress
      </div>
      <div className="w-[500px] h-11 left-[95px] top-[90.78px] absolute justify-start text-neutral-500 text-2xl font-normal font-['Inter'] leading-loose">
        AI is finding appropriate action. Please wait.
      </div>
      <AI_progress_bar onComplete={handleComplete} />
    </div>
  );
}

export default AI_Action_Selection_message;
