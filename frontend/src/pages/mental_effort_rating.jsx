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
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        
        
        {/* Page title */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 m-4">
            Mental Effort Rating
          </h1>
        </div>
        
        <Separator />
        
        {/* Main content box with ETH blue outline styling */}
        <div className="w-[1250px] p-6 mb-40 bg-white rounded-lg outline outline-1 outline-offset-[-1px] flex flex-col items-center space-y-8" style={{ outlineColor: 'var(--eth-gray-100)' }}>
          <div className="flex items-center text-2xl font-medium text-black mb-6 w-full justify-center rounded-lg p-6 outline"
            style={{ backgroundColor: 'var(--eth-blue-20)',
             outlineColor: 'var(--eth-blue-100)'
             }}
          >
            Please rate the mental effort required for the task you just completed
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8 w-full">
            {/* Slider container */}
            <div className="space-y-4">
              {/* Current rating display */}
              <div className="text-center">
                <div className="text-5xl font-bold mb-2" style={{ color: getSliderColor() }}>
                  {rating}
                </div>
                <div className="text-lg text-xl" style={{ color: 'var(--eth-gray-100)' }}>
                  {getEffortLevel()}
                </div>
              </div>

              {/* Slider */}
              <div className="flex justify-center">
                <div style={{ width: '300%', maxWidth: '1200px' }}>
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
                  <div className="relative text-sm mt-2" style={{ color: 'var(--eth-gray-100)' }}>
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
              <div className="flex justify-between text-lg mt-4" style={{ color: 'var(--eth-gray-100)' }}>
                <span className="text-left">No effort at all</span>
                <span className="text-right">Extremely large effort</span>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="text-red-600 text-sm text-center">
                {error}
              </div>
            )}

            {/* Submit button */}
            <div className="flex justify-center">
              <div 
                className="px-12 py-4 h-16 p-3 bg-white rounded-lg outline outline-4 outline-offset-[-4px] inline-flex justify-center items-center gap-2 overflow-hidden cursor-pointer shadow-xl hover:opacity-85 hover:shadow-md transition-all duration-200"
                style={{ outlineColor: 'var(--eth-blue-100)' }}
                onClick={handleSubmit}
              >
                {/* Button text with ETH styling */}
                <div className="justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-normal">
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
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: var(--eth-blue-100);
          cursor: pointer;
          border: 3px solid #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: var(--eth-blue-100);
          cursor: pointer;
          border: 3px solid #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
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
