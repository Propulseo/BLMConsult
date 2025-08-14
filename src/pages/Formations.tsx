import React, { useMemo } from 'react';
import { GraduationCap, Target, Users, Shield, CheckCircle, Star, Clock, Mail, BookOpen, Award, Zap, Heart, MessageCircle } from 'lucide-react';
import { useLanguageContext } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const Formations: React.FC = () => {
  const { t } = useLanguageContext();

  // SEO optimized structured data for Formations page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Formations BLM Consult",
    "description": "Formations professionnelles sur mesure par Lylia Mokrani : efficacité professionnelle, santé au travail, prévention RPS. Pédagogie active et accompagnement personnalisé.",
    "founder": {
      "@type": "Person",
      "name": "Lylia Mokrani",
      "jobTitle": "Formatrice certifiée INRS/CRAMIF"
    },
    "courseMode": "Blended",
    "educationalCredentialAwarded": "Certificat de formation",
    "teaches": [
      "Prévention des risques psychosociaux",
      "Gestion du stress au travail",
      "Prévention du harcèlement",
      "Management et communication"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "France"
    }
  };

  const approchePedagogique = useMemo(() => [
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: t.formations.approche.intra.title,
      description: t.formations.approche.intra.description
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: t.formations.approche.accessibilite.title,
      description: t.formations.approche.accessibilite.description
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: t.formations.approche.pedagogie.title,
      description: t.formations.approche.pedagogie.description
    },
    {
      icon: <Heart className="w-6 h-6 text-blue-600" />,
      title: t.formations.approche.partage.title,
      description: t.formations.approche.partage.description
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: t.formations.approche.ingenierie.title,
      description: t.formations.approche.ingenierie.description
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: t.formations.approche.accompagnement.title,
      description: t.formations.approche.accompagnement.description
    }
  ], [t]);

  const formationsEfficacite = useMemo(() => [
    {
      id: 'prevention-conflits',
      title: t.formations.axes.efficacite.prevention.title,
      description: t.formations.axes.efficacite.prevention.description,
      duration: t.formations.axes.efficacite.prevention.duration,
      participants: t.formations.axes.efficacite.prevention.participants,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 'gestion-stress',
      title: t.formations.axes.efficacite.stress.title,
      description: t.formations.axes.efficacite.stress.description,
      duration: t.formations.axes.efficacite.stress.duration,
      participants: t.formations.axes.efficacite.stress.participants,
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ], [t]);

  const formationsSante = useMemo(() => [
    {
      id: 'prevention-harcelement',
      title: t.formations.axes.sante.harcelement.title,
      description: t.formations.axes.sante.harcelement.description,
      duration: t.formations.axes.sante.harcelement.duration,
      participants: t.formations.axes.sante.harcelement.participants,
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 'sexisme-harcelement',
      title: t.formations.axes.sante.sexisme.title,
      description: t.formations.axes.sante.sexisme.description,
      duration: t.formations.axes.sante.sexisme.duration,
      participants: t.formations.axes.sante.sexisme.participants,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 'prevention-rps',
      title: t.formations.axes.sante.rps.title,
      description: t.formations.axes.sante.rps.description,
      duration: t.formations.axes.sante.rps.duration,
      participants: t.formations.axes.sante.rps.participants,
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ], [t]);

  const engagements = useMemo(() => [
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: t.formations.engagements.humaine.title,
      description: t.formations.engagements.humaine.description
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: t.formations.engagements.confidentialite.title,
      description: t.formations.engagements.confidentialite.description
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: t.formations.engagements.adaptabilite.title,
      description: t.formations.engagements.adaptabilite.description
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: t.formations.engagements.suivi.title,
      description: t.formations.engagements.suivi.description
    }
  ], [t]);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Formations RH sur Mesure | Prévention RPS & Management - BLM Consult"
        description="Formatrice certifiée INRS : formations RPS, prévention harcèlement, management. Je conçois vos programmes sur-mesure avec pédagogie active et suivi personnalisé."
        keywords="formation RH, formation RPS, prévention harcèlement, formation management, formation stress travail, formatrice certifiée, formation sur mesure entreprise"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <GraduationCap className="w-4 h-4 mr-2" />
                {t.formations.hero.badge}
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                {t.formations.hero.title} <span className="text-blue-600">{t.formations.hero.subtitle}</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {t.formations.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg flex items-center justify-center">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  {t.formations.hero.programButton}
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300">
                  {t.formations.hero.catalogButton}
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Formation professionnelle" 
                className="rounded-2xl shadow-2xl"
              />
              
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.formations.hero.satisfaction}</p>
                    <p className="text-sm text-gray-600">{t.formations.hero.satisfactionText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approche Pédagogique */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.formations.approche.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.formations.approche.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approchePedagogique.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Axes de Formation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.formations.axes.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.formations.axes.subtitle}
            </p>
          </div>

          {/* Efficacité Professionnelle */}
          <div className="mb-14">
            <div className="flex items-center mb-12">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mr-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{t.formations.axes.efficacite.title}</h3>
                <p className="text-lg text-gray-600 mt-2">
                  {t.formations.axes.efficacite.description}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {formationsEfficacite.map((formation, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={formation.image} 
                      alt={formation.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">{formation.title}</h4>
                    <p className="text-gray-600 mb-6">{formation.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{formation.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{formation.participants}</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <a
                        href={`/formations/${formation.id}.pdf`}
                        download
                        className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 text-sm"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {t.formations.common.download}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Santé au Travail */}
          <div>
            <div className="flex items-center mb-12">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{t.formations.axes.sante.title}</h3>
                <p className="text-lg text-gray-600 mt-2">
                  {t.formations.axes.sante.description}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {formationsSante.map((formation, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={formation.image} 
                      alt={formation.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{formation.title}</h4>
                    <p className="text-gray-600 mb-4 text-sm">{formation.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{formation.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{formation.participants}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a
                        href={`/formations/${formation.id}.pdf`}
                        download
                        className="inline-flex items-center bg-blue-600 text-white px-3 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 text-xs"
                      >
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {t.formations.common.fichePDF}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.formations.engagements.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.formations.engagements.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {engagements.map((engagement, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mr-4 shadow-md">
                    {engagement.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{engagement.title}</h3>
                </div>
                <p className="text-gray-700 text-lg">{engagement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Formations;