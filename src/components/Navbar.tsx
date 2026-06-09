import { useState, useEffect } from 'react';
import { Menu, X, Hash } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.div
      className="fixed w-full z-50 top-0 left-0 flex justify-center px-4 pt-6 pointer-events-none"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Desktop Navbar */}
      <nav 
        className={`pointer-events-auto hidden md:flex items-center gap-1 p-2 rounded-full transition-all duration-300 border ${
          scrolled 
            ? 'bg-black/60 backdrop-blur-xl border-white/20 shadow-2xl shadow-black/50' 
            : 'bg-black/40 backdrop-blur-md border-white/10'
        }`}
      >
        <Link to="/" className="flex items-center pl-4 pr-2 group">
          <motion.img
            src="/lovable-uploads/b44b8051-6117-4b37-999d-014c4c33dd13.png"
            alt="Zuup Logo"
            className="h-8 w-auto scale-[1.3] origin-left transition-transform duration-300"
            whileHover={{ scale: 1.4, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>

        <div className="flex items-center gap-1 pl-2 border-l border-white/10 ml-2">
          <NavLink href="/" active={isActive('/')}>Home</NavLink>
          <NavLink href="/about" isRoute active={isActive('/about')}>About</NavLink>
          <NavLink href="/our-story" isRoute active={isActive('/our-story')}>Our Story</NavLink>
          <NavLink href="/schools" isRoute active={isActive('/schools')}>Schools</NavLink>
          <NavLink href="/events" isRoute active={isActive('/events')}>Events</NavLink>
          <NavLink href="/saas" isRoute active={isActive('/saas')}>SaaS</NavLink>
          <NavLink href="/empower" isRoute active={isActive('/empower')}>Empower</NavLink>
          <NavLink href="/moza" isRoute active={isActive('/moza')}>Moza</NavLink>
        </div>

        <div className="flex items-center gap-2 pl-2 ml-2 border-l border-white/10">
          <a 
            href="https://zuup.dev/join" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,61,127,0.3)] hover:shadow-[0_0_30px_rgba(255,61,127,0.5)]"
          >
            <Hash size={16} /> Join
          </a>
        </div>
      </nav>

      {/* Mobile Navbar Container */}
      <div className="pointer-events-auto md:hidden w-full max-w-md mx-auto">
        <nav 
          className={`flex items-center justify-between p-3 rounded-full transition-all duration-300 border ${
            scrolled || isOpen
              ? 'bg-black/80 backdrop-blur-xl border-white/20' 
              : 'bg-black/40 backdrop-blur-md border-white/10'
          }`}
        >
          <Link to="/" className="flex items-center pl-2 group">
            <motion.img
              src="/lovable-uploads/b44b8051-6117-4b37-999d-014c4c33dd13.png"
              alt="Zuup Logo"
              className="h-8 w-auto scale-[1.3] origin-left"
            />
          </Link>
          
          <div className="flex items-center gap-2">
            <a 
              href="https://zuup.dev/join" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground text-sm font-bold rounded-full"
            >
              <Hash size={14} /> Join
            </a>
            <motion.button
              className="text-white p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mt-2 glass-card-strong border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                <MobileNavLink href="/" onClick={() => setIsOpen(false)} active={isActive('/')}>Home</MobileNavLink>
                <MobileNavLink href="/about" isRoute onClick={() => setIsOpen(false)} active={isActive('/about')}>About</MobileNavLink>
                <MobileNavLink href="/our-story" isRoute onClick={() => setIsOpen(false)} active={isActive('/our-story')}>Our Story</MobileNavLink>
                <MobileNavLink href="/schools" isRoute onClick={() => setIsOpen(false)} active={isActive('/schools')}>Schools</MobileNavLink>
                <MobileNavLink href="/events" isRoute onClick={() => setIsOpen(false)} active={isActive('/events')}>Events</MobileNavLink>
                <MobileNavLink href="/saas" isRoute onClick={() => setIsOpen(false)} active={isActive('/saas')}>SaaS</MobileNavLink>
                <MobileNavLink href="/empower" isRoute onClick={() => setIsOpen(false)} active={isActive('/empower')}>Empower</MobileNavLink>
                <MobileNavLink href="/moza" isRoute onClick={() => setIsOpen(false)} active={isActive('/moza')}>Moza</MobileNavLink>
                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const NavLink = ({ href, children, isRoute, active }: { href: string; children: React.ReactNode; isRoute?: boolean; active?: boolean }) => {
  const className = `px-4 py-2 rounded-full text-sm font-bold transition-all ${
    active ? 'text-white bg-white/10' : 'text-muted-foreground hover:text-white hover:bg-white/5'
  }`;
  if (isRoute) return <Link to={href} className={className}>{children}</Link>;
  return <a href={href} className={className}>{children}</a>;
};

const MobileNavLink = ({ href, children, isRoute, onClick, active }: { href: string; children: React.ReactNode; isRoute?: boolean; onClick?: () => void; active?: boolean }) => {
  const className = `block px-4 py-3 rounded-xl text-base font-bold transition-colors ${
    active ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-white hover:bg-white/5'
  }`;
  if (isRoute) return <Link to={href} className={className} onClick={onClick}>{children}</Link>;
  return <a href={href} className={className} onClick={onClick}>{children}</a>;
};

export default Navbar;
