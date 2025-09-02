import React, { useState, useEffect } from 'react';
import { Play, Pause, Check } from 'lucide-react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Separator from '../components/00 General_Page_Content/Separator';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import AI_URL_Info_Display from '../components/AI_action/AI_URL_Info_Display';
import Review_Button from '../components/01 Interaction components/View_Information_Button';
import { LOAD_TIME_AI_ACTION_SELECTION } from '../constants/aiLoadingTimes';

import Success_Message from '../components/01 Interaction components/Success_Message';
import AI_Completed_Actions_Display from '../components/AI_action/AI_Completed_Actions_Display';
import AI_Action_request from '../components/AI_action/AI_Action_request';

/**
 * Allow Malicious Page
 * For the malicious message display in condition 4
 *
 * @returns {JSX.Element} Allow malicious page component with Allow/Block buttons
 */
function Allow() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnalysisLoading, setIsAnalysisLoading] = useState(true);
  const [isActionSelectionLoading, setIsActionSelectionLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [classification, setClassification] = useState('Malicious');
  const [actionType, setActionType] = useState('confirm');
  const [showAIClassification, setShowAIClassification] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('eth');

  const handleNextUrl = () => {
    setCurrentUrl(currentUrl === 'eth' ? 'malicious' : 'eth');
    // Reset success and review states for new URL
    setShowSuccess(false);
    setShowReview(false);
    // Reset timers for new URL
    setIsLoading(true);
    setIsAnalysisLoading(true);
    setIsActionSelectionLoading(true);
    setTimeElapsed(0);
    // Generate new random classification for new URL
    const randomClassification = Math.random() < 0.5 ? 'Malicious' : 'Non-Malicious';
    setClassification(randomClassification);
  };

      // Generate random classification on component mount
  useEffect(() => {
    const randomClassification = Math.random() < 0.5 ? 'Malicious' : 'Non-Malicious';
    setClassification(randomClassification);
  }, [currentUrl]);


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

  // Show AI classification after AI action selection time has passed
  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      setShowAIClassification(true);
    }, LOAD_TIME_AI_ACTION_SELECTION);

    return () => clearTimeout(timer);
  }, [isPaused, currentUrl]);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* Header */}
        <Dashboard_Header />
        
        {/* URL Input Section */}
        <URL_presentation showAIClassification={showAIClassification} classification={classification} currentUrl={currentUrl} />
        
        {/* Separator */}
        <Separator />
        
        {/* AI Action Info Box */}
        <AI_Completed_Actions_Display />
        
        {/* Pause/Resume Instructions */}
        {isLoading && (
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            
          </div>
        )}
        
        {/* AI Action Request - Shows only when AI Action Selection is complete */}
        {showAIClassification && !showSuccess && (
          <AI_Action_request 
            onConfirm={() => {
              // Handle confirm action - follow AI recommendation
              console.log('Confirm AI action');
              setActionType('confirm');
              setShowSuccess(true);
            }}
            onOverride={() => {
              // Handle override action - go against AI recommendation
              console.log('Override AI action');
              setActionType('override');
              setShowSuccess(true);
            }}
            onViewInfo={() => setShowReview(!showReview)}
            classification={classification}
          />
        )}
        
        {/* Info Display - Shows when review button is clicked */}
        {showReview && (
          <AI_URL_Info_Display isAnalysisDisplayed={true} currentUrl={currentUrl} />
        )}
        
        {/* Success Message - Shows when action is completed */}
        {showSuccess && (
          <Success_Message 
            decisionType={actionType === 'confirm' ? (classification === 'Malicious' ? 'block' : 'allow') : (classification === 'Malicious' ? 'allow' : 'block')}
            actor="ai"
            onNext={handleNextUrl}
          />
        )}
        

        

        

        
        {/* Progress Bar */}
        <Progress_Bar />
      </div>
      

    </div>
  );
}

export default Allow;

