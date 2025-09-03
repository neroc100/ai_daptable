import React, { useState, useEffect } from 'react';
import { Loader2, ClipboardCheck } from 'lucide-react';

/**
 * AI Completed Action Element Component
 * 
 * This component displays a loading icon that transitions to a clipboard check icon
 * after the loading period. It includes customizable text passed as a parameter.
 * 
 * @param {Object} props - Component props
 * @param {number} props.loadingTime - Time in milliseconds to show loading state
 * @param {string} props.text - The text to display next to the icon
 * @returns {JSX.Element} AI completed action element component
 */
function AI_Completed_Action_Element({ loadingTime = 3000, text = "AI Action Info" }) {
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
          <ClipboardCheck className="w-6 h-6" strokeWidth={2} style={{ color: 'var(--eth-blue-100)' }} />
        )}
        <span className="text-xl font-semibold">{text}</span>
      </div>
    </div>
  );
}

export default AI_Completed_Action_Element;
