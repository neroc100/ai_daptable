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
    // Match whole words only
    const regex = /\b(allowed|blocked)\b/ig;
    const parts = value.split(regex);
    return parts.map((part, index) => {
      if (!part) return null;
      const lower = part.toLowerCase();
      if (lower === 'allowed') {
        return (
          <React.Fragment key={index}>
            {'\u00A0'}
            <span style={{ color: 'var(--eth-green-100)' }}>{part}</span>
            {'\u00A0'}
          </React.Fragment>
        );
      }
      if (lower === 'blocked') {
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
    <div className="flex items-center text-3xl font-semibold text-black mb-8 w-full justify-center rounded-lg p-6 outline"
    style={{ backgroundColor: 'var(--eth-blue-20)',
     outlineColor: 'var(--eth-blue-100)'
     }}
    >
      {/* Info icon for visual context */}
      <Info className="w-8 h-8 mr-3" />
      {/* Dynamic title text */}
      {renderColoredText(text)}
    </div>
  );
}

export default AI_Action_Message_Box;
