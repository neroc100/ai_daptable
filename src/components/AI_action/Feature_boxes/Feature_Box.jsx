import React, { useState, useMemo } from 'react';
import { ThumbsUp, ThumbsDown, ChevronUp, ChevronDown } from 'lucide-react';

/**
 * Unified Feature Box Component
 * 
 * This component displays feature analysis information with title, icon, and values.
 * It includes a collapsible arrow indicator and structured layout for feature analysis information.
 * The arrow is clickable and expands to show all feature-value combinations.
 * 
 * The component can render in two different styles:
 * - Default style: White background with gray outline (for acquisition pages)
 * - Analysis style: White background with outline color based on majority of features
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isAnalysisDisplayed - Whether to use the analysis page design
 * @param {string} props.title - The title of the feature box
 * @param {Array} props.features - Array of feature objects with name and value properties
 * @param {number} props.seed - Seed for consistent random icon generation (default: 42)
 * @returns {JSX.Element} Unified feature box component
 */
function Feature_Box({ 
  isAnalysisDisplayed = false, 
  title, 
  features, 
  seed = 42 
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  // Generate stable random icons for each feature using a seed
  const featureIcons = useMemo(() => {
    return features.map((feature, index) => {
      // Simple hash function for consistent randomness
      const hash = feature.name.split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
      }, seed + index);
      
      return hash % 2 === 0 ? 'thumbsUp' : 'thumbsDown';
    });
  }, [features, seed]);

  // Calculate majority for outline color
  const thumbsUpCount = featureIcons.filter(icon => icon === 'thumbsUp').length;
  const thumbsDownCount = featureIcons.filter(icon => icon === 'thumbsDown').length;
  const majorityIsPositive = thumbsUpCount >= thumbsDownCount;

  const handleArrowClick = () => {
    setIsExpanded(!isExpanded);
  };

  // Determine outline color and width based on page type and majority
  const outlineClass = isAnalysisDisplayed 
    ? "outline-4"
    : "outline-1";
  
  const outlineStyle = isAnalysisDisplayed 
    ? { outlineColor: majorityIsPositive ? 'var(--eth-green-100)' : 'var(--eth-red-100)' }
    : { outlineColor: 'var(--eth-gray-100)' };

  // Calculate dynamic height based on number of features
  const calculateExpandedHeight = () => {
    const baseHeight = 106; // Top section height (title + padding)
    const featureHeight = 60; // Height per feature (including spacing)
    const bottomPadding = 48; // Bottom padding (increased for better spacing)
    
    // Calculate height based on feature count
    if (features.length <= 2) {
      // For 1-2 features, use a more compact height
      return baseHeight + (features.length * featureHeight) + bottomPadding;
    } else {
      // For 3+ features, ensure proper height with better spacing
      const contentHeight = features.length * featureHeight;
      const spacingAdjustment = Math.max(0, (features.length - 1) * 12); // Adjust for space-y-3 (12px)
      return baseHeight + contentHeight + spacingAdjustment + bottomPadding;
    }
  };

  const expandedHeight = calculateExpandedHeight();
  
  return (
    <div 
      className={`w-full relative bg-white rounded-lg outline outline-offset-[-1px] ${outlineClass} transition-all duration-200 ease-in-out overflow-hidden`} 
      style={{
        ...outlineStyle,
        height: isExpanded ? `${expandedHeight}px` : '96px' // 96px = h-24
      }}
    >
      {/* Title section */}
      <div className="w-80 h-14 left-[24px] top-[24px] absolute inline-flex justify-start items-start">
        <div className="flex-1 justify-start text-stone-900 text-2xl font-semibold font-['Inter'] leading-7">
          {title}<br/>
        </div>
      </div>
      
      {/* Feature content section - shows features only when expanded */}
      {isExpanded && (
        <div 
          className={`absolute flex flex-col space-y-3 ${isAnalysisDisplayed ? 'left-[44px]' : 'left-[24px]'} top-[106px] right-[24px]`}
          style={{ 
            height: `${expandedHeight - 130}px`,
            justifyContent: features.length <= 3 ? 'flex-start' : 'space-between'
          }}
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-[10px]">
              {isAnalysisDisplayed && (
                featureIcons[index] === 'thumbsUp' ? 
                  <ThumbsUp className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: 'var(--eth-green-100)' }} /> :
                  <ThumbsDown className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: 'var(--eth-red-100)' }} />
              )}
              <div className="flex flex-col justify-start items-start flex-1 min-w-0">
                <div className="text-xl font-semibold font-['Inter'] leading-7 text-stone-900">
                  {feature.name}
                </div>
                <div className="text-zinc-400 text-base font-normal font-['Inter'] leading-snug">
                  {feature.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Collapsible arrow indicator - positioned in top-right */}
      <div 
        className="absolute top-[23px] right-[24px] cursor-pointer hover:opacity-70 transition-opacity"
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

export default Feature_Box;
