import React, { useEffect } from 'react';
import AI_classification from '../AI_action/AI_classification';
import { useUrlCounter } from '../../context/UrlCounterContext';
import { useButtonContext } from '../../context/ConditionContext';
import { getUrlConfig } from '../../composables/getURLconfig';

/**
 * URL Presentation Component
 * 
 * Displays the URL evaluated in the security experiment.
 * Shows a sample URL with proper formatting and ETH gray outline styling.
 * Used across all experiment conditions to present the target URL.
 * 
 */
function URL_presentation({ showAIClassification = false, classification = 'Malicious' }) {
  const { currentUrl } = useUrlCounter();
  const { Condition, resetConditionsSeen, addConditionSeen } = useButtonContext();
  
  // Get current URL configuration
  const urlConfig = getUrlConfig(currentUrl);

  // Log URL presentation load timestamp to localStorage and console
  // Only set timestamp when URL changes, not on page reloads
  useEffect(() => {
    const existingTimestamp = localStorage.getItem('url_page_load_time');
    const existingUrl = localStorage.getItem('current_url_for_timestamp');
    
    // Only set new timestamp if:
    // 1. No timestamp exists, OR
    // 2. The URL has changed since the last timestamp
    if (!existingTimestamp || existingUrl !== currentUrl.toString()) {
      const pageLoadTime = Date.now();
      localStorage.setItem('url_page_load_time', pageLoadTime.toString());
      localStorage.setItem('current_url_for_timestamp', currentUrl.toString());
      // Reset view information clicked status for new URL
      localStorage.removeItem('view_information_clicked');
      // Reset conditions seen list for new URL
      resetConditionsSeen();
      // Log the initial condition for this URL
      if (Condition) {
        addConditionSeen(Condition);
      }
      console.log('URL presentation loaded at:', pageLoadTime, 'for URL:', currentUrl);
      console.log('View information clicked status reset for new URL');
      console.log('Initial condition logged for new URL:', Condition);
    } else {
      console.log('URL presentation reloaded - preserving existing timestamp for URL:', currentUrl);
    }
  }, [currentUrl]); // Re-run when URL changes
  
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
            {urlConfig.url}
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