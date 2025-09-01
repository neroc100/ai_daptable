import React from 'react';
import AI_Completed_Action_Element from './AI_Completed_Action_Element';
import { LOAD_TIME_AI_INFO_ACQ, LOAD_TIME_AI_INFO_ANA, LOAD_TIME_AI_ACTION_SELECTION } from '../../constants/aiLoadingTimes';

/**
 * AI Completed Actions Display Component
 * 
 * This component displays stages of AI processing based on props:
 * 1. AI Information Acquisition (uses LOAD_TIME_AI_INFO_ACQ global constant)
 * 2. AI Information Analysis (uses LOAD_TIME_AI_INFO_ANA global constant)
 * 3. AI Action Selection (uses LOAD_TIME_AI_ACTION_SELECTION global constant)
 * 
 * Each stage shows a loading icon that transitions to a checkmark after completion.
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.showAcquisition - Whether to show the acquisition stage
 * @param {boolean} props.showAnalysis - Whether to show the analysis stage
 * @param {boolean} props.showActionSelection - Whether to show the action selection stage
 * @returns {JSX.Element} AI completed actions display component with specified stages
 */
function AI_Completed_Actions_Display({ showAcquisition = true, showAnalysis = true, showActionSelection = true }) {
  // Count how many stages are being shown
  const stageCount = [showAcquisition, showAnalysis, showActionSelection].filter(Boolean).length;
  
  // Calculate dynamic height based on number of stages
  const dynamicHeight = stageCount === 1 ? 'h-20' : stageCount === 2 ? 'h-32' : 'h-40';
  
  return (
    <div className={`w-[1250px] ${dynamicHeight} p-6 bg-white rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col items-start space-y-4`} style={{ outlineColor: 'var(--eth-gray-100)' }}>
      {showAcquisition && <AI_Completed_Action_Element loadingTime={LOAD_TIME_AI_INFO_ACQ} text="AI gathered information about the URL" />}
      {showAnalysis && <AI_Completed_Action_Element loadingTime={LOAD_TIME_AI_INFO_ANA} text="AI analysed the URL" />}
      {showActionSelection && <AI_Completed_Action_Element loadingTime={LOAD_TIME_AI_ACTION_SELECTION} text="AI found an appropriate action" />}
    </div>
  );
}

export default AI_Completed_Actions_Display;
