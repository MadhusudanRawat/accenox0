"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Accenox transformed our chaotic workflow into a well-oiled machine. Their automation expertise is second to none.",
      author: "Sarah Jenkins",
      role: "COO, FinTech Pro"
    },
    {
      quote: "The team at Accenox doesn't just build apps; they build business solutions. Professional, responsive, and highly skilled.",
      author: "Michael Chen",
      role: "Founder, HealthCore"
    },
    {
      quote: "Working with Accenox felt like having an elite technical team in-house. They delivered beyond our expectations.",
      author: "Elena Rodriguez",
      role: "CTO, EcoLogistics"
    }
  ];

  return (
    <SectionWrapper id="testimonials">
      <SectionHeading
        title="Trusted by Leaders"
        subtitle="Don't just take our word for it. Here's what our partners have to say."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative"
          >
            <Quote className="absolute -top-8 -left-4 md:-top-10 md:-left-6 text-accent/20 w-12 h-12 md:w-20 md:h-20" />
            <div className="relative z-10">
              <p className="text-xl italic text-primary leading-relaxed mb-8">
                &quot;{item.quote}&quot;
              </p>
              <div>
                <h4 className="font-bold text-primary">{item.author}</h4>
                <p className="text-muted text-sm">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export { Testimonials };
