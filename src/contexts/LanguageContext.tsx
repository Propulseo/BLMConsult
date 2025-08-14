import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../types/i18n';
import { en } from '../locales/en';
import { fr } from '../locales/fr';
import { pt } from '../locales/pt';

const translations = { en, fr, pt };

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  t: typeof fr;
  formatNumber: (number: number) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('fr');
  const [forceUpdate, setForceUpdate] = useState(0);

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('preferred-language', lang);
    // Force re-render de tous les composants
    setForceUpdate(prev => prev + 1);
  };

  const formatNumber = (number: number) => {
    return new Intl.NumberFormat(currentLanguage === 'fr' ? 'fr-FR' : currentLanguage === 'en' ? 'en-US' : 'pt-BR').format(number);
  };

  useEffect(() => {
    const stored = localStorage.getItem('preferred-language') as Language;
    if (stored && translations[stored]) {
      setCurrentLanguage(stored);
    }
  }, []);

  const value = {
    currentLanguage,
    changeLanguage,
    t: translations[currentLanguage] || translations.fr, // Fallback sur français si la langue n'est pas trouvée
    formatNumber,
    _forceUpdate: forceUpdate // Force re-render
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within LanguageProvider');
  }
  return context;
};
