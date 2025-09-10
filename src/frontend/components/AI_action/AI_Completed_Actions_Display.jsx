import React from 'react';
import AI_Completed_Action_Element from './AI_Completed_Action_Element';

/**
 * AI Completed Actions Display
 * Shows AI processing stages with completed checkmarks
 *
 * @param {boolean} showAcquisition - Show acquisition stage
 * @param {boolean} showAnalysis - Show analysis stage  
 * @param {boolean} showActionSelection - Show action selection stage
 * @param {boolean} showActionImplementation - Show action implementation stage
 * @returns {JSX.Element} AI stages display component
 */
function AI_Completed_Actions_Display({ showAcquisition = true, showAnalysis = true, showActionSelection = true, showActionImplementation = false }) {
  // Dynamic height based on stage count
  const stageCount = [showAcquisition, showAnalysis, showActionSelection, showActionImplementation].filter(Boolean).length;
  const dynamicHeight = stageCount === 1 ? 'h-20' : stageCount === 2 ? 'h-32' : stageCount === 3 ? 'h-42' : 'h-52';
  
  return (
    <div className={`w-[1250px] ${dynamicHeight} px-6 py-6 bg-white rounded-lg outline outline-1 outline-offset-[ -1px] flex flex-col items-start space-y-4`} style={{ outlineColor: 'var(--eth-gray-100)' }}>
      {showAcquisition && <AI_Completed_Action_Element text="AI gathered information about the URL" />}
      {showAnalysis && <AI_Completed_Action_Element text="AI analysed the URL" />}
      {showActionSelection && <AI_Completed_Action_Element text="AI found an appropriate action" />}
      {showActionImplementation && <AI_Completed_Action_Element text="AI allowed the URL" />}
    </div>
  );
}

export default AI_Completed_Actions_Display;
