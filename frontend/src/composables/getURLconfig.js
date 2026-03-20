import { 
eprintIacrConfig,
  gnuFtpConfig,
  princetonMirrorConfig,
  freebsdPeopleConfig,
  pkgGoDevConfig,
  googleSupportConfig,
  bbcDownloadsConfig,
  appleDevNewsConfig,
  cdcDataApiConfig,
  githubMediaTensorflowConfig,
  // ─── Malicious configs ──────────────────────────────────────────────────────
  noreplinfobluewinConfig,
  linkedlnContactConfig,
  kungaguesthouseConfig,
  resolutionCenterAccountConfig,
  gatcoinsConfig,
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
    // Legitimate
    'academic':          eprintIacrConfig,         // eprint.iacr.org — research paper PDF
    'softwareDownload':  gnuFtpConfig,              // ftp.gnu.org — open-source archive
    'education':         princetonMirrorConfig,     // mirror.math.princeton.edu — .edu mirror
    'personalPage':      freebsdPeopleConfig,       // people.freebsd.org — personal dev page
    'developer':         pkgGoDevConfig,            // pkg.go.dev — package docs
    'support':           googleSupportConfig,       // support.google.com — help article
    'media':             bbcDownloadsConfig,        // downloads.bbc.co.uk — podcast MP3
    'news':              appleDevNewsConfig,        // developer.apple.com — release notes
    'government':        cdcDataApiConfig,          // data.cdc.gov — .gov API/CSV
    'openSource':        githubMediaTensorflowConfig, // media.githubusercontent.com — raw file

    // Malicious
    'phishing':          noreplinfobluewinConfig,   // fake login on free host, no SSL
    'socialMediaScam':   linkedlnContactConfig,     // LinkedIn typosquat + redirect
    'invoiceFraud':      kungaguesthouseConfig,     // subdomain abuse, fake invoice PDF
    'accountPhishing':   resolutionCenterAccountConfig, // fake resolution-center domain
    'cryptoScam':        gatcoinsConfig,            // fake crypto site serving .exe
  };

  return urlConfigs[urlType] || eprintIacrConfig; // Default to eprintIacrConfig if not found
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
