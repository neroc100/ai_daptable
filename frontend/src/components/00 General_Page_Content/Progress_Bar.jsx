import React from 'react';
import { useUrlCounter } from '../../context/UrlCounterContext';

/**
 * Progress Bar Component
 * 
 * Shows experiment progress with URL count and visual progress bar.
 * Displays ETH blue dot on first URL, then fills progressively.
 * 
 * @returns {JSX.Element} Progress bar component
 */
function Progress_Bar() {
  const { urlCount, maxUrls } = useUrlCounter();
  
  return (
    <div className="w-48 h-8 flex flex-col items-center justify-center space-y-1">
      {/* Progress counter text */}
      <div className="text-black text-sm font-medium font-['Inter']">
        Progress {urlCount} out of {maxUrls} URLs
      </div>
      
      {/* Progress bar with background */}
      <div 
        className="w-40 h-2 rounded-full relative overflow-hidden"
        style={{ backgroundColor: 'var(--eth-gray-10)' }}
      >
        {/* Filled progress portion */}
        <div 
          className="h-full rounded-full transition-all duration-500 ease-in-out"
          style={{ 
            width: `${((urlCount - 1) / (maxUrls - 1)) * 100}%`,
            backgroundColor: 'var(--eth-blue-100)'
          }}
        />
        
        {/* Starting dot for first URL */}
        {urlCount === 1 && (
          <div className="absolute left-0.25 top-1/2 transform -translate-y-1/2">
            <div 
              className="w-1.5 h-1.5 rounded-full shadow-sm"
              style={{ backgroundColor: 'var(--eth-blue-100)' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Progress_Bar;
