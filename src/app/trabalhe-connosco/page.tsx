'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import { CheckCircle2, Send } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function TrabalheConnoscoPage() {
  const { t, language } = useLanguage();
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

  const jobAreas = [
    language === 'pt' ? 'Vigilância Patrimonial (Guarda)' : 'Physical Guarding (Static/Patrol)',
    language === 'pt' ? 'Transporte de Valores (Condutor/Escolta)' : 'Cash-In-Transit (CIT Driver/Escort)',
    language === 'pt' ? 'Segurança Pessoal VIP (Guarda-Costas)' : 'Executive Close Protection (VIP Bodyguard)',
    language === 'pt' ? 'Técnico de CCTV & Alarmes' : 'CCTV & Alarm Technician',
    language === 'pt' ? 'Operador de Rastreio Satélite' : 'Satellite Telematics Operator',
    language === 'pt' ? 'Condutor de Cães (K9)' : 'K9 Dog Handler',
    language === 'pt' ? 'Supervisão / Chefia de Posto' : 'Field Supervisor / Post Chief',
    language === 'pt' ? 'Administrativo / Recursos Humanos' : 'Administrative / Human Resources',
  ];

  const experienceLevels = [
    language === 'pt' ? 'Sem experiência (primeiro emprego em segurança)' : 'No prior experience (entry level)',
    language === 'pt' ? '1 a 2 anos' : '1 to 2 years',
    language === 'pt' ? '3 a 5 anos' : '3 to 5 years',
    language === 'pt' ? 'Mais de 5 anos' : 'More than 5 years',
    language === 'pt' ? 'Veterano das Forças Armadas / FADM / PRM' : 'Military / Police Veteran (FADM / PRM)',
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">

        {/* Expansive Hero Section with HD Video */}
        <Hero
          isSubpage={true}
          badge={t('trabalheConnoscoPage.badge')}
          pageTitle={t('trabalheConnoscoPage.title')}
          pageSubtitle={t('trabalheConnoscoPage.subtitle')}
          breadcrumbs={[
            { label: t('trabalheConnoscoPage.breadcrumbHome'), href: '/' },
            { label: t('trabalheConnoscoPage.breadcrumbCareers') }
          ]}
          ctaText={language === 'pt' ? 'Contactar Recursos Humanos' : 'Contact HR'}
          ctaLink="/contactos"
        />

        {/* Content Section */}
        <div id="formulario" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-l-4 border-[#C35614] pl-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102147]">
                  {language === 'pt' ? 'Construa a Sua Carreira na DC SECURE GROUP' : 'Build Your Career at DC SECURE GROUP'}
                </h2>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  {language === 'pt'
                    ? 'Valorizamos o profissionalismo, a integridade e a disciplina. Oferecemos formação contínua na nossa Academia Tática, remuneração pontual e plano de crescimento na carreira.'
                    : 'We value professionalism, integrity, and discipline. We offer continuous training at our Tactical Academy, competitive remuneration, and defined promotion paths.'
                  }
                </p>
              </div>

              {/* Requirements */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                <h3 className="text-base font-bold text-[#102147]">
                  {t('trabalheConnoscoPage.requirementsTitle')}
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C35614] flex-shrink-0 mt-0.5" />
                    <span>{t('trabalheConnoscoPage.req1')}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C35614] flex-shrink-0 mt-0.5" />
                    <span>{t('trabalheConnoscoPage.req2')}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C35614] flex-shrink-0 mt-0.5" />
                    <span>{t('trabalheConnoscoPage.req3')}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C35614] flex-shrink-0 mt-0.5" />
                    <span>{t('trabalheConnoscoPage.req4')}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C35614] flex-shrink-0 mt-0.5" />
                    <span>{t('trabalheConnoscoPage.req5')}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C35614] flex-shrink-0 mt-0.5" />
                    <span>{t('trabalheConnoscoPage.req6')}</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#102147] text-white space-y-2 text-xs">
                <p className="font-bold text-sm text-orange-200">
                  {language === 'pt' ? 'Entrega Presencial de Candidaturas:' : 'In-Person CV Submission:'}
                </p>
                <p className="text-slate-300">
                  {language === 'pt'
                    ? 'Rua do Posto Administrativo da Matola Rio, nº 19, 2º Andar, Bairro Matola Rio A, Boane - Moçambique.'
                    : 'Rua do Posto Administrativo da Matola Rio, No. 19, 2nd Floor, Matola Rio A, Boane - Mozambique.'
                  }
                </p>
                <p className="text-slate-400">
                  {language === 'pt' ? 'Atendimento a candidatos: Segunda a Sexta, das 08h às 15h.' : 'Candidate desk hours: Monday to Friday, 08:00 to 15:00.'}
                </p>
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
                    <h3 className="text-2xl font-bold text-[#102147]">
                      {language === 'pt' ? 'Candidatura Enviada com Sucesso!' : 'Application Submitted Successfully!'}
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      {language === 'pt' ? (
                        <>Obrigado pelo seu interesse em integrar a <strong>DC SECURE GROUP, Lda</strong>. O nosso departamento de Recursos Humanos analisará o seu perfil e entrará em contacto quando houver seleção para a sua área.</>
                      ) : (
                        <>Thank you for your interest in joining <strong>DC SECURE GROUP, Lda</strong>. Our HR department will review your credentials and contact you when a suitable opening arises.</>
                      )}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-full bg-[#C35614] text-white font-bold text-xs"
                    >
                      {language === 'pt' ? 'Enviar Nova Candidatura' : 'Submit Another Application'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-bold text-[#102147] mb-2">
                      {language === 'pt' ? 'Formulário de Recrutamento' : 'Candidate Application Form'}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          {t('contact.nameLabel')} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.nome}
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          placeholder={language === 'pt' ? 'Ex: Manuel António Sitoe' : 'e.g. Manuel Antonio'}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#C35614] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          {t('contact.phoneLabel')} *
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
                          {t('contact.emailLabel')}
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
                          {language === 'pt' ? 'Vaga / Área de Interesse *' : 'Desired Position / Specialty *'}
                        </label>
                        <select
                          value={formData.area}
                          onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#C35614] focus:outline-none bg-white"
                        >
                          {jobAreas.map((area, idx) => (
                            <option key={idx} value={area}>{area}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {language === 'pt' ? 'Experiência Prévia em Segurança' : 'Prior Security Experience'}
                      </label>
                      <select
                        value={formData.experiencia}
                        onChange={(e) => setFormData({ ...formData, experiencia: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#C35614] focus:outline-none bg-white"
                      >
                        {experienceLevels.map((lvl, idx) => (
                          <option key={idx} value={lvl}>{lvl}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {language === 'pt' ? 'Mensagem / Resumo das Qualificações' : 'Summary of Qualifications & Courses'}
                      </label>
                      <textarea
                        rows={4}
                        value={formData.mensagem}
                        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                        placeholder={language === 'pt'
                          ? 'Mencione os seus pontos fortes, cursos de segurança, cartas de condução, etc.'
                          : 'Mention key qualifications, driving licenses, firearm permits, tactical courses, etc.'
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#C35614] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white font-bold text-sm uppercase tracking-wider shadow-lg transition-all active:scale-95 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{language === 'pt' ? 'Submeter Candidatura' : 'Submit Application'}</span>
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
