import React from 'react';
import { useNavigate } from 'react-router-dom';
import Separator from '../components/00 General_Page_Content/Separator';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import { useUrlCounter } from '../context/UrlCounterContext';
import { useResetLocalStorage } from '../composables/resetLocalStorages';

/**
 * Redirect Page
 * 
 * Final page shown after completing the experiment.
 * Thanks the participant and provides a button to confirm participation
 * for compensation eligibility.
 */
function RedirectPage() {
  const navigate = useNavigate();
  const { resetUrlCounter } = useUrlCounter();
  const { resetAllLocalStorage } = useResetLocalStorage();

  const handleConfirmParticipation = () => {
    resetUrlCounter();
    resetAllLocalStorage();
    
    // Navigate back to the main page
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        
        
        {/* Page title */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 m-4">
            Study Complete
          </h1>
        </div>
        
        <Separator />
        
        {/* Main content box with ETH blue outline styling */}
        <div className="w-[1250px] p-6 mb-40 bg-white rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col items-center space-y-8" style={{ outlineColor: 'var(--eth-gray-100)' }}>
          
          {/* Thank you message */}
          <div className="flex items-center text-2xl font-medium text-black mb-6 w-full justify-center rounded-lg p-6 outline"
            style={{ backgroundColor: 'var(--eth-blue-20)',
             outlineColor: 'var(--eth-blue-100)'
             }}
          >
            Thank you for your participation in this study
          </div>

          {/* Compensation message */}
          <div className="text-center space-y-4">
            <p className="text-xl text-gray-700">
              Click the button below to confirm your participation to be eligible for compensation
            </p>
          </div>

          {/* Confirm button */}
          <div className="flex justify-center">
            <div 
              className="px-12 py-4 h-16 p-3 rounded-4xl outline outline-4 outline-offset-[-4px] inline-flex justify-center items-center gap-2 overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-all duration-200"
              style={{ outlineColor: 'var(--eth-blue-100)',
                backgroundColor: 'var(--eth-blue-100)'
              }}
              onClick={handleConfirmParticipation}
            >
              {/* Button text with ETH styling */}
              <div className="justify-start text-white text-2xl font-bold font-['Arial'] leading-normal">
                Confirm Participation
              </div>
            </div>
          </div>
        </div>
        
        <Progress_Bar />
      </div>
    </div>
  );
}

export default RedirectPage;
