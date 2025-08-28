import React from 'react';
import { Loader2, Check, Square } from 'lucide-react';

/**
 * AI Information Acquisition Box Component
 * 
 * This component displays a loading icon that transitions to a checkmark with square outline
 * after the loading period. It includes the "AI Information Acquisition" label.
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isLoading - Whether the component is in loading state
 * @returns {JSX.Element} AI information acquisition box component
 */
function AI_info_Acq_box({ isLoading }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-3 text-black">
        {isLoading ? (
          <Loader2 className="w-6 h-6 animate-spin" style={{ color: 'var(--eth-blue-100)' }} />
        ) : (
          <div className="relative">
            <Square className="w-6 h-6" strokeWidth={2} style={{ color: 'var(--eth-blue-100)' }} />
            <Check className="w-4 h-4 absolute inset-0 m-auto" strokeWidth={3} style={{ color: 'var(--eth-blue-100)' }} />
          </div>
        )}
        <span className="text-xl font-semibold">AI Information Acquisition</span>
      </div>
    </div>
  );
}

export default AI_info_Acq_box;
