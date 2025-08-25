import React, { useState, useEffect } from 'react';
import { Play, Pause, Check } from 'lucide-react';
import Dashboard_Header from '../../../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../../../components/00 General_Page_Content/URL_presentation';
import Separator from '../../../components/00 General_Page_Content/Separator';
import Progress_Bar from '../../../components/00 General_Page_Content/Progress_Bar';
import Acquired_Info_Display from '../../../components/03 AI_Info_Acquisition/Acquired_Info_Display';
import AI_info_Acq_box from '../../../components/03 AI_Info_Acquisition/AI_info_Acq_box';
import AI_info_ana_box_a from '../../../components/04 AI_Info_Analysis/AI_info_ana_box_a';
import AI_Action_Selection_box from '../../../components/05 AI_Action_Selection/AI_Action_Selection_box';
import Review_Button from '../../../components/05 AI_Action_Selection/Review_Button';
import Malicious_Message from '../../../components/05 AI_Action_Selection/ALLOW/malicious_message';
import Allow_Button from '../../../components/02 Human_Action_Implementation/Allow_Button';
import Block_Button from '../../../components/02 Human_Action_Implementation/Block_Button';

/**
 * Allow Malicious A Page
 * 
 * This page displays the results of AI information analysis for condition 4a.
 * It shows the analyzed information after the AI processing is complete.
 * Instead of a "Make Decision" button, it provides "Allow" and "Block" buttons.
 * This page looks the same as ai_info_analysis_display_a but is placed in the ALLOW folder.
 * 
 * @returns {JSX.Element} Allow malicious A page component with Allow/Block buttons
 */
function Allow_malicious_a() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnalysisLoading, setIsAnalysisLoading] = useState(true);
  const [isActionSelectionLoading, setIsActionSelectionLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

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
        if (prev >= 1000) {
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
    }, 2000);

    return () => clearTimeout(timer);
  }, [isPaused, isAnalysisLoading]);

  useEffect(() => {
    if (isPaused || isActionSelectionLoading === false || isAnalysisLoading) return;

    const timer = setTimeout(() => {
      setIsActionSelectionLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isPaused, isActionSelectionLoading, isAnalysisLoading]);

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* Header */}
        <Dashboard_Header />
        
        {/* URL Input Section */}
        <URL_presentation />
        
        {/* Separator */}
        <Separator />
        
        {/* Loading/Completion Status */}
        <div className="flex flex-col items-center space-y-4">
          <AI_info_Acq_box isLoading={isLoading} />
          <AI_info_ana_box_a isLoading={isAnalysisLoading} showDisplay={false} />
          <AI_Action_Selection_box isLoading={isActionSelectionLoading} showDisplay={false} />
          
          {/* Pause/Resume Instructions */}
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              
            </div>
          )}
        </div>
        
        {/* Malicious Message - Shows only when AI Action Selection is complete */}
        {!isActionSelectionLoading && !showSuccess && (
          <Malicious_Message 
            onConfirm={() => {
              // Handle confirm action - AI will block the URL
              console.log('AI will block the URL');
              setShowSuccess(true);
            }}
            onCancel={() => {
              // Handle cancel action - Override: AI will allow the URL instead
              console.log('Override: AI will allow the URL instead');
              setShowSuccess(true);
            }}
          />
        )}
        
        {/* Success Message - Shows when action is completed */}
        {showSuccess && (
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-3 text-white">
              <Check className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-semibold">Success</span>
            </div>
            <button
              onClick={() => {
                // Navigate to main page
                window.location.href = '/';
              }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Next
            </button>
          </div>
        )}
        
        {/* Review Button - Shows when AI Action Selection is complete */}
        {!isActionSelectionLoading && (
          <Review_Button />
        )}
        

        

        
        {/* Progress Bar */}
        <Progress_Bar />
      </div>
    </div>
  );
}

export default Allow_malicious_a;

