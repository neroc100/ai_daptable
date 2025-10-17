/**
 * Reset Local Storage Composable
 * 
 * Centralized composable for managing localStorage resets throughout the experiment.
 * Provides different reset methods for different stages of the experiment flow.
 */

/**
 * Complete localStorage reset - clears all experiment data
 * Used when experiment is completed and participant confirms participation
 */
export const resetAllLocalStorage = () => {
  // Clear all localStorage items related to the experiment
  localStorage.removeItem('url_page_load_time');
  localStorage.removeItem('current_url_for_timestamp');
  localStorage.removeItem('decision_button_click_time');
  localStorage.removeItem('human_action');
  localStorage.removeItem('view_information_clicked');
  localStorage.removeItem('initial_condition_logged_for_url');
  localStorage.removeItem('conditions_seen_for_current_url');
  localStorage.removeItem('condition_times_for_current_url');
  localStorage.removeItem('condition_timer_start');
  localStorage.removeItem('experiment_condition');
  localStorage.removeItem('freeze_probe_question');
  localStorage.removeItem('freeze_probe_answer');
  localStorage.removeItem('participant_id');
  
  console.log('All localStorage cleared - experiment reset complete');
};

/**
 * URL-specific data reset - clears data that should be reset for each new URL
 * Used when a new URL is presented to the user
 */
export const resetUrlSpecificData = () => {
  localStorage.removeItem('view_information_clicked');
  localStorage.removeItem('initial_condition_logged_for_url');
  localStorage.removeItem('conditions_seen_for_current_url');
  localStorage.removeItem('condition_times_for_current_url');
  localStorage.removeItem('condition_timer_start');
  
  console.log('URL-specific data cleared for new URL');
};

/**
 * Timestamp data reset - clears timing data for new trials
 * Used when starting a new trial or URL
 */
export const resetTimestampData = () => {
  localStorage.removeItem('url_page_load_time');
  localStorage.removeItem('current_url_for_timestamp');
  localStorage.removeItem('decision_button_click_time');
  localStorage.removeItem('human_action');
  
  console.log('Timestamp data cleared for new trial');
};

/**
 * Main composable hook that provides all reset methods
 * 
 * @returns {Object} Object containing all reset methods
 */
export const useResetLocalStorage = () => {
  return {
    resetAllLocalStorage,
    resetUrlSpecificData,
    resetTimestampData,
  };
};
