/**
 * Feature Configuration
 * 
 * This file contains the configuration data for all six feature boxes.
 * Each feature box has a title and an array of features with name and value properties.
 */

export const featureConfigs = {
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "URL Length", value: "67 characters" },
      { name: "Protocol", value: "HTTPS" },
      { name: "Special Characters", value: "8 instances" }
    ],
    seed: 42
  },
  
  domainCharacteristics: {
    title: "Domain Characteristics",
    features: [
      { name: "Domain Age", value: "2 years" },
      { name: "Domain Reputation", value: "Suspicious" },
      { name: "Subdomain Count", value: "3 subdomains" }
    ],
    seed: 42
  },
  
  encryptionHttp: {
    title: "Encryption & HTTP",
    features: [
      { name: "SSL Certificate", value: "Valid" },
      { name: "HTTP Status", value: "200 OK" },
      { name: "Security Headers", value: "Present" }
    ],
    seed: 42
  },
  
  dnsNetwork: {
    title: "DNS & Network",
    features: [
      { name: "DNS Records", value: "Complete" },
      { name: "IP Reputation", value: "Clean" },
      { name: "Network Location", value: "United States" }
    ],
    seed: 42
  },
  
  webpageContent: {
    title: "Webpage Content",
    features: [
      { name: "Content Type", value: "HTML" },
      { name: "JavaScript", value: "Minimal" },
      { name: "External Links", value: "5 links" }
    ],
    seed: 42
  },
  
  geographicalHosting: {
    title: "Geographical & Hosting",
    features: [
      { name: "Server Location", value: "United States" },
      { name: "Hosting Provider", value: "AWS" },
      { name: "Geographic Risk", value: "Low" }
    ],
    seed: 42
  }
};
