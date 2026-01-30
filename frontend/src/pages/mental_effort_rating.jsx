import React, { useState } from 'react';
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
      <div className="container mx-auto flex flex-col items-center space-y-8">
        
        {/* Header with gradient background */}
        <div className="w-[90%] bg-gradient-to-r from-gray-800 to-gray-700 py-8 mb-6 rounded-2xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white font-['ui-sans-serif']">Mental Effort Rating</h1>
            <p className="text-gray-300 mt-2 text-sm">Rate the mental effort required for the task</p>
          </div>
        </div>
        
        {/* Main content box */}
        <div className="w-[90%] p-6 mb-8 bg-white rounded-2xl border-2 flex flex-col items-center space-y-6" style={{ borderColor: '#9CA3AF' }}>
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            {/* Slider container */}
            <div className="space-y-4">
              {/* Current rating display */}
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: getSliderColor() }}>
                  {rating}
                </div>
                <div className="text-sm text-gray-700">
                  {getEffortLevel()}
                </div>
              </div>

              {/* Slider */}
              <div className="flex justify-center">
                <div style={{ width: '100%', maxWidth: '600px' }}>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    value={rating}
                    onChange={handleSliderChange}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      backgroundColor: 'var(--eth-gray-40)',
                      background: `linear-gradient(to right, 
                        rgba(33, 92, 175, 0.3) 0%, 
                        rgba(33, 92, 175, 0.6) 50%, 
                        rgba(33, 92, 175, 1) 100%)`
                    }}
                  />
                  
                  {/* Slider labels */}
                  <div className="relative text-xs text-gray-600 mt-2" >
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
              <div className="flex justify-between text-xs text-gray-600 mt-4">
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
            <div className="flex justify-center mt-8">
              <div 
                className="px-6 py-2 bg-gray-100 rounded-2xl inline-flex justify-center items-center gap-1 overflow-hidden cursor-pointer shadow-lg hover:shadow-xl border border-gray-400 transition-all duration-200"
                onClick={handleSubmit}
              >
                {/* Button text */}
                <div className="justify-start text-black text-sm font-bold font-['ui-sans-serif'] leading-normal">
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
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: var(--eth-blue-100);
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: var(--eth-blue-100);
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        .slider::-webkit-slider-runnable-track {
          height: 8px;
          border-radius: 4px;
        }

        .slider::-moz-range-track {
          height: 8px;
          border-radius: 4px;
          background: transparent;
        }

        .slider:focus {
          outline: none;
        }

        .slider:focus::-webkit-slider-thumb {
          box-shadow: 0 0 0 4px rgba(33, 92, 175, 0.3);
        }

        .slider:focus::-moz-range-thumb {
          box-shadow: 0 0 0 4px rgba(33, 92, 175, 0.3);
        }
      `}</style>
    </div>
  );
}

export default MentalEffortRatingPage;
