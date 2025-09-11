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
 * @returns {string} 'thumbsUp' or 'thumbsDown'
 */
export const classifyFeature = (featureName, featureValue) => {
  const name = featureName.toLowerCase();
  const value = featureValue.toLowerCase();
  
  // URL String Analysis
  if (name.includes('entropy')) {
    if (value.includes('very high')) return 'thumbsDown';
    if (value.includes('high')) return 'thumbsDown';
    if (value.includes('medium')) return 'thumbsUp';
    if (value.includes('low')) return 'thumbsUp';
    return 'thumbsUp';
  }
  
  if (name.includes('length')) {
    const length = parseInt(value);
    if (length > 80) return 'thumbsDown';
    if (length > 60) return 'thumbsDown';
    if (length > 40) return 'thumbsUp';
    return 'thumbsUp';
  }
  
  if (name.includes('letter ratio')) {
    const ratio = parseFloat(value);
    if (ratio < 0.5) return 'thumbsDown';
    if (ratio < 0.6) return 'thumbsDown';
    if (ratio > 0.7) return 'thumbsUp';
    return 'thumbsUp';
  }
  
  if (name.includes('numeric count')) {
    const count = parseInt(value);
    if (count > 8) return 'thumbsDown';
    if (count > 5) return 'thumbsDown';
    if (count > 2) return 'thumbsUp';
    return 'thumbsUp';
  }
  
  if (name.includes('out of place http') || name.includes('out of place www')) {
    const count = parseInt(value);
    return count > 0 ? 'thumbsDown' : 'thumbsUp';
  }
  
  if (name.includes('special characters count')) {
    const count = parseInt(value);
    if (count > 30) return 'thumbsDown';
    if (count > 20) return 'thumbsDown';
    if (count > 10) return 'thumbsUp';
    return 'thumbsUp';
  }
  
  if (name.includes('special characters ratio')) {
    const ratio = parseFloat(value);
    if (ratio > 0.4) return 'thumbsDown';
    if (ratio > 0.3) return 'thumbsDown';
    if (ratio > 0.2) return 'thumbsUp';
    return 'thumbsUp';
  }
  
  if (name.includes('unusual characters')) {
    const count = parseInt(value);
    return count > 0 ? 'thumbsDown' : 'thumbsUp';
  }
  
  // Domain Characteristics
  if (name.includes('active time') || name.includes('lifetime')) {
    const days = parseInt(value);
    if (days < 30) return 'thumbsDown';
    if (days < 90) return 'thumbsDown';
    if (days < 180) return 'thumbsDown';
    if (days > 365) return 'thumbsUp';
    return 'thumbsUp';
  }
  
  if (name.includes('host')) {
    if (value.includes('ethz.ch')) return 'thumbsUp';
    if (value.includes('google.com')) return 'thumbsUp';
    if (value.includes('amazon.com')) return 'thumbsUp';
    if (value.includes('free-gift')) return 'thumbsDown';
    if (value.includes('secure-banking')) return 'thumbsDown';
    if (value.includes('claim-now')) return 'thumbsDown';
    if (value.includes('verification')) return 'thumbsDown';
    return 'thumbsUp';
  }
  
  if (name.includes('number of directories')) {
    const count = parseInt(value);
    if (count > 5) return 'thumbsDown';
    if (count > 4) return 'thumbsDown';
    if (count > 3) return 'thumbsUp';
    return 'thumbsUp';
  }
  
  if (name.includes('top level domain')) {
    if (value.includes('.ch')) return 'thumbsUp';
    if (value.includes('.com')) return 'thumbsUp';
    if (value.includes('.org')) return 'thumbsUp';
    if (value.includes('.net')) return 'thumbsUp';
    if (value.includes('.xyz')) return 'thumbsDown';
    if (value.includes('.top')) return 'thumbsDown';
    if (value.includes('.club')) return 'thumbsDown';
    return 'thumbsDown';
  }
  
  // DNS & Network
  if (name.includes('similarity of name server names')) {
    if (value.includes('high')) return 'thumbsUp';
    if (value.includes('medium')) return 'thumbsUp';
    if (value.includes('low')) return 'thumbsDown';
    return 'thumbsUp';
  }
  
  if (name.includes('number of mail exchange records')) {
    const count = parseInt(value);
    if (count >= 2 && count <= 5) return 'thumbsUp';
    if (count === 1) return 'thumbsUp';
    if (count === 0) return 'thumbsDown';
    return 'thumbsUp';
  }
  
  if (name.includes('number of name servers')) {
    const count = parseInt(value);
    if (count >= 2 && count <= 6) return 'thumbsUp';
    if (count === 1) return 'thumbsDown';
    return 'thumbsUp';
  }
  
  // Encryption & HTTP
  if (name.includes('http response')) {
    return value.includes('200') ? 'thumbsUp' : 'thumbsDown';
  }
  
  if (name.includes('ssl enabled')) {
    return value.includes('yes') || value.includes('true') ? 'thumbsUp' : 'thumbsDown';
  }
  
  // Webpage Content
  if (name.includes('number of html elements')) {
    const count = parseInt(value);
    if (count > 800) return 'thumbsDown';
    if (count > 500) return 'thumbsDown';
    if (count > 200) return 'thumbsUp';
    return 'thumbsUp';
  }
  
  // Geographical & Hosting
  if (name.includes('registration country')) {
    if (value.includes('switzerland')) return 'thumbsUp';
    if (value.includes('united states')) return 'thumbsUp';
    if (value.includes('germany')) return 'thumbsUp';
    if (value.includes('united kingdom')) return 'thumbsUp';
    if (value.includes('panama')) return 'thumbsDown';
    if (value.includes('costa rica')) return 'thumbsDown';
    if (value.includes('marshall islands')) return 'thumbsDown';
    return 'thumbsUp';
  }
  
  if (name.includes('number of countries for ip lookup')) {
    const count = parseInt(value);
    if (count > 5) return 'thumbsDown';
    if (count > 3) return 'thumbsDown';
    if (count <= 3) return 'thumbsUp';
    return 'thumbsUp';
  }
  
  // Default to thumbs up for unknown features
  return 'thumbsUp';
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
 * @param {Array} classifications - Array of 'thumbsUp' or 'thumbsDown' values
 * @returns {boolean} true if majority is positive (thumbsUp), false otherwise
 */
export const getMajorityClassification = (classifications) => {
  const thumbsUpCount = classifications.filter(icon => icon === 'thumbsUp').length;
  const thumbsDownCount = classifications.filter(icon => icon === 'thumbsDown').length;
  return thumbsUpCount >= thumbsDownCount;
};
