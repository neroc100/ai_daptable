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
  const renderColoredText = (value) => {
    if (!value || typeof value !== 'string') return value;
    // Match whole words for allow/allowed and block/blocked
    const regex = /\b(allow|allowed|block|blocked)\b/ig;
    const parts = value.split(regex);
    return parts.map((part, index) => {
      if (!part) return null;
      const lower = part.toLowerCase();
      if (lower === 'allow' || lower === 'allowed') {
        return (
          <React.Fragment key={index}>
            {'\u00A0'}
            <span style={{ color: 'var(--eth-green-100)' }}>{part}</span>
            {'\u00A0'}
          </React.Fragment>
        );
      }
      if (lower === 'block' || lower === 'blocked') {
        return (
          <React.Fragment key={index}>
            {'\u00A0'}
            <span style={{ color: 'var(--eth-red-100)' }}>{part}</span>
            {'\u00A0'}
          </React.Fragment>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="flex items-center text-xl font-semibold text-black mb-5 w-full justify-center rounded-lg p-4 outline"
    style={{ backgroundColor: 'white',
     outlineColor: 'var(--eth-blue-40)'
     }}
    >
      {/* Info icon for visual context */}
      <Info className="w-6 h-6 mr-2" />
      {/* Dynamic title text */}
      {renderColoredText(text)}
    </div>
  );
}

export default AI_Action_Message_Box;
