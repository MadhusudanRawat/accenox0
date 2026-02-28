"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="bg-[#000000] overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_center,#00A3FF_0%,transparent_70%)] opacity-10 blur-[100px] pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row gap-20 relative z-10 items-center">
        <div className="lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-none font-serif"
          >
            Let&apos;s build <br /><span className="text-[#00A3FF] italic">something</span> great.
          </motion.h2>
          <p className="text-white/60 text-xl mb-12 max-w-lg font-medium">
            Strategic technical partnership for companies looking to lead their industry through technology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <p className="text-xs text-white/40 uppercase tracking-widest font-black mb-2">General Inquiries</p>
              <p className="text-[#00A3FF] font-bold">connect@accenox.com</p>
            </div>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <p className="text-xs text-white/40 uppercase tracking-widest font-black mb-2">Call Our Office</p>
              <p className="text-[#00A3FF] font-bold">+91 7742832770</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full"
        >
          <Card className="p-10 md:p-12 bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl">
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label htmlFor="name" className="text-xs font-black uppercase tracking-[0.2em] text-white/40">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="h-14 px-6 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00A3FF]/50 focus:bg-white/10 transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="email" className="text-xs font-black uppercase tracking-[0.2em] text-white/40">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    className="h-14 px-6 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00A3FF]/50 focus:bg-white/10 transition-all font-medium"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="message" className="text-xs font-black uppercase tracking-[0.2em] text-white/40">Your Vision</label>
                <textarea
                  id="message"
                  rows={4}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00A3FF]/50 focus:bg-white/10 transition-all resize-none font-medium"
                  placeholder="Describe the challenge you're looking to solve..."
                ></textarea>
              </div>
              <Button type="submit" size="lg" variant="primary" className="w-full h-16 text-lg tracking-tight">
                Send Message <ArrowUpRight size={20} className="ml-2" />
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export { Contact };
