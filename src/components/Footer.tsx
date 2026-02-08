import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-24 px-6 sm:px-12 md:px-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="max-w-xs">
          <Link href="/" className="text-2xl font-black tracking-tighter text-primary">
            ACCENOX
          </Link>
          <p className="mt-6 text-muted font-medium leading-relaxed">
            The strategic technical partner for companies that refuse to be limited by their infrastructure.
          </p>
          <div className="flex gap-5 mt-8">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <Link key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all">
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/30 mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              {["About", "Services", "Solutions", "Process"].map(item => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-primary font-bold hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/30 mb-6">Inquiries</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="mailto:hello@accenox.com" className="text-primary font-bold hover:text-accent transition-colors">hello@accenox.com</Link></li>
              <li><p className="text-primary font-bold">San Francisco, CA</p></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/20">
          © {new Date().getFullYear()} Accenox. Built for the future.
        </p>
        <div className="flex gap-8">
          {["Privacy", "Terms", "Cookies"].map(item => (
            <Link key={item} href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/20 hover:text-accent transition-colors">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export { Footer };
