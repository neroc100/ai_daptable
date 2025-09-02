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
    ],
    seed: 42
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
    ],
    seed: 42
  },
  
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" },
      { name: "SSL Enabled", value: "Yes" }
    ],
    seed: 42
  },
  
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "High" },
      { name: "Number of Mail Exchange Records", value: "2 records" },
      { name: "Number of Name Servers", value: "4 servers" }
    ],
    seed: 42
  },
  
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "156 elements" }
    ],
    seed: 42
  },
  
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "Switzerland" },
      { name: "Number of Countries for IP Lookup", value: "3 countries" }
    ],
    seed: 42
  }
};
