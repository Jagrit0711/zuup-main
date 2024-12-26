import { Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  console.log('Rendering Footer');

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#FF6D59] mb-4">Zuup</h3>
            <p className="text-gray-400">
              A Zylon Labs Initiative empowering underprivileged kids through freelancing opportunities.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-[#FF6D59]">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#FF6D59]">Contact</a></li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-[#FF6D59]">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="https://www.linkedin.com/in/jagritsachdev" icon={<Linkedin size={20} />} />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zuup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-[#FF6D59] transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default Footer;