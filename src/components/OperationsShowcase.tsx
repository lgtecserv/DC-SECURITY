'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Eye, ShieldCheck, Banknote, UserCheck, Video, CheckCircle2, Car, Dog } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OperationsShowcase() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const galleryItems = [
    {
      id: 'patrol',
      title: language === 'pt' ? 'Vigilância Patrimonial & Patrulha Tática' : 'Asset Protection & Tactical Patrol',
      badge: language === 'pt' ? 'Uniformes Oficiais DC SECURE GROUP' : 'DC SECURE GROUP Official Uniforms',
      description: language === 'pt'
        ? 'Nossos agentes de campo atuam com fardamento de alta visibilidade, colete balístico com insígnia oficial, comunicadores digitais e protocolos rigorosos de ronda perimetral.'
        : 'Our field officers operate in high-visibility uniforms, ballistic vests with official insignia, digital radios, and strict perimeter patrol protocols.',
      image: '/images/team-guard-1.jpg',
      icon: Shield,
      stats: language === 'pt' ? [
        { label: 'Treinamento Tático', value: '100% Homologado' },
        { label: 'Fiscalização', value: 'Rondas 24/7' },
        { label: 'Antecedentes', value: 'Criminais Certificados' },
      ] : [
        { label: 'Tactical Drills', value: '100% Certified' },
        { label: 'Field Audit', value: '24/7 Patrols' },
        { label: 'Vetting', value: 'Police Checked' },
      ],
    },
    {
      id: 'fleet',
      title: language === 'pt' ? 'Frota de Patrulhamento & Pronta Resposta' : 'Patrol Fleet & Rapid Tactical Response',
      badge: language === 'pt' ? 'Viaturas Táticas 4x4 Homologadas' : 'Authorized 4x4 Tactical Fleet',
      description: language === 'pt'
        ? 'Unidades móveis e viaturas todo-terreno equipadas com sinalização prioritária, rádio móvel e posicionamento GPS contínuo para apoio imediato aos postos.'
        : 'Mobile all-terrain rapid intervention vehicles fitted with priority flashers, mobile radios, and continuous GPS telemetry for immediate on-site backup.',
      image: '/images/patrol-fleet.jpg',
      icon: Car,
      stats: language === 'pt' ? [
        { label: 'Tempo de Chegada', value: '< 5 Minutos' },
        { label: 'Cobertura', value: 'Maputo & Boane' },
        { label: 'Frota', value: '100% Rastreada' },
      ] : [
        { label: 'Arrival Time', value: '< 5 Minutes' },
        { label: 'Coverage', value: 'Maputo & Boane' },
        { label: 'Fleet GPS', value: '100% Live Tracked' },
      ],
    },
    {
      id: 'cit',
      title: language === 'pt' ? 'Transporte de Fundos e Valores (CIT)' : 'Cash-In-Transit & Armored Logistics (CIT)',
      badge: language === 'pt' ? 'Logística de Valores Blindada' : 'Armored Valuables Logistics',
      description: language === 'pt'
        ? 'Equipa armada dedicada à custódia e movimentação de numerário e ativos estratégicos em viaturas com blindagem balística de nível militar e monitoramento satelital contínuo.'
        : 'Dedicated armed crews providing armored transport of currency and high-value commodities in certified bulletproof carriers with satellite tracking.',
      image: '/images/team-guard-3.jpg',
      icon: Banknote,
      stats: language === 'pt' ? [
        { label: 'Viaturas', value: 'Blindagem Nível III-A' },
        { label: 'Escolta', value: 'Armada & Criptografada' },
        { label: 'Seguro de Carga', value: 'Cobertura Integral' },
      ] : [
        { label: 'Vehicles', value: 'Level III-A Armor' },
        { label: 'Escort', value: 'Armed & Encrypted' },
        { label: 'Cargo Policy', value: 'Full Insurance' },
      ],
    },
    {
      id: 'vip',
      title: language === 'pt' ? 'Proteção Executiva & Guarda-Costas' : 'Executive Protection & VIP Bodyguards',
      badge: 'Close Protection Officer (CPO)',
      description: language === 'pt'
        ? 'Segurança pessoal discreta ou ostensiva para diplomatas, empresários, investidores e figuras públicas com reconhecimento antecipado de trajetos e contenção de ameaças.'
        : 'Discreet or high-profile close protection for diplomats, executives, international investors, and delegations with pre-route risk surveys and threat containment.',
      image: '/images/vip-protection.jpg',
      icon: UserCheck,
      stats: language === 'pt' ? [
        { label: 'Perfil de Agente', value: 'Defesa Pessoal & Tática' },
        { label: 'Discrição', value: 'Máxima Confidencialidade' },
        { label: 'Logística', value: 'SUVs Blindados sob Consulta' },
      ] : [
        { label: 'Officer Profile', value: 'Tactical & Martial' },
        { label: 'Discretion', value: 'Strict Confidentiality' },
        { label: 'Logistics', value: 'Armored SUVs on Request' },
      ],
    },
    {
      id: 'control',
      title: language === 'pt' ? 'Centro de Comando e Monitoramento 24/7' : '24/7 Command & Monitoring Center (CORT)',
      badge: language === 'pt' ? 'Videovigilância e Telemetria Satelital' : 'Video Surveillance & Satellite Telematics',
      description: language === 'pt'
        ? 'Sala de operações ultramoderna com analistas monitorando feeds de CCTV analítico em alta definição, cercas virtuais inteligentes e rastreamento de frotas em tempo real.'
        : 'State-of-the-art operations room staffed by certified analysts watching high-definition AI CCTV streams, smart geofences, and fleet telemetry.',
      image: '/images/team-guard-4.jpg',
      icon: Video,
      stats: language === 'pt' ? [
        { label: 'Tempo de Alerta', value: '< 10 Segundos' },
        { label: 'Disponibilidade', value: '99.98% SLA' },
        { label: 'Comunicação', value: 'Criptografia Digital' },
      ] : [
        { label: 'Alert Trigger', value: '< 10 Seconds' },
        { label: 'System Uptime', value: '99.98% SLA' },
        { label: 'Comms', value: 'Encrypted Digital' },
      ],
    },
    {
      id: 'k9',
      title: language === 'pt' ? 'Equipa Cinotécnica K9 & Cães de Guarda' : 'K9 Canine Tactical Patrol Squad',
      badge: language === 'pt' ? 'Binómio Condutor-Cão de Alta Defesa' : 'Certified Handler-Canine Team',
      description: language === 'pt'
        ? 'Patrulhas perimetrais especializadas com cães de raças nobres treinados para dissuasão, busca e contenção preventiva em armazéns, indústrias e condomínios.'
        : 'Specialized perimeter patrols with certified working dogs trained for intruder deterrence, contraband tracking, and containment in industrial parks.',
      image: '/images/team-guard-2.jpg',
      icon: Dog,
      stats: language === 'pt' ? [
        { label: 'Raças Homologadas', value: 'Pastor Alemão / Belga' },
        { label: 'Instrução', value: 'Veterinária & Tática' },
        { label: 'Dissuasão', value: 'Nível Máximo' },
      ] : [
        { label: 'Certified Breeds', value: 'German / Malinois' },
        { label: 'Care', value: 'Vet & Tactical Drill' },
        { label: 'Deterrence', value: 'Maximum Level' },
      ],
    },
    {
      id: 'access',
      title: language === 'pt' ? 'Controlo de Acessos & Portaria Inteligente' : 'Smart Access Control & Concierge',
      badge: language === 'pt' ? 'Triagem Tecnológica e Biometria' : 'Biometric Screening & Visitor Audit',
      description: language === 'pt'
        ? 'Agentes de receção e portaria especializada treinados no atendimento humanizado ao cliente com controlo informatizado de fluxo de visitantes, veículos e mercadorias.'
        : 'Smart gatehouse security guards and corporate concierges delivering polite customer service while managing computerized visitor, contractor, and cargo logs.',
      image: '/images/team-guard-2.jpg',
      icon: Eye,
      stats: language === 'pt' ? [
        { label: 'Registo Digital', value: 'Tempo Real' },
        { label: 'Biometria / OCR', value: 'Leitura de Matrículas' },
        { label: 'Postura', value: 'Polidez e Firmeza' },
      ] : [
        { label: 'Digital Log', value: 'Real-Time Sync' },
        { label: 'Biometrics / ALPR', value: 'Plate Recognition' },
        { label: 'Conduct', value: 'Courteous & Firm' },
      ],
    },
  ];

  const current = galleryItems[activeTab];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background ambient subtle circle */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-shield-blue uppercase tracking-wider">
            <span>{language === 'pt' ? 'Operações Reais no Terreno' : 'Active Field Operations'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {language === 'pt' ? (
              <>Prontidão Operacional: <span className="text-shield-blue">Nossos Agentes em Ação</span></>
            ) : (
              <>Operational Readiness: <span className="text-shield-blue">Our Officers in Action</span></>
            )}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {language === 'pt' 
              ? <>Veja a presença imponente, o fardamento tático homologado com o emblema oficial da <strong className="text-slate-900">DC SECURE GROUP</strong> e a infraestrutura tecnológica que protege os nossos clientes.</>
              : <>Experience our commanding presence, certified tactical uniforms bearing the official <strong className="text-slate-900">DC SECURE GROUP</strong> insignia, and advanced tactical command systems.</>
            }
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {galleryItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${isActive
                  ? 'bg-shield-blue text-white shadow-md scale-105 border border-shield-blue'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
                  }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-shield-blue'}`} />
                <span>{item.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Item Showcase Card */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Visual Image Display */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] border border-slate-200 shadow-xl group bg-slate-200">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />

                {/* Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-shield-blue font-bold flex items-center gap-1.5 shadow-md">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    {current.badge}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-900/80 text-white font-mono text-[11px] backdrop-blur-sm hidden sm:inline-block shadow-sm">
                    DC SECURE OPERATIONAL ASSET
                  </span>
                </div>
              </div>
            </div>

            {/* Content & Stats */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-shield-blue uppercase tracking-wider">
                  {language === 'pt' ? 'Divisão de Prontidão Tática' : 'Tactical Readiness Division'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  {current.title}
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {current.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {current.stats.map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
                    <p className="text-[11px] text-slate-500 uppercase tracking-wide font-medium">{stat.label}</p>
                    <p className="text-xs font-bold text-slate-900 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-shield-blue flex-shrink-0" />
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-200">
                <Link
                  href="/contactos"
                  className="inline-flex items-center space-x-2 text-sm font-bold text-shield-blue hover:text-blue-700 hover:underline transition-colors"
                >
                  <span>{language === 'pt' ? 'Solicitar Proposta para este Serviço →' : 'Request Proposal for This Service →'}</span>
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
