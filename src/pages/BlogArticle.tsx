import React from 'react';
import { ArrowLeft, Tag, Share2, Phone, Mail, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

interface BlogArticleProps {
  setCurrentPage: (page: string) => void;
  articleId: string;
}

const BlogArticle: React.FC<BlogArticleProps> = ({ setCurrentPage, articleId }) => {
  // Article data
  const getArticleData = () => {
    switch (articleId) {
      case 'conduite-changement':
        return {
          title: "Conduite du changement : les erreurs à éviter pour réussir vos transformations internes",
          subtitle: "Découvrez les pièges les plus fréquents en phase de transition et les conseils pour fédérer vos équipes autour du changement organisationnel.",
          date: "20 Mars 2024",
          readTime: "8 min",
          category: "Conduite du changement",
          author: "Lylia Mokrani",
          tags: ["Changement", "Management", "Transformation"],
          content: `
            <div class="space-y-8">
              <p class="text-xl leading-relaxed text-gray-700 mb-8">
                Le changement organisationnel est devenu une constante dans le monde de l'entreprise. 
                Pourtant, selon les études, 70% des projets de transformation échouent. 
                Pourquoi un tel taux d'échec ? Souvent, ce ne sont pas les aspects techniques qui posent problème, 
                mais bien la dimension humaine du changement.
              </p>
              <p class="text-lg text-gray-600 mb-12">
                Chez BLM Consult, nous accompagnons depuis plus de 15 ans les organisations dans leurs transformations. 
                Voici les erreurs les plus fréquentes que nous observons et nos conseils pour les éviter.
              </p>

              <h2 class="text-2xl font-bold text-gray-900 mb-6">
                Erreur n°1 : Négliger la préparation et la communication
              </h2>
              
              <div class="mb-6">
                <h3 class="text-lg font-semibold text-red-600 mb-3">Ce qu'il ne faut pas faire :</h3>
                <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Annoncer le changement du jour au lendemain</li>
                  <li>Communiquer uniquement sur les aspects techniques</li>
                  <li>Ignorer les préoccupations des équipes</li>
                </ul>
                
                <h3 class="text-lg font-semibold text-green-600 mb-3">Les bonnes pratiques :</h3>
                <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Préparer une stratégie de communication progressive</li>
                  <li>Expliquer le "pourquoi" avant le "comment"</li>
                  <li>Créer des espaces d'échange et d'écoute</li>
                </ul>
              </div>

              <h2 class="text-2xl font-bold text-gray-900 mb-6">
                Erreur n°2 : Sous-estimer la résistance au changement
              </h2>
              
              <p class="text-gray-700 mb-6">
                La résistance au changement est naturelle et prévisible. Elle n'est pas forcément 
                un signe de mauvaise volonté, mais plutôt l'expression de peurs légitimes : 
                peur de l'inconnu, de perdre ses repères, ses compétences ou son statut.
              </p>
              
              <div class="mb-8">
                <h3 class="text-lg font-semibold text-red-600 mb-3">Erreurs courantes :</h3>
                <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Considérer la résistance comme de la mauvaise volonté</li>
                  <li>Imposer le changement sans concertation</li>
                  <li>Ne pas identifier les leaders d'opinion</li>
                </ul>
                
                <h3 class="text-lg font-semibold text-green-600 mb-3">Approche recommandée :</h3>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                  <li>Écouter et comprendre les sources de résistance</li>
                  <li>Impliquer les équipes dans la co-construction</li>
                  <li>S'appuyer sur les ambassadeurs du changement</li>
                </ul>
              </div>

              <h2 class="text-2xl font-bold text-gray-900 mb-6">
                Erreur n°3 : Négliger l'accompagnement et la formation
              </h2>
              
              <p class="text-gray-700 mb-6">
                Un changement réussi nécessite souvent l'acquisition de nouvelles compétences 
                ou l'adaptation des pratiques existantes. Sans accompagnement adéquat, 
                même les collaborateurs les plus motivés peuvent se retrouver en difficulté.
              </p>
              
              <h3 class="text-lg font-semibold text-gray-800 mb-3">Points d'attention :</h3>
              <ul class="list-disc list-inside space-y-2 text-gray-700 mb-8">
                <li>Identifier les besoins de formation spécifiques à chaque groupe</li>
                <li>Prévoir un accompagnement progressif et personnalisé</li>
                <li>Mettre en place un système de support et de feedback</li>
              </ul>

              <h2 class="text-2xl font-bold text-gray-900 mb-6">
                Erreur n°4 : Manquer de suivi et d'évaluation
              </h2>
              
              <p class="text-gray-700 mb-6">
                Beaucoup d'organisations se concentrent sur le lancement du changement 
                mais négligent le suivi. Or, c'est souvent dans la durée que se joue 
                le succès ou l'échec d'une transformation.
              </p>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                  <div>
                    <h3 class="font-semibold text-gray-900">Définir des indicateurs</h3>
                    <p class="text-gray-600">Mesurer l'avancement et l'impact du changement</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                  <div>
                    <h3 class="font-semibold text-gray-900">Organiser des points réguliers</h3>
                    <p class="text-gray-600">Faire le bilan et ajuster si nécessaire</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                  <div>
                    <h3 class="font-semibold text-gray-900">Célébrer les réussites</h3>
                    <p class="text-gray-600">Reconnaître les efforts et maintenir la motivation</p>
                  </div>
                </div>
              </div>

              <div class="bg-gray-50 p-6 rounded-lg">
                <h2 class="text-xl font-bold text-gray-900 mb-4">
                  L'accompagnement BLM Consult pour réussir vos transformations
                </h2>
                <p class="text-gray-700 mb-6">
                  Chez BLM Consult, nous savons que chaque organisation est unique. 
                  C'est pourquoi nous proposons un accompagnement sur-mesure qui prend en compte 
                  votre culture, vos enjeux et vos contraintes spécifiques.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-3">Notre approche :</h3>
                    <ul class="list-disc list-inside space-y-1 text-gray-700">
                      <li>Diagnostic approfondi de votre situation</li>
                      <li>Co-construction de la stratégie de changement</li>
                      <li>Accompagnement tout au long du processus</li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-3">Nos outils :</h3>
                    <ul class="list-disc list-inside space-y-1 text-gray-700">
                      <li>Formations et ateliers participatifs</li>
                      <li>Coaching individuel et collectif</li>
                      <li>Outils de communication et de suivi</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 class="text-3xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">Pourquoi la conduite du changement est essentielle pour les organisations modernes</h2>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                La conduite du changement est devenue une compétence indispensable dans un monde en constante évolution. Entre transformations numériques, mutations économiques, nouvelles attentes sociétales ou encore évolutions réglementaires, les entreprises et les individus doivent sans cesse s'adapter. Mais changer ne se décrète pas : cela s'accompagne, se construit, et surtout, se comprend.
              </p>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Chez BLM Consult, nous sommes convaincus qu'un changement bien conduit est une source d'opportunités durables, aussi bien pour les organisations que pour les personnes qui les composent. Cet article vous propose une plongée complète dans le sujet de la conduite du changement, à travers notre expérience de terrain, notre méthode centrée sur l'humain, et notre expertise à 360°.
              </p>

              <h2 class="text-3xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">Comprendre la conduite du changement : définition et enjeux</h2>
              
              <h3 class="text-2xl font-bold text-gray-800">Qu'est-ce que la conduite du changement ?</h3>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                La conduite du changement désigne l'ensemble des méthodes, outils et postures mis en œuvre pour accompagner une transformation au sein d'une organisation. Il peut s'agir de changements technologiques (nouvel outil informatique), structurels (fusion, nouvelle organisation) ou culturels (nouveaux modes de management, évolution des valeurs).
              </p>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Ce processus ne se limite pas à la simple mise en œuvre d'une décision stratégique. Il intègre la dimension humaine du changement : la façon dont les individus comprennent, acceptent, et s'engagent dans la nouvelle direction proposée.
              </p>

              <h3 class="text-2xl font-bold text-gray-800">Les enjeux humains, organisationnels et économiques</h3>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Derrière chaque transformation, il y a des femmes et des hommes. La réussite d'un projet dépend de leur implication, de leur motivation et de leur capacité à évoluer dans un environnement incertain. Ignorer ces dimensions peut conduire à des blocages, voire à l'échec de la transformation.
              </p>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Sur le plan organisationnel, un changement réussi permet d'aligner la structure de l'entreprise avec ses objectifs stratégiques. Et sur le plan économique, il peut générer des gains de performance, d'innovation et d'agilité.
              </p>

              <h2 class="text-3xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">Pourquoi les entreprises résistent-elles au changement ?</h2>
              
              <h3 class="text-2xl font-bold text-gray-800">Les peurs individuelles face à l'inconnu</h3>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Changer, c'est souvent sortir de sa zone de confort. Cela peut susciter des craintes légitimes : peur de ne pas être à la hauteur, de perdre son poste, ou encore de voir ses habitudes bouleversées. Ces résistances individuelles doivent être écoutées, comprises et accompagnées.
              </p>

              <h3 class="text-2xl font-bold text-gray-800">Les blocages culturels et organisationnels</h3>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Certaines entreprises cultivent des modes de fonctionnement profondément ancrés, où l'innovation ou la remise en question ne sont pas valorisées. De plus, si la gouvernance ne soutient pas activement la transformation, celle-ci risque de rester lettre morte.
              </p>

              <h2 class="text-3xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">Les étapes clés d'un processus de conduite du changement réussi</h2>
              
              <h3 class="text-2xl font-bold text-gray-800">Phase de diagnostic et cadrage</h3>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Chez BLM Consult, chaque mission débute par une phase de diagnostic approfondi. Il s'agit de comprendre votre contexte, vos objectifs, vos contraintes et vos leviers internes. Cette étape permet de poser des bases solides et réalistes.
              </p>

              <h3 class="text-2xl font-bold text-gray-800">Communication et mobilisation des parties prenantes</h3>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Un changement réussi repose sur une communication claire, transparente et régulière. Il est essentiel d'expliquer le sens du changement, d'impliquer les collaborateurs dès le début et de répondre à leurs interrogations.
              </p>

              <h3 class="text-2xl font-bold text-gray-800">Accompagnement et montée en compétence</h3>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Il ne suffit pas d'informer : il faut aussi former, soutenir et valoriser. Nos consultants, formateurs et coachs accompagnent vos équipes dans la durée, en apportant outils, formations et accompagnements personnalisés.
              </p>

              <h3 class="text-2xl font-bold text-gray-800">Suivi, évaluation et ajustement</h3>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Le changement est un processus vivant. Il nécessite des points d'étape, des indicateurs clairs, et parfois, des réajustements. Chez BLM Consult, nous restons présents tout au long de votre parcours, avec une posture d'amélioration continue.
              </p>

              <h2 class="text-3xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">Les rôles cruciaux : consultant, formateur, coach, facilitateur</h2>
              
              <h3 class="text-2xl font-bold text-gray-800">Comment chaque métier soutient la transformation</h3>
              
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <span class="text-blue-600 font-bold">Le consultant</span> analyse, conseille, structure.
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <span class="text-blue-600 font-bold">Le formateur</span> transmet des savoirs, accompagne la montée en compétence.
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <span class="text-blue-600 font-bold">Le coach</span> aide à faire émerger les solutions individuelles ou collectives.
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <span class="text-blue-600 font-bold">Le facilitateur</span> fluidifie les échanges et crée les conditions d'un dialogue constructif.
                  </div>
                </div>
              </div>

              <h3 class="text-2xl font-bold text-gray-800">L'importance de la complémentarité des expertises</h3>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Chez BLM Consult, ces métiers travaillent ensemble, dans un esprit de synergie. Cette diversité de regards est notre force pour accompagner vos projets avec profondeur et justesse.
              </p>

              <h2 class="text-3xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">BLM Consult : une approche centrée sur l'humain et la co-construction</h2>
              
              <h3 class="text-2xl font-bold text-gray-800">Des interventions sur-mesure</h3>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Chez BLM Consult, nous croyons fermement qu'aucun changement ne peut être copié-collé d'une entreprise à l'autre. Chaque organisation a ses codes, sa culture, ses enjeux et ses spécificités. C'est pourquoi nous adoptons une approche entièrement personnalisée.
              </p>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Avant toute action, nous réalisons un diagnostic approfondi, afin d'identifier les résistances, les forces internes, les attentes des parties prenantes et les indicateurs de réussite. Ce cadrage précis est la première étape d'une transformation réussie.
              </p>

              <h3 class="text-2xl font-bold text-gray-800">L'esprit coaching : écoute, confiance et responsabilisation</h3>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Tous nos dispositifs sont pensés dans un esprit coaching. Cela signifie que nous ne venons pas avec des solutions toutes faites, mais avec une posture d'écoute active, de questionnement stratégique, et de responsabilisation des acteurs.
              </p>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Nos consultants, formateurs, coachs et facilitateurs interviennent en synergie pour favoriser l'autonomie, la confiance et la mobilisation collective. Nous mettons un point d'honneur à construire avec nos clients, et non à leur place.
              </p>

              <h2 class="text-3xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">Les indicateurs de réussite d'une transformation réussie</h2>
              
              <h3 class="text-2xl font-bold text-gray-800">Engagement des collaborateurs</h3>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                L'un des premiers signes que le changement est bien conduit est la mobilisation spontanée des équipes. Quand les collaborateurs comprennent le "pourquoi", qu'ils se sentent écoutés et impliqués, leur niveau d'engagement augmente.
              </p>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                L'appropriation par les équipes est un critère de succès bien plus fort que n'importe quel livrable ou planning respecté.
              </p>

              <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b-4 border-blue-600 pb-4">
                Gérer une crise au travail : 10 étapes pour transformer la tension en opportunité
              </h1>
              
              <div className="prose prose-lg max-w-none space-y-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Personne n'aime vivre une crise au travail. Pourtant, elles surviennent tôt ou tard : tensions internes, désaccords violents, surcharge émotionnelle, perte de sens, conflits ouverts… Une crise, qu'elle soit humaine, organisationnelle ou symbolique, a le pouvoir de tout désorganiser si elle n'est pas traitée à temps.
                </p>
                
                <p className="text-xl text-gray-700 leading-relaxed">
                  Mais une crise n'est pas une fatalité. Bien accompagnée, elle peut devenir un levier de transformation, une occasion de rétablir un meilleur fonctionnement et de renforcer les liens entre les équipes. Chez BLM Consult, nous accompagnons depuis plus de 15 ans les organisations confrontées à des situations de crise, avec une approche à la fois structurée, humaine et sur-mesure.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-b-2 border-blue-600 pb-2">
                  Comprendre ce qu'est une crise au travail
                </h2>
                
                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Crise ponctuelle vs crise systémique : quelle différence ?
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  Une crise ponctuelle survient souvent suite à un événement déclencheur : un conflit entre deux personnes, un licenciement mal vécu, une annonce brutale… Elle génère une montée de tension soudaine mais localisée.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  La crise systémique, quant à elle, est le symptôme d'un déséquilibre plus profond et durable. Elle s'installe lentement, souvent de manière invisible, et finit par affecter l'ensemble de l'organisation.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Les causes les plus fréquentes des crises en entreprise
                </h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Un changement mal accompagné (fusion, réorganisation, digitalisation)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Une rupture de communication entre niveaux hiérarchiques</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Des conflits interpersonnels non résolus</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Une surcharge de travail ou un sentiment d'injustice</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Une perte de confiance dans la direction ou le management</span>
                  </li>
                </ul>
                
                <p className="text-gray-700 leading-relaxed">
                  Reconnaître ces causes permet d'agir avec justesse et de prévenir l'escalade.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-b-2 border-blue-600 pb-2">
                  Pourquoi une crise mal gérée peut fragiliser toute l'organisation ?
                </h2>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Impact humain, émotionnel et collectif
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  Une crise touche les individus en profondeur. Stress, anxiété, démotivation… Si elle est ignorée, elle laisse des traces durables sur le plan psychologique et relationnel. Cela peut mener à des arrêts maladie, des départs, ou une ambiance délétère.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Perte de confiance et désengagement
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  L'un des effets les plus dommageables d'une crise mal gérée est la perte de confiance : en la direction, dans les collègues, dans le sens même du travail. Et sans confiance, impossible de coopérer, d'innover ou de mobiliser les équipes.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-b-2 border-blue-600 pb-2">
                  Première étape : reconnaître les signes de la crise
                </h2>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Symptômes visibles et signaux faibles
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  Avant de pouvoir agir, encore faut-il savoir repérer les signes d'une crise émergente. Certains sont évidents : hausse des conflits, réunions tendues, turn-over, burn-out, multiplication des arrêts maladie. D'autres sont plus subtils : retrait progressif des collaborateurs, baisse de motivation, non-dits, ambiances plombées.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Ces signaux faibles sont souvent les premiers indicateurs qu'un dysfonctionnement se propage. Les ignorer revient à laisser le problème s'enkyster.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Le rôle des managers et RH dans la détection
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  Les managers de proximité et les RH sont en première ligne. Leur capacité à écouter, observer et alerter joue un rôle crucial. Encore faut-il qu'ils soient formés à détecter ces dynamiques et qu'ils bénéficient d'un espace pour exprimer leurs préoccupations sans peur de jugement.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-b-2 border-blue-600 pb-2">
                  La posture à adopter face à une situation critique
                </h2>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Rester factuel, lucide et empathique
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  Dans une situation de crise, l'émotion peut vite prendre le dessus. Pourtant, pour agir efficacement, il est essentiel d'adopter une posture de calme, d'analyse et d'écoute. Cela implique de rester centré sur les faits, sans minimiser ni dramatiser, tout en prenant en compte le vécu émotionnel des personnes concernées.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Éviter la panique et la communication agressive
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  Rien n'est pire qu'un manager qui surréagit ou qui nie l'existence d'un problème. Cela génère méfiance, confusion, voire colère. Adopter une communication maîtrisée, empathique et transparente est fondamental pour restaurer un climat de confiance.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-b-2 border-blue-600 pb-2">
                  Les erreurs à ne surtout pas commettre en pleine crise
                </h2>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Minimiser la gravité
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  Ignorer les signaux ou les relativiser revient souvent à jeter de l'huile sur le feu. Les collaborateurs perçoivent cette attitude comme du mépris ou de l'aveuglement, ce qui aggrave leur mal-être.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Agir sans diagnostic ou sans vision partagée
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  Intervenir dans la précipitation sans avoir compris les causes réelles de la crise peut conduire à des décisions contre-productives. Le diagnostic partagé, réalisé avec l'appui de professionnels extérieurs si besoin, est une étape indispensable avant toute action.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-b-2 border-blue-600 pb-2">
                  Le rôle clé de la communication en période de crise
                </h2>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Dire sans affoler, écouter sans se justifier
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  L'art de la communication de crise repose sur un équilibre délicat. Il faut nommer la réalité, sans tabou ni langue de bois, tout en gardant une tonalité rassurante et constructive. Il est également essentiel de créer des espaces pour écouter les ressentis, les peurs et les propositions.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Structurer une communication transparente et régulière
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  Une crise crée de l'incertitude. Pour réduire cette instabilité, il faut instaurer une communication ritualisée, claire et accessible. Par exemple : des points réguliers, des canaux identifiés, des messages validés et alignés entre les différents niveaux hiérarchiques.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-b-2 border-blue-600 pb-2">
                  Accompagner les équipes : sécuriser, écouter, reconstruire
                </h2>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Organiser des temps de parole et de médiation
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  La crise fait émerger des tensions qui, si elles ne sont pas exprimées, finissent par empoisonner les relations. Les ateliers de médiation, cercles de parole, groupes d'écoute sont des outils puissants pour restaurer le dialogue et désamorcer les conflits.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Restaurer la confiance et la sécurité psychologique
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  Il ne suffit pas de résoudre la crise sur le plan organisationnel. Il faut aussi permettre aux collaborateurs de retrouver un sentiment de sécurité, tant sur le plan émotionnel que relationnel. C'est un travail qui demande du temps, de la présence et de la cohérence.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-b-2 border-blue-600 pb-2">
                  Intervenir efficacement avec l'appui d'experts extérieurs
                </h2>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Pourquoi faire appel à un cabinet comme BLM Consult ?
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  Dans une période de crise, un regard externe permet d'agir avec neutralité, hauteur de vue et méthode. BLM Consult mobilise une équipe pluridisciplinaire (consultants, coachs, facilitateurs) pour intervenir rapidement, diagnostiquer les causes profondes et proposer un plan d'action réaliste.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Les apports spécifiques : diagnostic, médiation, plan d'action
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  Nous proposons :
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">un diagnostic flash ou approfondi de la situation ;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">des interventions ciblées : coaching de crise, médiation collective, accompagnement managérial ;</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">une co-construction de solutions avec les acteurs concernés, pour créer une sortie de crise durable.</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-b-2 border-blue-600 pb-2">
                  Relancer une dynamique collective après la crise
                </h2>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Recréer du lien et de la coopération
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  Sortir d'une crise, c'est aussi reconstruire. Cela passe par des temps de célébration, de reconnaissance, de co-construction. Redonner du sens et du plaisir à travailler ensemble est indispensable pour tourner la page.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Capitaliser sur l'expérience pour faire évoluer les pratiques
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  Chaque crise contient une leçon. L'accompagnement post-crise permet de tirer les enseignements de l'événement, d'ajuster les modes de fonctionnement, et parfois de faire émerger des innovations organisationnelles inattendues.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-b-2 border-blue-600 pb-2">
                  Construire une culture de prévention des crises
                </h2>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Former les managers à la gestion de conflit
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  La prévention commence par la montée en compétence des acteurs clés. Chez BLM Consult, nous formons les managers à repérer les signaux faibles, à gérer les conflits, à adapter leur posture face à la tension, et à instaurer un climat propice au dialogue.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Installer des mécanismes de veille et d'alerte
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  Instaurer des rituels de régulation, des questionnaires internes, des feedbacks croisés ou encore des espaces d'échange réguliers permet de détecter les tensions en amont et d'intervenir avant qu'elles ne se transforment en crise.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 my-12">
                  <h2 className="text-2xl font-bold text-blue-800 mb-6">FAQ sur la gestion de crise en entreprise</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">1. Quelle est la première chose à faire en cas de crise ?</h3>
                      <p className="text-gray-700">Faire un arrêt sur image. Observer, écouter, diagnostiquer. Éviter toute précipitation dans l'action.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">2. Est-ce que toutes les crises nécessitent un accompagnement externe ?</h3>
                      <p className="text-gray-700">Non, mais dans les situations complexes ou sensibles, l'appui d'un expert neutre permet souvent d'apaiser les tensions plus rapidement.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">3. Comment savoir si une crise est systémique ?</h3>
                      <p className="text-gray-700">Si les tensions se répètent, s'aggravent ou concernent plusieurs niveaux de l'organisation, il s'agit probablement d'un problème structurel.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">4. Quelle est la durée moyenne d'un accompagnement de crise ?</h3>
                      <p className="text-gray-700">Cela dépend du contexte, mais généralement, l'intervention se déroule sur quelques semaines à quelques mois, avec un suivi post-crise.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">5. Peut-on prévenir toutes les crises ?</h3>
                      <p className="text-gray-700">Non, mais on peut en limiter l'ampleur et les effets en développant une culture de dialogue, de vigilance et d'adaptation.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">6. Quels sont les signes que la crise est en voie de résolution ?</h3>
                      <p className="text-gray-700">Retour du dialogue, apaisement des tensions, regain de motivation, et surtout, cohérence retrouvée entre discours et actions.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-b-2 border-blue-600 pb-2">
                  Conclusion : chaque crise peut devenir un point d'appui pour grandir
                </h2>
                
                <p className="text-gray-700 leading-relaxed">
                  Une crise au travail n'est jamais agréable. Mais elle peut devenir une formidable opportunité de transformation, si elle est prise au sérieux, accompagnée avec humanité, et traitée en profondeur. Chez BLM Consult, nous croyons que les périodes difficiles révèlent aussi les forces d'une organisation.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  En aidant à traverser ces moments clés, nous participons à construire des entreprises plus solides, plus humaines, et plus résilientes.
                </p>
              </div>
              
              <h3 class="text-2xl font-bold text-gray-800">Prise de recul et montée en compétences durables</h3>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Plus qu'un simple apport de compétences, notre accompagnement vise à inscrire les changements dans la durée. Nous ne cherchons pas à "former pour former", mais à transformer les postures, à ancrer des habitudes nouvelles, et à renforcer les capacités d'adaptation.
              </p>

              <h2 class="text-3xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">Erreurs fréquentes à éviter dans l'accompagnement des managers</h2>
              
              <h3 class="text-2xl font-bold text-gray-800">Imposer des modèles rigides ou déconnectés du terrain</h3>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Une erreur fréquente consiste à calquer des modèles managériaux venus d'ailleurs sans les adapter. Le management ne peut être uniforme : il doit tenir compte des métiers, des personnes, et du contexte spécifique. L'accompagnement doit donc être ajusté, souple, évolutif.
              </p>
              
              <h3 class="text-2xl font-bold text-gray-800">Sous-estimer l'impact émotionnel du changement</h3>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                On parle beaucoup de stratégie, peu de vécu émotionnel. Pourtant, derrière chaque changement, il y a de l'incertitude, du stress, voire de la peur. Prendre soin de cette dimension humaine est un facteur clé de réussite pour toute démarche d'accompagnement managérial.
              </p>

              <h2 class="text-3xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">FAQ sur l'accompagnement des managers</h2>
              
              <div class="bg-blue-50 p-6 rounded-lg space-y-6">
                <div>
                  <h4 class="text-lg font-bold text-blue-800 mb-2">1. À qui s'adresse l'accompagnement managérial ?</h4>
                  <p class="text-gray-700">À tous les managers, qu'ils soient débutants, expérimentés, ou en transition. Il s'adapte à chaque niveau de responsabilité.</p>
                </div>
                
                <div>
                  <h4 class="text-lg font-bold text-blue-800 mb-2">2. Quels sont les bénéfices concrets ?</h4>
                  <p class="text-gray-700">Plus de clarté, plus d'efficacité, une meilleure gestion des relations, moins de stress, et une posture plus sereine et impactante.</p>
                </div>
                
                <div>
                  <h4 class="text-lg font-bold text-blue-800 mb-2">3. Peut-on faire de l'accompagnement en distanciel ?</h4>
                  <p class="text-gray-700">Oui, BLM Consult propose des dispositifs hybrides ou 100 % à distance, avec des résultats tout aussi qualitatifs.</p>
                </div>
                
                <div>
                  <h4 class="text-lg font-bold text-blue-800 mb-2">4. Combien de temps dure l'accompagnement ?</h4>
                  <p class="text-gray-700">De quelques séances à plusieurs mois, selon les objectifs, le contexte et les ressources disponibles.</p>
                </div>
                
                <div>
                  <h4 class="text-lg font-bold text-blue-800 mb-2">5. Est-ce que l'accompagnement remplace les formations ?</h4>
                  <p class="text-gray-700">Non, c'est complémentaire. La formation apporte des savoirs ; l'accompagnement travaille les postures et les pratiques.</p>
                </div>
                
                <div>
                  <h4 class="text-lg font-bold text-blue-800 mb-2">6. Comment mesurer l'impact d'un accompagnement ?</h4>
                  <p class="text-gray-700">Grâce à des indicateurs d'évolution comportementale, des retours qualitatifs, et parfois des outils d'évaluation dédiés.</p>
                </div>
              </div>

              <h2 class="text-3xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">Conclusion : Revaloriser le rôle managérial dans un monde incertain</h2>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Le manager d'aujourd'hui est bien plus qu'un chef d'équipe. Il est un pilote, un guide, un médiateur, un facilitateur du lien. Pour assumer pleinement ce rôle complexe, il doit être soutenu, outillé, reconnu. Chez BLM Consult, nous croyons que chaque manager mérite un accompagnement à la hauteur de ses responsabilités.
              </p>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Investir dans l'accompagnement managérial, c'est faire le choix d'une organisation plus humaine, plus agile, et mieux armée pour affronter les défis d'aujourd'hui et de demain.
              </p>
            </div>
          `
        };
      case 'gestion-crise':
        return {
          title: "Gérer une crise au travail : les bons réflexes pour les managers",
          subtitle: "Une boîte à outils pour accompagner une situation critique de manière structurée et humaine.",
          date: "8 Mars 2024",
          readTime: "6 min",
          category: "Gestion de crise",
          author: "Lylia Mokrani",
          tags: ["Crise", "Management", "Leadership"],
          content: `
            <h1>Gérer une crise au travail : 10 étapes pour transformer la tension en opportunité</h1>
            
            <p>Personne n'aime vivre une crise au travail. Pourtant, elles surviennent tôt ou tard : tensions internes, désaccords violents, surcharge émotionnelle, perte de sens, conflits ouverts… Une crise, qu'elle soit humaine, organisationnelle ou symbolique, a le pouvoir de tout désorganiser si elle n'est pas traitée à temps.</p>
            
            <p>Mais une crise n'est pas une fatalité. Bien accompagnée, elle peut devenir un levier de transformation, une occasion de rétablir un meilleur fonctionnement et de renforcer les liens entre les équipes. Chez BLM Consult, nous accompagnons depuis plus de 15 ans les organisations confrontées à des situations de crise, avec une approche à la fois structurée, humaine et sur-mesure.</p>
            
            <h2 style="border-bottom: 3px solid #3b82f6; padding-bottom: 8px; margin-top: 2rem; margin-bottom: 1.5rem;">Comprendre ce qu'est une crise au travail</h2>
            
            <h3>Crise ponctuelle vs crise systémique : quelle différence ?</h3>
            
            <p>Une crise ponctuelle survient souvent suite à un événement déclencheur : un conflit entre deux personnes, un licenciement mal vécu, une annonce brutale… Elle génère une montée de tension soudaine mais localisée.</p>
            
            <p>La crise systémique, quant à elle, est le symptôme d'un déséquilibre plus profond et durable. Elle s'installe lentement, souvent de manière invisible, et finit par affecter l'ensemble de l'organisation.</p>
            
            <h3>Les causes les plus fréquentes des crises en entreprise</h3>
            
            <ul>
              <li><span style="color: #3b82f6;">•</span> Un changement mal accompagné (fusion, réorganisation, digitalisation)</li>
              <li><span style="color: #3b82f6;">•</span> Une rupture de communication entre niveaux hiérarchiques</li>
              <li><span style="color: #3b82f6;">•</span> Des conflits interpersonnels non résolus</li>
              <li><span style="color: #3b82f6;">•</span> Une surcharge de travail ou un sentiment d'injustice</li>
              <li><span style="color: #3b82f6;">•</span> Une perte de confiance dans la direction ou le management</li>
            </ul>
            
            <p>Reconnaître ces causes permet d'agir avec justesse et de prévenir l'escalade.</p>
            
            <h2 style="border-bottom: 3px solid #3b82f6; padding-bottom: 8px; margin-top: 2rem; margin-bottom: 1.5rem;">Pourquoi une crise mal gérée peut fragiliser toute l'organisation ?</h2>
            
            <h3>Impact humain, émotionnel et collectif</h3>
            
            <p>Une crise touche les individus en profondeur. Stress, anxiété, démotivation… Si elle est ignorée, elle laisse des traces durables sur le plan psychologique et relationnel. Cela peut mener à des arrêts maladie, des départs, ou une ambiance délétère.</p>
            
            <h3>Perte de confiance et désengagement</h3>
            
            <p>L'un des effets les plus dommageables d'une crise mal gérée est la perte de confiance : en la direction, dans les collègues, dans le sens même du travail. Et sans confiance, impossible de coopérer, d'innover ou de mobiliser les équipes.</p>
            
            <h2 style="border-bottom: 3px solid #3b82f6; padding-bottom: 8px; margin-top: 2rem; margin-bottom: 1.5rem;">Première étape : reconnaître les signes de la crise</h2>
            
            <h3>Symptômes visibles et signaux faibles</h3>
            
            <p>Avant de pouvoir agir, encore faut-il savoir repérer les signes d'une crise émergente. Certains sont évidents : hausse des conflits, réunions tendues, turn-over, burn-out, multiplication des arrêts maladie. D'autres sont plus subtils : retrait progressif des collaborateurs, baisse de motivation, non-dits, ambiances plombées.</p>
            
            <p>Ces signaux faibles sont souvent les premiers indicateurs qu'un dysfonctionnement se propage. Les ignorer revient à laisser le problème s'enkyster.</p>
            
            <h3>Le rôle des managers et RH dans la détection</h3>
            
            <p>Les managers de proximité et les RH sont en première ligne. Leur capacité à écouter, observer et alerter joue un rôle crucial. Encore faut-il qu'ils soient formés à détecter ces dynamiques et qu'ils bénéficient d'un espace pour exprimer leurs préoccupations sans peur de jugement.</p>
            
            <h2 style="border-bottom: 3px solid #3b82f6; padding-bottom: 8px; margin-top: 2rem; margin-bottom: 1.5rem;">La posture à adopter face à une situation critique</h2>
            
            <h3>Rester factuel, lucide et empathique</h3>
            
            <p>Dans une situation de crise, l'émotion peut vite prendre le dessus. Pourtant, pour agir efficacement, il est essentiel d'adopter une posture de calme, d'analyse et d'écoute. Cela implique de rester centré sur les faits, sans minimiser ni dramatiser, tout en prenant en compte le vécu émotionnel des personnes concernées.</p>
            
            <h3>Éviter la panique et la communication agressive</h3>
            
            <p>Rien n'est pire qu'un manager qui surréagit ou qui nie l'existence d'un problème. Cela génère méfiance, confusion, voire colère. Adopter une communication maîtrisée, empathique et transparente est fondamental pour restaurer un climat de confiance.</p>
            
            <h2 style="border-bottom: 3px solid #3b82f6; padding-bottom: 8px; margin-top: 2rem; margin-bottom: 1.5rem;">Les erreurs à ne surtout pas commettre en pleine crise</h2>
            
            <h3>Minimiser la gravité</h3>
            
            <p>Ignorer les signaux ou les relativiser revient souvent à jeter de l'huile sur le feu. Les collaborateurs perçoivent cette attitude comme du mépris ou de l'aveuglement, ce qui aggrave leur mal-être.</p>
            
            <h3>Agir sans diagnostic ou sans vision partagée</h3>
            
            <p>Intervenir dans la précipitation sans avoir compris les causes réelles de la crise peut conduire à des décisions contre-productives. Le diagnostic partagé, réalisé avec l'appui de professionnels extérieurs si besoin, est une étape indispensable avant toute action.</p>
            
            <h2 style="border-bottom: 3px solid #3b82f6; padding-bottom: 8px; margin-top: 2rem; margin-bottom: 1.5rem;">Le rôle clé de la communication en période de crise</h2>
            
            <h3>Dire sans affoler, écouter sans se justifier</h3>
            
            <p>L'art de la communication de crise repose sur un équilibre délicat. Il faut nommer la réalité, sans tabou ni langue de bois, tout en gardant une tonalité rassurante et constructive. Il est également essentiel de créer des espaces pour écouter les ressentis, les peurs et les propositions.</p>
            
            <h3>Structurer une communication transparente et régulière</h3>
            
            <p>Une crise crée de l'incertitude. Pour réduire cette instabilité, il faut instaurer une communication ritualisée, claire et accessible. Par exemple : des points réguliers, des canaux identifiés, des messages validés et alignés entre les différents niveaux hiérarchiques.</p>
            
            <h2 style="border-bottom: 3px solid #3b82f6; padding-bottom: 8px; margin-top: 2rem; margin-bottom: 1.5rem;">Accompagner les équipes : sécuriser, écouter, reconstruire</h2>
            
            <h3>Organiser des temps de parole et de médiation</h3>
            
            <p>La crise fait émerger des tensions qui, si elles ne sont pas exprimées, finissent par empoisonner les relations. Les ateliers de médiation, cercles de parole, groupes d'écoute sont des outils puissants pour restaurer le dialogue et désamorcer les conflits.</p>
            
            <h3>Restaurer la confiance et la sécurité psychologique</h3>
            
            <p>Il ne suffit pas de résoudre la crise sur le plan organisationnel. Il faut aussi permettre aux collaborateurs de retrouver un sentiment de sécurité, tant sur le plan émotionnel que relationnel. C'est un travail qui demande du temps, de la présence et de la cohérence.</p>
            
            <h2 style="border-bottom: 3px solid #3b82f6; padding-bottom: 8px; margin-top: 2rem; margin-bottom: 1.5rem;">Intervenir efficacement avec l'appui d'experts extérieurs</h2>
            
            <h3>Pourquoi faire appel à un cabinet comme BLM Consult ?</h3>
            
            <p>Dans une période de crise, un regard externe permet d'agir avec neutralité, hauteur de vue et méthode. BLM Consult mobilise une équipe pluridisciplinaire (consultants, coachs, facilitateurs) pour intervenir rapidement, diagnostiquer les causes profondes et proposer un plan d'action réaliste.</p>
            
            <h3>Les apports spécifiques : diagnostic, médiation, plan d'action</h3>
            
            <p>Nous proposons :</p>
            <ul>
              <li><span style="color: #3b82f6;">•</span> un diagnostic flash ou approfondi de la situation ;</li>
              <li><span style="color: #3b82f6;">•</span> des interventions ciblées : coaching de crise, médiation collective, accompagnement managérial ;</li>
              <li><span style="color: #3b82f6;">•</span> une co-construction de solutions avec les acteurs concernés, pour créer une sortie de crise durable.</li>
            </ul>
            
            <h2 style="border-bottom: 3px solid #3b82f6; padding-bottom: 8px; margin-top: 2rem; margin-bottom: 1.5rem;">Relancer une dynamique collective après la crise</h2>
            
            <h3>Recréer du lien et de la coopération</h3>
            
            <p>Sortir d'une crise, c'est aussi reconstruire. Cela passe par des temps de célébration, de reconnaissance, de co-construction. Redonner du sens et du plaisir à travailler ensemble est indispensable pour tourner la page.</p>
            
            <h3>Capitaliser sur l'expérience pour faire évoluer les pratiques</h3>
            
            <p>Chaque crise contient une leçon. L'accompagnement post-crise permet de tirer les enseignements de l'événement, d'ajuster les modes de fonctionnement, et parfois de faire émerger des innovations organisationnelles inattendues.</p>
            
            <h2 style="border-bottom: 3px solid #3b82f6; padding-bottom: 8px; margin-top: 2rem; margin-bottom: 1.5rem;">Construire une culture de prévention des crises</h2>
            
            <h3>Former les managers à la gestion de conflit</h3>
            
            <p>La prévention commence par la montée en compétence des acteurs clés. Chez BLM Consult, nous formons les managers à repérer les signaux faibles, à gérer les conflits, à adapter leur posture face à la tension, et à instaurer un climat propice au dialogue.</p>
            
            <h3>Installer des mécanismes de veille et d'alerte</h3>
            
            <p>Instaurer des rituels de régulation, des questionnaires internes, des feedbacks croisés ou encore des espaces d'échange réguliers permet de détecter les tensions en amont et d'intervenir avant qu'elles ne se transforment en crise.</p>
            
            <h2 style="border-bottom: 3px solid #3b82f6; padding-bottom: 8px; margin-top: 2rem; margin-bottom: 1.5rem;">FAQ sur la gestion de crise en entreprise</h2>
            
            <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 1.5rem; margin: 1.5rem 0; border-radius: 0 8px 8px 0;">
              <h4><strong>1. Quelle est la première chose à faire en cas de crise ?</strong></h4>
              <p>Faire un arrêt sur image. Observer, écouter, diagnostiquer. Éviter toute précipitation dans l'action.</p>
              
              <h4><strong>2. Est-ce que toutes les crises nécessitent un accompagnement externe ?</strong></h4>
              <p>Non, mais dans les situations complexes ou sensibles, l'appui d'un expert neutre permet souvent d'apaiser les tensions plus rapidement.</p>
              
              <h4><strong>3. Comment savoir si une crise est systémique ?</strong></h4>
              <p>Si les tensions se répètent, s'aggravent ou concernent plusieurs niveaux de l'organisation, il s'agit probablement d'un problème structurel.</p>
              
              <h4><strong>4. Quelle est la durée moyenne d'un accompagnement de crise ?</strong></h4>
              <p>Cela dépend du contexte, mais généralement, l'intervention se déroule sur quelques semaines à quelques mois, avec un suivi post-crise.</p>
              
              <h4><strong>5. Peut-on prévenir toutes les crises ?</strong></h4>
              <p>Non, mais on peut en limiter l'ampleur et les effets en développant une culture de dialogue, de vigilance et d'adaptation.</p>
              
              <h4><strong>6. Quels sont les signes que la crise est en voie de résolution ?</strong></h4>
              <p>Retour du dialogue, apaisement des tensions, regain de motivation, et surtout, cohérence retrouvée entre discours et actions.</p>
            </div>
            
            <h2 style="border-bottom: 3px solid #3b82f6; padding-bottom: 8px; margin-top: 2rem; margin-bottom: 1.5rem;">Conclusion : chaque crise peut devenir un point d'appui pour grandir</h2>
            
            <p>Une crise au travail n'est jamais agréable. Mais elle peut devenir une formidable opportunité de transformation, si elle est prise au sérieux, accompagnée avec humanité, et traitée en profondeur. Chez BLM Consult, nous croyons que les périodes difficiles révèlent aussi les forces d'une organisation.</p>
            
            <p>En aidant à traverser ces moments clés, nous participons à construire des entreprises plus solides, plus humaines, et plus résilientes.</p>
          `
        };
      case 'mediation-entreprise':
        return {
          title: "Médiation en entreprise : quand et pourquoi faire appel à un médiateur externe",
          subtitle: "Un décryptage du rôle de la médiation dans la résolution de conflits et la restauration du dialogue au sein des équipes.",
          date: "25 Février 2024",
          readTime: "8 min",
          category: "Médiation",
          author: "Lylia Mokrani",
          tags: ["Médiation", "Conflits", "Dialogue social"],
          content: `
            <div class="space-y-8">
              <p class="text-lg text-gray-700 leading-relaxed">
                [Contenu à définir - Envoyez-moi le texte pour cet article]
          `
        };
      case 'coaching-professionnel':
        return {
          title: "Coaching professionnel : un outil puissant pour révéler les talents individuels et collectifs",
          subtitle: "Comment le coaching accompagne l'évolution des postures professionnelles et soutient le développement des compétences.",
          date: "18 Février 2024",
          readTime: "6 min",
          category: "Coaching",
          author: "Lylia Mokrani",
          tags: ["Coaching", "Développement", "Talents"],
          content: `
            <div class="space-y-8">
              <p class="text-lg text-gray-700 leading-relaxed">
                [Contenu à définir - Envoyez-moi le texte pour cet article]
              </p>
            </div>
          `
        };
      default:
        return null;
    }
  };

  const article = getArticleData();

  if (!article) {
    return <div>Article non trouvé</div>;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.subtitle,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "BLM Consult"
    },
    "datePublished": article.date
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={`${article.title} - Blog BLM Consult`}
        description={article.subtitle}
        keywords={`${article.category.toLowerCase()}, conseil RH, accompagnement entreprise, transformation organisationnelle`}
        structuredData={structuredData}
      />

      {/* Header Section - Dark background like the example */}
      <div className="bg-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back button */}
          <button
            onClick={() => setCurrentPage('blog')}
            className="flex items-center text-gray-300 hover:text-white mb-12 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour au blog
          </button>

          {/* Title and subtitle */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {article.title}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            {article.subtitle}
          </p>
        </div>
      </div>

      {/* Content Section - White background */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Article content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors duration-300"
                >
                  <Tag className="w-4 h-4 mr-2" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Partager cet article</h3>
                <p className="text-gray-600">Faites découvrir cet article à vos collègues</p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center">
                <Share2 className="w-5 h-5 mr-2" />
                Partager
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Light gray background like the example */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 text-center border border-blue-200/50">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Une question sur la conduite du changement ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Contactez-nous dès aujourd'hui pour un diagnostic gratuit et découvrez comment 
              notre expertise peut vous accompagner vers l'excellence organisationnelle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300 shadow-lg flex items-center cursor-pointer"
              >
                <Phone className="mr-2 w-5 h-5" />
                Appeler maintenant
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors duration-300 shadow-lg flex items-center border-2 border-blue-600 cursor-pointer"
              >
                <Mail className="mr-2 w-5 h-5" />
                Envoyer un message
              </button>
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-gray-500 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                <span>Réponse sous 48h</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                <span>Diagnostic gratuit</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                <span>Devis personnalisé</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArticle;