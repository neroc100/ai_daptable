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
 * @returns {JSX.Element} Unified feature box component
 */
function Feature_Box({ 
  isAnalysisDisplayed = false, 
  title, 
  features
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  // Evaluate features for security risk assessment
  const featureIcons = useMemo(() => {
    return features.map((feature) => {
      // Evaluate each feature based on security best practices and real-world indicators
      const featureName = feature.name.toLowerCase();
      const featureValue = feature.value.toLowerCase();
      
      // URL String Analysis features
      if (featureName.includes('entropy')) {
        // High entropy often indicates random/obfuscated URLs (malicious)
        if (featureValue.includes('very high')) return 'thumbsDown';
        if (featureValue.includes('high')) return 'thumbsDown';
        if (featureValue.includes('medium')) return 'thumbsUp';
        if (featureValue.includes('low')) return 'thumbsUp';
        return 'thumbsUp';
      }
      
      if (featureName.includes('length')) {
        const length = parseInt(featureValue);
        // Very long URLs (>80 chars) often indicate malicious obfuscation
        if (length > 80) return 'thumbsDown';
        if (length > 60) return 'thumbsDown';
        if (length > 40) return 'thumbsUp';
        return 'thumbsUp';
      }
      
      if (featureName.includes('letter ratio')) {
        const ratio = parseFloat(featureValue);
        // Very low letter ratio (<50%) suggests excessive special characters (malicious)
        if (ratio < 0.5) return 'thumbsDown';
        if (ratio < 0.6) return 'thumbsDown';
        if (ratio > 0.7) return 'thumbsUp';
        return 'thumbsUp';
      }
      
      if (featureName.includes('numeric count')) {
        const count = parseInt(featureValue);
        // Excessive numbers often indicate malicious obfuscation
        if (count > 8) return 'thumbsDown';
        if (count > 5) return 'thumbsDown';
        if (count > 2) return 'thumbsUp';
        return 'thumbsUp';
      }
      
      if (featureName.includes('out of place http') || featureName.includes('out of place www')) {
        const count = parseInt(featureValue);
        // Any out-of-place HTTP/WWW is suspicious
        return count > 0 ? 'thumbsDown' : 'thumbsUp';
      }
      
      if (featureName.includes('special characters count')) {
        const count = parseInt(featureValue);
        // Excessive special characters often indicate malicious obfuscation
        if (count > 30) return 'thumbsDown';
        if (count > 20) return 'thumbsDown';
        if (count > 10) return 'thumbsUp';
        return 'thumbsUp';
      }
      
      if (featureName.includes('special characters ratio')) {
        const ratio = parseFloat(featureValue);
        // High special character ratio (>40%) is suspicious
        if (ratio > 0.4) return 'thumbsDown';
        if (ratio > 0.3) return 'thumbsDown';
        if (ratio > 0.2) return 'thumbsUp';
        return 'thumbsUp';
      }
      
      if (featureName.includes('unusual characters')) {
        const count = parseInt(featureValue);
        // Any unusual characters are suspicious
        return count > 0 ? 'thumbsDown' : 'thumbsUp';
      }
      
      // Domain Characteristics features
      if (featureName.includes('active time') || featureName.includes('lifetime')) {
        const days = parseInt(featureValue);
        // Very new domains (<30 days) are highly suspicious
        if (days < 30) return 'thumbsDown';
        if (days < 90) return 'thumbsDown';
        if (days < 180) return 'thumbsDown';
        if (days > 365) return 'thumbsUp';
        return 'thumbsUp';
      }
      
      if (featureName.includes('host')) {
        // Known legitimate domains get thumbs up
        if (featureValue.includes('ethz.ch')) return 'thumbsUp';
        if (featureValue.includes('google.com')) return 'thumbsUp';
        if (featureValue.includes('amazon.com')) return 'thumbsUp';
        // Suspicious patterns get thumbs down
        if (featureValue.includes('free-gift')) return 'thumbsDown';
        if (featureValue.includes('secure-banking')) return 'thumbsDown';
        if (featureValue.includes('claim-now')) return 'thumbsDown';
        if (featureValue.includes('verification')) return 'thumbsDown';
        return 'thumbsUp';
      }
      
      if (featureName.includes('number of directories')) {
        const count = parseInt(featureValue);
        // Excessive directories (>5) can indicate malicious obfuscation
        if (count > 5) return 'thumbsDown';
        if (count > 4) return 'thumbsDown';
        if (count > 3) return 'thumbsUp';
        return 'thumbsUp';
      }
      
      if (featureName.includes('top level domain')) {
        // Trusted TLDs
        if (featureValue.includes('.ch')) return 'thumbsUp';
        if (featureValue.includes('.com')) return 'thumbsUp';
        if (featureValue.includes('.org')) return 'thumbsUp';
        if (featureValue.includes('.net')) return 'thumbsUp';
        // Suspicious TLDs
        if (featureValue.includes('.xyz')) return 'thumbsDown';
        if (featureValue.includes('.top')) return 'thumbsDown';
        if (featureValue.includes('.club')) return 'thumbsDown';
        return 'thumbsUp';
      }
      
      // DNS and Network features
      if (featureName.includes('similarity of name server names')) {
        // High similarity indicates professional infrastructure
        if (featureValue.includes('high')) return 'thumbsUp';
        if (featureValue.includes('medium')) return 'thumbsUp';
        if (featureValue.includes('low')) return 'thumbsDown';
        return 'thumbsUp';
      }
      
      if (featureName.includes('number of mail exchange records')) {
        const count = parseInt(featureValue);
        // Professional domains have 2-5 MX records
        if (count >= 2 && count <= 5) return 'thumbsUp';
        if (count === 1) return 'thumbsUp';
        if (count === 0) return 'thumbsDown';
        return 'thumbsUp';
      }
      
      if (featureName.includes('number of name servers')) {
        const count = parseInt(featureValue);
        // Professional domains have 2-6 name servers
        if (count >= 2 && count <= 6) return 'thumbsUp';
        if (count === 1) return 'thumbsDown';
        return 'thumbsUp';
      }
      
      // Encryption and HTTP features
      if (featureName.includes('http response')) {
        return featureValue.includes('200') ? 'thumbsUp' : 'thumbsDown';
      }
      
      if (featureName.includes('ssl enabled')) {
        return featureValue.includes('yes') || featureValue.includes('true') ? 'thumbsUp' : 'thumbsDown';
      }
      
      // Webpage Content features
      if (featureName.includes('number of html elements')) {
        const count = parseInt(featureValue);
        // Very high element count (>800) can indicate malicious content
        if (count > 800) return 'thumbsDown';
        if (count > 500) return 'thumbsDown';
        if (count > 200) return 'thumbsUp';
        return 'thumbsUp';
      }
      
      // Geographical and Hosting features
      if (featureName.includes('registration country')) {
        // Trusted countries
        if (featureValue.includes('switzerland')) return 'thumbsUp';
        if (featureValue.includes('united states')) return 'thumbsUp';
        if (featureValue.includes('germany')) return 'thumbsUp';
        if (featureValue.includes('united kingdom')) return 'thumbsUp';
        // Suspicious countries (often used for malicious sites)
        if (featureValue.includes('panama')) return 'thumbsDown';
        if (featureValue.includes('costa rica')) return 'thumbsDown';
        if (featureValue.includes('marshall islands')) return 'thumbsDown';
        return 'thumbsUp';
      }
      
      if (featureName.includes('number of countries for ip lookup')) {
        const count = parseInt(featureValue);
        // Too many countries (>5) can indicate malicious hosting
        if (count > 5) return 'thumbsDown';
        if (count > 3) return 'thumbsDown';
        if (count <= 3) return 'thumbsUp';
        return 'thumbsUp';
      }
      
      // Default to thumbs up for unknown features
      return 'thumbsUp';
    });
  }, [features]);

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
