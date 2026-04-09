// NOTE: The following dataset was generated without live network access.
// It is SYNTHETIC / ESTIMATED data for testing and demo purposes only.
// Do not present these values as results of actual network queries.

/*
 * ============================================
 * LEGITIMATE EXAMPLE 1: Academic Repository
 * Clear Indicators: Pristine DNS infrastructure, legitimate .org, straightforward URL, consistent geographic hosting
 * ============================================
 */
export const eprintIacrConfig = {
  url: "https://eprint.iacr.org/2020/1234.pdf",
  malicious: false,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Low" },
      { name: "Length", value: "38 characters" },
      { name: "Letter Count", value: "21 letters" },
      { name: "Letter Ratio", value: "55.3%" },
      { name: "Numeric Count", value: "8 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "9 characters" },
      { name: "Special Characters Ratio", value: "23.7%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "4,867 days" },
      { name: "Host", value: "eprint.iacr.org" },
      { name: "Lifetime (Days)", value: "4,872 days" },
      { name: "Number of Directories", value: "1 directory" },
      { name: "Path", value: "/2020/" },
      { name: "Top Level Domain", value: ".org" }
    ]
  },
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" }, // PDF served
      { name: "SSL Enabled", value: "Yes" }
    ]
  },
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "High" }, // official org hosts
      { name: "Number of Mail Exchange Records", value: "2 records" },
      { name: "Number of Name Servers", value: "5 servers" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "N/A" },
      { name: "Attachment Type", value: "PDF (Research paper)" }
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

/*
 * ============================================
 * LEGITIMATE EXAMPLE 2: Official Software Repository
 * Clear Indicators: Perfect DNS infrastructure, legitimate .org, clear software purpose, geographic consistency
 * ============================================
 */
export const gnuFtpConfig = {
  url: "https://ftp.gnu.org/gnu/wget/wget-1.21.1.tar.gz",
  malicious: false,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Medium" },
      { name: "Length", value: "47 characters" },
      { name: "Letter Count", value: "30 letters" },
      { name: "Letter Ratio", value: "63.8%" },
      { name: "Numeric Count", value: "4 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "13 characters" },
      { name: "Special Characters Ratio", value: "27.7%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "7,453 days" },
      { name: "Host", value: "ftp.gnu.org" },
      { name: "Lifetime (Days)", value: "7,459 days" },
      { name: "Number of Directories", value: "2 directories" },
      { name: "Path", value: "/gnu/wget/" },
      { name: "Top Level Domain", value: ".org" }
    ]
  },
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" }, // file served
      { name: "SSL Enabled", value: "Yes" }
    ]
  },
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "High" }, // official infra
      { name: "Number of Mail Exchange Records", value: "3 records" },
      { name: "Number of Name Servers", value: "4 servers" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "N/A" },
      { name: "Attachment Type", value: "tar.gz (Software archive)" }
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "France" },
      { name: "Number of Countries for IP Lookup", value: "1 country" }
    ]
  }
};

/*
 * ============================================
 * LEGITIMATE EXAMPLE 3: University Mirror
 * Clear Indicators: 25+ year .edu domain, HTTPS, High name server count, Princeton institutional
 * ============================================
 */
export const princetonMirrorConfig = {
  url: "https://mirror.math.princeton.edu/pub/tex-archive/",
  malicious: false,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Low" },
      { name: "Length", value: "50 characters" },
      { name: "Letter Count", value: "40 letters" },
      { name: "Letter Ratio", value: "80.0%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "10 characters" },
      { name: "Special Characters Ratio", value: "20.0%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "9,137 days" },
      { name: "Host", value: "mirror.math.princeton.edu" },
      { name: "Lifetime (Days)", value: "9,140 days" },
      { name: "Number of Directories", value: "2 directories" },
      { name: "Path", value: "/pub/tex-archive/" },
      { name: "Top Level Domain", value: ".edu" }
    ]
  },
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" }, //directory listing
      { name: "SSL Enabled", value: "Yes" }
    ]
  },
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "High" },
      { name: "Number of Mail Exchange Records", value: "2 records" },
      { name: "Number of Name Servers", value: "3 servers" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "118 elements" }
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

