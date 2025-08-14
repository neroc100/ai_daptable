import React from 'react';
import Dashboard_Header from '../../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../../components/00 General_Page_Content/URL_presentation';
import Separator from '../../components/00 General_Page_Content/Separator';
import Progress_Bar from '../../components/00 General_Page_Content/Progress_Bar';
import URL_String_Analysis_Box from '../../components/03 AI_Info_Acquisition/URL_String_Analysis_Box';
import Domain_Characteristics_Box from '../../components/03 AI_Info_Acquisition/Domain_Characteristics_Box';
import Encryption_HTTP_Box from '../../components/03 AI_Info_Acquisition/Encryption_HTTP_Box';
import DNS_Network_Box from '../../components/03 AI_Info_Acquisition/DNS_Network_Box';
import Webpage_Content_Box from '../../components/03 AI_Info_Acquisition/Webpage_Content_Box';
import Geographical_Hosting_Box from '../../components/03 AI_Info_Acquisition/Geographical_Hosting_Box';
import Make_Decision_Botton from '../../components/01 Human_Action_Selection/Make_Decision_Botton';

/**
 * AI Information Analysis Page
 * 
 * This page displays the results of AI information analysis.
 * It shows the analyzed information after the AI processing is complete.
 * 
 * @returns {JSX.Element} AI information analysis page component
 */
function AI_info_analysis() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* Header */}
        <Dashboard_Header />
        
        {/* URL Input Section */}
        <URL_presentation />
        
        {/* Separator */}
        <Separator />
        
        {/* Analysis Sections - Three boxes per row with same width as URL box */}
        <div className="w-[1250px] flex flex-col space-y-6">
          {/* Top Row - Three boxes */}
          <div className="flex justify-between space-x-6">
            <URL_String_Analysis_Box />
            <Domain_Characteristics_Box />
            <Encryption_HTTP_Box />
          </div>
          
          {/* Bottom Row - Three boxes */}
          <div className="flex justify-between space-x-6">
            <DNS_Network_Box />
            <Webpage_Content_Box />
            <Geographical_Hosting_Box />
          </div>
        </div>
        
        {/* Make Decision Button */}
        <Make_Decision_Botton />
        
        {/* Progress Bar */}
        <Progress_Bar />
      </div>
    </div>
  );
}

export default AI_info_analysis;
