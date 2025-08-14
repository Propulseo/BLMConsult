import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Linkedin } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import LanguageSelector from '../LanguageSelector';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimer) {
        clearTimeout(dropdownTimer);
      }
    };
  }, [dropdownTimer]);
  
  const menuItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { 
      id: 'services', 
      label: t.nav.services,
      hasDropdown: true,
      dropdownItems: [
        { id: 'conseil', label: t.nav.servicesDropdown.conseilRH, description: t.nav.servicesDropdown.conseilRHDesc },
        { id: 'coaching', label: t.nav.servicesDropdown.coaching, description: t.nav.servicesDropdown.coachingDesc },
        { id: 'formations', label: t.nav.servicesDropdown.formations, description: t.nav.servicesDropdown.formationsDesc },
      ]
    },
    { id: 'blog', label: t.nav.blog },
    { id: 'raparigas', label: t.nav.raparigas },
    { id: 'contact', label: t.nav.contact }
  ];

  // Optimized hover handlers with delays
  const handleServicesMouseEnter = () => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
      setDropdownTimer(null);
    }
    setServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    const timer = setTimeout(() => {
      setServicesDropdown(false);
    }, 150); // 150ms delay before closing
    setDropdownTimer(timer);
  };
  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    // Close dropdown after navigation
    setServicesDropdown(false);
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
      setDropdownTimer(null);
    }
    setServicesDropdown(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-ocean-700 shadow-lg border-b border-ocean-600">
    <div className={`fixed top-0 w-full z-50 shadow-lg border-b border-ocean-600 transition-all duration-300 ${
      isScrolled ? 'bg-ocean-700/95 backdrop-blur-sm' : 'bg-ocean-700'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          {/* Logo professionnel */}
          <div 
            className="flex items-center cursor-pointer group transition-transform duration-300 hover:scale-105"
            onClick={() => handleNavigation('home')}
          >
            <div className="relative">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczMcU-fT-3oC5vkVGYbOMwJfuPiS-k35vykCZZ3q_oJP4JEyX52vdiUh_rtiSt8yCyHEvZc-Df8nL_5jY85OBa2MMk4c57szEiB74iOK8YVhUmGS3SIDVpZTT5lJymOL3Ik34eq-KyG5z65UgXjB8v7-=w1024-h1024-s-no-gm?authuser=0"
                alt="BLM Consult Logo"
                className="h-12 w-12 sm:h-14 sm:w-14 lg:h-32 lg:w-32 xl:h-36 xl:w-36 object-contain group-hover:scale-105 transition-transform duration-300 rounded-lg"
              />
            </div>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center justify-center space-x-4 flex-1 mx-8">
            {menuItems.map((item) => (
              <div key={item.id} className="relative group">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                    className="relative"
                  >
                    <button
                     onClick={() => handleNavigation('services')}
                      className={`nav-item flex items-center px-6 py-3 text-sm font-semibold rounded-2xl transition-all duration-300 min-h-12 ${
                        currentPage === item.id || currentPage.startsWith('service')
                          ? 'text-ocean-700 bg-white/90' 
                          : 'text-white hover:text-ocean-100 hover:bg-ocean-600/50'
                      }`}
                      aria-expanded={servicesDropdown}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                        servicesDropdown ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Invisible bridge to prevent dropdown from closing */}
                    <div className="absolute top-full left-0 w-full h-2 bg-transparent" />
                    
                    {servicesDropdown && (
                      <div className="absolute top-full left-0 mt-3 w-72 sm:w-80 bg-white rounded-3xl shadow-large border border-ocean-100 py-4 z-50 animate-slide-down">
                        {/* Arrow pointer */}
                        <div className="absolute -top-2 left-8 w-4 h-4 bg-white border-l border-t border-ocean-100 transform rotate-45 rounded-tl-sm"></div>
                        
                        {item.dropdownItems?.map((dropItem) => (
                          <button
                            key={dropItem.id}
                            onClick={() => handleNavigation(dropItem.id)}
                            className="block w-full text-left px-6 sm:px-8 py-4 hover:bg-ocean-50/70 transition-all duration-200 group/item rounded-2xl mx-2 hover:translate-x-1 min-h-12"
                          >
                            <div className="flex flex-col">
                              <span className="text-base font-semibold text-ocean-800 group-hover/item:text-ocean-600 transition-colors">
                                {dropItem.label}
                              </span>
                              <span className="text-sm text-ocean-500 mt-1 group-hover/item:text-ocean-600 transition-colors">
                                {dropItem.description}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.id)}
                    className={`nav-item px-6 py-3 text-sm font-semibold rounded-2xl transition-all duration-300 min-h-12 ${
                      currentPage === item.id 
                        ? 'text-ocean-700 bg-white/90'
                        : 'text-white hover:text-ocean-100 hover:bg-ocean-600/50'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Language Selector - Far Right */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/lylia-mokrani-06385439/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-ocean-100 transition-colors duration-200 p-2 rounded-lg hover:bg-ocean-600/30"
              aria-label="LinkedIn Lylia Mokrani"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <LanguageSelector variant="compact" showLabel={false} />
          </div>

          {/* Menu mobile */}
          <div className="lg:hidden flex items-center space-x-2">
            <a 
              href="https://www.linkedin.com/in/lylia-mokrani-06385439/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-ocean-100 transition-colors duration-200 p-3 rounded-lg hover:bg-ocean-600/30 min-h-12 min-w-12 flex items-center justify-center"
              aria-label="LinkedIn Lylia Mokrani"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <LanguageSelector variant="compact" showLabel={false} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-white hover:text-ocean-100 transition-all duration-200 rounded-2xl hover:bg-ocean-600/30 min-h-12 min-w-12 flex items-center justify-center"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile dropdown */}
      {isMenuOpen && (
        <div className={`lg:hidden border-t border-ocean-600 shadow-medium animate-slide-down ${
          isScrolled ? 'bg-ocean-800/95 backdrop-blur-sm' : 'bg-ocean-800'
        }`}>
          <nav className="px-4 sm:px-6 py-6 space-y-1 max-h-80 overflow-y-auto">
            {menuItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => handleNavigation(item.id)}
                  className={`block w-full text-left px-4 py-4 rounded-xl text-base font-semibold transition-all duration-200 min-h-12 ${
                    currentPage === item.id
                      ? 'text-ocean-700 bg-white shadow-inner-soft'
                      : 'text-white hover:text-ocean-100 hover:bg-ocean-600/70'
                  }`}
                >
                  {item.label}
                </button>
                {item.hasDropdown && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.dropdownItems?.map((dropItem) => (
                      <button
                        key={dropItem.id}
                        onClick={() => handleNavigation(dropItem.id)}
                        className="block w-full text-left px-4 py-3 text-sm text-ocean-200 hover:text-white hover:bg-ocean-600/30 rounded-xl transition-all duration-200 min-h-10"
                      >
                        <div className="flex flex-col">
                          <span className="font-medium">{dropItem.label}</span>
                          <span className="text-xs text-ocean-300 mt-1">{dropItem.description}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile Language Selector */}
            <div className="pt-4 border-t border-ocean-600">
              <LanguageSelector variant="default" className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </div>
    </header>
  );
};

export default Header;