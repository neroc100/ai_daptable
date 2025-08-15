import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useButtonContext } from '../../context/Condition';

/**
 * AI In Progress Message Component
 * 
 * This component displays a message indicating that AI is currently gathering information.
 * It includes an information icon, title, description, and a progress indicator that
 * fills up over 2 seconds before automatically navigating to the appropriate page
 * based on which button was clicked on the main page.
 * 
 * ButtonContext Integration:
 * - Uses useButtonContext() to access the globally stored Condition value
 * - Determines navigation logic based on the button number from global state
 * - No longer depends on React Router navigation state
 * 
 * Navigation logic:
 * - Button 2: Navigate to AI info acquisition display page
 * - Buttons 3, 4, 5, 6: Navigate to AI info analysis page
 * 
 * @returns {JSX.Element} AI in progress message component
 */
function AI_in_progress_message() {
  const navigate = useNavigate();
  // Access the globally stored button number from ButtonContext
  const { Condition } = useButtonContext();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Timer that runs for 2 seconds (2000ms)
    const duration = 2000;
    const interval = 50; // Update every 50ms for smooth animation
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + increment;
        
        if (newProgress >= 100) {
          clearInterval(timer);
          // Navigate to appropriate page after 2 seconds based on globally stored button number
          setTimeout(() => {
            if (Condition === 2) {
              // Button 2 leads to AI info acquisition display
              navigate('/ai-info-acquisition-display');
            } else if (Condition === 3 || Condition === 4 || Condition === 5 || Condition === 6) {
              // Buttons 3, 4, 5, 6 lead to AI info analysis page
              navigate('/ai-info-analysis');
            } else {
              // Default fallback to AI info acquisition display
              navigate('/ai-info-acquisition-display');
            }
          }, 100);
          return 100;
        }
        
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [navigate, Condition]);

  return (
    <div className="w-[602px] h-64 relative">
      {/* Main container with white background and dark border */}
      <div className="w-[602px] h-64 min-w-60 px-8 py-6 left-0 top-0 absolute bg-white rounded-lg border-4 border-zinc-800" />
      
      {/* Information icon - positioned in top-left area */}
      <div data-svg-wrapper data-size="32" className="left-[32px] top-[31px] absolute">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Information circle icon with exclamation mark */}
          <path d="M20.0007 26.6663V19.9997M20.0007 13.333H20.0173M36.6673 19.9997C36.6673 29.2044 29.2054 36.6663 20.0007 36.6663C10.7959 36.6663 3.33398 29.2044 3.33398 19.9997C3.33398 10.7949 10.7959 3.33301 20.0007 3.33301C29.2054 3.33301 36.6673 10.7949 36.6673 19.9997Z" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* Title - "AI in progress" */}
      <div className="w-[475px] h-12 left-[95px] top-[31.12px] absolute justify-start text-stone-900 text-3xl font-semibold font-['Inter'] leading-10">
        AI in progress
      </div>
      
      {/* Description text */}
      <div className="w-[475px] h-11 left-[95px] top-[90.78px] absolute justify-start text-neutral-500 text-2xl font-normal font-['Inter'] leading-loose">
        AI is gathering information. Please wait.
      </div>
      
      {/* Progress bar container */}
      <div data-value={`${Math.round(progress)}%`} className="w-96 h-24 left-[95px] top-[113px] absolute">
        {/* Progress track - gray background */}
        <div className="w-96 h-1.5 left-[16px] top-[44px] absolute bg-neutral-400 rounded-[3px] relative overflow-hidden">
          {/* Green progress fill - animated based on progress state */}
          <div 
            className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-50 ease-linear rounded-[3px]"
            style={{ width: `${progress}%` }}
          />
          {/* Green progress indicator dot - positioned at the end of the fill */}
          <div 
            data-svg-wrapper 
            className="absolute top-0 transition-all duration-50 ease-linear"
            style={{ left: `${(progress / 100) * (384 - 6)}px` }}
          >
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Circular indicator filled with green color */}
              <rect width="6" height="6" rx="3" fill="#14AE5C"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AI_in_progress_message;
