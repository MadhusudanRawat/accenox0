"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

  const starterBasePrice = 6000;
  const designPrice = 700;

  const growthBasePrice = 2999;
  const marketingAddon = 1499;

  return (
    <SectionWrapper id="pricing" className="bg-[#000000]">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A3FF] text-white text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1 h-1 rounded-full bg-white animate-pulse"></span>
            Pricing
            <span className="w-1 h-1 rounded-full bg-white animate-pulse"></span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4 font-serif">
            Flexible Pricing.
          </h2>
        </div>
        <p className="text-white/60 font-medium max-w-sm text-lg md:text-right">
          Pick your plan and start building today.
          One flat fee. Scalable solutions. Zero stress.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Info Blocks */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 flex flex-col gap-6 group">
            <div className="flex justify-between items-center">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#00A3FF]">
                <Plus size={20} />
              </div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00A3FF]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Subscribe</h3>
              <p className="text-white/60 text-sm font-medium">Pick a plan that fits your workflow</p>
            </div>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 flex flex-col gap-6 group">
            <div className="flex justify-between items-center">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#00A3FF]">
                <ListTodo size={20} />
              </div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00A3FF]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#00A3FF]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Request</h3>
              <p className="text-white/60 text-sm font-medium">Submit tasks via your dedicated portal</p>
            </div>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 flex flex-col gap-6 group">
            <div className="flex justify-between items-center">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#00A3FF]">
                <CheckCircle2 size={20} />
              </div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00A3FF]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#00A3FF]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#00A3FF]"></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Approve Or Revise</h3>
              <p className="text-white/60 text-sm font-medium">Receive updates in 2-3 business days</p>
            </div>
          </Card>
        </div>

        {/* Growth Plan (Monthly) */}
        <div className="lg:col-span-4">
          <Card className="bg-white/5 h-full p-8 border-white/10 shadow-2xl shadow-[#00A3FF]/5 flex flex-col group hover:border-[#00A3FF]/30 transition-colors">
            <div className="w-12 h-12 bg-[#00A3FF] text-white rounded-xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(0,163,255,0.3)]">
              <Zap size={24} fill="currentColor" />
            </div>

            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white font-serif">Growth Plan</h3>
              <div className="text-right">
                <div className="text-3xl font-black text-[#00A3FF]">${(growthBasePrice + (includeExtraMarketing ? marketingAddon : 0)).toLocaleString()}</div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-wider">per month</div>
              </div>
            </div>

            <p className="text-white/60 text-sm font-medium mb-8">
              Scale your business with continuous development and marketing support.
            </p>

            <div className="bg-white/5 rounded-2xl p-4 mb-8 flex items-center justify-between border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#00A3FF]">
                  <Zap size={16} />
                </div>
                <span className="text-sm font-bold text-white">Extra Marketing</span>
              </div>
              <button
                onClick={() => setIncludeExtraMarketing(!includeExtraMarketing)}
                className={cn(
                  "w-12 h-6 rounded-full transition-colors relative",
                  includeExtraMarketing ? "bg-[#00A3FF]" : "bg-white/20"
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
                  <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-[#00A3FF] shrink-0">
                    <Plus size={12} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Button className="w-full h-14 text-lg font-bold"
            onClick={() => window.open("https://cal.com/madhusudan-rawat", "_blank")}
            >Get in touch</Button>
          </Card>
        </div>

        {/* Starter Plan (One-time) */}
        <div className="lg:col-span-4">
          <Card className="bg-white text-black h-full p-8 border-transparent shadow-2xl shadow-white/10 flex flex-col">
            <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-8">
              <Layers size={24} />
            </div>

            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-black font-serif">Starter Plan</h3>
              <div className="text-right">
                <div className="text-3xl font-black text-black">${(starterBasePrice + (includeDesign ? designPrice : 0)).toLocaleString()}</div>
                <div className="text-xs font-bold text-black/40 uppercase tracking-wider">One-time</div>
              </div>
            </div>

            <p className="text-black/60 text-sm font-medium mb-8">
              Perfect for startups looking to build their first high-quality digital product.
            </p>

            <div className="bg-black/5 rounded-2xl p-4 mb-8 flex items-center justify-between border border-black/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-black">
                  <Figma size={16} />
                </div>
                <span className="text-sm font-bold text-black">Figma Design</span>
              </div>
              <button
                onClick={() => setIncludeDesign(!includeDesign)}
                data-testid="figma-toggle"
                className={cn(
                  "w-12 h-6 rounded-full transition-colors relative",
                  includeDesign ? "bg-black" : "bg-black/20"
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
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-black/80">
                  <div className="w-5 h-5 rounded-full border border-black/20 flex items-center justify-center text-black shrink-0">
                    <Plus size={12} />
                  </div>
                  {item}
                </li>
              ))}
              {includeDesign && (
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 text-sm font-bold text-black"
                >
                  <div className="w-5 h-5 rounded-full border border-black flex items-center justify-center shrink-0">
                    <Check size={12} />
                  </div>
                  Premium Figma Design Files
                </motion.li>
              )}
            </ul>

            <Button variant="primary" className="w-full h-14 text-lg font-bold bg-black text-white hover:bg-black/90 shadow-none"
            onClick={() => window.open("https://cal.com/madhusudan-rawat", "_blank")}
            >Get in touch</Button>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
};

export { Pricing };
