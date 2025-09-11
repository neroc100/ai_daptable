/**
 * Log Decision Composable
 * 
 * This composable provides functionality for logging user decisions to the backend API.
 * It handles posting decision data including the decision type, URL information,
 * and session context to the FastAPI backend.
 */

/**
 * Creates a logDecision function for posting decision data to the backend
 * 
 * This function sends decision data to the backend API including:
 * - Decision type (allow/block)
 * - URL information
 * - User session context
 * - Timestamp
 * 
 * @param {Object} params - Parameters object
 * @param {string} params.currentUrl - Current URL being analyzed
 * @param {string} params.classification - URL classification (Malicious/Non-Malicious)
 * @param {string} params.sessionId - Current session identifier
 * @param {string} params.userId - User identifier (optional)
 * 
 * @returns {Function} logDecision function
 * 
 * @example
 * const logDecision = useLogDecision({
 *   currentUrl,
 *   classification,
 *   sessionId,
 *   userId
 * });
 * 
 * // Log an allow decision
 * await logDecision('allow');
 */
export const useLogDecision = ({
  currentUrl,
  classification,
  sessionId,
  userId = null
}) => {
  /**
   * Logs a user decision to the backend API
   * 
   * @param {string} decisionType - The decision made ('allow' or 'block')
   * @param {Object} additionalData - Additional data to log (optional)
   * @returns {Promise<Object>} Response from the backend API
   */
  const logDecision = async (decisionType, additionalData = {}) => {
    try {
      const decisionData = {
        url: currentUrl,
        classification: classification,
        decision: decisionType,
        session_id: sessionId,
        user_id: userId,
        timestamp: new Date().toISOString(),
        ...additionalData
      };

      const response = await fetch('http://localhost:8000/decisions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(decisionData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Decision logged successfully:', result);
      return result;

    } catch (error) {
      console.error('Error logging decision:', error);
      // Don't throw the error to avoid breaking the user experience
      // The decision logging is supplementary to the main functionality
      return { error: error.message };
    }
  };

  return logDecision;
};

/**
 * Hook for logging decisions with current context
 * 
 * This hook automatically provides the current URL and classification context
 * for logging decisions. It should be used in components that need to log decisions.
 * 
 * @param {string} sessionId - Current session identifier
 * @param {string} userId - User identifier (optional)
 * @returns {Function} logDecision function with current context
 */
export const useLogDecisionWithContext = (sessionId, userId = null) => {
  // Note: This function should be used inside React components where hooks are available
  // The actual context imports should be done in the component that uses this hook
  return (currentUrl, classification) => {
    return useLogDecision({
      currentUrl,
      classification,
      sessionId,
      userId
    });
  };
};
