import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleHashLink = (hash: string) => {
    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-card-strong shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center group">
            <motion.img
              src="/lovable-uploads/b44b8051-6117-4b37-999d-014c4c33dd13.png"
              alt="Zuup Logo"
              className="h-10 w-auto md:h-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/" active={isActive('/')}>Home</NavLink>
            <HashNavLink onClick={() => handleHashLink('#about')}>About</HashNavLink>
            <NavLink href="/our-story" isRoute active={isActive('/our-story')}>Our Story</NavLink>
            <NavLink href="/schools" isRoute active={isActive('/schools')}>Schools</NavLink>
            <a href="https://code.zuup.dev" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg text-sm font-medium transition-all text-muted-foreground hover:text-foreground hover:bg-accent">ZuupCode</a>
            <a href="https://time.zuup.dev" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg text-sm font-medium transition-all text-muted-foreground hover:text-foreground hover:bg-accent">ZuupTime</a>
            <HashNavLink onClick={() => handleHashLink('#contact')}>Contact</HashNavLink>
            <Link to="/apply" className="ml-2 px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-md shadow-primary/15">
              Apply Now
            </Link>
          </div>

          <motion.button
            className="md:hidden text-muted-foreground hover:text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden glass-card-strong border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileHashNavLink onClick={() => { handleHashLink('#about'); setIsOpen(false); }}>About Us</MobileHashNavLink>
              <MobileNavLink href="/our-story" isRoute onClick={() => setIsOpen(false)}>Our Story</MobileNavLink>
              <MobileNavLink href="/schools" isRoute onClick={() => setIsOpen(false)}>Schools</MobileNavLink>
              <a href="https://code.zuup.dev" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block text-muted-foreground hover:text-foreground px-3 py-2.5 rounded-lg text-base font-medium transition-colors hover:bg-accent">ZuupCode</a>
              <a href="https://time.zuup.dev" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block text-muted-foreground hover:text-foreground px-3 py-2.5 rounded-lg text-base font-medium transition-colors hover:bg-accent">ZuupTime</a>
              <MobileHashNavLink onClick={() => { handleHashLink('#contact'); setIsOpen(false); }}>Contact</MobileHashNavLink>
              <Link to="/apply" onClick={() => setIsOpen(false)}
                className="block text-center mt-3 px-4 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl">
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const NavLink = ({ href, children, isRoute, active }: { href: string; children: React.ReactNode; isRoute?: boolean; active?: boolean }) => {
  const className = `px-3 py-2 rounded-lg text-sm font-medium transition-all ${
    active ? 'text-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-accent'
  }`;
  if (isRoute) return <Link to={href} className={className}>{children}</Link>;
  return <a href={href} className={className}>{children}</a>;
};

const HashNavLink = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <button onClick={onClick} className="px-3 py-2 rounded-lg text-sm font-medium transition-all text-muted-foreground hover:text-foreground hover:bg-accent">
    {children}
  </button>
);

const MobileNavLink = ({ href, children, isRoute, onClick }: { href: string; children: React.ReactNode; isRoute?: boolean; onClick?: () => void }) => {
  const className = "block text-muted-foreground hover:text-foreground px-3 py-2.5 rounded-lg text-base font-medium transition-colors hover:bg-accent";
  if (isRoute) return <Link to={href} className={className} onClick={onClick}>{children}</Link>;
  return <a href={href} className={className} onClick={onClick}>{children}</a>;
};

const MobileHashNavLink = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <button onClick={onClick} className="block w-full text-left text-muted-foreground hover:text-foreground px-3 py-2.5 rounded-lg text-base font-medium transition-colors hover:bg-accent">
    {children}
  </button>
);

export default Navbar;
