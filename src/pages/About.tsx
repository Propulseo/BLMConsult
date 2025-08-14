import React from 'react';
import { GraduationCap, Briefcase, Users, Award, Target, Heart, Shield, Zap, CheckCircle, Star, Clock, Lock, FileText, UserCheck, Eye, MessageCircle, Linkedin } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import SEOHead from '../components/SEOHead';

const About: React.FC = () => {
  const { t } = useTranslation();

  // SEO optimized structured data for About page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lylia Mokrani",
    "jobTitle": t.about.hero.badge,
    "description": t.about.content,
    "worksFor": {
      "@type": "Organization",
      "name": "BLM Consult",
      "description": "Cabinet conseil RH spécialisé en accompagnement entreprise"
    },
    "hasCredential": [
      t.about.certifications.rps.title,
      t.about.certifications.formateur.title,
      t.about.certifications.coach.title,
      "Médiateur du travail diplômée"
    ],
    "memberOf": [
      "ANM (Association Nationale des Médiateurs)",
      "SYME (Syndicat professionnel des médiateurs)",
      "PREMiS (Association autour des pratiques de médiation en santé)"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "France"
    }
  };

  const certifications = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: t.about.certifications.rps.title,
      description: t.about.certifications.rps.description
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: t.about.certifications.formateur.title,
      description: t.about.certifications.formateur.description
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: t.about.certifications.coach.title,
      description: t.about.certifications.coach.description
    }
  ];

  const memberships = [
    "ANM (Association Nationale des Médiateurs)",
    "SYME (Syndicat professionnel des médiateurs)",
    "PREMiS (Association autour des pratiques de médiation en santé)"
  ];

  const interventions = [
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: t.about.interventions.accompagnement.title,
      description: t.about.interventions.accompagnement.description
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: t.about.interventions.rps.title,
      description: t.about.interventions.rps.description
    },
    {
      icon: <Heart className="w-6 h-6 text-blue-600" />,
      title: t.about.interventions.qvct.title,
      description: t.about.interventions.qvct.description
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: t.about.interventions.mediation.title,
      description: t.about.interventions.mediation.description
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      title: t.about.interventions.formation.title,
      description: t.about.interventions.formation.description
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-600" />,
      title: t.about.interventions.cnv.title,
      description: t.about.interventions.cnv.description
    }
  ];

  const valeurs = [
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: t.about.values.respect.title,
      items: t.about.values.respect.items
    },
    {
      icon: <UserCheck className="w-8 h-8 text-blue-600" />,
      title: t.about.values.responsabilite.title,
      items: t.about.values.responsabilite.items
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: t.about.values.exigence.title,
      items: t.about.values.exigence.items
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: t.about.values.plaisir.title,
      items: t.about.values.plaisir.items
    }
  ];

  const engagements = [
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: t.about.commitments.confidentialite.title,
      items: t.about.commitments.confidentialite.items
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: t.about.commitments.procedures.title,
      items: t.about.commitments.procedures.items
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="À Propos | Lylia Mokrani - Consultante RH Experte | BLM Consult"
        description="Découvrez mon expertise : 15+ ans en conseil RH, coaching et formation. Consultante certifiée spécialisée RPS, accompagnement personnalisé des entreprises."
        keywords="Lylia Mokrani, consultante RH experte, coach professionnelle, formation coaching, conseil ressources humaines, expertise RPS, accompagnement entreprise"
        structuredData={structuredData}
      />
      
      {/* Hero Section - Design asymétrique */}
      <section className="relative overflow-hidden">
        {/* Background géométrique */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-blue-100/30 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-12 gap-8 items-center min-h-[80vh]">
            {/* Contenu principal - 7 colonnes */}
            <div className="col-span-12 lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {t.about.hero.badge}
                  </span>
                </div>
                
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  <span className="text-gray-900">{t.about.hero.title}</span>
                  <br />
                  <span className="text-blue-600">{t.about.hero.subtitle}</span>
                </h1>
                
                <p className="text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  {t.about.hero.description}
                </p>
              </div>
              
              {/* Stats en ligne */}
              <div className="flex items-center space-x-12 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600 font-medium">{t.about.hero.stats.experience}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600 font-medium">{t.about.hero.stats.sessions}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">95,6%</div>
                  <div className="text-sm text-gray-600 font-medium">{t.about.hero.stats.satisfaction}</div>
                </div>
              </div>
            </div>
            
            {/* Image - 5 colonnes */}
            <div className="col-span-12 lg:col-span-5 relative">
              <div className="relative">
                {/* Image principale */}
                <div className="relative z-10">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Lylia Mokrani - BLM Consult" 
                    className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
                  />
                </div>
                
                {/* Éléments décoratifs */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600 rounded-2xl opacity-20 z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400 rounded-full opacity-15 z-0"></div>
                
                {/* Badge flottant */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 z-20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{t.about.hero.profile.name}</p>
                      <p className="text-sm text-gray-600">{t.about.hero.profile.role}</p>
                      <a 
                        href="https://www.linkedin.com/in/lylia-mokrani-06385439/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium mt-2 transition-colors duration-300"
                      >
                        <Linkedin className="w-4 h-4 mr-1" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Profil - Layout en zigzag */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold">
                {t.about.profile.badge}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.about.profile.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.about.profile.subtitle}
            </p>
          </div>
          
          {/* Certifications en grille simple */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-xl mb-6 mx-auto">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {cert.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {t.about.profile.certified}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Memberships - Layout horizontal différent */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-1/3">
                <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Award className="w-4 h-4 mr-2" />
                  {t.about.memberships.recognition}
                </div>
                <h3 className="text-3xl font-bold mb-4">{t.about.memberships.title}</h3>
                <p className="text-blue-100 leading-relaxed">
                  {t.about.memberships.subtitle}
                </p>
              </div>
              
              <div className="lg:w-2/3">
                <div className="space-y-4">
                  {memberships.map((membership, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white text-base">{membership}</p>
                        </div>
                        <div className="inline-flex items-center bg-green-400/20 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          {t.about.memberships.active}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-200" />
                      <span className="font-semibold text-blue-100">{t.about.memberships.supervision}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines d'intervention - Layout en grille décalée */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {t.about.interventions.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.about.interventions.subtitle}
            </p>
          </div>
          
          {/* Grille simple et claire */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interventions.map((intervention, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    {intervention.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{intervention.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{intervention.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs - Design en timeline */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {t.about.values.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.about.values.subtitle}
            </p>
          </div>
          
          {/* Timeline verticale */}
          <div className="relative">
            {/* Ligne centrale */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden lg:block"></div>
            
            <div className="space-y-16">
              {valeurs.map((valeur, index) => (
                <div key={index} className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Point sur la timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full z-10 hidden lg:block"></div>
                  
                  {/* Contenu */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2 lg:text-right' : ''}`}>
                    <div className={`bg-white p-8 rounded-2xl shadow-lg ${index % 2 === 1 ? 'lg:ml-8' : 'lg:mr-8'}`}>
                      <div className={`flex items-center mb-6 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                        <div className={`w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                          {valeur.icon}
                        </div>
                        <h3 className={`text-2xl font-bold text-gray-900 ${index % 2 === 1 ? 'mr-4 lg:order-1' : 'ml-4'}`}>
                          {valeur.title}
                        </h3>
                      </div>
                      <div className="space-y-3">
                        {valeur.items.map((item, itemIndex) => (
                          <div key={itemIndex} className={`flex items-start ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                            <div className={`flex items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mx-3 flex-shrink-0"></div>
                              <span className={`text-gray-700 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>{item}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Espace visuel */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl opacity-50"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagements - Design en split screen */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {t.about.commitments.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.about.commitments.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            {engagements.map((engagement, index) => (
              <div key={index} className={`p-12 ${index === 0 ? 'bg-blue-600 text-white' : 'bg-gray-900 text-white'}`}>
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      index === 0 ? 'bg-white/20' : 'bg-blue-600'
                    }`}>
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold">{engagement.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {engagement.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <CheckCircle className={`w-5 h-5 mt-1 flex-shrink-0 ${
                          index === 0 ? 'text-blue-200' : 'text-blue-400'
                        }`} />
                        <span className="text-lg leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section - Design immersif */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-12">
            {t.about.philosophy.title}
          </h2>
          
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
            <blockquote className="text-lg md:text-xl leading-relaxed mb-8 italic text-gray-700">
              "{t.about.philosophy.quote}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-blue-600 font-bold text-2xl">L</span>
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-gray-900">{t.about.philosophy.author}</div>
                <div className="text-gray-600">{t.about.philosophy.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travailler avec BLM Consult - Design en cartes flottantes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {t.about.advantages.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.about.advantages.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-white" />,
                title: t.about.advantages.experience.title,
                description: t.about.advantages.experience.description,
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Heart className="w-8 h-8 text-white" />,
                title: t.about.advantages.ecoute.title,
                description: t.about.advantages.ecoute.description,
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <Target className="w-8 h-8 text-white" />,
                title: t.about.advantages.outils.title,
                description: t.about.advantages.outils.description,
                color: "from-green-500 to-green-600"
              },
              {
                icon: <Users className="w-8 h-8 text-white" />,
                title: t.about.advantages.professionnels.title,
                description: t.about.advantages.professionnels.description,
                color: "from-orange-500 to-orange-600"
              }
            ].map((advantage, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;