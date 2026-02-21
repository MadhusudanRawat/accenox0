/**
 * SEO Configuration for Accenox
 * This file centralizes all SEO-related settings for the website
 */

export const SEO_CONFIG = {
  site: {
    name: "Accenox",
    url: "https://accenox.com",
    description: "Expert software development, custom web solutions, and business automation for startups and enterprises.",
    defaultTitle: "Accenox | Strategy-Led Websites & Business Automation",
    titleTemplate: "%s | Accenox",
  },
  
  social: {
    twitter: "@accenox",
    linkedin: "accenox",
  },

  pages: {
    home: {
      title: "Accenox | Strategy-Led Websites & Business Automation",
      description: "Expert software development, custom web solutions, and business automation for startups and enterprises. Drive revenue with our strategy-led digital services.",
      path: "/",
      priority: 1.0,
      changeFrequency: "weekly" as const,
    },
    portfolio: {
      title: "Portfolio | Accenox - Our Latest Projects & Case Studies",
      description: "Explore our portfolio of successful web development, software solutions, and digital transformation projects across startups and enterprises.",
      path: "/portfolio",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
  },

  keywords: {
    primary: [
      "Software Development",
      "Web Development",
      "Business Automation",
      "Custom Software",
      "Digital Solutions",
    ],
    secondary: [
      "Next.js Development",
      "Web Design",
      "SaaS Development",
      "Mobile Apps",
      "Digital Transformation",
    ],
  },

  organization: {
    name: "Accenox",
    description: "Expert software development and business automation solutions",
    address: "",
    phone: "",
    email: "",
  },
};

export type SitemapEntry = (typeof SEO_CONFIG.pages)[keyof typeof SEO_CONFIG.pages];
