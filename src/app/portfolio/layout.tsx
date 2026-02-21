import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Accenox - Our Latest Projects & Case Studies",
  description: "Explore our portfolio of successful web development, software solutions, and digital transformation projects across startups and enterprises.",
  openGraph: {
    title: "Portfolio | Accenox - Our Latest Projects & Case Studies",
    description: "Explore our portfolio of successful web development, software solutions, and digital transformation projects.",
    url: "https://accenox.com/portfolio",
    type: "website",
  },
  keywords: [
    "Portfolio",
    "Case Studies",
    "Web Development Projects",
    "Software Development",
    "Next.js Projects",
    "Custom Software",
    "Digital Solutions"
  ],
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