/*
 * ============================================
 * LEGITIMATE EXAMPLE 4: FreeBSD Community Project
 * Clear Indicators: 24+ year .org domain, HTTPS, Consistent name servers, Tilde path is standard
 * ============================================
 */
export const freebsdPeopleConfig = {
  url: "https://people.freebsd.org/~phk/",
  malicious: false,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Low" },
      { name: "Length", value: "32 characters" },
      { name: "Letter Count", value: "24 letters" },
      { name: "Letter Ratio", value: "75.0%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "8 characters" },
      { name: "Special Characters Ratio", value: "25.0%" },
      { name: "Unusual Characters Count", value: "1 character" },
      { name: "Unusual Characters Ratio", value: "3.1%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "8,912 days" },
      { name: "Host", value: "people.freebsd.org" },
      { name: "Lifetime (Days)", value: "8,915 days" },
      { name: "Number of Directories", value: "1 directory" },
      { name: "Path", value: "/~phk/" },
      { name: "Top Level Domain", value: ".org" }
    ]
  },
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" }, // personal page
      { name: "SSL Enabled", value: "Yes" }
    ]
  },
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "High" }, // project infra
      { name: "Number of Mail Exchange Records", value: "2 records" },
      { name: "Number of Name Servers", value: "3 servers" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "42 elements" }
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

/*
 * ============================================
 * LEGITIMATE EXAMPLE 5: Go Package Registry
 * Clear Indicators: 6+ year .dev domain, HTTPS, High name servers, Official Google managed
 * ============================================
 */
export const pkgGoDevConfig = {
  url: "https://pkg.go.dev/github.com/spf13/cobra",
  malicious: false,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Low" },
      { name: "Length", value: "41 characters" },
      { name: "Letter Count", value: "30 letters" },
      { name: "Letter Ratio", value: "73.2%" },
      { name: "Numeric Count", value: "2 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "9 characters" },
      { name: "Special Characters Ratio", value: "22.0%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "2,327 days" },
      { name: "Host", value: "pkg.go.dev" },
      { name: "Lifetime (Days)", value: "2,330 days" },
      { name: "Number of Directories", value: "3 directories" },
      { name: "Path", value: "/github.com/spf13/cobra" },
      { name: "Top Level Domain", value: ".dev" }
    ]
  },
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" }, // package page
      { name: "SSL Enabled", value: "Yes" }
    ]
  },
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "High" }, // managed infra
      { name: "Number of Mail Exchange Records", value: "1 record" },
      { name: "Number of Name Servers", value: "4 servers" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "237 elements" }
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

/*
 * ============================================
 * LEGITIMATE EXAMPLE 6: Google Support Documentation
 * Clear Indicators: Pristine DNS infrastructure, legitimate content type, perfect geographic match, very low entropy
 * ============================================
 */
export const googleSupportConfig = {
  url: "https://support.google.com/accounts/answer/7682439?hl=en",
  malicious: false,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Low" },
      { name: "Length", value: "56 characters" },
      { name: "Letter Count", value: "39 letters" },
      { name: "Letter Ratio", value: "69.6%" },
      { name: "Numeric Count", value: "7 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "10 characters" },
      { name: "Special Characters Ratio", value: "17.9%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "7,981 days" },
      { name: "Host", value: "support.google.com" },
      { name: "Lifetime (Days)", value: "7,984 days" },
      { name: "Number of Directories", value: "3 directories" },
      { name: "Path", value: "/accounts/answer/" },
      { name: "Top Level Domain", value: ".com" }
    ]
  },
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" }, // support article
      { name: "SSL Enabled", value: "Yes" }
    ]
  },
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "High" }, // global infra
      { name: "Number of Mail Exchange Records", value: "5 records" },
      { name: "Number of Name Servers", value: "4 servers" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "513 elements" }
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

