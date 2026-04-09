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
  appleSoftwareUpdateConfig,
  microsoftCredentialHarvestConfig,
  bankLoginProtocolDeceptionConfig,
  googleAccountRecoveryConfig,
  paypalConfirmationScamConfig,
} from '../constants/URL_config.js';

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
    'typosquatting':               appleSoftwareUpdateConfig,            //  Brand impersonation through misspelling
    'subdomainSpoofing':           microsoftCredentialHarvestConfig,     // Legitimate-looking subdomain masking malicious parent domain
    'httpsprotocolDeception':      bankLoginProtocolDeceptionConfig,     //  Embedding 'https' in domain name while using unencrypted HTTP
    'homoglyph':                   googleAccountRecoveryConfig,          // Using Cyrillic characters that look identical to Latin characters
    'credentalHarvesting':         paypalConfirmationScamConfig,         // : URL encoding + nested subdomains + credentials in multiple forms
  }
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
