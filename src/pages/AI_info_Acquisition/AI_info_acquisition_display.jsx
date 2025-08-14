import React from 'react';
import Dashboard_Header from '../../components/General_Page_Content/Dashboard_Header';
import URL_presentation from '../../components/General_Page_Content/URL_presentation';
import Separator from '../../components/General_Page_Content/Separator';
import Progress_Bar from '../../components/General_Page_Content/Progress_Bar';
import Feature_Display_Box from '../../components/AI_Info_Acquisition/Feature_Display_Box';
import Make_Decision_Botton from '../../components/Human_Action_Selection/Make_Decision_Botton';

/**
 * AI Information Acquisition Display Page
 * 
 * This page displays the results of AI information acquisition.
 * It shows the gathered information after the AI processing is complete.
 * 
 * @returns {JSX.Element} AI information acquisition display page component
 */
function AI_info_acquisition_display() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* Header */}
        <Dashboard_Header />
        
        {/* URL Input Section */}
        <URL_presentation />
        
        {/* Separator */}
        <Separator />
        
        {/* Analysis Sections Grid */}
        <div className="grid grid-cols-3 gap-6 max-w-7xl">
          {/* Top Row */}
          <Feature_Display_Box />
          <Feature_Display_Box />
          <Feature_Display_Box />
          
          {/* Bottom Row */}
          <Feature_Display_Box />
          <Feature_Display_Box />
          <Feature_Display_Box />
        </div>
        
        {/* Make Decision Button */}
        <Make_Decision_Botton />
        
        {/* Progress Bar */}
        <Progress_Bar />
      </div>
    </div>
  );
}

export default AI_info_acquisition_display;
