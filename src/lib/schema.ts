export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "eTechLogix",
    url: "https://www.etechlogix.com",
    logo: "https://www.etechlogix.com/logo.png",
    description:
      "eTechLogix is an AI and custom software engineering company helping businesses modernise operations, automate workflows and build scalable digital products.",
    foundingDate: "2015",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Scottsdale",
      addressRegion: "AZ",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@etechlogix.com",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.linkedin.com/company/etechlogix",
      "https://twitter.com/etechlogix",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Custom Software Development",
      "Cloud Computing",
      "Data Engineering",
      "Enterprise Application Development",
      "Legacy System Modernisation",
    ],
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 33.4942,
        longitude: -111.9261,
      },
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "eTechLogix",
    url: "https://www.etechlogix.com",
    description:
      "AI solutions, custom software development, cloud engineering and enterprise application development.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.etechlogix.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}
