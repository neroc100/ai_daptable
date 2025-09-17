import React, { createContext, useContext, useState, useEffect } from 'react';

/**
 * Button Context - Global State Management
 * 
 * This context provides global access to the button number that was clicked on the main page.
 * It allows any component in the application to access which button (1-6) was selected
 * without needing to pass the information through props or navigation state.
 * 
 * Usage:
 * - Main page sets the button number when a button is clicked
 * - Message components (AI_in_progress_message, AI_info_analysis_message) access the button number
 * - Navigation logic is based on the globally stored button number
 * - Tracks conditions seen for each URL
 * 
 * State:
 * - Condition: The number of the button that was clicked (1-6) or null if no button clicked
 * - setCondition: Function to update the button number
 * - conditionsSeen: Array of conditions seen for the current URL
 * - addConditionSeen: Function to add a condition to the seen list
 * - resetConditionsSeen: Function to reset the conditions seen list
 * 
 */

// Create the context
const ButtonContext = createContext();

/**
 * Custom hook to use the button context
 * 
 * This hook provides access to the button context and includes error handling
 * to ensure it's only used within a ButtonProvider.
 * 
 * @returns {Object} Object containing Condition, setCondition, conditionsSeen, addConditionSeen, and resetConditionsSeen
 * @throws {Error} If used outside of ButtonProvider
 */
export const useButtonContext = () => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error('useButtonContext must be used within a ButtonProvider');
  }
  return context;
};

/**
 * ButtonProvider Component
 * 
 * This provider component wraps the application and provides global access
 * to the button state. It manages the Condition state and provides
 * the setter function to update it.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap
 * @returns {JSX.Element} Provider component with context value
 */
export const ButtonProvider = ({ children }) => {
  // State to store which button was clicked (1-6) or null
  const [Condition, setCondition] = useState(() => {
    // Initialize from localStorage if available
    const saved = localStorage.getItem('experiment_condition');
    return saved ? parseInt(saved) : null;
  });

  // State to store conditions seen for current URL
  const [conditionsSeen, setConditionsSeen] = useState(() => {
    // Initialize from localStorage if available
    const saved = localStorage.getItem('conditions_seen_for_current_url');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever Condition changes
  useEffect(() => {
    if (Condition !== null) {
      localStorage.setItem('experiment_condition', Condition.toString());
    } else {
      localStorage.removeItem('experiment_condition');
    }
  }, [Condition]);

  // Save to localStorage whenever conditionsSeen changes
  useEffect(() => {
    localStorage.setItem('conditions_seen_for_current_url', JSON.stringify(conditionsSeen));
  }, [conditionsSeen]);

  // Function to add a condition to the seen list (preserves order and allows duplicates)
  const addConditionSeen = (condition) => {
    setConditionsSeen(prev => {
      const newList = [...prev, condition];
      console.log('Conditions seen for current URL (ordered):', newList);
      return newList;
    });
  };

  // Function to reset the conditions seen list
  const resetConditionsSeen = () => {
    setConditionsSeen([]);
    console.log('Conditions seen list reset for new URL');
  };

  // Context value object containing state and setters
  const value = {
    Condition,
    setCondition,
    conditionsSeen,
    addConditionSeen,
    resetConditionsSeen
  };

  return (
    <ButtonContext.Provider value={value}>
      {children}
    </ButtonContext.Provider>
  );
};

export default ButtonContext;
