"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Solutions", href: "/#solutions" },
    { name: "Process", href: "/#process" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <nav className="w-full max-w-5xl bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-full px-2 py-2 flex items-center justify-between pointer-events-auto">
        <Link href="/" className="pl-6 text-xl font-black tracking-tighter text-white group">
          ACCENOX<span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-5 py-2 text-[13px] font-bold text-white/50 hover:text-white rounded-full hover:bg-white/5 transition-all"
            >
              {link.name}
            </Link>
          ))}
          <div className="ml-4 pr-1">
            <Button
              size="sm"
              className="rounded-full px-6 font-bold bg-white text-black hover:bg-white/90 border-none transition-all hover:scale-105 active:scale-95"
              onClick={() => {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden pr-2">
          <button
            className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] pointer-events-auto md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-20 left-6 right-6 md:hidden bg-black/95 backdrop-blur-3xl border border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden pointer-events-auto"
            >
              <div className="p-10 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-3xl font-bold text-white tracking-tighter hover:translate-x-2 transition-transform"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="h-px bg-white/10 w-full" />
                <Button
                  className="w-full py-8 text-xl rounded-2xl font-bold bg-white text-black"
                  onClick={() => {
                    setIsOpen(false);
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Navbar };
