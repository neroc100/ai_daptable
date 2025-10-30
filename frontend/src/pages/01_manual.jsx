import React from 'react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Separator from '../components/00 General_Page_Content/Separator';
import Decision_Button from '../components/01 Interaction components/Decision_Button';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import Adapt_Automation_Button from '../components/01 Interaction components/Adapt_Automation_Button';
import { useUrlCounter } from '../context/UrlCounterContext';
import { useAdaptable } from '../context/AdaptableContext';

/**
 * Manual Page - Condition 1
 * Direct user decision interface without AI assistance
 *
 * @returns {JSX.Element} Page with allow/block decision buttons
 */
function Manual() {
  // URL progression and navigation
  const { currentUrl } = useUrlCounter();
  const { adaptable } = useAdaptable();

  return (
    <div className="h-full w-full bg-white p-5">
      <div className="container mx-auto flex flex-col items-center space-y-3">
        <Dashboard_Header />
        <URL_presentation />
        
        {/* Adaptable automation buttons - only show if adaptable is true */}
        {adaptable && (
          <div className="w-[833px] px-4 py-5 rounded-lg outline outline-1 outline-offset-[-1px]" style={{ outlineColor: 'var(--eth-blue-40)', backgroundColor: 'var(--box-bg)' }}>
            <div className="flex flex-row justify-center items-center gap-3">
              <Adapt_Automation_Button direction="decrease" />
              <Adapt_Automation_Button direction="increase" />
            </div>
          </div>
        )}
        
        
        
        {/* Decision buttons - centered with one on each side */}
        <div className="w-[833px] px-4 py-5 rounded-lg outline outline-1 outline-offset-[-1px]" style={{ outlineColor: 'var(--eth-blue-40)', backgroundColor: 'var(--box-bg)' }}>
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

export default Manual;
