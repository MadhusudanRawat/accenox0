"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="bg-primary overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to scale your business?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-md">
            Schedule a free consultation with our experts and discover how we can help you automate and grow.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Mail size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Email Us</p>
                <p className="text-lg">connect@accenox.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Phone size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Call Us</p>
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <MapPin size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Visit Us</p>
                <p className="text-lg">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 md:p-10 bg-white border-none shadow-2xl">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-primary">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="h-12 px-4 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-primary">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    className="h-12 px-4 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-bold text-primary">Subject</label>
                <select
                  id="subject"
                  className="h-12 px-4 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all bg-white"
                >
                  <option>Automation Consultation</option>
                  <option>Custom Software Development</option>
                  <option>Web/Mobile App Project</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-primary">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="p-4 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full gap-2">
                Send Message <MessageSquare size={20} />
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export { Contact };
