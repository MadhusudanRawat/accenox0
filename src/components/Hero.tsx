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
    <SectionWrapper className="min-h-screen flex items-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#122C38] relative">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#DDF7CC]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-[#DDF7CC]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="flex flex-col items-start text-left max-w-full md:max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1.0] }}
          className="w-full text-[clamp(1.75rem,8vw,6.25rem)] font-bold tracking-tighter text-[#DDF7CC] mb-8 leading-[1.1] md:leading-[1] lg:leading-[0.9] text-balance"
        >
          We help businesses make <br className="hidden md:inline" /> more revenue with <br className="hidden md:inline" /> strategy-led websites
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.215, 0.61, 0.355, 1.0] }}
          className="text-[clamp(1rem,2.5vw,1.25rem)] text-[#a8c899] mb-12 max-w-3xl leading-relaxed font-normal text-balance"
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
            className="h-16 px-10 text-lg rounded-full"
            onClick={() => window.open("https://cal.com/madhusudan-rawat", "_blank")}
          >
            Book an Intro Call
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-16 px-10 text-lg rounded-full"
            onClick={() => {
              const el = document.getElementById("portfolio");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/portfolio";
              }
            }}
          >
            View Case Studies
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col gap-6"
        >
          <p className="text-[#a8c899] text-lg font-medium">
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
                  className="text-lg md:text-xl font-bold text-[#DDF7CC]"
                >
                  {client}
                </span>
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#122C38] to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#122C38] to-transparent z-10"></div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export { Hero };
