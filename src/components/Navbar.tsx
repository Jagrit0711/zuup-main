import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useAdminAuth } from '@/contexts/AdminAuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, logout } = useAdminAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-black/20' : 'bg-transparent'
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
              className="h-10 w-auto md:h-14"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/" active={isActive('/')}>Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="/our-story" isRoute active={isActive('/our-story')}>Our Story</NavLink>
            <NavLink href="/team" isRoute active={isActive('/team')}>Team</NavLink>
            <NavLink href="/job-recommendations" isRoute active={isActive('/job-recommendations')}>AI Jobs</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a href="https://zuupgallery.lovable.app/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/5">
              Gallery
            </a>
            {isAuthenticated ? (
              <>
                <NavLink href="/admin" isRoute active={isActive('/admin')}>Dashboard</NavLink>
                <button onClick={logout} className="text-gray-400 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/5">
                  Logout
                </button>
              </>
            ) : (
              <NavLink href="/admin" isRoute active={isActive('/admin')}>Admin</NavLink>
            )}
            <Link to="/apply" className="ml-2 px-4 py-2 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Apply Now
            </Link>
          </div>
          
          <motion.button
            className="md:hidden text-gray-300 hover:text-white p-2"
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
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
              <MobileNavLink href="/our-story" isRoute onClick={() => setIsOpen(false)}>Our Story</MobileNavLink>
              <MobileNavLink href="/team" isRoute onClick={() => setIsOpen(false)}>Our Team</MobileNavLink>
              <MobileNavLink href="/job-recommendations" isRoute onClick={() => setIsOpen(false)}>AI Jobs</MobileNavLink>
              <MobileNavLink href="/blog" isRoute onClick={() => setIsOpen(false)}>Blog</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
              <a href="https://zuupgallery.lovable.app/" target="_blank" rel="noopener noreferrer"
                 className="block text-gray-400 hover:text-white px-3 py-2.5 rounded-lg text-base font-medium transition-colors hover:bg-white/5">
                Gallery
              </a>
              {isAuthenticated ? (
                <>
                  <MobileNavLink href="/admin" isRoute onClick={() => setIsOpen(false)}>Dashboard</MobileNavLink>
                  <button onClick={() => { logout(); setIsOpen(false); }}
                    className="block w-full text-left text-gray-400 hover:text-white px-3 py-2.5 rounded-lg text-base font-medium transition-colors hover:bg-white/5">
                    Logout
                  </button>
                </>
              ) : (
                <MobileNavLink href="/admin" isRoute onClick={() => setIsOpen(false)}>Admin</MobileNavLink>
              )}
              <Link to="/apply" onClick={() => setIsOpen(false)}
                className="block text-center mt-3 px-4 py-2.5 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white font-semibold rounded-lg">
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
    active ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
  }`;
  
  if (isRoute) return <Link to={href} className={className}>{children}</Link>;
  return <a href={href} className={className}>{children}</a>;
};

const MobileNavLink = ({ href, children, isRoute, onClick }: { href: string; children: React.ReactNode; isRoute?: boolean; onClick?: () => void }) => {
  const className = "block text-gray-400 hover:text-white px-3 py-2.5 rounded-lg text-base font-medium transition-colors hover:bg-white/5";
  
  if (isRoute) return <Link to={href} className={className} onClick={onClick}>{children}</Link>;
  return <a href={href} className={className} onClick={onClick}>{children}</a>;
};

export default Navbar;
