import React from 'react';
import { ArrowRight, CheckCircle, Award, Heart, Star, Play, Shield, Zap, Target, Users, Clock, MessageCircle, Phone, Mail, Quote, TrendingUp, BookOpen, Calendar } from 'lucide-react';
import { useLanguageContext } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedButton from '../components/AnimatedButton';
import AnimatedCard from '../components/AnimatedCard';

interface HomeProps {
  setCurrentPage?: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const { t, formatNumber } = useLanguageContext();

  // Vérification de sécurité robuste
  if (!t || !t.home) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-ocean-600 mx-auto mb-4"></div>
        <p className="text-ocean-600 text-lg">Chargement des traductions...</p>
      </div>
    </div>;
  }

  // Vérification des propriétés critiques avec fallback
  const safeT = {
    home: t.home || {},
    contactCTA: (t as any).contactCTA || {
      title: 'Prêt à transformer votre organisation ?',
      subtitle: 'Contactez-nous dès aujourd\'hui pour un diagnostic gratuit...',
      callButton: 'Appeler maintenant',
      messageButton: 'Envoyer un message',
      response48h: 'Réponse sous 48h',
      freeDiagnostic: 'Diagnostic gratuit',
      personalizedQuote: 'Devis personnalisé'
    }
  };

  // SEO optimized structured data for BLM Consult
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "BLM Consult",
    "description": "Cabinet conseil RH spécialisé en accompagnement entreprise, formation coaching et développement professionnel. 15+ ans d'expérience.",
    "url": window.location.origin,
    "logo": "https://lh3.googleusercontent.com/pw/AP1GczOkB92Fn0-b0Lal_KeOxAh4I0iVqxSsqvyI1nVcU3xA1Xbgu8-nhiTJ6xpLa9CW-6fAngVOJSxdUh2pNxoLDwdPttV3mwt3e1vi-UvaGLsE6dmQkJKhpUAjJGF7JWTe7dc7UC06bDsB6dmWtVFI3yQA=w793-h315-s-no-gm?authuser=0",
    "founder": {
      "@type": "Person",
      "name": "Lylia Mokrani",
      "jobTitle": "Consultant formateur coach",
      "description": "Experte en conseil ressources humaines et changement organisationnel"
    },
    "serviceType": [
      "Conseil en ressources humaines",
      "Formation professionnelle",
      "Coaching professionnel",
      "Accompagnement du changement organisationnel",
      "Médiation professionnelle"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["French"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5"
    }
  };

  const handleNavigation = (page: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  const getServicePage = (serviceTitle: string) => {
    switch (serviceTitle) {
      case "Conseil Stratégique RH":
        return 'conseil';
      case "Coaching Professionnel":
        return 'coaching';
      case "Formation Sur-mesure":
        return 'formations';
      case "Médiation Professionnelle":
        return 'services'; // Page générale des services pour la médiation
      default:
        return 'services';
    }
  };
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: t.home.features.feature1.title,
      description: t.home.features.feature1.description,
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: t.home.features.feature2.title,
      description: t.home.features.feature2.description,
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: t.home.features.feature3.title,
      description: t.home.features.feature3.description,
    }
  ];

  const services = [
    {
      title: t.home.services.service1.title,
      description: t.home.services.service1.description,
      features: t.home.services.service1.features,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500",
      badge: t.home.services.service1.badge
    },
    {
      title: t.home.services.service2.title,
      description: t.home.services.service2.description,
      features: t.home.services.service2.features,
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=500",
      badge: t.home.services.service2.badge
    },
    {
      title: t.home.services.service3.title,
      description: t.home.services.service3.description,
      features: t.home.services.service3.features,
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=500",
      badge: t.home.services.service3.badge
    },
    {
      title: t.home.services.service4.title,
      description: t.home.services.service4.description,
      features: t.home.services.service4.features,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500",
      badge: t.home.services.service4.badge
    }
  ];

  const stats = [
    { number: 150, label: t.home.stats.clients },
    { number: 98, label: t.home.stats.satisfaction, suffix: '%' },
    { number: 15, label: t.home.stats.experience }
  ];

  const testimonials = [
    {
      name: t.home.testimonials.testimonial1.name,
      content: t.home.testimonials.testimonial1.content,
      rating: 5
    },
    {
      name: t.home.testimonials.testimonial2.name,
      content: t.home.testimonials.testimonial2.content,
      rating: 5
    },
    {
      name: t.home.testimonials.testimonial3.name,
      content: t.home.testimonials.testimonial3.content,
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: t.home.blog.post1.title,
      excerpt: t.home.blog.post1.excerpt,
      date: t.home.blog.post1.date,
      readTime: t.home.blog.post1.readTime,
      category: t.home.blog.post1.category,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: t.home.blog.post2.title,
      excerpt: t.home.blog.post2.excerpt,
      date: t.home.blog.post2.date,
      readTime: t.home.blog.post2.readTime,
      category: t.home.blog.post2.category,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: t.home.blog.post3.title,
      excerpt: t.home.blog.post3.excerpt,
      date: t.home.blog.post3.date,
      readTime: t.home.blog.post3.readTime,
      category: t.home.blog.post3.category,
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: t.home.process.step1.title,
      description: t.home.process.step1.description,
      icon: <Target className="w-6 h-6 text-white" />
    },
    {
      step: "02",
      title: t.home.process.step2.title,
      description: t.home.process.step2.description,
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      step: "03",
      title: t.home.process.step3.title,
      description: t.home.process.step3.description,
      icon: <Users className="w-6 h-6 text-white" />
    },
    {
      step: "04",
      title: t.home.process.step4.title,
      description: t.home.process.step4.description,
      icon: <CheckCircle className="w-6 h-6 text-white" />
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <SEOHead 
        title="BLM Consult | Cabinet Conseil RH & Formation Coaching"
        description="Consultante RH experte en accompagnement entreprise. Je vous accompagne avec 15+ ans d'expérience en développement professionnel."
        keywords="cabinet conseil RH, consultant formateur coach, accompagnement entreprise, formation coaching, conseil ressources humaines, changement organisationnel, développement professionnel"
        structuredData={structuredData} 
      />
      
      {/* Hero Section Professionnel */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-ocean-50 via-white to-ocean-100">
        {/* Background with modern gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-100/50 via-transparent to-ocean-200/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-ocean-50/40 via-transparent to-coral-50/10"></div>
        
        {/* Geometric background elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-ocean-300/15 to-ocean-400/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-coral-200/12 to-coral-300/8 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection className="space-y-10" animation="fadeLeft">
              <div className="inline-flex items-center bg-gradient-to-r from-ocean-100 to-ocean-50 text-ocean-800 px-6 py-3 rounded-full text-sm font-semibold shadow-soft border border-ocean-200/50">
                <Star className="w-4 h-4 mr-2" />
                {t.home.hero.expertise}
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold leading-tight text-ocean-800 tracking-tight -mt-10">
                {t.home.hero.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-ocean-700 leading-relaxed max-w-2xl font-light">
                {t.home.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <AnimatedButton
                  variant="primary"
                  size="lg"
                  onClick={() => handleNavigation('contact')}
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  {t.home.hero.cta}
                </AnimatedButton>
                <AnimatedButton
                  variant="outline"
                  size="lg"
                  onClick={() => handleNavigation('about')}
                  icon={<Play className="w-5 h-5" />}
                  iconPosition="left"
                >
                  {t.home.hero.secondaryCta}
                </AnimatedButton>
              </div>
              
              {/* Indicateurs de confiance */}
              <AnimatedSection className="flex items-center space-x-12 pt-8" delay={300}>
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl md:text-4xl font-bold text-ocean-800 group-hover:text-ocean-600 transition-colors duration-300">
                      {formatNumber(stat.number)}{stat.suffix || '+'}
                    </div>
                    <div className="text-sm text-ocean-600 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </AnimatedSection>
            </AnimatedSection>
            
            <AnimatedSection className="relative" animation="fadeRight" delay={200}>
              <div className="relative z-10 group">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Consultation professionnelle" 
                  className="rounded-4xl shadow-large group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-105 image-hover"
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-4xl opacity-20 blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-coral-400 to-coral-600 rounded-4xl opacity-15 blur-xl"></div>
                
                {/* Badge professionnel */}
                <AnimatedCard className="absolute -bottom-10 -left-10 bg-white/95 backdrop-blur-xl p-8 border border-secondary-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-ocean-600 to-ocean-700 rounded-2xl flex items-center justify-center shadow-medium">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-ocean-800 text-lg">{t.home.hero.name}</p>
                      <p className="text-sm text-ocean-600 font-medium">{t.home.hero.jobTitle}</p>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
              
              {/* Citation inspirante */}
              <AnimatedSection className="mt-16 text-center" delay={400}>
                <blockquote className="text-lg md:text-xl text-ocean-700 italic leading-relaxed max-w-2xl mx-auto">
                  {t.home.hero.quote}
                </blockquote>
                <cite className="block mt-4 text-sm text-ocean-500 font-medium">
                  {t.home.hero.author}
                </cite>
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-white to-ocean-50/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ocean-800 mb-8 tracking-tight">
              {t.home.features.title}
            </h2>
            <p className="text-lg md:text-xl text-ocean-600 max-w-4xl mx-auto leading-relaxed font-light">
              {t.home.features.subtitle}
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {values.map((value, index) => (
              <AnimatedSection key={index} className="text-center" delay={index * 100}>
                <AnimatedCard className="text-center p-8 card-hover h-full flex flex-col">
                <div className="w-24 h-24 bg-gradient-to-br from-ocean-50 to-ocean-100 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:from-ocean-100 group-hover:to-ocean-200 transition-all duration-500 shadow-soft group-hover:shadow-medium">
                  {value.icon}
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <h3 className="text-2xl md:text-3xl font-bold text-ocean-800 mb-6 group-hover:text-ocean-600 transition-colors duration-300">{value.title}</h3>
                  <p className="text-ocean-600 leading-relaxed text-lg font-light">{value.description}</p>
                </div>
                </AnimatedCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-ocean-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-ocean-800 mb-6">
              {t.home.servicesSection.title}
            </h2>
            <p className="text-lg text-ocean-600 max-w-3xl mx-auto leading-relaxed">
              {t.home.servicesSection.subtitle}
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <AnimatedCard className="overflow-hidden group card-hover h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 image-hover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-ocean-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {service.badge}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-ocean-800 mb-3">{service.title}</h3>
                  <p className="text-ocean-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-ocean-600">
                        <CheckCircle className="w-4 h-4 text-ocean-600 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-ocean-600 font-medium">{t.home.servicesSection?.onQuote || 'Sur devis'}</span>
                    <button 
                      onClick={() => handleNavigation(getServicePage(service.title))}
                      className="text-ocean-600 hover:text-ocean-700 font-medium text-sm flex items-center transition-all duration-200 hover:translate-x-1"
                    >
                      {t.home.servicesSection?.learnMore || 'En savoir plus'}
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
                </AnimatedCard>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection className="text-center mt-12">
            <AnimatedButton
              variant="primary"
              size="lg"
              onClick={() => handleNavigation('services')}
            >
              {t.common.discoverAllServices}
            </AnimatedButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-ocean-800 mb-6">
              {t.home.process.title}
            </h2>
            <p className="text-lg text-ocean-600 max-w-3xl mx-auto">
              {t.home.process.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-ocean-600 text-white rounded-xl flex items-center justify-center mx-auto text-2xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-ocean-500 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-ocean-800 mb-4">{step.title}</h3>
                <p className="text-ocean-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => handleNavigation('about')}
              className="border-2 border-ocean-600 text-ocean-600 px-8 py-4 rounded-lg font-medium hover:bg-ocean-50 transition-colors duration-300 cursor-pointer"
            >
              {t.home.process.learnMoreButton}
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-ocean-50/20 to-ocean-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-ocean-800 mb-6">
              {t.home.testimonials.title}
            </h2>
            <p className="text-lg text-ocean-600 max-w-3xl mx-auto">
              {t.home.testimonials.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-ocean-100 hover:border-ocean-200">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-ocean-200 mb-4" />
                  <p className="text-ocean-700 leading-relaxed text-lg mb-6 italic">"{testimonial.content}"</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-ocean-800 text-lg">{testimonial.name}</h4>
                  <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-coral-400 fill-current" />
                  ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-ocean-50 to-ocean-100 rounded-3xl p-12 text-center border border-ocean-200/50">
            <h2 className="text-3xl md:text-4xl font-bold text-ocean-800 mb-8">
              {t.contactCTA?.title || 'Prêt à transformer votre organisation ?'}
            </h2>
            <p className="text-lg text-ocean-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t.contactCTA?.subtitle || 'Contactez-nous dès aujourd\'hui pour un diagnostic gratuit et découvrez comment notre expertise peut vous accompagner vers l\'excellence organisationnelle.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button 
                onClick={() => handleNavigation('contact')}
                className="bg-ocean-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-ocean-700 transition-colors duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>{t.contactCTA?.callButton || 'Appeler maintenant'}</span>
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className="border-2 border-ocean-600 text-ocean-600 px-8 py-4 rounded-lg font-medium hover:bg-ocean-50 transition-colors duration-300 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>{t.contactCTA?.messageButton || 'Envoyer un message'}</span>
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="flex items-center space-x-2 text-ocean-600">
                <CheckCircle className="w-5 h-5 text-ocean-500" />
                <span className="text-sm font-medium">{t.contactCTA?.response48h || 'Réponse sous 48h'}</span>
              </div>
              <div className="flex items-center space-x-2 text-ocean-600">
                <CheckCircle className="w-5 h-5 text-ocean-500" />
                <span className="text-sm font-medium">{t.contactCTA?.freeDiagnostic || 'Diagnostic gratuit'}</span>
              </div>
              <div className="flex items-center space-x-2 text-ocean-600">
                <CheckCircle className="w-5 h-5 text-ocean-500" />
                <span className="text-sm font-medium">{t.contactCTA?.personalizedQuote || 'Devis personnalisé'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;