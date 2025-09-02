import React from 'react';
import Feature_Box from './Feature_boxes/Feature_Box';
import { featureConfigs } from './Feature_boxes/featureConfig';

/**
 * AI URL Info Display Component
 * 
 * This component displays the grid of six analysis boxes that show the results
 * of AI information processing. It contains all the feature display boxes in a
 * 3x2 grid layout with proper spacing and styling.
 * 
 * The component can render in two different styles:
 * - Acquisition style: White background with gray outline (isAnalysisDisplayed = false)
 * - Analysis style: White background with outline color based on majority of features (isAnalysisDisplayed = true)
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isAnalysisDisplayed - Whether to use the analysis page design (default: false)
 * @returns {JSX.Element} AI URL info display component
 */
function AI_URL_Info_Display({ isAnalysisDisplayed = false }) {
  return (
    <div className="w-[1250px] flex gap-6">
      {/* Column 1: URL String Analysis */}
      <div className="flex flex-col w-full">
        <Feature_Box 
          isAnalysisDisplayed={isAnalysisDisplayed}
          title={featureConfigs.urlStringAnalysis.title}
          features={featureConfigs.urlStringAnalysis.features}
          seed={featureConfigs.urlStringAnalysis.seed}
        />
      </div>
      
      {/* Column 2: Domain Characteristics and DNS */}
      <div className="flex flex-col gap-6 w-full">
        <Feature_Box 
          isAnalysisDisplayed={isAnalysisDisplayed}
          title={featureConfigs.domainCharacteristics.title}
          features={featureConfigs.domainCharacteristics.features}
          seed={featureConfigs.domainCharacteristics.seed}
        />
      
            <Feature_Box 
          isAnalysisDisplayed={isAnalysisDisplayed}
          title={featureConfigs.geographicalHosting.title}
          features={featureConfigs.geographicalHosting.features}
          seed={featureConfigs.geographicalHosting.seed}
        />
      </div>
      
      {/* Column 3: Encryption, Webpage Content, and Geographical */}
      <div className="flex flex-col gap-6 w-full">
        <Feature_Box 
          isAnalysisDisplayed={isAnalysisDisplayed}
          title={featureConfigs.encryptionHttp.title}
          features={featureConfigs.encryptionHttp.features}
          seed={featureConfigs.encryptionHttp.seed}
        />
        <Feature_Box 
          isAnalysisDisplayed={isAnalysisDisplayed}
          title={featureConfigs.webpageContent.title}
          features={featureConfigs.webpageContent.features}
          seed={featureConfigs.webpageContent.seed}
        />
      <Feature_Box 
          isAnalysisDisplayed={isAnalysisDisplayed}
          title={featureConfigs.dnsNetwork.title}
          features={featureConfigs.dnsNetwork.features}
          seed={featureConfigs.dnsNetwork.seed}
        />
      </div>
    </div>
  );
}

export default AI_URL_Info_Display;
