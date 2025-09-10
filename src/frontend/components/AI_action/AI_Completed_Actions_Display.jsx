import React from 'react';
import AI_Completed_Action_Element from './AI_Completed_Action_Element';

/**
 * AI Completed Actions Display Component
 * 
 * This component displays stages of AI processing based on props:
 * 1. AI Information Acquisition
 * 2. AI Information Analysis
 * 3. AI Action Selection
 * 4. AI Action Implementation (auto page only)
 * 
 * Each stage shows a completed checkmark icon.
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.showAcquisition - Whether to show the acquisition stage
 * @param {boolean} props.showAnalysis - Whether to show the analysis stage
 * @param {boolean} props.showActionSelection - Whether to show the action selection stage
 * @param {boolean} props.showActionImplementation - Whether to show the action implementation stage (auto page only)
 * @returns {JSX.Element} AI completed actions display component with specified stages
 */
function AI_Completed_Actions_Display({ showAcquisition = true, showAnalysis = true, showActionSelection = true, showActionImplementation = false }) {
  // Count how many stages are being shown
  const stageCount = [showAcquisition, showAnalysis, showActionSelection, showActionImplementation].filter(Boolean).length;
  
  // Calculate dynamic height based on number of stages
  const dynamicHeight = stageCount === 1 ? 'h-20' : stageCount === 2 ? 'h-32' : stageCount === 3 ? 'h-40' : 'h-48';
  
  return (
    <div className={`w-[1250px] ${dynamicHeight} px-6 py-6 bg-white rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col items-start space-y-4`} style={{ outlineColor: 'var(--eth-gray-100)' }}>
      {showAcquisition && <AI_Completed_Action_Element text="AI gathered information about the URL" />}
      {showAnalysis && <AI_Completed_Action_Element text="AI analysed the URL" />}
      {showActionSelection && <AI_Completed_Action_Element text="AI found an appropriate action" />}
      {showActionImplementation && <AI_Completed_Action_Element text="AI allowed the URL" />}
    </div>
  );
}

export default AI_Completed_Actions_Display;
