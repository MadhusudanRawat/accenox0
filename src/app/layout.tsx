import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

const siteUrl = "https://accenox.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Accenox | Strategy-Led Websites & Business Automation",
  description: "Expert software development, custom web solutions, and business automation for startups and enterprises. Drive revenue with our strategy-led digital services.",
  keywords: [
    "Software Development",
    "Web Development",
    "Business Automation",
    "Custom Software",
    "Digital Solutions",
    "Next.js Development",
    "Web Design",
    "SaaS Development",
    "Mobile Apps",
    "Accenox"
  ],
  authors: [{ name: "Accenox", url: siteUrl }],
  creator: "Accenox",
  publisher: "Accenox",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Accenox | Strategy-Led Websites & Business Automation",
    description: "Expert software development, custom web solutions, and business automation for startups and enterprises.",
    siteName: "Accenox",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accenox | Strategy-Led Websites & Business Automation",
    description: "Expert software development and business automation solutions.",
  },
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
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Accenox",
    url: siteUrl,
    description: "Expert software development, custom web solutions, and business automation for startups and enterprises.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "",
      contactType: "Customer Service",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased bg-black text-white`}
      >
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
