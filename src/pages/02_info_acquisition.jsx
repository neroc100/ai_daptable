import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Separator from '../components/00 General_Page_Content/Separator';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import AI_URL_Info_Display from '../components/AI_action/AI_URL_Info_Display';
import AI_Completed_Actions_Display from '../components/AI_action/AI_Completed_Actions_Display';
import Allow_Button from '../components/01 Interaction components/Allow_Button';
import Block_Button from '../components/01 Interaction components/Block_Button';

/**
 * Information Acquisition Page
 * 
 * This page displays the results of information acquisition.
 * It shows the gathered information after the processing is complete.
 * Instead of a "Make Decision" button, it provides "Allow" and "Block" buttons.
 * 
 * @returns {JSX.Element} Information acquisition page component with Allow/Block buttons
 */
function Info_acquisition() {
  const [isLoading, setIsLoading] = useState(true);
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
        <div className="flex flex-col items-center space-y-2">
          <AI_Completed_Actions_Display showAcquisition={true} showAnalysis={false} showActionSelection={false} />
          
          {/* Pause/Resume Instructions */}
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              
            </div>
          )}
        </div>
        
        {/* Information Display - Shows when acquisition is complete */}
        {!isLoading && (
          <AI_URL_Info_Display isAnalysisDisplayed={false} />
        )}
        
        {/* Action Buttons - Allow and Block */}
        {!isLoading && (
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

export default Info_acquisition;
