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
  url: "https://discount-electronics-store.net/shop/electronics/phones/smartphones/prizes",
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "High" },
      { name: "Length", value: "78 characters" },
      { name: "Letter Count", value: "58 letters" },
      { name: "Letter Ratio", value: "74.4%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "20 characters" },
      { name: "Special Characters Ratio", value: "25.6%" },
      { name: "Unusual Characters Count", value: "2 characters" },
      { name: "Unusual Characters Ratio", value: "2.6%" }
    ]
  },
  
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "200 days" },
      { name: "Host", value: "discount-electronics-store.net" },
      { name: "Lifetime (Days)", value: "200 days" },
      { name: "Number of Directories", value: "5 directories" },
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
      { name: "Similarity of Name Server Names", value: "Low" },
      { name: "Number of Mail Exchange Records", value: "0 records" },
      { name: "Number of Name Servers", value: "1 server" }
    ]
  },
  
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "420 elements" }
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

// Ambiguous malicious URL (phishing site that looks legitimate)
export const ambiguousMaliciousUrlConfig = {
  url: "https://secure-banking-login-verification.com/аccount/security/updаte",
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
      { name: "Unusual Characters Count", value: "2 characters" },
      { name: "Unusual Characters Ratio", value: "2.8%" }
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

// Additional URL configurations for testing variety

// Legitimate news website
export const newsUrlConfig = {
  url: "https://www.bbc.com/news/technology/2024/01/15/artificial-intelligence-breakthrough",
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Medium" },
      { name: "Length", value: "95 characters" },
      { name: "Letter Count", value: "78 letters" },
      { name: "Letter Ratio", value: "82.1%" },
      { name: "Numeric Count", value: "4 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "13 characters" },
      { name: "Special Characters Ratio", value: "13.7%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "10950 days" },
      { name: "Host", value: "www.bbc.com" },
      { name: "Lifetime (Days)", value: "10950 days" },
      { name: "Number of Directories", value: "4 directories" },
      { name: "Path", value: "/news/technology/2024/01/15/" },
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
      { name: "Similarity of Name Server Names", value: "High" },
      { name: "Number of Mail Exchange Records", value: "5 records" },
      { name: "Number of Name Servers", value: "8 servers" }
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
      { name: "Registration Country", value: "United Kingdom" },
      { name: "Number of Countries for IP Lookup", value: "2 countries" }
    ]
  }
};

// E-commerce shopping site
export const shoppingUrlConfig = {
  url: "https://shop.amazon.com/dp/B08N5WRWNW/ref=sr_1_1",
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "High" },
      { name: "Length", value: "68 characters" },
      { name: "Letter Count", value: "45 letters" },
      { name: "Letter Ratio", value: "66.2%" },
      { name: "Numeric Count", value: "10 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "13 characters" },
      { name: "Special Characters Ratio", value: "19.1%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "10950 days" },
      { name: "Host", value: "shop.amazon.com" },
      { name: "Lifetime (Days)", value: "10950 days" },
      { name: "Number of Directories", value: "2 directories" },
      { name: "Path", value: "/dp/B08N5WRWNW/" },
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
      { name: "Similarity of Name Server Names", value: "High" },
      { name: "Number of Mail Exchange Records", value: "10 records" },
      { name: "Number of Name Servers", value: "12 servers" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "1250 elements" }
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

// Educational institution
export const educationUrlConfig = {
  url: "https://web.mit.edu/18.06/www/Spring17/Spring17.html",
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Medium" },
      { name: "Length", value: "58 characters" },
      { name: "Letter Count", value: "42 letters" },
      { name: "Letter Ratio", value: "72.4%" },
      { name: "Numeric Count", value: "4 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "12 characters" },
      { name: "Special Characters Ratio", value: "20.7%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "10950 days" },
      { name: "Host", value: "web.mit.edu" },
      { name: "Lifetime (Days)", value: "10950 days" },
      { name: "Number of Directories", value: "4 directories" },
      { name: "Path", value: "/18.06/www/Spring17/" },
      { name: "Top Level Domain", value: ".edu" }
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
      { name: "Number of Mail Exchange Records", value: "3 records" },
      { name: "Number of Name Servers", value: "6 servers" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "180 elements" }
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "United States" },
      { name: "Number of Countries for IP Lookup", value: "1 country" }
    ]
  }
};

// Government website
export const governmentUrlConfig = {
  url: "https://www.usa.gov/visas-and-immigration",
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Low" },
      { name: "Length", value: "45 characters" },
      { name: "Letter Count", value: "35 letters" },
      { name: "Letter Ratio", value: "77.8%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "10 characters" },
      { name: "Special Characters Ratio", value: "22.2%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "7300 days" },
      { name: "Host", value: "www.usa.gov" },
      { name: "Lifetime (Days)", value: "7300 days" },
      { name: "Number of Directories", value: "1 directory" },
      { name: "Path", value: "/visas-and-immigration" },
      { name: "Top Level Domain", value: ".gov" }
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
      { name: "Number of Mail Exchange Records", value: "4 records" },
      { name: "Number of Name Servers", value: "8 servers" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "450 elements" }
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "United States" },
      { name: "Number of Countries for IP Lookup", value: "1 country" }
    ]
  }
};

// Social media platform
export const socialMediaUrlConfig = {
  url: "https://www.linkedin.com/in/johndoe123/recent-activity/",
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Medium" },
      { name: "Length", value: "58 characters" },
      { name: "Letter Count", value: "45 letters" },
      { name: "Letter Ratio", value: "77.6%" },
      { name: "Numeric Count", value: "3 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "10 characters" },
      { name: "Special Characters Ratio", value: "17.2%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "7300 days" },
      { name: "Host", value: "www.linkedin.com" },
      { name: "Lifetime (Days)", value: "7300 days" },
      { name: "Number of Directories", value: "3 directories" },
      { name: "Path", value: "/in/johndoe123/recent-activity/" },
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
      { name: "Similarity of Name Server Names", value: "High" },
      { name: "Number of Mail Exchange Records", value: "6 records" },
      { name: "Number of Name Servers", value: "10 servers" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "890 elements" }
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "United States" },
      { name: "Number of Countries for IP Lookup", value: "3 countries" }
    ]
  }
};

