import React from 'react';
import { Users, Target, Heart, Award, ExternalLink, CheckCircle, Star, Clock, ArrowRight, Shield, Zap, MessageCircle, Phone, Mail } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Raparigas: React.FC = () => {
  // SEO optimized structured data for Raparigas page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "RAPARIGAS INTECH - BLM Consult",
    "description": "Programme d'accompagnement pour femmes en reconversion tech. Mentoring, coaching et formation pour réussir sa transition vers les métiers du numérique.",
    "founder": {
      "@type": "Person",
      "name": "Lylia Mokrani",
      "jobTitle": "Mentor et Coach en reconversion professionnelle"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Femmes en reconversion professionnelle"
    },
    "teaches": [
      "Reconversion vers la tech",
      "Développement des compétences numériques",
      "Coaching professionnel femmes",
      "Accompagnement transition carrière"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "France"
    }
  };

  const missions = [
    {
      icon: <Users className="w-8 h-8 text-ocean-600" />,
      title: "Inclusion numérique",
      description: "Promouvoir la diversité et l'inclusion des femmes dans les métiers tech"
    },
    {
      icon: <Target className="w-8 h-8 text-ocean-600" />,
      title: "Accompagnement",
      description: "Mentoring et coaching pour les femmes en reconversion tech"
    },
    {
      icon: <Heart className="w-8 h-8 text-ocean-600" />,
      title: "Communauté",
      description: "Création d'un réseau de soutien et d'entraide"
    },
    {
      icon: <Award className="w-8 h-8 text-ocean-600" />,
      title: "Formation",
      description: "Programmes de formation adaptés aux besoins des femmes"
    }
  ];

  const programs = [
    {
      title: "Mentoring individuel",
      description: "Accompagnement personnalisé pour définir et atteindre vos objectifs professionnels",
      duration: "6 mois",
      features: [
        "Séances individuelles hebdomadaires",
        "Plan de développement personnalisé",
        "Suivi des objectifs et progrès",
        "Accès au réseau professionnel"
      ],
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: "Personnalisé"
    },
    {
      title: "Ateliers collectifs",
      description: "Sessions de groupe pour développer ses compétences techniques et soft skills",
      duration: "Sessions mensuelles",
      features: [
        "Ateliers techniques pratiques",
        "Développement des soft skills",
        "Networking entre participantes",
        "Retours d'expérience"
      ],
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: "Collectif"
    },
    {
      title: "Événements networking",
      description: "Rencontres avec des professionnelles du secteur tech et des recruteurs",
      duration: "Événements trimestriels",
      features: [
        "Rencontres avec des professionnelles",
        "Sessions de recrutement",
        "Conférences inspirantes",
        "Opportunités d'emploi"
      ],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: "Réseau"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Développeuse Full Stack",
      content: "Le programme m'a donné la confiance et les outils nécessaires pour réussir ma reconversion. L'accompagnement personnalisé a fait toute la différence.",
      rating: 5
    },
    {
      name: "Fatima B.",
      role: "Data Analyst", 
      content: "Grâce à RAPARIGAS INTECH, j'ai pu développer mes compétences techniques tout en bénéficiant d'un réseau de soutien exceptionnel.",
      rating: 5
    },
    {
      name: "Marie K.",
      role: "Product Manager",
      content: "Un programme qui change vraiment la donne ! L'approche bienveillante et professionnelle m'a permis d'atteindre mes objectifs.",
      rating: 5
    }
  ];

  const stats = [
    { number: "100+", label: "Femmes accompagnées" },
    { number: "85%", label: "Taux de réussite" },
    { number: "50+", label: "Entreprises partenaires" },
    { number: "24", label: "Mois d'expérience" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Candidature",
      description: "Soumettez votre candidature et participez à un entretien de motivation",
      icon: <Target className="w-6 h-6 text-white" />
    },
    {
      step: "02",
      title: "Évaluation",
      description: "Évaluation de vos compétences et définition de votre parcours personnalisé",
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      step: "03",
      title: "Accompagnement",
      description: "Démarrage du programme avec mentoring et formations adaptées",
      icon: <Users className="w-6 h-6 text-white" />
    },
    {
      step: "04",
      title: "Insertion",
      description: "Accompagnement vers l'emploi et suivi post-insertion",
      icon: <CheckCircle className="w-6 h-6 text-white" />
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="RAPARIGAS INTECH | Accompagnement Femmes Tech - BLM Consult"
        description="Programme d'accompagnement pour femmes en reconversion tech. Mentoring, coaching et formation pour réussir votre transition vers les métiers du numérique."
        keywords="reconversion tech femmes, mentoring femmes, coaching reconversion, formation numérique femmes, transition carrière tech, accompagnement professionnel femmes"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-ocean-50 to-white">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-100/50 via-transparent to-ocean-200/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-ocean-50/40 via-transparent to-coral-50/10"></div>
        
        {/* Geometric background elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-ocean-300/15 to-ocean-400/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-coral-200/12 to-coral-300/8 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center bg-gradient-to-r from-ocean-100 to-ocean-50 text-ocean-800 px-6 py-3 rounded-full text-sm font-semibold shadow-soft border border-ocean-200/50">
                <Heart className="w-4 h-4 mr-2" />
                Engagement social • Inclusion numérique
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold leading-tight text-ocean-800 tracking-tight">
                Engagez-vous
                <span className="block text-coral-600">avec BLM Consult</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-ocean-700 leading-relaxed max-w-2xl font-light">
                Découvrez comment BLM Consult s'engage pour un monde professionnel 
                plus inclusif et équitable, où chacun peut s'épanouir.
              </p>
              
              <p className="text-lg text-ocean-600 leading-relaxed max-w-2xl">
                Mon engagement va au-delà du conseil : je m'investis activement 
                dans des causes qui me tiennent à cœur et qui transforment le monde du travail.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button className="bg-ocean-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-ocean-700 transition-all duration-300 shadow-medium hover:shadow-large transform hover:scale-105 flex items-center justify-center">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Découvrir mes engagements
                </button>
                <button className="border-2 border-ocean-600 text-ocean-600 px-8 py-4 rounded-2xl font-semibold hover:bg-ocean-50 transition-all duration-300 flex items-center justify-center hover:translate-x-1">
                  En savoir plus
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 group">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Engagement social BLM Consult" 
                  className="rounded-4xl shadow-large group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-105"
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-4xl opacity-20 blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-coral-400 to-coral-600 rounded-4xl opacity-15 blur-xl"></div>
                
                {/* Badge professionnel */}
                <div className="absolute -bottom-10 -left-10 bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-large border border-ocean-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl flex items-center justify-center shadow-medium">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-ocean-800 text-lg">Engagement</p>
                      <p className="text-sm text-ocean-600 font-medium">authentique</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-white to-ocean-50/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-800 mb-8 tracking-tight">
              Mes engagements
            </h2>
            <p className="text-xl text-ocean-600 max-w-4xl mx-auto leading-relaxed font-light">
              Les causes qui me tiennent à cœur et qui guident mon action professionnelle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missions.map((mission, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-8 rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col border border-ocean-100/50">
                  <div className="w-24 h-24 bg-gradient-to-br from-ocean-50 to-ocean-100 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:from-ocean-100 group-hover:to-ocean-200 transition-all duration-500 shadow-soft">
                    {mission.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-ocean-800 mb-6 group-hover:text-ocean-600 transition-colors duration-300">{mission.title}</h3>
                  <p className="text-ocean-600 leading-relaxed text-lg font-light flex-1">{mission.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-b from-ocean-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-800 mb-8 tracking-tight">
              Programmes d'accompagnement
            </h2>
            <p className="text-xl text-ocean-600 max-w-4xl mx-auto leading-relaxed font-light">
              Un accompagnement complet pour réussir la transition vers la tech
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-large overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-ocean-100/50">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-6 right-6">
                    <span className="bg-ocean-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-medium">
                      {program.badge}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-ocean-800 mb-3 group-hover:text-ocean-600 transition-colors">{program.title}</h3>
                  <p className="text-ocean-600 mb-6 leading-relaxed text-lg">{program.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-ocean-600">
                        <CheckCircle className="w-5 h-5 text-ocean-600 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-ocean-100">
                    <div className="flex items-center text-ocean-500">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <span className="text-ocean-600 font-semibold">Sur devis</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-white to-ocean-50/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-800 mb-8 tracking-tight">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-ocean-600 max-w-4xl mx-auto leading-relaxed font-light">
              Un processus structuré pour maximiser vos chances de réussite
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-ocean-50/20 to-ocean-100/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-800 mb-8 tracking-tight">
              Elles témoignent
            </h2>
            <p className="text-xl text-ocean-600 max-w-4xl mx-auto leading-relaxed font-light">
              Témoignages authentiques de femmes qui ont réussi leur reconversion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-large hover:shadow-xl transition-all duration-300 group border border-ocean-100 hover:border-ocean-200">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-coral-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-ocean-700 leading-relaxed text-lg mb-6 italic">"{testimonial.content}"</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-ocean-800 text-lg">{testimonial.name}</h4>
                    <p className="text-ocean-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-ocean-600 to-ocean-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-5xl md:text-6xl font-bold mb-4 text-coral-300">{stat.number}</div>
                <div className="text-xl text-ocean-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-ocean-50 to-ocean-100 rounded-4xl p-16 text-center border border-ocean-200/50">
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-800 mb-8 tracking-tight">
              Prête à rejoindre l'aventure ?
            </h2>
            <p className="text-xl text-ocean-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Contactez-moi pour en savoir plus sur mes programmes d'accompagnement 
              et commencer votre transformation professionnelle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="bg-ocean-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-ocean-700 transition-all duration-300 shadow-large flex items-center transform hover:scale-105">
                <Phone className="mr-2 w-5 h-5" />
                Candidater maintenant
              </button>
              <button className="bg-white text-ocean-600 px-10 py-4 rounded-2xl font-bold hover:bg-ocean-50 transition-all duration-300 shadow-large flex items-center border-2 border-ocean-600 hover:translate-x-1">
                <Mail className="mr-2 w-5 h-5" />
                Télécharger la brochure
              </button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-ocean-500 mt-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-ocean-600 mr-2" />
                <span>Accompagnement personnalisé</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-ocean-600 mr-2" />
                <span>Réseau professionnel</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-ocean-600 mr-2" />
                <span>Suivi post-formation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Raparigas;