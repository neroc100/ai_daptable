import React, { useState, useEffect } from 'react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import { getUrlClassification } from '../composables/getURLconfig';
import { useUrlCounter } from '../context/UrlCounterContext';
import AI_Action_Buttons from '../components/AI_action/AI_Action_Buttons';
import AI_Overview_Component from '../components/AI_action/AI_Overview_Component';

/**
 * Allow Page - Condition 4
 * AI-assisted URL analysis with confirm/override decision interface
 *
 * @returns {JSX.Element} Page with AI classification and user decision options
 */
function Allow() {
  // UI interaction states
  const [classification, setClassification] = useState('Malicious');
 
  
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
      <URL_presentation/>
      
      <AI_Overview_Component automation_level={'allow'} classification={classification} />
        {/* Action buttons container */}
        <AI_Action_Buttons classification={classification} case='allow' />
      <Progress_Bar />
    </div>
  </div>
);
}

export default Allow;

