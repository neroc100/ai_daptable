import React, { useState, useEffect } from 'react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Separator from '../components/00 General_Page_Content/Separator';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import AI_URL_Info_Display from '../components/AI_action/AI_URL_Info_Display';
import AI_Completed_Actions_Display from '../components/AI_action/AI_Completed_Actions_Display';
import Decision_Button from '../components/01 Interaction components/Decision_Button';
import { useUrlCounter } from '../context/UrlCounterContext';

/**
 * Info Acquisition Page - Condition 2
 * AI information gathering with user decision interface
 *
 * @returns {JSX.Element} Page with AI acquisition results and decision buttons
 */
function Info_acquisition() {
  // URL progression and navigation
  const { currentUrl } = useUrlCounter();

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        <Dashboard_Header />
        <URL_presentation />
        <Separator />
        
        {/* AI acquisition status */}
        <AI_Completed_Actions_Display showAnalysis={false} showActionSelection={false} />
        
        {/* URL information display */}
        <AI_URL_Info_Display isAnalysisDisplayed={false} />
        
        {/* Decision buttons */}
        <div className="flex flex-row space-x-4 w-full max-w-2xl">
          <Decision_Button type="allow" />
          <Decision_Button type="block" />
        </div>
        
        <Progress_Bar />
      </div>
    </div>
  );
}

export default Info_acquisition;
