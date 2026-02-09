"use client";

import { motion, Variants } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Rocket, Building2, Globe } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: <Rocket className="text-accent" size={32} />,
      title: "Venture-Scale Startups",
      description: "Accelerate your path to Product-Market Fit. We build production-ready architectures that ensure your technology is a strategic asset, not a scaling bottleneck."
    },
    {
      icon: <Building2 className="text-accent" size={32} />,
      title: "Mid-Market Growth",
      description: "Modernize without operational friction. We audit and transform legacy workflows into high-efficiency digital ecosystems that drive tangible margin expansion."
    },
    {
      icon: <Globe className="text-accent" size={32} />,
      title: "Global Enterprise",
      description: "Complex systems, simplified. We deliver resilient infrastructure and cross-departmental automation designed for sub-second synchronicity at scale."
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <SectionWrapper id="solutions" className="bg-primary overflow-hidden bg-grain">
      <SectionHeading
        title="Scalable Engineering."
        subtitle="Strategic technical partnership tailored to your operational complexity. We bridge the gap between technical roadmap and business velocity."
        centered
        variant="dark"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.slice(0, 2).map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card className="h-full bg-white/5 border-white/10 hover:border-accent/30 p-12 text-left flex flex-col group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5">
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
            variants={itemVariants}
          >
            <Card className="bg-white/5 border-white/10 hover:border-accent/30 p-12 text-left flex flex-col md:flex-row items-center gap-12 group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5">
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
      </motion.div>
    </SectionWrapper>
  );
};

export { Solutions };
