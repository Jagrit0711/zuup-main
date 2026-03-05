import { Instagram, Linkedin, Heart, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-accent/50 text-foreground overflow-hidden">
      <div className="h-px w-full bg-border" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <motion.img
              src="/lovable-uploads/b44b8051-6117-4b37-999d-014c4c33dd13.png"
              alt="Zuup Logo"
              className="h-12 w-auto mb-4"
              whileHover={{ scale: 1.05 }}
            />
            <p className="text-muted-foreground leading-relaxed max-w-md">
              A Zylon Labs Initiative empowering underprivileged youth through digital skill development and real opportunities. Building capability, not dependency.
            </p>
            <div className="flex gap-3 mt-6">
              <SocialLink href="https://www.instagram.com/zuup.official/" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="https://www.linkedin.com/in/jagritsachdev" icon={<Linkedin size={18} />} label="LinkedIn" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="/our-story" isRoute>Our Story</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="/terms" isRoute>Terms & Conditions</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              <FooterLink href="/job-recommendations" isRoute>AI Job Finder</FooterLink>
              <FooterLink href="/blog" isRoute>Blog</FooterLink>
              <FooterLink href="/hackathon" isRoute>Hackathon</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Zuup — Teen-Led NPO | zuup.dev | Founded by Jagrit Sachdev
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-primary fill-primary" /> by Zylon Labs
          </p>
          <nav className="sr-only" aria-label="SEO Links">
            <a href="https://zuup.dev">Zuup</a>
            <a href="https://code.zuup.dev">ZuupCode</a>
            <a href="https://time.zuup.dev">ZuupTime</a>
            <a href="https://zuup.dev/our-story">Our Story</a>
            <a href="https://zuup.dev/schools">Schools</a>
            <a href="https://zuup.dev/jagrit-sachdev">Jagrit Sachdev</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children, isRoute }: { href: string; children: React.ReactNode; isRoute?: boolean }) => {
  const className = "text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1 group";

  if (isRoute) return <li><Link to={href} className={className}>{children} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>;
  return <li><a href={href} className={className}>{children}</a></li>;
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    href={href}
    aria-label={label}
    className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-all"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
  </motion.a>
);

export default Footer;
