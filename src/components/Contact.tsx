"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/Button";

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="bg-black py-24 md:py-40 overflow-hidden relative border-t border-white/10">
      <div className="absolute inset-0 bg-accent/5 opacity-30 pointer-events-none blur-[120px] rounded-full translate-y-1/2"></div>

      <div className="flex flex-col items-center text-center max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(2.5rem,8vw,6rem)] font-bold text-white mb-12 tracking-tighter leading-[0.95]"
        >
          Ready to ignite your engineering department?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button
            size="xl"
            variant="secondary"
            className="rounded-full px-12 py-8 text-xl font-bold bg-white text-black hover:bg-white/90"
            onClick={() => window.open("https://cal.com/madhusudan-rawat", "_blank")}
          >
            Schedule a 30 intro call
          </Button>
        </motion.div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-5 gap-12 w-full opacity-20 grayscale invert">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 relative">
              <Image
                src={`https://images.unsplash.com/photo-1551288049-bbbda5366991?auto=format&fit=crop&q=80&w=200`}
                alt="partner"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export { Contact };
