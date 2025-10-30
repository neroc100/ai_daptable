import React, { useState } from 'react';
import Dashboard_Header from '../components/00 General_Page_Content/Dashboard_Header';
import Separator from '../components/00 General_Page_Content/Separator';
import Progress_Bar from '../components/00 General_Page_Content/Progress_Bar';
import { useHandleTrialSubmit } from '../composables/handleTrialSubmit';

/**
 * Mental Effort Rating Page
 * 
 * Page for collecting mental effort ratings using a horizontal slider.
 * Uses ETH colors and allows users to rate their mental effort from
 * "No Effort" to "Extremely Large Effort".
 */
function MentalEffortRatingPage() {
  const [rating, setRating] = useState(75); // Default to middle value (0-150 scale)
  const [error, setError] = useState('');
  
  // Use the handleTrialSubmit composable for submission and navigation
  const handleTrialSubmit = useHandleTrialSubmit();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use the handleTrialSubmit composable
    const result = await handleTrialSubmit(rating);
    
    if (!result.success) {
      setError(result.error);
    }
  };

  // Handle slider change
  const handleSliderChange = (e) => {
    setRating(parseInt(e.target.value));
    setError(''); // Clear error when user changes rating
  };

  // Get slider color based on rating (ETH blue gradient)
  const getSliderColor = () => {
    const intensity = rating / 150; // 0 to 1
    const opacity = 0.3 + (intensity * 0.7); // 0.3 to 1.0
    return `rgba(33, 92, 175, ${opacity})`; // ETH blue-100 with varying opacity
  };

  // Get effort level text based on rating (0-150 scale from image)
  const getEffortLevel = () => {
    if (rating <= 2) return 'No effort at all';
    if (rating <= 16) return 'Almost no effort';
    if (rating <= 35) return 'Very little effort';
    if (rating <= 52) return 'Small effort';
    if (rating <= 89) return 'Considerable effort';
    if (rating <= 115) return 'Very large effort';
    if (rating <= 137) return 'Extremely large effort';
    return 'Extremely large effort';
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-5">
      <div className="container mx-auto flex flex-col items-center space-y-5">
        
        
        {/* Page title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 m-3">
            Mental Effort Rating
          </h1>
        </div>
        
        
        
        {/* Main content box with ETH blue outline styling */}
        <div className="w-[833px] p-4 mb-12 bg-white rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col items-center space-y-5" style={{ outlineColor: 'var(--eth-gray-100)' }}>
          <div className="flex items-center text-md font-medium text-black mb-4 w-full justify-center rounded-lg p-4 outline"
            style={{ backgroundColor: 'var(--eth-blue-20)',
             outlineColor: 'var(--eth-blue-100)'
             }}
          >
            Please rate the mental effort required for the task you just completed!
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 w-full">
            {/* Slider container */}
            <div className="space-y-3">
              {/* Current rating display */}
              <div className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: getSliderColor() }}>
                  {rating}
                </div>
                <div className="text-s" style={{ color: 'var(--eth-gray-100)' }}>
                  {getEffortLevel()}
                </div>
              </div>

              {/* Slider */}
              <div className="flex justify-center">
                <div style={{ width: '300%', maxWidth: '800px' }}>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    value={rating}
                    onChange={handleSliderChange}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      backgroundColor: 'var(--eth-gray-40)',
                      background: `linear-gradient(to right, 
                        rgba(33, 92, 175, 0.3) 0%, 
                        rgba(33, 92, 175, 0.6) 50%, 
                        rgba(33, 92, 175, 1) 100%)`
                    }}
                  />
                  
                  {/* Slider labels */}
                  <div className="relative text-xs mt-1" style={{ color: 'var(--eth-gray-100)' }}>
                    <span className="absolute left-0">0</span>
                    <span className="absolute" style={{ left: '20%' }}>30</span>
                    <span className="absolute" style={{ left: '39.5%' }}>60</span>
                    <span className="absolute" style={{ left: '59%' }}>90</span>
                    <span className="absolute" style={{ left: '78.3%' }}>120</span>
                    <span className="absolute right-0">150</span>
                  </div>
                </div>
              </div>

              {/* Effort scale labels */}
              <div className="flex justify-between text-xs mt-3" style={{ color: 'var(--eth-gray-100)' }}>
                <span className="text-left">No effort at all</span>
                <span className="text-right">Extremely large effort</span>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="text-red-600 text-xs text-center">
                {error}
              </div>
            )}

            {/* Submit button */}
            <div className="flex justify-center">
              <div 
                className="px-8 py-3 h-11 p-2 bg-white rounded-4xl outline outline-3 outline-offset-[-3px] inline-flex justify-center items-center gap-1 overflow-hidden cursor-pointer shadow-sm hover:opacity-85 hover:shadow-md transition-all duration-200"
                style={{ outlineColor: 'var(--eth-blue-100)',
                  backgroundColor: 'var(--eth-blue-100)'
                 }}
                onClick={handleSubmit}
              >
                {/* Button text with ETH styling */}
                <div className="justify-start text-white text-md font-bold font-['Arial'] leading-normal">
                  Submit Rating
                </div>
              </div>
            </div>
          </form>
        </div>
        
        <Progress_Bar />
      </div>

      {/* Custom slider styles */}
      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: var(--eth-blue-100);
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: var(--eth-blue-100);
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        }

        .slider:focus {
          outline: none;
        }

        .slider:focus::-webkit-slider-thumb {
          box-shadow: 0 0 0 3px rgba(33, 92, 175, 0.3);
        }

        .slider:focus::-moz-range-thumb {
          box-shadow: 0 0 0 3px rgba(33, 92, 175, 0.3);
        }
      `}</style>
    </div>
  );
}

export default MentalEffortRatingPage;
