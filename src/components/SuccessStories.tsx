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
    <SectionWrapper id="success" className="bg-[#122C38]">
      <SectionHeading
        title="Impact"
        subtitle="Tangible results delivered through technical excellence and strategic automation."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cases.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            <Card className="h-full flex flex-col p-10 bg-[#1a3f52] border-[#DDF7CC]/10 hover:bg-[#1a3f52] hover:shadow-2xl hover:shadow-[#DDF7CC]/10 transition-all duration-500">
              <div className="inline-flex items-center gap-2 text-[#DDF7CC] font-bold text-xs uppercase tracking-widest mb-6">
                <BadgeCheck size={16} />
                {item.result}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#DDF7CC]">{item.company}</h3>
              <p className="text-[#a8c899]/80 leading-relaxed mb-10 flex-1 font-medium italic text-lg">
                &quot;{item.description}&quot;
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-[#DDF7CC]/5 text-[#DDF7CC] text-[10px] uppercase tracking-[0.2em] font-black rounded-full border border-[#DDF7CC]/10">
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
