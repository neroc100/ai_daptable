import React from 'react';
import AI_classification from '../AI_action/AI_classification';
import { ethUrlConfig, maliciousUrlConfig } from '../AI_action/Feature_boxes/featureConfig';
import { useUrlCounter } from '../../context/UrlCounterContext';

/**
 * URL Presentation Component
 * 
 * Displays the URL evaluated in the security experiment.
 * Shows a sample URL with proper formatting and ETH gray outline styling.
 * Used across all experiment conditions to present the target URL.
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.showAIClassification - Whether to show the AI classification box
 * @param {string} props.classification - The AI classification to display
 * @returns {JSX.Element} URL presentation component with input field
 */
function URL_presentation({ showAIClassification = false, classification = 'Malicious' }) {
  const { currentUrl } = useUrlCounter();
  return (
    // Main URL container with white background and light border
    <div className={`w-[1250px] ${showAIClassification ? 'h-80' : 'h-40'} min-w-80 p-6 bg-white rounded-lg outline outline-1 outline-offset-[-1px] inline-flex flex-col justify-start items-start space-y-4`} style={{ outlineColor: 'var(--eth-gray-100)' }}>
      {/* URL input section container */}
      <div className="self-stretch flex flex-col justify-start items-start">
        {/* URL label */}
        <div className="self-stretch justify-start text-stone-900 text-2xl font-semibold font-['Inter'] leading-loose mb-2">URL</div>
        
        {/* URL input field container */}
        <div className="self-stretch h-12 min-w-60 px-4 py-6 bg-white rounded-lg outline outline-1 outline-offset-[-0.50px] inline-flex justify-start items-center overflow-hidden" style={{ outlineColor: 'var(--eth-gray-100)' }}>
                  {/* URL text container */}
        <div className="w-[1170px] h-8 relative">
          {/* Sample URL text - positioned relatively for natural flow */}
          <div className="w-[1170px] justify-start text-stone-900 text-2xl font-normal font-['Inter'] leading-normal">
            {currentUrl === 'malicious' ? maliciousUrlConfig.url : ethUrlConfig.url}
          </div>
        </div>
        </div>
      </div>
      
      {/* AI Classification - Only shown when showAIClassification is true */}
      {showAIClassification && <AI_classification classification={classification} />}
    </div>
  );
}

export default URL_presentation;