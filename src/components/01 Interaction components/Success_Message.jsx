import React from 'react';
import { Rss, ShieldCheck, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * Success Message Component
 * 
 * Displays success modal for different URL safety decisions (allow/block) and contexts (human/AI).
 * Adapts content, icons, and styling based on the decision type and actor.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onClose - Callback function to handle modal close
 * @param {string} props.decisionType - Type of decision: 'allow' or 'block'
 * @param {string} props.actor - Who made the decision: 'human' or 'ai'
 * @param {string} props.classification - AI classification ('Malicious' or 'Non-Malicious')
 * @param {string} props.actionType - Type of action taken ('confirm' or 'override')
 * @returns {JSX.Element} Success message modal component
 */
function Success_Message({ onClose, decisionType = 'allow', actor = 'human', classification = 'Malicious', actionType = 'confirm' }) {
  const navigate = useNavigate();

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
        title: `AI ${isAllow ? 'allowed' : 'blocked'} URL`,
        description: `The AI successfully ${isAllow ? 'allowed' : 'blocked'} traffic to this URL`,
        icon: isAllow ? <Rss className="w-12 h-12 text-black" /> : <ShieldCheck className="w-12 h-12 text-black" />,
        buttonText: 'Next'
      };
    }
  };

  const content = getContent();

  const handleButtonClick = () => {
    onClose();
    navigate('/');
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
      <div className="w-[760px] h-60 min-w-60 px-8 py-6 bg-gray-100 rounded-lg relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          ×
        </button>
        
        <div className="w-[810px] h-44 relative flex flex-col justify-between items-center">
          <div className="flex flex-col items-center pt-4 space-y-1">
            <div className="w-[584.39px] h-12 center text-stone-900 text-3xl font-semibold font-['Inter'] leading-4">
              {content.title}
            </div>
            
            <div className="w-[600px] h-16 center text-neutral-500 text-2xl font-normal font-['Inter'] leading-2">
              {content.description}
            </div>
          </div>
          
          <div className="flex justify-center mb-4">
            <button
              onClick={handleButtonClick}
              className="px-8 py-3 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: 'var(--eth-blue-100)' }}
            >
              {content.buttonText}
            </button>
          </div>
          
          <div data-svg-wrapper className="absolute left-0 top-0">
            {content.icon}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success_Message;
