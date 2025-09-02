import React from 'react';
import { useUrlCounter } from '../../context/UrlCounterContext';

/**
 * Progress Bar Component
 * 
 * A clean, modern progress bar that shows experiment progress.
 * Page 1: Shows ETH blue dot at start
 * Page 2: Shows half-filled progress bar
 * 
 * @returns {JSX.Element} Modern progress bar component
 */
function Progress_Bar() {
  const { urlCount, maxUrls } = useUrlCounter();
  
  return (
    <div className="w-96 h-16 flex flex-col items-center justify-center space-y-3">
      {/* Progress text */}
      <div className="text-black text-lg font-medium font-['Inter']">
        Progress {urlCount} out of {maxUrls} URLs
      </div>
      
      {/* Progress bar container */}
      <div 
        className="w-80 h-4 rounded-full relative overflow-hidden"
        style={{ backgroundColor: 'var(--eth-gray-10)' }}
      >
        {/* Progress fill - ETH blue background */}
        <div 
          className="h-full rounded-full transition-all duration-500 ease-in-out"
          style={{ 
            width: urlCount === 1 ? '0%' : '50%',
            backgroundColor: 'var(--eth-blue-100)'
          }}
        />
        
        {/* ETH Blue dot - only visible on first page */}
        {urlCount === 1 && (
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <div 
              className="w-3 h-3 rounded-full shadow-sm"
              style={{ backgroundColor: 'var(--eth-blue-100)' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Progress_Bar;
