import React, { useState, useEffect } from 'react';
import { Play, Pause, Check, Square, Info } from 'lucide-react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Separator from '../components/00 General_Page_Content/Separator';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import AI_URL_Info_Display from '../components/AI_action/AI_URL_Info_Display';
import AI_Completed_Actions_Display from '../components/AI_action/AI_Completed_Actions_Display';
import AI_auto_display from '../components/AI_action/AI_auto_display';
import Review_Button from '../components/01 Interaction components/View_Information_Button';
import Allow_Button from '../components/01 Interaction components/Allow_Button';
import Block_Button from '../components/01 Interaction components/Block_Button';
import Success_Message from '../components/01 Interaction components/Success_Message';
import { LOAD_TIME_AI_ACTION_SELECTION } from '../constants/aiLoadingTimes';

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
function Auto() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnalysisLoading, setIsAnalysisLoading] = useState(true);
  const [isActionSelectionLoading, setIsActionSelectionLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showAIClassification, setShowAIClassification] = useState(false);
  const [classification, setClassification] = useState('Malicious');
  const [actionType, setActionType] = useState('block');
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
    setActionType(randomClassification === 'Malicious' ? 'block' : 'allow');
  };

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

  // Randomly generate classification on mount
  useEffect(() => {
    const randomClassification = Math.random() < 0.5 ? 'Malicious' : 'Non-Malicious';
    setClassification(randomClassification);
    setActionType(randomClassification === 'Malicious' ? 'block' : 'allow');
  }, [currentUrl]);

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
        
        {/* Loading/Completion Status */}
        <div className="flex flex-col items-center space-y-4">
          <AI_Completed_Actions_Display showActionImplementation={true} />
          
          {/* Pause/Resume Instructions */}
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              
            </div>
          )}
        </div>
        

        
        {/* Info Display - Shows when review button is clicked */}
        {showReview && (
          <AI_URL_Info_Display isAnalysisDisplayed={true} currentUrl={currentUrl} />
        )}
        
        {/* AI Auto Display - Shows when AI classification is displayed */}
        {showAIClassification && !showSuccess && (
          <AI_auto_display 
            onViewInfo={() => setShowReview(!showReview)}
            onNext={() => setShowSuccess(true)}
            classification={classification}
          />
        )}
        

        
        {/* Success Message - Shows when action is completed */}
        {showSuccess && (
          <Success_Message 
            decisionType={actionType}
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

export default Auto;
