"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/Button";

const Services = () => {
  const capabilities = [
    "Web Engineering",
    "Mobile Applications",
    "AI & Automation",
    "Cloud Architecture",
    "UI/UX Design Systems",
    "Fractional Engineering",
    "Legacy Modernization",
    "Data Infrastructure",
    "API Ecosystems",
    "DevOps Pipelines",
    "Product Strategy"
  ];

  const techStack = [
    "Next.js", "React", "TypeScript", "Node.js", "Go", "Python",
    "PostgreSQL", "AWS", "Google Cloud", "Vercel", "Tailwind CSS",
    "Framer Motion", "Docker", "Kubernetes", "OpenAI API"
  ];

  return (
    <SectionWrapper id="services" className="bg-black py-24 md:py-32 overflow-hidden border-t border-white/10">
      <div className="flex flex-col gap-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-6">capabilities</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tighter text-white leading-[0.95] mb-12">
            How we fuel your team <br className="hidden md:inline" /> and product goals
          </h2>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full px-10"
            onClick={() => window.open("https://cal.com/madhusudan-rawat", "_blank")}
          >
            Schedule a Call
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="flex flex-col gap-12">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-accent/20 relative">
              <Image src="https://i.pravatar.cc/100?img=15" alt="Josh Coffy" fill className="object-cover" />
            </div>
            <div>
              <p className="text-white text-xl font-medium leading-snug italic mb-6">
                &quot;Accenox saw a nice uptick in inbound leads as a result of our product better representing our brand and being GORGEOUS! Everyone raves about it.&quot;
              </p>
              <p className="text-white font-bold">Josh Coffy</p>
              <p className="text-muted text-sm uppercase tracking-widest font-bold">Flight Media CEO</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex flex-col gap-12">
              <div>
                <p className="text-muted text-sm font-bold tracking-widest uppercase mb-8">If you are in software, we can help</p>
                <div className="flex flex-wrap gap-x-12 gap-y-6">
                  {["FinTech", "PropTech", "HealthTech", "AI & SaaS", "Logistics", "Enterprises"].map((item) => (
                    <span key={item} className="text-white text-2xl md:text-3xl font-bold tracking-tight">{item}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-muted text-sm font-bold tracking-widest uppercase mb-8">How can we help?</p>
                <div className="flex flex-wrap gap-4">
                  {capabilities.map((item) => (
                    <span key={item} className="px-5 py-2 rounded-full border border-white/10 text-white text-sm font-bold">{item}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-muted text-sm font-bold tracking-widest uppercase mb-8">Our tech stack</p>
                <div className="flex flex-wrap gap-4">
                  {techStack.map((item) => (
                    <span key={item} className="px-5 py-2 rounded-full bg-accent/5 text-accent text-sm font-bold border border-accent/10">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export { Services };
