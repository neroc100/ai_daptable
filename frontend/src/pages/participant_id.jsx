import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParticipantId } from '../context/ParticipantIdContext';
import { useButtonContext } from '../context/ConditionContext';


/**
 * Participant ID Page
 * 
 * Page for collecting and storing participant ID before proceeding to experiment conditions.
 * Allows users to enter their participant ID which is saved to global context.
 * After submission, navigates to the appropriate experiment page based on the selected condition.
 */
function ParticipantIdPage() {
  const [participantId, setParticipantId] = useState('');
  const [error, setError] = useState('');
  const { setParticipantId: setGlobalParticipantId } = useParticipantId();
  const { Condition } = useButtonContext();
  const navigate = useNavigate();

  // Handle form submission with conditional routing
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!participantId.trim()) {
      setError('Please enter a participant ID');
      return;
    }

    // Save to global context
    setGlobalParticipantId(participantId.trim());
    
    // Navigate based on the condition set by the button click
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
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* Form container with shadow - centered */}
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input field */}
            <div>
               {/* Page title */}
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-900 m-4">
            Participant ID
          </h1>
        </div>


              <label htmlFor="participantId" className="block text-xs font-medium mb-2" style={{ color: 'var(--eth-gray-100)' }}>
                Enter your Participant ID:
              </label>
              <input
                type="text"
                id="participantId"
                value={participantId}
                onChange={(e) => {
                  setParticipantId(e.target.value);
                  setError(''); // Clear error when user types
                }}
                className="w-full text-xs px-3 py-2 border rounded-4xl shadow-sm focus:outline-none focus:ring-2 transition-colors"
                style={{ 
                  borderColor: 'var(--eth-gray-40)',
                  focusRingColor: 'var(--eth-blue-100)',
                  focusBorderColor: 'var(--eth-blue-100)'
                }}
                placeholder=" current time + first letter of your name"
                autoFocus
              />
            </div>

            {/* Error message */}
            {error && (
              <div className="text-red-600 text-xs">
                {error}
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              className="w-full text-xs text-white py-2 px-4 rounded-4xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"
              style={{ 
                backgroundColor: 'var(--eth-blue-100)',
                focusRingColor: 'var(--eth-blue-100)'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--eth-blue-80)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--eth-blue-100)'}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ParticipantIdPage;
