import React, { useState, useEffect } from 'react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Separator from '../components/00 General_Page_Content/Separator';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import Info_Display from '../components/03 AI_Info_Acquisition/Info_Display';
import AI_Action_info_box from '../components/AI_Action_info_box';
import Allow_Button from '../components/02 Human_Action_Implementation/Allow_Button';
import Block_Button from '../components/02 Human_Action_Implementation/Block_Button';

/**
 * Page for info analysis condition
 * 
 * @returns {JSX.Element} 
 */
function Info_analysis() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnalysisLoading, setIsAnalysisLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
        setIsPaused(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isPaused || !isLoading) return;

    const timer = setInterval(() => {
      setTimeElapsed(prev => {
        if (prev >= 0) {
          setIsLoading(false);
          return prev;
        }
        return prev + 100;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isPaused, isLoading]);

  useEffect(() => {
    if (isPaused || isAnalysisLoading === false) return;

    const timer = setTimeout(() => {
      setIsAnalysisLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, [isPaused, isAnalysisLoading]);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* Header */}
        <Dashboard_Header />
        
        {/* URL Input Section */}
        <URL_presentation />
        
        {/* Separator */}
        <Separator />
        
        {/* Loading/Completion Status */}
        <div className="flex flex-col items-center space-y-4">
          <AI_Action_info_box showAcquisition={true} showAnalysis={true} showActionSelection={false} />
          
          {/* Pause/Resume Instructions */}
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              
            </div>
          )}
        </div>
        
        {/* Info Display - Shows when AI analysis timer runs out */}
        {!isAnalysisLoading && (
          <Info_Display isAnalysisDisplayed={true} />
        )}
        
        {/* Info Display - Shows when acquisition is complete but hides when analysis is complete */}
        {!isLoading && isAnalysisLoading && (
          <Info_Display isAnalysisDisplayed={false} />
        )}
        
        {/* Action Buttons - Allow and Block */}
        {!isAnalysisLoading && (
          <div className="flex flex-row space-x-4 w-full max-w-2xl">
            <Allow_Button />
            <Block_Button />
          </div>
        )}
        
        {/* Progress Bar */}
        <Progress_Bar />
      </div>
    </div>
  );
}

export default Info_analysis;
