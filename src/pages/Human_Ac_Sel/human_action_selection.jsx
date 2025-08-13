import React from 'react';
import Dashboard_Header from '../../components/General_Page_Content/Dashboard_Header';

function HumanActionSelection() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="container mx-auto">
        <Dashboard_Header />
        <div className="mt-8">
          {/* Additional content for the human action selection page can go here */}
          <p className="text-white text-lg">
            Welcome to the Human Action Selection page. This is where users can select their actions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HumanActionSelection;
