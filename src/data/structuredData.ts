// Schema.org structured data for BLM Consult
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "BLM Consult",
  "alternateName": "Cabinet Conseil RH & Formation Coaching",
  "description": "Cabinet conseil RH spécialisé en accompagnement entreprise, formation coaching et développement professionnel. Consultante RH experte avec 15+ ans d'expérience en prévention RPS, QVCT et transformation organisationnelle.",
  "url": "https://blmconsult.fr",
  "logo": "https://lh3.googleusercontent.com/pw/AP1GczMcU-fT-3oC5vkVGYbOMwJfuPiS-k35vykCZZ3q_oJP4JEyX52vdiUh_rtiSt8yCyHEvZc-Df8nL_5jY85OBa2MMk4c57szEiB74iOK8YVhUmGS3SIDVpZTT5lJymOL3Ik34eq-KyG5z65UgXjB8v7-=w1024-h1024-s-no-gm?authuser=0",
  "image": "https://lh3.googleusercontent.com/pw/AP1GczOkB92Fn0-b0Lal_KeOxAh4I0iVqxSsqvyI1nVcU3xA1Xbgu8-nhiTJ6xpLa9CW-6fAngVOJSxdUh2pNxoLDwdPttV3mwt3e1vi-UvaGLsE6dmQkJKhpUAjJGF7JWTe7dc7UC06bDsB6dmWtVFI3yQA=w793-h315-s-no-gm?authuser=0",
  
  "founder": {
    "@type": "Person",
    "name": "Lylia Mokrani",
    "jobTitle": "Consultante RH experte et formatrice certifiée",
    "description": "Experte en conseil ressources humaines, coaching professionnel et formation. Spécialisée en prévention des risques psychosociaux (RPS) et qualité de vie au travail (QVCT).",
    "hasCredential": [
      "Consultante spécialisée RPS",
      "Formatrice certifiée INRS/CRAMIF",
      "Coach professionnelle certifiée CNAM",
      "Médiatrice du travail diplômée"
    ],
    "memberOf": [
      "ANM (Association Nationale des Médiateurs)",
      "SYME (Syndicat professionnel des médiateurs)",
      "PREMiS (Association autour des pratiques de médiation en santé)"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/lylia-mokrani-06385439/"
    ]
  },
  
  "serviceType": [
    "Conseil en ressources humaines",
    "Diagnostic organisationnel",
    "Prévention des risques psychosociaux (RPS)",
    "Qualité de vie et conditions de travail (QVCT)",
    "Coaching professionnel individuel et collectif",
    "Formation professionnelle sur-mesure",
    "Médiation professionnelle et résolution de conflits",
    "Accompagnement du changement organisationnel",
    "Gestion de crise en entreprise"
  ],
  
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services BLM Consult",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Conseil RH & RPS",
          "description": "Diagnostic socio-organisationnel, accompagnement du changement, politiques QVCT",
          "category": "Conseil en ressources humaines"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Coaching Professionnel",
          "description": "Coaching individuel et collectif pour dirigeants, managers et équipes",
          "category": "Développement professionnel"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Formations Sur-mesure",
          "description": "Programmes de formation adaptés : prévention RPS, management, communication",
          "category": "Formation professionnelle"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Médiation Professionnelle",
          "description": "Résolution de conflits interpersonnels et collectifs, amélioration du dialogue social",
          "category": "Médiation et résolution de conflits"
        }
      }
    ]
  },
  
  "areaServed": {
    "@type": "Country",
    "name": "France",
    "description": "Interventions nationales en France"
  },
  
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contact@blmconsult.fr",
    "availableLanguage": ["French", "English", "Portuguese"],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  },
  
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  
  "knowsAbout": [
    "Ressources humaines",
    "Prévention des risques psychosociaux",
    "Qualité de vie au travail",
    "Coaching professionnel",
    "Formation en entreprise",
    "Médiation professionnelle",
    "Gestion du changement",
    "Management et leadership"
  ],
  
  "award": [
    "Certification Qualiopi",
    "Certification INRS/CRAMIF",
    "Certification CNAM Coach professionnel"
  ],
  
  "slogan": "Transformez votre entreprise avec des solutions expertes"
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Lylia Mokrani",
  "jobTitle": "Consultante RH experte et formatrice certifiée",
  "description": "Fondatrice de BLM Consult, experte en conseil ressources humaines avec plus de 15 ans d'expérience. Spécialisée en prévention des risques psychosociaux, coaching professionnel et formation sur-mesure.",
  "image": "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
  "url": "https://blmconsult.fr/about",
  
  "worksFor": {
    "@type": "Organization",
    "name": "BLM Consult",
    "url": "https://blmconsult.fr"
  },
  
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Consultante spécialisée RPS",
      "description": "Experte en Risques Psychosociaux avec certification officielle"
    },
    {
      "@type": "EducationalOccupationalCredential", 
      "name": "Formatrice certifiée INRS/CRAMIF",
      "description": "Évaluation des Risques Professionnels (EvRP)"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Coach professionnelle certifiée CNAM",
      "description": "Conduite de dispositifs de médiation singulière"
    }
  ],
  
  "memberOf": [
    {
      "@type": "Organization",
      "name": "ANM (Association Nationale des Médiateurs)"
    },
    {
      "@type": "Organization", 
      "name": "SYME (Syndicat professionnel des médiateurs)"
    },
    {
      "@type": "Organization",
      "name": "PREMiS (Association autour des pratiques de médiation en santé)"
    }
  ],
  
  "knowsAbout": [
    "Conseil en ressources humaines",
    "Prévention des risques psychosociaux",
    "Coaching professionnel",
    "Formation en entreprise",
    "Médiation professionnelle",
    "Qualité de vie au travail",
    "Gestion du changement",
    "Management et leadership"
  ],
  
  "sameAs": [
    "https://www.linkedin.com/in/lylia-mokrani-06385439/"
  ],
  
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "professional",
    "email": "contact@blmconsult.fr"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "BLM Consult",
  "alternateName": "Cabinet Conseil RH & Formation Coaching",
  "url": "https://blmconsult.fr",
  "description": "Site officiel de BLM Consult - Cabinet conseil RH spécialisé en accompagnement entreprise, formation coaching et développement professionnel.",
  "inLanguage": ["fr-FR", "en-US", "pt-PT"],
  "isAccessibleForFree": true,
  
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://blmconsult.fr/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  
  "mainEntity": {
    "@type": "Organization",
    "name": "BLM Consult"
  },
  
  "publisher": {
    "@type": "Organization",
    "name": "BLM Consult",
    "founder": {
      "@type": "Person",
      "name": "Lylia Mokrani"
    }
  }
};

