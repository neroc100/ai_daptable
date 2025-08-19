import React from 'react';
import { Loader2, Check, Square } from 'lucide-react';

/**
 * AI Information Analysis Box Component
 * 
 * This component displays a loading icon that transitions to a checkmark with square outline
 * after the loading period. It includes the "AI Information Analysis" label.
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isLoading - Whether the component is in loading state
 * @returns {JSX.Element} AI information analysis box component
 */
function AI_info_ana_box({ isLoading }) {
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
        <span className="text-xl font-semibold">AI Information Analysis</span>
      </div>
    </div>
  );
}

export default AI_info_ana_box;
