import type { Metadata } from "next";

const baseUrl = "https://www.etechlogix.com";

export const siteMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "AI & Custom Software Development Company | eTechLogix",
    template: "%s | eTechLogix",
  },
  description:
    "eTechLogix provides AI solutions, custom software development, cloud engineering, data services and enterprise application development for businesses in Arizona and worldwide.",
  keywords: [
    "AI development company",
    "generative AI development services",
    "AI automation services",
    "AI agent development",
    "custom software development company",
    "enterprise application development",
    "cloud application development",
    "data engineering services",
    "legacy software modernisation",
    "healthcare software development",
    "software development company Arizona",
  ],
  authors: [{ name: "eTechLogix" }],
  creator: "eTechLogix",
  publisher: "eTechLogix",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "eTechLogix",
    title: "AI and Custom Software Engineering | eTechLogix",
    description:
      "Build secure AI solutions, enterprise applications and scalable digital products with eTechLogix.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "eTechLogix — AI and Custom Software Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI and Custom Software Engineering | eTechLogix",
    description:
      "Build secure AI solutions, enterprise applications and scalable digital products with eTechLogix.",
    images: [`${baseUrl}/og-image.png`],
  },
  alternates: {
    canonical: baseUrl,
  },
};
