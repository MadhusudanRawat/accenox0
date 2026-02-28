"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/SectionWrapper";

const clients = [
  "Ella AI", "Khushiva", "Ninja WB", "Prestige DWR", "AE Creatives", "Upsync Media", "Thryve Collective", "Slyte", "Taru St",
  "BrightMedia", "Elevate SaaS", "GrowthEngine", "Nexus Labs", "FinEdge", "Aura Creative", "ScaleUp"
];

const Hero = () => {
  return (
    <SectionWrapper className="min-h-screen flex items-center justify-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#000000] relative">
      {/* Grid background */}
      <div className="hero-grid"></div>

      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#00A3FF]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="flex flex-col items-center text-center max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-full text-[15vw] font-bold text-white/[0.03] select-none pointer-events-none whitespace-nowrap leading-none z-0"
        >
          ACCENOX.AGENCY
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-[clamp(2.5rem,8vw,6.5rem)] font-bold tracking-tight text-white mb-6 leading-[1.1] md:leading-[1] text-balance font-serif"
        >
          Turn your website into <br className="hidden md:inline" />
          <span className="text-[#00A3FF]">a pipeline engine.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-white mb-6 leading-relaxed font-normal">
            Accenox embeds a fractional web team inside your marketing department.
          </p>
          <p className="text-[clamp(1rem,2vw,1.125rem)] text-white/60 mb-12 leading-relaxed font-normal">
            Web experts with deep engineering and growth strategy, so you can ship high-quality pages fast, improve conversion, and stop losing time to website fires.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button
            size="lg"
            className="h-14 px-10 text-lg rounded-full font-bold flex items-center group"
            onClick={() => window.open("https://cal.com/madhusudan-rawat", "_blank")}
          >
            <span>Book a Strategy Call</span>
            <span className="ml-3 inline-flex transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 pt-12 border-t border-white/10 w-full"
        >
          <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-semibold mb-8">
            Trusted by 32+ agencies, businesses, and founders worldwide
          </p>

          <div className="relative flex overflow-hidden w-full">
            <motion.div
              className="flex whitespace-nowrap gap-16"
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...clients, ...clients].map((client, i) => (
                <span
                  key={i}
                  className="text-sm md:text-base font-bold text-white/50 hover:text-white transition-colors cursor-default"
                >
                  {client}
                </span>
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#000000] to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#000000] to-transparent z-10"></div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export { Hero };
