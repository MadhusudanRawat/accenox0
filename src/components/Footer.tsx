import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black pt-32 pb-16 px-6 sm:px-12 md:px-24 border-t border-white/5 overflow-hidden text-white bg-grain">
      <div className="max-w-7xl mx-auto relative">
        {/* Background Decorative Element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <Link href="/" className="text-3xl font-black tracking-tighter text-white">
              ACCENOX
            </Link>
            <p className="mt-8 text-xl text-white/60 font-medium leading-relaxed max-w-md">
              Architecting the resilient digital cores and automated ecosystems that power industry-leading enterprises.
            </p>
            <div className="flex gap-4 mt-10">
              {[
                { Icon: Linkedin, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Github, href: "#" }
              ].map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="group w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/30 hover:bg-accent/10 transition-all duration-300"
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 flex flex-wrap gap-12 lg:justify-end">
            <Link href="/portfolio" className="text-white/60 font-bold hover:text-white transition-colors">
              Our Work
            </Link>
            <Link href="/#services" className="text-white/60 font-bold hover:text-white transition-colors">
              Web Engineering Services
            </Link>
            <Link href="/#testimonials" className="text-white/60 font-bold hover:text-white transition-colors">
              Wall of Love
            </Link>
            <Link href="/#pricing" className="text-white/60 font-bold hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/#contact" className="text-white/60 font-bold hover:text-white transition-colors">
              Schedule a Call
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
            © {new Date().getFullYear()} Accenox. Built for the future.
          </p>

          <div className="flex items-center gap-2 group cursor-default">
            <div className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 group-hover:text-white/40 transition-colors">
              Systems Operational
            </span>
          </div>
        </div>

        {/* Massive Background Text */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-50">
          <span className="text-[18vw] font-black text-white/[0.02] leading-none tracking-tighter">
            ACCENOX
          </span>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
