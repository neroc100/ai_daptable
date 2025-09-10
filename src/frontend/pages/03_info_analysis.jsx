import React, { useState, useEffect } from 'react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Separator from '../components/00 General_Page_Content/Separator';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import AI_URL_Info_Display from '../components/AI_action/AI_URL_Info_Display';
import AI_Completed_Actions_Display from '../components/AI_action/AI_Completed_Actions_Display';
import Allow_Button from '../components/01 Interaction components/Allow_Button';
import Block_Button from '../components/01 Interaction components/Block_Button';
import { useUrlCounter } from '../context/UrlCounterContext';
import { useHandleNextUrl } from '../composables/handleNextURL';

/**
 * Info Analysis Page - Condition 3
 * AI information analysis with user decision interface
 *
 * @returns {JSX.Element} Page with AI analysis results and decision buttons
 */
function Info_analysis() {
  // Experiment flow states
  const [isLoading, setIsLoading] = useState(true);
  const [isAnalysisLoading, setIsAnalysisLoading] = useState(true);
  
  // URL progression and navigation
  const { currentUrl, switchUrl, urlCount, maxUrls, incrementUrlCount } = useUrlCounter();

  // URL navigation handler
  const handleNextUrl = useHandleNextUrl({
    urlCount, maxUrls, incrementUrlCount, switchUrl, navigate: () => {},
    setShowSuccess: () => {}, setShowReview: () => {},
    setIsLoading, setIsAnalysisLoading, setIsActionSelectionLoading: () => {}
  });

  // Simulate analysis stages
  useEffect(() => {
    if (!isLoading) return;
    setTimeout(() => setIsLoading(false), 0);
  }, [isLoading]);

  useEffect(() => {
    if (isAnalysisLoading === false) return;
    setTimeout(() => setIsAnalysisLoading(false), 0);
  }, [isAnalysisLoading]);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        <Dashboard_Header />
        <URL_presentation />
        <Separator />
        
        {/* AI analysis status */}
        <AI_Completed_Actions_Display showAcquisition={true} showAnalysis={true} showActionSelection={false} />
        
        {/* URL analysis display */}
        {!isAnalysisLoading && <AI_URL_Info_Display isAnalysisDisplayed={true} />}
        
        {/* URL information display (during analysis) */}
        {!isLoading && isAnalysisLoading && <AI_URL_Info_Display isAnalysisDisplayed={false} />}
        
        {/* Decision buttons */}
        {!isAnalysisLoading && (
          <div className="flex flex-row space-x-4 w-full max-w-2xl">
            <Allow_Button onNext={handleNextUrl} />
            <Block_Button onNext={handleNextUrl} />
          </div>
        )}
        
        <Progress_Bar />
      </div>
    </div>
  );
}

export default Info_analysis;
