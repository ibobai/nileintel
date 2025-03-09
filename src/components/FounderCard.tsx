import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

interface FounderCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin: string;
  github?: string;
  twitter?: string;
  language: 'en' | 'ar' | 'fr';
  t: any;
}

const FounderCard: React.FC<FounderCardProps> = ({ 
  name, 
  title, 
  bio, 
  image, 
  linkedin, 
  github, 
  twitter,
  language,
  t
}) => {
  const isRtl = language === 'ar';
  
  return (
    <div className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-700/50 transition-all duration-300 group">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="text-blue-400">{title}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-300 mb-6">{bio}</p>
        <div className="flex space-x-4">
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label={`${name}'s LinkedIn profile`}
          >
            <Linkedin size={20} />
          </a>
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label={`${name}'s GitHub profile`}
            >
              <Github size={20} />
            </a>
          )}
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label={`${name}'s Twitter profile`}
            >
              <Twitter size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FounderCard;