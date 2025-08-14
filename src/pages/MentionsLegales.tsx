import React from 'react';
import { Building, Mail, Phone, MapPin, Scale, Globe } from 'lucide-react';

const MentionsLegales: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-16">
          <div className="text-center">
            <Scale className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-blue-600 mx-auto mb-4 sm:mb-6" />
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Mentions Légales
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Informations légales concernant BLM Consult
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
            
            {/* Éditeur du site */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <Building className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 sm:mr-3" />
                Éditeur du site
              </h2>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base"><strong>Raison sociale :</strong> BLM Consult</p>
                <p className="text-sm sm:text-base"><strong>Forme juridique :</strong> Entreprise individuelle</p>
                <p className="text-sm sm:text-base"><strong>Dirigeant :</strong> Lylia Mokrani</p>
                <p className="text-sm sm:text-base"><strong>SIRET :</strong> [À compléter]</p>
                <p className="text-sm sm:text-base"><strong>Code APE :</strong> 7022Z - Conseil pour les affaires et autres conseils de gestion</p>
                <p className="text-sm sm:text-base"><strong>TVA :</strong> Non applicable (micro-entreprise)</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 sm:mr-3" />
                Coordonnées
              </h2>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg space-y-2 sm:space-y-3">
                <p className="flex items-center text-sm sm:text-base">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                  <strong>Adresse :</strong> France (interventions nationales)
                </p>
                <p className="flex items-center text-sm sm:text-base">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                  <strong>Email :</strong> contact@blmconsult.fr
                </p>
                <p className="flex items-center text-sm sm:text-base">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                  <strong>Téléphone :</strong> Sur demande
                </p>
                <p className="flex items-center text-sm sm:text-base">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                  <strong>Site web :</strong> www.blmconsult.fr
                </p>
              </div>
            </div>

            {/* Hébergement */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Hébergement
              </h2>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg space-y-2">
                <p className="text-sm sm:text-base"><strong>Hébergeur :</strong> Netlify, Inc.</p>
                <p className="text-sm sm:text-base"><strong>Adresse :</strong> 2325 3rd Street, Suite 296, San Francisco, CA 94107, USA</p>
                <p className="text-sm sm:text-base"><strong>Site web :</strong> www.netlify.com</p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Propriété Intellectuelle
              </h2>
              <div className="prose prose-gray max-w-none text-sm sm:text-base">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale 
                  sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
                  reproduction sont réservés, y compris pour les documents téléchargeables 
                  et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique 
                  quel qu'il soit est formellement interdite sauf autorisation expresse 
                  de BLM Consult.
                </p>
                <p>
                  Les marques et logos présents sur le site sont déposés par BLM Consult 
                  ou éventuellement par des tiers ayant autorisé BLM Consult à les utiliser.
                </p>
              </div>
            </div>

            {/* Responsabilité */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Limitation de Responsabilité
              </h2>
              <div className="prose prose-gray max-w-none text-sm sm:text-base">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible 
                  et le site est remis à jour à différentes périodes de l'année, mais peut 
                  toutefois contenir des inexactitudes ou des omissions.
                </p>
                <p>
                  Si vous constatez une lacune, erreur ou ce qui parait être un 
                  dysfonctionnement, merci de bien vouloir le signaler par email, 
                  à l'adresse contact@blmconsult.fr, en décrivant le problème de 
                  la façon la plus précise possible.
                </p>
                <p>
                  BLM Consult ne pourra être tenue responsable des dommages directs 
                  et indirects causés au matériel de l'utilisateur, lors de l'accès 
                  au site www.blmconsult.fr.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Droit Applicable
              </h2>
              <div className="prose prose-gray max-w-none text-sm sm:text-base">
                <p>
                  Tout litige en relation avec l'utilisation du site 
                  <strong> www.blmconsult.fr</strong> est soumis au droit français. 
                  Il est fait attribution exclusive de juridiction aux tribunaux 
                  compétents de France.
                </p>
              </div>
            </div>

            {/* Date de mise à jour */}
            <div className="border-t pt-4 sm:pt-6">
              <p className="text-xs sm:text-sm text-gray-500 text-center">
                <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegales;
  )
}