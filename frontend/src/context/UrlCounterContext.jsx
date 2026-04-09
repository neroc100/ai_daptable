import React, { createContext, useContext, useState, useEffect } from 'react';
import { MAX_NUM_URL } from '../constants/config';

/**
 * URL Counter Context
 * 
 * This context manages the state for URL progression through the experiment.
 * It tracks the current URL number, the current URL type, and provides methods
 * to navigate through a predefined set of URL types.
 * 
 * The context is used throughout the application to:
 * - Track which URL the user is currently viewing (1-MAX_NUM_URL)
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
 *   - urlCount: Current URL number (1-MAX_NUM_URL)
 *   - currentUrl: Current URL type string
 *   - maxUrls: Maximum number of URLs (MAX_NUM_URL)
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
 * to all child components. It manages the progression through different
 * URL types during the experiment.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap
 * @returns {JSX.Element} Provider component with URL counter context
 */
export const UrlCounterProvider = ({ children }) => {
  /**
   * Array of all URL types in the experiment
   * 
   * These represent different categories of URLs that users will evaluate:
   * - Legitimate: academic, softwareDownload, education, personalPage, developer, support, media, news, government, openSource
   * - Malicious: typosquatting, subdomainSpoofing, httpsprotocolDeception, homoglyph, credentalHarvesting
   * 
   * The order is consistent with the URL configuration.
   */
  const urlTypes = [
    // Legitimate
    'academic',         // eprint.iacr.org — research paper PDF
    'softwareDownload',  // ftp.gnu.org — open-source archive
    'education',         // mirror.math.princeton.edu — .edu mirror
    'personalPage',      // people.freebsd.org — personal dev page
    'developer',         // pkg.go.dev — package docs
    'support',           // support.google.com — help article
    'media',             // downloads.bbc.co.uk — podcast MP3
    'news',              // developer.apple.com — release notes
    'government',        // data.cdc.gov — .gov API/CSV
    'openSource',        // media.githubusercontent.com — raw file

    // Malicious
    'typosquatting',        
    'subdomainSpoofing',   
    'httpsprotocolDeception',      
    'homoglyph',   
    'credentalHarvesting',      
  ];

  /**
   * Gets a random URL type from the urlTypes array
   * @returns {string} A random URL type
   */
  const getRandomUrlType = () => {
    return urlTypes[Math.floor(Math.random() * urlTypes.length)];
  };

  /**
   * Gets the next unused URL type
   * Maintains a list of used URLs and selects from remaining ones
   * @returns {string} The next unused URL type or any URL if all have been used
   */
  const getNextUnusedUrl = () => {
    const usedUrls = localStorage.getItem('used_urls');
    const usedUrlsArray = usedUrls ? JSON.parse(usedUrls) : [];
    
    // Find URLs that haven't been used yet
    const unusedUrls = urlTypes.filter(url => !usedUrlsArray.includes(url));
    
    // If all URLs have been used, reset the used list
    if (unusedUrls.length === 0) {
      localStorage.removeItem('used_urls');
      return urlTypes[Math.floor(Math.random() * urlTypes.length)];
    }
    
    // Return a random URL from the unused ones
    return unusedUrls[Math.floor(Math.random() * unusedUrls.length)];
  };

  /**
   * Marks a URL as used
   * @param {string} url - The URL type to mark as used
   */
  const markUrlAsUsed = (url) => {
    const usedUrls = localStorage.getItem('used_urls');
    const usedUrlsArray = usedUrls ? JSON.parse(usedUrls) : [];
    
    if (!usedUrlsArray.includes(url)) {
      usedUrlsArray.push(url);
      localStorage.setItem('used_urls', JSON.stringify(usedUrlsArray));
    }
  };

  // State for tracking current URL number (1-MAX_NUM_URL)
  const [urlCount, setUrlCount] = useState(() => {
    // Initialize from localStorage if available
    const saved = localStorage.getItem('url_count');
    return saved ? parseInt(saved) : 1;
  });
  
  // State for tracking current URL type being displayed
  const [currentUrl, setCurrentUrl] = useState(() => {
    // Initialize from localStorage if available
    const saved = localStorage.getItem('current_url');
    if (saved) {
      return saved;
    }
    // Get first unused URL for new sessions
    return getNextUnusedUrl();
  });
  
  // Maximum number of URLs in the experiment
  const maxUrls = MAX_NUM_URL;

  // Save to localStorage whenever urlCount changes
  useEffect(() => {
    localStorage.setItem('url_count', urlCount.toString());
  }, [urlCount]);

  // Save to localStorage whenever currentUrl changes
  useEffect(() => {
    localStorage.setItem('current_url', currentUrl);
  }, [currentUrl]);

  // Debug logging to track state changes
  console.log('UrlCounterProvider is rendering with:', { urlCount, currentUrl, maxUrls });

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
   * Switches to the next unused URL type
   * 
   * Marks the current URL as used and selects the next unused URL.
   * When all URLs have been shown, resets the tracking.
   */
  const switchUrl = () => {
    // Mark current URL as used
    markUrlAsUsed(currentUrl);
    // Get the next unused URL
    const nextUrl = getNextUnusedUrl();
    setCurrentUrl(nextUrl);
  };

  /**
   * Resets the URL counter to initial state
   * 
   * This function resets both the URL count to 1 and the current URL
   * type to a new unused URL. Also clears localStorage tracking.
   * 
   * @example
   * // Resets urlCount to 1 and currentUrl to next unused URL
   * resetUrlCounter();
   */
  const resetUrlCounter = () => {
    setUrlCount(1);
    setCurrentUrl(getNextUnusedUrl());
    localStorage.removeItem('url_count');
    localStorage.removeItem('current_url');
    localStorage.removeItem('used_urls');
  };


  /**
   * Context value object containing all state and methods
   * 
   * This object is passed to the context provider and made available
   * to all child components through the useUrlCounter hook.
   */
  const value = {
    urlCount,                    // Current URL number (1-MAX_NUM_URL)
    currentUrl,                  // Current URL type string
    maxUrls,                     // Maximum number of URLs (MAX_NUM_URL)
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
