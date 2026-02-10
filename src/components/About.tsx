"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
    <SectionWrapper id="about" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionHeading
            title="Engineered for the Modern Era"
            subtitle="Accenox is more than a software agency. We are a strategic technical partner for companies that refuse to be limited by their infrastructure."
            className="mb-12"
          />

          <div className="space-y-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="p-3 rounded-2xl bg-secondary border border-border shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square md:aspect-video lg:aspect-square bg-primary rounded-5xl overflow-hidden p-12 flex flex-col justify-end group"
        >
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,var(--color-accent)_0%,transparent_50%)]"></div>
          <div className="absolute top-12 right-12 w-24 h-24 border border-white/20 rounded-full flex items-center justify-center text-white/40 group-hover:text-accent group-hover:border-accent transition-all duration-500">
             <Target size={40} />
          </div>

          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-white mb-6 leading-tight">Built for <br /><span className="text-accent italic">Exceptional</span> Scale</h3>
            <p className="text-white/70 text-lg leading-relaxed">
              We bridge the gap between complex business requirements and elegant digital execution.
              Our focus is on long-term scalability and measurable outcomes.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export { About };
