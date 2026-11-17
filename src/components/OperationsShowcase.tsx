'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Shield, Eye, ShieldCheck, Banknote, UserCheck, Video, CheckCircle2 } from 'lucide-react';

export default function OperationsShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const galleryItems = [
    {
      id: 'patrol',
      title: 'Vigilância Patrimonial & Patrulha Tática',
      badge: 'Uniformes Oficiais DC SECURE GROUP',
      description: 'Nossos agentes de campo atuam com fardamento de alta visibilidade, colete balístico com insígnia oficial, comunicadores digitais e protocolos rigorosos de ronda perimetral.',
      image: '/images/security-guard-patrol.jpg',
      icon: Shield,
      stats: [
        { label: 'Treinamento Tático', value: '100% Homologado' },
        { label: 'Fiscalização', value: 'Rondas 24/7' },
        { label: 'Antecedentes', value: 'Criminais Certificados' },
      ],
    },
    {
      id: 'cit',
      title: 'Transporte de Fundos e Valores (CIT)',
      badge: 'Logística de Valores Blindada',
      description: 'Equipa armada dedicada à custódia e movimentação de numerário e ativos estratégicos em viaturas com blindagem balística de nível militar e monitoramento satelital contínuo.',
      image: '/images/cash-in-transit.jpg',
      icon: Banknote,
      stats: [
        { label: 'Viaturas', value: 'Blindagem Nível III-A' },
        { label: 'Escolta', value: 'Armada & Criptografada' },
        { label: 'Seguro de Carga', value: 'Cobertura Integral' },
      ],
    },
    {
      id: 'vip',
      title: 'Proteção Executiva & Guarda-Costas',
      badge: 'Close Protection Officer (CPO)',
      description: 'Segurança pessoal discreta ou ostensiva para diplomatas, empresários, investidores e figuras públicas com reconhecimento antecipado de trajetos e contenção de ameaças.',
      image: '/images/vip-protection.jpg',
      icon: UserCheck,
      stats: [
        { label: 'Perfil de Agente', value: 'Defesa Pessoal & Tática' },
        { label: 'Discrição', value: 'Máxima Confidencialidade' },
        { label: 'Logística', value: 'SUVs Blindados sob Consulta' },
      ],
    },
    {
      id: 'control',
      title: 'Centro de Comando e Monitoramento 24/7',
      badge: 'Videovigilância e Telemetria Satelital',
      description: 'Sala de operações ultramoderna com analistas monitorando feeds de CCTV analítico em alta definição, cercas virtuais inteligentes e rastreamento de frotas em tempo real.',
      image: '/images/control-room.jpg',
      icon: Video,
      stats: [
        { label: 'Tempo de Alerta', value: '< 10 Segundos' },
        { label: 'Disponibilidade', value: '99.98% SLA' },
        { label: 'Comunicação', value: 'Criptografia Digital' },
      ],
    },
    {
      id: 'access',
      title: 'Controlo de Acessos & Portaria Inteligente',
      badge: 'Triagem Tecnológica e Biometria',
      description: 'Agentes de receção e portaria especializada treinados no atendimento humanizado ao cliente com controlo informatizado de fluxo de visitantes, veículos e mercadorias.',
      image: '/images/access-control.jpg',
      icon: Eye,
      stats: [
        { label: 'Registo Digital', value: 'Tempo Real' },
        { label: 'Biometria / OCR', value: 'Leitura de Matrículas' },
        { label: 'Postura', value: 'Polidez e Firmeza' },
      ],
    },
  ];

  const current = galleryItems[activeTab];

  return (
    <section className="py-20 md:py-28 bg-navy-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-shield-blue/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-shield-blue/10 border border-shield-blue/30 text-xs font-semibold text-shield-accent uppercase tracking-wider">
            <span>Operações Reais no Terreno</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Prontidão Operacional: <span className="gradient-text-blue">Nossos Agentes em Ação</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Veja a presença imponente, o fardamento tático homologado com o emblema da <strong>DC SECURE GROUP</strong> e a infraestrutura tecnológica que protege os nossos clientes.
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
                className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-shield-blue text-white shadow-lg shadow-shield-blue/30 scale-105 border border-shield-accent'
                    : 'bg-navy-900 text-slate-300 hover:text-white hover:bg-navy-800 border border-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-shield-accent'}`} />
                <span>{item.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Item Showcase Card */}
        <div className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Image Display */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] border border-white/10 shadow-2xl group">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />
                
                {/* Gradient scrim for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

                {/* Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="px-3 py-1.5 rounded-lg bg-navy-950/90 backdrop-blur-md border border-shield-accent/40 text-shield-accent font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    {current.badge}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-black/60 text-slate-300 font-mono text-[11px] backdrop-blur-sm hidden sm:inline-block">
                    DC SECURE OPERATIONAL ASSET
                  </span>
                </div>
              </div>
            </div>

            {/* Content & Stats */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-shield-accent uppercase tracking-wider">
                  Divisão de Prontidão Tática
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {current.title}
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {current.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {current.stats.map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-navy-900/80 border border-white/5 space-y-1">
                    <p className="text-[11px] text-slate-400 uppercase tracking-wide">{stat.label}</p>
                    <p className="text-xs font-bold text-white flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-shield-accent flex-shrink-0" />
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-navy-800">
                <a
                  href="#cotacao"
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-shield-accent hover:text-white hover:underline transition-colors"
                >
                  <span>Solicitar Proposta para este Serviço →</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
