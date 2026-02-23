import Link from "next/link";
import { Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#122C38] pt-32 pb-16 px-6 sm:px-12 md:px-24 border-t border-[#DDF7CC]/5 overflow-hidden text-[#DDF7CC]">
      <div className="max-w-7xl mx-auto relative">
        {/* Background Decorative Element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#DDF7CC]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <Link href="/" className="text-3xl font-black tracking-tighter text-[#DDF7CC]">
              ACCENOX
            </Link>
            <p className="mt-8 text-xl text-[#a8c899] font-medium leading-relaxed max-w-md">
              Engineering the digital infrastructure that empowers ambitious companies to lead their industries.
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
                  className="group w-12 h-12 rounded-2xl bg-[#DDF7CC]/5 border border-[#DDF7CC]/10 flex items-center justify-center text-[#DDF7CC]/40 hover:text-[#DDF7CC] hover:border-[#DDF7CC]/30 hover:bg-[#DDF7CC]/10 transition-all duration-300"
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#DDF7CC]/30">Platform</h4>
              <ul className="flex flex-col gap-4">
                {["About", "Services", "Solutions", "Process", "Portfolio"].map(item => (
                  <li key={item}>
                    <Link href={item === "Portfolio" ? "/portfolio" : `/#${item.toLowerCase()}`} className="group flex items-center gap-1 text-[#DDF7CC]/80 font-bold hover:text-[#DDF7CC] transition-colors">
                      {item}
                      <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#DDF7CC]/30">Contact</h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="mailto:connect@accenox.com" className="text-[#DDF7CC]/80 font-bold hover:text-[#DDF7CC] transition-colors break-words">
                    connect@accenox.com
                  </Link>
                </li>
                <li className="text-[#DDF7CC]/80 font-bold">
                  San Francisco, CA
                </li>
              </ul>
            </div>

            <div className="space-y-8 col-span-2 sm:col-span-1">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#DDF7CC]/30">Legal</h4>
              <ul className="flex flex-col gap-4">
                {["Privacy", "Terms", "Cookies"].map(item => (
                  <li key={item}>
                    <Link href="#" className="text-[#DDF7CC]/80 font-bold hover:text-[#DDF7CC] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
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
