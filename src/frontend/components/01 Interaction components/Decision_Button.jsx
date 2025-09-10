import React from 'react';
import { useSuccessModal } from '../../context/SuccessModalContext';

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
          text: text || 'Confirm AI Action',
          decisionType: classification === 'Malicious' ? 'block' : 'allow',
          actor: 'ai'
        };
      case 'override':
        return {
          text: text || `Override and ${classification === 'Malicious' ? 'allow' : 'block'} instead`,
          decisionType: classification === 'Malicious' ? 'allow' : 'block',
          actor: 'human'
        };
      default:
        return {
          text: text || 'Allow URL',
          decisionType: 'allow',
          actor: 'human'
        };
    }
  };

  // Get button configuration for current type
  const config = getButtonConfig();

  // Handle button click - trigger success modal with decision data
  const handleClick = () => {
    showSuccessMessage({
      decisionType: config.decisionType,
      actor: config.actor,
      classification: classification
    });
  };

  return (
    <>
      {/* Main Decision Button - ETH blue outline styling */}
      <div 
        className={`px-12 py-4 h-16 p-3 bg-white rounded-lg outline outline-4 outline-offset-[-4px] inline-flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity ${className}`}
        style={{ outlineColor: 'var(--eth-blue-100)' }}
        onClick={handleClick}
      >
        {/* Dynamic button text based on configuration */}
        <div className="justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-normal">
          {config.text}
        </div>
      </div>
    </>
  );
}

export default Decision_Button;
