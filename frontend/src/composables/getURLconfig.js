import { 
  ethUrlConfig,
  maliciousUrlConfig,
  ambiguousLegitimateUrlConfig,
  ambiguousMaliciousUrlConfig,
  newsUrlConfig,
  shoppingUrlConfig,
  educationUrlConfig,
  governmentUrlConfig,
  socialMediaUrlConfig,
  phishingUrlConfig,
  cryptoScamUrlConfig,
  techSupportScamUrlConfig,
  lotteryScamUrlConfig,
  bankPhishingUrlConfig,
  socialMediaScamUrlConfig
} from '../constants/URL_config';

/**
 * Get URL configuration based on URL type
 * 
 * This function maps URL type strings to their corresponding configuration objects.
 * It provides a centralized way to access URL configurations throughout the application.
 * 
 * @param {string} urlType - The URL type (e.g., 'eth', 'malicious', 'phishing', etc.)
 * @returns {Object} The URL configuration object for the specified type
 * 
 * @example
 * // Get ETH URL configuration
 * const config = getUrlConfig('eth');
 * console.log(config.malicious); // false
 * 
 * @example
 * // Get phishing URL configuration
 * const config = getUrlConfig('phishing');
 * console.log(config.malicious); // true
 */
export const getUrlConfig = (urlType) => {
  const urlConfigs = {
    'eth': ethUrlConfig,
    'malicious': maliciousUrlConfig,
    'ambiguousLegitimate': ambiguousLegitimateUrlConfig,
    'ambiguousMalicious': ambiguousMaliciousUrlConfig,
    'news': newsUrlConfig,
    'shopping': shoppingUrlConfig,
    'education': educationUrlConfig,
    'government': governmentUrlConfig,
    'socialMedia': socialMediaUrlConfig,
    'phishing': phishingUrlConfig,
    'cryptoScam': cryptoScamUrlConfig,
    'techSupportScam': techSupportScamUrlConfig,
    'lotteryScam': lotteryScamUrlConfig,
    'bankPhishing': bankPhishingUrlConfig,
    'socialMediaScam': socialMediaScamUrlConfig
  };
  
  return urlConfigs[urlType] || ethUrlConfig; // Default to ethUrlConfig if not found
};

/**
 * Get URL classification based on URL type
 * 
 * This function determines if a URL is malicious or not based on the malicious
 * parameter in the URL configuration. It's a convenience function that combines
 * getUrlConfig with classification logic.
 * 
 * @param {string} urlType - The URL type (e.g., 'eth', 'malicious', 'phishing', etc.)
 * @returns {string} 'Malicious' or 'Non-Malicious'
 * 
 * @example
 * // Get classification for ETH URL
 * const classification = getUrlClassification('eth');
 * console.log(classification); // 'Non-Malicious'
 * 
 * @example
 * // Get classification for phishing URL
 * const classification = getUrlClassification('phishing');
 * console.log(classification); // 'Malicious'
 */
export const getUrlClassification = (urlType) => {
  const urlConfig = getUrlConfig(urlType);
  return urlConfig.malicious ? 'Malicious' : 'Non-Malicious';
};
