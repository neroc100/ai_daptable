import React, { createContext, useContext, useState } from 'react';

/**
 * Participant ID Context
 * 
 * Global context for managing participant ID across the application.
 * Provides participant ID state and setter function to all components.
 */
const ParticipantIdContext = createContext();

/**
 * Participant ID Provider Component
 * 
 * Wraps the application to provide participant ID context to all child components.
 * Manages the global participant ID state.
 */
export function ParticipantIdProvider({ children }) {
  const [participantId, setParticipantId] = useState(null);

  return (
    <ParticipantIdContext.Provider value={{ participantId, setParticipantId }}>
      {children}
    </ParticipantIdContext.Provider>
  );
}

/**
 * Hook to use Participant ID Context
 * 
 * Custom hook that provides access to participant ID context.
 * Must be used within a ParticipantIdProvider.
 * 
 * @returns {Object} Object containing participantId and setParticipantId
 */
export function useParticipantId() {
  const context = useContext(ParticipantIdContext);
  if (!context) {
    throw new Error('useParticipantId must be used within a ParticipantIdProvider');
  }
  return context;
}
