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
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-3 text-black">
        <ClipboardCheck className="w-6 h-6" strokeWidth={2} style={{ color: 'var(--eth-blue-100)' }} />
        <span className="text-xl font-semibold">{text}</span>
      </div>
    </div>
  );
}

export default AI_Completed_Action_Element;
