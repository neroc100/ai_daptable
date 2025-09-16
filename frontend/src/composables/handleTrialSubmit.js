import { useUrlCounter } from '../context/UrlCounterContext';
import { useButtonContext } from '../context/ConditionContext';
import { useParticipantId } from '../context/ParticipantIdContext';
import { useHandleNextUrl } from './handleNextURL';
import { getUrlConfig } from './getURLconfig';

/**
 * Handle Trial Submit Composable
 * 
 * Submits trial data to backend and navigates to next URL.
 * Collects data from global contexts (participant ID, condition, current URL).
 */
export const useHandleTrialSubmit = () => {
  // Get data from global contexts
  const { currentUrl } = useUrlCounter();
  const { Condition } = useButtonContext();
  const { participantId } = useParticipantId();
  const handleNextUrl = useHandleNextUrl();

  // Submit trial data and navigate to next URL
  const handleTrialSubmit = async (rating) => {
    try {
      // Get actual URL from URL config
      const urlConfig = getUrlConfig(currentUrl);
      const actualUrl = urlConfig.url;
      
      // Collect trial data from global contexts
      const trialData = {
        participant_id: participantId,
        condition: Condition,
        mental_effort_rating: rating,
        url: actualUrl
      };

      // Send POST request to backend API
      const response = await fetch('http://localhost:8000/trials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trialData),
      });

      // Check if request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Log successful submission
      const result = await response.json();
      console.log('Trial saved successfully:', result);
      
      // Navigate to next URL
      handleNextUrl();
      
      return { success: true };
      
    } catch (error) {
      // Handle errors and return failure status
      console.error('Error saving trial:', error);
      return { 
        success: false, 
        error: 'Failed to save rating. Please try again.' 
      };
    }
  };

  return handleTrialSubmit;
};
