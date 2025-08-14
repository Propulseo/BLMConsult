import React from 'react';
import { Shield, Eye, Lock, Database, Cookie, UserCheck } from 'lucide-react';

const PolitiqueConfidentialite: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-lg text-gray-600">
              Protection et traitement de vos données personnelles
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="w-6 h-6 text-blue-600 mr-3" />
                Introduction
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  BLM Consult s'engage à protéger la confidentialité de vos données personnelles. 
                  Cette politique explique comment nous collectons, utilisons et protégeons 
                  vos informations personnelles conformément au Règlement Général sur la 
                  Protection des Données (RGPD).
                </p>
              </div>
            </div>

            {/* Responsable du traitement */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <UserCheck className="w-6 h-6 text-blue-600 mr-3" />
                Responsable du traitement
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Responsable :</strong> Lylia Mokrani - BLM Consult</p>
                <p><strong>Email :</strong> contact@blmconsult.fr</p>
                <p><strong>Adresse :</strong> France</p>
              </div>
            </div>

            {/* Données collectées */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Database className="w-6 h-6 text-blue-600 mr-3" />
                Données collectées
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Données d'identification :</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Nom de l'entreprise</li>
                    <li>Fonction/poste occupé</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Données de navigation :</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Pages visitées</li>
                    <li>Durée de visite</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Finalités du traitement */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Finalités du traitement
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>Vos données personnelles sont collectées et traitées pour :</p>
                <ul>
                  <li><strong>Répondre à vos demandes</strong> de contact et devis</li>
                  <li><strong>Fournir nos services</strong> de conseil, coaching et formation</li>
                  <li><strong>Gérer la relation client</strong> et le suivi des prestations</li>
                  <li><strong>Améliorer notre site web</strong> et nos services</li>
                  <li><strong>Respecter nos obligations légales</strong> et réglementaires</li>
                </ul>
              </div>
            </div>

            {/* Base légale */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Base légale du traitement
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>Le traitement de vos données personnelles est fondé sur :</p>
                <ul>
                  <li><strong>Votre consentement</strong> pour les demandes de contact</li>
                  <li><strong>L'exécution du contrat</strong> pour la fourniture de nos services</li>
                  <li><strong>L'intérêt légitime</strong> pour l'amélioration de nos services</li>
                  <li><strong>Les obligations légales</strong> (comptabilité, fiscalité)</li>
                </ul>
              </div>
            </div>

            {/* Conservation des données */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="w-6 h-6 text-blue-600 mr-3" />
                Conservation des données
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Prospects :</strong> 3 ans à compter du dernier contact</li>
                  <li><strong>Clients :</strong> 10 ans à compter de la fin de la relation contractuelle</li>
                  <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                  <li><strong>Obligations légales :</strong> Selon les durées légales applicables</li>
                </ul>
              </div>
            </div>

            {/* Vos droits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Vos droits
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul>
                  <li><strong>Droit d'accès :</strong> Connaître les données que nous détenons sur vous</li>
                  <li><strong>Droit de rectification :</strong> Corriger vos données inexactes</li>
                  <li><strong>Droit à l'effacement :</strong> Supprimer vos données sous certaines conditions</li>
                  <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                </ul>
                <p>
                  Pour exercer ces droits, contactez-nous à : <strong>contact@blmconsult.fr</strong>
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Cookie className="w-6 h-6 text-blue-600 mr-3" />
                Cookies
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  Notre site utilise des cookies techniques nécessaires au bon fonctionnement 
                  du site. Aucun cookie de tracking ou publicitaire n'est utilisé sans votre 
                  consentement explicite.
                </p>
                <p>
                  Vous pouvez configurer votre navigateur pour refuser les cookies, 
                  mais cela peut affecter le fonctionnement du site.
                </p>
              </div>
            </div>

            {/* Sécurité */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sécurité des données
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles 
                  appropriées pour protéger vos données personnelles contre :
                </p>
                <ul>
                  <li>L'accès non autorisé</li>
                  <li>La divulgation</li>
                  <li>La modification</li>
                  <li>La destruction</li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact et réclamations
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  Pour toute question concernant cette politique de confidentialité 
                  ou pour exercer vos droits, contactez-nous :
                </p>
                <p><strong>Email :</strong> contact@blmconsult.fr</p>
                <p>
                  Vous avez également le droit d'introduire une réclamation auprès 
                  de la CNIL (Commission Nationale de l'Informatique et des Libertés) 
                  si vous estimez que le traitement de vos données personnelles 
                  constitue une violation du RGPD.
                </p>
              </div>
            </div>

            {/* Date de mise à jour */}
            <div className="border-t pt-6">
              <p className="text-sm text-gray-500 text-center">
                <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PolitiqueConfidentialite;