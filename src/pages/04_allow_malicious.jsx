import React, { useState, useEffect } from 'react';
import { Play, Pause, Check } from 'lucide-react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Separator from '../components/00 General_Page_Content/Separator';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import Info_Display from '../components/03 AI_Info_Acquisition/Info_Display';
import AI_info_Acq_box from '../components/03 AI_Info_Acquisition/AI_info_Acq_box';
import AI_info_ana_box from '../components/04 AI_Info_Analysis/AI_info_ana_box';
import AI_Action_Selection_box from '../components/05 AI_Action_Selection/AI_Action_Selection_box';
import Review_Button from '../components/05 AI_Action_Selection/Review_Button';
import Malicious_Message from '../components/05 AI_Action_Selection/ALLOW/malicious_message';

/**
 * Allow Malicious Page
 * For the malicious message display in condition 4
 *
 * @returns {JSX.Element} Allow malicious page component with Allow/Block buttons
 */
function Allow_malicious() {
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
          <AI_info_ana_box isLoading={isAnalysisLoading} showDisplay={false} />
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
            showReview={showReview}
            onReviewClick={() => setShowReview(!showReview)}
          />
        )}
        
        {/* Info Display - Shows when review button is clicked */}
        {showReview && (
          <Info_Display isAnalysisDisplayed={true} />
        )}
        
        {/* Success Message - Shows when action is completed */}
        {showSuccess && (
          <div className="w-[1250px] h-56 relative">
            <div className="w-[1250px] h-56 min-w-60 px-8 py-6 left-0 top-0 absolute bg-white rounded-lg border-4 border-green-600" />
            
            <div className="flex flex-col items-center justify-center h-full space-y-6 relative z-10">
              <div className="flex items-center space-x-3 text-stone-900">
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
          </div>
        )}
        

        

        

        
        {/* Progress Bar */}
        <Progress_Bar />
      </div>
    </div>
  );
}

export default Allow_malicious;

