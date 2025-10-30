import React, { useState, useEffect } from 'react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Separator from '../components/00 General_Page_Content/Separator';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import { getUrlClassification } from '../composables/getURLconfig';
import AI_Completed_Actions_Display from '../components/AI_action/AI_Completed_Actions_Display';
import AI_veto_display from '../components/AI_action/AI_veto_display';
import { useUrlCounter } from '../context/UrlCounterContext';

/**
 * Veto Page - Condition 5
 * AI-assisted URL analysis with veto/override decision interface
 *
 * @returns {JSX.Element} Page with AI classification and veto decision options
 */
function Veto() {
  // UI interaction states
  const [classification, setClassification] = useState('Non-Malicious');
  
  // URL progression and navigation
  const { currentUrl } = useUrlCounter();

  // Update URL classification
  useEffect(() => {
    setClassification(getUrlClassification(currentUrl));
  }, [currentUrl]);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="container mx-auto flex flex-col items-center space-y-3">
        <Dashboard_Header />
        <URL_presentation showAIClassification={true} classification={classification} />
        
        <AI_Completed_Actions_Display />
        
        {/* AI veto interface */}
        <AI_veto_display
          classification={classification}
        />
        <Progress_Bar />
      </div>
    </div>
  );
}

export default Veto;
