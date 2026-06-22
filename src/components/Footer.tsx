import { Instagram, Heart, Github, Youtube, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TransparentMoza from './TransparentMoza';

const Footer = () => {
  return (
    <footer className="relative bg-[#000000] text-gray-400 overflow-hidden border-t border-border/50">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      
      {/* Scattered Background Mozas */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Right */}
        <div className="absolute top-10 right-4 md:top-20 md:right-20 w-48 h-48 md:w-80 md:h-80 opacity-10 md:opacity-20">
          <TransparentMoza 
            src="/moza-laptop-inverted.png" 
            alt="Moza Laptop" 
            className="w-full h-full object-contain rotate-6"
          />
        </div>
        
        {/* Bottom Left */}
        <div className="absolute bottom-40 left-[-20px] md:bottom-20 md:left-10 w-56 h-56 md:w-96 md:h-96 opacity-[0.08] md:opacity-15">
          <TransparentMoza 
            src="/moza-graduate-inverted.png" 
            alt="Moza Graduate" 
            className="w-full h-full object-contain -rotate-12"
          />
        </div>
        
        {/* Center Bottom */}
        <div className="absolute bottom-10 right-1/4 md:bottom-10 md:right-1/3 w-40 h-40 md:w-64 md:h-64 opacity-10 md:opacity-15">
          <TransparentMoza 
            src="/moza-coffee-inverted.png" 
            alt="Moza Coffee" 
            className="w-full h-full object-contain rotate-12"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <motion.img
              src="/lovable-uploads/b44b8051-6117-4b37-999d-014c4c33dd13.png"
              alt="Zuup Logo"
              className="h-14 w-auto mb-6"
              whileHover={{ scale: 1.05 }}
            />
            <p className="text-white font-medium text-lg mb-1" style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px", fontSize: "24px" }}>
              Where you get your chance.
            </p>
            <p className="text-muted-foreground mb-6 font-mono text-sm">
              +91 11368172199
            </p>
            
            <div className="flex gap-4">
              <SocialLink href="https://github.com/jagrit0711" icon={<Github size={20} />} label="GitHub" />
              <SocialLink href="https://www.youtube.com/@joinzuup" icon={<Youtube size={20} />} label="YouTube" />
              <SocialLink href="https://www.instagram.com/joinzuup" icon={<Instagram size={20} />} label="Instagram" />
              <SocialLink href="https://zuupempower.substack.com/" icon={<FileText size={20} />} label="Substack" />
              <SocialLink href="mailto:hello@zuup.dev" icon={<Mail size={20} />} label="Email" />
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Zuup</h4>
            <ul className="space-y-4 font-medium">
              <FooterLink href="/our-story" isRoute>Our Story</FooterLink>
              <FooterLink href="/schools" isRoute>Schools</FooterLink>
              <FooterLink href="https://dashboard.zuup.dev">Dashboard</FooterLink>
              <FooterLink href="/privacy" isRoute>Privacy Policy</FooterLink>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Ecosystem</h4>
            <ul className="space-y-4 font-medium">
              <FooterLink href="/empower" isRoute>Empower</FooterLink>
              <FooterLink href="/events" isRoute>Events</FooterLink>
              <FooterLink href="/saas" isRoute>SaaS</FooterLink>
              <FooterLink href="/moza" isRoute>Theming Centre</FooterLink>
              <FooterLink href="/join" isRoute>Surprise Me! 🎲</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-mono text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Zuup.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-[#FF6D59] fill-[#FF6D59]" /> by teens
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children, isRoute }: { href: string; children: React.ReactNode; isRoute?: boolean }) => {
  const className = "text-gray-400 hover:text-white transition-colors flex items-center gap-2 group";

  if (isRoute) return <li><Link to={href} className={className}>{children}</Link></li>;
  return <li><a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}</a></li>;
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    href={href}
    aria-label={label}
    className="w-10 h-10 rounded-full border border-gray-800 bg-black flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
  </motion.a>
);

export default Footer;
