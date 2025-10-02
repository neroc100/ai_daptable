import React, { createContext, useContext, useState, useEffect } from 'react';

/**
 * Adaptable Context
 * 
 * Global context for managing adaptable setting across the application.
 * Controls whether the experiment allows participants to adapt automation levels.
 * When true, shows increase/decrease automation buttons.
 */
const AdaptableContext = createContext();

/**
 * Adaptable Provider Component
 * 
 * Wraps the application to provide adaptable context to all child components.
 * Manages the global adaptable state.
 */
export function AdaptableProvider({ children }) {
  const [adaptable, setAdaptable] = useState(() => {
    // Initialize from localStorage if available
    return localStorage.getItem('adaptable') === 'true' || false;
  });

  // Save to localStorage whenever adaptable changes
  useEffect(() => {
    localStorage.setItem('adaptable', adaptable.toString());
  }, [adaptable]);

  return (
    <AdaptableContext.Provider value={{ adaptable, setAdaptable }}>
      {children}
    </AdaptableContext.Provider>
  );
}

/**
 * Hook to use Adaptable Context
 * 
 * Custom hook that provides access to adaptable context.
 * Must be used within an AdaptableProvider.
 * 
 * @returns {Object} Object containing adaptable and setAdaptable
 */
export function useAdaptable() {
  const context = useContext(AdaptableContext);
  if (!context) {
    throw new Error('useAdaptable must be used within an AdaptableProvider');
  }
  return context;
}
