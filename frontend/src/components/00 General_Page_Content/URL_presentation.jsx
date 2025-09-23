import React, { useEffect } from 'react';
import AI_classification from '../AI_action/AI_classification';
import { useUrlCounter } from '../../context/UrlCounterContext';
import { useButtonContext } from '../../context/ConditionContext';
import { useFreezeProbe } from '../../context/FreezeProbeContext';
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
  const { Condition, resetConditionsSeen, addConditionSeen, resetConditionTimes, startConditionTimer } = useButtonContext();
  const { startFreezeProbeTimer } = useFreezeProbe();
  
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
      // Reset initial condition logged flag for new URL
      localStorage.removeItem('initial_condition_logged_for_url');
      // Reset conditions seen list for new URL
      resetConditionsSeen();
      // Reset condition times for new URL
      resetConditionTimes();
      // Start freeze probe timer for new URL
      startFreezeProbeTimer();
      console.log('URL presentation loaded at:', pageLoadTime, 'for URL:', currentUrl);
      console.log('View information clicked status reset for new URL');
    } else {
      console.log('URL presentation reloaded - preserving existing timestamp for URL:', currentUrl);
    }
  }, [currentUrl, startFreezeProbeTimer]); // Re-run when URL changes

  // Separate effect to handle condition logging and timer start
  useEffect(() => {
    if (Condition) {
      // Check if this is a new URL by comparing with stored URL
      const existingUrl = localStorage.getItem('current_url_for_timestamp');
      const existingConditionLogged = localStorage.getItem('initial_condition_logged_for_url');
      
      // Only log initial condition if:
      // 1. This is the current URL, AND
      // 2. We haven't already logged the initial condition for this URL
      if (existingUrl === currentUrl.toString() && existingConditionLogged !== currentUrl.toString()) {
        addConditionSeen(Condition);
        // Start condition timer for the initial condition
        startConditionTimer();
        // Mark that we've logged the initial condition for this URL
        localStorage.setItem('initial_condition_logged_for_url', currentUrl.toString());
        console.log('Condition timer started for new URL');
      }
    }
  }, [Condition, currentUrl]); // Re-run when Condition or URL changes
  
  return (
    // Main URL container with white background and light border
    <div className={`w-[1250px] ${showAIClassification ? 'h-80' : 'h-40'} min-w-80 p-6 bg-white rounded-lg outline outline-1 outline-offset-[-1px] inline-flex flex-col justify-start items-start space-y-4`} style={{ outlineColor: 'var(--eth-gray-100)', backgroundColor: 'var(--box-bg)' }}>
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