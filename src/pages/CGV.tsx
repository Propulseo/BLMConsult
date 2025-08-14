import React from 'react';
import { FileText, DollarSign, Calendar, CheckCircle, Scale } from 'lucide-react';

const CGV: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-16">
          <div className="text-center">
            <FileText className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-blue-600 mx-auto mb-4 sm:mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Conditions Générales de Vente
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Conditions applicables aux prestations BLM Consult
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
            
            {/* Préambule */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Préambule
              </h2>
              <div className="prose prose-gray max-w-none text-sm sm:text-base">
                <p>
                  Les présentes Conditions Générales de Vente (CGV) régissent les relations 
                  contractuelles entre BLM Consult, représentée par Lylia Mokrani, et ses clients 
                  pour toutes les prestations de conseil, coaching, formation et médiation.
                </p>
                <p>
                  Toute commande implique l'acceptation sans réserve des présentes CGV.
                </p>
              </div>
            </div>

            {/* Prestations */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 sm:mr-3" />
                Prestations proposées
              </h2>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <li><strong>Conseil RH :</strong> Diagnostic, accompagnement du changement, gestion de crise, QVCT</li>
                  <li><strong>Coaching professionnel :</strong> Individuel et collectif, développement du leadership</li>
                  <li><strong>Formations sur-mesure :</strong> Efficacité professionnelle, santé au travail</li>
                  <li><strong>Médiation professionnelle :</strong> Résolution de conflits, amélioration du dialogue social</li>
                </ul>
              </div>
            </div>

            {/* Devis et commandes */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Devis et commandes
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  Toute prestation fait l'objet d'un devis personnalisé établi après 
                  un diagnostic initial gratuit. Le devis est valable 30 jours à compter 
                  de sa date d'émission.
                </p>
                <p>
                  La commande est ferme et définitive dès acceptation écrite du devis 
                  par le client (signature, email de confirmation).
                </p>
              </div>
            </div>

            {/* Tarifs et facturation */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 sm:mr-3" />
                Tarifs et facturation
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Tarification :</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
                    <li>Les tarifs sont exprimés en euros HT</li>
                    <li>TVA non applicable (micro-entreprise)</li>
                    <li>Frais de déplacement facturés selon barème kilométrique</li>
                    <li>Hébergement et restauration à la charge du client si nécessaire</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Exécution des prestations */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 sm:mr-3" />
                Exécution des prestations
              </h2>
              <div className="prose prose-gray max-w-none text-sm sm:text-base">
                <p>
                  <strong>Délais :</strong> Les délais d'exécution sont indicatifs et 
                  convenus lors de la signature du devis. Ils courent à compter de 
                  la réception de l'acompte et des éléments nécessaires à la réalisation.
                </p>
                <p>
                  <strong>Obligations du client :</strong>
                </p>
                <ul>
                  <li>Fournir les informations et documents nécessaires</li>
                  <li>Désigner un interlocuteur privilégié</li>
                  <li>Mettre à disposition les moyens convenus (salle, matériel, etc.)</li>
                  <li>Faciliter l'accès aux personnes concernées</li>
                </ul>
              </div>
            </div>

            {/* Confidentialité */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Confidentialité
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  BLM Consult s'engage à respecter la plus stricte confidentialité 
                  concernant toutes les informations communiquées par le client 
                  dans le cadre de la mission.
                </p>
                <p>
                  Cette obligation de confidentialité s'étend à tous les collaborateurs 
                  et sous-traitants éventuels et perdure au-delà de la fin de la mission.
                </p>
              </div>
            </div>

            {/* Responsabilité */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Limitation de responsabilité
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  La responsabilité de BLM Consult est limitée aux dommages directs 
                  et ne peut excéder le montant des honoraires perçus pour la mission concernée.
                </p>
                <p>
                  BLM Consult ne saurait être tenue responsable des dommages indirects 
                  tels que perte d'exploitation, perte de clientèle, perte de profit.
                </p>
                <p>
                  <strong>Assurance :</strong> BLM Consult est couverte par une assurance 
                  responsabilité civile professionnelle.
                </p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Propriété intellectuelle
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  Les méthodes, outils et supports pédagogiques utilisés par BLM Consult 
                  restent sa propriété exclusive. Le client s'interdit de les reproduire, 
                  les diffuser ou les utiliser à d'autres fins que celles prévues au contrat.
                </p>
                <p>
                  Les livrables spécifiquement créés pour le client lui appartiennent, 
                  sous réserve du paiement intégral des honoraires.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 sm:mr-3" />
                Droit applicable et litiges
              </h2>
              <div className="prose prose-gray max-w-none text-sm sm:text-base">
                <p>
                  Les présentes CGV sont soumises au droit français. En cas de litige, 
                  les parties s'efforceront de trouver une solution amiable.
                </p>
                <p>
                  À défaut, les tribunaux français seront seuls compétents, 
                  nonobstant pluralité de défendeurs ou appel en garantie.
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

export default CGV;