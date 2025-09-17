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
 * - conditionTimes: Array of time spent on each condition for the current URL
 * - startConditionTimer: Function to start timing a condition
 * - logConditionTime: Function to log time spent and start new timer
 * - resetConditionTimes: Function to reset condition times for new URL
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
 * @returns {Object} Object containing Condition, setCondition, conditionsSeen, addConditionSeen, resetConditionsSeen, conditionTimes, startConditionTimer, logConditionTime, and resetConditionTimes
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

  // State to store time spent on each condition for current URL
  const [conditionTimes, setConditionTimes] = useState(() => {
    // Initialize from localStorage if available
    const saved = localStorage.getItem('condition_times_for_current_url');
    return saved ? JSON.parse(saved) : [];
  });

  // State to store when the current condition timer started
  const [conditionTimerStart, setConditionTimerStart] = useState(() => {
    // Initialize from localStorage if available
    const saved = localStorage.getItem('condition_timer_start');
    return saved ? parseInt(saved) : null;
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

  // Save to localStorage whenever conditionTimes changes
  useEffect(() => {
    localStorage.setItem('condition_times_for_current_url', JSON.stringify(conditionTimes));
  }, [conditionTimes]);

  // Save to localStorage whenever conditionTimerStart changes
  useEffect(() => {
    if (conditionTimerStart !== null) {
      localStorage.setItem('condition_timer_start', conditionTimerStart.toString());
    } else {
      localStorage.removeItem('condition_timer_start');
    }
  }, [conditionTimerStart]);

  // Function to add a condition to the seen list (preserves order and allows duplicates)
  const addConditionSeen = (condition) => {
    console.log('addConditionSeen called with condition:', condition);
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

  // Function to start a new condition timer
  const startConditionTimer = () => {
    const startTime = Date.now();
    setConditionTimerStart(startTime);
    console.log('Condition timer started at:', startTime);
  };

  // Function to log time spent on current condition and optionally start new timer
  const logConditionTime = (newCondition) => {
    console.log('logConditionTime called with newCondition:', newCondition, 'current timer start:', conditionTimerStart);
    
    if (conditionTimerStart !== null) {
      const timeSpent = Date.now() - conditionTimerStart;
      setConditionTimes(prev => {
        const newTimes = [...prev, timeSpent];
        console.log('Time spent on condition:', timeSpent, 'ms. Total condition times:', newTimes);
        return newTimes;
      });
    } else {
      console.log('No active timer to log - conditionTimerStart is null');
    }
    
    // Only start new timer if switching to a new condition
    if (newCondition !== null) {
      console.log('Starting new timer for condition:', newCondition);
      startConditionTimer();
    } else {
      console.log('Not starting new timer - newCondition is null');
    }
  };

  // Function to reset condition times for new URL
  const resetConditionTimes = () => {
    setConditionTimes([]);
    setConditionTimerStart(null);
    console.log('Condition times and timer reset for new URL');
  };

  // Context value object containing state and setters
  const value = {
    Condition,
    setCondition,
    conditionsSeen,
    addConditionSeen,
    resetConditionsSeen,
    conditionTimes,
    conditionTimerStart,
    startConditionTimer,
    logConditionTime,
    resetConditionTimes
  };

  return (
    <ButtonContext.Provider value={value}>
      {children}
    </ButtonContext.Provider>
  );
};

export default ButtonContext;
