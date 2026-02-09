"use client";

import { motion, Variants } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Code2, Smartphone, Cpu, Zap, ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="text-white" size={24} />,
      title: "Web Engineering",
      description: "Full-stack architecture optimized for sub-second latency and high-concurrency. We build reactive web applications that drive real-world business logic.",
      color: "bg-blue-600"
    },
    {
      icon: <Smartphone className="text-white" size={24} />,
      title: "Mobile Ecosystems",
      description: "High-fidelity iOS and Android applications engineered for fluid interactivity. We deliver native-grade experiences with shared-logic efficiency.",
      color: "bg-indigo-600"
    },
    {
      icon: <Cpu className="text-white" size={24} />,
      title: "Bespoke Software",
      description: "Custom enterprise cores designed to bridge functional gaps. We centralize your distributed operations into a single, unified digital command center.",
      color: "bg-slate-800"
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: "Workflow Automation",
      description: "Intelligent orchestration of manual processes. We integrate your legacy stack into a modern, API-driven autonomous environment.",
      color: "bg-teal-600"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <SectionWrapper id="services" className="bg-background relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <SectionHeading
        title="Core Disciplines."
        subtitle="Precision-engineered solutions designed to scale with your ambition. We specialize in turning technical debt into high-performance competitive advantages."
        centered
        variant="dark"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
          >
            <Card className="group h-full p-10 flex flex-col border-white/5 hover:border-accent/40 bg-white/5 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-accent/10">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-between text-white">
                {service.title}
                <ArrowUpRight size={20} className="text-white/40 opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all" />
              </h3>
              <p className="text-white/60 leading-relaxed font-medium">
                {service.description}
              </p>

              <div className="mt-auto pt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/20 group-hover:text-accent transition-colors">
                Explore Solution <div className="h-px flex-1 bg-white/10 group-hover:bg-accent/20"></div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export { Services };