export const breadcrumbSchema = (currentPage: string, pageTitle: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://blmconsult.fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": pageTitle,
      "item": `https://blmconsult.fr/${currentPage}`
    }
  ]
});

export const serviceSchemas = {
  conseilRH: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conseil RH & RPS",
    "description": "Services de conseil RH spécialisés : diagnostic RPS, accompagnement du changement, gestion de crise, QVCT par consultante experte certifiée.",
    "provider": {
      "@type": "Person",
      "name": "Lylia Mokrani",
      "jobTitle": "Consultante RH experte spécialisée RPS"
    },
    "serviceType": [
      "Diagnostic socio-organisationnel RPS",
      "Accompagnement du changement organisationnel", 
      "Gestion de crise en entreprise",
      "QVCT - Qualité de Vie et Conditions de Travail"
    ],
    "category": "Conseil en ressources humaines",
    "areaServed": "France"
  },
  
  coaching: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Coaching Professionnel",
    "description": "Coaching professionnel individuel et collectif pour dirigeants, managers et équipes. Développement du leadership et des compétences managériales.",
    "provider": {
      "@type": "Person",
      "name": "Lylia Mokrani",
      "jobTitle": "Coach professionnelle certifiée CNAM"
    },
    "serviceType": [
      "Coaching individuel dirigeants",
      "Coaching collectif équipes",
      "Développement leadership",
      "Accompagnement managérial"
    ],
    "category": "Coaching professionnel",
    "areaServed": "France"
  },
  
  formations: {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Formations BLM Consult",
    "description": "Formations professionnelles sur mesure : efficacité professionnelle, santé au travail, prévention RPS. Pédagogie active et accompagnement personnalisé.",
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
      "Management et communication",
      "Qualité de vie au travail"
    ],
    "hasCredential": "Certification Qualiopi",
    "areaServed": "France"
  }
};

