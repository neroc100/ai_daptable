import React from 'react';
import URL_String_Analysis_Box from './Feature_boxes/URL_String_Analysis_Box';
import Domain_Characteristics_Box from './Feature_boxes/Domain_Characteristics_Box';
import Encryption_HTTP_Box from './Feature_boxes/Encryption_HTTP_Box';
import DNS_Network_Box from './Feature_boxes/DNS_Network_Box';
import Webpage_Content_Box from './Feature_boxes/Webpage_Content_Box';
import Geographical_Hosting_Box from './Feature_boxes/Geographical_Hosting_Box';

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
        <URL_String_Analysis_Box isAnalysisDisplayed={isAnalysisDisplayed} />
        <Domain_Characteristics_Box isAnalysisDisplayed={isAnalysisDisplayed} />
        <Encryption_HTTP_Box isAnalysisDisplayed={isAnalysisDisplayed} />
      </div>
      
      {/* Bottom Row - Three boxes */}
      <div className="flex justify-between space-x-6">
        <DNS_Network_Box isAnalysisDisplayed={isAnalysisDisplayed} />
        <Webpage_Content_Box isAnalysisDisplayed={isAnalysisDisplayed} />
        <Geographical_Hosting_Box isAnalysisDisplayed={isAnalysisDisplayed} />
      </div>
    </div>
  );
}

export default Acquired_Info_Display;
