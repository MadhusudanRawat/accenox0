"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";

const About = () => {
  const reasons = [
    {
      tag: "Growth",
      title: "Built for Conversions",
      description: "Our engineering-focused approach blends smart architecture with growth strategy to turn software into business engines. Because you don’t just need code — you need performance."
    },
    {
      tag: "Team",
      title: "A Focused Squad",
      description: "We’re a specialized engineering team for B2B SaaS — not a solo act juggling 10 clients or an agency with layers of bloat. You get a tight crew that treats your product like our own."
    },
    {
      tag: "KPIs",
      title: "Results-Driven by Default",
      description: "On average, our clients see a 30–50% bump in operational efficiency post-deployment. Our development process is engineered to move metrics — not just pixels."
    },
    {
      tag: "Speed",
      title: "Launch in 90 Days",
      description: "Tired of endless dev cycles that never go live? We build and launch strategic software in under 3 months — fast, clean, and without compromising on quality or security."
    }
  ];

  return (
    <SectionWrapper id="about" className="bg-black py-24 md:py-32 overflow-hidden border-t border-white/10">
      <div className="flex flex-col gap-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="max-w-2xl">
            <p className="text-accent text-sm font-bold tracking-widest uppercase mb-6">reasons why brands choose us</p>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tighter text-white leading-[0.95] mb-8">
              Not Just Code. <br /> Real Business Impact.
            </h2>
          </div>
          <div className="max-w-xl pb-4">
            <p className="text-muted text-xl leading-relaxed font-medium">
              When engineering work lives in a backlog (or freelancer chaos), growth slows down. We plug into your product team with clear ownership and quality guardrails, so your software becomes a growth channel, not a bottleneck.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-accent/20 transition-all group"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold tracking-widest uppercase mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                {reason.tag}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{reason.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-3xl bg-zinc-900/30 border border-white/5 flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-accent/20 relative">
            <Image src="https://i.pravatar.cc/100?img=12" alt="Matthew Brown" fill className="object-cover" />
          </div>
          <div className="flex-1">
            <p className="text-white text-2xl font-medium leading-snug italic mb-6">
              &quot;Accenox&apos;s ability to quickly understand and execute our vision has been invaluable, making the entire design and engineering process seamless and efficient.&quot;
            </p>
            <div>
              <p className="text-white font-bold">Matthew Brown</p>
              <p className="text-muted text-sm uppercase tracking-widest font-bold">Founder & CEO @ ThoughtForge AI</p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export { About };
