import React from 'react';
import { Rss, ShieldCheck, Check } from 'lucide-react';
import Next_Button from './Next_Button';
import { useSuccessModal } from '../../context/SuccessModalContext';

/**
 * Success Message Component
 * 
 * Global success modal that displays feedback for URL safety decisions.
 * Manages its own visibility through global state context.
 * Automatically hides when Next button is clicked and navigates to next URL.
 * 
 * @returns {JSX.Element} Success message modal component
 */
function Success_Message() {
  // Get modal state and control functions from global context
  const { isVisible, modalContent, hideSuccessMessage } = useSuccessModal();

  // Generate dynamic content based on decision type and actor
  const getContent = () => {
    const { decisionType, actor } = modalContent;
    const isAllow = decisionType === 'allow';
    const isHuman = actor === 'human';
    
    // Return content for human decisions
    if (isHuman) {
      return {
        title: `URL successfully ${isAllow ? 'allowed' : 'blocked'}`,
        description: `You successfully ${isAllow ? 'allowed' : 'blocked'} traffic to this URL`,
        icon: isAllow ? <Rss className="w-12 h-12 text-black" /> : <ShieldCheck className="w-12 h-12 text-black" />,
        buttonText: 'Next'
      };
    } else {
      // Return content for AI decisions
      return {
        title: `URL successfully ${isAllow ? 'allowed' : 'blocked'}`,
        description: `The AI successfully ${isAllow ? 'allowed' : 'blocked'} traffic to this URL`,
        icon: isAllow ? <Rss className="w-12 h-12 text-black" /> : <ShieldCheck className="w-12 h-12 text-black" />,
        buttonText: 'Next'
      };
    }
  };

  const content = getContent();

  // Don't render modal if not visible
  if (!isVisible) {
    return null;
  }

  return (
    // Modal overlay with dark background
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
      {/* Modal container */}
      <div className="w-[760px] h-60 min-w-60 px-8 py-6 bg-gray-100 rounded-lg relative">
        <div className="w-full h-full relative flex flex-col justify-center items-center">
          {/* Success message content */}
          <div className="flex flex-col items-center space-y-4 mb-6">
            <div className="text-center text-stone-900 text-3xl font-semibold font-['Inter'] leading-tight">
              {content.title}
            </div>
            
            <div className="text-center text-neutral-500 text-2xl font-normal font-['Inter'] leading-tight max-w-lg">
              {content.description}
            </div>
          </div>
          
          {/* Next button - automatically hides modal and navigates */}
          <div className="flex justify-center">
            <Next_Button isInSuccessModal={true} />
          </div>
          
          {/* Status icon - positioned absolutely */}
          <div data-svg-wrapper className="absolute left-6 top-6">
            {content.icon}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success_Message;
