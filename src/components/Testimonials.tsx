"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Leo and his team have been so amazing to work with over the years. Absolute game changers. Innovation is next level, communication is unmatched. Couldn’t be happier!",
      author: "Jason Hanlin",
      role: "Founder @ Guru Innovations"
    },
    {
      quote: "Working with Accenox was a fantastic experience. Their products are world-class and they did an outstanding job of guiding me through the engineering process. I strongly recommend them to any start-up founder.",
      author: "Sam Grote",
      role: "CEO @ North Carolina Business Forum"
    },
    {
      quote: "Accenox's designs are polished and well thought out. They take a step by step approach to ensure satisfaction along the way and are great with feedback. If you are looking for an engineering partner, I couldn't recommend them more.",
      author: "Whitney Sales",
      role: "CRO & Co-Founder @ ThoughtForge"
    },
    {
      quote: "All I can say is WOW. They are truly one-of-a-kind and will exceed your wildest expectations. Not only are they talented, they are also kind and humble. I can't recommend them enough.",
      author: "David Bitton",
      role: "CMO @ DoorLoop"
    },
    {
      quote: "They've built and managed my product, along with my technical strategies. They offer immediate advice and consultations, along with frequent and consistent feedback. Excellent all round.",
      author: "Kristi Mooti Persad",
      role: "Founder @ PQGC"
    },
    {
      quote: "Accenox is the first engineering team I worked with who immediately got my vision and was able to bring it to life. They understood exactly the type of architecture required for a whimsy luxury experience.",
      author: "Katherine Olaksen",
      role: "Founder @ The Fasting Flamingo"
    }
  ];

  return (
    <SectionWrapper id="testimonials" className="bg-black py-24 md:py-32 overflow-hidden border-t border-white/10">
      <div className="flex flex-col gap-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-6">wall of love</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tighter text-white leading-[0.95] mb-4">
            Don&apos;t just take <br className="hidden md:inline" /> our word for it
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid p-10 rounded-[2rem] bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all flex flex-col gap-8"
            >
              <p className="text-white text-lg font-medium leading-relaxed italic">
                &quot;{item.quote}&quot;
              </p>
              <div>
                <p className="text-white font-bold">{item.author}</p>
                <p className="text-muted text-xs uppercase tracking-widest font-bold mt-1">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export { Testimonials };
