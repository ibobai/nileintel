import React from 'react';
import { Languages } from 'lucide-react';

interface LanguageSwitcherProps {
  language: 'en' | 'ar' | 'fr';
  setLanguage: (lang: 'en' | 'ar' | 'fr') => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, setLanguage }) => {
  return (
    <div className="fixed top-24 right-4 z-50 bg-gray-800/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
      <div className="flex flex-col items-center gap-2">
        <button 
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700/70 transition-colors"
          aria-label="Language menu"
        >
          <Languages size={20} className="text-blue-400" />
        </button>
        <div className="flex flex-col gap-1 pt-1">
          <button 
            onClick={() => setLanguage('en')} 
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${language === 'en' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700/70'} transition-colors`}
            aria-label="Switch to English"
          >
            EN
          </button>
          <button 
            onClick={() => setLanguage('ar')} 
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${language === 'ar' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700/70'} transition-colors`}
            aria-label="Switch to Arabic"
          >
            AR
          </button>
          <button 
            onClick={() => setLanguage('fr')} 
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${language === 'fr' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700/70'} transition-colors`}
            aria-label="Switch to French"
          >
            FR
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;