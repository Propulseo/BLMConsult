import React from 'react';
import { Target, Shield, Zap, Heart, CheckCircle, Star, Clock, Award, TrendingUp, Users, RefreshCw, MessageCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import SEOHead from '../components/SEOHead';
import { serviceSchemas, breadcrumbSchema } from '../data/structuredData';

const ConseilRH: React.FC = () => {
  const { t } = useTranslation();

  // SEO optimized structured data for Conseil RH page
  const structuredData = [
    serviceSchemas.conseilRH,
    breadcrumbSchema('conseil', 'Conseil RH & RPS')
  ];

  const services = [
    {
      id: 'rps-diagnostic',
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: t.conseilRH.services.rps.title,
      subtitle: t.conseilRH.services.rps.subtitle,
      description: t.conseilRH.services.rps.description,
      features: t.conseilRH.services.rps.features,
      benefits: t.conseilRH.services.rps.benefits,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: t.conseilRH.services.rps.badge
    },
    {
      id: 'accompagnement-changement',
      icon: <RefreshCw className="w-12 h-12 text-blue-600" />,
      title: t.conseilRH.services.changement.title,
      subtitle: t.conseilRH.services.changement.subtitle,
      description: t.conseilRH.services.changement.description,
      features: t.conseilRH.services.changement.features,
      benefits: t.conseilRH.services.changement.benefits,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: t.conseilRH.services.changement.badge
    },
    {
      id: 'qvct',
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: t.conseilRH.services.qvct.title,
      subtitle: t.conseilRH.services.qvct.subtitle,
      description: t.conseilRH.services.qvct.description,
      features: t.conseilRH.services.qvct.features,
      benefits: t.conseilRH.services.qvct.benefits,
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: t.conseilRH.services.qvct.badge
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: t.conseilRH.process.steps.step1.title,
      description: t.conseilRH.process.steps.step1.description,
      icon: <Target className="w-6 h-6 text-white" />
    },
    {
      step: "02",
      title: t.conseilRH.process.steps.step2.title,
      description: t.conseilRH.process.steps.step2.description,
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      step: "03",
      title: t.conseilRH.process.steps.step3.title,
      description: t.conseilRH.process.steps.step3.description,
      icon: <Users className="w-6 h-6 text-white" />
    },
    {
      step: "04",
      title: t.conseilRH.process.steps.step4.title,
      description: t.conseilRH.process.steps.step4.description,
      icon: <CheckCircle className="w-6 h-6 text-white" />
    }
  ];

  const expertise = [
    {
      title: t.conseilRH.expertise.experience.title,
      description: t.conseilRH.expertise.experience.description,
      icon: <Award className="w-6 h-6 text-blue-600" />
    },
    {
      title: t.conseilRH.expertise.certifications.title,
      description: t.conseilRH.expertise.certifications.description,
      icon: <Shield className="w-6 h-6 text-blue-600" />
    },
    {
      title: t.conseilRH.expertise.approach.title,
      description: t.conseilRH.expertise.approach.description,
      icon: <Target className="w-6 h-6 text-blue-600" />
    },
    {
      title: t.conseilRH.expertise.results.title,
      description: t.conseilRH.expertise.results.description,
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Conseil RH & RPS | Experte Diagnostic Organisationnel - BLM Consult"
        description="Consultante RH spécialisée RPS : diagnostic organisationnel, gestion de crise, QVCT. J'accompagne votre transformation avec 15+ ans d'expertise certifiée."
        keywords="conseil RH, RPS, diagnostic organisationnel, changement organisationnel, gestion crise, QVCT, qualité vie travail, consultant RH expert"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Conseil RH professionnel" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 pt-16 sm:pt-20 lg:pt-16">
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              <Star className="w-4 h-4 mr-2" />
              {t.conseilRH.hero.badge}
            </div>
            
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8">
              {t.conseilRH.hero.title} <span className="text-blue-200">{t.conseilRH.hero.subtitle}</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              {t.conseilRH.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <button className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300 shadow-lg min-h-12">
                {t.conseilRH.hero.diagnosticButton}
              </button>
              <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300 min-h-12">
                {t.conseilRH.hero.brochureButton}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t.conseilRH.services.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.conseilRH.services.subtitle}
            </p>
          </div>
          
          <div className="space-y-10 sm:space-y-14">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-50 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <span className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {service.badge}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-blue-600 font-medium text-base sm:text-lg mb-4 sm:mb-6">{service.subtitle}</p>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">{t.conseilRH.common.analysis}</h4>
                      <div className="space-y-2 sm:space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start text-xs sm:text-sm">
                            <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">{t.conseilRH.common.benefits}</h4>
                      <div className="space-y-2 sm:space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start text-xs sm:text-sm">
                            <Star className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg flex items-center justify-center min-h-12">
                    {t.conseilRH.common.learnMore}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 sm:h-64 lg:h-80 xl:h-96 object-cover rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
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
              {t.conseilRH.process.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.conseilRH.process.subtitle}
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

      {/* Expertise Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t.conseilRH.expertise.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.conseilRH.expertise.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 sm:p-8 rounded-xl">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ConseilRH;