import React from 'react';

/**
 * Separator Component
 * 
 * Creates a visual divider between different sections of the experiment interface.
 * Uses ETH gray-100 color for consistent styling across the application.
 * Provides clear visual separation between URL display and experiment components.
 * 
 * @returns {JSX.Element} Visual separator component
 */
function Separator() {
  return (
    // Separator container with padding and rounded corners
    <div className="w-200 px-4 py-2 rounded-lg inline-flex flex-col justify-center items-center">
      {/* Thin horizontal line separator */}
      <div className="self-stretch h-px" style={{ backgroundColor: 'var(--eth-gray-100)' }} />
    </div>
  );
}

export default Separator;
