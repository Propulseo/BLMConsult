import { useTranslation } from './useTranslation';
import { pageTranslations } from '../locales/pageTranslations';

export const usePageTranslations = () => {
  const { currentLanguage } = useTranslation();
  
  const getPageTranslation = (page: keyof typeof pageTranslations) => {
    return pageTranslations[page][currentLanguage as 'fr' | 'en' | 'pt'] || pageTranslations[page].fr;
  };
  
  return {
    getPageTranslation,
    currentLanguage
  };
};
