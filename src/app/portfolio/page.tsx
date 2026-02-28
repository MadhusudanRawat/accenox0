"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { ArrowUpRight, Globe, Smartphone, Code2, Database } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "All Work", icon: <Globe size={18} /> },
  { id: "wordpress", name: "WordPress", icon: <Database size={18} /> },
  { id: "shopify", name: "Shopify", icon: <Globe size={18} /> },
  { id: "mern", name: "MERN Stack", icon: <Code2 size={18} /> },
  { id: "nextjs", name: "Next.js", icon: <Code2 size={18} /> },
  { id: "applications", name: "Applications", icon: <Smartphone size={18} /> },
];

const projects = [
  {
    id: 1,
    title: "EcoCommerce Hub",
    category: "shopify",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800",
    link: "#",
    description: "Sustainable fashion marketplace with custom liquid templates."
  },
  {
    id: 2,
    title: "Corporate Pulse",
    category: "wordpress",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    link: "#",
    description: "Enterprise-grade multi-site WordPress architecture."
  },
  {
    id: 3,
    title: "SaaS Analytics Dashboard",
    category: "mern",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=800",
    link: "#",
    description: "Real-time data visualization platform built with MongoDB and Express."
  },
  {
    id: 4,
    title: "Modern Portfolio",
    category: "nextjs",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    link: "#",
    description: "High-performance portfolio with Next.js and Tailwind CSS."
  },
  {
    id: 5,
    title: "Fitness Tracker App",
    category: "applications",
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80&w=800",
    link: "#",
    description: "Cross-platform mobile app for tracking daily workouts."
  },
  {
    id: 6,
    title: "Luxury Watch Shop",
    category: "shopify",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    link: "#",
    description: "Premium Shopify Plus store with custom 3D product viewing."
  },
  {
    id: 7,
    title: "Tech News Portal",
    category: "wordpress",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
    link: "#",
    description: "High-traffic news site with custom editorial workflows."
  },
  {
    id: 8,
    title: "Crypto Wallet Manager",
    category: "nextjs",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
    link: "#",
    description: "Secure Next.js application for managing digital assets."
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#000000] pt-32 pb-24">
      <SectionWrapper>
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A3FF] text-white text-[10px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1 h-1 rounded-full bg-white animate-pulse"></span>
              Portfolio
              <span className="w-1 h-1 rounded-full bg-white animate-pulse"></span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 font-serif">
              Selected Works.
            </h1>
            <p className="text-xl text-white/60 font-medium max-w-2xl">
              A showcase of our engineering excellence across diverse technologies and industries.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-32 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 no-scrollbar">
              <h3 className="hidden lg:block text-[11px] font-black uppercase tracking-[0.2em] text-white/30 mb-4 ml-4">Technologies</h3>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all text-left group whitespace-nowrap lg:whitespace-normal",
                    activeCategory === cat.id
                      ? "bg-[#00A3FF] text-white shadow-xl shadow-[#00A3FF]/20 scale-105"
                      : "text-white/50 hover:bg-white/[0.03] hover:text-white bg-white/5 lg:bg-transparent"
                  )}
                >
                  <span className={cn(
                    "transition-transform duration-300",
                    activeCategory === cat.id ? "text-white" : "group-hover:scale-110"
                  )}>
                    {cat.icon}
                  </span>
                  {cat.name}
                </button>
              ))}
            </div>
          </aside>

          {/* Right Side: Project Grid */}
          <div className="flex-1">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className="group p-0 overflow-hidden border-none shadow-none bg-white/5 hover:bg-white/[0.08] transition-colors border border-white/10">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                          <a
                            href={project.link}
                            className="w-14 h-14 bg-[#00A3FF] rounded-full flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-[#0082CC] hover:scale-110"
                          >
                            <ArrowUpRight size={24} />
                          </a>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold tracking-tight mb-3 text-white group-hover:text-[#00A3FF] transition-colors font-serif">
                          {project.title}
                        </h3>
                        <p className="text-white/60 font-medium text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
              <div className="h-96 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-white/40 mb-4">
                  <Globe size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">No projects found</h3>
                <p className="text-white/60">Stay tuned! We are constantly updating our portfolio.</p>
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
