'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';
import { useLanguage } from '@/i18n/LanguageContext';

export default function AboutSection() {
  const { t, language } = useLanguage();

  return (
    <section id="sobre" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Headquarters / Operations Photo */}
          <div className="lg:col-span-5">
            <ScrollReveal animation="fade-right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl border border-slate-200 group bg-slate-100">
                <Image 
                  src="/images/headquarters.jpg?v=2"
                  alt={language === 'pt' ? 'Sede Operacional da DC SECURE GROUP em Boane Matola Rio' : 'DC SECURE GROUP Operational Headquarters in Boane Matola Rio'}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Text + Checklist + Button */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal animation="fade-left">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102147] tracking-tight mb-4">
                  {t('nav.about')}
                </h2>

                {/* Description with Orange Left Accent Border */}
                <div className="border-l-4 border-[#C35614] pl-4 text-slate-700 text-sm sm:text-base leading-relaxed space-y-2">
                  <p>
                    <strong>DC SECURE GROUP, Lda</strong> - {t('about.paragraph1').replace(/^A DC SECURE GROUP, Lda\s*[-–—]?\s*/, '')}
                  </p>
                  <p>
                    {t('about.paragraph2')}
                  </p>
                </div>
              </div>

              {/* Checklist in 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 pt-4">
                <div className="flex items-center space-x-2.5 text-sm font-semibold text-[#102147]">
                  <CheckCircle2 className="w-5 h-5 text-[#C35614] flex-shrink-0" />
                  <span>{t('servicesList.vigilancia.name')}</span>
                </div>
                <div className="flex items-center space-x-2.5 text-sm font-semibold text-[#102147]">
                  <CheckCircle2 className="w-5 h-5 text-[#C35614] flex-shrink-0" />
                  <span>{t('servicesList.valores.name')}</span>
                </div>
                <div className="flex items-center space-x-2.5 text-sm font-semibold text-[#102147]">
                  <CheckCircle2 className="w-5 h-5 text-[#C35614] flex-shrink-0" />
                  <span>{t('servicesList.vip.name')}</span>
                </div>
                <div className="flex items-center space-x-2.5 text-sm font-semibold text-[#102147]">
                  <CheckCircle2 className="w-5 h-5 text-[#C35614] flex-shrink-0" />
                  <span>{t('servicesList.cctv.name')}</span>
                </div>
              </div>

              {/* Buttons: Entre em contacto! & Conhecer Mais */}
              <div className="pt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contactos"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white font-bold text-sm tracking-wide shadow-md transition-all duration-300 active:scale-95 group"
                >
                  <span>{language === 'pt' ? 'Entre em contacto!' : 'Get In Touch!'}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/quem-somos"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#102147] font-bold text-sm tracking-wide transition-all duration-300"
                >
                  <span>{t('about.btnHistory')}</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Bottom 3 Stat Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-14 sm:pt-16">

          {/* Card 1: Orange */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="bg-[#C35614] text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center">
              <span className="text-4xl sm:text-5xl font-black tracking-tight mb-2">
                <AnimatedCounter end={5000} suffix="+" />
              </span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-orange-100">
                {language === 'pt' ? 'Protecção confiável' : 'Reliable Protection'}
              </span>
            </div>
          </ScrollReveal>

          {/* Card 2: Deep Navy */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="bg-[#102147] text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center">
              <span className="text-4xl sm:text-5xl font-black tracking-tight mb-2">
                <AnimatedCounter end={5} suffix="+" />
              </span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                {language === 'pt' ? 'Anos de Experiência' : 'Years of Experience'}
              </span>
            </div>
          </ScrollReveal>

          {/* Card 3: Orange */}
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="bg-[#C35614] text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center">
              <span className="text-4xl sm:text-5xl font-black tracking-tight mb-2">
                <AnimatedCounter end={150} suffix="+" />
              </span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-orange-100">
                {language === 'pt' ? 'Profissionais Homologados' : 'Certified Officers'}
              </span>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
