import React, { useState, useMemo } from 'react';
import { ThumbsUp, ThumbsDown, ChevronUp, ChevronDown } from 'lucide-react';
import { classifyFeatures, getMajorityClassification } from '../../../composables/handleFeatureClassification';

/**
 * Feature Box
 * Displays a titled, collapsible list of features with risk indicators.
 *
 * @param {boolean} isAnalysisDisplayed - Use analysis styling
 * @param {string} title - Box title
 * @param {Array} features - List of { name, value }
 * @returns {JSX.Element}
 */
function Feature_Box({ 
  isAnalysisDisplayed = false, 
  title, 
  features
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  // Classify features using composable
  const featureIcons = useMemo(() => {
    return classifyFeatures(features);
  }, [features]);

  // Get majority classification
  const majorityIsPositive = getMajorityClassification(featureIcons);

  const handleArrowClick = () => {
    setIsExpanded(!isExpanded);
  };

  // Outline thickness and color
  const outlineClass = isAnalysisDisplayed 
    ? "outline-4"
    : "outline-1";
  
  const outlineStyle = isAnalysisDisplayed 
    ? { outlineColor: majorityIsPositive ? 'var(--eth-green-100)' : 'var(--eth-red-100)' }
    : { outlineColor: 'var(--eth-gray-100)' };

  // Dynamic height based on feature count
  const calculateExpandedHeight = () => {
    const baseHeight = 106;
    const featureHeight = 60;
    const bottomPadding = 48;
    
    if (features.length <= 2) {
      return baseHeight + (features.length * featureHeight) + bottomPadding;
    } else {
      const contentHeight = features.length * featureHeight;
      const spacingAdjustment = Math.max(0, (features.length - 1) * 12);
      return baseHeight + contentHeight + spacingAdjustment + bottomPadding;
    }
  };

  const expandedHeight = calculateExpandedHeight();

  return (
    <div 
      className={`w-full relative bg-white rounded-lg outline outline-offset-[-1px] ${outlineClass} transition-all duration-200 ease-in-out overflow-hidden`} 
      style={{
        ...outlineStyle,
        height: isExpanded ? `${expandedHeight}px` : '96px'
      }}
    >
      {/* Title */}
      <div className="w-80 h-14 left-[24px] top-[24px] absolute inline-flex justify-start items-start">
        <div className="flex-1 justify-start text-stone-900 text-2xl font-semibold font-['Inter'] leading-7">
          {title}<br/>
        </div>
      </div>
      
      {/* Features (expanded) */}
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
      
      {/* Collapse toggle */}
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
