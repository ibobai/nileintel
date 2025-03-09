import React from 'react';
import { Brain, Github, Linkedin, Twitter, Facebook } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ar' | 'fr';
  t: any;
}

const Footer: React.FC<FooterProps> = ({ language, t }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Brain size={32} className="text-blue-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                {t.header.companyName}
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t.header.nav.home}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">{t.header.nav.about}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t.header.nav.services}</a></li>
              <li><a href="#founders" className="text-gray-400 hover:text-white transition-colors">{t.header.nav.founders}</a></li>
              <li><a href="#crypto" className="text-gray-400 hover:text-white transition-colors">{t.header.nav.crypto}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t.header.nav.contact}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.services}</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t.services.ai.shortTitle}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t.services.web.shortTitle}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t.services.mobile.shortTitle}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t.services.blockchain.shortTitle}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t.services.security.shortTitle}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {t.header.companyName}. {t.footer.rights}
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;