import React, { createContext, useContext, useState } from 'react';

const UrlCounterContext = createContext();

export const useUrlCounter = () => {
  const context = useContext(UrlCounterContext);
  if (!context) {
    throw new Error('useUrlCounter must be used within a UrlCounterProvider');
  }
  return context;
};

export const UrlCounterProvider = ({ children }) => {
  const [urlCount, setUrlCount] = useState(1);
  const [currentUrl, setCurrentUrl] = useState('eth');
  const maxUrls = 2;

  const incrementUrlCount = () => {
    setUrlCount(prev => prev + 1);
  };

  const switchUrl = () => {
    setCurrentUrl(prev => prev === 'eth' ? 'malicious' : 'eth');
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
