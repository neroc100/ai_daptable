import React, { useState } from 'react';
import { Rss, ShieldCheck, Check } from 'lucide-react';
import Next_Button from './Next_Button';
import { useUrlCounter } from '../../context/UrlCounterContext';
import { useNavigate } from 'react-router-dom';

/**
 * Success Message Component
 * 
 * Displays success modal for different URL safety decisions (allow/block) and contexts (human/AI).
 * Adapts content, icons, and styling based on the decision type and actor.
 * 
 * @param {Object} props - Component props
 * @param {string} props.decisionType - Type of decision: 'allow' or 'block'
 * @param {string} props.actor - Who made the decision: 'human' or 'ai'
 * @param {string} props.classification - AI classification ('Malicious' or 'Non-Malicious')
 * @param {string} props.actionType - Type of action taken ('confirm' or 'override')
 * @param {Function} props.onNext - Callback function when Next URL is clicked
 * @returns {JSX.Element} Success message modal component
 */
function Success_Message({ decisionType = 'allow', actor = 'human', classification = 'Malicious', actionType = 'confirm', onNext }) {
  const [isVisible, setIsVisible] = useState(true);
  const { urlCount, maxUrls, incrementUrlCount } = useUrlCounter();
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (urlCount >= maxUrls) {
      // Maximum URLs reached, navigate to main page
      navigate('/');
    } else if (onNext) {
      // More URLs to go, call onNext callback (which will handle incrementing)
      onNext();
    }
    setIsVisible(false);
  };

  // Determine content based on decision type, actor, classification, and action type
  const getContent = () => {
    const isAllow = decisionType === 'allow';
    const isHuman = actor === 'human';
    
    if (isHuman) {
      return {
        title: `URL successfully ${isAllow ? 'allowed' : 'blocked'}`,
        description: `You successfully ${isAllow ? 'allowed' : 'blocked'} traffic to this URL`,
        icon: isAllow ? <Rss className="w-12 h-12 text-black" /> : <ShieldCheck className="w-12 h-12 text-black" />,
        buttonText: 'Next'
      };
    } else {
      return {
        title: `URL successfully ${isAllow ? 'allowed' : 'blocked'}`,
        description: `The AI successfully ${isAllow ? 'allowed' : 'blocked'} traffic to this URL`,
        icon: isAllow ? <Rss className="w-12 h-12 text-black" /> : <ShieldCheck className="w-12 h-12 text-black" />,
        buttonText: 'Next'
      };
    }
  };

  const content = getContent();

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
      <div className="w-[760px] h-60 min-w-60 px-8 py-6 bg-gray-100 rounded-lg relative">

        
        <div className="w-full h-full relative flex flex-col justify-center items-center">
          <div className="flex flex-col items-center space-y-4 mb-6">
            <div className="text-center text-stone-900 text-3xl font-semibold font-['Inter'] leading-tight">
              {content.title}
            </div>
            
            <div className="text-center text-neutral-500 text-2xl font-normal font-['Inter'] leading-tight max-w-lg">
              {content.description}
            </div>
          </div>
          
          <div className="flex justify-center">
            <Next_Button onClick={handleNextClick} />
          </div>
          
          <div data-svg-wrapper className="absolute left-6 top-6">
            {content.icon}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success_Message;
