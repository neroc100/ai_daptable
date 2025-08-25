import React from 'react';
import { Info } from 'lucide-react';
import Review_Button from '../Review_Button';

/**
 * Auto Malicious Message A Component
 * 
 * This component displays a message about automatically handling a malicious URL.
 * It includes an info icon and message text, but no progress bar or timer.
 * 
 * @returns {JSX.Element} Auto malicious message A component
 */
function Auto_malicious_message_a() {
  return (
    <div className="w-[1250px] h-56 relative">
      <div className="w-[1250px] h-56 min-w-60 px-8 py-6 left-0 top-0 absolute bg-white rounded-lg border-4 border-red-600" />
      
      {/* Content container with relative positioning */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center space-y-4">
        {/* Info Icon */}
        <div data-svg-wrapper data-size="32" className="absolute left-[32px] top-[25px]">
          <Info className="w-[55px] h-[38px] text-stone-900" />
        </div>
        
        {/* Main Title */}
        <div className="w-[934.78px] h-10 ml-[95px] text-center text-stone-900 text-3xl font-semibold font-['Inter'] leading-10">
          URL is likely malicious
        </div>
        
        {/* Review Button */}
        <Review_Button />
      </div>
    </div>
  );
}

export default Auto_malicious_message_a;
