import React from 'react';
import AI_Completed_Action_Element from './AI_Completed_Action_Element';
import Adapt_Automation_Button from '../01 Interaction components/Adapt_Automation_Button';
import { useUrlCounter } from '../../context/UrlCounterContext';
import { getUrlClassification } from '../../composables/getURLconfig';
import { ADAPTABLE } from '../../constants/config';

import Separator from '../00 General_Page_Content/Separator';

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
  
  // Get URL classification to determine action text
  const classification = getUrlClassification(currentUrl);
  const actionText = classification === 'Malicious' ? 'AI blocked the URL' : 'AI allowed the URL';
  
  // Dynamic height based on stage count
  const stageCount = [showAcquisition, showAnalysis, showActionSelection, showActionImplementation].filter(Boolean).length;
  const dynamicHeight = stageCount === 1 ? 'h-20' : stageCount === 2 ? 'h-32' : stageCount === 3 ? 'h-42' : 'h-52';
  
  return (
    <div className={`w-[1250px]  px-6 py-8 bg-white rounded-lg outline outline-1 outline-offset-[ -1px] flex flex-col items-center space-y-4`} style={{ outlineColor: 'var(--eth-blue-100)', backgroundColor: 'var(--box-bg)' }}>
      <div className="w-full flex flex-col items-center">
        <div className="text-2xl items-center pb-2 font-semibold font-['Inter'] text-2xl mb-2">AI Support</div>
        <div className="w-full bg-white rounded-lg p-4 items-center outline outline-1 p-6 mb-4 outline-offset-[-1px]" style={{ outlineColor: 'var(--eth-blue-100)'}}>
          <div className="flex justify-center w-full">
            <div className="bg-white items-start rounded-lg  flex flex-col space-y-4 max-w-md w-full">
              {showAcquisition && <AI_Completed_Action_Element text="AI gathered information about the URL" />}
              {showAnalysis && <AI_Completed_Action_Element text="AI analysed the URL" />}
              {showActionSelection && <AI_Completed_Action_Element text="AI found an appropriate action" />}
              {showActionImplementation && <AI_Completed_Action_Element text={actionText} />}
            </div>
          </div>
        </div>
      </div>
      
      
      {/* Adaptable automation buttons - only show if ADAPTABLE is true */}
      {ADAPTABLE && (
       
        <div className="flex flex-row justify-center items-center gap-4">
          <Adapt_Automation_Button direction="decrease" />
          <Adapt_Automation_Button direction="increase" />
        </div>
      )}
    </div>
  );
}

export default AI_Completed_Actions_Display;
