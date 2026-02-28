"use client";

import { motion } from "framer-motion";

const technologies = [
  "WordPress",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "AWS",
  "Figma",
  "Shopify",
  "Strapi",
  "PostgreSQL",
  "Docker",
];

const TechStack = () => {
  return (
    <div className="py-20 bg-black border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-white/40">
          Our Tech Stack
        </h2>
      </div>

      <div className="flex relative overflow-hidden group">
        <motion.div
          className="flex whitespace-nowrap gap-12 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Double the list for seamless looping */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="text-4xl md:text-5xl font-extrabold text-white/[0.03] hover:text-[#00A3FF]/20 transition-colors cursor-default select-none tracking-tighter uppercase"
            >
              {tech}
            </div>
          ))}
        </motion.div>

        {/* Faded edges for the marquee */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>
    </div>
  );
};

export { TechStack };
