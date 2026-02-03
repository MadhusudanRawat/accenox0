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
    <SectionWrapper id="services">
      <SectionHeading
        title="Our Services"
        subtitle="Comprehensive digital solutions tailored to your unique business needs."
        centered
      />

      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group flex flex-col md:flex-row items-center gap-6 p-2 pr-8 md:p-2 md:pr-10 rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <div className={`w-full md:w-32 h-32 ${service.color} flex items-center justify-center rounded-2xl shrink-0`}>
                {service.icon}
              </div>
              <div className="flex-1 py-4 px-6 md:px-0">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-muted leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
              <div className="hidden md:flex p-3 rounded-full bg-secondary text-muted group-hover:bg-accent group-hover:text-primary transition-colors">
                <ArrowUpRight size={20} />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export { Services };
