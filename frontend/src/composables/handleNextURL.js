import { useNavigate } from 'react-router-dom';
import { useUrlCounter } from '../context/UrlCounterContext';
import { useButtonContext } from '../context/ConditionContext';

/**
 * Handle Next URL Composable
 * 
 * Manages URL progression and navigation in the experiment.
 * Navigates to next URL or main page when experiment is complete.
 */
export const useHandleNextUrl = () => {
  // Get navigation and context data
  const navigate = useNavigate();
  const { urlCount, maxUrls, incrementUrlCount, switchUrl } = useUrlCounter();
  const { Condition } = useButtonContext();

  // Handle URL progression and navigation
  const handleNextUrl = () => {
    if (urlCount >= maxUrls) {
      // Experiment complete - navigate to main page
      navigate('/');
    } else {
      // More URLs remaining - progress to next URL
      incrementUrlCount();
      switchUrl();
      
      // Navigate to correct condition page based on current condition
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
        // Fallback to main page if no condition set
        navigate('/');
      }
    }
  };

  return handleNextUrl;
};
