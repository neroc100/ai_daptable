import React from 'react';
import Feature_Box from './Feature_boxes/Feature_Box';
import { 
  ethUrlConfig, 
  maliciousUrlConfig, 
  ambiguousLegitimateUrlConfig, 
  ambiguousMaliciousUrlConfig,
  newsUrlConfig,
  shoppingUrlConfig,
  educationUrlConfig,
  governmentUrlConfig,
  socialMediaUrlConfig,
  phishingUrlConfig,
  cryptoScamUrlConfig,
  techSupportScamUrlConfig,
  lotteryScamUrlConfig,
  bankPhishingUrlConfig,
  socialMediaScamUrlConfig
} from './Feature_boxes/featureConfig';
import { useUrlCounter } from '../../context/UrlCounterContext';

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
  const { currentUrl } = useUrlCounter();
  // Select configuration based on current URL
  const getConfig = () => {
    switch (currentUrl) {
      case 'eth':
        return ethUrlConfig;
      case 'malicious':
        return maliciousUrlConfig;
      case 'ambiguousLegitimate':
        return ambiguousLegitimateUrlConfig;
      case 'ambiguousMalicious':
        return ambiguousMaliciousUrlConfig;
      case 'news':
        return newsUrlConfig;
      case 'shopping':
        return shoppingUrlConfig;
      case 'education':
        return educationUrlConfig;
      case 'government':
        return governmentUrlConfig;
      case 'socialMedia':
        return socialMediaUrlConfig;
      case 'phishing':
        return phishingUrlConfig;
      case 'cryptoScam':
        return cryptoScamUrlConfig;
      case 'techSupportScam':
        return techSupportScamUrlConfig;
      case 'lotteryScam':
        return lotteryScamUrlConfig;
      case 'bankPhishing':
        return bankPhishingUrlConfig;
      case 'socialMediaScam':
        return socialMediaScamUrlConfig;
      default:
        return ethUrlConfig;
    }
  };
  
  const config = getConfig();
  
  return (
    <div className="w-[1250px] flex gap-6">
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
