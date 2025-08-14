import { LanguageConfig, Language } from '../types/i18n';

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: 'EN',
    dir: 'ltr',
    dateFormat: 'MM/DD/YYYY',
    numberFormat: {
      locale: 'en-US',
      currency: 'USD'
    }
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: 'FR',
    dir: 'ltr',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: {
      locale: 'fr-FR',
      currency: 'EUR'
    }
  },
  {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: 'PT',
    dir: 'ltr',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: {
      locale: 'pt-PT',
      currency: 'EUR'
    }
  }
];

export const DEFAULT_LANGUAGE: Language = 'fr';

export const FALLBACK_LANGUAGE: Language = 'en';

// Browser language detection
export const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
  
  const browserLang = navigator.language.split('-')[0] as Language;
  const supportedCodes = SUPPORTED_LANGUAGES.map(lang => lang.code);
  
  return supportedCodes.includes(browserLang) ? browserLang : DEFAULT_LANGUAGE;
};

// URL language parameter handling
export const getLanguageFromURL = (): Language | null => {
  if (typeof window === 'undefined') return null;
  
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang') as Language;
  const supportedCodes = SUPPORTED_LANGUAGES.map(lang => lang.code);
  
  return supportedCodes.includes(langParam) ? langParam : null;
};

// Set language in URL
export const setLanguageInURL = (language: Language): void => {
  if (typeof window === 'undefined') return;
  
  const url = new URL(window.location.href);
  url.searchParams.set('lang', language);
  window.history.replaceState({}, '', url.toString());
};

// Get language configuration
export const getLanguageConfig = (language: Language): LanguageConfig => {
  return SUPPORTED_LANGUAGES.find(lang => lang.code === language) || SUPPORTED_LANGUAGES[0];
};