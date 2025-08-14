import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Shield, Eye } from 'lucide-react';

interface CookieConsentProps {
  onAccept?: () => void;
  onReject?: () => void;
  onCustomize?: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ 
  onAccept, 
  onReject, 
  onCustomize 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false
  });

  const COOKIE_CONSENT_NAME = 'blm-cookie-consent';
  const COOKIE_PREFERENCES_NAME = 'blm-cookie-preferences';
  const CONSENT_EXPIRY_DAYS = 365;

  useEffect(() => {
    // Check if user has already given consent
    const consent = getCookie(COOKIE_CONSENT_NAME);
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      const savedPreferences = getCookie(COOKIE_PREFERENCES_NAME);
      if (savedPreferences) {
        try {
          setPreferences(JSON.parse(savedPreferences));
        } catch (e) {
          console.error('Error parsing cookie preferences:', e);
        }
      }
    }
  }, []);

  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  };

  const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict;Secure`;
  };

  const handleAcceptAll = () => {
    const allAcceptedPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    
    setPreferences(allAcceptedPreferences);
    setCookie(COOKIE_CONSENT_NAME, 'accepted', CONSENT_EXPIRY_DAYS);
    setCookie(COOKIE_PREFERENCES_NAME, JSON.stringify(allAcceptedPreferences), CONSENT_EXPIRY_DAYS);
    
    setIsVisible(false);
    onAccept?.();
    
    // Initialize analytics and other services based on consent
    initializeServices(allAcceptedPreferences);
  };

  const handleRejectAll = () => {
    const rejectedPreferences = {
      necessary: true, // Cannot be disabled
      analytics: false,
      marketing: false,
      functional: false
    };
    
    setPreferences(rejectedPreferences);
    setCookie(COOKIE_CONSENT_NAME, 'rejected', CONSENT_EXPIRY_DAYS);
    setCookie(COOKIE_PREFERENCES_NAME, JSON.stringify(rejectedPreferences), CONSENT_EXPIRY_DAYS);
    
    setIsVisible(false);
    onReject?.();
    
    initializeServices(rejectedPreferences);
  };

  const handleSavePreferences = () => {
    setCookie(COOKIE_CONSENT_NAME, 'customized', CONSENT_EXPIRY_DAYS);
    setCookie(COOKIE_PREFERENCES_NAME, JSON.stringify(preferences), CONSENT_EXPIRY_DAYS);
    
    setIsVisible(false);
    setShowDetails(false);
    onCustomize?.();
    
    initializeServices(preferences);
  };

  const initializeServices = (prefs: typeof preferences) => {
    // Initialize Google Analytics if analytics cookies are accepted
    if (prefs.analytics && typeof window !== 'undefined') {
      // Example: Initialize Google Analytics
      // gtag('consent', 'update', { analytics_storage: 'granted' });
      console.log('Analytics cookies accepted - initializing tracking');
    }
    
    // Initialize marketing tools if marketing cookies are accepted
    if (prefs.marketing && typeof window !== 'undefined') {
      // Example: Initialize marketing pixels
      console.log('Marketing cookies accepted - initializing marketing tools');
    }
    
    // Initialize functional cookies if accepted
    if (prefs.functional && typeof window !== 'undefined') {
      // Example: Initialize chat widgets, etc.
      console.log('Functional cookies accepted - initializing functional features');
    }
  };

  const handlePreferenceChange = (category: keyof typeof preferences) => {
    if (category === 'necessary') return; // Cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none p-2 sm:p-0">
      <div className="bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-200 w-full pointer-events-auto">
        {!showDetails ? (
          // Main consent banner
          <div className="px-4 sm:px-6 py-3 sm:py-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex items-center space-x-3 sm:space-x-4 flex-1 text-center sm:text-left">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-blue-600" />
              </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold">Cookies :</span> Nous utilisons des cookies pour améliorer votre expérience. 
                    <a href="/politique-confidentialite" className="text-blue-600 hover:underline ml-1">En savoir plus</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors duration-300 min-h-8"
                >
                  Accepter
                </button>
                <button
                  onClick={() => setShowDetails(true)}
                  className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm font-medium transition-colors duration-300 min-h-8 px-2"
                >
                  Personnaliser
                </button>
                <button
                  onClick={handleRejectAll}
                  className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm font-medium transition-colors duration-300 min-h-8 px-2"
                >
                  Refuser
                </button>
              <button
                onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 ml-1 sm:ml-2 min-h-8 min-w-8 flex items-center justify-center"
                aria-label="Fermer"
              >
                  <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          </div>
        ) : (
          // Detailed preferences panel
          <div className="p-4 sm:p-6 max-h-80 sm:max-h-96 overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  Paramètres des cookies
                </h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 min-h-8 min-w-8 flex items-center justify-center"
                  aria-label="Retour"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                {/* Necessary Cookies */}
                <div className="border border-gray-200 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">Cookies nécessaires</h4>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                      Toujours actifs
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">
                    Essentiels au fonctionnement du site.
                  </p>
                </div>
                
                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">Cookies d'analyse</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => handlePreferenceChange('analytics')}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-xs text-gray-600">
                    Analyse du trafic et amélioration UX.
                  </p>
                </div>
                
                {/* Marketing Cookies */}
                <div className="border border-gray-200 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">Cookies marketing</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => handlePreferenceChange('marketing')}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-xs text-gray-600">
                    Publicités personnalisées et mesures.
                  </p>
                </div>
                
                {/* Functional Cookies */}
                <div className="border border-gray-200 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">Cookies fonctionnels</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={() => handlePreferenceChange('functional')}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-xs text-gray-600">
                    Chat, préférences et fonctionnalités.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={handleSavePreferences}
                  className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors duration-300 min-h-8"
                >
                  Enregistrer
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-50 transition-colors duration-300 min-h-8"
                >
                  Accepter tout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;