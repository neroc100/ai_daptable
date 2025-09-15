import { useNavigate } from 'react-router-dom';
import { useUrlCounter } from '../context/UrlCounterContext';
import { useButtonContext } from '../context/ConditionContext';

/**
 * Handle Next URL Composable
 * 
 * This composable provides functionality for handling URL navigation in the experiment.
 * It manages the transition between URLs, resets component states, and handles
 * navigation when the experiment is complete. Also navigates back to the correct
 * condition page based on the current experiment condition.
 * 
 * Uses global contexts directly for URL counter, condition, and navigation.
 */

/**
 * Creates a handleNextUrl function for managing URL progression
 * 
 * This function handles the logic for moving to the next URL in the experiment.
 * It checks if the maximum number of URLs has been reached, and either navigates
 * to the main page or progresses to the next URL. Also navigates back to the
 * correct condition page based on the current experiment condition.
 * 
 * Uses global contexts directly - no parameters needed.
 * 
 * @returns {Function} handleNextUrl function
 * 
 * @example
 * const handleNextUrl = useHandleNextUrl();
 */
export const useHandleNextUrl = () => {
  // Access global contexts directly
  const navigate = useNavigate();
  const { urlCount, maxUrls, incrementUrlCount, switchUrl } = useUrlCounter();
  const { Condition } = useButtonContext();
  /**
   * Handles progression to the next URL in the experiment
   * 
   * This function is called when the user completes an action on the current URL.
   * It either moves to the next URL (if more URLs remain) or navigates back to
   * the main page (if all URLs have been completed). When progressing to next URL,
   * it navigates back to the correct condition page based on the current condition.
   */
  const handleNextUrl = () => {
    if (urlCount >= maxUrls) {
      // Maximum URLs reached, navigate to main page
      navigate('/');
    } else {
      // More URLs to go, increment counter and switch URL
      incrementUrlCount();
      switchUrl();
      
      // Navigate back to the correct condition page based on current condition
      if (Condition === 1) {
        navigate('/manual');
      } else if (Condition === 2) {
        navigate('/info-acquisition');
      } else if (Condition === 3) {
        navigate('/info-analysis');
      } else if (Condition === 4) {
        navigate('/allow');
      } else if (Condition === 5) {
        navigate('/veto');
      } else if (Condition === 6) {
        navigate('/auto');
      } else {
        // Fallback to main page if no condition is set
        navigate('/');
      }
    }
  };

  return handleNextUrl;
};
