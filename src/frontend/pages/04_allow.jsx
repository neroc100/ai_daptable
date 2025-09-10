import React, { useState, useEffect } from 'react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Separator from '../components/00 General_Page_Content/Separator';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import AI_URL_Info_Display from '../components/AI_action/AI_URL_Info_Display';
import Review_Button from '../components/01 Interaction components/View_Information_Button';
import { LOAD_TIME_AI_ACTION_SELECTION } from '../constants/aiLoadingTimes';
import { getUrlClassification } from '../composables/getURLconfig';
import { useHandleNextUrl } from '../composables/handleNextURL';

import Success_Message from '../components/01 Interaction components/Success_Message';
import AI_Completed_Actions_Display from '../components/AI_action/AI_Completed_Actions_Display';
import AI_Action_request from '../components/AI_action/AI_Action_request';
import { useUrlCounter } from '../context/UrlCounterContext';
import { useNavigate } from 'react-router-dom';

/**
 * Allow Page - Condition 4
 * AI-assisted URL analysis with confirm/override decision interface
 *
 * @returns {JSX.Element} Page with AI classification and user decision options
 */
function Allow() {
  // Experiment flow states
  const [isLoading, setIsLoading] = useState(true);
  const [isAnalysisLoading, setIsAnalysisLoading] = useState(true);
  const [isActionSelectionLoading, setIsActionSelectionLoading] = useState(true);
  
  // UI interaction states
  const [showSuccess, setShowSuccess] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [classification, setClassification] = useState('Malicious');
  const [actionType, setActionType] = useState('confirm');
  const [showAIClassification, setShowAIClassification] = useState(false);
  
  // URL progression and navigation
  const { currentUrl, switchUrl, urlCount, maxUrls, incrementUrlCount } = useUrlCounter();
  const navigate = useNavigate();

  // URL navigation handler
  const handleNextUrl = useHandleNextUrl({
    urlCount, maxUrls, incrementUrlCount, switchUrl, navigate,
    setShowSuccess, setShowReview, setIsLoading, setIsAnalysisLoading, setIsActionSelectionLoading
  });

  // Update URL classification
  useEffect(() => {
    setClassification(getUrlClassification(currentUrl));
  }, [currentUrl]);

  // Simulate analysis stages
  useEffect(() => {
    if (!isLoading) return;
    setTimeout(() => setIsLoading(false), 0);
  }, [isLoading]);

  useEffect(() => {
    if (isAnalysisLoading === false) return;
    setTimeout(() => setIsAnalysisLoading(false), 0);
  }, [isAnalysisLoading]);

  useEffect(() => {
    if (isActionSelectionLoading === false || isAnalysisLoading) return;
    setTimeout(() => setIsActionSelectionLoading(false), 0);
  }, [isActionSelectionLoading, isAnalysisLoading]);

  // Show AI decision interface
  useEffect(() => {
    const timer = setTimeout(() => setShowAIClassification(true), LOAD_TIME_AI_ACTION_SELECTION);
    return () => clearTimeout(timer);
  }, [currentUrl]);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        <Dashboard_Header />
        <URL_presentation showAIClassification={showAIClassification} classification={classification} />
        <Separator />
        <AI_Completed_Actions_Display />
        
        {/* AI decision interface */}
        {showAIClassification && !showSuccess && (
          <AI_Action_request 
            onConfirm={() => { setActionType('confirm'); setShowSuccess(true); }}
            onOverride={() => { setActionType('override'); setShowSuccess(true); }}
            onViewInfo={() => setShowReview(!showReview)}
            classification={classification}
          />
        )}
        
        {/* URL analysis details */}
        {showReview && <AI_URL_Info_Display isAnalysisDisplayed={true} />}
        
        {/* Decision confirmation */}
        {showSuccess && (
          <Success_Message 
            decisionType={actionType === 'confirm' 
              ? (classification === 'Malicious' ? 'block' : 'allow') 
              : (classification === 'Malicious' ? 'allow' : 'block')
            }
            actor="ai"
            onNext={handleNextUrl}
          />
        )}
        
        <Progress_Bar />
      </div>
    </div>
  );
}

export default Allow;

