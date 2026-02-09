"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Search, PenTool, Code, LineChart } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <Search size={24} />,
      title: "Diagnostic",
      description: "Deep-dive audit into operational bottlenecks and technical requirements. We define the baseline for success."
    },
    {
      icon: <PenTool size={24} />,
      title: "Architecture",
      description: "High-fidelity UX pairing with robust system blueprints. We map the infrastructure for your digital future."
    },
    {
      icon: <Code size={24} />,
      title: "Execution",
      description: "Precision development using modern CI/CD pipelines. We prioritize modularity, security, and performance."
    },
    {
      icon: <LineChart size={24} />,
      title: "Optimization",
      description: "Seamless deployment followed by proactive scaling. We continuously refine for maximum throughput."
    }
  ];

  return (
    <SectionWrapper id="process" className="bg-background">
      <SectionHeading
        title="The Lifecycle."
        subtitle="A systematic engineering methodology focused on risk mitigation and accelerated value delivery."
        centered
        variant="dark"
      />

      <div className="relative mt-20">
        {/* Connection Line (Desktop) */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-10 origin-left"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.4
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white/5 border-4 border-white/10 flex items-center justify-center text-white mb-6 group-hover:border-accent group-hover:bg-accent group-hover:text-black transition-all duration-300 shadow-sm relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent text-black text-xs font-bold flex items-center justify-center">
                  0{index + 1}
                </div>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export { Process };
