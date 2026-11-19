'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import { CheckCircle2, Send } from 'lucide-react';

export default function TrabalheConnoscoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    area: 'Vigilância Patrimonial',
    experiencia: 'Sem experiência',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">

        {/* Expansive Hero Section with HD Video */}
        <Hero
          isSubpage={true}
          badge="RECRUTAMENTO & CARREIRA"
          pageTitle="Trabalhe Connosco"
          pageSubtitle="Junte-se à equipa de segurança mais respeitada de Moçambique. Oportunidades para vigilantes, condutores de valores e técnicos."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Trabalhe Connosco' }
          ]}
          ctaText="Contactar Recursos Humanos"
          ctaLink="/contactos"
        />

        {/* Content Section */}
        <div id="formulario" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-l-4 border-[#C35614] pl-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102147]">
                  Construa a Sua Carreira na DC SECURE GROUP
                </h2>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  Valorizamos o profissionalismo, a integridade e a disciplina. Oferecemos formação contínua na nossa Academia Tática, remuneração pontual e plano de crescimento na carreira.
                </p>
              </div>

              {/* Requirements */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                <h3 className="text-base font-bold text-[#102147]">
                  Requisitos Gerais de Admissão:
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C35614] flex-shrink-0 mt-0.5" />
                    <span>Nacionalidade moçambicana e idade superior a 21 anos;</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C35614] flex-shrink-0 mt-0.5" />
                    <span>Registo Criminal limpo (sem antecedentes);</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C35614] flex-shrink-0 mt-0.5" />
                    <span>Nível de escolaridade mínimo de 10ª ou 12ª classe;</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C35614] flex-shrink-0 mt-0.5" />
                    <span>Aptidão física e médica comprovada para funções de segurança;</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C35614] flex-shrink-0 mt-0.5" />
                    <span>Serviço militar cumprido ou experiência prévia é vantagem.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#102147] text-white space-y-2 text-xs">
                <p className="font-bold text-sm text-orange-200">Entrega Presencial de Candidaturas:</p>
                <p className="text-slate-300">
                  Rua do Posto Administrativo da Matola Rio, nº 19, 2º Andar, Bairro Matola Rio A, Boane - Moçambique.
                </p>
                <p className="text-slate-400">Atendimento a candidatos: Segunda a Sexta, das 08h às 15h.</p>
              </div>
            </div>

            {/* Right Application Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#102147]">Candidatura Enviada com Sucesso!</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Obrigado pelo seu interesse em integrar a <strong>DC SECURE GROUP, Lda</strong>. O nosso departamento de Recursos Humanos analisará o seu perfil e entrará em contacto quando houver seleção para a sua área.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-full bg-[#C35614] text-white font-bold text-xs"
                    >
                      Enviar Nova Candidatura
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-bold text-[#102147] mb-2">
                      Formulário de Recrutamento
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.nome}
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          placeholder="Ex: Manuel António Sitoe"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#C35614] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Telefone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.telefone}
                          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                          placeholder="+258 84 539 3269"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#C35614] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Email (opcional)
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="seu.email@exemplo.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#C35614] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Vaga / Área de Interesse *
                        </label>
                        <select
                          value={formData.area}
                          onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#C35614] focus:outline-none bg-white"
                        >
                          <option>Vigilância Patrimonial (Guarda)</option>
                          <option>Transporte de Valores (Condutor/Escolta)</option>
                          <option>Segurança Pessoal VIP (Guarda-Costas)</option>
                          <option>Técnico de CCTV & Alarmes</option>
                          <option>Operador de Rastreio Satélite</option>
                          <option>Condutor de Cães (K9)</option>
                          <option>Supervisão / Chefia de Posto</option>
                          <option>Administrativo / Recursos Humanos</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Experiência Prévia em Segurança
                      </label>
                      <select
                        value={formData.experiencia}
                        onChange={(e) => setFormData({ ...formData, experiencia: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#C35614] focus:outline-none bg-white"
                      >
                        <option>Sem experiência (primeiro emprego em segurança)</option>
                        <option>1 a 2 anos</option>
                        <option>3 a 5 anos</option>
                        <option>Mais de 5 anos</option>
                        <option>Veterano das Forças Armadas / FADM / PRM</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Mensagem / Resumo das Qualificações
                      </label>
                      <textarea
                        rows={4}
                        value={formData.mensagem}
                        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                        placeholder="Mencione os seus pontos fortes, cursos de segurança, cartas de condução, etc."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#C35614] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white font-bold text-sm uppercase tracking-wider shadow-lg transition-all active:scale-95 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submeter Candidatura</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>

      </main>

      <Footer />
      <FloatingWidgets />
    </>
  );
}
