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
    <>
      {/* Header background */}
      <div className="w-[90%] bg-gradient-to-r from-gray-800 to-gray-700 py-8 mb-6 rounded-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white font-['ui-sans-serif']">URL Analysis Dashboard</h1>
          <p className="text-gray-300 mt-2 text-sm">Evaluate and analyze the URLs</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard_Header;
