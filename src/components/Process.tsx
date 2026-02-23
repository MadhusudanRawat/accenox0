"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Search, PenTool, Code, LineChart } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <Search size={24} />,
      title: "Discover",
      description: "We dive deep into your business requirements and technical challenges."
    },
    {
      icon: <PenTool size={24} />,
      title: "Design",
      description: "User-centric design and technical architecture tailored to your goals."
    },
    {
      icon: <Code size={24} />,
      title: "Build",
      description: "Agile development with continuous integration and quality assurance."
    },
    {
      icon: <LineChart size={24} />,
      title: "Scale",
      description: "Launch, support, and ongoing optimization for long-term growth."
    }
  ];

  return (
    <SectionWrapper id="process" className="bg-[#122C38]">
      <SectionHeading
        title="Our Approach"
        subtitle="A proven, step-by-step process to transform your ideas into scalable digital reality."
        centered
      />

      <div className="relative mt-20">
        {/* Connection Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-[#DDF7CC]/10 -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-[#DDF7CC] border-4 border-[#1a3f52] flex items-center justify-center text-[#122C38] mb-6 group-hover:border-[#DDF7CC] group-hover:bg-[#DDF7CC] group-hover:text-[#122C38] transition-all duration-300 shadow-sm relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#122C38] text-[#DDF7CC] text-xs font-bold flex items-center justify-center">
                  0{index + 1}
                </div>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#DDF7CC]">{step.title}</h3>
              <p className="text-[#a8c899] text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export { Process };
