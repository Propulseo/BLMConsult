import { useCookieConsent } from '../hooks/useCookieConsent';

// Google Analytics 4 implementation
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const initializeGoogleAnalytics = (measurementId: string) => {
  // Only initialize if analytics cookies are accepted
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', {
      anonymize_ip: true,
      cookie_flags: 'SameSite=Strict;Secure'
    });
  `;
  document.head.appendChild(script2);
};

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};

// Marketing pixels and tools
export const initializeMarketingTools = () => {
  // Facebook Pixel
  // LinkedIn Insight Tag
  // Other marketing tools
  console.log('Marketing tools initialized');
};

// Functional tools
export const initializeFunctionalTools = () => {
  // Chat widgets
  // Preference storage
  // Other functional features
  console.log('Functional tools initialized');
};