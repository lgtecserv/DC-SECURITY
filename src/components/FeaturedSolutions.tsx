'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TrendingUp, BarChart3, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '@/i18n/LanguageContext';

export default function FeaturedSolutions() {
  const { language } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2 Side-by-side cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Avaliação de risco gratuita */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-900 min-h-[480px] flex flex-col justify-end hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/images/team-guard-1.jpg"
                  alt={language === 'pt' ? 'Avaliação de risco gratuita e patrulha' : 'Free risk assessment and patrol'}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Inset White Content Box */}
              <div className="m-5 sm:m-7 p-6 sm:p-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-100 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#C35614]">
                  <TrendingUp className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102147]">
                    {language === 'pt' ? 'Avaliação de risco gratuita' : 'Complimentary Risk Assessment'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {language === 'pt'
                      ? 'Inspeção in loco e análise de vulnerabilidades para identificar necessidades reais das suas instalações e perímetro.'
                      : 'On-site technical evaluation to map physical vulnerabilities and design tailored mitigation measures for your facilities.'
                    }
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contactos"
                    className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 group"
                  >
                    <span>{language === 'pt' ? 'Solicitar Demonstração' : 'Request Assessment'}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Soluções complementares */}
          <ScrollReveal animation="fade-up" delay={250}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-900 min-h-[480px] flex flex-col justify-end hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/images/vip-protection.jpg"
                  alt={language === 'pt' ? 'Soluções complementares de proteção' : 'Complementary protection solutions'}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Inset White Content Box */}
              <div className="m-5 sm:m-7 p-6 sm:p-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-100 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-[#102147]">
                  <BarChart3 className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102147]">
                    {language === 'pt' ? 'Soluções complementares' : 'Specialized Security Solutions'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {language === 'pt'
                      ? 'Planos de continuidade, avaliação de segurança para eventos, e serviços à medida conforme necessidades específicas.'
                      : 'Business continuity plans, high-profile event crowd management, and custom protection protocols tailored to your unique requirements.'
                    }
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contactos"
                    className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 group"
                  >
                    <span>{language === 'pt' ? 'Contacte-nos Agora' : 'Inquire Now'}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
