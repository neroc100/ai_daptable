import React, { useState } from 'react';
import { Info } from 'lucide-react';
import Next_Button from '../01 Interaction components/Next_Button';
import Success_Message from '../01 Interaction components/Success_Message';

/**
 * AI Veto Request Component
 * 
 * Displays a box with ETH blue outline containing confirm and override AI action buttons for veto scenarios.
 * Handles success states internally like button components.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onViewInfo - Callback function for view information button
 * @param {Function} props.onNext - Callback function for next URL button
 * @param {string} props.classification - The AI classification ('Malicious' or 'Non-Malicious')
 * @returns {JSX.Element} AI veto request component
 */
function AI_veto_request({ onViewInfo, onNext, classification = 'Non-Malicious' }) {
  // State to control success modal visibility
  const [showModal, setShowModal] = useState(false);

  /**
   * Handles override action
   */
  const handleOverride = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className="w-[1250px] p-6 bg-white rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col items-center space-y-4" style={{ outlineColor: 'var(--eth-blue-100)' }}>
        {/* Title */}
        <div className="flex items-center text-3xl font-semibold text-black mb-8 w-full justify-center rounded-lg p-6 outline"
        style={{ backgroundColor: 'var(--eth-blue-20)',
         outlineColor: 'var(--eth-blue-100)'
         }}
        >
          <Info className="w-8 h-8 mr-3" />
          AI successfully {classification === 'Malicious' ? 'blocked' : 'allowed'} the URL
        </div>
        
        {/* Buttons */}
        <div className="flex flex-row space-x-4">
          <button
            onClick={handleOverride}
            className="px-12 py-4 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg"
            style={{ backgroundColor: 'var(--eth-blue-100)' }}
          >
            Override and {classification === 'Malicious' ? 'Allow' : 'Block'} URL instead
          </button>
          <Next_Button 
            className="px-12 py-4 text-lg"
            onClick={onNext}
          />
          
        </div>
        
        {/* View Information Button */}
        <button
          onClick={onViewInfo}
          className="px-6 py-2 text-black font-semibold rounded-lg transition-colors duration-200"
          style={{ backgroundColor: 'var(--eth-blue-20)' }}
        >
          View Information
        </button>
      </div>

      {/* Success message modal */}
      {showModal && (
        <Success_Message 
          decisionType={classification === 'Malicious' ? 'allow' : 'block'}
          actor="human"
          onNext={() => {
            onNext();
            setShowModal(false); // Reset modal state when onNext is called
          }}
        />
      )}
    </>
  );
}

export default AI_veto_request;
