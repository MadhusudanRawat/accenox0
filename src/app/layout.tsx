import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Accenox | Simplifying Workflows & Automating Business",
  description: "Accenox provides scalable digital solutions, custom software development, and automation for startups and enterprises.",
  keywords: ["Software Development", "Business Automation", "Web Development", "Mobile Apps", "Accenox"],
  authors: [{ name: "Accenox" }],
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
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-primary`}
      >
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