/*
 * ============================================
 * LEGITIMATE EXAMPLE 7: BBC Media Download
 * Clear Indicators: 27+ year .uk domain, HTTPS, Multiple name servers, Established broadcaster
 * ============================================
 */
export const bbcDownloadsConfig = {
  url: "https://downloads.bbc.co.uk/podcasts/worldservice/globalnews/globalnews_20251014-2000a.mp3",
  malicious: false,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Medium" },
      { name: "Length", value: "90 characters" },
      { name: "Letter Count", value: "64 letters" },
      { name: "Letter Ratio", value: "71.1%" },
      { name: "Numeric Count", value: "13 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "13 characters" },
      { name: "Special Characters Ratio", value: "14.4%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "10,142 days" },
      { name: "Host", value: "downloads.bbc.co.uk" },
      { name: "Lifetime (Days)", value: "10,145 days" },
      { name: "Number of Directories", value: "3 directories" },
      { name: "Path", value: "/podcasts/worldservice/globalnews/" },
      { name: "Top Level Domain", value: ".uk" }
    ]
  },
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" }, // MP3 served
      { name: "SSL Enabled", value: "Yes" }
    ]
  },
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "High" }, // corporate infra
      { name: "Number of Mail Exchange Records", value: "2 records" },
      { name: "Number of Name Servers", value: "4 servers" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "N/A" }, // direct media file
      { name: "Attachment Type", value: "MP3" } // podcast episode
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "United Kingdom" },
      { name: "Number of Countries for IP Lookup", value: "1 country" }
    ]
  }
};

/*
 * ============================================
 * LEGITIMATE EXAMPLE 8: Apple Developer News
 * Clear Indicators: 21+ year .com domain, HTTPS, Multiple mail records, Global corporate infrastructure
 * ============================================
 */
export const appleDevNewsConfig = {
  url: "https://developer.apple.com/news/releases/?id=10142025a",
  malicious: false,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Low" },
      { name: "Length", value: "55 characters" },
      { name: "Letter Count", value: "37 letters" },
      { name: "Letter Ratio", value: "67.3%" },
      { name: "Numeric Count", value: "8 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "10 characters" },
      { name: "Special Characters Ratio", value: "18.2%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "7,996 days" },
      { name: "Host", value: "developer.apple.com" },
      { name: "Lifetime (Days)", value: "8,002 days" },
      { name: "Number of Directories", value: "2 directories" },
      { name: "Path", value: "/news/releases/" },
      { name: "Top Level Domain", value: ".com" }
    ]
  },
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" }, // news list
      { name: "SSL Enabled", value: "Yes" }
    ]
  },
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "High" }, // corporate
      { name: "Number of Mail Exchange Records", value: "5 records" },
      { name: "Number of Name Servers", value: "4 servers" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "223 elements" }
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

/*
 * ============================================
 * LEGITIMATE EXAMPLE 9: CDC Public Data API
 * Clear Indicators: Perfect DNS infrastructure, legitimate .gov, clear public data purpose, geographic consistency
 * ============================================
 */
export const cdcDataApiConfig = {
  url: "https://data.cdc.gov/api/views/9mfq-cb36/rows.csv?accessType=DOWNLOAD",
  malicious: false,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Low" },
      { name: "Length", value: "69 characters" },
      { name: "Letter Count", value: "53 letters" },
      { name: "Letter Ratio", value: "76.8%" },
      { name: "Numeric Count", value: "3 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "13 characters" },
      { name: "Special Characters Ratio", value: "18.8%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "4,013 days" },
      { name: "Host", value: "data.cdc.gov" },
      { name: "Lifetime (Days)", value: "4,018 days" },
      { name: "Number of Directories", value: "3 directories" },
      { name: "Path", value: "/api/views/" },
      { name: "Top Level Domain", value: ".gov" }
    ]
  },
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" }, // CSV served
      { name: "SSL Enabled", value: "Yes" }
    ]
  },
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "High" }, // gov infra
      { name: "Number of Mail Exchange Records", value: "1 record" },
      { name: "Number of Name Servers", value: "4 servers" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "N/A" }, // CSV resource
      { name: "Attachment Type", value: "CSV" } // tabular download
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

