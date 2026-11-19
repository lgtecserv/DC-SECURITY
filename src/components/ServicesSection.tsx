'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  DoorClosed, 
  Banknote, 
  UserCheck, 
  Video, 
  Satellite, 
  GraduationCap, 
  Dog,
  ArrowRight
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '@/i18n/LanguageContext';

export default function ServicesSection() {
  const { t, language } = useLanguage();

  const services = [
    {
      id: 'protecao-bens',
      icon: ShieldCheck,
      image: '/images/team-guard-1.jpg',
      badge: t('servicesList.vigilancia.badge'),
      title: t('servicesList.vigilancia.name'),
      description: t('servicesList.vigilancia.shortDesc'),
      features: language === 'pt' 
        ? ['Postos fixos e móveis', 'Rondas programadas e aleatórias', 'Intervenção e contenção imediata']
        : ['Static and mobile guard posts', 'Scheduled & random foot patrols', 'Immediate tactical containment'],
    },
    {
      id: 'vigilancia-acessos',
      icon: DoorClosed,
      image: '/images/team-guard-2.jpg',
      badge: t('servicesList.acessos.badge'),
      title: t('servicesList.acessos.name'),
      description: t('servicesList.acessos.shortDesc'),
      features: language === 'pt'
        ? ['Registo informatizado de visitantes', 'Inspeção e triagem de bagagens', 'Barreiras físicas e torniquetes']
        : ['Computerized visitor logs', 'Luggage and vehicle screening', 'Turnstiles & physical barriers'],
    },
    {
      id: 'transporte-valores',
      icon: Banknote,
      image: '/images/team-guard-3.jpg',
      badge: t('servicesList.valores.badge'),
      title: t('servicesList.valores.name'),
      description: t('servicesList.valores.shortDesc'),
      features: language === 'pt'
        ? ['Viaturas blindadas certificadas', 'Seguro integral de carga em trânsito', 'Rastreamento por satélite criptografado']
        : ['Certified armored carrier fleet', 'Full in-transit cargo insurance', 'Encrypted satellite tracking'],
    },
    {
      id: 'guarda-costas',
      icon: UserCheck,
      image: '/images/vip-protection.jpg',
      badge: t('servicesList.vip.badge'),
      title: t('servicesList.vip.name'),
      description: t('servicesList.vip.shortDesc'),
      features: language === 'pt'
        ? ['Agentes de Proteção Próxima (CPO)', 'Planeamento e reconhecimento de itinerários', 'Táticas defensivas e evasivas']
        : ['Close Protection Officers (CPO)', 'Route planning & reconnaissance', 'Defensive & evasive driving'],
    },
    {
      id: 'seguranca-eletronica',
      icon: Video,
      image: '/images/team-guard-4.jpg',
      badge: t('servicesList.cctv.badge'),
      title: t('servicesList.cctv.name'),
      description: t('servicesList.cctv.shortDesc'),
      features: language === 'pt'
        ? ['CCTV IP com inteligência analítica', 'Centrais de alarme contra intrusão', 'Biometria e controlo facial']
        : ['IP CCTV with AI video analytics', 'Intruder alarm monitoring', 'Biometric & facial recognition'],
    },
    {
      id: 'rastreio-satelite',
      icon: Satellite,
      image: '/images/patrol-fleet.jpg',
      badge: t('servicesList.rastreio.badge'),
      title: t('servicesList.rastreio.name'),
      description: t('servicesList.rastreio.shortDesc'),
      features: language === 'pt'
        ? ['Corte remoto de ignição em emergências', 'Gestão de combustível e rotas', 'Botão de pânico e alertas por SMS/App']
        : ['Remote ignition cut-off', 'Route & fuel management', 'Panic button & real-time alerts'],
    },
    {
      id: 'consultoria-treinamento',
      icon: GraduationCap,
      image: '/images/service-training.jpg',
      badge: t('servicesList.treino.badge'),
      title: t('servicesList.treino.name'),
      description: t('servicesList.treino.shortDesc'),
      features: language === 'pt'
        ? ['Treinamento tático e defesa pessoal', 'Protocolos legais e primeiros socorros', 'Instrução contínua de conduta']
        : ['Tactical drills & martial arts', 'Legal protocols & trauma first aid', 'Strict code of conduct training'],
    },
    {
      id: 'equipas-cinotecnicas',
      icon: Dog,
      image: '/images/headquarters.jpg?v=2',
      badge: t('servicesList.k9.badge'),
      title: t('servicesList.k9.name'),
      description: t('servicesList.k9.shortDesc'),
      features: language === 'pt'
        ? ['Cães de patrulha e busca treinados', 'Condutores certificados em cinotécnica', 'Eficácia máxima de dissuasão']
        : ['Trained patrol & detection dogs', 'Certified K9 dog handlers', 'Maximum perimeter deterrence'],
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-xs font-bold text-shield-blue uppercase tracking-wider">
              <span>{t('servicesSection.badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              {t('servicesSection.title')}
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              {t('servicesSection.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;
            const delay = (index % 4) * 100;
            return (
              <ScrollReveal key={service.id} animation="fade-up" delay={delay}>
                <div 
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Service Photo with official badge */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-shield-blue border border-slate-200 shadow-sm">
                        {service.badge}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-shield-blue flex-shrink-0 group-hover:bg-[#C35614] group-hover:text-white transition-all duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-[#C35614] transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <ul className="space-y-1.5 mb-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-[11px] text-slate-500 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C35614] mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-6 pb-5 pt-0">
                    <Link
                      href="/contactos"
                      className="inline-flex items-center justify-between w-full pt-3 border-t border-slate-100 text-xs font-bold text-[#102147] hover:text-[#C35614] transition-colors group/link"
                    >
                      <span>{language === 'pt' ? 'Pedir Proposta Detalhada' : 'Request Detailed Proposal'}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Legal Disclaimer Sub-banner */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="mt-12 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-3">
            <p>
              {language === 'pt' ? (
                <>Todos os serviços são prestados em estrita conformidade com o <strong className="text-slate-900">Decreto de Regulamentação da Segurança Privada em Moçambique</strong> e alvarás vigentes.</>
              ) : (
                <>All services are executed in strict compliance with the <strong className="text-slate-900">Private Security Regulation Decree of Mozambique</strong> and active licenses.</>
              )}
            </p>
            <Link 
              href="/contactos" 
              className="text-[#C35614] hover:text-[#A7450D] font-bold whitespace-nowrap inline-flex items-center space-x-1"
            >
              <span>{language === 'pt' ? 'Falar com a Direção Operacional' : 'Speak with Operations Management'}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
