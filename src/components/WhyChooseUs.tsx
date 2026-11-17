import React from 'react';
import { ShieldCheck, UserCheck, Radio, Award, Clock, FileCheck2, Zap, Lock } from 'lucide-react';

export default function WhyChooseUs() {
  const differentiators = [
    {
      icon: UserCheck,
      title: 'Triagem e Recrutamento Rigoroso',
      description: '100% dos nossos agentes passam por verificação minuciosa de antecedentes criminais, testes psicológicos e histórico militar/policial comprovado.',
      highlight: 'Antecedentes Verificados'
    },
    {
      icon: Radio,
      title: 'Supervisão Motorizada 24/7',
      description: 'Rondas ostensivas permanentes com viaturas e motos táticas para fiscalização in loco e apoio imediato aos postos de serviço.',
      highlight: 'Rondas Constantes'
    },
    {
      icon: Zap,
      title: 'Pronta Resposta em Tempo Recorde',
      description: 'Equipas de apoio tático posicionadas estrategicamente para intervir em menos de 5 minutos após o acionamento de alarme ou pânico.',
      highlight: '< 5 min de Resposta'
    },
    {
      icon: Lock,
      title: 'Segurança Armada e Desarmada',
      description: 'Agentes habilitados e licenciados pelas autoridades competentes para atuar com armamento regulamentado ou defesa tática desarmada.',
      highlight: 'Porte Homologado'
    },
    {
      icon: FileCheck2,
      title: 'Conformidade Legal & Fiscal',
      description: 'Sociedade formal com Conservatória nº 100709287 e NUIT 400724423. Contratos transparentes e seguros de responsabilidade operacional.',
      highlight: '100% Legalizado'
    },
    {
      icon: Clock,
      title: 'Plantão de Comando Permanente',
      description: 'Comunicação contínua via rádio VHF/UHF criptografado e central telefônica direta para atendimento de ocorrências a qualquer hora do dia ou da noite.',
      highlight: 'Atendimento 24/7/365'
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-navy-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-shield-blue/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-shield-blue/10 border border-shield-blue/30 text-xs font-semibold text-shield-accent uppercase tracking-wider">
            <span>Diferenciais Competitivos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Por Que Escolher a <span className="gradient-text-blue">DC SECURE GROUP</span>?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Muito mais do que vigilância tradicional, oferecemos um ecossistema integrado de inteligência preventiva, proteção armada e tecnologia de ponta.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-panel rounded-2xl p-7 border border-white/5 hover:border-shield-accent/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-shield-blue/20 border border-shield-blue/40 flex items-center justify-center text-shield-accent group-hover:bg-shield-blue group-hover:text-white group-hover:scale-110 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-navy-900 border border-shield-accent/20 text-shield-accent">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-shield-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-navy-800/80 flex items-center text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                  <span>Padrão de Qualidade Certificado</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
