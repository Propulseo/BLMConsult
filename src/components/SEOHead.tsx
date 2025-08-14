import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { SUPPORTED_LANGUAGES } from '../config/languages';
import StructuredData from './StructuredData';
import { organizationSchema, websiteSchema } from '../data/structuredData';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  structuredData
}) => {
  const { t, currentLanguage, languageConfig } = useTranslation();

  // Use provided values or fallback to translations
  const pageTitle = title || t.meta.title;
  const pageDescription = description || t.meta.description;
  const pageKeywords = keywords || t.meta.keywords;
  
  // Combine default structured data with page-specific data
  const combinedStructuredData = structuredData 
    ? [organizationSchema, websiteSchema, structuredData]
    : [organizationSchema, websiteSchema];

  React.useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Update meta description
    const updateOrCreateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const updateOrCreateProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateOrCreateMeta('description', pageDescription);
    updateOrCreateMeta('keywords', pageKeywords);
    updateOrCreateMeta('robots', 'index, follow');
    updateOrCreateMeta('author', 'Professional Consulting');
    updateOrCreateMeta('viewport', 'width=device-width, initial-scale=1.0');

    // Language and locale
    updateOrCreateMeta('language', currentLanguage);
    document.documentElement.setAttribute('lang', currentLanguage);
    document.documentElement.setAttribute('dir', languageConfig.dir);

    // Open Graph tags
    updateOrCreateProperty('og:title', pageTitle);
    updateOrCreateProperty('og:description', pageDescription);
    updateOrCreateProperty('og:type', ogType);
    updateOrCreateProperty('og:locale', languageConfig.numberFormat.locale);
    updateOrCreateProperty('og:site_name', 'Professional Consulting');
    
    if (ogImage) {
      updateOrCreateProperty('og:image', ogImage);
      updateOrCreateProperty('og:image:alt', pageTitle);
    }

    // Twitter Card tags
    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', pageTitle);
    updateOrCreateMeta('twitter:description', pageDescription);
    if (ogImage) {
      updateOrCreateMeta('twitter:image', ogImage);
    }

    // Canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Alternate language links
    const existingAlternates = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingAlternates.forEach(link => link.remove());

    SUPPORTED_LANGUAGES.forEach(lang => {
      const alternateLink = document.createElement('link');
      alternateLink.setAttribute('rel', 'alternate');
      alternateLink.setAttribute('hreflang', lang.code);
      alternateLink.setAttribute('href', `${window.location.origin}${window.location.pathname}?lang=${lang.code}`);
      document.head.appendChild(alternateLink);
    });

    // x-default for international targeting
    const defaultLink = document.createElement('link');
    defaultLink.setAttribute('rel', 'alternate');
    defaultLink.setAttribute('hreflang', 'x-default');
    defaultLink.setAttribute('href', `${window.location.origin}${window.location.pathname}`);
    document.head.appendChild(defaultLink);

    // Structured data
    if (structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }

  }, [pageTitle, pageDescription, pageKeywords, currentLanguage, languageConfig, canonical, ogImage, ogType, structuredData]);

  return (
    <StructuredData data={combinedStructuredData} />
  );
};

export default SEOHead;