// Suspicious phishing attempt
export const phishingUrlConfig = {
  url: "https://secure-paypal-verification-urgent.tk/account/security/update-now",
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Very High" },
      { name: "Length", value: "78 characters" },
      { name: "Letter Count", value: "52 letters" },
      { name: "Letter Ratio", value: "66.7%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "26 characters" },
      { name: "Special Characters Ratio", value: "33.3%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "15 days" },
      { name: "Host", value: "secure-paypal-verification-urgent.tk" },
      { name: "Lifetime (Days)", value: "15 days" },
      { name: "Number of Directories", value: "4 directories" },
      { name: "Path", value: "/account/security/update-now" },
      { name: "Top Level Domain", value: ".tk" }
    ]
  },
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" },
      { name: "SSL Enabled", value: "No" }
    ]
  },
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "Very Low" },
      { name: "Number of Mail Exchange Records", value: "0 records" },
      { name: "Number of Name Servers", value: "1 server" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "1200 elements" }
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "Tokelau" },
      { name: "Number of Countries for IP Lookup", value: "12 countries" }
    ]
  }
};

// Cryptocurrency scam
export const cryptoScamUrlConfig = {
  url: "https://bitcoin-double-investment-now.cf/secure-wallet/claim-rewards",
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Very High" },
      { name: "Length", value: "75 characters" },
      { name: "Letter Count", value: "48 letters" },
      { name: "Letter Ratio", value: "64.0%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "27 characters" },
      { name: "Special Characters Ratio", value: "36.0%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "8 days" },
      { name: "Host", value: "bitcoin-double-investment-now.cf" },
      { name: "Lifetime (Days)", value: "8 days" },
      { name: "Number of Directories", value: "3 directories" },
      { name: "Path", value: "/secure-wallet/claim-rewards" },
      { name: "Top Level Domain", value: ".cf" }
    ]
  },
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" },
      { name: "SSL Enabled", value: "No" }
    ]
  },
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "Very Low" },
      { name: "Number of Mail Exchange Records", value: "0 records" },
      { name: "Number of Name Servers", value: "1 server" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "950 elements" }
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "Central African Republic" },
      { name: "Number of Countries for IP Lookup", value: "15 countries" }
    ]
  }
};

