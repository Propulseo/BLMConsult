import { useState, useEffect, useCallback } from 'react';
import { Language, TranslationKeys } from '../types/i18n';
import { 
  DEFAULT_LANGUAGE, 
  FALLBACK_LANGUAGE, 
  detectBrowserLanguage, 
  getLanguageFromURL, 
  setLanguageInURL,
  getLanguageConfig 
} from '../config/languages';

// Import translations
import { en } from '../locales/en';
import { fr } from '../locales/fr';
import { pt } from '../locales/pt';

const translations: Record<Language, TranslationKeys> = {
  en,
  fr,
  pt
};

// Local storage key
const LANGUAGE_STORAGE_KEY = 'preferred-language';

export const useTranslation = () => {
  // Initialize language from URL, localStorage, browser, or default
  const initializeLanguage = (): Language => {
    const urlLang = getLanguageFromURL();
    console.log('🔍 URL language detected:', urlLang);
    
    if (urlLang) return urlLang;
    
    const storedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
    console.log('🔍 Stored language:', storedLang);
    
    if (storedLang && translations[storedLang]) return storedLang;
    
    const browserLang = detectBrowserLanguage();
    console.log('🔍 Browser language detected:', browserLang);
    
    const finalLang = urlLang || storedLang || browserLang;
    console.log('🎯 Final initialized language:', finalLang);
    
    return finalLang;
  };

  const [currentLanguage, setCurrentLanguage] = useState<Language>(initializeLanguage);
  const [isLoading, setIsLoading] = useState(false);

  // Get current translations
  const t = translations[currentLanguage] || translations[FALLBACK_LANGUAGE];
  
  // Debug: Log current translations
  console.log('🌍 Current language:', currentLanguage);
  console.log('📚 Available translations:', Object.keys(translations));
  console.log('📖 Current translations:', t);
  
  // Get current language configuration
  const languageConfig = getLanguageConfig(currentLanguage);

  // Change language function
  const changeLanguage = useCallback(async (newLanguage: Language) => {
    if (newLanguage === currentLanguage) return;
    
    console.log('🔄 Changing language from', currentLanguage, 'to', newLanguage);
    setIsLoading(true);
    
    try {
      // Update state
      setCurrentLanguage(newLanguage);
      console.log('✅ Language state updated to:', newLanguage);
      
      // Update localStorage
      localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
      console.log('✅ LocalStorage updated');
      
      // Update URL
      setLanguageInURL(newLanguage);
      console.log('✅ URL updated');
      
      // Update document attributes
      document.documentElement.lang = newLanguage;
      document.documentElement.dir = getLanguageConfig(newLanguage).dir;
      console.log('✅ Document attributes updated');
      
      // Update page title and meta description
      const newConfig = getLanguageConfig(newLanguage);
      const newTranslations = translations[newLanguage];
      
      document.title = newTranslations.meta.title;
      console.log('✅ Page title updated to:', newTranslations.meta.title);
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', newTranslations.meta.description);
        console.log('✅ Meta description updated');
      }
      
      // Update meta keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', newTranslations.meta.keywords);
        console.log('✅ Meta keywords updated');
      }
      
      console.log('🎉 Language change completed successfully!');
      
    } catch (error) {
      console.error('❌ Error changing language:', error);
    } finally {
      setIsLoading(false);
    }
  }, [currentLanguage]);

  // Format number according to language
  const formatNumber = useCallback((number: number, options?: Intl.NumberFormatOptions) => {
    return new Intl.NumberFormat(languageConfig.numberFormat.locale, options).format(number);
  }, [languageConfig]);

  // Format currency according to language
  const formatCurrency = useCallback((amount: number) => {
    return new Intl.NumberFormat(languageConfig.numberFormat.locale, {
      style: 'currency',
      currency: languageConfig.numberFormat.currency
    }).format(amount);
  }, [languageConfig]);

  // Format date according to language
  const formatDate = useCallback((date: Date, options?: Intl.DateTimeFormatOptions) => {
    return new Intl.DateTimeFormat(languageConfig.numberFormat.locale, options).format(date);
  }, [languageConfig]);

  // Get nested translation with fallback
  const getNestedTranslation = useCallback((key: string, fallback?: string): string => {
    const keys = key.split('.');
    let value: any = t;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    
    if (typeof value === 'string') return value;
    
    // Try fallback language
    if (currentLanguage !== FALLBACK_LANGUAGE) {
      const fallbackTranslations = translations[FALLBACK_LANGUAGE];
      let fallbackValue: any = fallbackTranslations;
      
      for (const k of keys) {
        fallbackValue = fallbackValue?.[k];
        if (fallbackValue === undefined) break;
      }
      
      if (typeof fallbackValue === 'string') return fallbackValue;
    }
    
    return fallback || key;
  }, [t, currentLanguage]);

  // Initialize document attributes on mount
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = languageConfig.dir;
    
    // Set initial meta tags
    document.title = t.meta.title;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', t.meta.description);
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', t.meta.keywords);
    
  }, [currentLanguage, languageConfig, t]);

  return {
    // Current state
    currentLanguage,
    languageConfig,
    isLoading,
    
    // Translations
    t,
    getNestedTranslation,
    
    // Actions
    changeLanguage,
    
    // Formatters
    formatNumber,
    formatCurrency,
    formatDate,
    
    // Available languages
    availableLanguages: translations
  };
};