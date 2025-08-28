import React from 'react';
import Feature_Box from './Feature_boxes/Feature_Box';
import { featureConfigs } from './Feature_boxes/featureConfig';

/**
 * Acquired Info Display Component
 * 
 * This component displays the grid of six analysis boxes that show the results
 * of AI information acquisition. It contains all the feature display boxes in a
 * 3x2 grid layout with proper spacing and acquisition page styling.
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isAnalysisDisplayed - Whether to use the analysis page design (default: false)
 * @returns {JSX.Element} Acquired info display component
 */
function Acquired_Info_Display({ isAnalysisDisplayed = false }) {
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

export default Acquired_Info_Display;