/*
 * ============================================
 * LEGITIMATE EXAMPLE 10: GitHub Raw Content
 * Clear Indicators: 11+ year .com domain, HTTPS, GitHub CDN infrastructure, Trusted host
 * ============================================
 */
export const githubMediaTensorflowConfig = {
  url: "https://media.githubusercontent.com/media/tensorflow/tensorflow/master/README.md",
  malicious: false,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Low" },
      { name: "Length", value: "78 characters" },
      { name: "Letter Count", value: "67 letters" },
      { name: "Letter Ratio", value: "85.9%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "11 characters" },
      { name: "Special Characters Ratio", value: "14.1%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "4,029 days" },
      { name: "Host", value: "media.githubusercontent.com" },
      { name: "Lifetime (Days)", value: "4,032 days" },
      { name: "Number of Directories", value: "4 directories" },
      { name: "Path", value: "/media/tensorflow/tensorflow/master/" },
      { name: "Top Level Domain", value: ".com" }
    ]
  },
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "200 OK" }, // raw README text
      { name: "SSL Enabled", value: "Yes" }
    ]
  },
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "High" }, // github infra
      { name: "Number of Mail Exchange Records", value: "0 records" },
      { name: "Number of Name Servers", value: "4 servers" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "N/A" }, // raw markdown
      { name: "Attachment Type", value: "Markdown" } // README.md
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


// MALICIOUS SAMPLES BELOW

// ============================================
// EXAMPLE 1: TYPOSQUATTING + URGENCY
// Attack Vector: Brand impersonation through misspelling
// ============================================
export const appleSoftwareUpdateConfig = {
  url: "http://applé-security-update.com/verify-account/check-status.html",
  malicious: true,
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
      { name: "Unusual Characters Count", value: "1 character" },
      { name: "Unusual Characters Ratio", value: "1.5%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "3 days" },
      { name: "Host", value: "applé-security-update.com" },
      { name: "Lifetime (Days)", value: "30 days" },
      { name: "Number of Directories", value: "2 directories" },
      { name: "Path", value: "/verify-account/check-status.html" },
      { name: "Top Level Domain", value: ".com" }
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
      { name: "Similarity of Name Server Names", value: "Low" },
      { name: "Number of Mail Exchange Records", value: "0 records" },
      { name: "Number of Name Servers", value: "1 server" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "28 elements" },
      { name: "Attachment Type", value: "Login form requesting Apple ID and password" }
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "Pakistan" },
      { name: "Number of Countries for IP Lookup", value: "1 country" }
    ]
  }
};

// ============================================
// EXAMPLE 2: SUBDOMAIN SPOOFING + DOMAIN CONFUSION
// Attack Vector: Legitimate-looking subdomain masking malicious parent domain
// ============================================
export const microsoftCredentialHarvestConfig = {
  url: "http://account-verify.microsoft-cloud-services.secure-login.com/office365/signin.php",
  malicious: true,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Very High" },
      { name: "Length", value: "98 characters" },
      { name: "Letter Count", value: "68 letters" },
      { name: "Letter Ratio", value: "69.4%" },
      { name: "Numeric Count", value: "365 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "30 characters" },
      { name: "Special Characters Ratio", value: "30.6%" },
      { name: "Unusual Characters Count", value: "4 characters" },
      { name: "Unusual Characters Ratio", value: "4.1%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "5 days" },
      { name: "Host", value: "account-verify.microsoft-cloud-services.secure-login.com" },
      { name: "Lifetime (Days)", value: "30 days" },
      { name: "Number of Directories", value: "2 directories" },
      { name: "Path", value: "/office365/signin.php" },
      { name: "Top Level Domain", value: ".com" }
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
      { name: "Number of HTML Elements", value: "35 elements" },
      { name: "Attachment Type", value: "Multi-step form: Email → Password → 2FA Code" }
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "Nigeria" },
      { name: "Number of Countries for IP Lookup", value: "1 country" }
    ]
  }
};

