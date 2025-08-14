import React from 'react';
import { Users, Target, Zap, Heart, CheckCircle, Star, Clock, Award, TrendingUp, RefreshCw, MessageCircle, ArrowRight, User, Building, Lightbulb, Shield } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import SEOHead from '../components/SEOHead';
import { serviceSchemas, breadcrumbSchema } from '../data/structuredData';

const Coaching: React.FC = () => {
  const { t } = useTranslation();

  // SEO optimized structured data for Coaching page
  const structuredData = [
    serviceSchemas.coaching,
    breadcrumbSchema('coaching', 'Coaching Professionnel')
  ];

  const coachingTypes = [
    {
      id: 'individuel',
      icon: <User className="w-12 h-12 text-blue-600" />,
      title: t.coaching.types.individuel.title,
      subtitle: t.coaching.types.individuel.subtitle,
      description: t.coaching.types.individuel.description,
      features: t.coaching.types.individuel.features,
      benefits: t.coaching.types.individuel.benefits,
      duration: t.coaching.types.individuel.duration,
      price: t.coaching.types.individuel.price,
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: t.coaching.types.individuel.badge
    },
    {
      id: 'collectif',
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: t.coaching.types.collectif.title,
      subtitle: t.coaching.types.collectif.subtitle,
      description: t.coaching.types.collectif.description,
      features: t.coaching.types.collectif.features,
      benefits: t.coaching.types.collectif.benefits,
      duration: t.coaching.types.collectif.duration,
      price: t.coaching.types.collectif.price,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: t.coaching.types.collectif.badge
    }
  ];

  const contexteProfessionnel = [
    {
      icon: <RefreshCw className="w-6 h-6 text-blue-600" />,
      title: t.coaching.contexte.cycles.title,
      description: t.coaching.contexte.cycles.description
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: t.coaching.contexte.complexite.title,
      description: t.coaching.contexte.complexite.description
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: t.coaching.contexte.competences.title,
      description: t.coaching.contexte.competences.description
    },
    {
      icon: <Building className="w-6 h-6 text-blue-600" />,
      title: t.coaching.contexte.exigences.title,
      description: t.coaching.contexte.exigences.description
    }
  ];

  const problematiques = t.coaching.problematiques.items;

  const approche = [
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: t.coaching.approche.travail.title,
      description: t.coaching.approche.travail.description
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: t.coaching.approche.relation.title,
      description: t.coaching.approche.relation.description
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: t.coaching.approche.positionnement.title,
      description: t.coaching.approche.positionnement.description
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: t.coaching.approche.accompagnement.title,
      description: t.coaching.approche.accompagnement.description
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: t.coaching.process.steps.step1.title,
      description: t.coaching.process.steps.step1.description,
      icon: <Target className="w-6 h-6 text-white" />
    },
    {
      step: "02",
      title: t.coaching.process.steps.step2.title,
      description: t.coaching.process.steps.step2.description,
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      step: "03",
      title: t.coaching.process.steps.step3.title,
      description: t.coaching.process.steps.step3.description,
      icon: <Users className="w-6 h-6 text-white" />
    },
    {
      step: "04",
      title: t.coaching.process.steps.step4.title,
      description: t.coaching.process.steps.step4.description,
      icon: <CheckCircle className="w-6 h-6 text-white" />
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Coaching Professionnel | Leadership & Management - BLM Consult"
        description="Coach professionnelle certifiée : coaching individuel dirigeants, coaching équipe, développement leadership. J'accompagne votre évolution managériale."
        keywords="coaching professionnel, coach certifié, leadership, management, coaching dirigeant, coaching équipe, développement managérial, accompagnement professionnel"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden pt-16 sm:pt-20 lg:pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Coaching professionnel" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              <Star className="w-4 h-4 mr-2" />
              {t.coaching.hero.badge}
            </div>
            
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8">
              {t.coaching.hero.title} <span className="text-blue-200">{t.coaching.hero.subtitle}</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              {t.coaching.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <button className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300 shadow-lg min-h-12">
                {t.coaching.hero.discoverButton}
              </button>
              <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300 min-h-12">
                {t.coaching.hero.quoteButton}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Types de coaching */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t.coaching.types.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.coaching.types.subtitle}
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {coachingTypes.map((coaching, index) => (
              <div key={coaching.id} className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={coaching.image} 
                    alt={coaching.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                    <span className="bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                      {coaching.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      {coaching.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {coaching.title}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base">{coaching.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{coaching.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">{t.coaching.common.problematiques}</h4>
                      <div className="space-y-1 sm:space-y-2">
                        {coaching.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start text-xs sm:text-sm">
                            <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">{t.coaching.common.benefits}</h4>
                      <div className="space-y-1 sm:space-y-2">
                        {coaching.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start text-xs sm:text-sm">
                            <Star className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="flex items-center mb-1 sm:mb-2">
                        <Clock className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-xs sm:text-sm font-medium text-gray-900">{t.coaching.common.duration}</span>
                      </div>
                      <p className="text-blue-600 font-medium text-xs sm:text-sm">{coaching.duration}</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="flex items-center mb-1 sm:mb-2">
                        <Award className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-xs sm:text-sm font-medium text-gray-900">{t.coaching.common.price}</span>
                      </div>
                      <p className="text-blue-600 font-medium text-xs sm:text-sm">{coaching.price}</p>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg flex items-center justify-center group-hover:shadow-xl min-h-12">
                    {t.coaching.common.learnMore}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Contexte professionnel */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t.coaching.contexte.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.coaching.contexte.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contexteProfessionnel.map((contexte, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  {contexte.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">{contexte.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{contexte.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problématiques traitées */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t.coaching.problematiques.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.coaching.problematiques.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {problematiques.map((problematique, index) => (
              <div key={index} className="bg-blue-50 p-4 sm:p-6 rounded-xl border-l-4 border-blue-600">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-900 font-medium text-sm sm:text-base">{problematique}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mon approche */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t.coaching.approche.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.coaching.approche.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {approche.map((item, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-50 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t.coaching.process.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.coaching.process.subtitle}
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

    </div>
  );
};

export default Coaching;