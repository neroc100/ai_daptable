// NOTE: The following dataset was generated without live network access.
// It is SYNTHETIC / ESTIMATED data for testing and demo purposes only.
// Do not present these values as results of actual network queries.

export const eprintIacrConfig = {
  url: "https://eprint.iacr.org/2020/1234.pdf",
  malicious: false,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Medium" },
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
      { name: "Number of HTML Elements", value: "N/A" }, // direct PDF
      { name: "Attachment Type", value: "PDF" } //eprint paper
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
      { name: "Number of HTML Elements", value: "N/A" }, // binary/archive listing
      { name: "Attachment Type", value: "tar.gz" } // archive
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
      { name: "Unusual Characters Count", value: "1 character" }, // tilde ~
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


export const cdcDataApiConfig = {
  url: "https://data.cdc.gov/api/views/9mfq-cb36/rows.csv?accessType=DOWNLOAD",
  malicious: false,
  urlStringAnalysis: {
    title: "URL String Analysis",
    features: [
      { name: "Entropy", value: "Medium" },
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
      { name: "Number of HTML Elements", value: "28 elements" },
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

export const kungaguesthouseConfig = {
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
