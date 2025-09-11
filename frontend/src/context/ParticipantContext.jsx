import React, { createContext, useContext, useState } from 'react';

/**
 * Participant Context
 * 
 * Global context for managing participant ID across the application.
 * Provides participant ID state and setter function to all components.
 */
const ParticipantContext = createContext();

/**
 * Participant Provider Component
 * 
 * Wraps the application to provide participant ID context to all child components.
 * Manages the participant ID state and provides functions to update it.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Context provider component
 */
export const ParticipantProvider = ({ children }) => {
  const [participantId, setParticipantId] = useState(null);

  /**
   * Updates the participant ID
   * 
   * @param {string} id - The participant ID to set
   */
  const updateParticipantId = (id) => {
    setParticipantId(id);
  };

  const value = {
    participantId,
    updateParticipantId
  };

  return (
    <ParticipantContext.Provider value={value}>
      {children}
    </ParticipantContext.Provider>
  );
};

/**
 * Hook to use participant context
 * 
 * Provides access to participant ID and update function.
 * Must be used within a ParticipantProvider.
 * 
 * @returns {Object} Participant context value
 * @returns {string|null} returns.participantId - Current participant ID
 * @returns {Function} returns.updateParticipantId - Function to update participant ID
 */
export const useParticipant = () => {
  const context = useContext(ParticipantContext);
  
  if (!context) {
    throw new Error('useParticipant must be used within a ParticipantProvider');
  }
  
  return context;
};
