import React from 'react';
import { Search, ShieldAlert, Cpu, CheckCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HowWeWork() {
  const steps = [
    {
      step: '01',
      icon: Search,
      title: 'Auditoria & Diagnóstico de Risco',
      description: 'Nossa equipa de consultores táticos desloca-se às suas instalações para mapear pontos cegos, vulnerabilidades de acesso e histórico de ocorrências na zona.',
      tag: 'Levantamento Tático',
    },
    {
      step: '02',
      icon: Cpu,
      title: 'Dimensionamento & Engenharia de Segurança',
      description: 'Desenhamos um plano de segurança customizado: definição exata do número de agentes, turnos, tipo de armamento regulamentado, barreiras físicas e câmaras analíticas.',
      tag: 'Plano Personalizado',
    },
    {
      step: '03',
      icon: ShieldAlert,
      title: 'Mobilização Rápida & Treinamento do Posto',
      description: 'Alocamos agentes rigorosamente selecionados e uniformizados com a insígnia oficial da DC SECURE GROUP, instruídos com ordens de posto específicas para o seu negócio.',
      tag: 'Operação Imediata',
    },
    {
      step: '04',
      icon: CheckCheck,
      title: 'Supervisão Motorizada & Monitoria 24/7',
      description: 'Acompanhamento permanente pelo nosso Centro de Comando, rondas móveis ostensivas aleatórias e relatórios diários de circulação e controle.',
      tag: 'Proteção Permanente',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-navy-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-shield-blue/10 border border-shield-blue/30 text-xs font-semibold text-shield-accent uppercase tracking-wider">
            <span>Metodologia Operacional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Como Trabalhamos: <span className="gradient-text-blue">Do Diagnóstico à Proteção Total</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Processos padronizados com disciplina militar e rigor corporativo para garantir segurança contínua sem interrupções.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-shield-accent/40 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Large Background Step Number */}
                <div className="absolute -top-4 -right-2 text-7xl font-black text-navy-800/40 select-none group-hover:text-shield-blue/10 transition-colors">
                  {item.step}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-800 border border-shield-accent/30 flex items-center justify-center text-shield-accent group-hover:bg-shield-blue group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-shield-blue/10 text-shield-accent border border-shield-blue/20">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-shield-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-navy-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Fase Operacional {item.step}</span>
                  <div className="w-2 h-2 rounded-full bg-shield-accent" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <Link
            href="#cotacao"
            className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-shield-blue hover:bg-blue-600 text-white font-semibold text-sm shadow-xl shadow-shield-blue/25 transition-all"
          >
            <span>Agendar Auditoria de Risco Gratuita</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
