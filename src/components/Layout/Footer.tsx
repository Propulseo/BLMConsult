import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

interface FooterProps {
  setCurrentPage?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'contact', label: t.nav.contact }
  ];

  const legalLinks = [
    { id: 'mentions-legales', label: t.footer.legal.mentionsLegales },
    { id: 'politique-confidentialite', label: t.footer.legal.politiqueConfidentialite },
    { id: 'cgv', label: t.footer.legal.cgv }
  ];

  const handleNavigation = (pageId: string) => {
    if (setCurrentPage) {
      setCurrentPage(pageId);
      window.scrollTo(0, 0);
    }
  };

  const handleLegalNavigation = (pageId: string) => {
    if (setCurrentPage) {
      setCurrentPage(pageId);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-ocean-700 to-ocean-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-ocean-600/20 via-transparent to-coral-500/10"></div>
      <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-br from-ocean-500/10 to-ocean-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-24 sm:w-32 lg:w-48 h-24 sm:h-32 lg:h-48 bg-gradient-to-tr from-coral-400/8 to-coral-300/5 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="text-center">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczPImbiMo70XExX-4v0-p_NlG1W_awg-qxPR5EuqUdK1MBdJIHlAfja6iYRdUVdFRFUyXvDRj_PVPASRHVKA_WGh7-aVM3kaaIweWVidFNsrw86KpNMA16e9_vhQZXAdisnD90f9WLENgbOsa-G_nmW1=w633-h338-s-no-gm?authuser=0"
                alt="BLM Consult Description"
                className="h-16 sm:h-20 w-auto object-contain mx-auto mb-3 sm:mb-4"
              />
              <div className="text-center">
                <p className="text-xs sm:text-sm text-ocean-200 leading-relaxed max-w-md mx-auto">
                  {t.footer.qualiopi.certification}
                </p>
                <a 
                  href="/certificat-qualiopi.pdf" 
                  download
                  className="inline-flex items-center text-coral-300 hover:text-coral-200 text-xs sm:text-sm font-medium mt-2 transition-colors duration-300 hover:underline"
                >
                  {t.footer.qualiopi.downloadCertificate}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-ocean-50">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavigation(link.id)}
                    className="text-ocean-200 hover:text-coral-300 transition-colors duration-300 font-medium hover:translate-x-1 transform inline-block text-sm sm:text-base min-h-8"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-ocean-50">{t.footer.legal.title}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLegalNavigation(link.id)}
                    className="text-ocean-200 hover:text-coral-300 transition-colors duration-300 font-medium hover:translate-x-1 transform inline-block text-sm sm:text-base min-h-8"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-ocean-600/30 mt-8 sm:mt-12 pt-4 sm:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-ocean-300 font-medium text-sm sm:text-base text-center md:text-left">
              © {currentYear} BLM Consult. {t.footer.copyright}
            </p>
            <p className="text-ocean-200 text-xs sm:text-sm text-center md:text-right">
              {t.footer.madeWithPassion}{' '}
              <a 
                href="https://propulseo-site.com"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coral-300 hover:text-coral-200 transition-colors duration-300 font-semibold hover:underline min-h-6 inline-block"
              >
                Propul'SEO
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;