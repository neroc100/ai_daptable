import React from 'react';
import URL_String_Analysis_Box from '../03 AI_Info_Acquisition/Feature_boxes/URL_String_Analysis_Box';
import Domain_Characteristics_Box from '../03 AI_Info_Acquisition/Feature_boxes/Domain_Characteristics_Box';
import Encryption_HTTP_Box from '../03 AI_Info_Acquisition/Feature_boxes/Encryption_HTTP_Box';
import DNS_Network_Box from '../03 AI_Info_Acquisition/Feature_boxes/DNS_Network_Box';
import Webpage_Content_Box from '../03 AI_Info_Acquisition/Feature_boxes/Webpage_Content_Box';
import Geographical_Hosting_Box from '../03 AI_Info_Acquisition/Feature_boxes/Geographical_Hosting_Box';

/**
 * Highlight Malicious Display Component
 * 
 * This component displays the grid of six analysis boxes with the highlight malicious design.
 * It shows only the feature boxes without any loading states or headers.
 * 
 * @returns {JSX.Element} Highlight malicious display component
 */
function Highlight_Malicious_Display() {
  return (
    <div className="w-[1250px] flex flex-col space-y-6">
      {/* Top Row - Three boxes */}
      <div className="flex justify-between space-x-6">
        <URL_String_Analysis_Box highlightMalicious={true} />
        <Domain_Characteristics_Box highlightMalicious={true} />
        <Encryption_HTTP_Box highlightMalicious={true} />
      </div>
      
      {/* Bottom Row - Three boxes */}
      <div className="flex justify-between space-x-6">
        <DNS_Network_Box highlightMalicious={true} />
        <Webpage_Content_Box highlightMalicious={true} />
        <Geographical_Hosting_Box highlightMalicious={true} />
      </div>
    </div>
  );
}

export default Highlight_Malicious_Display;
