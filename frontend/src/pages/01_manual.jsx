import React from 'react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation'
import Decision_Button from '../components/01 Interaction components/Decision_Button';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import Adapt_Automation_Button from '../components/01 Interaction components/Adapt_Automation_Button';
import { useUrlCounter } from '../context/UrlCounterContext';
import { useAdaptable } from '../context/AdaptableContext';
import AI_Overview_Component from '../components/AI_action/AI_Overview_Component';

/**
 * Manual Page - Condition 1
 * Direct user decision interface without AI assistance
 *
 * @returns {JSX.Element} Page with allow/block decision buttons
 */
function Manual() {
  // URL progression and navigation
  const { currentUrl } = useUrlCounter();
  const { adaptable } = useAdaptable();

  return (
    <div className="h-full w-full bg-white p-5">
      <div className="container mx-auto flex flex-col items-center space-y-3">
        <Dashboard_Header />
        <URL_presentation />
        
        <AI_Overview_Component automation_level={'manual'} classification={null} />  
          <div className="flex flex-row justify-center items-center gap-3">
            <Decision_Button type="allow" />
            <Decision_Button type="block" />
          </div>
        
        <Progress_Bar />
      </div>
    </div>
  );
}

export default Manual;
