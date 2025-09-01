import React, { useState, useEffect } from 'react';
import { Loader2, Check, Square } from 'lucide-react';

/**
 * AI Action Info Component
 * 
 * This component displays a loading icon that transitions to a checkmark with square outline
 * after the loading period. It includes customizable text passed as a parameter.
 * 
 * @param {Object} props - Component props
 * @param {number} props.loadingTime - Time in milliseconds to show loading state
 * @param {string} props.text - The text to display next to the icon
 * @returns {JSX.Element} AI action info component
 */
function AI_Action_Info({ loadingTime = 3000, text = "AI Action Info" }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);

    return () => clearTimeout(timer);
  }, [loadingTime]);

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
        <span className="text-xl font-semibold">{text}</span>
      </div>
    </div>
  );
}

export default AI_Action_Info;
