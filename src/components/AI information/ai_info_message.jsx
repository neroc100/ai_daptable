import React from 'react';
import AI_info_Acq_box from '../03 AI_Info_Acquisition/AI_info_Acq_box';
import AI_info_ana_box from '../04 AI_Info_Analysis/AI_info_ana_box';
import AI_Action_Selection_box from '../05 AI_Action_Selection/AI_Action_Selection_box';

/**
 * AI Info Message Component
 * 
 * This component creates a popup modal that displays all three AI information boxes:
 * - AI Information Acquisition Box
 * - AI Information Analysis Box  
 * - AI Action Selection Box
 * 
 * The popup includes a semi-transparent overlay and a close button.
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether the popup is visible
 * @param {Function} props.onClose - Function to call when closing the popup
 * @param {boolean} props.isLoading - Whether the AI acquisition is loading
 * @param {boolean} props.isAnalysisLoading - Whether the AI analysis is loading
 * @param {boolean} props.isActionSelectionLoading - Whether the AI action selection is loading
 * @returns {JSX.Element} Popup modal with AI information boxes
 */
function AI_info_message({ 
  isOpen = false, 
  onClose, 
  isLoading = false, 
  isAnalysisLoading = false, 
  isActionSelectionLoading = false 
}) {
  console.log('AI_info_message render - isOpen:', isOpen);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
      {/* Modal container */}
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header with close button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-black">AI Information</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* AI Information Boxes */}
        <div className="space-y-6">
          {/* AI Information Acquisition Box */}
          <div>
            <AI_info_Acq_box isLoading={isLoading} />
          </div>

          {/* AI Information Analysis Box */}
          <div>
            <AI_info_ana_box isLoading={isAnalysisLoading} showDisplay={false} />
          </div>

          {/* AI Action Selection Box */}
          <div>
            <AI_Action_Selection_box isLoading={isActionSelectionLoading} showDisplay={false} />
          </div>
        </div>

        {/* Close button at bottom */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded-lg transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default AI_info_message;
