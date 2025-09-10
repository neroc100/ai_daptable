import React from 'react';
import { ClipboardCheck } from 'lucide-react';

/**
 * AI Completed Action Element Component
 * 
 * This component displays a completed checkmark icon with customizable text.
 * 
 * @param {Object} props - Component props
 * @param {string} props.text - The text to display next to the icon
 * @returns {JSX.Element} AI completed action element component
 */
function AI_Completed_Action_Element({ text = "AI Action Info" }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-3 text-black">
        <ClipboardCheck className="w-6 h-6" strokeWidth={2} style={{ color: 'var(--eth-blue-100)' }} />
        <span className="text-xl font-semibold">{text}</span>
      </div>
    </div>
  );
}

export default AI_Completed_Action_Element;
