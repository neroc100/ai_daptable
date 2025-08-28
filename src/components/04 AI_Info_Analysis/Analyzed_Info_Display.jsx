import React from 'react';
import Feature_Box from '../03 AI_Info_Acquisition/Feature_boxes/Feature_Box';
import { featureConfigs } from '../03 AI_Info_Acquisition/Feature_boxes/featureConfig';

/**
 * Analyzed Info Display Component
 * 
 * This component displays the grid of six analysis boxes that show the results
 * of AI information analysis. It contains all the feature display boxes in a
 * 3x2 grid layout with proper spacing and analysis page styling.
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isAnalysisDisplayed - Whether to use the analysis page design (default: true)
 * @returns {JSX.Element} Analyzed info display component
 */
function Analyzed_Info_Display({ isAnalysisDisplayed = true }) {
  return (
    <div className="w-[1250px] flex flex-col space-y-6">
      {/* Top Row - Three boxes */}
      <div className="flex justify-between space-x-6">
        <Feature_Box 
          isAnalysisDisplayed={isAnalysisDisplayed}
          title={featureConfigs.urlStringAnalysis.title}
          features={featureConfigs.urlStringAnalysis.features}
          seed={featureConfigs.urlStringAnalysis.seed}
        />
        <Feature_Box 
          isAnalysisDisplayed={isAnalysisDisplayed}
          title={featureConfigs.domainCharacteristics.title}
          features={featureConfigs.domainCharacteristics.features}
          seed={featureConfigs.domainCharacteristics.seed}
        />
        <Feature_Box 
          isAnalysisDisplayed={isAnalysisDisplayed}
          title={featureConfigs.encryptionHttp.title}
          features={featureConfigs.encryptionHttp.features}
          seed={featureConfigs.encryptionHttp.seed}
        />
      </div>
      
      {/* Bottom Row - Three boxes */}
      <div className="flex justify-between space-x-6">
        <Feature_Box 
          isAnalysisDisplayed={isAnalysisDisplayed}
          title={featureConfigs.dnsNetwork.title}
          features={featureConfigs.dnsNetwork.features}
          seed={featureConfigs.dnsNetwork.seed}
        />
        <Feature_Box 
          isAnalysisDisplayed={isAnalysisDisplayed}
          title={featureConfigs.webpageContent.title}
          features={featureConfigs.webpageContent.features}
          seed={featureConfigs.webpageContent.seed}
        />
        <Feature_Box 
          isAnalysisDisplayed={isAnalysisDisplayed}
          title={featureConfigs.geographicalHosting.title}
          features={featureConfigs.geographicalHosting.features}
          seed={featureConfigs.geographicalHosting.seed}
        />
      </div>
    </div>
  );
}

export default Analyzed_Info_Display;
