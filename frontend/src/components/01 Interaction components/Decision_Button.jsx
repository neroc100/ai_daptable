import React from 'react';
import { useSuccessModal } from '../../context/SuccessModalContext';
import { useButtonContext } from '../../context/ConditionContext';
import { useFreezeProbe } from '../../context/FreezeProbeContext';
// import { useLogDecision } from '../../composables/logDecision';
// import { useUrlCounter } from '../../context/UrlCounterContext';
// import { useCondition } from '../../context/ConditionContext';

/**
 * Decision Button Component
 * 
 * Universal button component for all URL safety decisions across the application.
 * Handles allow, block, confirm, and override actions with dynamic text and behavior.
 * Uses consistent ETH blue outline styling and triggers global success modal.
 * 
 * @param {Object} props - Component props
 * @param {string} props.type - Button type ('allow', 'block', 'confirm', 'override')
 * @param {string} props.classification - AI classification ('Malicious' or 'Non-Malicious')
 * @param {string} props.className - Additional CSS classes (optional)
 * @param {string} props.text - Custom button text (optional)
 * @returns {JSX.Element} Decision button component
 */
function Decision_Button({ 
  type = 'allow', 
  classification = 'Malicious', 
  className = "", 
  text = null 
}) {
  // Get success modal control function from global context
  const { showSuccessMessage } = useSuccessModal();
  
  // Get condition context for logging time spent on current condition
  const { logConditionTime } = useButtonContext();
  
  // Get freeze probe context for immediate trigger on button click
  const { triggerProbeOnClick } = useFreezeProbe();
  
  // Get current context for logging (commented out for now)
  // const { currentUrl } = useUrlCounter();
  // const { classification } = useCondition();
  
  // Get decision logging function with current context (commented out for now)
  // const logDecision = useLogDecision({
  //   currentUrl,
  //   classification,
  //   sessionId: 'session_001',
  //   userId: 'user_001'
  // });

  // Generate button configuration based on type and classification
  const getButtonConfig = () => {
    switch (type) {
      case 'allow':
        return {
          text: text || 'Allow URL',
          decisionType: 'allow',
          actor: 'human'
        };
      case 'block':
        return {
          text: text || 'Block URL',
          decisionType: 'block',
          actor: 'human'
        };
      case 'confirm':
        return {
          text: text || `Confirm - ${classification === 'Malicious' ? 'Block' : 'Allow'} URL`,
          decisionType: classification === 'Malicious' ? 'block' : 'allow',
          actor: 'ai'
        };
      case 'override':
        return {
          text: text || `Override - ${classification === 'Malicious' ? 'Allow' : 'Block'} URL`,
          decisionType: classification === 'Malicious' ? 'allow' : 'block',
          actor: 'human'
        };
      default:
        return {
          text: text || 'error: no button text in decision button',
          decisionType: 'error: no button type in decision button',
          actor: 'error: no button actor in decision button'
        };
    }
  };

  // Get button configuration for current type
  const config = getButtonConfig();

  // Handle button click - trigger success modal and log human action
  const handleClick = async () => {
    // Check if we should trigger freeze probe immediately on button click
    triggerProbeOnClick();
    
    // Log time spent on current condition before making decision
    logConditionTime(null); // Pass null since we're not switching to a new condition
    
    // Save button click timestamp to localStorage and log to console
    const buttonClickTime = Date.now();
    localStorage.setItem('decision_button_click_time', buttonClickTime.toString());
    console.log('Decision button clicked at:', buttonClickTime);
    
    // Log human action type to localStorage based on button type
    let humanAction = '';
    switch (type) {
      case 'allow':
        humanAction = 'allow';
        break;
      case 'block':
        humanAction = 'block';
        break;
      case 'confirm':
        humanAction = 'confirm';
        break;
      case 'override':
        humanAction = 'override';
        break;
      default:
        humanAction = 'error';
    }
    localStorage.setItem('human_action', humanAction);
    console.log('Human action logged:', humanAction);
    
    // Show success modal with decision data
    showSuccessMessage({
      decisionType: config.decisionType,
      actor: config.actor,
      classification: classification
    });
  };

  // Generate text styling for override buttons
  const getTextStyling = () => {
    if (type === 'override') {
      const actionText = classification === 'Malicious' ? 'Allow' : 'Block';
      const actionColor = actionText === 'Allow' ? 'var(--eth-green-100)' : 'var(--eth-red-100)';
      
      return (
        <div className="justify-start text-2xl font-bold font-['Inter'] leading-normal">
          <span className="text-zinc-800">Override - </span>
          <span style={{ color: actionColor }}>{actionText} URL</span>
        </div>
      );
    }

    if (type === 'confirm') {
      const actionText = classification === 'Malicious' ? 'Block' : 'Allow';
      const actionColor = actionText === 'Allow' ? 'var(--eth-green-100)' : 'var(--eth-red-100)';
      
      return (
        <div className="justify-start text-2xl font-bold font-['Inter'] leading-normal">
          <span className="text-zinc-800">Confirm - </span>
          <span style={{ color: actionColor }}>{actionText} URL</span>
        </div>
      );
    }
    
    // Default styling for non-override buttons
    return (
      <div className="justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-normal">
        {config.text}
      </div>
    );
  };

  return (
    <>
      {/* Main Decision Button - ETH blue outline styling */}
      <div 
        className={`px-12 py-4 h-16 p-3 rounded-4xl outline outline-4 outline-offset-[-4px] inline-flex justify-center items-center gap-2 overflow-hidden cursor-pointer shadow-xl hover:opacity-85 hover:shadow-md transition-all duration-200 ${className}`}
        style={{ outlineColor: 'var( --decision-button-bg)',
          backgroundColor: 'var( --decision-button-bg)'
         }}
        onClick={handleClick}
      >
        {/* Dynamic button text based on configuration */}
        {getTextStyling()}
      </div>
    </>
  );
}

export default Decision_Button;
