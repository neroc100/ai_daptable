import React from 'react';
import { ClipboardCheck } from 'lucide-react';

/**
 * AI Completed Action Element
 * Displays completed checkmark with text
 *
 * @param {string} text - Text to display next to checkmark
 * @returns {JSX.Element} Completed action element
 */
function AI_Completed_Action_Element({ text = "AI Action Info" }) {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="flex items-center space-x-2 text-black">
        <ClipboardCheck className="w-4 h-4" strokeWidth={2}  />
        <span className="text-sm">{text}</span>
      </div>
    </div>
  );
}

export default AI_Completed_Action_Element;
