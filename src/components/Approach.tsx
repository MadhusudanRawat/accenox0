"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    title: "Discover",
    description: "In-depth audit of your current systems and business objectives to identify high-impact opportunities.",
    icon: Search,
    color: "bg-blue-500"
  },
  {
    title: "Design",
    description: "Architecting the technical blueprint and user experience tailored for enterprise-grade scalability.",
    icon: PenTool,
    color: "bg-indigo-500"
  },
  {
    title: "Build",
    description: "Engineering your solution with a focus on security, performance, and seamless integration.",
    icon: Code2,
    color: "bg-cyan-500"
  },
  {
    title: "Scale",
    description: "Continuous optimization and infrastructure management to support your global growth.",
    icon: Rocket,
    color: "bg-accent"
  }
];

const Approach = () => {
  return (
    <section id="approach" className="bg-black py-32 px-6 sm:px-12 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-white"
          >
            THE <span className="text-accent italic">METHOD</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl font-medium"
          >
            A systematic approach to engineering excellence, from initial audit to global deployment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[1px] bg-white/10 z-0" />
              )}

              <div className="relative z-10">
                <div className={`w-24 h-24 rounded-3xl ${step.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-blue-500/20`}>
                  <step.icon size={40} className="text-white" />
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-black text-accent tracking-[0.3em]">0{index + 1}</span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
                    {step.title}
                  </h3>
                </div>

                <p className="text-white/50 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Approach };
