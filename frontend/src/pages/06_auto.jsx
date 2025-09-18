import React, { useState, useEffect } from 'react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Separator from '../components/00 General_Page_Content/Separator';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import AI_Completed_Actions_Display from '../components/AI_action/AI_Completed_Actions_Display';
import AI_auto_display from '../components/AI_action/AI_auto_display';
import Adapt_Automation_Button from '../components/01 Interaction components/Adapt_Automation_Button';
import { useUrlCounter } from '../context/UrlCounterContext';
import { getUrlClassification } from '../composables/getURLconfig';
import { ADAPTABLE } from '../constants/config';

/**
 * Auto Page - Condition 6
 * AI automatic decision implementation with review interface
 *
 * @returns {JSX.Element} Page with AI automatic actions and review options
 */
function Auto() {
  // UI interaction states
  const [classification, setClassification] = useState('Malicious');
  
  // URL progression and navigation
  const { currentUrl } = useUrlCounter();

  // Update URL classification
  useEffect(() => {
    setClassification(getUrlClassification(currentUrl));
  }, [currentUrl]);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        <Dashboard_Header />
        <URL_presentation showAIClassification={true} classification={classification} />
        
        {/* Adaptable automation buttons - only show if ADAPTABLE is true */}
        {ADAPTABLE && (
          <div className="flex flex-row justify-center items-center w-full max-w-4xl gap-4">
            <Adapt_Automation_Button direction="decrease" />
            <Adapt_Automation_Button direction="increase" />
          </div>
        )}
        
        <Separator />
        
        {/* AI action implementation status */}
        <AI_Completed_Actions_Display showActionImplementation={true} />
        
        {/* AI automatic action interface */}
        <AI_auto_display 
          classification={classification}
        />
        
        <Progress_Bar />
      </div>
    </div>
  );
}

export default Auto;
