import React from 'react';
import Dashboard_Header from '../../../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../../../components/00 General_Page_Content/URL_presentation';
import Separator from '../../../components/00 General_Page_Content/Separator';
import Progress_Bar from '../../../components/00 General_Page_Content/Progress_Bar';
import Information_Display from '../../../components/05 AI_Action_Selection/Information_Display';
import Non_malicious_message from '../../../components/05 AI_Action_Selection/ALLOW/non_malicious_message';

/**
 * Allow Non Malicious Page
 * 
 * This page handles the action of allowing a non-malicious URL.
 * It displays the decision to allow access to a URL that has been identified as safe.
 * 
 * @returns {JSX.Element} Allow non malicious page component
 */
function Allow_non_malicious() {
  const handleConfirm = () => {
    // Handle confirm action
    console.log('Confirm clicked');
  };

  const handleCancel = () => {
    // Handle cancel action
    console.log('Cancel clicked');
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* Header */}
        <Dashboard_Header />
        
        {/* URL Input Section */}
        <URL_presentation />
        
        {/* Separator */}
        <Separator />
        
        {/* Non Malicious Message Component */}
        <Non_malicious_message 
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
        
        {/* Information Display Component */}
        <Information_Display />
        
        {/* Progress Bar */}
        <Progress_Bar />
      </div>
    </div>
  );
}

export default Allow_non_malicious;
