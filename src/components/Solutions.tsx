"use client";

import { motion } from "framer-motion";
import { Zap, Building2, Globe2 } from "lucide-react";

const solutions = [
  {
    title: "Startups",
    subtitle: "Rapid Velocity",
    description: "Battle-tested foundations to help you launch fast without accumulating technical debt.",
    icon: Zap,
    features: ["MVP Development", "Cloud-Native Scaling", "Product Design"]
  },
  {
    title: "SMEs",
    subtitle: "Operational Efficiency",
    description: "Automating manual workflows and integrating legacy systems for modern growth.",
    icon: Building2,
    features: ["Process Automation", "CRM Integration", "Custom SaaS"]
  },
  {
    title: "Enterprises",
    subtitle: "Digital Resilience",
    description: "Hardened infrastructure and high-availability systems for global operations.",
    icon: Globe2,
    features: ["Legacy Migration", "Security Audits", "Custom ERP"]
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="bg-white py-32 px-6 sm:px-12 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-black"
            >
              TAILORED <span className="text-accent italic">SOLUTIONS</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-black/60 font-medium"
            >
              Specific technical roadmaps designed for your current scale and future ambitions.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-50 border border-black/5 rounded-[2rem] p-12 hover:bg-black transition-colors duration-500"
            >
              <div className="mb-12">
                <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-500">
                  <solution.icon size={32} className="text-white" />
                </div>
                <span className="text-xs font-black text-accent uppercase tracking-widest block mb-2">
                  {solution.subtitle}
                </span>
                <h3 className="text-4xl font-black text-black group-hover:text-white uppercase tracking-tighter transition-colors duration-500">
                  {solution.title}
                </h3>
              </div>

              <p className="text-black/60 group-hover:text-white/60 mb-12 text-lg font-medium leading-relaxed transition-colors duration-500">
                {solution.description}
              </p>

              <ul className="space-y-4">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-black/80 group-hover:text-white/80 font-bold text-sm transition-colors duration-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Solutions };
