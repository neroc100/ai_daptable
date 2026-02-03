import React, { useEffect } from 'react';
import { useUrlCounter } from '../../context/UrlCounterContext';
import { useButtonContext } from '../../context/ConditionContext';
import { getUrlConfig } from '../../composables/getURLconfig';
import { useResetLocalStorage } from '../../composables/resetLocalStorages';

/**
 * URL Presentation Component
 * 
 * Displays the URL evaluated in the security experiment.
 * Shows a sample URL with proper formatting and ETH gray outline styling.
 * Used across all experiment conditions to present the target URL.
 * 
 */
function URL_presentation({ showAIClassification = false, classification = 'Malicious', alreadyExecuted = false }) {
  const { currentUrl } = useUrlCounter();
  const { Condition, resetConditionsSeen, addConditionSeen, resetConditionTimes, startConditionTimer } = useButtonContext();
  const { resetUrlSpecificData } = useResetLocalStorage();
  
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
      // Reset URL-specific data for new URL
      resetUrlSpecificData();
      // Reset conditions seen list for new URL
      resetConditionsSeen();
      // Reset condition times for new URL
      resetConditionTimes();
      console.log('URL presentation loaded at:', pageLoadTime, 'for URL:', currentUrl);
    } else {
      console.log('URL presentation reloaded - preserving existing timestamp for URL:', currentUrl);
    }
  }, [currentUrl]); // Re-run when URL changes

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
    <>
      {/* URL input section container */}
      <div className="flex flex-col justify-start items-center w-[90%]">
        {/* URL label */}
        <div className="w-full text-center text-xl font-bold font-['ui-sans-serif'] pb-3">URL</div>
        
        {/* URL input field container */}
        <div className="w-full px-6 py-4 bg-white rounded-2xl border-2 flex justify-center items-center shadow-sm" style={{ borderColor: '#9CA3AF' }}>
        {/* URL text container */}
          {/* Sample URL text - positioned relatively for natural flow */}
          <div className="justify-center text-black text-lg font-semibold font-['ui-sans-serif'] leading-normal">
            {urlConfig.url}
          </div>
        </div>
      </div>
      
      {/* Horizontal separator */}
      <div className="w-[90%] h-px bg-gray-400 mb-4 mt-4"></div>
    </>
  );
}

export default URL_presentation;