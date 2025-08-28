import React from 'react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Separator from '../components/00 General_Page_Content/Separator';
import Allow_Button from '../components/02 Human_Action_Implementation/Allow_Button';
import Block_Button from '../components/02 Human_Action_Implementation/Block_Button';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';

/**
 * Manual Condition Page
 * 
 * @returns {JSX.Element}
 */
function Manual() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* Header */}
        <Dashboard_Header />
        
        {/* URL Input Section */}
        <URL_presentation />
        
        {/* Separator */}
        <Separator />
        
        {/* Action Buttons - Allow and Block */}
        <div className="flex flex-row space-x-4 w-full max-w-2xl">
          <Allow_Button />
          <Block_Button />
        </div>
        
        {/* Progress Bar */}
        <div className="flex flex-col items-center space-y-4">
          <Progress_Bar />
        </div>
      </div>
    </div>
  );
}

export default Manual;