// Fake tech support
export const techSupportScamUrlConfig = {
  url: "https://microsoft-security-alert-urgent.ml/support/remote-access/fix-now",
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "High" },
      { name: "Length", value: "72 characters" },
      { name: "Letter Count", value: "52 letters" },
      { name: "Letter Ratio", value: "72.2%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "20 characters" },
      { name: "Special Characters Ratio", value: "27.8%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "12 days" },
      { name: "Host", value: "microsoft-security-alert-urgent.ml" },
      { name: "Lifetime (Days)", value: "12 days" },
      { name: "Number of Directories", value: "4 directories" },
      { name: "Path", value: "/support/remote-access/fix-now" },
      { name: "Top Level Domain", value: ".ml" }
    ]
  },
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" },
      { name: "SSL Enabled", value: "No" }
    ]
  },
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "Very Low" },
      { name: "Number of Mail Exchange Records", value: "0 records" },
      { name: "Number of Name Servers", value: "1 server" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "1100 elements" }
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "Mali" },
      { name: "Number of Countries for IP Lookup", value: "18 countries" }
    ]
  }
};

// Fake lottery winner
export const lotteryScamUrlConfig = {
  url: "https://euro-millions-winner-claim-prize.gq/verify-identity/collect-now",
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Very High" },
      { name: "Length", value: "68 characters" },
      { name: "Letter Count", value: "48 letters" },
      { name: "Letter Ratio", value: "70.6%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "20 characters" },
      { name: "Special Characters Ratio", value: "29.4%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "6 days" },
      { name: "Host", value: "euro-millions-winner-claim-prize.gq" },
      { name: "Lifetime (Days)", value: "6 days" },
      { name: "Number of Directories", value: "3 directories" },
      { name: "Path", value: "/verify-identity/collect-now" },
      { name: "Top Level Domain", value: ".gq" }
    ]
  },
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" },
      { name: "SSL Enabled", value: "No" }
    ]
  },
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "Very Low" },
      { name: "Number of Mail Exchange Records", value: "0 records" },
      { name: "Number of Name Servers", value: "1 server" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "800 elements" }
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "Equatorial Guinea" },
      { name: "Number of Countries for IP Lookup", value: "20 countries" }
    ]
  }
};

// Fake bank phishing
export const bankPhishingUrlConfig = {
  url: "https://chase-bank-security-update-required.ga/online-banking/login/verify",
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "High" },
      { name: "Length", value: "74 characters" },
      { name: "Letter Count", value: "58 letters" },
      { name: "Letter Ratio", value: "78.4%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "16 characters" },
      { name: "Special Characters Ratio", value: "21.6%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "10 days" },
      { name: "Host", value: "chase-bank-security-update-required.ga" },
      { name: "Lifetime (Days)", value: "10 days" },
      { name: "Number of Directories", value: "4 directories" },
      { name: "Path", value: "/online-banking/login/verify" },
      { name: "Top Level Domain", value: ".ga" }
    ]
  },
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" },
      { name: "SSL Enabled", value: "No" }
    ]
  },
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "Very Low" },
      { name: "Number of Mail Exchange Records", value: "0 records" },
      { name: "Number of Name Servers", value: "1 server" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "1050 elements" }
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "Gabon" },
      { name: "Number of Countries for IP Lookup", value: "22 countries" }
    ]
  }
};

// Fake social media verification
export const socialMediaScamUrlConfig = {
  url: "https://instagram-account-verification-urgent.tk/verify/identity/restore-access",
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Very High" },
      { name: "Length", value: "82 characters" },
      { name: "Letter Count", value: "62 letters" },
      { name: "Letter Ratio", value: "75.6%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "20 characters" },
      { name: "Special Characters Ratio", value: "24.4%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "7 days" },
      { name: "Host", value: "instagram-account-verification-urgent.tk" },
      { name: "Lifetime (Days)", value: "7 days" },
      { name: "Number of Directories", value: "4 directories" },
      { name: "Path", value: "/verify/identity/restore-access" },
      { name: "Top Level Domain", value: ".tk" }
    ]
  },
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" },
      { name: "SSL Enabled", value: "No" }
    ]
  },
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "Very Low" },
      { name: "Number of Mail Exchange Records", value: "0 records" },
      { name: "Number of Name Servers", value: "1 server" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "1150 elements" }
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "Tokelau" },
      { name: "Number of Countries for IP Lookup", value: "25 countries" }
    ]
  }
};

// Default to ETH URL
export const featureConfigs = ethUrlConfig;
