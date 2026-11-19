'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import { 
  Target, 
  Eye, 
  Award, 
  ShieldCheck, 
  Clock, 
  Users, 
  Lock, 
  Activity, 
  ArrowRight, 
  FileCheck2,
  Phone
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function QuemSomosPage() {
  const { t, language } = useLanguage();

  const differentiators = [
    {
      icon: ShieldCheck,
      title: t('quemSomosPage.pillar1Title'),
      description: t('quemSomosPage.pillar1Desc'),
    },
    {
      icon: Clock,
      title: t('quemSomosPage.pillar2Title'),
      description: t('quemSomosPage.pillar2Desc'),
    },
    {
      icon: Users,
      title: t('quemSomosPage.pillar3Title'),
      description: t('quemSomosPage.pillar3Desc'),
    },
    {
      icon: Lock,
      title: t('quemSomosPage.pillar4Title'),
      description: t('quemSomosPage.pillar4Desc'),
    },
    {
      icon: Activity,
      title: t('quemSomosPage.pillar5Title'),
      description: t('quemSomosPage.pillar5Desc'),
    },
    {
      icon: FileCheck2,
      title: t('quemSomosPage.pillar6Title'),
      description: t('quemSomosPage.pillar6Desc'),
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        
        {/* Expansive Hero Section with HD Video */}
        <Hero
          isSubpage={true}
          badge={t('quemSomosPage.badge')}
          pageTitle={t('quemSomosPage.title')}
          pageSubtitle={t('quemSomosPage.subtitle')}
          breadcrumbs={[
            { label: t('quemSomosPage.heroBreadcrumbHome'), href: '/' },
            { label: t('quemSomosPage.heroBreadcrumbAbout') }
          ]}
          ctaText={t('quemSomosPage.heroCta')}
          ctaLink="/contactos"
        />

        {/* 1. História & Constituição Legal da Empresa */}
        <section className="py-20 sm:py-28 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Operations Photo */}
              <div className="lg:col-span-5">
                <ScrollReveal animation="fade-right">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group bg-slate-100">
                    <div className="aspect-[4/3] relative">
                      <Image 
                        src="/images/headquarters.jpg?v=2"
                        alt={language === 'pt' ? 'Sede Operacional da DC SECURE GROUP em Boane Matola Rio' : 'DC SECURE GROUP Operational Headquarters in Boane Matola Rio'}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        priority
                      />
                    </div>
                    <div className="p-5 bg-[#102147] text-white flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-orange-400">{t('about.badgeHQ')}</p>
                        <p className="text-sm font-semibold">{t('about.locationHQ')}</p>
                      </div>
                      <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column: Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <ScrollReveal animation="fade-left">
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-xs font-bold text-[#C35614] uppercase tracking-wider">
                    <span>{language === 'pt' ? 'Compromisso Moçambicano' : 'Mozambican Commitment'}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102147] tracking-tight leading-tight">
                    {t('quemSomosPage.historyTitle')}
                  </h2>

                  <div className="border-l-4 border-[#C35614] pl-4 text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                    <p>
                      {t('quemSomosPage.historyP1')}
                    </p>
                    <p>
                      {t('quemSomosPage.historyP2')}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-xs text-slate-500 block">{t('quemSomosPage.legalRegistry')}</span>
                      <strong className="text-sm text-[#102147]">{t('quemSomosPage.legalRegistryVal')}</strong>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-xs text-slate-500 block">{t('quemSomosPage.nuitLabel')}</span>
                      <strong className="text-sm text-[#102147]">{t('quemSomosPage.nuitVal')}</strong>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4 items-center">
                    <Link
                      href="/contactos"
                      className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white font-bold text-sm tracking-wide shadow-md transition-all active:scale-95 group"
                    >
                      <span>{t('quemSomosPage.ctaTalkTeam')}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="/servicos"
                      className="inline-flex items-center px-7 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#102147] font-bold text-sm tracking-wide transition-all"
                    >
                      <span>{t('quemSomosPage.ctaCatalog')}</span>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        {/* 2. Estatísticas de Impacto Animadas */}
        <section className="py-14 bg-gradient-to-r from-[#102147] via-[#142959] to-[#102147] text-white border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="p-4">
                  <div className="text-4xl sm:text-5xl font-black text-orange-400 mb-2">
                    <AnimatedCounter end={5000} suffix="+" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                    {language === 'pt' ? 'Protecções Confiáveis' : 'Secured Sites'}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <div className="p-4">
                  <div className="text-4xl sm:text-5xl font-black text-white mb-2">
                    <AnimatedCounter end={5} suffix="+" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                    {language === 'pt' ? 'Anos de Experiência' : 'Years Experience'}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <div className="p-4">
                  <div className="text-4xl sm:text-5xl font-black text-orange-400 mb-2">
                    <AnimatedCounter end={150} suffix="+" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                    {language === 'pt' ? 'Especialistas Homologados' : 'Certified Guards'}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={400}>
                <div className="p-4">
                  <div className="text-4xl sm:text-5xl font-black text-white mb-2">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                    {language === 'pt' ? 'Conformidade Legal' : 'Legal Compliance'}
                  </p>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* 3. Pilares Fundamentais: Missão, Visão e Valores */}
        <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold text-[#102147] uppercase tracking-wider">
                  <span>{language === 'pt' ? 'Diretrizes Estratégicas' : 'Strategic Guidelines'}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102147] tracking-tight">
                  {language === 'pt' ? 'Nossos Pilares Fundamentais' : 'Our Fundamental Pillars'}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {language === 'pt'
                    ? 'Princípios éticos e rigor operacional que norteiam cada missão da DC SECURE GROUP em prol de famílias, empresas e instituições.'
                    : 'Ethical tenets and tactical rigor guiding every mission executed by DC SECURE GROUP across Mozambique.'
                  }
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card Missão */}
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-[#C35614] mb-6 shadow-inner">
                      <Target className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#102147] mb-3">{t('quemSomosPage.missionTitle')}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('quemSomosPage.missionDesc')}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-[#C35614]">
                    <span>{language === 'pt' ? 'Compromisso diário de proteção' : 'Daily commitment to protection'}</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card Visão */}
              <ScrollReveal animation="fade-up" delay={200}>
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-[#102147] mb-6 shadow-inner">
                      <Eye className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#102147] mb-3">{t('quemSomosPage.visionTitle')}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('quemSomosPage.visionDesc')}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-[#102147]">
                    <span>{language === 'pt' ? 'Liderança e excelência contínua' : 'Leadership & continuous excellence'}</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card Valores */}
              <ScrollReveal animation="fade-up" delay={300}>
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-[#C35614] mb-6 shadow-inner">
                      <Award className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#102147] mb-3">{t('quemSomosPage.valuesTitle')}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t('quemSomosPage.valuesDesc')}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-[#C35614]">
                    <span>{language === 'pt' ? 'Ética e disciplina inabaláveis' : 'Unshakable ethics & discipline'}</span>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* 4. Diferenciais Competitivos */}
        <section className="py-20 sm:py-28 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-xs font-bold text-[#C35614] uppercase tracking-wider">
                  <span>{language === 'pt' ? 'Por que escolher a DC' : 'Why Choose DC'}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102147] tracking-tight">
                  {t('quemSomosPage.pillarsTitle')}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {language === 'pt'
                    ? 'Não entregamos apenas vigilância; fornecemos uma arquitetura completa de defesa e prevenção com supervisão ininterrupta.'
                    : 'We deliver far more than traditional guarding: a complete physical defense architecture with 24/7 active oversight.'
                  }
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((diff, idx) => {
                const Icon = diff.icon;
                return (
                  <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                    <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#C35614]/40 hover:bg-white hover:shadow-xl transition-all duration-300 h-full">
                      <div className="w-12 h-12 rounded-xl bg-[#102147] text-white flex items-center justify-center mb-5 shadow-md">
                        <Icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-lg font-bold text-[#102147] mb-2">
                        {diff.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {diff.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

          </div>
        </section>

        {/* 5. Galeria Operacional de Recursos Táticos */}
        <section className="py-16 bg-slate-100 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-md group">
                  <Image 
                    src="/images/team-guard-1.jpg" 
                    alt={language === 'pt' ? 'Equipa tática de guarda e patrulha' : 'Tactical patrol and guard squad'} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
                    <span className="text-[11px] font-bold text-orange-400 uppercase">
                      {language === 'pt' ? 'Operações de Campo' : 'Field Operations'}
                    </span>
                    <h4 className="text-base font-bold">{t('servicesList.vigilancia.name')}</h4>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-md group">
                  <Image 
                    src="/images/team-guard-3.jpg" 
                    alt={language === 'pt' ? 'Transporte de valores blindado' : 'Armored cash-in-transit'} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
                    <span className="text-[11px] font-bold text-orange-400 uppercase">
                      {language === 'pt' ? 'Logística Estratégica' : 'Strategic Logistics'}
                    </span>
                    <h4 className="text-base font-bold">{t('servicesList.valores.name')}</h4>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-md group">
                  <Image 
                    src="/images/vip-protection.jpg" 
                    alt={language === 'pt' ? 'Proteção de altas individualidades' : 'Executive close protection'} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
                    <span className="text-[11px] font-bold text-orange-400 uppercase">
                      {language === 'pt' ? 'Segurança Executiva' : 'Executive Security'}
                    </span>
                    <h4 className="text-base font-bold">{t('servicesList.vip.name')}</h4>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* 6. Grande Bloco de Chamada para Ação (CTA) */}
        <section className="py-20 sm:py-24 bg-[#102147] text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            
            <ScrollReveal animation="zoom-in">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-orange-300 font-bold text-xs uppercase tracking-widest border border-white/20 mb-2">
                {language === 'pt' ? 'Prontidão Imediata em Moçambique' : 'Immediate Readiness in Mozambique'}
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {language === 'pt' 
                  ? 'Proteja o Seu Património com Quem Cumpre os Mais Altos Padrões'
                  : 'Safeguard Your Assets with Leaders in Physical Security'
                }
              </h2>

              <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed pt-2">
                {language === 'pt'
                  ? 'Fale agora com a nossa direção de operações e receba uma avaliação de risco personalizada sem compromisso para a sua empresa ou residência.'
                  : 'Speak directly with our operations management to receive a complimentary custom risk assessment for your business or residence.'
                }
              </p>

              <div className="pt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contactos"
                  className="inline-flex items-center px-9 py-4 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white font-bold text-sm uppercase tracking-wider shadow-2xl transition-all active:scale-95 group"
                >
                  <span>{language === 'pt' ? 'Pedir Proposta Oficial' : 'Request Official Proposal'}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={`https://wa.me/258845393269?text=${encodeURIComponent(language === 'pt' ? 'Olá, gostaria de solicitar uma reunião com a DC SECURE GROUP.' : 'Hello, I would like to schedule a security consultation with DC SECURE GROUP.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold text-sm uppercase tracking-wider border border-white/30 transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4 mr-2 text-emerald-400" />
                  <span>{language === 'pt' ? 'Falar no WhatsApp' : 'Chat on WhatsApp'}</span>
                </a>
              </div>
            </ScrollReveal>

          </div>
        </section>

      </main>

      <Footer />
      <FloatingWidgets />
    </>
  );
}
