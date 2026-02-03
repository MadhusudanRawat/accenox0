"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Target, Eye, Shield } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Target className="text-accent" size={28} />,
      title: "Our Mission",
      description: "To empower businesses by removing technical friction and automating repetitive tasks through intelligent software solutions."
    },
    {
      icon: <Eye className="text-accent" size={28} />,
      title: "Our Vision",
      description: "To be the preferred global partner for digital transformation, setting the standard for scalability and user-centric design."
    },
    {
      icon: <Shield className="text-accent" size={28} />,
      title: "Our Values",
      description: "Integrity, innovation, and a relentless focus on delivering measurable outcomes for our clients, from startups to enterprises."
    }
  ];

  return (
    <SectionWrapper id="about" className="bg-secondary/50">
      <SectionHeading
        title="About Accenox"
        subtitle="We are a team of dedicated engineers and designers focused on building the future of business automation."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col items-center text-center p-8">
              <div className="mb-6 p-3 rounded-2xl bg-accent/10 border border-accent/20">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted leading-relaxed">
                {item.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20 p-12 bg-primary rounded-3xl text-white text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Built for Scale</h3>
        <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
          Founded on the principle that technology should be an enabler, not a hurdle.
          Accenox bridges the gap between complex business requirements and elegant digital execution.
          We don&apos;t just write code; we solve business problems.
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export { About };
