import React from 'react';

/**
 * Dashboard Header Component
 * 
 * This component displays the main title for the URL Analysis Dashboard.
 * It uses large, bold white text with the Inter font family.
 * 
 * @returns {JSX.Element} Dashboard header title component
 */
function Dashboard_Header() {
  return (
    // Main dashboard title with large, bold black text
    <div className="w-[568px] justify-start text-black text-5xl font-semibold font-['Inter']">
      URL Analysis Dashboard
    </div>
  );
}

export default Dashboard_Header;
