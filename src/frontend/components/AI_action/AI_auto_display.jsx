import React from 'react';
import { Info } from 'lucide-react';
import Next_Button from '../01 Interaction components/Next_Button';
import View_Information_Button from '../01 Interaction components/View_Information_Button';

/**
 * AI Auto Display Component
 * 
 * Displays a box with ETH blue outline containing confirm and override AI action buttons for auto scenarios.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onViewInfo - Callback function for view information button
 * @param {Function} props.onNext - Callback function for next button
 * @param {string} props.classification - The AI classification ('Malicious' or 'Non-Malicious')
 * @returns {JSX.Element} AI auto display component
 */
function AI_auto_display({ onViewInfo, onNext, classification = 'Non-Malicious' }) {
  return (
    <div className="w-[1250px] p-6 bg-white rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col items-center space-y-4" style={{ outlineColor: 'var(--eth-blue-100)' }}>
      {/* Title */}
      <div className="flex items-center text-3xl font-semibold text-black mb-8 w-full justify-center rounded-lg p-6 outline"
      style={{ backgroundColor: 'var(--eth-blue-20)',
       outlineColor: 'var(--eth-blue-100)'
       }}
      >
        <Info className="w-8 h-8 mr-3" />
        AI successfully {classification === 'Malicious' ? 'blocked' : 'allowed'} the URL
      </div>
      
      {/* Next Button */}
      <div className="flex justify-center">
        <Next_Button 
          className="px-12 py-4 text-lg"
          onClick={onNext}
        />
      </div>
      
      {/* View Information Button */}
      <View_Information_Button 
        onClick={onViewInfo}
      />
    </div>
  );
}

export default AI_auto_display;
