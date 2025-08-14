import React, { useState, useMemo } from 'react';
import { ThumbsUp, ThumbsDown, ChevronUp, ChevronDown } from 'lucide-react';

/**
 * Domain Characteristics and Structure Feature Display Box Component
 * 
 * This component displays domain characteristics features with title and values.
 * It includes a collapsible arrow indicator and structured layout for domain analysis information.
 * The arrow is clickable and expands to show all feature-value combinations.
 * 
 * The component can render in two different styles:
 * - Default style: White background with gray outline (for acquisition pages)
 * - Analysis style: White background with outline color based on majority of features
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isAnalysisPage - Whether to use the analysis page design
 * @returns {JSX.Element} Domain Characteristics feature display box component
 */
function Domain_Characteristics_Box({ isAnalysisPage = false }) {
  const [isExpanded, setIsExpanded] = useState(true);

  // Generate stable random icons for each feature using a seed
  const featureIcons = useMemo(() => {
    const seed = 42; // Stable seed for consistent results
    const features = ['Domain Age', 'TLD Type', 'Subdomain Count'];
    
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
  const outlineClass = isAnalysisPage 
    ? (majorityIsPositive ? "outline-green-600 outline-4" : "outline-red-600 outline-4")
    : "outline-zinc-300 outline-1";

  return (
    <div className={`w-[420px] min-w-72 relative bg-white rounded-lg outline outline-offset-[-1px] ${outlineClass} transition-all duration-200 ease-in-out overflow-hidden ${isExpanded ? 'h-80' : 'h-48'}`}>
      {/* Title section - "Domain Characteristics and Structure" */}
      <div className="w-80 h-14 left-[24px] top-[24px] absolute inline-flex justify-start items-start">
        <div className="flex-1 justify-start text-stone-900 text-2xl font-semibold font-['Inter'] leading-7">
          Domain Characteristics<br/>and Structure
        </div>
      </div>
      
      {/* Feature content section - shows features based on expanded state */}
      <div className={`absolute flex flex-col space-y-3 ${isAnalysisPage ? 'left-[44px]' : 'left-[24px]'} top-[106px] right-[24px]`}>
        {/* First feature-value combination - always visible */}
        <div className="flex items-start gap-[10px]">
          {isAnalysisPage && (
            featureIcons[0] === 'thumbsUp' ? 
              <ThumbsUp className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" /> :
              <ThumbsDown className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          )}
          <div className="flex flex-col justify-start items-start flex-1 min-w-0">
            <div className="text-stone-900 text-xl font-semibold font-['Inter'] leading-7">
              Domain Age
            </div>
            <div className="text-zinc-400 text-base font-normal font-['Inter'] leading-snug">
              15 years
            </div>
          </div>
        </div>
        
        {/* Second feature-value combination - always visible */}
        <div className="flex items-start gap-[10px]">
          {isAnalysisPage && (
            featureIcons[1] === 'thumbsUp' ? 
              <ThumbsUp className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" /> :
              <ThumbsDown className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          )}
          <div className="flex flex-col justify-start items-start flex-1 min-w-0">
            <div className="text-stone-900 text-xl font-semibold font-['Inter'] leading-7">
              TLD Type
            </div>
            <div className="text-zinc-400 text-base font-normal font-['Inter'] leading-snug">
              .ch (Switzerland)
            </div>
          </div>
        </div>
        
        {/* Third feature-value combination - only visible when expanded */}
        {isExpanded && (
          <div className="flex items-start gap-[10px]">
            {isAnalysisPage && (
              featureIcons[2] === 'thumbsUp' ? 
                <ThumbsUp className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" /> :
                <ThumbsDown className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            )}
            <div className="flex flex-col justify-start items-start flex-1 min-w-0">
              <div className="text-stone-900 text-xl font-semibold font-['Inter'] leading-7">
                Subdomain Count
              </div>
              <div className="text-zinc-400 text-base font-normal font-['Inter'] leading-snug">
                2 subdomains
              </div>
            </div>
          </div>
        )}
      </div>
      
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

export default Domain_Characteristics_Box;
