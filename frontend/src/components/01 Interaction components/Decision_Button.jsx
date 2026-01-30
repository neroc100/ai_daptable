import React from 'react';
import { useSuccessModal } from '../../context/SuccessModalContext';
import { useButtonContext } from '../../context/ConditionContext';

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
          text: text || `Confirm ${classification === 'Malicious' ? 'Block' : 'Allow'} URL`,
          decisionType: classification === 'Malicious' ? 'block' : 'allow',
          actor: 'ai'
        };
      case 'override':
        return {
          text: text || `Override to ${classification === 'Malicious' ? 'Allow' : 'Block'} URL`,
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

  // Generate text styling for all button types
  const getTextStyling = () => {
    if (type === 'override') {
      const actionText = classification === 'Malicious' ? 'Allow' : 'Block';
      const actionColor = actionText === 'Allow' ? '#B8E6B8' : '#E8B4C8';
      
      return (
        <div className="justify-start text-sm font-bold font-['ui-sans-serif']  leading-normal">
          <span className="text-gray-200">Override to </span>
          <span style={{ color: actionColor }}>{actionText} URL</span>
        </div>
      );
    }

    if (type === 'confirm') {
      const actionText = classification === 'Malicious' ? 'Block' : 'Allow';
      const actionColor = actionText === 'Allow' ? '#B8E6B8' : '#E8B4C8';
      
      return (
      <div className="justify-start text-sm font-bold font-['ui-sans-serif']  leading-normal">
        <span className="text-gray-200">Confirm </span>
        <span style={{ color: actionColor }}>{actionText} URL</span>
      </div>
      );
    }

    if (type === 'allow') {
      return (
        <div className="justify-start text-sm font-bold font-['ui-sans-serif'] leading-normal" style={{ color: '#B8E6B8' }}>
          {config.text}
        </div>
      );
    }

    if (type === 'block') {
      return (
        <div className="justify-start text-sm font-bold font-['ui-sans-serif'] leading-normal" style={{ color: '#E8B4C8' }}>
          {config.text}
        </div>
      );
    }
    
    // Default styling for any other cases
    return (
      <div className="justify-start text-white text-sm font-bold font-['ui-sans-serif']  leading-normal">
        {config.text}
      </div>
    );
  };

  return (
    <>
      {/* Main Decision Button - Dark blue gradient background */}
      <div 
        className={`px-6 py-2 rounded-2xl inline-flex justify-center items-center gap-1 overflow-hidden cursor-pointer shadow-lg hover:shadow-xl border border-gray-400 transition-all duration-200 bg-gradient-to-r from-gray-800 to-gray-700 ${className}`}
        onClick={handleClick}
      >
        {/* Dynamic button text based on configuration */}
        <div className="flex items-center space-x-1">
          {getTextStyling()}
        </div>
      </div>
    </>
  );
}

export default Decision_Button;
