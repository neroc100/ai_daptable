/**
 * Handle Feature Classification Composable
 * 
 * This composable provides functionality for classifying features as thumbs up or down
 * based on security risk assessment heuristics. It evaluates various URL, domain,
 * DNS, encryption, and geographical features to determine their security implications.
 */

/**
 * Classifies a single feature based on its name and value
 * 
 * @param {string} featureName - The name of the feature (case insensitive)
 * @param {string} featureValue - The value of the feature (case insensitive)
 * @returns {string} 'positive', 'negative', or 'neutral'
 */
export const classifyFeature = (featureName, featureValue) => {
  const name = featureName.toLowerCase();
  const value = featureValue.toLowerCase();
  
  // URL String Analysis
  if (name.includes('entropy')) {
    if (value.includes('very high')) return 'negative';
    if (value.includes('high')) return 'negative';
    if (value.includes('medium')) return 'neutral';
    if (value.includes('low')) return 'positive';
    return 'neutral';
  }
  
  if (name.includes('length')) {
    const length = parseInt(value);
    if (length >= 75) return 'negative';
    return 'positive';
  }
  
  if (name.includes('letter ratio')) {
    const ratio = parseFloat(value);
    if (ratio < 0.6) return 'negative';
    if (ratio > 0.7) return 'positive';
    return 'neutral';
  }
  
  if (name.includes('numeric count')) {
    return 'neutral';
  }
  
  if (name.includes('out of place http') || name.includes('out of place www')) {
    const count = parseInt(value);
    return count > 0 ? 'negative' : 'positive';
  }
  
  if (name.includes('special characters count')) {
    const count = parseInt(value);
    if (count > 15) return 'negative';
    if (count <= 15 && count > 5) return 'positive';
    return 'neutral';
  }
  
  if (name.includes('special characters ratio')) {
    const ratio = parseFloat(value);
    if (ratio >= 0.25) return 'negative';
    if (ratio >= 0.1 && ratio < 0.25) return 'positive';
    return 'neutral';
  }
  
  if (name.includes('unusual characters')) {
    const count = parseInt(value);
    return count > 0 ? 'negative' : 'positive';
  }
  
  // Domain Characteristics
  if (name.includes('active time') || name.includes('lifetime')) {
    const days = parseInt(value);
    if (days < 180) return 'negative';
    if (days > 365) return 'positive';
    return 'neutral';
  }
  
  if (name.includes('host')) {
    return 'neutral';
  }
  
  if (name.includes('number of directories')) {
    return 'neutral';
  }
  
  if (name.includes('top level domain')) {
    if (value.includes('.org')) return 'positive';
    if (value.includes('.edu')) return 'positive';
    if (value.includes('.gov')) return 'positive';
    if (value.includes('.com')) return 'neutral';
    if (value.includes('.dev')) return 'positive';
    if (value.includes('.uk')) return 'neutal';
    if (value.includes('.net')) return 'negative';
    if (value.includes('.io')) return 'negative';
    return 'neutral';
  }
  
  // DNS & Network
  if (name.includes('similarity of name server names')) {
    if (value.includes('high')) return 'positive';
    if (value.includes('medium')) return 'neutral';
    if (value.includes('low')) return 'negative';
    return 'positive';
  }
  
  if (name.includes('number of mail exchange records')) {
    return 'neutral';
  }
  
  if (name.includes('number of name servers')) {
    const count = parseInt(value);
    if (count <= 1) return 'negative';
    return 'positive';
  }
  
  // Encryption & HTTP
  if (name.includes('http response')) {
    return value.includes('200') ? 'positive' : 'negative';
  }
  
  if (name.includes('ssl enabled')) {
    return value.includes('yes') || value.includes('true') ? 'positive' : 'negative';
  }
  
  // Webpage Content
  if (name.includes('number of html elements')) {
    const count = parseInt(value);
    if (count < 30) return 'negative';
    if (count >= 30 && count < 60) return 'neutral';
    return 'positive';
  }
  if (name.includes('attachment')) {
    return value.includes('.exe') || value.includes('.php') ? 'negative' : 'positive';
  }
  
  // Geographical & Hosting
  if (name.includes('registration country')) {
    if (value.includes('united states')) return 'neutral';
    if (value.includes('france')) return 'positive';
    if (value.includes('united kingdom')) return 'neutral';
    if (value.includes('netherlands')) return 'positive';
    if (value.includes('russia')) return 'negative';
    if (value.includes('canada')) return 'positive';
    return 'positive';
  }
  
  if (name.includes('number of countries for ip lookup')) {
    const count = parseInt(value);
    if (count > 5) return 'negative';
    return 'neutral';
  }
  
  // Default to positive for unknown features
  return 'positive';
};

/**
 * Classifies an array of features
 * 
 * @param {Array} features - Array of feature objects with name and value properties
 * @returns {Array} Array of 'thumbsUp' or 'thumbsDown' classifications
 */
export const classifyFeatures = (features) => {
  return features.map(feature => classifyFeature(feature.name, feature.value));
};

/**
 * Calculates the majority classification from an array of classifications
 * 
 * @param {Array} classifications - Array of 'positive', 'negative', or 'neutral' values
 * @returns {string} 'positive', 'negative', or 'neutral' based on majority
 */
export const getMajorityClassification = (classifications) => {
  const positiveCount = classifications.filter(icon => icon === 'positive').length;
  const negativeCount = classifications.filter(icon => icon === 'negative').length;
  const neutralCount = classifications.filter(icon => icon === 'neutral').length;
  
  if (positiveCount > negativeCount && positiveCount > neutralCount) {
    return 'positive';
  } else if (negativeCount > positiveCount && negativeCount > neutralCount) {
    return 'negative';
  }
  return 'neutral';
};
