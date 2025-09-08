import React, { createContext, useContext, useState } from 'react';

const UrlCounterContext = createContext();

export const useUrlCounter = () => {
  const context = useContext(UrlCounterContext);
  if (!context) {
    console.error('UrlCounterContext is not available. Make sure the component is wrapped with UrlCounterProvider.');
    throw new Error('useUrlCounter must be used within a UrlCounterProvider');
  }
  return context;
};

export const UrlCounterProvider = ({ children }) => {
  const [urlCount, setUrlCount] = useState(1);
  const [currentUrl, setCurrentUrl] = useState('eth');
  const maxUrls = 15;

  // Debug logging
  console.log('UrlCounterProvider is rendering with:', { urlCount, currentUrl, maxUrls });

  // Array of all 15 URL types in shuffled order
  const urlTypes = [
    'phishing',
    'education',
    'cryptoScam',
    'eth',
    'socialMedia',
    'techSupportScam',
    'ambiguousLegitimate',
    'bankPhishing',
    'news',
    'malicious',
    'lotteryScam',
    'government',
    'shopping',
    'socialMediaScam',
    'ambiguousMalicious'
  ];

  const incrementUrlCount = () => {
    setUrlCount(prev => prev + 1);
  };

  const switchUrl = () => {
    setCurrentUrl(prev => {
      const currentIndex = urlTypes.indexOf(prev);
      const nextIndex = (currentIndex + 1) % urlTypes.length;
      return urlTypes[nextIndex];
    });
  };

  const resetUrlCounter = () => {
    setUrlCount(1);
    setCurrentUrl('eth');
  };

  // Reset counter when navigating to main page
  const resetForMainPage = () => {
    setUrlCount(1);
    setCurrentUrl('eth');
  };

  // Reset counter when starting a new experiment
  const resetForNewExperiment = () => {
    setUrlCount(1);
    setCurrentUrl('eth');
  };

  const value = {
    urlCount,
    currentUrl,
    maxUrls,
    incrementUrlCount,
    switchUrl,
    resetUrlCounter,
    resetForMainPage,
    resetForNewExperiment
  };

  return (
    <UrlCounterContext.Provider value={value}>
      {children}
    </UrlCounterContext.Provider>
  );
};
