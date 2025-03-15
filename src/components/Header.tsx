import React, { useState, useEffect } from 'react';
import { Menu, X, Brain } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'ar' | 'fr';
  t: any;
}

const Header: React.FC<HeaderProps> = ({ language, t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isRtl = language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
            <img
                src="/logoCircle.png"
                alt="Company Logo"
                className="h-8 w-8"
              />              
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                {t.header.companyName}
              </span>
            </a>
          </div>

      
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className={`flex ${isRtl ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
              <li><a href="#" className="text-white hover:text-blue-400 transition-colors px-1">{t.header.nav.home}</a></li>
              <li><a href="#about" className="text-white hover:text-blue-400 transition-colors px-1">{t.header.nav.about}</a></li>
              <li><a href="#services" className="text-white hover:text-blue-400 transition-colors px-1">{t.header.nav.services}</a></li>
              <li><a href="#founders" className="text-white hover:text-blue-400 transition-colors px-1">{t.header.nav.founders}</a></li>
              <li><a href="#crypto" className="text-white hover:text-blue-400 transition-colors px-1">{t.header.nav.crypto}</a></li>
              <li><a href="#contact" className="text-white hover:text-blue-400 transition-colors px-1">{t.header.nav.contact}</a></li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a 
              href="#" 
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.header.nav.home}
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.header.nav.about}
            </a>
            <a 
              href="#services" 
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.header.nav.services}
            </a>
            <a 
              href="#founders" 
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.header.nav.founders}
            </a>
            <a 
              href="#crypto" 
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.header.nav.crypto}
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.header.nav.contact}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;