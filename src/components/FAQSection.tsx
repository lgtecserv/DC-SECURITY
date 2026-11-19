'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Qual é o prazo médio para início das operações após a contratação?',
      a: 'Para postos de vigilância patrimonial regulares, a nossa mobilização padrão ocorre entre 24 a 48 horas úteis após a aprovação da auditoria de risco. Em situações de emergência tática ou reforço imediato, dispomos de efetivo de prontidão para ativação em poucas horas.',
    },
    {
      q: 'Os agentes de segurança são legalmente habilitados e passam por verificação?',
      a: 'Sim, rigorosamente. Todos os colaboradores da DC SECURE GROUP, Lda passam por verificação minuciosa de registo criminal, avaliação psicológica e treino de tiro tático ou defesa desarmada, em estrita observância das normas regulamentares da segurança privada em Moçambique.',
    },
    {
      q: 'Qual é o raio de cobertura geográfica dos vossos serviços?',
      a: 'Com sede e hub operacional estrategicamente situados na Matola Rio / Boane, cobrimos com prontidão máxima a Província de Maputo, Cidade de Maputo e corredores industriais e portuários. Para serviços de escolta de valores, proteção VIP e rastreamento de frotas por satélite, a nossa cobertura abrange todo o território nacional e conexões transfronteiriças da SADC.',
    },
    {
      q: 'Como é garantida a segurança no Transporte de Fundos e Valores?',
      a: 'O transporte é realizado exclusivamente em viaturas com blindagem balística certificada, tripulação tática armada, rotas aleatórias monitoradas via satélite com corte de ignição remoto e seguro de carga abrangente para garantir risco zero ao contratante.',
    },
    {
      q: 'Como funciona a Central de Monitoramento 24 Horas em caso de disparo de alarme?',
      a: 'No momento exato da intrusão ou do acionamento do botão de pânico, a nossa Central de Comando recebe o sinal e despacha imediatamente a Equipa de Reação Rápida mais próxima, enquanto os operadores mantêm contacto telefónico e com as forças policiais locais se necessário.',
    },
    {
      q: 'É possível solicitar cotação para eventos privados ou serviços temporários?',
      a: 'Sim. Oferecemos planos flexíveis tanto para contratos continuados (anuais/mensais) quanto para operações pontuais de apoio a eventos corporativos, feiras, receções diplomáticas e escolta VIP temporária.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-shield-blue uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Esclareça as Suas <span className="text-shield-blue">Dúvidas Operacionais</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Respostas transparentes sobre contratação, conformidade legal e protocolos de segurança.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 pr-4">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-shield-blue flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-shield-blue text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/80 pt-4 bg-white/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Footer */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">Ainda tem alguma dúvida específica?</h4>
            <p className="text-xs text-slate-600">Nossa direção operacional está à disposição para consultoria técnica.</p>
          </div>
          <Link
            href="/contactos"
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-shield-blue hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-colors whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Falar com o Plantão Operacional</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
