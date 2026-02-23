"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/SectionWrapper";

const clients = [
  "Ella AI", "Khushiva", "Ninja WB", "Prestige DWR", "AE Creatives", "Upsync Media", "Thryve Collective", "Slyte", "Taru St",
  "BrightMedia", "Elevate SaaS", "GrowthEngine", "Nexus Labs", "FinEdge", "Aura Creative", "ScaleUp"
];

const Hero = () => {
  return (
    <SectionWrapper id="hero" className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-black relative bg-grain text-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>

      <div className="flex flex-col items-center max-w-5xl mx-auto z-10">
        {/* Avatars / Trust Block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 mb-12"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center overflow-hidden relative">
                <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" fill className="object-cover" />
              </div>
            ))}
          </div>
          <p className="text-muted text-sm font-semibold tracking-wide uppercase">
            trusted by 100+ CMOs, founders and top marketers
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-[clamp(2.5rem,10vw,7rem)] font-bold tracking-tighter text-white mb-8 leading-[1] text-balance"
        >
          Turn your software into <br className="hidden md:inline" /> a pipeline engine.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(1.125rem,2vw,1.5rem)] text-muted mb-12 max-w-4xl leading-relaxed font-medium text-balance"
        >
          Accenox embeds a fractional engineering team inside your department. Experts in custom development and growth strategy, so you can ship high-quality products fast, improve conversion, and stop losing time to technical fires.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.215, 0.61, 0.355, 1.0] }}
          className="flex flex-col sm:flex-row gap-4 mb-24"
        >
          <Button
            size="xl"
            variant="secondary"
            className="rounded-full px-12 py-8 text-xl font-bold bg-white text-black hover:bg-white/90"
            onClick={() => window.open("https://cal.com/madhusudan-rawat", "_blank")}
          >
            Book a Strategy Call
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col gap-8 w-full"
        >
          <p className="text-muted text-sm font-semibold tracking-widest uppercase">
            Brands who are already working with us
          </p>

          <div className="relative flex overflow-hidden w-full opacity-30 grayscale invert">
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