// ============================================
// EXAMPLE 3: HTTPS PROTOCOL DECEPTION IN DOMAIN
// Attack Vector: Embedding 'https' in domain name while using unencrypted HTTP
// ============================================
export const bankLoginProtocolDeceptionConfig = {
  url: "http://secure-https-bankofamerica-login.verification-service.com/customer/authenticate",
  malicious: true,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Very High" },
      { name: "Length", value: "104 characters" },
      { name: "Letter Count", value: "75 letters" },
      { name: "Letter Ratio", value: "72.1%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "1 instance - 'https' and 'secure' in subdomain with HTTP protocol" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "29 characters" },
      { name: "Special Characters Ratio", value: "27.9%" },
      { name: "Unusual Characters Count", value: "5 characters" },
      { name: "Unusual Characters Ratio", value: "4.8%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "2 days" },
      { name: "Host", value: "secure-https-bankofamerica-login.verification-service.com" },
      { name: "Lifetime (Days)", value: "30 days" },
      { name: "Number of Directories", value: "2 directories" },
      { name: "Path", value: "/customer/authenticate" },
      { name: "Top Level Domain", value: ".com" }
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
      { name: "Similarity of Name Server Names", value: "Low" },
      { name: "Number of Mail Exchange Records", value: "0 records" },
      { name: "Number of Name Servers", value: "1 server" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "42 elements" },
      { name: "Attachment Type", value: "Login form requesting username, password, PIN, account number" }
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "Kazakhstan" },
      { name: "Number of Countries for IP Lookup", value: "1 country" }
    ]
  }
};

// ============================================
// EXAMPLE 4: HOMOGLYPH ATTACK + INTERNATIONALIZED DOMAIN
// Attack Vector: Using Cyrillic characters that look identical to Latin characters
// ============================================
export const googleAccountRecoveryConfig = {
  url: "http://accounts-recovery-gооgle-support.com/verify/identity-check.php",
  malicious: true,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Very High" },
      { name: "Length", value: "85 characters" },
      { name: "Letter Count", value: "61 letters" },
      { name: "Letter Ratio", value: "71.8%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "24 characters" },
      { name: "Special Characters Ratio", value: "28.2%" },
      { name: "Unusual Characters Count", value: "3 characters - Cyrillic 'о' (o) characters" },
      { name: "Unusual Characters Ratio", value: "3.5%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "6 days" },
      { name: "Host", value: "accounts-recovery-gооgle-support.com" },
      { name: "Lifetime (Days)", value: "30 days" },
      { name: "Number of Directories", value: "2 directories" },
      { name: "Path", value: "/verify/identity-check.php" },
      { name: "Top Level Domain", value: ".com" }
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
      { name: "Number of Name Servers", value: "2 servers" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "31 elements" },
      { name: "Attachment Type", value: "Recovery form requesting email, phone, recovery codes" }
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "Russia" },
      { name: "Number of Countries for IP Lookup", value: "1 country" }
    ]
  }
};

// ============================================
// EXAMPLE 5: CREDENTIAL HARVESTING + EXTREME URL OBFUSCATION
// Attack Vector: URL encoding + nested subdomains + credentials in multiple forms
// ============================================
export const paypalConfirmationScamConfig = {
  url: "http://verify%2Epaypal%2Eaccount%2Dsecurity.confirm-payment-details.com/user/billing/validate%3Ftoken%3D8f7e6d5c4b3a2",
  malicious: true,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Extremely High" },
      { name: "Length", value: "142 characters" },
      { name: "Letter Count", value: "82 letters" },
      { name: "Letter Ratio", value: "57.7%" },
      { name: "Numeric Count", value: "12 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "48 characters" },
      { name: "Special Characters Ratio", value: "33.8%" },
      { name: "Unusual Characters Count", value: "8 characters" },
      { name: "Unusual Characters Ratio", value: "5.6%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "1 day" },
      { name: "Host", value: "verify%2Epaypal%2Eaccount%2Dsecurity.confirm-payment-details.com" },
      { name: "Lifetime (Days)", value: "30 days" },
      { name: "Number of Directories", value: "3 directories" },
      { name: "Path", value: "/user/billing/validate%3Ftoken%3D8f7e6d5c4b3a2" },
      { name: "Top Level Domain", value: ".com" }
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
      { name: "Number of HTML Elements", value: "67 elements" },
      { name: "Attachment Type", value: "Multiple forms: Email/Password → Card Number → CVV → Billing Address" }
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "Vietnam" },
      { name: "Number of Countries for IP Lookup", value: "1 country" }
    ]
  }
};

