import React from 'react';
import AI_Completed_Action_Element from './AI_Completed_Action_Element';
import Adapt_Automation_Button from '../01 Interaction components/Adapt_Automation_Button';
import { useUrlCounter } from '../../context/UrlCounterContext';
import { getUrlClassification } from '../../composables/getURLconfig';
import { useAdaptable } from '../../context/AdaptableContext';

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
  const { currentUrl } = useUrlCounter();
  const { adaptable } = useAdaptable();
  
  // Get URL classification to determine action text
  const classification = getUrlClassification(currentUrl);
  const actionText = classification === 'Malicious' ? 'AI blocked the URL' : 'AI allowed the URL';
  
  // Dynamic height based on stage count
  const stageCount = [showAcquisition, showAnalysis, showActionSelection, showActionImplementation].filter(Boolean).length;
  const dynamicHeight = stageCount === 1 ? 'h-20' : stageCount === 2 ? 'h-32' : stageCount === 3 ? 'h-42' : 'h-52';
  
  return (
    <div className={`px-4 py-0 flex flex-col items-center space-y-3`}>
      <h1 className="w-full text-center font-bold font-['ui-sans-serif'] pb-1 mb-1">Processing Stages</h1>
      <div className="w-full flex flex-col items-center">
        <div className="w-full bg-white rounded-lg p-3 items-center p-4 mb-3">
          <div className="flex justify-center w-full">
            <div className="bg-white items-start rounded-lg font-['ui-sans-serif']  flex flex-col space-y-3 max-w-2xs w-full">
              {showAcquisition && <AI_Completed_Action_Element text="AI gathered information about the URL" />}
              {showAnalysis && <AI_Completed_Action_Element text="AI analysed the URL" />}
              {showActionSelection && <AI_Completed_Action_Element text="AI found an appropriate action" />}
              {showActionImplementation && <AI_Completed_Action_Element text={actionText} />}
            </div>
          </div>
        </div>
      </div>
      
      
      {/* Adaptable automation buttons - only show if adaptable is true */}
      {adaptable && (
       
        <div className="w-full flex flex-col gap-3">
          <Adapt_Automation_Button direction="increase" />
          <Adapt_Automation_Button direction="decrease" />
        </div>
      )}
    </div>
  );
}

export default AI_Completed_Actions_Display;
