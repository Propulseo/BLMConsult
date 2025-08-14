import React from 'react';
import { ArrowRight, CheckCircle, Star, Target, Users, GraduationCap, Handshake, MessageCircle, Shield, Zap, Heart, Clock, Award } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import SEOHead from '../components/SEOHead';
import { serviceSchemas, breadcrumbSchema } from '../data/structuredData';

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const { t } = useTranslation();

  // SEO optimized structured data for Services page
  const structuredData = [
    serviceSchemas.conseilRH,
    serviceSchemas.coaching, 
    serviceSchemas.formations,
    breadcrumbSchema('services', 'Nos Services')
  ];

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const mainServices = [
    {
      id: 'conseil',
      icon: <MessageCircle className="w-12 h-12 text-blue-600" />,
      title: t.services.mainServices.conseil.title,
      subtitle: t.services.mainServices.conseil.subtitle,
      description: t.services.mainServices.conseil.description,
      features: t.services.mainServices.conseil.features,
      benefits: t.services.mainServices.conseil.benefits,
      duration: t.services.mainServices.conseil.duration,
      price: t.services.mainServices.conseil.price,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: t.services.mainServices.conseil.badge
    },
    {
      id: 'coaching',
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: t.services.mainServices.coaching.title,
      subtitle: t.services.mainServices.coaching.subtitle,
      description: t.services.mainServices.coaching.description,
      features: t.services.mainServices.coaching.features,
      benefits: t.services.mainServices.coaching.benefits,
      duration: t.services.mainServices.coaching.duration,
      price: t.services.mainServices.coaching.price,
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: t.services.mainServices.coaching.badge
    },
    {
      id: 'formations',
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
      title: t.services.mainServices.formations.title,
      subtitle: t.services.mainServices.formations.subtitle,
      description: t.services.mainServices.formations.description,
      features: t.services.mainServices.formations.features,
      benefits: t.services.mainServices.formations.benefits,
      duration: t.services.mainServices.formations.duration,
      price: t.services.mainServices.formations.price,
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: t.services.mainServices.formations.badge
    },
    {
      id: 'mediation',
      icon: <Handshake className="w-12 h-12 text-blue-600" />,
      title: t.services.mainServices.mediation.title,
      subtitle: t.services.mainServices.mediation.subtitle,
      description: t.services.mainServices.mediation.description,
      features: t.services.mainServices.mediation.features,
      benefits: t.services.mainServices.mediation.benefits,
      duration: t.services.mainServices.mediation.duration,
      price: t.services.mainServices.mediation.price,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: t.services.mainServices.mediation.badge
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: t.services.process.steps.step1.title,
      description: t.services.process.steps.step1.description,
      icon: <Target className="w-6 h-6 text-white" />
    },
    {
      step: "02", 
      title: t.services.process.steps.step2.title,
      description: t.services.process.steps.step2.description,
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      step: "03",
      title: t.services.process.steps.step3.title,
      description: t.services.process.steps.step3.description,
      icon: <Users className="w-6 h-6 text-white" />
    },
    {
      step: "04",
      title: t.services.process.steps.step4.title,
      description: t.services.process.steps.step4.description,
      icon: <CheckCircle className="w-6 h-6 text-white" />
    }
  ];

  const sectors = [
    {
      name: t.services.sectors.private.name,
      description: t.services.sectors.private.description,
      icon: <Target className="w-6 h-6 text-blue-600" />
    },
    {
      name: t.services.sectors.local.name,
      description: t.services.sectors.local.description,
      icon: <Shield className="w-6 h-6 text-blue-600" />
    },
    {
      name: t.services.sectors.public.name,
      description: t.services.sectors.public.description,
      icon: <Zap className="w-6 h-6 text-blue-600" />
    },
    {
      name: t.services.sectors.associations.name,
      description: t.services.sectors.associations.description,
      icon: <Heart className="w-6 h-6 text-blue-600" />
    },
    {
      name: t.services.sectors.health.name,
      description: t.services.sectors.health.description,
      icon: <Shield className="w-6 h-6 text-blue-600" />
    },
    {
      name: t.services.sectors.education.name,
      description: t.services.sectors.education.description,
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    setCurrentPage(serviceId);
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Mes Services RH | Conseil, Coaching & Formation - BLM Consult"
        description="Consultante RH experte : conseil stratégique, coaching professionnel, formations sur-mesure et médiation. Je transforme votre organisation avec 15+ ans d'expérience."
        keywords="services conseil RH, coaching professionnel, formation entreprise, médiation conflits, consultant formateur coach, accompagnement entreprise, développement professionnel"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden pt-16 sm:pt-20 lg:pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Services professionnels" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2" />
            {t.services.hero.badge}
          </div>
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
            {t.services.hero.title} <span className="text-blue-200">{t.services.hero.subtitle}</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            {t.services.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <button className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300 shadow-lg min-h-12">
              {t.services.hero.discoverButton}
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300 min-h-12">
              {t.services.hero.quoteButton}
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t.services.expertise.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.services.expertise.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {mainServices.map((service, index) => (
              <div key={service.id} className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                   onClick={() => handleServiceClick(service.id)}>
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-blue-600 font-medium mb-3 sm:mb-4">{service.subtitle}</p>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start text-xs sm:text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="flex items-center mb-1 sm:mb-2">
                        <Clock className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-xs sm:text-sm font-medium text-gray-900">{t.services.common.duration}</span>
                      </div>
                      <p className="text-blue-600 font-medium text-xs sm:text-sm">{service.duration}</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="flex items-center mb-1 sm:mb-2">
                        <Award className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-xs sm:text-sm font-medium text-gray-900">{t.services.common.price}</span>
                      </div>
                      <p className="text-blue-600 font-medium text-xs sm:text-sm">{service.price}</p>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg flex items-center justify-center group-hover:shadow-xl min-h-12">
                    <span onClick={() => handleNavigation('contact')}>{t.services.mainServices.conseil.learnMore}</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t.services.process.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.services.process.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto text-lg sm:text-xl lg:text-2xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-white">
                      {step.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t.services.sectors.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.services.sectors.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    {sector.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{sector.name}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties Section */}
      <section className="py-12 sm:py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
              {t.services.guarantees.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              {t.services.guarantees.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-white" />,
                title: t.services.guarantees.satisfaction.title,
                description: t.services.guarantees.satisfaction.description
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-white" />,
                title: t.services.guarantees.results.title,
                description: t.services.guarantees.results.description
              },
              {
                icon: <Clock className="w-8 h-8 text-white" />,
                title: t.services.guarantees.support.title,
                description: t.services.guarantees.support.description
              }
            ].map((guarantee, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/20 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  {guarantee.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{guarantee.title}</h3>
                <p className="text-sm sm:text-base text-blue-100">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            {t.services.cta.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.services.cta.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300 shadow-lg flex items-center justify-center min-h-12">
              <MessageCircle className="mr-2 w-5 h-5" />
              {t.services.cta.diagnosticButton}
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors duration-300"
                    onClick={() => handleNavigation('contact')}
                    className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors duration-300 min-h-12">
              {t.services.cta.brochureButton}
            </button>
          </div>
          
          <div className="mt-8 sm:mt-12 flex flex-col xs:flex-row items-center justify-center space-y-2 xs:space-y-0 xs:space-x-4 sm:space-x-6 lg:space-x-8 text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-xs sm:text-sm">{t.services.cta.response48h}</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-xs sm:text-sm">{t.services.cta.personalizedQuote}</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-xs sm:text-sm">{t.services.cta.expertSupport}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;