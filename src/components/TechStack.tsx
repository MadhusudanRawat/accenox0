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
    <div className="py-20 bg-[#122C38] border-y border-[#DDF7CC]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-[#a8c899]">
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
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Double the list for seamless looping */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="text-4xl md:text-5xl font-extrabold text-[#DDF7CC]/10 hover:text-[#DDF7CC]/40 transition-colors cursor-default select-none tracking-tighter"
            >
              {tech}
            </div>
          ))}
        </motion.div>

        {/* Faded edges for the marquee */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </div>
  );
};

export { TechStack };
