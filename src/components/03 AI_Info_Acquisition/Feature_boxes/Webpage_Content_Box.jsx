import React, { useState, useMemo } from 'react';
import { ThumbsUp, ThumbsDown, ChevronUp, ChevronDown } from 'lucide-react';

/**
 * Webpage Content Feature Display Box Component
 * 
 * This component displays webpage content features with title, icon, and values.
 * It includes a collapsible arrow indicator and structured layout for content analysis information.
 * The arrow is clickable and expands to show all feature-value combinations.
 * 
 * The component can render in two different styles:
 * - Default style: White background with gray outline (for acquisition pages)
 * - Analysis style: White background with outline color based on majority of features
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isAnalysisDisplayed - Whether to use the analysis page design
 * @returns {JSX.Element} Webpage Content feature display box component
 */
function Webpage_Content_Box({ isAnalysisDisplayed = false }) {
  const [isExpanded, setIsExpanded] = useState(true);

  // Generate stable random icons for each feature using a seed
  const featureIcons = useMemo(() => {
    const seed = 42; // Stable seed for consistent results
    const features = ['Content Type', 'JavaScript', 'External Links'];
    
    return features.map((feature, index) => {
      // Simple hash function for consistent randomness
      const hash = feature.split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
      }, seed + index);
      
      return hash % 2 === 0 ? 'thumbsUp' : 'thumbsDown';
    });
  }, []);

  // Calculate majority for outline color
  const thumbsUpCount = featureIcons.filter(icon => icon === 'thumbsUp').length;
  const thumbsDownCount = featureIcons.filter(icon => icon === 'thumbsDown').length;
  const majorityIsPositive = thumbsUpCount >= thumbsDownCount;

  const handleArrowClick = () => {
    setIsExpanded(!isExpanded);
  };

  // Determine outline color and width based on page type and majority
  const outlineClass = isAnalysisDisplayed 
    ? (majorityIsPositive ? "outline-green-600 outline-4" : "outline-red-600 outline-4")
    : "outline-zinc-300 outline-1";

  return (
    <div className={`w-[420px] min-w-72 relative bg-white rounded-lg outline outline-offset-[-1px] ${outlineClass} transition-all duration-200 ease-in-out overflow-hidden ${isExpanded ? 'h-80' : 'h-24'}`}>
      {/* Title section - "Webpage Content" */}
      <div className="w-80 h-14 left-[24px] top-[24px] absolute inline-flex justify-start items-start">
        <div className="flex-1 justify-start text-stone-900 text-2xl font-semibold font-['Inter'] leading-7">
          Webpage Content<br/>
        </div>
      </div>
      
      {/* Feature content section - shows features only when expanded */}
      {isExpanded && (
        <div className={`absolute flex flex-col space-y-3 ${isAnalysisDisplayed ? 'left-[44px]' : 'left-[24px]'} top-[106px] right-[24px]`}>
          {/* First feature-value combination */}
          <div className="flex items-start gap-[10px]">
            {isAnalysisDisplayed && (
              featureIcons[0] === 'thumbsUp' ? 
                <ThumbsUp className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" /> :
                <ThumbsDown className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            )}
            <div className="flex flex-col justify-start items-start flex-1 min-w-0">
              <div className="text-xl font-semibold font-['Inter'] leading-7 text-stone-900">
                Content Type
              </div>
              <div className="text-zinc-400 text-base font-normal font-['Inter'] leading-snug">
                HTML
              </div>
            </div>
          </div>
          
          {/* Second feature-value combination */}
          <div className="flex items-start gap-[10px]">
            {isAnalysisDisplayed && (
              featureIcons[1] === 'thumbsUp' ? 
                <ThumbsUp className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" /> :
                <ThumbsDown className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            )}
            <div className="flex flex-col justify-start items-start flex-1 min-w-0">
              <div className="text-xl font-semibold font-['Inter'] leading-7 text-stone-900">
                JavaScript
              </div>
              <div className="text-zinc-400 text-base font-normal font-['Inter'] leading-snug">
                Minimal
              </div>
            </div>
          </div>
          
          {/* Third feature-value combination */}
          <div className="flex items-start gap-[10px]">
            {isAnalysisDisplayed && (
              featureIcons[2] === 'thumbsUp' ? 
                <ThumbsUp className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" /> :
                <ThumbsDown className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            )}
            <div className="flex flex-col justify-start items-start flex-1 min-w-0">
              <div className="text-xl font-semibold font-['Inter'] leading-7 text-stone-900">
                External Links
              </div>
              <div className="text-zinc-400 text-base font-normal font-['Inter'] leading-snug">
                5 links
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Collapsible arrow indicator - positioned in top-right */}
      <div 
        className="left-[350px] top-[23px] absolute cursor-pointer hover:opacity-70 transition-opacity"
        onClick={handleArrowClick}
      >
        {isExpanded ? (
          <ChevronUp className="w-6 h-6 text-gray-800" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-800" />
        )}
      </div>
    </div>
  );
}

export default Webpage_Content_Box;
