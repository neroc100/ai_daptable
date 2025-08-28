import React from 'react';

/**
 * Dashboard Header Component
 * 
 * Displays the main title for the URL Analysis Dashboard experiment.
 * Uses Arial font with large, bold black text for clear visibility.
 * 
 * @returns {JSX.Element} Dashboard header title component
 */
function Dashboard_Header() {
  return (
    // Main dashboard title with large, bold black text
    <div className="w-[800px] justify center text-black text-5xl font-semibold font-['Arial']">
      URL Analysis Dashboard
    </div>
  );
}

export default Dashboard_Header;
