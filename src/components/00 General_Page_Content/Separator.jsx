import React from 'react';

/**
 * Separator Component
 * 
 * This component creates a visual divider with a thin horizontal line.
 * It's used to separate different sections of content on the page.
 * 
 * @returns {JSX.Element} Visual separator component
 */
function Separator() {
  return (
    // Separator container with padding and rounded corners
    <div className="w-72 px-4 py-2 rounded-lg inline-flex flex-col justify-center items-center">
      {/* Thin horizontal line separator */}
      <div className="self-stretch h-px" style={{ backgroundColor: 'var(--eth-gray-100)' }} />
    </div>
  );
}

export default Separator;