/*
export const noreplinfobluewinConfig = {
  url: "http://noreplinfobluewin89525.myfreesites.net/secure-login?user=admin&id=001", // /secure-login?user=admin&id=001 is a classic credential harvesting pattern
  malicious: true,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Very High" },
      { name: "Length", value: "68 characters" },
      { name: "Letter Count", value: "47 letters" },
      { name: "Letter Ratio", value: "69.1%" },
      { name: "Numeric Count", value: "5 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "16 characters" },
      { name: "Special Characters Ratio", value: "23.5%" },
      { name: "Unusual Characters Count", value: "1 characters" },
      { name: "Unusual Characters Ratio", value: "1.5%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "87 days" },
      { name: "Host", value: "noreplinfobluewin89525.myfreesites.net" },
      { name: "Lifetime (Days)", value: "180 days" },
      { name: "Number of Directories", value: "1 directory" },
      { name: "Path", value: "/secure-login/" },
      { name: "Top Level Domain", value: ".net" }
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
      { name: "Similarity of Name Server Names", value: "Low" },
      { name: "Number of Mail Exchange Records", value: "1 record" },
      { name: "Number of Name Servers", value: "2 servers" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "53 elements" }
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "United States" },
      { name: "Number of Countries for IP Lookup", value: "2 countries" }
    ]
  }
};

export const linkedlnContactConfig = {
  url: "https://linkedln-contact.000webhostapp.com/update-account/verify.php?redirect=http://linkedln-contact.000webhostapp.com", // subdomain spoofing trick designed to make the URL look like it's coming from a trusted subdomain when it's actually just a path on a different host
  malicious: true,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "High" },
      { name: "Length", value: "114 characters" },
      { name: "Letter Count", value: "70 letters" },
      { name: "Letter Ratio", value: "61.4%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "1 instance" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "43 characters" },
      { name: "Special Characters Ratio", value: "37.7%" },
      { name: "Unusual Characters Count", value: "2 characters" },
      { name: "Unusual Characters Ratio", value: "1.8%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "120 days" },
      { name: "Host", value: "linkedln-contact.000webhostapp.com" }, // typo squatting "linkedin"
      { name: "Lifetime (Days)", value: "180 days" },
      { name: "Number of Directories", value: "2 directories" },
      { name: "Path", value: "/update-account/verify.php" },
      { name: "Top Level Domain", value: ".com" }
    ]
  },
  encryptionHttp: {
    title: "Encryption and HTTP Response",
    features: [
      { name: "HTTP Response", value: "404 Not Found" },
      { name: "SSL Enabled", value: "Yes" }
    ]
  },
  dnsNetwork: {
    title: "DNS and Network Information",
    features: [
      { name: "Similarity of Name Server Names", value: "Medium" },
      { name: "Number of Mail Exchange Records", value: "2 records" },
      { name: "Number of Name Servers", value: "3 servers" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "28 elements" }
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "Netherlands" },
      { name: "Number of Countries for IP Lookup", value: "1 country" }
    ]
  }
};

export const kungaguesthouseConfig = { // maybe add more context 
  url: "http://kungaguesthouse.com/payments.secure-login.kungaguesthouse.com.com/invoice.pdf",
  malicious: true,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Very High" },
      { name: "Length", value: "78 characters" },
      { name: "Letter Count", value: "51 letters" },
      { name: "Letter Ratio", value: "65.4%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "27 characters" },
      { name: "Special Characters Ratio", value: "34.6%" },
      { name: "Unusual Characters Count", value: "3 characters" },
      { name: "Unusual Characters Ratio", value: "3.8%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "45 days" },
      { name: "Host", value: "kungaguesthouse.com" },
      { name: "Lifetime (Days)", value: "90 days" },
      { name: "Number of Directories", value: "1 directory" },
      { name: "Path", value: "/payments.secure-login.kungaguesthouse.com.com/" },
      { name: "Top Level Domain", value: ".com" }
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
      { name: "Similarity of Name Server Names", value: "Low" },
      { name: "Number of Mail Exchange Records", value: "0 records" },
      { name: "Number of Name Servers", value: "1 server" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "12 elements" },
      { name: "Attachment Type", value: "PDF" } // invoice.pdf
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "Russia" },
      { name: "Number of Countries for IP Lookup", value: "1 country" }
    ]
  }
};

export const resolutionCenterAccountConfig = {
  url: "https://signin.resolution-center-account.com/support/signin?sessiontoken=AAA123&utm_source=email", // domain "resolution-center-account.com" is designed to look like a legitimate support portal, but is actually a phishing site. The query parameter "sessiontoken=AAA123" is a placeholder and utm_source=email is used for tracking purposes, and suggest an email redirectl, i.e. strng phishing indicator.
  malicious: true,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "High" },
      { name: "Length", value: "79 characters" },
      { name: "Letter Count", value: "54 letters" },
      { name: "Letter Ratio", value: "68.4%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "25 characters" },
      { name: "Special Characters Ratio", value: "31.6%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "150 days" },
      { name: "Host", value: "signin.resolution-center-account.com" },
      { name: "Lifetime (Days)", value: "365 days" },
      { name: "Number of Directories", value: "1 directory" },
      { name: "Path", value: "/support/signin" },
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
      { name: "Number of Mail Exchange Records", value: "3 records" },
      { name: "Number of Name Servers", value: "4 servers" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "65 elements" }
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

export const gatcoinsConfig = {
  url: "http://gatcoins.io//downloads/update_installer.exe",
  malicious: true,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Medium" },
      { name: "Length", value: "42 characters" },
      { name: "Letter Count", value: "27 letters" },
      { name: "Letter Ratio", value: "64.3%" },
      { name: "Numeric Count", value: "0 numbers" },
      { name: "Out of Place HTTP(S)", value: "0 instances" },
      { name: "Out of Place WWW", value: "0 instances" },
      { name: "Special Characters Count", value: "15 characters" },
      { name: "Special Characters Ratio", value: "35.7%" },
      { name: "Unusual Characters Count", value: "0 characters" },
      { name: "Unusual Characters Ratio", value: "0.0%" }
    ]
  },
  domainCharacteristics: {
    title: "Domain Characteristics and Structure",
    features: [
      { name: "Active Time (Days)", value: "240 days" },
      { name: "Host", value: "gatcoins.io" },
      { name: "Lifetime (Days)", value: "365 days" },
      { name: "Number of Directories", value: "1 directory" },
      { name: "Path", value: "/downloads/" },
      { name: "Top Level Domain", value: ".io" }
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
      { name: "Similarity of Name Server Names", value: "Medium" },
      { name: "Number of Mail Exchange Records", value: "1 record" },
      { name: "Number of Name Servers", value: "2 servers" }
    ]
  },
  webpageContent: {
    title: "Webpage Content and Structure",
    features: [
      { name: "Number of HTML Elements", value: "15 elements" },
      { name: "Attachment Type", value: "Executable" } // update_installer.exe
    ]
  },
  geographicalHosting: {
    title: "Geographical and Hosting Information",
    features: [
      { name: "Registration Country", value: "Canada" },
      { name: "Number of Countries for IP Lookup", value: "1 country" }
    ]
  }
};
*/