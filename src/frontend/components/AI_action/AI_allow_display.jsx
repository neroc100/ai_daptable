import React from 'react';
import { Info } from 'lucide-react';
import View_Information_Button from '../01 Interaction components/View_Information_Button';
import Confirm_Button from '../01 Interaction components/Confirm_Button';
import Cancel_Button from '../01 Interaction components/Cancel_Button';

/**
 * AI Allow Display Component
 * Displays confirm/override buttons for AI recommendations with ETH blue styling.
 */
function AI_allow_display({ onViewInfo, onNext, classification = 'Malicious' }) {
  return (
    <>
      {/* Main container with ETH blue outline */}
      <div className="w-[1250px] p-6 bg-white rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col items-center space-y-4" style={{ outlineColor: 'var(--eth-blue-100)' }}>
        
        {/* Header section with AI recommendation */}
        <div className="flex items-center text-3xl font-semibold text-black mb-8 w-full justify-center rounded-lg p-6 outline "
        style={{ backgroundColor: 'var(--eth-blue-20)',
         outlineColor: 'var(--eth-blue-100)'
         }}
        >
          {/* Info icon for visual context */}
          <Info className="w-8 h-8 mr-3" />
          {/* Dynamic text based on AI classification */}
          AI requests to {classification === 'Malicious' ? 'block' : 'allow'} the URL
        </div>
        
        {/* Action buttons container */}
        <div className="flex flex-row space-x-4">
          {/* Confirm AI recommendation button */}
          <Confirm_Button 
            onNext={onNext}
            classification={classification}
          />
          {/* Override AI recommendation button */}
          <Cancel_Button 
            onNext={onNext}
            classification={classification}
          />
        </div>
        
        {/* Information toggle button */}
        <View_Information_Button 
          onClick={onViewInfo}
        />
      </div>
    </>
  );
}

export default AI_allow_display;
