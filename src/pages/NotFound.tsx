import React, { useState } from 'react';
import { Home, Search, ArrowRight, Mail, Phone, FileText, Users, MessageCircle, BookOpen } from 'lucide-react';

interface NotFoundProps {
  setCurrentPage?: (page: string) => void;
}

const NotFound: React.FC<NotFoundProps> = ({ setCurrentPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavigation = (page: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to home page with search query (could be enhanced with actual search)
      handleNavigation('home');
    }
  };

  const quickLinks = [
    {
      id: 'home',
      label: 'Accueil',
      description: 'Retour à la page principale',
      icon: <Home className="w-5 h-5" />
    },
    {
      id: 'about',
      label: 'À propos',
      description: 'Découvrir mon expertise',
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 'services',
      label: 'Mes services',
      description: 'Conseil, coaching, formation',
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 'blog',
      label: 'Blog',
      description: 'Articles et actualités',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      id: 'contact',
      label: 'Contact',
      description: 'Prendre rendez-vous',
      icon: <MessageCircle className="w-5 h-5" />
    }
  ];

  const popularPages = [
    { id: 'conseil', label: 'Conseil RH & RPS' },
    { id: 'coaching', label: 'Coaching Professionnel' },
    { id: 'formations', label: 'Formations sur-mesure' },
    { id: 'raparigas', label: 'Engagez-vous' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-50 via-white to-ocean-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-ocean-300/10 to-ocean-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-coral-200/8 to-coral-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-ocean-200 leading-none select-none">
              404
            </h1>
            <div className="relative -mt-8">
              <div className="w-24 h-24 bg-ocean-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Search className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-800 mb-6">
              Page introuvable
            </h2>
            <p className="text-xl text-ocean-600 max-w-2xl mx-auto leading-relaxed">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
              Mais ne vous inquiétez pas, je peux vous aider à trouver ce que vous cherchez !
            </p>
          </div>

          {/* Search Box */}
          <div className="mb-16">
            <form onSubmit={handleSearch} className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher sur le site..."
                  className="w-full px-6 py-4 pl-12 text-lg border-2 border-ocean-200 rounded-2xl focus:border-ocean-500 focus:outline-none focus:ring-4 focus:ring-ocean-100 transition-all duration-300"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-ocean-400" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-ocean-600 text-white px-6 py-2 rounded-xl hover:bg-ocean-700 transition-colors duration-300 flex items-center"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-ocean-800 text-center mb-8">
            Où souhaitez-vous aller ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id)}
                className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group text-left border border-ocean-100 hover:border-ocean-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ocean-50 rounded-xl flex items-center justify-center group-hover:bg-ocean-100 transition-colors duration-300">
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-ocean-800 mb-1 group-hover:text-ocean-600 transition-colors">
                      {link.label}
                    </h4>
                    <p className="text-sm text-ocean-600">{link.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-ocean-400 group-hover:text-ocean-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Pages */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-ocean-800 text-center mb-6">
            Pages populaires
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {popularPages.map((page) => (
              <button
                key={page.id}
                onClick={() => handleNavigation(page.id)}
                className="bg-ocean-50 text-ocean-700 px-4 py-2 rounded-full hover:bg-ocean-100 hover:text-ocean-800 transition-all duration-300 text-sm font-medium border border-ocean-200 hover:border-ocean-300"
              >
                {page.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-soft border border-ocean-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-ocean-800 mb-4">
              Besoin d'aide ?
            </h3>
            <p className="text-ocean-600 mb-6">
              Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à me contacter directement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleNavigation('contact')}
                className="bg-ocean-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-ocean-700 transition-colors duration-300 flex items-center justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Me contacter
              </button>
              <a
                href="tel:+33123456789"
                className="border-2 border-ocean-600 text-ocean-600 px-6 py-3 rounded-xl font-medium hover:bg-ocean-50 transition-colors duration-300 flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Appeler
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;