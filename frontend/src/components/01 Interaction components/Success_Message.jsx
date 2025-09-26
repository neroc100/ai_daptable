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
        icon: isAllow ? <Rss className="w-8 h-8 text-black" /> : <ShieldCheck className="w-8 h-8 text-black" />,
        buttonText: 'Next'
      };
    } else {
      // Return content for AI decisions
      return {
        title: `URL successfully ${isAllow ? 'allowed' : 'blocked'}`,
        description: `The AI successfully ${isAllow ? 'allowed' : 'blocked'} traffic to this URL`,
        icon: isAllow ? <Rss className="w-8 h-8 text-black" /> : <ShieldCheck className="w-8 h-8 text-black" />,
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
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] h-full w-full">
      {/* Modal container */}
      <div className="w-[507px] h-40 px-5 py-4 bg-white rounded-lg relative flex flex-col justify-center items-center">
        {/* Status icon - positioned absolutely */}
        <div className="absolute left-8 top-4">
          {content.icon}
        </div>
        
        {/* Success message content */}
        <div className="text-center text-stone-900 text-xl font-semibold font-['Arial'] leading-tight mb-3">
          {content.title}
        </div>
        
        <div className="text-center text-neutral-500 text-sm font-normal font-['Arial'] leading-tight max-w-md mb-4">
          {content.description}
        </div>
        
        {/* Next button - automatically hides modal and navigates */}
        <Next_Button isInSuccessModal={true} />
      </div>
    </div>
  );
}

export default Success_Message;
