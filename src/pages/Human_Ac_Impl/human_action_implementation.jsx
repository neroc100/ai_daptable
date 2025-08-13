import React from 'react';
import Dashboard_Header from '../../components/General_Page_Content/Dashboard_Header';
import Progress_Bar from '../../components/General_Page_Content/Progress_Bar';
import Allow_Button from '../../components/Human_Action_Implementation/Allow_Button';
import Block_Button from '../../components/Human_Action_Implementation/Block_Button';

function HumanActionImplementation() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* Header */}
        <Dashboard_Header />
        
        {/* Action Buttons */}
        <div className="flex flex-row space-x-4 w-full max-w-2xl">
          <Allow_Button />
          <Block_Button />
        </div>
        
        {/* Progress Bar */}
        <Progress_Bar />
      </div>
    </div>
  );
}

export default HumanActionImplementation;
