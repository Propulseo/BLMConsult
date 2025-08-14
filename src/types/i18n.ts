// Internationalization type definitions
export type Language = 'en' | 'fr' | 'pt';

export interface TranslationKeys {
  // Navigation
  nav: {
    home: string;
    about: string;
    services: string;
    blog: string;
    raparigas: string;
    contact: string;
    languageSelector: string;
    servicesDropdown: {
      conseilRH: string;
      conseilRHDesc: string;
      coaching: string;
      coachingDesc: string;
      formations: string;
      formationsDesc: string;
    };
  };
  
  // Common elements
  common: {
    loading: string;
    error: string;
    readMore: string;
    contactUs: string;
    getQuote: string;
    learnMore: string;
    backToTop: string;
    onQuote: string;
    callNow: string;
    sendMessage: string;
    response48h: string;
    freeDiagnostic: string;
    personalizedQuote: string;
    discoverAllServices: string;
    excellenceApproach: string;
    structuredApproach: string;
    learnMoreMethod: string;
  };
  
  // Home page
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
      secondaryCta: string;
      expertise: string;
      name: string;
      jobTitle: string;
      quote: string;
      author: string;
    };
    features: {
      title: string;
      subtitle: string;
      feature1: {
        title: string;
        description: string;
      };
      feature2: {
        title: string;
        description: string;
      };
      feature3: {
        title: string;
        description: string;
      };
    };
    services: {
      service1: {
        title: string;
        description: string;
        features: string[];
        badge: string;
      };
      service2: {
        title: string;
        description: string;
        features: string[];
        badge: string;
      };
      service3: {
        title: string;
        description: string;
        features: string[];
        badge: string;
      };
      service4: {
        title: string;
        description: string;
        features: string[];
        badge: string;
      };
    };
    servicesSection: {
      title: string;
      subtitle: string;
      onQuote: string;
      learnMore: string;
    };
    stats: {
      clients: string;
      satisfaction: string;
      experience: string;
    };
    testimonials: {
      title: string;
      subtitle: string;
      testimonial1: {
        name: string;
        content: string;
      };
      testimonial2: {
        name: string;
        content: string;
      };
      testimonial3: {
        name: string;
        content: string;
      };
    };
    contactCTA: {
      title: string;
      subtitle: string;
      callButton: string;
      messageButton: string;
      response48h: string;
      freeDiagnostic: string;
      personalizedQuote: string;
    };
    process: {
      title: string;
      subtitle: string;
      step1: {
        title: string;
        description: string;
      };
      step2: {
        title: string;
        description: string;
      };
      step3: {
        title: string;
        description: string;
      };
      step4: {
        title: string;
        description: string;
      };
      learnMoreButton: string;
    };
    blog: {
      post1: {
        title: string;
        excerpt: string;
        category: string;
        date: string;
        readTime: string;
      };
      post2: {
        title: string;
        excerpt: string;
        category: string;
        date: string;
        readTime: string;
      };
      post3: {
        title: string;
        excerpt: string;
        category: string;
        date: string;
        readTime: string;
      };
    };
  };
  
  // About page
  about: {
    title: string;
    subtitle: string;
    content: string;
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
      stats: {
        experience: string;
        sessions: string;
        satisfaction: string;
      };
      profile: {
        name: string;
        role: string;
      };
    };
    profile: {
      badge: string;
      title: string;
      subtitle: string;
      certified: string;
    };
    certifications: {
      rps: {
        title: string;
        description: string;
      };
      formateur: {
        title: string;
        description: string;
      };
      coach: {
        title: string;
        description: string;
      };
    };
    memberships: {
      title: string;
      subtitle: string;
      active: string;
      supervision: string;
      recognition: string;
    };
    interventions: {
      title: string;
      subtitle: string;
      accompagnement: {
        title: string;
        description: string;
      };
      rps: {
        title: string;
        description: string;
      };
      qvct: {
        title: string;
        description: string;
      };
      mediation: {
        title: string;
        description: string;
      };
      formation: {
        title: string;
        description: string;
      };
      cnv: {
        title: string;
        description: string;
      };
    };
    values: {
      title: string;
      subtitle: string;
      respect: {
        title: string;
        items: string[];
      };
      responsabilite: {
        title: string;
        items: string[];
      };
      exigence: {
        title: string;
        items: string[];
      };
      plaisir: {
        title: string;
        items: string[];
      };
    };
    commitments: {
      title: string;
      subtitle: string;
      confidentialite: {
        title: string;
        items: string[];
      };
      procedures: {
        title: string;
        items: string[];
      };
    };
    philosophy: {
      title: string;
      quote: string;
      author: string;
      role: string;
    };
    advantages: {
      title: string;
      subtitle: string;
      experience: {
        title: string;
        description: string;
      };
      ecoute: {
        title: string;
        description: string;
      };
      outils: {
        title: string;
        description: string;
      };
      professionnels: {
        title: string;
        description: string;
      };
    };
    mission: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
  };
  
  // Services page
  services: {
    title: string;
    subtitle: string;
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
      discoverButton: string;
      quoteButton: string;
    };
    expertise: {
      title: string;
      subtitle: string;
    };
    mainServices: {
      conseil: {
        title: string;
        subtitle: string;
        description: string;
        features: string[];
        benefits: string[];
        duration: string;
        price: string;
        badge: string;
        learnMore: string;
      };
      coaching: {
        title: string;
        subtitle: string;
        description: string;
        features: string[];
        benefits: string[];
        duration: string;
        price: string;
        badge: string;
        learnMore: string;
      };
      formations: {
        title: string;
        subtitle: string;
        description: string;
        features: string[];
        benefits: string[];
        duration: string;
        price: string;
        badge: string;
        learnMore: string;
      };
      mediation: {
        title: string;
        subtitle: string;
        description: string;
        features: string[];
        benefits: string[];
        duration: string;
        price: string;
        badge: string;
        learnMore: string;
      };
    };
    process: {
      title: string;
      subtitle: string;
      steps: {
        step1: {
          title: string;
          description: string;
        };
        step2: {
          title: string;
          description: string;
        };
        step3: {
          title: string;
          description: string;
        };
        step4: {
          title: string;
          description: string;
        };
      };
    };
    sectors: {
      title: string;
      subtitle: string;
      private: {
        name: string;
        description: string;
      };
      local: {
        name: string;
        description: string;
      };
      public: {
        name: string;
        description: string;
      };
      associations: {
        name: string;
        description: string;
      };
      health: {
        name: string;
        description: string;
      };
      education: {
        name: string;
        description: string;
      };
    };
    guarantees: {
      title: string;
      subtitle: string;
      satisfaction: {
        title: string;
        description: string;
      };
      results: {
        title: string;
        description: string;
      };
      support: {
        title: string;
        description: string;
      };
    };
    cta: {
      title: string;
      subtitle: string;
      diagnosticButton: string;
      brochureButton: string;
      response48h: string;
      personalizedQuote: string;
      expertSupport: string;
    };
    common: {
      duration: string;
      price: string;
    };
    service1: {
      title: string;
      description: string;
      features: string[];
    };
    service2: {
      title: string;
      description: string;
      features: string[];
    };
    service3: {
      title: string;
      description: string;
      features: string[];
    };
  };
  
  // Contact page
  contact: {
    title: string;
    subtitle: string;
    responseTime: string;
    whyBLM: {
      title: string;
      subtitle: string;
      custom: {
        title: string;
        description: string;
      };
      expertise: {
        title: string;
        description: string;
      };
      human: {
        title: string;
        description: string;
      };
      results: {
        title: string;
        description: string;
      };
    };
    form: {
      title: string;
      name: string;
      email: string;
      function: string;
      functionPlaceholder: string;
      company: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
    services: string[];
    contactInfo: {
      title: string;
      email: {
        title: string;
        content: string;
        description: string;
      };
      phone: {
        title: string;
        content: string;
        description: string;
      };
      location: {
        title: string;
        content: string;
        description: string;
      };
    };
    nextSteps: {
      title: string;
      subtitle: string;
      step1: {
        title: string;
        description: string;
      };
      step2: {
        title: string;
        description: string;
      };
      step3: {
        title: string;
        description: string;
      };
      callNow: string;
      sendMessage: string;
    };
  };
  
  // Contact CTA Section
  contactCTA: {
    title: string;
    subtitle: string;
    callButton: string;
    messageButton: string;
    response48h: string;
    freeDiagnostic: string;
    personalizedQuote: string;
  };
  
  // Footer
  footer: {
    company: string;
    description: string;
    quickLinks: string;
    contact: string;
    followUs: string;
    copyright: string;
    legal: {
      title: string;
      mentionsLegales: string;
      politiqueConfidentialite: string;
      cgv: string;
    };
    qualiopi: {
      certification: string;
      downloadCertificate: string;
    };
    madeWithPassion: string;
  };
  
  // SEO Meta
  meta: {
    title: string;
    description: string;
    keywords: string;
  };

  conseilRH: {
    title: string;
    subtitle: string;
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
      diagnosticButton: string;
      brochureButton: string;
    };
    services: {
      title: string;
      subtitle: string;
      rps: {
        title: string;
        subtitle: string;
        description: string;
        features: string[];
        benefits: string[];
        badge: string;
      };
      changement: {
        title: string;
        subtitle: string;
        description: string;
        features: string[];
        benefits: string[];
        badge: string;
      };
      qvct: {
        title: string;
        subtitle: string;
        description: string;
        features: string[];
        benefits: string[];
        badge: string;
      };
    };
    process: {
      title: string;
      subtitle: string;
      steps: {
        step1: {
          title: string;
          description: string;
        };
        step2: {
          title: string;
          description: string;
        };
        step3: {
          title: string;
          description: string;
        };
        step4: {
          title: string;
          description: string;
        };
      };
    };
    expertise: {
      title: string;
      subtitle: string;
      experience: {
        title: string;
        description: string;
      };
      certifications: {
        title: string;
        description: string;
      };
      approach: {
        title: string;
        description: string;
      };
      results: {
        title: string;
        description: string;
      };
    };
    common: {
      analysis: string;
      benefits: string;
      learnMore: string;
    };
  };

  coaching: {
    title: string;
    subtitle: string;
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
      discoverButton: string;
      quoteButton: string;
    };
    types: {
      title: string;
      subtitle: string;
      individuel: {
        title: string;
        subtitle: string;
        description: string;
        features: string[];
        benefits: string[];
        duration: string;
        price: string;
        badge: string;
      };
    };
    contexte: {
      title: string;
      subtitle: string;
      cycles: {
        title: string;
        description: string;
      };
      complexite: {
        title: string;
        description: string;
      };
      competences: {
        title: string;
        description: string;
      };
      exigences: {
        title: string;
        description: string;
      };
    };
    problematiques: {
      title: string;
      subtitle: string;
      items: string[];
    };
    approche: {
      title: string;
      subtitle: string;
      travail: {
        title: string;
        description: string;
      };
      relation: {
        title: string;
        description: string;
      };
      positionnement: {
        title: string;
        description: string;
      };
      accompagnement: {
        title: string;
        description: string;
      };
    };
    process: {
      title: string;
      subtitle: string;
      steps: {
        step1: {
          title: string;
          description: string;
        };
        step2: {
          title: string;
          description: string;
        };
        step3: {
          title: string;
          description: string;
        };
        step4: {
          title: string;
          description: string;
        };
      };
    };
    common: {
      problematiques: string;
      benefits: string;
      duration: string;
      price: string;
      learnMore: string;
    };
  };

  formations: {
    title: string;
    subtitle: string;
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
      programButton: string;
      catalogButton: string;
      satisfaction: string;
      satisfactionText: string;
    };
    approche: {
      title: string;
      subtitle: string;
      intra: {
        title: string;
        description: string;
      };
      accessibilite: {
        title: string;
        description: string;
      };
      pedagogie: {
        title: string;
        description: string;
      };
      partage: {
        title: string;
        description: string;
      };
      ingenierie: {
        title: string;
        description: string;
      };
      accompagnement: {
        title: string;
        description: string;
      };
    };
    axes: {
      title: string;
      subtitle: string;
      efficacite: {
        title: string;
        description: string;
        prevention: {
          title: string;
          description: string;
          duration: string;
          participants: string;
        };
        stress: {
          title: string;
          description: string;
          duration: string;
          participants: string;
        };
      };
      sante: {
        title: string;
        description: string;
        harcelement: {
          title: string;
          description: string;
          duration: string;
          participants: string;
        };
        sexisme: {
          title: string;
          description: string;
          duration: string;
          participants: string;
        };
        rps: {
          title: string;
          description: string;
          duration: string;
          participants: string;
        };
      };
    };
    engagements: {
      title: string;
      subtitle: string;
      humaine: {
        title: string;
        description: string;
      };
      confidentialite: {
        title: string;
        description: string;
      };
      adaptabilite: {
        title: string;
        description: string;
      };
      suivi: {
        title: string;
        description: string;
      };
    };
    common: {
      download: string;
      fichePDF: string;
      duration: string;
      participants: string;
    };
  };

  blog: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      change: string;
      management: string;
      crisis: string;
      formation: string;
      mediation: string;
      coaching: string;
    };
    articles: {
      change: {
        title: string;
        excerpt: string;
        date: string;
        readTime: string;
        category: string;
      };
      managers: {
        title: string;
        excerpt: string;
        date: string;
        readTime: string;
        category: string;
      };
      crisis: {
        title: string;
        excerpt: string;
        date: string;
        readTime: string;
        category: string;
      };
      collaboration: {
        title: string;
        excerpt: string;
        date: string;
        readTime: string;
        category: string;
      };
      mediation: {
        title: string;
        excerpt: string;
        date: string;
        readTime: string;
        category: string;
      };
      coaching: {
        title: string;
        excerpt: string;
        date: string;
        readTime: string;
        category: string;
      };
    };
    common: {
      readMore: string;
      readTime: string;
    };
  };
}

export interface LanguageConfig {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
  dateFormat: string;
  numberFormat: {
    locale: string;
    currency: string;
  };
}