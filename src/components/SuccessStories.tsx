"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/Button";

const SuccessStories = () => {
  const cases = [
    {
      company: "DoorLoop",
      result: "30-50% bump in demo bookings post-launch",
      type: "Monthly Retainer",
      location: "Miami",
      industry: "Prop-tech",
      scope: ["UI Design", "Custom Engineering", "API Integrations", "CRO"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      link: "https://doorloop.com/"
    },
    {
      company: "Daloopa",
      result: "Full-stack development and UI management",
      type: "Full-time Retainer",
      location: "Miami",
      industry: "Fin-tech",
      scope: ["Backend Architecture", "React Development", "Infrastructure"],
      image: "https://images.unsplash.com/photo-1551288049-bbbda5366991?auto=format&fit=crop&q=80&w=800",
      link: "https://www.daloopa.com/"
    },
    {
      company: "ThoughtForge",
      result: "Increased organic traffic by 114.9%",
      type: "Project-based",
      location: "New York",
      industry: "AI SaaS",
      scope: ["SEO Strategy", "Content Automation", "Platform Redesign"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
      link: "https://thoughtforge.ai/"
    }
  ];

  return (
    <SectionWrapper id="success" className="bg-black py-24 md:py-32 overflow-hidden border-t border-white/10">
      <div className="flex flex-col gap-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-6">web engineering case studies</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tighter text-white leading-[0.95] mb-12">
            The results we <br className="hidden md:inline" /> have created for our clients
          </h2>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full px-10"
            onClick={() => {
              const el = document.getElementById("success");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Sample Work
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col bg-zinc-900/50 border border-white/5 rounded-[2rem] overflow-hidden group"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <Image src={item.image} alt={item.company} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute bottom-8 left-8">
                   <p className="text-white text-3xl font-bold tracking-tight">{item.company}</p>
                </div>
              </div>

              <div className="p-10 flex flex-col gap-8 flex-1">
                <div className="flex flex-col gap-2">
                  <p className="text-accent text-xl font-bold leading-tight uppercase tracking-tight">
                    {item.result}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {[item.type, item.location, item.industry].map((label) => (
                      <span key={label} className="text-muted text-sm font-bold border-r border-white/10 pr-4 last:border-0">{label}</span>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-white/5 w-full" />

                <div>
                  <p className="text-muted text-xs font-bold tracking-widest uppercase mb-6">Project&apos;s Scope:</p>
                  <div className="flex flex-wrap gap-3">
                    {item.scope.map((tag) => (
                      <span key={tag} className="px-4 py-2 rounded-full bg-white/5 text-white text-[11px] font-bold border border-white/10 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full rounded-full border-white/10 hover:bg-white hover:text-black transition-all font-bold"
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    View Live Website
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export { SuccessStories };
