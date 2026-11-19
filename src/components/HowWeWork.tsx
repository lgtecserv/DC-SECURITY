'use client';

import React from 'react';
import { Search, ShieldAlert, Cpu, CheckCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';

export default function HowWeWork() {
  const { t, language } = useLanguage();

  const steps = [
    {
      step: '01',
      icon: Search,
      title: language === 'pt' ? 'Auditoria & Diagnóstico de Risco' : 'Risk Audit & Vulnerability Survey',
      description: language === 'pt'
        ? 'Nossa equipa de consultores táticos desloca-se às suas instalações para mapear pontos cegos, vulnerabilidades de acesso e histórico de ocorrências na zona.'
        : 'Our tactical security consultants conduct an on-site survey to map blind spots, access vulnerabilities, and local incident risks.',
      tag: language === 'pt' ? 'Levantamento Tático' : 'Tactical Survey',
    },
    {
      step: '02',
      icon: Cpu,
      title: language === 'pt' ? 'Dimensionamento & Engenharia de Segurança' : 'Security Architecture & Sizing',
      description: language === 'pt'
        ? 'Desenhamos um plano de segurança customizado: definição exata do número de agentes, turnos, tipo de armamento regulamentado, barreiras físicas e câmaras analíticas.'
        : 'We architect a custom security plan: precise officer headcount, shift schedules, authorized weapons, physical barriers, and AI camera specs.',
      tag: language === 'pt' ? 'Plano Personalizado' : 'Tailored Plan',
    },
    {
      step: '03',
      icon: ShieldAlert,
      title: language === 'pt' ? 'Mobilização Rápida & Treinamento do Posto' : 'Rapid Mobilization & Post Instruction',
      description: language === 'pt'
        ? 'Alocamos agentes rigorosamente selecionados e uniformizados com a insígnia oficial da DC SECURE GROUP, instruídos com ordens de posto específicas para o seu negócio.'
        : 'We deploy smartly uniformed, fully vetted officers equipped with official DC SECURE GROUP insignia, drilled in your custom site post orders.',
      tag: language === 'pt' ? 'Operação Imediata' : 'Immediate Start',
    },
    {
      step: '04',
      icon: CheckCheck,
      title: language === 'pt' ? 'Supervisão Motorizada & Monitoria 24/7' : 'Motorized Supervision & 24/7 Monitoring',
      description: language === 'pt'
        ? 'Acompanhamento permanente pelo nosso Centro de Comando, rondas móveis ostensivas aleatórias e relatórios diários de circulação e controle.'
        : 'Permanent oversight by our Command Center, random motorized mobile supervisor checks, and automated daily digital control reports.',
      tag: language === 'pt' ? 'Proteção Permanente' : 'Active Vigilance',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-shield-blue uppercase tracking-wider">
            <span>{t('howWeWork.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {language === 'pt' ? (
              <>Como Trabalhamos: <span className="text-shield-blue">Do Diagnóstico à Proteção Total</span></>
            ) : (
              <>How We Work: <span className="text-shield-blue">From Assessment to Complete Protection</span></>
            )}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t('howWeWork.subtitle')}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 hover:border-shield-blue/40 hover:bg-white hover:shadow-lg transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Large Background Step Number */}
                <div className="absolute -top-4 -right-2 text-7xl font-black text-slate-200 select-none group-hover:text-blue-100/70 transition-colors">
                  {item.step}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100/70 border border-blue-200 flex items-center justify-center text-shield-blue group-hover:bg-shield-blue group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-blue-50 text-shield-blue border border-blue-200">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-shield-blue transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>{language === 'pt' ? `Fase Operacional ${item.step}` : `Operational Phase ${item.step}`}</span>
                  <div className="w-2 h-2 rounded-full bg-shield-blue" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <Link
            href="/contactos"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-shield-blue hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            <span>{language === 'pt' ? 'Agendar Diagnóstico Gratuito para a Minha Empresa' : 'Schedule Free Assessment for My Company'}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
