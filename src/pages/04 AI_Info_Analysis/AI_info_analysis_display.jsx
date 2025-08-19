import React from 'react';
import Dashboard_Header from '../../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../../components/00 General_Page_Content/URL_presentation';
import Separator from '../../components/00 General_Page_Content/Separator';
import Progress_Bar from '../../components/00 General_Page_Content/Progress_Bar';
import Analyzed_Info_Display from '../../components/04 AI_Info_Analysis/Analyzed_Info_Display';
import Make_Decision_Botton from '../../components/01 Human_Action_Selection/Make_Decision_Botton';

/**
 * AI Information Analysis Display Page
 * 
 * This page displays the results of AI information analysis.
 * It shows the analyzed information after the AI processing is complete.
 * 
 * @returns {JSX.Element} AI information analysis display page component
 */
function AI_info_analysis_display() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* Header */}
        <Dashboard_Header />
        
        {/* URL Input Section */}
        <URL_presentation />
        
        {/* Separator */}
        <Separator />
        
        {/* Analysis Sections - Using the Analyzed_Info_Display component */}
        <Analyzed_Info_Display isAnalysisDisplayed={true} />
        
        {/* Make Decision Button */}
        <Make_Decision_Botton />
        
        {/* Progress Bar */}
        <Progress_Bar />
      </div>
    </div>
  );
}

export default AI_info_analysis_display;
