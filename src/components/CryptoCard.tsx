import React from 'react';
import { ExternalLink, TrendingUp, ArrowRight } from 'lucide-react';

interface CryptoCardProps {
  name: string;
  symbol: string;
  description: string;
  image: string;
  launchDate: string;
  website?: string;
  language: 'en' | 'ar' | 'fr';
  t: any;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ 
  name, 
  symbol, 
  description, 
  image, 
  launchDate, 
  website,
  language,
  t
}) => {
  const isRtl = language === 'ar';
  
  return (
    <div className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-700/50 transition-all duration-300 group">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img 
            src={image} 
            alt={`${name} logo`} 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold">{name} <span className="text-sm text-gray-400">({symbol})</span></h3>
            <p className="text-gray-400 text-sm">{t.crypto.launched}: {launchDate}</p>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6">{description}</p>
        
        <div className="flex justify-between items-center">
          {website && (
            <a 
              href={website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              {t.crypto.visitWebsite} <ExternalLink size={16} className="ml-1" />
            </a>
          )}
          
          <a 
            href="#" 
            className={`inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors ${isRtl ? 'flex-row-reverse' : ''}`}
          >
            {isRtl ? (
              <>
                <ArrowRight size={16} className="mr-1 transform rotate-180" />
                {t.crypto.learnMore}
              </>
            ) : (
              <>
                {t.crypto.learnMore} <ArrowRight size={16} className="ml-1" />
              </>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;