'use client';

import React, { useState } from 'react';
import { Calculator, Send, CheckCircle2, Shield, MessageSquare, PhoneCall } from 'lucide-react';

export default function QuoteSimulator() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp Message for direct link
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

    // If phone number is configured, could open WhatsApp window:
    const whatsappUrl = `https://wa.me/258840000000?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="cotacao" className="py-20 md:py-28 bg-navy-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-shield-blue/10 border border-shield-blue/30 text-xs font-semibold text-shield-accent uppercase tracking-wider">
            <span>Cotação Sem Compromisso</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Simule e Solicite uma <span className="gradient-text-blue">Proposta à Medida</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Nossos consultores de risco analisam as necessidades específicas da sua empresa ou residência para dimensionar a melhor solução de segurança.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
            
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Solicitação Encaminhada com Sucesso!</h3>
                  <p className="text-slate-300 max-w-lg mx-auto text-sm">
                    Agradecemos pelo seu contacto. Um especialista operacional da <strong>DC SECURE GROUP, Lda</strong> entrará em contacto dentro de instantes pelo telefone ou WhatsApp fornecido.
                  </p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-xl bg-navy-800 text-slate-200 hover:text-white border border-slate-700 text-sm font-semibold transition"
                  >
                    Simular Nova Proposta
                  </button>
                  <a
                    href="https://wa.me/258840000000"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold shadow-lg transition"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Abrir Chat WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Step 1: Service Type */}
                <div>
                  <label className="block text-sm font-bold text-slate-200 mb-3 uppercase tracking-wider">
                    1. Selecione o Serviço Principal Desejado
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      { id: 'vigilancia-patrimonial', label: 'Vigilância Patrimonial' },
                      { id: 'transporte-valores', label: 'Transporte de Valores (CIT)' },
                      { id: 'protecao-vip', label: 'Proteção VIP / Guarda-Costas' },
                      { id: 'controlo-acessos', label: 'Controlo de Acessos & Portaria' },
                      { id: 'seguranca-eletronica', label: 'Segurança Eletrónica / CCTV' },
                      { id: 'rastreio-satelite', label: 'Rastreio Satélite de Viaturas' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setService(item.label)}
                        className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                          service === item.label
                            ? 'bg-shield-blue/20 border-shield-accent text-white shadow-md'
                            : 'bg-navy-950/60 border-white/5 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.label}</span>
                          {service === item.label && <Shield className="w-3.5 h-3.5 text-shield-accent" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Deployment Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Tipo de Cliente / Instalação
                    </label>
                    <select
                      value={clientType}
                      onChange={(e) => setClientType(e.target.value)}
                      className="w-full bg-navy-950 border border-slate-700 rounded-xl px-3.5 py-3 text-sm text-slate-200 focus:outline-none focus:border-shield-accent"
                    >
                      <option value="Empresa / Escritório">Empresa / Escritório</option>
                      <option value="Indústria / Armazém">Indústria / Armazém</option>
                      <option value="Condomínio Residencial">Condomínio Residencial</option>
                      <option value="Instituição Financeira / Banco">Instituição Financeira</option>
                      <option value="Evento / Proteção Especial">Evento / Proteção Especial</option>
                      <option value="Frota de Transporte">Frota de Transporte</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Turno Operacional
                    </label>
                    <select
                      value={shifts}
                      onChange={(e) => setShifts(e.target.value)}
                      className="w-full bg-navy-950 border border-slate-700 rounded-xl px-3.5 py-3 text-sm text-slate-200 focus:outline-none focus:border-shield-accent"
                    >
                      <option value="24 Horas (Turno Completo Diurno + Noturno)">24 Horas (Dia e Noite)</option>
                      <option value="Apenas Turno Noturno (12h)">Apenas Turno Noturno (12h)</option>
                      <option value="Apenas Turno Diurno (12h)">Apenas Turno Diurno (12h)</option>
                      <option value="Eventos Específicos / Sob Demanda">Sob Demanda / Pontual</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Efetivo Estimado (Agentes)
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={50}
                      value={agents}
                      onChange={(e) => setAgents(parseInt(e.target.value) || 1)}
                      className="w-full bg-navy-950 border border-slate-700 rounded-xl px-3.5 py-3 text-sm text-slate-200 focus:outline-none focus:border-shield-accent"
                    />
                  </div>
                </div>

                {/* Step 3: Contact details */}
                <div className="space-y-4 pt-2 border-t border-navy-800">
                  <label className="block text-sm font-bold text-slate-200 uppercase tracking-wider">
                    2. Dados para Envio da Proposta
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Nome Completo ou Empresa *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-navy-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-shield-accent"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Telefone / WhatsApp (ex: +258 84...) *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-navy-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-shield-accent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        placeholder="E-mail de Contacto (opcional)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-navy-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-shield-accent"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Localização da Instalação (ex: Matola Rio, Boane, Maputo)"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-navy-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-shield-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      placeholder="Descreva detalhes específicos (ex: tamanho da área, pontos de acesso críticos, necessidades adicionais)..."
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className="w-full bg-navy-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-shield-accent resize-none"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-shield-blue via-blue-600 to-shield-light text-white font-bold text-base shadow-xl shadow-shield-blue/30 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar Pedido de Cotação e Conectar via WhatsApp</span>
                  </button>
                  <p className="text-center text-[11px] text-slate-400 mt-2.5">
                    Seus dados são confidenciais e tratados sob estrito sigilo de segurança corporativa pela DC SECURE GROUP, Lda.
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
