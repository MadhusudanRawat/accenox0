"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ArrowRight, Star } from "lucide-react";

const clients = [
  "TechFlow Systems", "BrightMedia", "Elevate SaaS", "GrowthEngine", "Nexus Labs",
  "FinEdge", "Aura Creative", "ScaleUp", "Vanguard", "Mosaic"
];

const Hero = () => {
  return (
    <SectionWrapper className="pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary/70 text-sm font-medium mb-8"
        >
          <div className="flex -space-x-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-5 h-5 rounded-full border-2 border-white bg-gray-200" />
            ))}
          </div>
          <span className="flex items-center gap-1">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            Trusted by 32+ agencies & businesses
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1.0] }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-primary mb-8 max-w-5xl leading-[1.05]"
        >
          We help businesses make <br />
          <span className="font-serif italic text-accent">more revenue</span> with <br />
          strategy-led websites
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.215, 0.61, 0.355, 1.0] }}
          className="text-lg md:text-xl text-muted/90 mb-12 max-w-3xl leading-relaxed font-normal"
        >
          We design and build websites, landing pages, and marketing assets that drive sales
          and qualified leads without hiring a full in-house team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.215, 0.61, 0.355, 1.0] }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Button
            size="lg"
            className="h-14 px-8 text-base rounded-full gap-2 shadow-lg shadow-accent/20"
            onClick={() => window.open("https://cal.com/madhusudan-rawat", "_blank")}
          >
            Book a Consultation <ArrowRight size={18} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 text-base rounded-full border-gray-200 hover:bg-gray-50"
            onClick={() => {
              const el = document.getElementById("services");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Our Services
          </Button>
        </motion.div>

        {/* Client Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full relative py-8 border-y border-gray-100"
        >
          <div className="flex overflow-hidden group">
            <div className="flex space-x-12 animate-marquee group-hover:pause-marquee py-2 whitespace-nowrap">
              {[...clients, ...clients].map((client, i) => (
                <span
                  key={i}
                  className="text-lg md:text-xl font-semibold text-primary/20 uppercase tracking-widest hover:text-primary/40 transition-colors"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-6xl aspect-[16/9] opacity-[0.03] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-primary [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
          <div className="h-full w-full border-[1px] border-primary/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export { Hero };
