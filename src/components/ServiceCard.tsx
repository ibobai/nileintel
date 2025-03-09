import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface ServiceCardProps {
  service: ServiceFeature;
  language: 'en' | 'ar' | 'fr';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, language }) => {
  const isRtl = language === 'ar';
  
  return (
    <div className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-700/50 transition-all duration-300 group">
      <div className="p-6">
        <div className="bg-blue-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500/30 transition-all duration-300">
          {service.icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
        <p className="text-gray-400 mb-6">{service.description}</p>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        <a href="#contact" className={`inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors ${isRtl ? 'flex-row-reverse' : ''}`}>
          {isRtl ? (
            <>
              <ArrowRight size={16} className="mr-1 transform rotate-180" />
              {service.title.split(' ')[0]}
            </>
          ) : (
            <>
              Learn more <ArrowRight size={16} className="ml-1" />
            </>
          )}
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;