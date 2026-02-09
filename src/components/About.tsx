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
      description: "Eliminating operational drag through high-performance software architecture and intuitive user experiences that empower focus."
    },
    {
      icon: <Eye className="text-accent" size={28} />,
      title: "Our Vision",
      description: "Defining the next generation of enterprise efficiency through seamless digital integration and scalable cloud-native ecosystems."
    },
    {
      icon: <Shield className="text-accent" size={28} />,
      title: "Our Values",
      description: "Precision engineering, outcome-centric design, and unwavering technical integrity in every line of code we ship."
    }
  ];

  return (
    <SectionWrapper id="about" className="bg-background overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div>
          <SectionHeading
            title="Architecting Velocity."
            subtitle="At Accenox, we don't just write code; we architect systems. We partner with visionaries to transform manual bottlenecks into automated, high-throughput engines."
            className="mb-12"
            variant="dark"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
            className="space-y-8"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="flex gap-6 items-start"
              >
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight">Built for <br /><span className="text-accent italic">Unrivaled</span> Performance</h3>
            <p className="text-white/60 text-lg lg:text-xl leading-relaxed font-medium">
              We bridge the gap between high-level business strategy and elegant technical execution.
              Our engineering philosophy is rooted in long-term resilience and measurable ROI.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export { About };
