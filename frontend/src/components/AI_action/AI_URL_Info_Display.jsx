import React from 'react';
import Feature_Box from './Feature_boxes/Feature_Box';
import { useUrlCounter } from '../../context/UrlCounterContext';
import { getUrlConfig } from '../../composables/getURLconfig';

/**
 * AI URL Info Display
 * Renders a 3x2 grid of feature boxes for the current URL.
 *
 * @param {boolean} isAnalysisDisplayed - Use analysis styling (default: false)
 * @returns {JSX.Element}
 */
function AI_URL_Info_Display({ isAnalysisDisplayed = false }) {
  const { currentUrl } = useUrlCounter();

  // Get current URL configuration
  const config = getUrlConfig(currentUrl);
  
  return (
    <div className="w-[1200px] flex gap-6">
      {/* Column 1: URL String Analysis */}
      <div className="flex flex-col w-full">
        <Feature_Box 
          isAnalysisDisplayed={isAnalysisDisplayed}
          title={config.urlStringAnalysis.title}
          features={config.urlStringAnalysis.features}
        />
      </div>
      
      {/* Column 2: Domain Characteristics and DNS */}
      <div className="flex flex-col gap-6 w-full">
        <Feature_Box 
          isAnalysisDisplayed={isAnalysisDisplayed}
          title={config.domainCharacteristics.title}
          features={config.domainCharacteristics.features}
        />
        <Feature_Box 
          isAnalysisDisplayed={isAnalysisDisplayed}
          title={config.dnsNetwork.title}
          features={config.dnsNetwork.features}
        />
      </div>
      
      {/* Column 3: Encryption, Webpage Content, and Geographical */}
      <div className="flex flex-col gap-6 w-full">
        <Feature_Box 
          isAnalysisDisplayed={isAnalysisDisplayed}
          title={config.encryptionHttp.title}
          features={config.encryptionHttp.features}
        />
        <Feature_Box 
          isAnalysisDisplayed={isAnalysisDisplayed}
          title={config.webpageContent.title}
          features={config.webpageContent.features}
        />
        <Feature_Box 
          isAnalysisDisplayed={isAnalysisDisplayed}
          title={config.geographicalHosting.title}
          features={config.geographicalHosting.features}
        />
      </div>
    </div>
  );
}

export default AI_URL_Info_Display;
