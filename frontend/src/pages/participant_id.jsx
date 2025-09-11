import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParticipant } from '../context/ParticipantContext';

/**
 * Participant ID Page
 * 
 * Page for collecting and setting the participant ID at the start of the experiment.
 * Contains a text input form to submit participant ID and save it to global context.
 * Navigates to the main experiment flow after successful submission.
 */
function ParticipantIdPage() {
  const [inputId, setInputId] = useState('');
  const [error, setError] = useState('');
  const { updateParticipantId } = useParticipant();
  const navigate = useNavigate();

  /**
   * Handles form submission
   * 
   * Validates the participant ID input and saves it to global context.
   * Navigates to the main page after successful submission.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input
    if (!inputId.trim()) {
      setError('Please enter a participant ID');
      return;
    }

    if (inputId.trim().length < 3) {
      setError('Participant ID must be at least 3 characters long');
      return;
    }

    // Clear any previous errors
    setError('');
    
    // Save to global context
    updateParticipantId(inputId.trim());
    
    // Navigate to main page
    navigate('/');
  };

  /**
   * Handles input change
   * 
   * Updates the input state and clears any error messages.
   */
  const handleInputChange = (e) => {
    setInputId(e.target.value);
    if (error) {
      setError('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Participant ID
          </h1>
          <p className="text-gray-600">
            Please enter your participant ID to begin the experiment
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="participantId" className="block text-sm font-medium text-gray-700 mb-2">
              Participant ID
            </label>
            <input
              id="participantId"
              type="text"
              value={inputId}
              onChange={handleInputChange}
              placeholder="Enter your participant ID"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              autoFocus
            />
            {error && (
              <p className="mt-2 text-sm text-red-600">
                {error}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Start Experiment
          </button>
        </form>

        {/* Instructions */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Your participant ID will be used to track your responses throughout the experiment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ParticipantIdPage;
