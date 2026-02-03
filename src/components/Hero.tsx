"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <SectionWrapper className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Modern Solutions for Modern Enterprises
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary mb-6 max-w-4xl"
        >
          Simplifying Complexity. <br />
          <span className="text-muted">Automating Growth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted mb-10 max-w-2xl"
        >
          Accenox builds scalable digital solutions that streamline workflows
          and empower businesses to focus on what matters most.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="gap-2" onClick={() => window.location.href = "#contact"}>
            Book a Consultation <ArrowRight size={20} />
          </Button>
          <Button size="lg" variant="outline" onClick={() => window.location.href = "#services"}>
            View Our Services
          </Button>
        </motion.div>
      </div>

      {/* Decorative element - Liinks-like background subtle block */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-10">
        <div className="w-[600px] h-[600px] bg-accent rounded-full blur-[120px]"></div>
      </div>
    </SectionWrapper>
  );
};

export { Hero };
