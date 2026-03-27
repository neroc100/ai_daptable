import React, { useState, useMemo } from 'react';
import { ArrowUpRight, ArrowDownRight, Minus, ChevronUp, ChevronDown } from 'lucide-react';
import { classifyFeatures, getMajorityClassification } from '../../../composables/handleFeatureClassification';

function Feature_Box({ 
  isAnalysisDisplayed = false, 
  title, 
  features
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  const featureIcons = useMemo(() => classifyFeatures(features), [features]);
  const majorityClassification = getMajorityClassification(featureIcons);

  const handleArrowClick = () => setIsExpanded(!isExpanded);

  // Color the box based on majority classification
  const backgroundColor = isAnalysisDisplayed
    ? majorityClassification === 'positive'
      ? '#F2FAF4'
      : majorityClassification === 'negative'
      ? '#FFF6F6'
      : '#F9F9F9'
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
      className={`w-full relative rounded-lg transition-all duration-300 ease-in-out overflow-hidden shadow-md hover:shadow-lg`}
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
                featureIcons[index] === 'positive' ? (
                  <ArrowUpRight className="w-5 h-5 mt-1" style={{ color: '#74C69D' }} />
                ) : featureIcons[index] === 'negative' ? (
                  <ArrowDownRight className="w-5 h-5 mt-1" style={{ color: '#E57373' }} />
                ) : (
                  <Minus className="w-5 h-5 mt-1" style={{ color: '#A0AEC0' }} />
                )
              )}
              <div className="flex flex-col justify-start flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">
                  {feature.name}
                </div>
                <div className="text-xs text-gray-500 break-words">
                  {feature.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Feature_Box;
