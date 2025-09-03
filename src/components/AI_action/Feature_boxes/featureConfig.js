/**
 * Feature Configuration
 * 
 * This file contains the configuration data for all six feature boxes.
 * Each feature box has a title and an array of features with name and value properties.
 */

// ETH Zurich URL (legitimate)
export const ethUrlConfig = {
  url: "https://spg.ethz.ch/group/people/doctoral-students/neele-roch.html",
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "High" },
      { name: "Length", value: "67 characters" },
      { name: "Letter Count", value: "47 letters" },
      { name: "Letter Ratio", value: "70.1%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "20 characters" },
      { name: "Special Characters Ratio", value: "29.9%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "730 days" },
      { name: "Host", value: "spg.ethz.ch" },
      { name: "Lifetime (Days)", value: "730 days" },
      { name: "Number of Directories", value: "3 directories" },
      { name: "Path", value: "/group/people/doctoral-students/" },
      { name: "Top Level Domain", value: ".ch" }
    ]
  },
  
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" },
      { name: "SSL Enabled", value: "Yes" }
    ]
  },
  
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "High" },
      { name: "Number of Mail Exchange Records", value: "2 records" },
      { name: "Number of Name Servers", value: "4 servers" }
    ]
  },
  
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "156 elements" }
    ]
  },
  
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "Switzerland" },
      { name: "Number of Countries for IP Lookup", value: "3 countries" }
    ]
  }
};

// Malicious URL example
export const maliciousUrlConfig = {
  url: "https://free-gift-card-claim-now.xyz/secure-verification/account-update",
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Very High" },
      { name: "Length", value: "89 characters" },
      { name: "Letter Count", value: "32 letters" },
      { name: "Letter Ratio", value: "36.0%" },
      { name: "Numeric Count", value: "8 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "49 characters" },
      { name: "Special Characters Ratio", value: "55.1%" },
      { name: "Unusual Characters Count", value: "3 characters" },
      { name: "Unusual Characters Ratio", value: "3.4%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "45 days" },
      { name: "Host", value: "free-gift-card-claim-now.xyz" },
      { name: "Lifetime (Days)", value: "45 days" },
      { name: "Number of Directories", value: "5 directories" },
      { name: "Path", value: "/secure-verification/account-update" },
      { name: "Top Level Domain", value: ".xyz" }
    ]
  },
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" },
      { name: "SSL Enabled", value: "Yes" }
    ]
  },
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "Low" },
      { name: "Number of Mail Exchange Records", value: "1 record" },
      { name: "Number of Name Servers", value: "1 server" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "850 elements" }
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "Panama" },
      { name: "Number of Countries for IP Lookup", value: "7 countries" }
    ]
  }
};

// Ambiguous legitimate URL (e-commerce site with some suspicious features)
export const ambiguousLegitimateUrlConfig = {
  url: "https://discount-electronics-store.net/shop/electronics/phones/smartphones",
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Medium" },
      { name: "Length", value: "78 characters" },
      { name: "Letter Count", value: "58 letters" },
      { name: "Letter Ratio", value: "74.4%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "20 characters" },
      { name: "Special Characters Ratio", value: "25.6%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "180 days" },
      { name: "Host", value: "discount-electronics-store.net" },
      { name: "Lifetime (Days)", value: "180 days" },
      { name: "Number of Directories", value: "4 directories" },
      { name: "Path", value: "/shop/electronics/phones/" },
      { name: "Top Level Domain", value: ".net" }
    ]
  },
  
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" },
      { name: "SSL Enabled", value: "Yes" }
    ]
  },
  
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "Medium" },
      { name: "Number of Mail Exchange Records", value: "1 record" },
      { name: "Number of Name Servers", value: "2 servers" }
    ]
  },
  
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "320 elements" }
    ]
  },
  
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "United States" },
      { name: "Number of Countries for IP Lookup", value: "5 countries" }
    ]
  }
};

// Ambiguous malicious URL (phishing site that looks legitimate)
export const ambiguousMaliciousUrlConfig = {
  url: "https://secure-banking-login-verification.com/account/security/update",
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Medium" },
      { name: "Length", value: "72 characters" },
      { name: "Letter Count", value: "55 letters" },
      { name: "Letter Ratio", value: "76.4%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "17 characters" },
      { name: "Special Characters Ratio", value: "23.6%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "120 days" },
      { name: "Host", value: "secure-banking-login-verification.com" },
      { name: "Lifetime (Days)", value: "120 days" },
      { name: "Number of Directories", value: "3 directories" },
      { name: "Path", value: "/account/security/" },
      { name: "Top Level Domain", value: ".com" }
    ]
  },
  
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" },
      { name: "SSL Enabled", value: "Yes" }
    ]
  },
  
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "Low" },
      { name: "Number of Mail Exchange Records", value: "0 records" },
      { name: "Number of Name Servers", value: "1 server" }
    ]
  },
  
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "680 elements" }
    ]
  },
  
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "Costa Rica" },
      { name: "Number of Countries for IP Lookup", value: "6 countries" }
    ]
  }
};

// Default to ETH URL
export const featureConfigs = ethUrlConfig;
