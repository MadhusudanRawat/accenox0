"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Accenox didn't just automate our processes; they re-engineered our operational DNA. We've achieved a level of scalability we previously thought was impossible.",
      author: "David Vance",
      role: "COO, Global Finance Corp"
    },
    {
      quote: "The depth of technical mastery at Accenox is exceptional. They bridge the gap between business strategy and digital execution with surgical precision.",
      author: "Dr. Aris Thorne",
      role: "Founder, NovaHealth"
    },
    {
      quote: "Their approach to systems architecture is truly forward-thinking. Our infrastructure is now a competitive advantage rather than a maintenance burden.",
      author: "Marcus Frey",
      role: "CTO, LogiStream"
    }
  ];

  return (
    <SectionWrapper id="testimonials">
      <SectionHeading
        title="Technical Validation."
        subtitle="Insights from the leaders and visionaries we've empowered with elite engineering."
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
