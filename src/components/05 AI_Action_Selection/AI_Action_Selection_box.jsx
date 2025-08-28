import React, { useState, useEffect } from 'react';
import { Loader2, Check, Square, Play, Pause } from 'lucide-react';
import URL_String_Analysis_Box from '../03 AI_Info_Acquisition/Feature_boxes/URL_String_Analysis_Box';
import Domain_Characteristics_Box from '../03 AI_Info_Acquisition/Feature_boxes/Domain_Characteristics_Box';
import Encryption_HTTP_Box from '../03 AI_Info_Acquisition/Feature_boxes/Encryption_HTTP_Box';
import DNS_Network_Box from '../03 AI_Info_Acquisition/Feature_boxes/DNS_Network_Box';
import Webpage_Content_Box from '../03 AI_Info_Acquisition/Feature_boxes/Webpage_Content_Box';
import Geographical_Hosting_Box from '../03 AI_Info_Acquisition/Feature_boxes/Geographical_Hosting_Box';

/**
 * AI Action Selection Box Component
 * 
 * This component displays a loading icon that transitions to a checkmark with square outline
 * after the loading period. It includes the "AI Action Selection" label and uses
 * the feature boxes.
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isLoading - Whether the component is in loading state
 * @param {boolean} props.showDisplay - Whether to show the highlight malicious display (default: false)
 * @returns {JSX.Element} AI action selection box component
 */
function AI_Action_Selection_box({ isLoading, showDisplay = false }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-3 text-white">
        {isLoading ? (
          <Loader2 className="w-6 h-6 animate-spin text-blue-400" />
        ) : (
          <div className="relative">
            <Square className="w-6 h-6 text-blue-400" strokeWidth={2} />
            <Check className="w-4 h-4 text-blue-400 absolute inset-0 m-auto" strokeWidth={3} />
          </div>
        )}
        <span className="text-xl font-semibold">AI Action Selection</span>
      </div>
      
      {/* Feature Display */}
      {!isLoading && showDisplay && (
        <div className="w-[1250px] flex flex-col space-y-6">
          {/* Top Row - Three boxes */}
          <div className="flex justify-between space-x-6">
            <URL_String_Analysis_Box />
            <Domain_Characteristics_Box />
            <Encryption_HTTP_Box />
          </div>
          
          {/* Bottom Row - Three boxes */}
          <div className="flex justify-between space-x-6">
            <DNS_Network_Box />
            <Webpage_Content_Box />
            <Geographical_Hosting_Box />
          </div>
        </div>
      )}
    </div>
  );
}

export default AI_Action_Selection_box;
