import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16 px-6 sm:px-12 md:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-primary">
            ACCENOX
          </Link>
          <p className="mt-4 text-muted max-w-sm">
            Simplifying workflows and automating business processes with scalable digital solutions.
          </p>
          <div className="flex gap-4 mt-6">
            <Link href="#" className="text-muted hover:text-accent transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-muted hover:text-accent transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-muted hover:text-accent transition-colors">
              <Github size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-primary mb-4">Company</h4>
          <ul className="flex flex-col gap-2">
            <li><Link href="#about" className="text-muted hover:text-primary text-sm transition-colors">About Us</Link></li>
            <li><Link href="#services" className="text-muted hover:text-primary text-sm transition-colors">Services</Link></li>
            <li><Link href="#solutions" className="text-muted hover:text-primary text-sm transition-colors">Solutions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-primary mb-4">Contact</h4>
          <ul className="flex flex-col gap-2">
            <li className="text-muted text-sm italic">connect@accenox.com</li>
            <li className="text-muted text-sm">San Francisco, CA</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Accenox. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-xs text-muted hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-xs text-muted hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
