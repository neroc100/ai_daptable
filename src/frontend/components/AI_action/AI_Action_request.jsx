import React, { useState } from 'react';
import { Info } from 'lucide-react';
import Success_Message from '../01 Interaction components/Success_Message';

/**
 * AI Action Request Component
 * 
 * Displays a box with ETH blue outline containing confirm and override AI action buttons.
 * Handles success states internally like button components.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onViewInfo - Callback function for view information button
 * @param {Function} props.onNext - Callback function for next URL navigation
 * @param {string} props.classification - The AI classification ('Malicious' or 'Non-Malicious')
 * @returns {JSX.Element} AI action request component
 */
function AI_Action_request({ onViewInfo, onNext, classification = 'Malicious' }) {
  // State to control success modal visibility
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState('confirm');

  /**
   * Handles confirm action
   */
  const handleConfirm = () => {
    setActionType('confirm');
    setShowModal(true);
  };

  /**
   * Handles override action
   */
  const handleOverride = () => {
    setActionType('override');
    setShowModal(true);
  };
  return (
    <>
      <div className="w-[1250px] p-6 bg-white rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col items-center space-y-4" style={{ outlineColor: 'var(--eth-blue-100)' }}>
        {/* Title */}
        <div className="flex items-center text-3xl font-semibold text-black mb-8 w-full justify-center rounded-lg p-6 outline "
        style={{ backgroundColor: 'var(--eth-blue-20)',
         outlineColor: 'var(--eth-blue-100)'
         }}
        >
         
             <Info className="w-8 h-8 mr-3" />
             AI requests to {classification === 'Malicious' ? 'block' : 'allow'} the URL
             
         </div>
         
         {/* Buttons */}
         <div className="flex flex-row space-x-4">
           <button
             onClick={handleConfirm}
             className="px-12 py-4 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg"
             style={{ backgroundColor: 'var(--eth-blue-100)' }}
           >
             Confirm AI Action
           </button>
           <button
             onClick={handleOverride}
             className="px-12 py-4 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg"
             style={{ backgroundColor: 'var(--eth-blue-100)' }}
           >
             {classification === 'Malicious' ? 'Allow URL instead' : 'Block URL instead'}
           </button>
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
           decisionType={actionType === 'confirm' 
             ? (classification === 'Malicious' ? 'block' : 'allow') 
             : (classification === 'Malicious' ? 'allow' : 'block')
           }
           actor="ai"
           onNext={() => {
             onNext();
             setShowModal(false); // Reset modal state when onNext is called
           }}
         />
       )}
     </>
   );
}

export default AI_Action_request;
