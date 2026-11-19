'use client';

import React, { useState } from 'react';
import { Calculator, Send, CheckCircle2, Shield, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function QuoteSimulator() {
  const { language } = useLanguage();
  const [service, setService] = useState('vigilancia-patrimonial');
  const [clientType, setClientType] = useState('empresa');
  const [shifts, setShifts] = useState('24h');
  const [agents, setAgents] = useState(2);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('Matola / Maputo');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    { 
      id: 'vigilancia-patrimonial', 
      label: language === 'pt' ? 'Vigilância Patrimonial' : 'Asset Protection & Guarding' 
    },
    { 
      id: 'transporte-valores', 
      label: language === 'pt' ? 'Transporte de Valores (CIT)' : 'Cash-In-Transit (CIT)' 
    },
    { 
      id: 'protecao-vip', 
      label: language === 'pt' ? 'Proteção VIP / Guarda-Costas' : 'Executive VIP Protection' 
    },
    { 
      id: 'controlo-acessos', 
      label: language === 'pt' ? 'Controlo de Acessos & Portaria' : 'Access Control & Screening' 
    },
    { 
      id: 'seguranca-eletronica', 
      label: language === 'pt' ? 'Segurança Eletrónica / CCTV' : 'Electronic Security & CCTV' 
    },
    { 
      id: 'rastreio-satelite', 
      label: language === 'pt' ? 'Rastreio Satélite de Viaturas' : 'Satellite Fleet Tracking' 
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const whatsappMessage = encodeURIComponent(
      `*SOLICITAÇÃO DE COTAÇÃO - DC SECURE GROUP, Lda*\n` +
      `--------------------------------------\n` +
      `*Nome:* ${name}\n` +
      `*Telefone:* ${phone}\n` +
      `*E-mail:* ${email || 'Não informado'}\n` +
      `*Localização:* ${location}\n` +
      `*Serviço Solicitado:* ${service}\n` +
      `*Tipo de Instalação:* ${clientType}\n` +
      `*Escala Desejada:* ${shifts}\n` +
      `*Qtd. Agentes Estimada:* ${agents}\n` +
      `*Observações:* ${details || 'Nenhuma'}\n` +
      `--------------------------------------\n` +
      `Enviado via website oficial da DC SECURE GROUP`
    );

    const whatsappUrl = `https://wa.me/258845393269?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="cotacao" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-xs font-bold text-shield-blue uppercase tracking-wider">
            <span>{language === 'pt' ? 'Cotação Sem Compromisso' : 'No-Obligation Estimate'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {language === 'pt' ? (
              <>Simule e Solicite uma <span className="text-shield-blue">Proposta à Medida</span></>
            ) : (
              <>Simulate & Request a <span className="text-shield-blue">Tailored Proposal</span></>
            )}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {language === 'pt'
              ? 'Nossos consultores de risco analisam as necessidades específicas da sua empresa ou residência para dimensionar a melhor solução de segurança.'
              : 'Our tactical risk advisers assess your premises requirements to architect the ideal physical and technical security setup.'
            }
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl relative overflow-hidden">
            
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {language === 'pt' ? 'Solicitação Encaminhada com Sucesso!' : 'Inquiry Submitted Successfully!'}
                  </h3>
                  <p className="text-slate-600 max-w-lg mx-auto text-sm">
                    {language === 'pt' ? (
                      <>Agradecemos pelo seu contacto. Um especialista operacional da <strong className="text-slate-900">DC SECURE GROUP, Lda</strong> entrará em contacto dentro de instantes pelo telefone ou WhatsApp fornecido.</>
                    ) : (
                      <>Thank you for your inquiry. A security specialist from <strong className="text-slate-900">DC SECURE GROUP, Lda</strong> will contact you shortly via phone or WhatsApp.</>
                    )}
                  </p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 text-sm font-semibold transition"
                  >
                    {language === 'pt' ? 'Simular Nova Proposta' : 'Simulate New Proposal'}
                  </button>
                  <a
                    href="https://wa.me/258845393269"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md transition"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{language === 'pt' ? 'Abrir Chat WhatsApp' : 'Open WhatsApp Chat'}</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Step 1: Service Type */}
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                    {language === 'pt' ? '1. Selecione o Serviço Principal Desejado' : '1. Select Required Primary Service'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {servicesList.map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setService(item.label)}
                        className={`p-3.5 rounded-xl border text-left text-xs font-bold transition-all ${
                          service === item.label
                            ? 'bg-blue-50 border-shield-blue text-shield-blue shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.label}</span>
                          {service === item.label && <Shield className="w-3.5 h-3.5 text-shield-blue" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Deployment Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      {language === 'pt' ? 'Tipo de Cliente / Instalação' : 'Facility / Client Profile'}
                    </label>
                    <select
                      value={clientType}
                      onChange={(e) => setClientType(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-slate-900 focus:outline-none focus:border-shield-blue focus:bg-white"
                    >
                      <option value="Empresa / Escritório">{language === 'pt' ? 'Empresa / Escritório' : 'Corporate Office'}</option>
                      <option value="Indústria / Armazém">{language === 'pt' ? 'Indústria / Armazém' : 'Industrial Warehouse'}</option>
                      <option value="Condomínio Residencial">{language === 'pt' ? 'Condomínio Residencial' : 'Residential Condominium'}</option>
                      <option value="Instituição Financeira / Banco">{language === 'pt' ? 'Instituição Financeira / Banco' : 'Financial Institution / Bank'}</option>
                      <option value="Evento / Proteção Especial">{language === 'pt' ? 'Evento / Proteção Especial' : 'Event / VIP Protection'}</option>
                      <option value="Frota de Transporte">{language === 'pt' ? 'Frota de Transporte' : 'Transport Fleet'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      {language === 'pt' ? 'Turno Operacional' : 'Operational Shift'}
                    </label>
                    <select
                      value={shifts}
                      onChange={(e) => setShifts(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-slate-900 focus:outline-none focus:border-shield-blue focus:bg-white"
                    >
                      <option value="24 Horas">{language === 'pt' ? '24 Horas (Dia e Noite)' : '24/7 (Day & Night)'}</option>
                      <option value="Apenas Turno Noturno (12h)">{language === 'pt' ? 'Apenas Noturno (12h)' : 'Night Shift Only (12h)'}</option>
                      <option value="Apenas Turno Diurno (12h)">{language === 'pt' ? 'Apenas Diurno (12h)' : 'Day Shift Only (12h)'}</option>
                      <option value="Eventos Específicos">{language === 'pt' ? 'Sob Demanda / Pontual' : 'On-Demand / Temporary'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      {language === 'pt' ? 'Efetivo Estimado (Agentes)' : 'Estimated Headcount (Guards)'}
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={50}
                      value={agents}
                      onChange={(e) => setAgents(parseInt(e.target.value) || 1)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-slate-900 focus:outline-none focus:border-shield-blue focus:bg-white"
                    />
                  </div>
                </div>

                {/* Step 3: Contact details */}
                <div className="space-y-4 pt-2 border-t border-slate-200">
                  <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider">
                    {language === 'pt' ? '2. Dados para Envio da Proposta' : '2. Contact Information for Proposal'}
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder={language === 'pt' ? 'Nome Completo ou Empresa *' : 'Full Name or Enterprise *'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-shield-blue focus:bg-white"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder={language === 'pt' ? 'Telefone / WhatsApp (ex: +258 84...) *' : 'Phone / WhatsApp (e.g. +258 84...) *'}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-shield-blue focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        placeholder={language === 'pt' ? 'E-mail de Contacto (opcional)' : 'Contact Email (optional)'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-shield-blue focus:bg-white"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder={language === 'pt' ? 'Localização da Instalação (ex: Matola Rio, Boane, Maputo)' : 'Facility Location (e.g. Matola Rio, Boane, Maputo)'}
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-shield-blue focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      placeholder={language === 'pt' 
                        ? 'Descreva detalhes específicos (ex: tamanho da área, pontos de acesso críticos, necessidades adicionais)...' 
                        : 'Specify requirements (e.g. facility square meters, critical perimeter gates, specialized equipment)...'
                      }
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-shield-blue focus:bg-white resize-none"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-shield-blue hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-shield-blue/25 active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>{language === 'pt' ? 'Enviar Pedido de Cotação e Conectar via WhatsApp' : 'Submit Proposal Request via WhatsApp'}</span>
                  </button>
                  <p className="text-center text-[11px] text-slate-500 mt-2.5">
                    {language === 'pt' 
                      ? 'Seus dados são confidenciais e tratados sob estrito sigilo de segurança corporativa pela DC SECURE GROUP, Lda.'
                      : 'Your information is confidential and treated under strict corporate non-disclosure by DC SECURE GROUP, Lda.'
                    }
                  </p>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
