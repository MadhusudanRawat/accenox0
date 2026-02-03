"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Rocket, Building2, Globe } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: <Rocket className="text-accent" size={32} />,
      title: "Startups",
      description: "Fast-track your MVP development and scale with a solid technical foundation that grows with your user base."
    },
    {
      icon: <Building2 className="text-accent" size={32} />,
      title: "SMEs",
      description: "Optimize your operations and modernize your legacy systems to stay competitive in an ever-changing digital landscape."
    },
    {
      icon: <Globe className="text-accent" size={32} />,
      title: "Enterprises",
      description: "Implement complex, large-scale digital transformations and robust automation solutions that integrate with existing workflows."
    }
  ];

  return (
    <SectionWrapper id="solutions" className="bg-primary">
      <SectionHeading
        title="Tailored Solutions"
        subtitle="We provide specialized expertise for businesses at every stage of their digital journey."
        centered
        variant="dark"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <Card className="h-full bg-white/5 border-white/10 hover:border-accent/50 p-10 text-center flex flex-col items-center">
              <div className="mb-6 p-4 rounded-full bg-white/10">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {item.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export { Solutions };
