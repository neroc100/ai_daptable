import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Success_Message_Button from './Success_Message_Button';

/**
 * Success Message URL Blocked Component
 * 
 * This component displays a modal success message when a URL is successfully blocked.
 * It includes a green shield-checked icon, success text, and an OK button to close the modal.
 * 
 * @param {Function} onOKClick - Callback function to handle OK button click (closes modal)
 * @returns {JSX.Element} Success message modal component for URL blocked
 */
function Success_Message_URL_Blocked({ onOKClick }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
      <div className="w-[760px] h-60 min-w-60 px-8 py-6 bg-gray-100 rounded-lg border-4 border-black relative">
        {/* Close button */}
        <button
          onClick={onOKClick}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          ×
        </button>
        
        <div className="w-[810px] h-44 relative flex flex-col justify-between items-center">
        
        <div className="flex flex-col items-center pt-4 space-y-1">
          <div className="w-[584.39px] h-12 center text-stone-900 text-3xl font-semibold font-['Inter'] leading-4">
            URL successfully blocked
          </div>
          
          <div className="w-[600px] h-16 center text-neutral-500 text-2xl font-normal font-['Inter'] leading-2">
            You successfully blocked traffic to this URL
          </div>
        </div>
        
        <div className="flex justify-center mb-4">
          <Success_Message_Button onOKClick={onOKClick} />
        </div>
        
        <div data-svg-wrapper className="absolute left-0 top-0">
          <ShieldCheck className="w-12 h-12 text-black" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Success_Message_URL_Blocked;
