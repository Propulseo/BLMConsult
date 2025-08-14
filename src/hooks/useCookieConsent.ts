import { useState, useEffect } from 'react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

interface CookieConsentHook {
  hasConsent: boolean;
  preferences: CookiePreferences;
  updatePreferences: (newPreferences: CookiePreferences) => void;
  resetConsent: () => void;
  isConsentGiven: (category: keyof CookiePreferences) => boolean;
}

const COOKIE_CONSENT_NAME = 'blm-cookie-consent';
const COOKIE_PREFERENCES_NAME = 'blm-cookie-preferences';

export const useCookieConsent = (): CookieConsentHook => {
  const [hasConsent, setHasConsent] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    const consent = getCookie(COOKIE_CONSENT_NAME);
    const savedPreferences = getCookie(COOKIE_PREFERENCES_NAME);

    if (consent) {
      setHasConsent(true);
      
      if (savedPreferences) {
        try {
          const parsedPreferences = JSON.parse(savedPreferences);
          setPreferences(parsedPreferences);
        } catch (e) {
          console.error('Error parsing cookie preferences:', e);
        }
      }
    }
  }, []);

  const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null;
    
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  };

  const setCookie = (name: string, value: string, days: number) => {
    if (typeof document === 'undefined') return;
    
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict;Secure`;
  };

  const updatePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences);
    setHasConsent(true);
    setCookie(COOKIE_CONSENT_NAME, 'updated', 365);
    setCookie(COOKIE_PREFERENCES_NAME, JSON.stringify(newPreferences), 365);
  };

  const resetConsent = () => {
    setHasConsent(false);
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    });
    
    // Remove consent cookies
    if (typeof document !== 'undefined') {
      document.cookie = `${COOKIE_CONSENT_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `${COOKIE_PREFERENCES_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  };

  const isConsentGiven = (category: keyof CookiePreferences): boolean => {
    return hasConsent && preferences[category];
  };

  return {
    hasConsent,
    preferences,
    updatePreferences,
    resetConsent,
    isConsentGiven
  };
};