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
      // Get URL config data
      const urlConfig = getUrlConfig(currentUrl);
      const actualUrl = urlConfig.url;
      const trueClassification = urlConfig.malicious ? 'Malicious' : 'Non-Malicious';
      
      // Calculate reaction time from localStorage timestamps
      const pageLoadTime = localStorage.getItem('url_page_load_time');
      const buttonClickTime = localStorage.getItem('decision_button_click_time');
      const humanAction = localStorage.getItem('human_action');
      let reactionTimeMs = null;
      
      if (pageLoadTime && buttonClickTime) {
        reactionTimeMs = parseInt(buttonClickTime) - parseInt(pageLoadTime);
        console.log('Reaction time calculated:', reactionTimeMs, 'ms');
        console.log('Page load time:', pageLoadTime);
        console.log('Button click time:', buttonClickTime);
        console.log('Human action:', humanAction);
      } else {
        console.warn('Missing timestamps for reaction time calculation');
        console.log('Page load time available:', !!pageLoadTime);
        console.log('Button click time available:', !!buttonClickTime);
        console.log('Human action available:', !!humanAction);
      }

      // Determine human action result based on action and true classification
      let humanActionResult = null;
      if (humanAction) {
        switch (humanAction) {
          case 'allow':
            humanActionResult = 'URL allowed';
            break;
          case 'block':
            humanActionResult = 'URL blocked';
            break;
          case 'confirm':
            // Confirm means accepting AI's decision
            humanActionResult = trueClassification === 'Malicious' ? 'URL blocked' : 'URL allowed';
            break;
          case 'override':
            // Override means going against AI's decision
            humanActionResult = trueClassification === 'Malicious' ? 'URL allowed' : 'URL blocked';
            break;
          case 'none':
            // No human action means AI's decision stands
            humanActionResult = trueClassification === 'Malicious' ? 'URL blocked' : 'URL allowed';
            break;
          default:
            humanActionResult = 'error';
        }
        console.log('Human action result:', humanActionResult);
      }

      // Calculate accuracy based on true classification and human action result
      let accuracy = null;
      if (humanActionResult && humanActionResult !== 'error') {
        // Accuracy is 1 if the action result matches the true classification
        // Malicious URLs should be blocked, Non-Malicious URLs should be allowed
        const isCorrect = (trueClassification === 'Malicious' && humanActionResult === 'URL blocked') ||
                         (trueClassification === 'Non-Malicious' && humanActionResult === 'URL allowed');
        accuracy = isCorrect ? 1 : 0;
        console.log('Accuracy calculated:', accuracy, '(True:', trueClassification, ', Result:', humanActionResult, ')');
      }
      
      // Collect trial data from global contexts
      const trialData = {
        participant_id: participantId,
        condition: Condition,
        mental_effort_rating: rating,
        url: actualUrl,
        true_classification: trueClassification,
        reaction_time_ms: reactionTimeMs,
        human_action: humanAction,
        human_action_result: humanActionResult,
        accuracy: accuracy
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