export const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Blog BLM Consult",
  "description": "Blog conseil RH : articles sur l'amélioration des conditions de travail, prévention RPS, management et qualité de vie au travail par Lylia Mokrani.",
  "url": "https://blmconsult.fr/blog",
  "author": {
    "@type": "Person",
    "name": "Lylia Mokrani",
    "jobTitle": "Consultante RH experte et formatrice"
  },
  "publisher": {
    "@type": "Organization",
    "name": "BLM Consult"
  },
  "inLanguage": ["fr-FR", "en-US", "pt-PT"],
  "about": [
    "Conseil en ressources humaines",
    "Prévention des risques psychosociaux", 
    "Management et leadership",
    "Qualité de vie au travail",
    "Formation professionnelle",
    "Coaching professionnel"
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quels sont les services proposés par BLM Consult ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BLM Consult propose 4 services principaux : Conseil RH & RPS (diagnostic organisationnel, prévention des risques psychosociaux), Coaching professionnel (individuel et collectif), Formations sur-mesure (prévention, management, communication), et Médiation professionnelle (résolution de conflits)."
      }
    },
    {
      "@type": "Question", 
      "name": "Qui est Lylia Mokrani ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lylia Mokrani est la fondatrice de BLM Consult, consultante RH experte avec plus de 15 ans d'expérience. Elle est certifiée en prévention RPS, formatrice INRS/CRAMIF, coach professionnelle CNAM et médiatrice diplômée."
      }
    },
    {
      "@type": "Question",
      "name": "Dans quels secteurs intervient BLM Consult ?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "BLM Consult intervient dans tous les secteurs : entreprises privées (PME, ETI, grandes entreprises), collectivités territoriales, administrations publiques, associations, établissements de santé et institutions éducatives."
      }
    },
    {
      "@type": "Question",
      "name": "Comment se déroule un accompagnement BLM Consult ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Notre démarche suit 4 étapes : 1) Diagnostic initial approfondi, 2) Stratégie personnalisée adaptée à vos besoins, 3) Mise en œuvre accompagnée avec suivi régulier, 4) Évaluation des résultats et ajustements continus."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles sont les certifications de BLM Consult ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BLM Consult détient plusieurs certifications officielles : Certification Qualiopi pour la formation, certification INRS/CRAMIF pour l'évaluation des risques professionnels, certification CNAM pour le coaching professionnel, et spécialisation RPS reconnue."
      }
    }
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BLM Consult",
  "description": "Cabinet conseil RH spécialisé en accompagnement entreprise, formation coaching et développement professionnel.",
  "url": "https://blmconsult.fr",
  "telephone": "+33662437691",
  "email": "contact@blmconsult.fr",
  
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR",
    "addressRegion": "France"
  },
  
  "geo": {
    "@type": "GeoCoordinates",
    "addressCountry": "FR"
  },
  
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  
  "priceRange": "Sur devis",
  "paymentAccepted": ["Virement bancaire", "Chèque"],
  
  "hasMap": "https://www.google.com/maps/place/France",
  
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Jean-Michel B."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "L'équipe sait rendre simples des sujets complexes. Leur approche humaine et rigoureuse favorise une vraie prise de conscience sur les enjeux de prévention, de communication et de cohésion en entreprise."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person", 
        "name": "Guillaume H"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "L'équipe a animé une formation SSCT claire, rythmée et participative pour les membres de notre CSE. Leur franc-parler, leur pédagogie et leur approche terrain ont rendu le contenu accessible et immédiatement utile."
    }
  ]
};

export const articleSchemas = {
  "conduite-changement": {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Conduite du changement : les erreurs à éviter pour réussir vos transformations internes",
    "description": "Une mise en lumière des pièges les plus fréquents en phase de transition et des conseils pour fédérer vos équipes autour du changement.",
    "author": {
      "@type": "Person",
      "name": "Lylia Mokrani",
      "jobTitle": "Consultante RH experte"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BLM Consult"
    },
    "datePublished": "2024-06-01",
    "dateModified": "2024-06-01",
    "image": "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    "articleSection": "Conduite du changement",
    "wordCount": "1200",
    "timeRequired": "PT5M",
    "inLanguage": "fr-FR"
  },
  
  "accompagner-managers": {
    "@context": "https://schema.org",
    "@type": "Article", 
    "headline": "Accompagner les managers à faire face à la complexité du travail moderne",
    "description": "Un regard sur les défis actuels du management et les solutions d'accompagnement proposées.",
    "author": {
      "@type": "Person",
      "name": "Lylia Mokrani",
      "jobTitle": "Consultante RH experte"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BLM Consult"
    },
    "datePublished": "2024-06-08",
    "dateModified": "2024-06-08",
    "image": "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    "articleSection": "Management",
    "wordCount": "1400",
    "timeRequired": "PT6M",
    "inLanguage": "fr-FR"
  }
};