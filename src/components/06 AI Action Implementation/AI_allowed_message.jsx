import React from 'react';
import { Rss } from 'lucide-react';
import AI_Success_Message_Button from './AI_Success_Message_Button';

/**
 * AI Allowed Message Component
 * 
 * This component displays a modal success message when AI successfully allows a URL.
 * It includes a green RSS icon, success text, and an OK button to close the modal.
 * 
 * @param {Function} onOKClick - Callback function to handle OK button click (closes modal)
 * @returns {JSX.Element} AI allowed success message modal component
 */
function AI_allowed_message({ onOKClick }) {
  return (
    <div className="w-[750px] h-60 min-w-60 px-8 py-6 bg-white rounded-lg border-4 border-green-500">
      <div className="w-[800px] h-44 relative flex flex-col justify-start items-center pt-4">
        
        <div className="w-[584.39px] h-12 center text-stone-900 text-3xl font-semibold font-['Inter'] leading-4">
          AI successfully allowed URL
        </div>
        
        <div className="w-[600px] h-16 center text-neutral-500 text-2xl font-normal font-['Inter'] leading-20">
          The AI has successfully allowed traffic to this URL
        </div>
        
        <div className="flex center mt-40">
          <AI_Success_Message_Button onOKClick={onOKClick} />
        </div>
        
        <div data-svg-wrapper className="absolute left-0 top-0">
          <Rss className="w-12 h-12 text-black" />
        </div>
      </div>
    </div>
  );
}

export default AI_allowed_message;
