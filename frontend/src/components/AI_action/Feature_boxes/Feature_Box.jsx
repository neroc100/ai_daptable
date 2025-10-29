import React, { useState, useMemo } from 'react';
import { ArrowUpRight, ArrowDownRight, ChevronUp, ChevronDown } from 'lucide-react';
import { classifyFeatures, getMajorityClassification } from '../../../composables/handleFeatureClassification';

function Feature_Box({ 
  isAnalysisDisplayed = false, 
  title, 
  features
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  const featureIcons = useMemo(() => classifyFeatures(features), [features]);
  const majorityIsPositive = getMajorityClassification(featureIcons);

  const handleArrowClick = () => setIsExpanded(!isExpanded);

  // Color the box green or red depending on majority classification
  const backgroundColor = isAnalysisDisplayed
    ? majorityIsPositive
      ? '#F2FAF4' 
      : '#FFF6F6' 
    : 'rgba(0, 0, 0, 0.02)';

  const calculateExpandedHeight = () => {
    const baseHeight = 72;
    const featureHeight = 40;
    const bottomPadding = 32;
    const spacingAdjustment = Math.max(0, (features.length - 1) * 8);
    return baseHeight + (features.length * featureHeight) + spacingAdjustment + bottomPadding;
  };

  const expandedHeight = calculateExpandedHeight();

  return (
    <div
      className={`w-full relative rounded-2xl transition-all duration-300 ease-in-out overflow-hidden shadow-sm hover:shadow-md`}
      style={{
        backgroundColor,
        height: isExpanded ? `${expandedHeight}px` : '64px'
      }}
    >
      {/* Title */}
      <div className="absolute top-4 left-4 flex items-center justify-between pr-8">
        <div className="text-gray-900 font-semibold text-base">{title}</div>
      </div>

      {/* Features */}
      {isExpanded && (
        <div
          className="absolute flex flex-col space-y-2 left-4 right-4 top-[72px]"
          style={{
            height: `${expandedHeight - 88}px`,
            justifyContent: features.length <= 3 ? 'flex-start' : 'space-between'
          }}
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              {isAnalysisDisplayed && (
                featureIcons[index] === 'thumbsUp' ? (
                  <ArrowUpRight className="w-5 h-5 mt-1" style={{ color: '#74C69D' }} />
                ) : (
                  <ArrowDownRight className="w-5 h-5 mt-1" style={{ color: '#E57373' }} />
                )
              )}
              <div className="flex flex-col justify-start flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">
                  {feature.name}
                </div>
                <div className="text-xs text-gray-500 truncate">
                  {feature.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Collapse toggle */}
      <div
        className="absolute top-4 right-4 cursor-pointer hover:opacity-70 transition-opacity"
        onClick={handleArrowClick}
      >
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-gray-700" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-700" />
        )}
      </div>
    </div>
  );
}

export default Feature_Box;
