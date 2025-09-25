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
        
        
        {/* AI acquisition status */}
        <AI_Completed_Actions_Display showAnalysis={false} showActionSelection={false} />
        
        {/* URL information display */}
        <div className="w-[833px] px-4 py-5 rounded-lg outline outline-1 outline-offset-[-1px]" style={{ outlineColor: 'var(--eth-blue-100)', backgroundColor: 'var(--box-bg)' }}>
          <AI_URL_Info_Display isAnalysisDisplayed={false} />
        </div>
        
        {/* Decision buttons - centered with one on each side */}
        <div className="w-[833px] px-4 py-5 rounded-lg outline outline-1 outline-offset-[-1px]" style={{ outlineColor: 'var(--eth-blue-100)', backgroundColor: 'var(--box-bg)' }}>
          <div className="flex flex-row justify-center items-center gap-3">
            <Decision_Button type="allow" />
            <Decision_Button type="block" />
          </div>
        </div>
        
        <Progress_Bar />
      </div>
    </div>
  );
}

export default Info_acquisition;
