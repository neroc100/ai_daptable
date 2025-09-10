import React, { useState, useEffect } from 'react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Separator from '../components/00 General_Page_Content/Separator';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import AI_URL_Info_Display from '../components/AI_action/AI_URL_Info_Display';
import AI_Completed_Actions_Display from '../components/AI_action/AI_Completed_Actions_Display';
import AI_auto_display from '../components/AI_action/AI_auto_display';
import { LOAD_TIME_AI_ACTION_SELECTION } from '../constants/aiLoadingTimes';
import { useUrlCounter } from '../context/UrlCounterContext';
import { useNavigate } from 'react-router-dom';
import { getUrlClassification } from '../composables/getURLconfig';
import { useHandleNextUrl } from '../composables/handleNextURL';

/**
 * Auto Page - Condition 6
 * AI automatic decision implementation with review interface
 *
 * @returns {JSX.Element} Page with AI automatic actions and review options
 */
function Auto() {
  // Experiment flow states
  const [isLoading, setIsLoading] = useState(true);
  const [isAnalysisLoading, setIsAnalysisLoading] = useState(true);
  const [isActionSelectionLoading, setIsActionSelectionLoading] = useState(true);
  
  // UI interaction states
  const [showReview, setShowReview] = useState(false);
  const [showAIClassification, setShowAIClassification] = useState(false);
  const [classification, setClassification] = useState('Malicious');
  
  // URL progression and navigation
  const { currentUrl, switchUrl, urlCount, maxUrls, incrementUrlCount } = useUrlCounter();
  const navigate = useNavigate();

  // URL navigation handler
  const handleNextUrl = useHandleNextUrl({
    urlCount, maxUrls, incrementUrlCount, switchUrl, navigate,
    setShowSuccess: () => {}, setShowReview, setIsLoading, setIsAnalysisLoading, setIsActionSelectionLoading
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

  // Show AI automatic action interface
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
        
        {/* AI action implementation status */}
        <AI_Completed_Actions_Display showActionImplementation={true} />
        
        {/* URL analysis details */}
        {showReview && <AI_URL_Info_Display isAnalysisDisplayed={true} />}
        
        {/* AI automatic action interface */}
        {showAIClassification && (
          <AI_auto_display 
            onViewInfo={() => setShowReview(!showReview)}
            onNext={handleNextUrl}
            classification={classification}
          />
        )}
        
        <Progress_Bar />
      </div>
    </div>
  );
}

export default Auto;
