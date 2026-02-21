import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Solutions } from "@/components/Solutions";
import { TechStack } from "@/components/TechStack";
import { Process } from "@/components/Process";
import { SuccessStories } from "@/components/SuccessStories";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Accenox | Strategy-Led Websites & Business Automation",
  description: "Expert software development, custom web solutions, and business automation for startups and enterprises. Drive revenue with our strategy-led digital services.",
  openGraph: {
    title: "Accenox | Strategy-Led Websites & Business Automation",
    description: "Expert software development, custom web solutions, and business automation for startups and enterprises.",
    url: "https://accenox.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Hero />
      <About />
      <Services />
      <Solutions />
      <TechStack />
      <Process />
      <SuccessStories />
      <Testimonials />
      <Pricing />
      <Contact />
    </main>
  );
}
