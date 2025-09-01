import React, { useState, useEffect } from 'react';
import { Play, Pause, Check, Square, Info } from 'lucide-react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Separator from '../components/00 General_Page_Content/Separator';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import Info_Display from '../components/03 AI_Info_Acquisition/Info_Display';
import AI_info_Acq_box from '../components/03 AI_Info_Acquisition/AI_info_Acq_box';
import AI_info_ana_box from '../components/04 AI_Info_Analysis/AI_info_ana_box';
import AI_Action_Selection_box from '../components/05 AI_Action_Selection/AI_Action_Selection_box';
import Review_Button from '../components/05 AI_Action_Selection/Review_Button';
import Auto_malicious_message from '../components/05 AI_Action_Selection/AUTO/auto_malicious_message';
import Allow_Button from '../components/02 Human_Action_Implementation/Allow_Button';
import Block_Button from '../components/02 Human_Action_Implementation/Block_Button';
import Success_Message from '../components/01 Interaction components/Success_Message';

/**
 * Auto Malicious A Page
 * 
 * This page displays the results of AI information analysis for condition 6a.
 * It shows the analyzed information after the AI processing is complete.
 * Instead of a "Make Decision" button, it provides "Allow" and "Block" buttons.
 * This page looks the same as veto_non_malicious_a but is placed in the AUTO folder.
 * 
 * @returns {JSX.Element} Auto malicious A page component with Allow/Block buttons
 */
function Auto_malicious() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnalysisLoading, setIsAnalysisLoading] = useState(true);
  const [isActionSelectionLoading, setIsActionSelectionLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showReview, setShowReview] = useState(false);

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

  useEffect(() => {
    if (isPaused || isActionSelectionLoading === false || isAnalysisLoading) return;

    const timer = setTimeout(() => {
      setIsActionSelectionLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, [isPaused, isActionSelectionLoading, isAnalysisLoading]);

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
          <AI_info_Acq_box isLoading={isLoading} />
          <AI_info_ana_box isLoading={isAnalysisLoading} showDisplay={false} />
          <AI_Action_Selection_box isLoading={isActionSelectionLoading} showDisplay={false} />
          
          {/* Pause/Resume Instructions */}
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              
            </div>
          )}
        </div>
        
        {/* Auto Malicious Message A - Shows only when AI Action Selection is complete */}
        {!isActionSelectionLoading && !showSuccess && (
          <div className="w-[1250px] h-56 relative">
            <div className="w-[1250px] h-56 min-w-60 px-8 py-6 left-0 top-0 absolute bg-white rounded-lg border-4" style={{ borderColor: 'var(--eth-red-100)' }} />
            
            {/* Content container with relative positioning */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center space-y-4">
              {/* Info Icon */}
              <div data-svg-wrapper data-size="32" className="absolute left-[32px] top-[25px]">
                <Info className="w-[55px] h-[38px] text-stone-900" />
              </div>
              
              {/* Main Title */}
              <div className="w-[934.78px] h-10 ml-[95px] text-center text-stone-900 text-3xl font-semibold font-['Inter'] leading-10">
                URL is likely malicious
              </div>
              
              {/* Review Button */}
              <Review_Button 
                onClick={() => setShowReview(!showReview)}
                showAnalysis={showReview}
              />
            </div>
          </div>
        )}
        
        {/* Info Display - Shows when review button is clicked */}
        {showReview && (
          <Info_Display isAnalysisDisplayed={true} />
        )}
        
        {/* AI Blocked URL Text - Shows when message is displayed */}
        {!isActionSelectionLoading && !showSuccess && (
          <div className="flex flex-col items-center space-y-4">
                          <div className="flex items-center space-x-3 text-black">
              <div className="relative">
                <Square className="w-6 h-6" strokeWidth={2} style={{ color: 'var(--eth-blue-100)' }} />
                <Check className="w-4 h-4 absolute inset-0 m-auto" strokeWidth={3} style={{ color: 'var(--eth-blue-100)' }} />
              </div>
              <span className="text-xl font-semibold">AI blocked URL</span>
            </div>
            <button
              onClick={() => {
                // Show success message
                setShowSuccess(true);
              }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Next
            </button>
          </div>
        )}
        
        {/* Success Message - Shows when action is completed */}
        {showSuccess && (
          <Success_Message 
            onClose={() => setShowSuccess(false)}
            decisionType="block"
            actor="ai"
          />
        )}
        

        
        {/* Progress Bar */}
        <Progress_Bar />
      </div>
    </div>
  );
}

export default Auto_malicious;
