import { useState } from 'react';
import { Menu, X, Home, Users, BookOpen, Heart, Mail, Lock, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      className="fixed w-full z-50 bg-black/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
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
                className="h-16 w-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/" icon={<Home size={16} />}>Home</NavLink>
              <NavLink href="#about" icon={<Info size={16} />}>About Us</NavLink>
              <Link to="/our-story" className="text-gray-300 hover:text-[#ea384c] px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
                <BookOpen size={16} /> Our Story
              </Link>
              <Link to="/team" className="text-gray-300 hover:text-[#ea384c] px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
                <Users size={16} /> Our Team
              </Link>
              <Link to="/careers" className="text-gray-300 hover:text-[#ea384c] px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
                <Heart size={16} /> Careers
              </Link>
              <NavLink href="#contact" icon={<Mail size={16} />}>Contact</NavLink>
              <Link to="/admin" className="text-gray-300 hover:text-[#ea384c] px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
                <Lock size={16} /> Admin
              </Link>
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
          className="md:hidden bg-black/95"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/" icon={<Home size={16} />}>Home</MobileNavLink>
            <MobileNavLink href="#about" icon={<Info size={16} />}>About Us</MobileNavLink>
            <Link to="/our-story" className="text-gray-300 hover:text-[#ea384c] block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2">
              <BookOpen size={16} /> Our Story
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-[#ea384c] block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2">
              <Users size={16} /> Our Team
            </Link>
            <Link to="/careers" className="text-gray-300 hover:text-[#ea384c] block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2">
              <Heart size={16} /> Careers
            </Link>
            <MobileNavLink href="#contact" icon={<Mail size={16} />}>Contact</MobileNavLink>
            <Link to="/admin" className="text-gray-300 hover:text-[#ea384c] block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2">
              <Lock size={16} /> Admin
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const NavLink = ({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    className="text-gray-300 hover:text-[#ea384c] px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    {children}
  </motion.a>
);

const MobileNavLink = ({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    className="text-gray-300 hover:text-[#ea384c] block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    {children}
  </motion.a>
);

export default Navbar;