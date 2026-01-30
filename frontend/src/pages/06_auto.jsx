import React, { useState, useEffect } from 'react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import { useUrlCounter } from '../context/UrlCounterContext';
import { getUrlClassification } from '../composables/getURLconfig';
import AI_Overview_Component from '../components/AI_action/AI_Overview_Component';
import View_Information_Button from '../components/01 Interaction components/View_Information_Button';
import Next_Button from '../components/01 Interaction components/Next_Button';
/**
 * Auto Page - Condition 6
 * AI automatic decision implementation with review interface
 *
 * @returns {JSX.Element} Page with AI automatic actions and review options
 */
function Auto() {
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
      
        <AI_Overview_Component automation_level={'automated'} classification={classification} />
        
        {/* Navigation button to proceed to next URL */}
        <div className="flex justify-center">
          <Next_Button />
        </div>
          <Progress_Bar />
      </div>
    </div>
  );
}

export default Auto;
