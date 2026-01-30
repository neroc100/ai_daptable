import React, { useState, useEffect } from 'react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../components/00 General_Page_Content/URL_presentation';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import { getUrlClassification } from '../composables/getURLconfig';
import { useUrlCounter } from '../context/UrlCounterContext';
import AI_Overview_Component from '../components/AI_action/AI_Overview_Component';
import Decision_Button from '../components/01 Interaction components/Decision_Button';
import Next_Button from '../components/01 Interaction components/Next_Button';

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
        <URL_presentation/>
        <AI_Overview_Component automation_level={'veto'} classification={classification} />
    
        {/* Action buttons - equally distant from center */}
        <div className="relative flex-col justify-center items-center w-full py-3 sm:flex sm:flex-row flex-col gap-3">
          {/* Override button to change AI's decision - positioned left of center */}
            <Decision_Button 
              type="override"
              classification={classification}
            />
          {/* Navigation button to proceed to next URL - positioned right of center */}
            <Next_Button/>
        </div>
        <Progress_Bar />
      </div>
    </div>
  );
}

export default Veto;
