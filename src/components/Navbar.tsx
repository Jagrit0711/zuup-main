import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAdminAuth } from '@/contexts/AdminAuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAdminAuth();

  return (
    <motion.nav 
      className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <motion.a 
              href="/" 
              className="flex items-center space-x-1 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img 
                src="/lovable-uploads/b44b8051-6117-4b37-999d-014c4c33dd13.png"
                alt="Zuup Logo"
                className="h-12 w-auto md:h-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-baseline space-x-1 lg:space-x-2">
              <NavLink href="/">Home</NavLink>
              <NavLink href="#about">About Us</NavLink>
              <Link to="/our-story" className="text-gray-300 hover:text-[#ea384c] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Our Story
              </Link>
              <Link to="/team" className="text-gray-300 hover:text-[#ea384c] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Our Team
              </Link>
              <Link to="/projects" className="text-gray-300 hover:text-[#ea384c] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Projects
              </Link>
              <Link to="/careers" className="text-gray-300 hover:text-[#ea384c] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Careers
              </Link>
              <Link to="/zuup-ai" className="text-gray-300 hover:text-[#ea384c] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Zuup AI Beta
              </Link>
              <NavLink href="#contact">Contact</NavLink>
              {isAuthenticated ? (
                <>
                  <Link to="/admin" className="text-gray-300 hover:text-[#ea384c] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Dashboard
                  </Link>
                  <button
                    onClick={logout}
                    className="text-gray-300 hover:text-[#ea384c] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/admin" className="text-gray-300 hover:text-[#ea384c] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Admin
                </Link>
              )}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-black/95 max-h-[80vh] overflow-y-auto"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="#about">About Us</MobileNavLink>
            <Link to="/our-story" className="text-gray-300 hover:text-[#ea384c] block px-3 py-2 rounded-md text-base font-medium">
              Our Story
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-[#ea384c] block px-3 py-2 rounded-md text-base font-medium">
              Our Team
            </Link>
            <Link to="/projects" className="text-gray-300 hover:text-[#ea384c] block px-3 py-2 rounded-md text-base font-medium">
              Projects
            </Link>
            <Link to="/careers" className="text-gray-300 hover:text-[#ea384c] block px-3 py-2 rounded-md text-base font-medium">
              Careers
            </Link>
            <Link to="/zuup-ai" className="text-gray-300 hover:text-[#ea384c] block px-3 py-2 rounded-md text-base font-medium">
              Zuup AI Beta
            </Link>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
            {isAuthenticated ? (
              <>
                <Link to="/admin" className="text-gray-300 hover:text-[#ea384c] block px-3 py-2 rounded-md text-base font-medium">
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-300 hover:text-[#ea384c] block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/admin" className="text-gray-300 hover:text-[#ea384c] block px-3 py-2 rounded-md text-base font-medium">
                Admin
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="text-gray-300 hover:text-[#ea384c] px-3 py-2 rounded-md text-sm font-medium transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="text-gray-300 hover:text-[#ea384c] block px-3 py-2 rounded-md text-base font-medium"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

export default Navbar;
