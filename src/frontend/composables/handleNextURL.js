/**
 * Handle Next URL Composable
 * 
 * This composable provides functionality for handling URL navigation in the experiment.
 * It manages the transition between URLs, resets component states, and handles
 * navigation when the experiment is complete.
 */

/**
 * Creates a handleNextUrl function for managing URL progression
 * 
 * This function handles the logic for moving to the next URL in the experiment.
 * It checks if the maximum number of URLs has been reached, and either navigates
 * to the main page or progresses to the next URL while resetting component states.
 * 
 * @param {Object} params - Parameters object
 * @param {number} params.urlCount - Current URL count
 * @param {number} params.maxUrls - Maximum number of URLs in experiment
 * @param {Function} params.incrementUrlCount - Function to increment URL counter
 * @param {Function} params.switchUrl - Function to switch to next URL type
 * @param {Function} params.navigate - React Router navigate function
 * @param {Function} params.setShowSuccess - Function to set success state
 * @param {Function} params.setShowReview - Function to set review state
 * @param {Function} params.setIsLoading - Function to set loading state
 * @param {Function} params.setIsAnalysisLoading - Function to set analysis loading state
 * @param {Function} params.setIsActionSelectionLoading - Function to set action selection loading state
 * 
 * @returns {Function} handleNextUrl function
 * 
 * @example
 * const handleNextUrl = useHandleNextUrl({
 *   urlCount,
 *   maxUrls,
 *   incrementUrlCount,
 *   switchUrl,
 *   navigate,
 *   setShowSuccess,
 *   setShowReview,
 *   setIsLoading,
 *   setIsAnalysisLoading,
 *   setIsActionSelectionLoading
 * });
 */
export const useHandleNextUrl = ({
  urlCount,
  maxUrls,
  incrementUrlCount,
  switchUrl,
  navigate,
  setShowSuccess,
  setShowReview,
  setIsLoading,
  setIsAnalysisLoading,
  setIsActionSelectionLoading
}) => {
  /**
   * Handles progression to the next URL in the experiment
   * 
   * This function is called when the user completes an action on the current URL.
   * It either moves to the next URL (if more URLs remain) or navigates back to
   * the main page (if all URLs have been completed).
   * 
   * The function also resets all component states to prepare for the next URL.
   */
  const handleNextUrl = () => {
    if (urlCount >= maxUrls) {
      // Maximum URLs reached, navigate to main page
      navigate('/');
    } else {
      // More URLs to go, increment counter and switch URL
      incrementUrlCount();
      switchUrl();
      // Reset success and review states for new URL
      setShowSuccess(false);
      setShowReview(false);
      // Reset timers for new URL
      setIsLoading(true);
      setIsAnalysisLoading(true);
      setIsActionSelectionLoading(true);
      // Classification will be updated automatically by useEffect when currentUrl changes
    }
  };

  return handleNextUrl;
};
