'use client';

import React from 'react';
import { ShieldCheck, UserCheck, Radio, Clock, FileCheck2, Zap, Lock } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function WhyChooseUs() {
  const { t, language } = useLanguage();

  const differentiators = [
    {
      icon: UserCheck,
      title: language === 'pt' ? 'Triagem e Recrutamento Rigoroso' : 'Rigorous Vetting & Screening',
      description: language === 'pt'
        ? '100% dos nossos agentes passam por verificação minuciosa de antecedentes criminais, testes psicológicos e histórico militar/policial comprovado.'
        : '100% of our personnel undergo thorough criminal background checks, psychometric screenings, and verifiable military/police service audits.',
      highlight: language === 'pt' ? 'Antecedentes Verificados' : 'Police Vetted'
    },
    {
      icon: Radio,
      title: language === 'pt' ? 'Supervisão Motorizada 24/7' : '24/7 Motorized Supervision',
      description: language === 'pt'
        ? 'Rondas ostensivas permanentes com viaturas e motos táticas para fiscalização in loco e apoio imediato aos postos de serviço.'
        : 'Continuous high-visibility inspections with 4x4 vehicles and tactical motorbikes to audit guard performance and provide rapid on-site backup.',
      highlight: language === 'pt' ? 'Rondas Constantes' : 'Active Patrols'
    },
    {
      icon: Zap,
      title: language === 'pt' ? 'Pronta Resposta em Tempo Recorde' : 'Rapid Tactical Intervention',
      description: language === 'pt'
        ? 'Equipas de apoio tático posicionadas estrategicamente para intervir em menos de 5 minutos após o acionamento de alarme ou pânico.'
        : 'Tactical squads strategically staged to intervene within 5 minutes following any perimeter breach, panic trigger, or alarm signal.',
      highlight: language === 'pt' ? '< 5 min de Resposta' : '< 5 min Response'
    },
    {
      icon: Lock,
      title: language === 'pt' ? 'Segurança Armada e Desarmada' : 'Armed & Unarmed Guarding',
      description: language === 'pt'
        ? 'Agentes habilitados e licenciados pelas autoridades competentes para atuar com armamento regulamentado ou defesa tática desarmada.'
        : 'Certified officers fully authorized by Mozambican police authorities for lethal weapons custody or unarmed corporate access control.',
      highlight: language === 'pt' ? 'Porte Homologado' : 'Licensed Arms'
    },
    {
      icon: FileCheck2,
      title: language === 'pt' ? 'Conformidade Legal & Fiscal' : 'Legal & Corporate Compliance',
      description: language === 'pt'
        ? 'Sociedade formal com Conservatória nº 100709287 e NUIT 400724423. Contratos transparentes e seguros de responsabilidade operacional.'
        : 'Fully incorporated enterprise under Registry No. 100709287 and Tax ID NUIT 400724423 with comprehensive third-party liability insurance.',
      highlight: language === 'pt' ? '100% Legalizado' : 'Fully Certified'
    },
    {
      icon: Clock,
      title: language === 'pt' ? 'Plantão de Comando Permanente' : 'Permanent Command Desk',
      description: language === 'pt'
        ? 'Comunicação contínua via rádio VHF/UHF criptografado e central telefônica direta para atendimento de ocorrências a qualquer hora do dia ou da noite.'
        : 'Encrypted VHF/UHF digital radio channels and direct dispatch helpline handling security incidents round-the-clock without interruption.',
      highlight: language === 'pt' ? 'Atendimento 24/7/365' : '24/7/365 Ops'
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-xs font-bold text-shield-blue uppercase tracking-wider">
            <span>{t('whyChooseUs.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {language === 'pt' ? (
              <>Por Que Escolher a <span className="text-shield-blue">DC SECURE GROUP</span>?</>
            ) : (
              <>Why Choose <span className="text-shield-blue">DC SECURE GROUP</span>?</>
            )}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {language === 'pt'
              ? 'Muito mais do que vigilância tradicional, oferecemos um ecossistema integrado de inteligência preventiva, proteção armada e tecnologia de ponta.'
              : 'Far beyond traditional security guarding, we provide an integrated ecosystem of preventive intelligence, armed protection, and tactical tech.'
            }
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-shield-blue/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-shield-blue group-hover:bg-shield-blue group-hover:text-white group-hover:scale-110 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-shield-blue">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-shield-blue transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs text-slate-500 font-medium group-hover:text-slate-700 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>{language === 'pt' ? 'Padrão de Qualidade Certificado' : 'Certified Quality Benchmark'}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
