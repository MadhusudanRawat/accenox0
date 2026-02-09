"use client";

import { motion, Variants } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { BadgeCheck } from "lucide-react";

const SuccessStories = () => {
  const cases = [
    {
      company: "Global Finance Corp",
      result: "90% Reduction in Processing Time",
      description: "Architected an automated document ingestion engine that transformed 12-hour manual workflows into 5-minute automated cycles.",
      tags: ["Automation", "Enterprise Core"]
    },
    {
      company: "NovaHealth Ecosystem",
      result: "150% Increase in User Engagement",
      description: "Developed a secure, cloud-native patient portal that scaled from 1k to 50k active monthly users with zero downtime.",
      tags: ["Mobile Ecosystem", "Cloud Arch"]
    },
    {
      company: "LogiStream Analytics",
      result: "Unified Data Synchronicity",
      description: "Integrated 15 legacy APIs into a unified real-time telemetry dashboard, providing a single source of truth for global logistics.",
      tags: ["Data Engineering", "Integrations"]
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
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <SectionWrapper id="success" className="bg-white">
      <SectionHeading
        title="Operational Impact."
        subtitle="Tangible business outcomes delivered through technical excellence and strategic workflow automation."
        centered
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {cases.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
          >
            <Card className="h-full flex flex-col p-10 bg-secondary/20 border-border/40 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
              <div className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest mb-6">
                <BadgeCheck size={16} />
                {item.result}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{item.company}</h3>
              <p className="text-muted/80 leading-relaxed mb-10 flex-1 font-medium italic text-lg">
                &quot;{item.description}&quot;
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-primary/5 text-primary text-[10px] uppercase tracking-[0.2em] font-black rounded-full border border-primary/5">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export { SuccessStories };
