import React from 'react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Separator from '../components/00 General_Page_Content/Separator';
import Decision_Button from '../components/01 Interaction components/Decision_Button';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import { useUrlCounter } from '../context/UrlCounterContext';

/**
 * Manual Page - Condition 1
 * Direct user decision interface without AI assistance
 *
 * @returns {JSX.Element} Page with allow/block decision buttons
 */
function Manual() {
  // URL progression and navigation
  const { currentUrl } = useUrlCounter();

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        <Dashboard_Header />
        <URL_presentation />
        <Separator />
        
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

export default Manual;
