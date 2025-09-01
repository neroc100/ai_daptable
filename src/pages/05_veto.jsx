import React, { useState, useEffect } from 'react';
import { Play, Pause, Check } from 'lucide-react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Separator from '../components/00 General_Page_Content/Separator';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import Info_Display from '../components/03 AI_Info_Acquisition/Info_Display';
import AI_Action_info_box from '../components/AI_Action_info_box';
import Review_Button from '../components/05 AI_Action_Selection/Review_Button';
import AI_veto_request from '../components/AI_veto_request';
import Allow_Button from '../components/02 Human_Action_Implementation/Allow_Button';
import Block_Button from '../components/02 Human_Action_Implementation/Block_Button';
import Success_Message from '../components/01 Interaction components/Success_Message';
import { LOAD_TIME_AI_ACTION_SELECTION } from '../constants/aiLoadingTimes';

/**
 * Veto Non Malicious A Page
 * 
 * This page displays the results of AI information analysis for condition 5a.
 * It shows the analyzed information after the AI processing is complete.
 * Instead of a "Make Decision" button, it provides "Allow" and "Block" buttons.
 * This page looks the same as allow_malicious_a but is placed in the VETO folder.
 * 
 * @returns {JSX.Element} Veto non malicious A page component with Allow/Block buttons
 */
function Veto() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnalysisLoading, setIsAnalysisLoading] = useState(true);
  const [isActionSelectionLoading, setIsActionSelectionLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showReview, setShowReview] = useState(false);
  const [showAIClassification, setShowAIClassification] = useState(false);
  const [classification, setClassification] = useState('Non-Malicious');
  const [actionType, setActionType] = useState('confirm');
  const [showSuccess, setShowSuccess] = useState(false);

  // Generate random classification on component mount
  useEffect(() => {
    const randomClassification = Math.random() < 0.5 ? 'Malicious' : 'Non-Malicious';
    setClassification(randomClassification);
  }, []);

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
  }, [isPaused]);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* Header */}
        <Dashboard_Header />
        
        {/* URL Input Section */}
        <URL_presentation showAIClassification={showAIClassification} classification={classification} />
        
        {/* Separator */}
        <Separator />
        
        {/* Loading/Completion Status */}
        <div className="flex flex-col items-center space-y-4">
          <AI_Action_info_box />
          
          {/* Pause/Resume Instructions */}
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              
            </div>
          )}
        </div>
        
        {/* AI Veto Request - Shows only when AI Action Selection is complete */}
        {showAIClassification && !showSuccess && (
          <AI_veto_request 
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
          <Info_Display isAnalysisDisplayed={true} />
                )}
        
        {/* Success Message - Shows when override action is completed */}
        {showSuccess && (
          <Success_Message 
            onClose={() => setShowSuccess(false)}
            decisionType={classification === 'Malicious' ? 'allow' : 'block'}
            actor="human"
          />
        )}
        
        {/* Progress Bar */}
        <Progress_Bar />
      </div>
    </div>
  );
}

export default Veto;
