"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/Button";
import {
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      tagline: "Your fractional part-time team",
      price: "$6k",
      period: "per month",
      features: [
        "A fully dedicated part-time team",
        "Design, Web & JS tasks",
        "Daily Support",
        "Live meetings and Slack support",
        "Requires a 1 month commitment"
      ]
    },
    {
      name: "Full Time",
      tagline: "Your dedicated engineering squad",
      price: "$12k",
      period: "per month",
      popular: true,
      features: [
        "A fully dedicated full-time team",
        "Everything from the starter pack",
        "Automated software bug QA",
        "Automated System Audits",
        "Requires a 3 month commitment"
      ]
    },
    {
      name: "Custom Software",
      tagline: "For those looking to build from 0-1",
      price: "$10k+",
      period: "per project",
      features: [
        "Fast and modern architecture",
        "Use of components and variants",
        "Scale-ready design system",
        "On-page SEO and GEO",
        "~4 to 12 weeks turn around"
      ]
    }
  ];

  return (
    <SectionWrapper id="pricing" className="bg-black py-24 md:py-32 overflow-hidden border-t border-white/10">
      <div className="flex flex-col gap-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-6">pricing</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tighter text-white leading-[0.95] mb-4">
            Easy & scalable, <br className="hidden md:inline" /> the way it should be
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "p-10 rounded-[2rem] border transition-all flex flex-col h-full relative",
                plan.popular
                  ? "bg-white border-white shadow-[0_20px_60px_rgba(255,255,255,0.1)] scale-105 z-10"
                  : "bg-zinc-900 border-white/5 hover:border-white/20"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className={cn("text-3xl font-bold mb-2", plan.popular ? "text-black" : "text-white")}>{plan.name}</h3>
                <p className={cn("text-sm font-medium", plan.popular ? "text-black/60" : "text-muted")}>{plan.tagline}</p>
              </div>

              <div className="mb-10">
                <div className={cn("text-5xl font-black tracking-tight", plan.popular ? "text-black" : "text-white")}>{plan.price}</div>
                <div className={cn("text-sm font-bold uppercase tracking-widest mt-2", plan.popular ? "text-black/40" : "text-muted")}>{plan.period}</div>
              </div>

              <ul className="flex flex-col gap-4 mb-12 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5", plan.popular ? "bg-black/5 text-black" : "bg-white/5 text-white")}>
                      <Check size={12} />
                    </div>
                    <span className={cn("text-sm font-medium leading-relaxed", plan.popular ? "text-black/70" : "text-muted")}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "primary" : "outline"}
                size="lg"
                className={cn(
                  "w-full rounded-full font-bold",
                  plan.popular ? "bg-black text-white hover:bg-black/90" : "border-white/10 hover:bg-white hover:text-black"
                )}
                onClick={() => window.open("https://cal.com/madhusudan-rawat", "_blank")}
              >
                Schedule a 30 intro call
              </Button>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export { Pricing };
