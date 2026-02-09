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
    <div className="py-24 bg-black/50 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="h-1 bg-accent mb-6 rounded-full"
          />
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-white/20">
            Engineered with Precision
          </h2>
        </div>
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
              className="text-4xl md:text-5xl font-extrabold text-white/5 hover:text-accent/40 transition-colors cursor-default select-none tracking-tighter"
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
