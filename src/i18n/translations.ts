export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    // Topbar
    topbar: {
      location: 'Matola Rio, Boane - Moçambique',
      phones: '+258 84 539 3269 | +258 86 301 3135',
      email: 'contacto@dcsecuregroup.co.mz',
      changeLanguage: 'Idioma',
    },

    // Navbar
    nav: {
      home: 'Home',
      about: 'Quem Somos',
      services: 'Serviços & Soluções',
      contacts: 'Contactos',
      careers: 'Trabalhe Connosco',
      viewAllServices: 'Ver Todos os Serviços →',
      emergencyCall: 'Linha de Emergência 24/7',
    },

    // Services Names (used in dropdown & cards)
    servicesList: {
      vigilancia: {
        name: 'Vigilância Patrimonial',
        badge: 'Alínea a)',
        shortDesc: 'Guarda armada e desarmada em instalações industriais, sedes corporativas e complexos residenciais.',
      },
      acessos: {
        name: 'Vigilância e Controlo de Acessos',
        badge: 'Alínea b)',
        shortDesc: 'Triagem biométrica, inspeção veicular, receção qualificada e registo digital de visitantes.',
      },
      valores: {
        name: 'Transporte de Fundos e Valores (CIT)',
        badge: 'Alínea c)',
        shortDesc: 'Logística de custódia com viaturas blindadas certificadas, escolta tática e apólices integrais.',
      },
      vip: {
        name: 'Segurança Pessoal (Proteção VIP)',
        badge: 'Alínea d)',
        shortDesc: 'Agentes de proteção aproximada (CPO) com condução defensiva e planeamento de rotas para executivos.',
      },
      cctv: {
        name: 'Sistemas de Segurança Electrónica & CCTV',
        badge: 'Alínea e)',
        shortDesc: 'CCTV IP com IA perimétrica, alarmes contra intrusão e integração direta com o centro tático.',
      },
      rastreio: {
        name: 'Rastreio de Viaturas via Satélite',
        badge: 'Alínea f)',
        shortDesc: 'Telemetria em tempo real, cercas virtuais, monitoramento de combustível e bloqueio remoto imediato.',
      },
      treino: {
        name: 'Formação & Treino de Guardas',
        badge: 'Alínea g)',
        shortDesc: 'Academia própria com tiro defensivo, defesa pessoal, ética de atendimento e primeiros socorros.',
      },
      k9: {
        name: 'Equipas Cinotécnicas (K9)',
        badge: 'Alínea h)',
        shortDesc: 'Binómios condutor-cão de guarda de raças nobres para deteção preventiva e dissuasão perimétrica.',
      },
    },

    // Hero Section
    hero: {
      badge: 'DC SECURE GROUP • MOÇAMBIQUE',
      slide1: {
        title: 'Protegemos O Que Mais Importa.',
        subtitle: 'Serviços de segurança privada personalizados para empresas e residências em Moçambique com equipas homologadas de prontidão imediata.',
        ctaPrimary: 'Saber Mais',
        ctaSecondary: 'Fale Connosco',
      },
      slide2: {
        title: 'Tecnologia Tática e Reação 24 Horas.',
        subtitle: 'Central de operações permanente, monitoramento por câmaras térmicas e patrulhas motorizadas de alta capacidade de intervenção.',
        ctaPrimary: 'Nossos Serviços',
        ctaSecondary: 'Solicitar Cotação',
      },
      slide3: {
        title: 'Proteção Executiva e Transporte de Valores.',
        subtitle: 'Escolta armada de alta fidelidade para delegações empresariais e logística blindada de ativos sob custódia legal.',
        ctaPrimary: 'Conheça a Empresa',
        ctaSecondary: 'Contactar Equipa',
      },
    },

    // About Section (Home & subpage)
    about: {
      badge: 'QUEM SOMOS • DC SECURE GROUP',
      title: 'Excelência, Rigor e Tecnologia na Proteção de Pessoas e Património',
      paragraph1: 'A DC SECURE GROUP, Lda dedica-se a oferecer soluções completas e personalizadas de segurança. Nosso compromisso é proporcionar tranquilidade e confiança aos nossos clientes, com processos claros, atendimento humanizado e profissional.',
      paragraph2: 'Trabalhamos com valores que se ajustam ao orçamento dos clientes, mantendo sempre a qualidade e eficiência dos serviços prestados. Registada sob Conservatória nº 100709287 e NUIT 400724423 com sede própria em Boane, Matola Rio.',
      badgeHQ: 'Sede Própria Operacional',
      locationHQ: 'Boane, Matola Rio • DUAT 32',
      checkpoints: [
        'Vigilância Patrimonial Armada e Desarmada',
        'Vigilância e Controlo de Acessos Rigoroso',
        'Transporte de Fundos e Valores (CIT) Blindado',
        'Segurança Pessoal e Proteção VIP Especializada',
        'Sistemas de Segurança Electrónica & CCTV com IA',
        'Rastreio de Frotas e Cargas via Satélite 24/7',
      ],
      btnHistory: 'Conhecer a Nossa História',
      stats: {
        readiness: 'Prontidão Operacional',
        readinessVal: '24/7',
        coverage: 'Cobertura Provincial',
        coverageVal: '100%',
        compliance: 'Conformidade Legal',
        complianceVal: '100%',
        satisfaction: 'Índice de Retenção',
        satisfactionVal: '98%',
      },
    },

    // Services Section (Home)
    servicesSection: {
      badge: 'SOLUÇÕES INTEGRADAS',
      title: 'Nossos Serviços Especializados',
      subtitle: 'Estruturados com rigor legal e operacional para atender desde residências até portos, mineradoras e corporações multinacionais.',
      btnQuote: 'Solicitar Cotação',
      btnDetails: 'Detalhes Técnicos',
      featuresTitle: 'Destaques Operacionais:',
    },

    // Operations Showcase (CORT & Fleet)
    operations: {
      badge: 'INFRAESTRUTURA TÁTICA',
      title: 'Centro de Operações e Monitoramento Permanente (CORT)',
      subtitle: 'Controlo ininterrupto com inteligência de dados, despacho tático motorizado e comunicação via rádio digital encriptada.',
      fleetTitle: 'Frota Tática 4x4 e Viaturas Blindadas',
      fleetDesc: 'Veículos todo-terreno equipados com telemetria por satélite, kits de trauma e iluminação tática para reação veloz.',
      cctvTitle: 'Mural de Videovigilância IP & IA',
      cctvDesc: 'Deteção perimétrica antecipada, reconhecimento de placas de matrículas e supervisão de rondas em tempo real.',
      gpsTitle: 'Rastreio Satelital de Agentes e Frotas',
      gpsDesc: 'Pontos de controlo via RFID/QR Code e botão de pânico com geolocalização instantânea.',
    },

    // How We Work
    howWeWork: {
      badge: 'METODOLOGIA DE RIGOR',
      title: 'Como Trabalhamos',
      subtitle: 'Nosso processo operacional é desenhado para eliminar vulnerabilidades desde o primeiro dia.',
      step1Title: '1. Diagnóstico de Risco',
      step1Desc: 'Inspeção técnica presencial para mapear vulnerabilidades perimétricas e fluxos de pessoas.',
      step2Title: '2. Desenho do Plano Tático',
      step2Desc: 'Elaboração das ordens de posto, protocolos de contingência e dimensionamento de efetivos.',
      step3Title: '3. Implantação & Formação',
      step3Desc: 'Agentes rigorosamente fardados, equipados e instruídos conforme as regras específicas do cliente.',
      step4Title: '4. Supervisão Contínua 24/7',
      step4Desc: 'Rondas aleatórias de inspetores, relatórios digitais diários e monitoramento a partir do CORT.',
    },

    // Why Choose Us
    whyChooseUs: {
      badge: 'NOSSOS DIFERENCIAIS',
      title: 'Por Que Confiar na DC SECURE GROUP?',
      diff1Title: 'Homologação e Rigor Legal',
      diff1Desc: 'Empresa 100% legalizada perante os Ministérios competentes de Moçambique, com NUIT 400724423.',
      diff2Title: 'Efetivo Selecionado & Recapacitado',
      diff2Desc: 'Verificação minuciosa de registo criminal, avaliação psicológica e treino contínuo na academia.',
      diff3Title: 'Tecnologia Transparente',
      diff3Desc: 'Relatórios eletrónicos de rondas enviados aos clientes em tempo real, sem papelada ou atrasos.',
      diff4Title: 'Preço Justo e Adaptável',
      diff4Desc: 'Propostas que se enquadram perfeitamente no orçamento corporativo com máxima qualidade de entrega.',
    },

    // Testimonials
    testimonials: {
      badge: 'CONFIANÇA COMPROVADA',
      title: 'O Que Dizem os Nossos Clientes',
      subtitle: 'A tranquilidade de quem confia a proteção do seu património à DC SECURE GROUP.',
      t1Text: 'A prontidão da equipa de reação rápida e a postura dos agentes no nosso parque logístico na Matola transformaram a nossa segurança.',
      t1Author: 'Gestão de Infraestruturas e Logística',
      t1Role: 'Cliente Corporativo - Matola Rio',
      t2Text: 'Excelente atendimento, guardas educados, rigorosos no controlo de acessos e total transparência nos relatórios diários de ronda.',
      t2Author: 'Administração de Condomínio Residencial',
      t2Role: 'Cliente Residencial VIP - Maputo',
      t3Text: 'O transporte de valores e a escolta tática cumprem com os mais rigorosos padrões de segurança internacional. Altamente recomendados.',
      t3Author: 'Diretor Financeiro & Operações',
      t3Role: 'Grupo Comercial e Industrial - Boane',
    },

    // FAQ Section
    faq: {
      badge: 'DÚVIDAS FREQUENTES',
      title: 'Perguntas Frequentes',
      subtitle: 'Esclareça rapidamente as principais questões sobre a nossa atuação operacional e contratação.',
      q1: 'Quais regiões de Moçambique a DC SECURE GROUP atende?',
      a1: 'Nossa sede operacional fica em Boane (Matola Rio), cobrindo com prontidão imediata toda a Província e Cidade de Maputo, Matola, Boane e o Corredor Logístico da EN4. Também atendemos operações industriais, mineiras e eventos especiais em todo o território nacional.',
      q2: 'Os agentes de segurança são armados?',
      a2: 'Sim. Dispomos de agentes armados com armas devidamente autorizadas e licenciadas pelas autoridades policiais moçambicanas, bem como efetivos desarmados para controlo de acessos e receção corporativa, dependendo da necessidade do cliente.',
      q3: 'A empresa possui seguro de responsabilidade civil?',
      a3: 'Sim, todas as operações patrimoniais e de transporte de valores da DC SECURE GROUP são cobertas por apólices de seguro de responsabilidade civil para salvaguardar totalmente os bens dos nossos clientes.',
      q4: 'Como é feito o controlo e supervisão das rondas nos postos?',
      a4: 'Utilizamos bastões de ronda eletrónicos e pontos de marcação por QR Code/NFC com envio em tempo real ao nosso Centro de Operações (CORT). Além disso, inspetores motorizados realizam fiscalizações aleatórias diurnas e noturnas.',
      q5: 'Qual é o prazo para implantação de um novo posto de segurança?',
      a5: 'Após a aprovação do plano de segurança e assinatura do contrato, a implantação pode ser concluída em um prazo de 24 a 48 horas para postos padrão, ou sob cronograma personalizado para grandes complexos.',
      q6: 'Como posso solicitar uma cotação para a minha empresa ou residência?',
      a6: 'Pode preencher o nosso formulário de contacto no site, enviar uma mensagem direta pelo WhatsApp (+258 84 539 3269) ou agendar uma visita de avaliação de risco gratuita com um dos nossos consultores.',
    },

    // Contact Section
    contact: {
      badge: 'FALE COM A NOSSA EQUIPA',
      title: 'Solicite uma Avaliação de Segurança Gratuita',
      subtitle: 'Nossa equipa de consultores táticos está pronta para analisar as suas instalações e elaborar uma proposta à medida.',
      nameLabel: 'Nome Completo',
      namePlaceholder: 'Seu nome ou da sua empresa',
      phoneLabel: 'Número de Telefone / WhatsApp',
      phonePlaceholder: '+258 84 000 0000',
      emailLabel: 'Endereço de E-mail',
      emailPlaceholder: 'seuemail@empresa.co.mz',
      serviceLabel: 'Serviço Pretendido',
      servicePlaceholder: 'Selecione o serviço...',
      messageLabel: 'Detalhes do Pedido',
      messagePlaceholder: 'Descreva a localização, quantidade de postos ou necessidades específicas...',
      btnSubmit: 'Enviar Mensagem',
      sending: 'A enviar mensagem...',
      successMsg: 'Mensagem enviada com sucesso! A nossa equipa entrará em contacto em breve.',
      errorMsg: 'Ocorreu um erro ao enviar. Por favor utilize o nosso WhatsApp ou telefone direto.',
      addressTitle: 'Sede Operacional:',
      addressValue: 'Matola Rio, Boane - Moçambique (DUAT 32)',
      workingHoursTitle: 'Atendimento Operacional:',
      workingHoursValue: 'Central de Operações: 24 Horas / 365 Dias',
      directContactTitle: 'Contactos Diretos:',
    },

    // Footer
    footer: {
      aboutText: 'DC SECURE GROUP, Lda - Soluções completas e integradas de segurança privada em Moçambique. Rigor tático, atendimento humanizado e proteção de confiança para o seu património.',
      quickLinksTitle: 'Navegação Rápida',
      servicesTitle: 'Serviços Principais',
      legalTitle: 'Conformidade e Registo',
      registeredEntity: 'Conservatória das Entidades: Nº 100709287',
      nuit: 'NUIT Oficial: 400724423',
      hqAddress: 'Sede Própria: Boane, Matola Rio, Moçambique',
      rightsReserved: 'Todos os direitos reservados.',
      devCredit: 'Website desenvolvido por : LG TecServ',
    },

    // Floating Widgets
    floating: {
      whatsappChat: 'Fale Connosco no WhatsApp',
      quickQuote: 'Simular Cotação',
      callNow: 'Ligue Agora',
      backToTop: 'Voltar ao Topo',
    },

    // Subpage Quem Somos
    quemSomosPage: {
      badge: 'INSTITUCIONAL • DC SECURE GROUP',
      title: 'Quem Somos',
      subtitle: 'A tranquilidade que você merece, com a confiança que você precisa em Moçambique.',
      heroBreadcrumbHome: 'Home',
      heroBreadcrumbAbout: 'Quem Somos',
      heroCta: 'Falar Connosco',
      historyTitle: 'Segurança de Alto Padrão Adaptada à Realidade Nacional',
      historyP1: 'A DC SECURE GROUP, Lda nasceu com a missão de redefinir os parâmetros de proteção patrimonial, escolta armada e transporte de valores em Moçambique. Combinamos disciplina militar, atendimento humanizado e soluções tecnológicas integradas.',
      historyP2: 'Sediada estrategicamente em Boane, Matola Rio, com acesso privilegiado ao Corredor de Maputo e à EN4, a empresa mantém prontidão tática em toda a província de Maputo e operações em território nacional.',
      legalRegistry: 'Conservatória das Entidades:',
      legalRegistryVal: 'Nº 100709287',
      nuitLabel: 'Identificação Fiscal (NUIT):',
      nuitVal: '400724423',
      ctaTalkTeam: 'Fale com a Nossa Equipa',
      ctaCatalog: 'Catálogo de Serviços',
      missionTitle: 'Missão',
      missionDesc: 'Salvaguardar vidas, patrimónios e valores corporativos com eficiência inegociável, resposta tática veloz e integridade absoluta.',
      visionTitle: 'Visão',
      visionDesc: 'Ser a empresa de segurança privada de maior prestígio e eficiência tecnológica em Moçambique, reconhecida pelo rigor dos seus guardas.',
      valuesTitle: 'Valores',
      valuesDesc: 'Disciplina tática, transparência radical, respeito à legislação nacional, atendimento humano e prontidão permanente.',
      pillarsTitle: 'Nossos 6 Pilares de Rigor Operacional',
      pillar1Title: 'Homologação e Conformidade Legal',
      pillar1Desc: 'Empresa 100% legalizada perante as autoridades moçambicanas, registada sob Conservatória nº 100709287 e NUIT 400724423.',
      pillar2Title: 'Central Operacional 24/7/365',
      pillar2Desc: 'Centro de comando permanente com despacho imediato de viaturas táticas e agentes armados para pronta intervenção.',
      pillar3Title: 'Recrutamento & Formação Militarizada',
      pillar3Desc: 'Processo de triagem minucioso, verificação de antecedentes criminais e treino físico e tático contínuo para cada guarda.',
      pillar4Title: 'Seguro de Responsabilidade Civil',
      pillar4Desc: 'Apólice de seguro abrangente para proteger totalmente as operações patrimoniais e o transporte de fundos em trânsito.',
      pillar5Title: 'Tecnologia & Rastreio Via Satélite',
      pillar5Desc: 'Sistemas avançados de telemetria e posicionamento global em tempo real para frotas blindadas e patrulhas de ronda.',
      pillar6Title: 'Supervisão & Fiscalização Noturna',
      pillar6Desc: 'Oficiais inspetores realizam rondas aleatórias diurnas e noturnas para garantir 100% de vigília ativa nos postos dos clientes.',
    },

    // Subpage Serviços
    servicosPage: {
      badge: 'PORTFÓLIO OPERACIONAL',
      title: 'Serviços & Soluções',
      subtitle: 'Conheça o nosso catálogo completo de soluções homologadas de segurança privada para empresas, indústrias e residências.',
      breadcrumbHome: 'Home',
      breadcrumbServices: 'Serviços',
      ctaHero: 'Solicitar Proposta',
      catalogIntroTitle: 'Soluções Desenvolvidas para Cenários de Alto Desafio',
      catalogIntroDesc: 'Cada serviço da DC SECURE GROUP segue protocolos internacionais de segurança física adaptados às exigências legais e geográficas de Moçambique.',
      requestQuoteBtn: 'Solicitar Cotação para Este Serviço',
      ctaBannerTitle: 'Precisa de um Projeto de Segurança Personalizado?',
      ctaBannerDesc: 'Realizamos vistorias técnicas completas para desenhar a solução ideal para o seu orçamento e nível de risco.',
    },

    // Subpage Contactos
    contactosPage: {
      badge: 'ATENDIMENTO 24/7',
      title: 'Contactos & Localização',
      subtitle: 'Estamos prontos para atender a sua solicitação com rapidez, discrição e excelência técnica em qualquer ponto de Moçambique.',
      breadcrumbHome: 'Home',
      breadcrumbContacts: 'Contactos',
      directChannelsTitle: 'Canais Diretos de Comunicação',
      callCenterTitle: 'Linha Geral & Emergência:',
      whatsappTitle: 'WhatsApp Comercial & Cotações:',
      emailTitle: 'Correio Electrónico:',
      officeTitle: 'Sede e Instalações Operacionais:',
      officeDesc: 'Matola Rio, Boane - Província de Maputo, Moçambique. Próximo ao Corredor da EN4.',
      formCardTitle: 'Envie-nos uma Mensagem Direta',
      mapTitle: 'Nossa Localização em Boane / Matola Rio',
    },

    // Subpage Trabalhe Connosco
    trabalheConnoscoPage: {
      badge: 'RECRUTAMENTO & CARREIRAS',
      title: 'Trabalhe Connosco',
      subtitle: 'Junte-se a uma das empresas de segurança privada que mais cresce em Moçambique. Valorizamos a disciplina, a ética e a dedicação.',
      breadcrumbHome: 'Home',
      breadcrumbCareers: 'Trabalhe Connosco',
      requirementsTitle: 'Requisitos Básicos de Candidatura:',
      req1: 'Nacionalidade Moçambicana com Bilhete de Identidade (BI) válido.',
      req2: 'Idade compreendida entre os 21 e os 45 anos.',
      req3: 'Registo Criminal totalmente limpo (certificado de registo criminal obrigatório).',
      req4: 'Habilitações literárias mínimas: 10ª ou 12ª Classe do Sistema Nacional de Ensino.',
      req5: 'Serviço militar cumprido ou experiência prévia comprovada em segurança privada (fator preferencial).',
      req6: 'Boa condição física e aptidão médica atestada.',
      howToApplyTitle: 'Como Submeter a sua Candidatura:',
      howToApplyDesc: 'Pode entregar o seu Curriculum Vitae impresso diretamente na nossa sede em Boane (Matola Rio) ou enviar por e-mail com o assunto "Candidatura a Guarda":',
      sendCvBtn: 'Enviar CV por E-mail',
      whatsappRecruitment: 'Contacto de Recursos Humanos via WhatsApp',
    },

    // 404 Page
    notFound: {
      code: '404',
      badge: 'PÁGINA NÃO ENCONTRADA',
      title: 'Lamentamos, a página que procura não existe ou foi movida.',
      desc: 'O link que acedeu pode estar incorreto ou o conteúdo foi reorganizado. Utilize os botões abaixo para navegar com segurança pelo nosso website.',
      btnHome: 'Voltar à Página Inicial',
      btnServices: 'Ver Serviços Disponíveis',
      btnContacts: 'Falar com o Suporte',
    },
  },

  en: {
    // Topbar
    topbar: {
      location: 'Matola Rio, Boane - Mozambique',
      phones: '+258 84 539 3269 | +258 86 301 3135',
      email: 'contacto@dcsecuregroup.co.mz',
      changeLanguage: 'Language',
    },

    // Navbar
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services & Solutions',
      contacts: 'Contacts',
      careers: 'Careers',
      viewAllServices: 'View All Services →',
      emergencyCall: '24/7 Emergency Dispatch',
    },

    // Services Names (used in dropdown & cards)
    servicesList: {
      vigilancia: {
        name: 'Asset & Facility Protection',
        badge: 'Category a)',
        shortDesc: 'Armed and unarmed security guarding for industrial facilities, corporate headquarters, and residential complexes.',
      },
      acessos: {
        name: 'Access Control & Surveillance',
        badge: 'Category b)',
        shortDesc: 'Biometric screening, vehicle inspection, professional receptionists, and digital visitor registration.',
      },
      valores: {
        name: 'Cash-In-Transit & Valuables (CIT)',
        badge: 'Category c)',
        shortDesc: 'Custodial logistics using certified armored vehicles, tactical escort, and comprehensive insurance policies.',
      },
      vip: {
        name: 'Executive Protection (VIP Close Protection)',
        badge: 'Category d)',
        shortDesc: 'Certified Close Protection Officers (CPO) with defensive driving skills and route reconnaissance for executives.',
      },
      cctv: {
        name: 'Electronic Security & AI CCTV Systems',
        badge: 'Category e)',
        shortDesc: 'IP CCTV with perimeter AI analytics, intrusion alarms, and direct integration with our tactical command center.',
      },
      rastreio: {
        name: 'Satellite Vehicle & Fleet Tracking',
        badge: 'Category f)',
        shortDesc: 'Real-time telemetry, geofencing, fuel monitoring, remote engine immobilization, and anti-hijacking response.',
      },
      treino: {
        name: 'Security Academy & Guard Training',
        badge: 'Category g)',
        shortDesc: 'In-house certified academy providing defensive shooting, martial arts, human rights compliance, and tactical first aid.',
      },
      k9: {
        name: 'K9 Dog Patrol Units',
        badge: 'Category h)',
        shortDesc: 'Certified handler-canine tactical teams trained for perimeter intruder deterrence and facility contraband detection.',
      },
    },

    // Hero Section
    hero: {
      badge: 'DC SECURE GROUP • MOZAMBIQUE',
      slide1: {
        title: 'Protecting What Matters Most.',
        subtitle: 'Tailored private security solutions for corporations and luxury residences in Mozambique with certified immediate-response teams.',
        ctaPrimary: 'Learn More',
        ctaSecondary: 'Contact Us',
      },
      slide2: {
        title: 'Tactical Technology & 24/7 Rapid Response.',
        subtitle: 'Permanent operations command center, thermal perimeter surveillance, and motorized rapid intervention patrol units.',
        ctaPrimary: 'Our Services',
        ctaSecondary: 'Request a Quote',
      },
      slide3: {
        title: 'Executive Protection & Cash-In-Transit.',
        subtitle: 'High-fidelity armed escort for corporate delegations and armored custody logistics of high-value assets under legal compliance.',
        ctaPrimary: 'About Company',
        ctaSecondary: 'Talk to Team',
      },
    },

    // About Section (Home & subpage)
    about: {
      badge: 'ABOUT US • DC SECURE GROUP',
      title: 'Excellence, Rigor and Technology in Safeguarding Lives and Assets',
      paragraph1: 'DC SECURE GROUP, Lda is committed to delivering comprehensive and tailored security solutions. Our core commitment is to provide peace of mind and unwavering confidence to our clients through transparent processes and high-level professionalism.',
      paragraph2: 'We operate with competitive rates tailored to our clients budgets while preserving maximum operational quality and responsiveness. Officially registered under Entity Registry No. 100709287 and Tax ID NUIT 400724423, based in Boane, Matola Rio.',
      badgeHQ: 'Operational Headquarters',
      locationHQ: 'Boane, Matola Rio • DUAT 32',
      checkpoints: [
        'Armed & Unarmed Physical Asset Guarding',
        'Strict Access Control & Visitor Screening',
        'Armored Cash-In-Transit (CIT) Logistics',
        'Executive VIP Close Protection Officers',
        'Electronic Security & AI-Powered CCTV Systems',
        '24/7 Satellite Fleet & Cargo Telematics',
      ],
      btnHistory: 'Discover Our Story',
      stats: {
        readiness: 'Operational Readiness',
        readinessVal: '24/7',
        coverage: 'Provincial Coverage',
        coverageVal: '100%',
        compliance: 'Legal Compliance',
        complianceVal: '100%',
        satisfaction: 'Client Retention Rate',
        satisfactionVal: '98%',
      },
    },

    // Services Section (Home)
    servicesSection: {
      badge: 'INTEGRATED SOLUTIONS',
      title: 'Our Specialized Security Services',
      subtitle: 'Structured with operational and legal rigor to safeguard residential villas, shipping ports, mining facilities, and global multinationals.',
      btnQuote: 'Request a Quote',
      btnDetails: 'Technical Specs',
      featuresTitle: 'Operational Highlights:',
    },

    // Operations Showcase (CORT & Fleet)
    operations: {
      badge: 'TACTICAL INFRASTRUCTURE',
      title: 'Permanent Command & Monitoring Operations Center (CORT)',
      subtitle: 'Continuous 24/7 control with actionable data intelligence, motorized tactical dispatch, and encrypted digital radio networks.',
      fleetTitle: '4x4 Tactical Patrol Fleet & Armored Vehicles',
      fleetDesc: 'All-terrain vehicles equipped with satellite tracking, emergency trauma response kits, and high-intensity tactical spotlights.',
      cctvTitle: 'IP & AI Video Surveillance Wall',
      cctvDesc: 'Early perimeter intrusion detection, automatic license plate recognition (ALPR), and real-time electronic guard patrol audit.',
      gpsTitle: 'Satellite Tracking of Personnel & Patrols',
      gpsDesc: 'Guard patrol checkpoints with instant NFC/QR Code verification and emergency panic alerts with GPS geolocation.',
    },

    // How We Work
    howWeWork: {
      badge: 'RIGOROUS METHODOLOGY',
      title: 'How We Work',
      subtitle: 'Our operational roadmap is engineered to eliminate vulnerabilities from day one.',
      step1Title: '1. Risk Vulnerability Assessment',
      step1Desc: 'On-site technical evaluation to map perimeter breaches, blind spots, and entry/exit security vulnerabilities.',
      step2Title: '2. Custom Tactical Roadmap',
      step2Desc: 'Drafting of tailored post orders, emergency contingency protocols, and strategic guard staffing schedules.',
      step3Title: '3. Deployment & Stationing',
      step3Desc: 'Smartly uniformed, vetted, and thoroughly instructed officers deployed to client sites following precise SOPs.',
      step4Title: '4. 24/7 Active Oversight',
      step4Desc: 'Random mobile patrol inspections, automated daily digital reports, and real-time oversight by CORT operators.',
    },

    // Why Choose Us
    whyChooseUs: {
      badge: 'OUR ADVANTAGES',
      title: 'Why Choose DC SECURE GROUP?',
      diff1Title: 'Certified Legal Compliance',
      diff1Desc: '100% legalized and authorized under Mozambican regulatory authorities, Tax ID NUIT 400724423.',
      diff2Title: 'Vetted & Continuously Trained Staff',
      diff2Desc: 'In-depth criminal background checks, psychometric testing, and continuous physical-tactical training drills.',
      diff3Title: 'Transparent Digital Reporting',
      diff3Desc: 'Real-time electronic patrol verification and incident logging sent straight to client management without paperwork.',
      diff4Title: 'Adaptive & Cost-Effective Rates',
      diff4Desc: 'Customized commercial plans engineered to fit your corporate budget with zero compromise on protection quality.',
    },

    // Testimonials
    testimonials: {
      badge: 'PROVEN TRUST',
      title: 'What Our Clients Say',
      subtitle: 'The peace of mind of leaders who entrust their physical and corporate security to DC SECURE GROUP.',
      t1Text: 'The rapid intervention squad responsiveness and professional discipline of guards at our logistics hub in Matola transformed our site safety.',
      t1Author: 'Infrastructure & Logistics Management',
      t1Role: 'Corporate Client - Matola Rio',
      t2Text: 'Outstanding customer care, polite and vigilant officers at access points, and complete transparency with automated daily patrol reports.',
      t2Author: 'Residential Condominium Board',
      t2Role: 'VIP Residential Community - Maputo',
      t3Text: 'Their armored cash-in-transit and tactical escort adhere to the highest international security standards. Highly recommended.',
      t3Author: 'Chief Financial Officer',
      t3Role: 'Commercial & Industrial Group - Boane',
    },

    // FAQ Section
    faq: {
      badge: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Got Questions? We Have Answers',
      subtitle: 'Quickly find answers regarding our operational scope, guard deployment, and service contracts.',
      q1: 'Which regions of Mozambique does DC SECURE GROUP cover?',
      a1: 'Our operational headquarters is in Boane (Matola Rio), providing immediate response coverage across Maputo City and Province, Matola, Boane, and the EN4 Logistics Corridor. We also deploy specialized teams for mining sites, ports, and events nationwide.',
      q2: 'Are your security officers armed?',
      a2: 'Yes. We deploy armed officers equipped with firearms fully licensed and authorized by Mozambican police authorities, as well as unarmed personnel for corporate reception and perimeter access control, based on customer requirements.',
      q3: 'Does the company hold commercial liability insurance?',
      a3: 'Yes, all physical guarding and cash-in-transit (CIT) operations carried out by DC SECURE GROUP are protected by comprehensive liability insurance policies safeguarding our clients assets.',
      q4: 'How do you monitor and supervise guard posts on-site?',
      a4: 'We use digital guard tour wands and NFC/QR Code checkpoints that upload scan logs directly to our Command Center (CORT). Furthermore, motorized mobile field supervisors perform unscheduled day and night inspections.',
      q5: 'What is the turnaround time to deploy a new security post?',
      a5: 'Upon security assessment approval and contract signing, standard guard posts can be fully deployed within 24 to 48 hours, or under a tailored rollout schedule for large industrial complexes.',
      q6: 'How can I request a formal quotation for my business or residence?',
      a6: 'You can submit the inquiry form on our website, chat directly with our coordinators on WhatsApp (+258 84 539 3269), or schedule a complimentary on-site risk evaluation with our security specialists.',
    },

    // Contact Section
    contact: {
      badge: 'GET IN TOUCH WITH US',
      title: 'Request a Complimentary Security Assessment',
      subtitle: 'Our tactical advisory team is on standby to inspect your premises and engineer a customized security plan.',
      nameLabel: 'Full Name / Company Name',
      namePlaceholder: 'Your name or enterprise name',
      phoneLabel: 'Phone / WhatsApp Number',
      phonePlaceholder: '+258 84 000 0000',
      emailLabel: 'Email Address',
      emailPlaceholder: 'youremail@company.co.mz',
      serviceLabel: 'Required Service',
      servicePlaceholder: 'Select service type...',
      messageLabel: 'Project Details & Scope',
      messagePlaceholder: 'Specify facility location, number of guard posts, or unique requirements...',
      btnSubmit: 'Send Message',
      sending: 'Transmitting message...',
      successMsg: 'Message delivered successfully! Our operations desk will get in touch shortly.',
      errorMsg: 'Error sending message. Please reach us directly via WhatsApp or phone.',
      addressTitle: 'Operational Headquarters:',
      addressValue: 'Matola Rio, Boane - Mozambique (DUAT 32)',
      workingHoursTitle: 'Operational Hours:',
      workingHoursValue: 'Command Center: 24 Hours / 365 Days',
      directContactTitle: 'Direct Inquiries:',
    },

    // Footer
    footer: {
      aboutText: 'DC SECURE GROUP, Lda - Integrated private security solutions across Mozambique. Tactical discipline, humanized customer care, and trusted protection for your assets.',
      quickLinksTitle: 'Quick Navigation',
      servicesTitle: 'Core Capabilities',
      legalTitle: 'Compliance & Registration',
      registeredEntity: 'Entity Commercial Registry: No. 100709287',
      nuit: 'Official Tax ID (NUIT): 400724423',
      hqAddress: 'Headquarters: Boane, Matola Rio, Mozambique',
      rightsReserved: 'All rights reserved.',
      devCredit: 'Website developed by : LG TecServ',
    },

    // Floating Widgets
    floating: {
      whatsappChat: 'Chat with Us on WhatsApp',
      quickQuote: 'Instant Quote Simulator',
      callNow: 'Call Emergency Line',
      backToTop: 'Back to Top',
    },

    // Subpage Quem Somos
    quemSomosPage: {
      badge: 'INSTITUTIONAL • DC SECURE GROUP',
      title: 'About Us',
      subtitle: 'The peace of mind you deserve, with the confidence you need in Mozambique.',
      heroBreadcrumbHome: 'Home',
      heroBreadcrumbAbout: 'About Us',
      heroCta: 'Talk with Us',
      historyTitle: 'High-Standard Private Security Tailored to National Realities',
      historyP1: 'DC SECURE GROUP, Lda was founded with a clear mission: to redefine the benchmarks of facility protection, armed convoy escort, and cash-in-transit in Mozambique by merging military discipline, humanized care, and integrated technology.',
      historyP2: 'Strategically based in Boane, Matola Rio, with quick direct access to the Greater Maputo Corridor and the EN4 Highway, our enterprise maintains tactical readiness throughout Maputo Province and nationwide operations.',
      legalRegistry: 'Commercial Entity Registry:',
      legalRegistryVal: 'No. 100709287',
      nuitLabel: 'Tax Identification Number (NUIT):',
      nuitVal: '400724423',
      ctaTalkTeam: 'Speak with Our Team',
      ctaCatalog: 'Services Catalog',
      missionTitle: 'Mission',
      missionDesc: 'To safeguard human lives, physical infrastructure, and corporate assets with uncompromised efficiency, rapid tactical response, and absolute integrity.',
      visionTitle: 'Vision',
      visionDesc: 'To be the most prestigious, reliable, and technologically advanced private security provider in Mozambique, respected for guard professionalism.',
      valuesTitle: 'Values',
      valuesDesc: 'Tactical discipline, radical transparency, strict compliance with Mozambican law, respectful humanized conduct, and permanent readiness.',
      pillarsTitle: 'Our 6 Pillars of Operational Excellence',
      pillar1Title: 'Official Authorization & Legal Compliance',
      pillar1Desc: '100% certified and approved under national law, registered under Entity Registry No. 100709287 and Tax ID NUIT 400724423.',
      pillar2Title: '24/7/365 Permanent Command Center',
      pillar2Desc: 'Centralized operations desk with immediate tactical dispatch of motorized patrol units and armed backup teams.',
      pillar3Title: 'Disciplined Vetting & Tactical Academy',
      pillar3Desc: 'Rigorous candidate vetting, criminal background investigations, and ongoing physical and defensive training for every guard.',
      pillar4Title: 'Comprehensive Liability Insurance',
      pillar4Desc: 'Broad commercial liability insurance coverage protecting all on-site asset guarding and cash-in-transit operations.',
      pillar5Title: 'Satellite Telematics & Global GPS Tracking',
      pillar5Desc: 'Advanced satellite telemetry and real-time positioning for armored vehicle convoys and mobile patrol units.',
      pillar6Title: 'Day & Night Mobile Supervision',
      pillar6Desc: 'Field supervisors conduct unscheduled inspections 24 hours a day to guarantee 100% active vigilance at client posts.',
    },

    // Subpage Serviços
    servicosPage: {
      badge: 'OPERATIONAL PORTFOLIO',
      title: 'Services & Solutions',
      subtitle: 'Explore our complete catalog of certified private security solutions engineered for corporate, industrial, and residential clients.',
      breadcrumbHome: 'Home',
      breadcrumbServices: 'Services',
      ctaHero: 'Request a Proposal',
      catalogIntroTitle: 'Engineered for High-Consequence Operational Environments',
      catalogIntroDesc: 'Every security solution provided by DC SECURE GROUP adheres to global physical security standards tailored to Mozambiques regulatory frameworks.',
      requestQuoteBtn: 'Request a Quote for This Service',
      ctaBannerTitle: 'Need a Tailored Security Assessment for Your Facilities?',
      ctaBannerDesc: 'We conduct full on-site technical risk surveys to architect the exact solution matching your operational risk profile and budget.',
    },

    // Subpage Contactos
    contactosPage: {
      badge: '24/7 SUPPORT DESK',
      title: 'Contacts & Base Location',
      subtitle: 'We are on standby to address your security requirements with speed, discretion, and technical precision anywhere in Mozambique.',
      breadcrumbHome: 'Home',
      breadcrumbContacts: 'Contacts',
      directChannelsTitle: 'Direct Inquiries & Helpdesk',
      callCenterTitle: 'General Helpline & Dispatch:',
      whatsappTitle: 'Commercial WhatsApp & Proposals:',
      emailTitle: 'Corporate Email:',
      officeTitle: 'Operational Base & Facilities:',
      officeDesc: 'Matola Rio, Boane - Maputo Province, Mozambique. Close to the EN4 Corridor.',
      formCardTitle: 'Transmit a Direct Inquiry',
      mapTitle: 'Our Strategic Location in Boane / Matola Rio',
    },

    // Subpage Trabalhe Connosco
    trabalheConnoscoPage: {
      badge: 'RECRUITMENT & CAREERS',
      title: 'Work With Us',
      subtitle: 'Join one of the most dynamic and respected private security companies in Mozambique. We honor discipline, integrity, and dedication.',
      breadcrumbHome: 'Home',
      breadcrumbCareers: 'Careers',
      requirementsTitle: 'Basic Candidate Qualifications:',
      req1: 'Mozambican citizenship with a valid National Identity Card (BI).',
      req2: 'Age between 21 and 45 years old.',
      req3: 'Clean criminal record (official certificate of criminal clearance mandatory).',
      req4: 'Minimum education: 10th or 12th Grade under the National Education System.',
      req5: 'Completed military service or verifiable prior private security experience (preferred).',
      req6: 'Excellent physical fitness and certified medical clearance.',
      howToApplyTitle: 'How to Submit Your Application:',
      howToApplyDesc: 'You can deliver your printed CV directly to our headquarters in Boane (Matola Rio) or email us with the subject "Guard Application":',
      sendCvBtn: 'Submit CV via Email',
      whatsappRecruitment: 'Human Resources WhatsApp Contact',
    },

    // 404 Page
    notFound: {
      code: '404',
      badge: 'PAGE NOT FOUND',
      title: 'We apologize, the page you requested does not exist or has been relocated.',
      desc: 'The link might be outdated or the resource was reorganized. Please use the navigation links below to return safely to our website.',
      btnHome: 'Return to Homepage',
      btnServices: 'View Services Catalog',
      btnContacts: 'Speak with Support',
    },
  },
} as const;
