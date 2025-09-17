import React, { useState, useEffect } from 'react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Separator from '../components/00 General_Page_Content/Separator';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import AI_URL_Info_Display from '../components/AI_action/AI_URL_Info_Display';
import AI_Completed_Actions_Display from '../components/AI_action/AI_Completed_Actions_Display';
import Decision_Button from '../components/01 Interaction components/Decision_Button';
import Adapt_Automation_Button from '../components/01 Interaction components/Adapt_Automation_Button';
import { useUrlCounter } from '../context/UrlCounterContext';
import { ADAPTABLE } from '../constants/adaptable';

/**
 * Info Analysis Page - Condition 3
 * AI information analysis with user decision interface
 *
 * @returns {JSX.Element} Page with AI analysis results and decision buttons
 */
function Info_analysis() {
  // URL progression and navigation
  const { currentUrl } = useUrlCounter();

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        <Dashboard_Header />
        <URL_presentation />
        
        {/* Adaptable automation buttons - only show if ADAPTABLE is true */}
        {ADAPTABLE && (
          <div className="flex flex-row justify-center items-center w-full max-w-4xl gap-4">
            <Adapt_Automation_Button direction="decrease" />
            <Adapt_Automation_Button direction="increase" />
          </div>
        )}
        
        <Separator />
        
        {/* AI analysis status */}
        <AI_Completed_Actions_Display showActionSelection={false} />
        
        {/* URL analysis display */}
        <AI_URL_Info_Display isAnalysisDisplayed={true} />
        
        {/* Decision buttons - centered with one on each side */}
        <div className="flex flex-row justify-center items-center w-full max-w-4xl">
          <Decision_Button type="allow" />
          <div className="w-4"></div> {/* Spacer between buttons */}
          <Decision_Button type="block" />
        </div>
        
        <Progress_Bar />
      </div>
    </div>
  );
}

export default Info_analysis;
