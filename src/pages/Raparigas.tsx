import React from 'react';
import { Clock, Heart, MessageCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Raparigas: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-50 via-white to-ocean-100">
      <SEOHead
        title="On s'investit | BLM Consult"
        description="Découvrez bientôt nos engagements et initiatives. Page en cours de développement."
        keywords="engagement social, BLM Consult, initiatives"
      />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-ocean-300/10 to-ocean-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-coral-200/8 to-coral-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative flex items-center justify-center min-h-screen px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          {/* Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-ocean-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg mb-6">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Main message */}
          <h1 className="text-5xl md:text-6xl font-bold text-ocean-800 mb-8 tracking-tight">
            On vous dit tout
            <span className="block text-coral-600">très vite</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-ocean-600 leading-relaxed mb-12 font-light">
            Cette section est en cours de préparation. 
            Nous travaillons sur quelque chose de spécial pour vous !
          </p>

          {/* Coming soon indicator */}
          <div className="inline-flex items-center bg-gradient-to-r from-ocean-100 to-ocean-50 text-ocean-800 px-6 py-3 rounded-full text-sm font-semibold shadow-soft border border-ocean-200/50 mb-12">
            <Clock className="w-4 h-4 mr-2" />
            Bientôt disponible
          </div>

          {/* Contact CTA */}
          <div className="space-y-4">
            <p className="text-ocean-600 mb-6">
              En attendant, n'hésitez pas à nous contacter pour en savoir plus
            </p>
            <button className="bg-ocean-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-ocean-700 transition-all duration-300 shadow-medium hover:shadow-large transform hover:scale-105 flex items-center justify-center mx-auto">
              <MessageCircle className="mr-2 w-5 h-5" />
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Raparigas;