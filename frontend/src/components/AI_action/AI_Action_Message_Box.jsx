import React from 'react';
import { Info } from 'lucide-react';

/**
 * AI Action Message Box Component
 * Displays a title box with ETH blue styling and info icon.
 * 
 * @param {Object} props - Component props
 * @param {string} props.text - The title text to display
 * @returns {JSX.Element} AI action message box component
 */
function AI_Action_Message_Box({ text }) {
  return (
    <div className="flex items-center text-3xl font-semibold text-black mb-8 w-full justify-center rounded-lg p-6 outline"
    style={{ backgroundColor: 'var(--eth-blue-20)',
     outlineColor: 'var(--eth-blue-100)'
     }}
    >
      {/* Info icon for visual context */}
      <Info className="w-8 h-8 mr-3" />
      {/* Dynamic title text */}
      {text}
    </div>
  );
}

export default AI_Action_Message_Box;
