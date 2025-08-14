import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { SUPPORTED_LANGUAGES } from '../config/languages';

interface LanguageSelectorProps {
  className?: string;
  showLabel?: boolean;
  variant?: 'default' | 'compact' | 'mobile';
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  className = '', 
  showLabel = true,
  variant = 'default'
}) => {
  const { currentLanguage, changeLanguage, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLangConfig = SUPPORTED_LANGUAGES.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = async (languageCode: string) => {
    changeLanguage(languageCode as any);
    setIsOpen(false);
  };

  // Compact variant for mobile or tight spaces
  if (variant === 'compact') {
    return (
      <div className={`relative ${className}`} ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-white hover:text-ocean-100 hover:bg-ocean-600/70 rounded-lg transition-all duration-200 border border-ocean-500"
          aria-label={t.nav.languageSelector}
        >
          <span className="font-semibold text-white">{currentLanguage.toUpperCase()}</span>
          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute right-0 top-full mt-2 bg-white border border-ocean-200 rounded-lg shadow-xl py-2 z-50 min-w-[140px]">
            {SUPPORTED_LANGUAGES.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                  currentLanguage === language.code ? 'bg-ocean-50 text-ocean-600' : 'text-gray-700'
                }`}
              >
                <span className="font-medium">{language.nativeName}</span>
                <span className="text-xs text-gray-500 font-semibold">{language.code.toUpperCase()}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Mobile variant
  if (variant === 'mobile') {
    return (
      <div className={`${className}`}>
        <select
          value={currentLanguage}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="bg-transparent border-none text-gray-600 focus:outline-none focus:ring-0 disabled:opacity-50"
          aria-label={t.nav.languageSelector}
        >
          {SUPPORTED_LANGUAGES.map((language) => (
            <option key={language.code} value={language.code}>
              {language.flag}
            </option>
          ))}
        </select>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 disabled:opacity-50"
        aria-label={t.nav.languageSelector}
      >
        <Globe className="w-4 h-4" />
        {showLabel && <span>{t.nav.languageSelector}</span>}
        <span className="font-medium text-sm">{currentLangConfig?.flag}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 min-w-[200px]">
          {SUPPORTED_LANGUAGES.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                currentLanguage === language.code 
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                  : 'text-gray-700'
              }`}
            >
              <div>
                <span className="font-medium">{language.flag}</span>
                <span className="font-medium">{language.nativeName}</span>
                <span className="text-xs text-gray-500">{language.flag}</span>
              </div>
              {currentLanguage === language.code && (
                <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;