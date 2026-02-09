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
    <SectionWrapper id="hero" className="min-h-screen flex items-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-black relative bg-grain">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-green-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="flex flex-col items-start text-left max-w-full md:max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-[clamp(2rem,8.5vw,6.5rem)] font-bold tracking-tighter text-white mb-8 leading-[1.05] md:leading-[1] lg:leading-[0.9] text-balance font-serif"
        >
          Engineering Digital <br className="hidden md:inline" /> Infrastructure for <br className="hidden md:inline" /> Global Leaders
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(1.125rem,2.5vw,1.375rem)] text-white/60 mb-12 max-w-3xl leading-relaxed font-medium text-balance"
        >
          We architect custom software solutions that automate complex business processes and simplify enterprise workflows. From venture-backed startups to global enterprises, we build the technical core that powers scalable growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.215, 0.61, 0.355, 1.0] }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Button
            size="lg"
            variant="secondary"
            onClick={() => window.open("https://cal.com/madhusudan-rawat", "_blank")}
          >
            Book a Consultation
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10"
            onClick={() => {
              const el = document.getElementById("portfolio");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/portfolio";
              }
            }}
          >
            View Our Services
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col gap-6"
        >
          <p className="text-white/60 text-lg font-medium">
            Trusted by 32+ agencies, businesses, and founders worldwide
          </p>

          <div className="relative flex overflow-hidden w-full opacity-50">
            <motion.div
              className="flex whitespace-nowrap gap-12"
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...clients, ...clients].map((client, i) => (
                <span
                  key={i}
                  className="text-lg md:text-xl font-bold text-white"
                >
                  {client}
                </span>
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export { Hero };
