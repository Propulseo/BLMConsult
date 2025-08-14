import React, { useState, useMemo } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Linkedin } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import SEOHead from '../components/SEOHead';
import { localBusinessSchema, breadcrumbSchema } from '../data/structuredData';

interface ContactProps {
  setCurrentPage?: (page: string) => void;
}

const Contact: React.FC<ContactProps> = ({ setCurrentPage }) => {
  const { t } = useTranslation();

  // SEO optimized structured data for Contact page
  const structuredData = [
    localBusinessSchema,
    breadcrumbSchema('contact', 'Contact')
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    fonction: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactMethods = useMemo(() => [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: t.contact.contactInfo.email.title,
      content: t.contact.contactInfo.email.content,
      description: t.contact.contactInfo.email.description
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: t.contact.contactInfo.phone.title,
      content: t.contact.contactInfo.phone.content,
      description: t.contact.contactInfo.phone.description
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: t.contact.contactInfo.location.title,
      content: t.contact.contactInfo.location.content,
      description: t.contact.contactInfo.location.description
    }
  ], [t]);

  const services = useMemo(() => [
    "Conseil en conditions de travail",
    "Coaching individuel/collectif",
    "Formation sur-mesure",
    "Médiation et résolution de conflits",
    "Accompagnement RAPARIGAS INTECH",
    "Autre demande"
  ], []);

  const handleNavigation = (page: string) => {
    // Cette fonction sera implémentée quand le composant recevra les props
    console.log('Navigate to:', page);
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Me Contacter | Conseil RH & Coaching - BLM Consult"
        description="Contactez-moi pour vos projets RH : conseil, coaching, formation. Consultante experte, réponse sous 24h, diagnostic gratuit. Accompagnement personnalisé."
        keywords="contact conseil RH, demande devis coaching, consultant formateur coach, accompagnement entreprise, diagnostic RH gratuit, Lylia Mokrani contact"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden pt-16 sm:pt-20 lg:pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Contact professionnel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t.contact.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8">
            {t.contact.subtitle}
          </p>
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            <Clock className="w-4 h-4 mr-2" />
            {t.contact.responseTime}
          </div>
        </div>
      </section>

      {/* Section 1 - Pourquoi BLM Consult */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t.contact.whyBLM.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.contact.whyBLM.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: t.contact.whyBLM.custom.title,
                description: t.contact.whyBLM.custom.description
              },
              {
                title: t.contact.whyBLM.expertise.title,
                description: t.contact.whyBLM.expertise.description
              },
              {
                title: t.contact.whyBLM.human.title,
                description: t.contact.whyBLM.human.description
              },
              {
                title: t.contact.whyBLM.results.title,
                description: t.contact.whyBLM.results.description
              }
            ].map((item, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 sm:p-8 rounded-xl">
                <div className="w-2 h-2 bg-blue-600 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section 2 - Formulaire et Contact */}
      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <div className="flex items-center mb-4 sm:mb-6">
                <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{t.contact.form.title}</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-base min-h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-base min-h-12"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="fonction" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.function}
                  </label>
                  <input
                    type="text"
                    id="fonction"
                    name="fonction"
                    value={formData.fonction}
                    onChange={handleInputChange}
                    placeholder={t.contact.form.functionPlaceholder}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-base min-h-12"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.company}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-base min-h-12"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.subject}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-base min-h-12"
                  >
                    <option value="">{t.contact.form.subjectPlaceholder}</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none text-base"
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center min-h-12"
                >
                  {t.contact.form.submit}
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{t.contact.contactInfo.title}</h3>
              <div className="space-y-6 sm:space-y-8">
                {contactMethods.map((method, index) => (
                  <div key={index} className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{method.title}</h4>
                        <p className="text-gray-900 font-medium text-base sm:text-lg mb-1">{method.content}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{method.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* LinkedIn Profile */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <div className="text-center">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Suivez-moi sur LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/lylia-mokrani-06385439/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg min-h-12"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Lylia Mokrani
                  </a>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">Actualités et conseils RH</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Prêt à commencer */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              {t.contact.nextSteps.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              {t.contact.nextSteps.subtitle}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-base sm:text-lg font-bold mx-auto mb-3 sm:mb-4">1</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{t.contact.nextSteps.step1.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{t.contact.nextSteps.step1.description}</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-base sm:text-lg font-bold mx-auto mb-3 sm:mb-4">2</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{t.contact.nextSteps.step2.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{t.contact.nextSteps.step2.description}</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-base sm:text-lg font-bold mx-auto mb-3 sm:mb-4">3</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{t.contact.nextSteps.step3.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{t.contact.nextSteps.step3.description}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button 
                onClick={() => window.open('https://wa.me/33662437691', '_blank')}
                className="w-full sm:w-auto bg-blue-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300 shadow-lg flex items-center justify-center cursor-pointer min-h-12"
              >
                <Phone className="mr-2 w-5 h-5" />
                {t.contact.nextSteps.callNow}
              </button>
              <button 
                onClick={() => {
                  const formElement = document.querySelector('form');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="w-full sm:w-auto bg-white text-blue-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors duration-300 shadow-lg flex items-center justify-center border-2 border-blue-600 cursor-pointer min-h-12"
              >
                <Mail className="mr-2 w-5 h-5" />
                {t.contact.nextSteps.sendMessage}
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;