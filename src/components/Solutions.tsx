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
    <SectionWrapper id="solutions" className="bg-primary overflow-hidden">
      <SectionHeading
        title="Tailored for Your Ambition"
        subtitle="We provide specialized expertise for businesses at every stage of their digital journey."
        centered
        variant="dark"
      />

      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.slice(0, 2).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-white/5 border-white/10 hover:border-accent/30 p-12 text-left flex flex-col group relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/10 rounded-full blur-[60px] group-hover:bg-accent/20 transition-colors"></div>
                <div className="mb-8 p-4 w-fit rounded-2xl bg-white/10 text-accent">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-lg font-medium">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {solutions.slice(2).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/5 border-white/10 hover:border-accent/30 p-12 text-left flex flex-col md:flex-row items-center gap-12 group relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,var(--color-accent)_0%,transparent_60%)] opacity-5 group-hover:opacity-10 transition-opacity"></div>
              <div className="md:w-1/2 relative z-10">
                <div className="mb-8 p-4 w-fit rounded-2xl bg-white/10 text-accent">
                  {item.icon}
                </div>
                <h3 className="text-4xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-xl font-medium">
                  {item.description}
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center relative z-10">
                 <div className="w-full h-64 border border-white/10 rounded-3xl bg-white/5 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-white/20 font-bold text-6xl tracking-tighter uppercase italic">Enterprise</div>
                 </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export { Solutions };
