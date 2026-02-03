"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { BadgeCheck } from "lucide-react";

const SuccessStories = () => {
  const cases = [
    {
      company: "FinTech Pro",
      result: "40% Increase in Productivity",
      description: "Implemented an automated document processing system that reduced manual data entry by 90%.",
      tags: ["Automation", "Custom SaaS"]
    },
    {
      company: "HealthCore",
      result: "Seamless Mobile Integration",
      description: "Developed a secure, HIPAA-compliant patient portal that serves over 50,000 active monthly users.",
      tags: ["Mobile App", "Compliance"]
    },
    {
      company: "EcoLogistics",
      result: "Real-time Supply Chain Visibility",
      description: "Built a custom dashboard that integrates 15+ data sources for real-time tracking and analytics.",
      tags: ["Web Dev", "Integrations"]
    }
  ];

  return (
    <SectionWrapper id="success" className="bg-secondary/30">
      <SectionHeading
        title="Client Success"
        subtitle="Real-world results delivered for businesses looking to scale their impact."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cases.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col p-8 bg-white border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-2">
              <div className="flex items-center gap-2 text-accent font-bold text-sm mb-4">
                <BadgeCheck size={18} />
                {item.result}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.company}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-secondary text-primary text-[10px] uppercase tracking-widest font-bold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export { SuccessStories };
