import React from 'react';
import { Target, Shield, Zap, Heart, CheckCircle, Star, Clock, Award, TrendingUp, Users, RefreshCw, MessageCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import SEOHead from '../components/SEOHead';

const ConseilRH: React.FC = () => {
  const { t } = useTranslation();

  // SEO optimized structured data for Conseil RH page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conseil RH & RPS - BLM Consult",
    "description": "Services de conseil RH spécialisés : diagnostic RPS, accompagnement du changement, gestion de crise, QVCT. Expertise certifiée par Lylia Mokrani.",
    "provider": {
      "@type": "Person",
      "name": "Lylia Mokrani",
      "jobTitle": "Consultante RH experte spécialisée RPS",
      "worksFor": {
        "@type": "Organization",
        "name": "BLM Consult"
      }
    },
    "serviceType": [
      "Diagnostic socio-organisationnel RPS",
      "Accompagnement du changement organisationnel",
      "Gestion de crise en entreprise",
      "QVCT - Qualité de Vie et Conditions de Travail"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "France"
    }
  };

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
      <section className="relative py-16 bg-gradient-to-br from-blue-50 to-white">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
              {t.conseilRH.hero.badge}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              {t.conseilRH.hero.title} <span className="text-blue-600">{t.conseilRH.hero.subtitle}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              {t.conseilRH.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg">
                {t.conseilRH.hero.diagnosticButton}
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300">
                {t.conseilRH.hero.brochureButton}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.conseilRH.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.conseilRH.services.subtitle}
            </p>
          </div>
          
          <div className="space-y-14">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {service.badge}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-blue-600 font-medium text-lg mb-6">{service.subtitle}</p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4">{t.conseilRH.common.analysis}</h4>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4">{t.conseilRH.common.benefits}</h4>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start">
                            <Star className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg flex items-center">
                    {t.conseilRH.common.learnMore}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.conseilRH.process.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.conseilRH.process.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto text-2xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.conseilRH.expertise.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.conseilRH.expertise.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="text-center bg-gray-50 p-8 rounded-xl">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ConseilRH;