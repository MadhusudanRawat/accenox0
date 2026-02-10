"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Code2, Smartphone, Cpu, Zap, ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="text-white" size={24} />,
      title: "Web Development",
      description: "High-performance, responsive websites and progressive web apps built with modern frameworks.",
      color: "bg-blue-600"
    },
    {
      icon: <Smartphone className="text-white" size={24} />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions that provide seamless user experiences on iOS and Android.",
      color: "bg-indigo-600"
    },
    {
      icon: <Cpu className="text-white" size={24} />,
      title: "Custom Software",
      description: "Tailored enterprise software designed to solve your specific business challenges and drive efficiency.",
      color: "bg-slate-800"
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: "Automation & Integrations",
      description: "Connect your tools and automate workflows to eliminate manual work and reduce human error.",
      color: "bg-teal-600"
    }
  ];

  return (
    <SectionWrapper id="services" className="bg-secondary/30">
      <SectionHeading
        title="Expertise"
        subtitle="We combine technical mastery with business intuition to build solutions that drive results."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group h-full p-10 flex flex-col hover:border-accent/40 bg-white">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/20">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-between">
                {service.title}
                <ArrowUpRight size={20} className="text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all" />
              </h3>
              <p className="text-muted leading-relaxed font-medium">
                {service.description}
              </p>

              <div className="mt-auto pt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/40 group-hover:text-accent transition-colors">
                Explore Solution <div className="h-px flex-1 bg-border group-hover:bg-accent/20"></div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export { Services };
