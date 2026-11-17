'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  DoorClosed, 
  Banknote, 
  UserCheck, 
  Video, 
  Satellite, 
  GraduationCap, 
  ShoppingBag,
  ArrowRight
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 'protecao-bens',
      icon: ShieldCheck,
      badge: 'Alínea a)',
      title: 'Protecção e Segurança de Pessoas e Bens',
      description: 'Patrulhamento preventivo, guarda de perímetro e defesa de património residencial, comercial e industrial com agentes táticos de alta prontidão.',
      features: ['Postos fixos e móveis', 'Rondas programadas e aleatórias', 'Intervenção e contenção imediata'],
      accent: 'border-blue-500/30 group-hover:border-blue-400'
    },
    {
      id: 'vigilancia-acessos',
      icon: DoorClosed,
      badge: 'Alínea b)',
      title: 'Vigilância e Controlo de Acessos',
      description: 'Gestão minuciosa de fluxo de pessoas e viaturas em condomínios, instalações industriais, edifícios governamentais e áreas restritas.',
      features: ['Registo informatizado de visitantes', 'Inspeção e triagem de bagagens', 'Barreiras físicas e torniquetes'],
      accent: 'border-emerald-500/30 group-hover:border-emerald-400'
    },
    {
      id: 'transporte-valores',
      icon: Banknote,
      badge: 'Alínea c)',
      title: 'Transporte de Fundos e Valores',
      description: 'Logística segura de numerário, documentos confidenciais, joias e metais preciosos em viaturas blindadas com escolta armada especializada.',
      features: ['Viaturas blindadas certificadas', 'Seguro integral de carga em trânsito', 'Rastreamento por satélite criptografado'],
      accent: 'border-amber-500/30 group-hover:border-amber-400'
    },
    {
      id: 'guarda-costas',
      icon: UserCheck,
      badge: 'Alínea d)',
      title: 'Serviços de Guarda-Costas (Proteção VIP)',
      description: 'Proteção executiva para diplomatas, empresários, celebridades e delegações internacionais com escolta pessoal discreta ou ostensiva.',
      features: ['Agentes de Proteção Próxima (CPO)', 'Planeamento e reconhecimento de itinerários', 'Táticas defensivas e evasivas'],
      accent: 'border-cyan-500/30 group-hover:border-cyan-400'
    },
    {
      id: 'seguranca-eletronica',
      icon: Video,
      badge: 'Alínea e)',
      title: 'Sistemas de Segurança Electrónica & CCTV',
      description: 'Instalação, monitoramento central 24/7 e manutenção preventiva de câmaras de alta resolução, sensores de intrusão e cercas elétricas.',
      features: ['CCTV IP com inteligência analítica', 'Centrais de alarme contra intrusão', 'Biometria e controlo facial'],
      accent: 'border-purple-500/30 group-hover:border-purple-400'
    },
    {
      id: 'rastreio-satelite',
      icon: Satellite,
      badge: 'Alínea f)',
      title: 'Rastreio de Viaturas via Satélite',
      description: 'Plataforma inteligente de GPS e telemetria para frotas de transporte, frotas pesadas, máquinas e viaturas ligeiras em tempo real.',
      features: ['Corte remoto de ignição em emergências', 'Gestão de combustível e rotas', 'Botão de pânico e alertas por SMS/App'],
      accent: 'border-rose-500/30 group-hover:border-rose-400'
    },
    {
      id: 'consultoria-treinamento',
      icon: GraduationCap,
      badge: 'Alínea g)',
      title: 'Estudos de Segurança & Treinamento',
      description: 'Diagnóstico de vulnerabilidades, auditorias de risco predial, elaboração de planos de segurança e formação tática contínua de colaboradores.',
      features: ['Auditoria de riscos patrimoniais', 'Treinamento de evacuação e combate a incêndio', 'Workshops de conduta preventiva'],
      accent: 'border-indigo-500/30 group-hover:border-indigo-400'
    },
    {
      id: 'equipamentos-seguranca',
      icon: ShoppingBag,
      badge: 'Alínea h)',
      title: 'Comercialização de Equipamentos',
      description: 'Fornecimento homologado de equipamentos certificados: rádios transmissores, detetores de metais, lanternas táticas, bastões e fardamento.',
      features: ['Equipamentos certificados por lei', 'Suporte técnico pós-venda garantido', 'Preços competitivos para empresas'],
      accent: 'border-teal-500/30 group-hover:border-teal-400'
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-28 bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-shield-blue/10 border border-shield-blue/30 text-xs font-semibold text-shield-accent uppercase tracking-wider">
            <span>Objecto Social Regulamentado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Nossos Serviços Oficiais de <span className="gradient-text-blue">Segurança</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Prestação de serviços licenciada em conformidade integral com a legislação moçambicana, cobrindo todo o espetro de proteção física, eletrónica e logística.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className={`group glass-panel rounded-2xl p-6 flex flex-col justify-between border transition-all duration-300 ${service.accent} glass-panel-hover`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-800 border border-white/10 flex items-center justify-center text-shield-accent group-hover:scale-110 group-hover:bg-shield-blue group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-navy-950 text-slate-400 border border-navy-800">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-shield-accent transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-[11px] text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-shield-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="#cotacao"
                  className="inline-flex items-center justify-between w-full pt-3 border-t border-navy-700/60 text-xs font-semibold text-slate-300 group-hover:text-white hover:underline transition-colors"
                >
                  <span>Pedir Proposta</span>
                  <ArrowRight className="w-4 h-4 text-shield-accent transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Legal Disclaimer Sub-banner */}
        <div className="mt-12 p-4 rounded-xl bg-navy-950/70 border border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            Todos os serviços são prestados em estrita conformidade com o <strong>Decreto de Regulamentação da Segurança Privada em Moçambique</strong> e alvarás vigentes.
          </p>
          <Link 
            href="#contacto" 
            className="text-shield-accent hover:underline font-semibold whitespace-nowrap"
          >
            Falar com a Direção Operacional →
          </Link>
        </div>

      </div>
    </section>
  );
}
