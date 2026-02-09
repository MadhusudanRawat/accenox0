"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Plus,
  ListTodo,
  CheckCircle2,
  Zap,
  Layers,
  Check,
  Figma
} from "lucide-react";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const [includeDesign, setIncludeDesign] = useState(false);
  const [includeExtraMarketing, setIncludeExtraMarketing] = useState(false);

  const starterBasePrice = 10000;
  const designPrice = 5000;

  const growthBasePrice = 5000;
  const marketingAddon = 1000;

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <SectionWrapper id="pricing" className="bg-background relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest mb-6 border border-white/10">
            <span className="w-1 h-1 rounded-full bg-accent animate-pulse"></span>
            Pricing
            <span className="w-1 h-1 rounded-full bg-accent animate-pulse"></span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4">
            Flexible Pricing.
          </h2>
        </div>
        <p className="text-white/60 font-medium max-w-sm text-lg md:text-right">
          Transparent engineering partnerships.
          Fixed-price deployments. Continuous performance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Info Blocks */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-4 flex flex-col gap-4"
        >
          <motion.div variants={itemVariants}>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 flex flex-col gap-6 group">
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white">
                  <Plus size={20} />
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Initialize</h3>
                <p className="text-white/60 text-sm font-medium">Align our engineering resources with your strategic roadmap.</p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 flex flex-col gap-6 group">
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white">
                  <ListTodo size={20} />
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  <div className="text-white/20 w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Execute</h3>
                <p className="text-white/60 text-sm font-medium">Establish a dedicated development channel with rapid feedback loops.</p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 flex flex-col gap-6 group">
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white">
                  <CheckCircle2 size={20} />
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Scale</h3>
                <p className="text-white/60 text-sm font-medium">Iterate and deploy production-ready updates every 48 hours.</p>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Growth Retainer (Monthly) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-4"
        >
          <Card className="bg-white/10 h-full p-8 border-white/10 shadow-2xl shadow-black/20 flex flex-col">
            <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center mb-8">
              <Zap size={24} fill="currentColor" />
            </div>

            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white">Growth Retainer</h3>
              <div className="text-right">
                <div className="text-3xl font-black text-white">${(growthBasePrice + (includeExtraMarketing ? marketingAddon : 0)).toLocaleString()}</div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-wider">per month</div>
              </div>
            </div>

            <p className="text-white/60 text-sm font-medium mb-8">
              Continuous engineering and strategic optimization to maintain your competitive edge.
            </p>

            <div className="bg-white/5 rounded-2xl p-4 mb-8 flex items-center justify-between border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                  <Zap size={16} />
                </div>
                <span className="text-sm font-bold">Extra Marketing</span>
              </div>
              <button
                onClick={() => setIncludeExtraMarketing(!includeExtraMarketing)}
                className={cn(
                  "w-12 h-6 rounded-full transition-colors relative",
                  includeExtraMarketing ? "bg-accent" : "bg-muted/30"
                )}
              >
                <motion.div
                  className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm"
                  animate={{ x: includeExtraMarketing ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Ongoing Development",
                "Social Media Management",
                "SEO Optimization",
                "Digital Marketing Services",
                "Async communication",
                "Flexible scope",
                "Pause anytime"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/80">
                  <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0">
                    <Plus size={12} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Button className="w-full h-14 text-lg font-bold">Get in touch</Button>
          </Card>
        </motion.div>

        {/* Launch Deployment (One-time) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:col-span-4"
        >
          <Card className="bg-primary text-white h-full p-8 border-transparent shadow-2xl shadow-primary/20 flex flex-col">
            <div className="w-12 h-12 bg-white text-primary rounded-xl flex items-center justify-center mb-8">
              <Layers size={24} />
            </div>

            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">Launch Deployment</h3>
              <div className="text-right">
                <div className="text-3xl font-black">${(starterBasePrice + (includeDesign ? designPrice : 0)).toLocaleString()}</div>
                <div className="text-xs font-bold text-white/60 uppercase tracking-wider">One-time</div>
              </div>
            </div>

            <p className="text-white/60 text-sm font-medium mb-8">
              End-to-end architecture and deployment for your next breakthrough digital product.
            </p>

            <div className="bg-white/10 rounded-2xl p-4 mb-8 flex items-center justify-between border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Figma size={16} />
                </div>
                <span className="text-sm font-bold">Figma Design</span>
              </div>
              <button
                onClick={() => setIncludeDesign(!includeDesign)}
                data-testid="figma-toggle"
                className={cn(
                  "w-12 h-6 rounded-full transition-colors relative",
                  includeDesign ? "bg-accent" : "bg-white/20"
                )}
              >
                <motion.div
                  className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm"
                  animate={{ x: includeDesign ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Dedicated team of experts",
                "End-to-End Web Development",
                "Fully Custom Timeline & Scope",
                "Async communication",
                "Advanced SEO & Marketing",
                "Updates every 48 hours"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0">
                    <Plus size={12} />
                  </div>
                  {item}
                </li>
              ))}
              {includeDesign && (
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 text-sm font-bold text-accent"
                >
                  <div className="w-5 h-5 rounded-full border border-accent flex items-center justify-center shrink-0">
                    <Check size={12} />
                  </div>
                  Premium Figma Design Files
                </motion.li>
              )}
            </ul>

            <Button variant="secondary" className="w-full h-14 text-lg font-bold">Get in touch</Button>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export { Pricing };
