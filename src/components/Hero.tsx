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
    <SectionWrapper className="min-h-screen flex items-center justify-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#122C38] relative">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#DDF7CC]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-[#DDF7CC]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1.0] }}
          className="w-full text-[clamp(2rem,8vw,6.5rem)] font-bold tracking-tight text-white mb-4 leading-[1.1] md:leading-[1] text-balance"
        >
          Turn your website into <br className="hidden md:inline" /> <span className="text-[#DDF7CC]">a pipeline engine.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.215, 0.61, 0.355, 1.0] }}
          className="max-w-3xl"
        >
          <p className="text-[clamp(0.95rem,2vw,1.125rem)] text-white mb-6 leading-relaxed font-normal">
            Accenox embeds a fractional web team inside your marketing department.
          </p>
          <p className="text-[clamp(0.95rem,2vw,1.125rem)] text-white/70 mb-12 leading-relaxed font-normal">
            Web experts with deep web development and growth strategy, so you can ship high-quality pages fast, improve conversion, and stop losing time to website fires.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.215, 0.61, 0.355, 1.0] }}
        >
          <Button
            size="lg"
            className="h-14 px-10 text-lg rounded-full font-bold"
            onClick={() => window.open("https://cal.com/madhusudan-rawat", "_blank")}
          >
            Book a Strategy Call
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 pt-12 border-t border-[#DDF7CC]/20 w-full"
        >
          <p className="text-[#a8c899] text-sm font-medium mb-6">
            Trusted by 32+ agencies, businesses, and founders worldwide
          </p>

          <div className="relative flex overflow-hidden w-full opacity-60">
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
                  className="text-sm md:text-base font-bold text-white"
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
