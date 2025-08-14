import React from 'react';
import Dashboard_Header from '../../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../../components/00 General_Page_Content/URL_presentation';
import Separator from '../../components/00 General_Page_Content/Separator';
import Make_Decision_Botton from '../../components/01 Human_Action_Selection/Make_Decision_Botton';
import Progress_Bar from '../../components/00 General_Page_Content/Progress_Bar';

function HumanActionSelection() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* Header */}
        <Dashboard_Header />
        
        {/* URL Input Section */}
        <URL_presentation />
        
        {/* Separator */}
        <Separator />
        
        {/* Make Decision Button */}
        <Make_Decision_Botton />
        
        {/* Progress Bar */}
        <div className="flex flex-col items-center space-y-4">
          <Progress_Bar />
        </div>
      </div>
    </div>
  );
}

export default HumanActionSelection;
