import React, { useState, useEffect } from 'react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import AI_URL_Info_Display_unstructured from '../components/AI_action/AI_URL_Info_Display_unstructured';
import Decision_Button from '../components/01 Interaction components/Decision_Button';
import { useUrlCounter } from '../context/UrlCounterContext';
import AI_Overview_Component from '../components/AI_action/AI_Overview_Component';

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
      <div className="container mx-auto flex flex-col items-center space-y-3">
        <Dashboard_Header />
        <URL_presentation />
        
        <AI_Overview_Component automation_level={'infoacqu'} classification={null} />
        
        {/* URL information display */}
        <div className="w-[90%] px-4 py-5">
          <AI_URL_Info_Display_unstructured isAnalysisDisplayed={false} />
        </div>
      
          <div className="flex flex-row justify-center items-center gap-3">
            <Decision_Button type="allow" />
            <Decision_Button type="block" />
          </div>
        
        <Progress_Bar />
      </div>
    </div>
  );
}

export default Info_acquisition;
