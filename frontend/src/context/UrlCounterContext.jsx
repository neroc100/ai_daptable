import React, { createContext, useContext, useState } from 'react';

/**
 * URL Counter Context
 * 
 * This context manages the state for URL progression through the experiment.
 * It tracks the current URL number, the current URL type, and provides methods
 * to navigate through a predefined set of 15 different URL types.
 * 
 * The context is used throughout the application to:
 * - Track which URL the user is currently viewing (1-15)
 * - Manage the current URL type being displayed
 * - Provide navigation methods to move between URLs
 * - Reset the counter for new experiments or when returning to main page
 */

// Create the context for URL counter state management
const UrlCounterContext = createContext();

/**
 * Custom hook to access the URL counter context
 * 
 * This hook provides a safe way to access the UrlCounterContext.
 * It includes error handling to ensure the hook is only used within
 * components that are wrapped with UrlCounterProvider.
 * 
 * @returns {Object} The URL counter context value containing:
 *   - urlCount: Current URL number (1-15)
 *   - currentUrl: Current URL type string
 *   - maxUrls: Maximum number of URLs (15)
 *   - incrementUrlCount: Function to increment URL counter
 *   - switchUrl: Function to switch to next URL type
 *   - resetUrlCounter: Function to reset counter to initial state
 * 
 * @throws {Error} If used outside of UrlCounterProvider
 */
export const useUrlCounter = () => {
  const context = useContext(UrlCounterContext);
  if (!context) {
    console.error('UrlCounterContext is not available. Make sure the component is wrapped with UrlCounterProvider.');
    throw new Error('useUrlCounter must be used within a UrlCounterProvider');
  }
  return context;
};

/**
 * URL Counter Provider Component
 * 
 * This provider component wraps the application and provides URL counter state
 * to all child components. It manages the progression through 15 different
 * URL types during the experiment.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap
 * @returns {JSX.Element} Provider component with URL counter context
 */
export const UrlCounterProvider = ({ children }) => {
  // State for tracking current URL number (1-15)
  const [urlCount, setUrlCount] = useState(1);
  
  // State for tracking current URL type being displayed
  const [currentUrl, setCurrentUrl] = useState('eth');
  
  // Maximum number of URLs in the experiment
  const maxUrls = 15;

  // Debug logging to track state changes
  console.log('UrlCounterProvider is rendering with:', { urlCount, currentUrl, maxUrls });

  /**
   * Array of all 15 URL types in the experiment
   * 
   * These represent different categories of URLs that users will evaluate:
   * - Legitimate: education, eth, socialMedia, news, government, shopping
   * - Malicious: phishing, cryptoScam, techSupportScam, bankPhishing, malicious, lotteryScam, socialMediaScam
   * - Ambiguous: ambiguousLegitimate, ambiguousMalicious
   * 
   * The order is shuffled to prevent learning effects during the experiment.
   */
  const urlTypes = [
    'phishing',           // Malicious phishing site
    'education',          // Legitimate educational site
    'cryptoScam',         // Malicious cryptocurrency scam
    'eth',                // Legitimate ETH-related site
    'socialMedia',        // Legitimate social media platform
    'techSupportScam',    // Malicious tech support scam
    'ambiguousLegitimate', // Ambiguous but legitimate site
    'bankPhishing',       // Malicious banking phishing site
    'news',               // Legitimate news website
    'malicious',          // General malicious site
    'lotteryScam',        // Malicious lottery scam
    'government',         // Legitimate government website
    'shopping',           // Legitimate e-commerce site
    'socialMediaScam',    // Malicious social media scam
    'ambiguousMalicious'  // Ambiguous but malicious site
  ];

  /**
   * Increments the URL counter to the next number
   * 
   * This function is called when the user progresses to the next URL
   * in the experiment sequence. It increases the counter by 1.
   * 
   * @example
   * // If current urlCount is 5, it becomes 6
   * incrementUrlCount();
   */
  const incrementUrlCount = () => {
    setUrlCount(prev => prev + 1);
  };

  /**
   * Switches to the next URL type in the sequence
   * 
   * This function cycles through the urlTypes array to get the next
   * URL type. When it reaches the end of the array, it wraps around
   * to the beginning (circular navigation).
   */
  const switchUrl = () => {
    setCurrentUrl(prev => {
      const currentIndex = urlTypes.indexOf(prev);
      const nextIndex = (currentIndex + 1) % urlTypes.length;
      return urlTypes[nextIndex];
    });
  };

  /**
   * Resets the URL counter to initial state
   * 
   * This function resets both the URL count to 1 and the current URL
   * type back to 'eth' (the starting URL type).
   * 
   * @example
   * // Resets urlCount to 1 and currentUrl to 'eth'
   * resetUrlCounter();
   */
  const resetUrlCounter = () => {
    setUrlCount(1);
    setCurrentUrl('eth');
  };


  /**
   * Context value object containing all state and methods
   * 
   * This object is passed to the context provider and made available
   * to all child components through the useUrlCounter hook.
   */
  const value = {
    urlCount,                    // Current URL number (1-15)
    currentUrl,                  // Current URL type string
    maxUrls,                     // Maximum number of URLs (15)
    incrementUrlCount,           // Function to increment URL counter
    switchUrl,                   // Function to switch to next URL type
    resetUrlCounter              // Function to reset counter to initial state
  };

  /**
   * Render the context provider with the value
   * 
   * This wraps all child components and provides them access to the
   * URL counter state and methods through React context.
   */
  return (
    <UrlCounterContext.Provider value={value}>
      {children}
    </UrlCounterContext.Provider>
  );
};
