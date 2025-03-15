import React, { useState, useEffect } from "react";
import {
  Brain,
  Code,
  Smartphone,
  Shield,
  Lightbulb,
  Database,
  Bitcoin,
  Mail,
  Globe,
  MapPin,
  Phone,
  ChevronDown,
  ArrowRight,
  Languages,
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import ContactForm from "./components/ContactForm";
import LanguageSwitcher from "./components/LanguageSwitcher";
import FounderCard from "./components/FounderCard";
import CryptoCard from "./components/CryptoCard";
import { translations } from "./translations";
import { motion } from "framer-motion";

function App() {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState<"en" | "ar" | "fr">(() => {
    const savedLanguage = localStorage.getItem("language");
    return (savedLanguage as "en" | "ar" | "fr") || "en";
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem("language", language);
    // Update document direction based on language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const t = translations[language];

  const services = [
    {
      icon: <Brain size={32} />,
      title: t.services.ai.title,
      description: t.services.ai.description,
      features: t.services.ai.features,
    },
    {
      icon: <Code size={32} />,
      title: t.services.web.title,
      description: t.services.web.description,
      features: t.services.web.features,
    },
    {
      icon: <Smartphone size={32} />,
      title: t.services.mobile.title,
      description: t.services.mobile.description,
      features: t.services.mobile.features,
    },
    {
      icon: <Bitcoin size={32} />,
      title: t.services.blockchain.title,
      description: t.services.blockchain.description,
      features: t.services.blockchain.features,
    },
    {
      icon: <Shield size={32} />,
      title: t.services.security.title,
      description: t.services.security.description,
      features: t.services.security.features,
    },
    {
      icon: <Lightbulb size={32} />,
      title: t.services.consulting.title,
      description: t.services.consulting.description,
      features: t.services.consulting.features,
    },
  ];

  const founders = [
    {
      name: "IA",
      title: t.founders.ibrahim.title,
      bio: t.founders.ibrahim.bio,
      image:
        "/ibra2.jpg",
      linkedin: "https://www.linkedin.com/in/ibrahim-abu-obaida-221074195",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
    {
      name: "WGH",
      title: t.founders.waleed.title,
      bio: t.founders.waleed.bio,
      image:
        "/waleed1.png",
      linkedin: "https://www.linkedin.com/in/waleed-gourashi-6b68a7184",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  ];

  const cryptos = [
    {
      name: "NileToken",
      symbol: "NILE",
      description: t.crypto.nileToken.description,
      image:
        "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1600&auto=format&fit=crop",
      launchDate: "Soon",
      website: "https://niletoken.com",
    },
    {
      name: "AfricaChain",
      symbol: "AFC",
      description: t.crypto.africaChain.description,
      image:
        "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1600&auto=format&fit=crop",
      launchDate: "Soon",
      website: "https://africachain.io",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white ${
        language === "ar" ? "rtl" : "ltr"
      }`}
    >
      <Header language={language} t={t} />
      <LanguageSwitcher language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#services"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {t.hero.servicesButton} <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent border border-white/30 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
              >
                {t.hero.contactButton}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <a
            href="#about"
            className="text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
          >
            <ChevronDown size={32} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.about.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                <span className="inline-block">
                  <motion.span
                    className="font-extrabold text-5xl"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 1 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    style={{
                      backgroundImage:
                        "linear-gradient(45deg, #3b82f6, #9333ea, #facc15, #ef4444)",
                      backgroundSize: "400% 400%",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      animation: "gradientShift 3s infinite ease-in-out",
                    }}
                  >
                    NI
                  </motion.span>
                </span>{" "}
                {t.about.paragraph1Part1}{" "}
                <a
                  href="#founders"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <strong>{t.about.ibrahim}</strong>
                </a>{" "}
                {t.about.and}{" "}
                <a
                  href="#founders"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <strong>{t.about.waleed}</strong>
                </a>{" "}
                {t.about.paragraph1Part2}
              </p>

              <p className="text-lg text-gray-300 mb-6">{t.about.paragraph2}</p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">
                  {t.about.vision.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {t.about.vision.description}
                </p>
                <h3 className="text-xl font-semibold mb-4">
                  {t.about.mission.title}
                </h3>
                <p className="text-gray-300">{t.about.mission.description}</p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-2">
                  {t.about.whyChooseUs.title}
                </h3>
                <ul className="space-y-2">
                  {t.about.whyChooseUs.reasons.map((reason, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.servicesSection.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
              {t.servicesSection.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} language={language} />
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section
        id="founders"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.founders.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
              {t.founders.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <FounderCard
                key={index}
                name={founder.name}
                title={founder.title}
                bio={founder.bio}
                image={founder.image}
                linkedin={founder.linkedin}
                github={founder.github}
                twitter={founder.twitter}
                language={language}
                t={t}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Crypto Section */}
      <section id="crypto" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.crypto.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
              {t.crypto.subtitle}
            </p>
          </div>
          <div
            className={`grid gap-8 ${
              cryptos.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {cryptos.map((crypto, index) => (
              <CryptoCard
                key={index}
                name={crypto.name}
                symbol={crypto.symbol}
                description={crypto.description}
                image={crypto.image}
                launchDate={crypto.launchDate}
                language={language}
                t={t}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.technologies.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
              <Brain size={48} className="text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t.technologies.ai.title}
              </h3>
              <p className="text-center text-gray-300 text-sm">
                {t.technologies.ai.description}
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
              <Bitcoin size={48} className="text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t.technologies.blockchain.title}
              </h3>
              <p className="text-center text-gray-300 text-sm">
                {t.technologies.blockchain.description}
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
              <Database size={48} className="text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t.technologies.cloud.title}
              </h3>
              <p className="text-center text-gray-300 text-sm">
                {t.technologies.cloud.description}
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
              <Shield size={48} className="text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t.technologies.security.title}
              </h3>
              <p className="text-center text-gray-300 text-sm">
                {t.technologies.security.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.contact.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                {t.contact.getInTouch}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">{t.contact.email}</h4>
                    <p className="text-gray-300">
                      contact@nileintelligence.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">{t.contact.website}</h4>
                    <p className="text-gray-300">www.nileintelligence.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">{t.contact.location}</h4>
                    <p className="text-gray-300">France, Lille</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">{t.contact.phone}</h4>
                    <p className="text-gray-300">+33700000000</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm language={language} t={t} />
          </div>
        </div>
      </section>

      <Footer language={language} t={t} />

      <style>
        {`
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `}
      </style>
    </div>
  );
}

export default App;
