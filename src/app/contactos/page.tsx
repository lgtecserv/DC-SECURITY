'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import ScrollReveal from '@/components/ScrollReveal';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Navigation, 
  ArrowUpRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function ContactosPage() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    servico: 'Vigilância Patrimonial',
    localizacao: 'Matola / Boane / Maputo',
    mensagem: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleWhatsAppRedirect = () => {
    const text = `*${language === 'pt' ? 'Solicitação de Contacto via Website:' : 'Website Contact Request:'}*%0A` +
      `*${language === 'pt' ? 'Nome:' : 'Name:'}* ${encodeURIComponent(formData.nome || 'Cliente')}%0A` +
      `*${language === 'pt' ? 'Telefone:' : 'Phone:'}* ${encodeURIComponent(formData.telefone || 'N/A')}%0A` +
      `*${language === 'pt' ? 'E-mail:' : 'Email:'}* ${encodeURIComponent(formData.email || 'N/A')}%0A` +
      `*${language === 'pt' ? 'Serviço:' : 'Service:'}* ${encodeURIComponent(formData.servico)}%0A` +
      `*${language === 'pt' ? 'Localização:' : 'Location:'}* ${encodeURIComponent(formData.localizacao)}%0A` +
      `*${language === 'pt' ? 'Mensagem:' : 'Message:'}* ${encodeURIComponent(formData.mensagem || 'Gostaria de mais informações.')}`;
    
    window.open(`https://wa.me/258845393269?text=${text}`, '_blank');
  };

  const servicesList = [
    t('servicesList.vigilancia.name'),
    t('servicesList.acessos.name'),
    t('servicesList.valores.name'),
    t('servicesList.vip.name'),
    t('servicesList.cctv.name'),
    t('servicesList.rastreio.name'),
    t('servicesList.treino.name'),
    t('servicesList.k9.name'),
  ];

  const faqs = [
    {
      q: language === 'pt' 
        ? 'Qual é o tempo de resposta para um pedido de cotação?' 
        : 'What is the average response time for a proposal inquiry?',
      a: language === 'pt'
        ? 'Nossa equipa comercial e técnica responde no prazo máximo de 2 a 4 horas úteis, com agendamento de visita técnica ao local se necessário.'
        : 'Our tactical sales and engineering desk replies within 2 to 4 business hours, scheduling an on-site physical risk audit if requested.'
    },
    {
      q: language === 'pt'
        ? 'A DC SECURE GROUP atua fora da província de Maputo?'
        : 'Does DC SECURE GROUP operate outside Maputo Province?',
      a: language === 'pt'
        ? 'Sim. Embora a nossa sede esteja em Boane, Matola Rio, cobrimos operações de escolta, transporte de valores e segurança patrimonial em todo o território nacional.'
        : 'Yes. While our headquarters is anchored in Boane, Matola Rio, we deploy armed escorts, CIT convoys, and physical guarding throughout Mozambique.'
    },
    {
      q: language === 'pt'
        ? 'Os vigilantes possuem seguro e formação certificada?'
        : 'Are security officers covered by liability insurance and certified?',
      a: language === 'pt'
        ? 'Todos os nossos agentes passam por formação continuada, possuem seguro de acidentes e responsabilidade civil, e operam sob alvará homologado pelas autoridades de Moçambique.'
        : 'Every officer completes mandatory continuous training, holds comprehensive personal accident and third-party liability insurance, and operates under authorized licenses.'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        
        {/* Expansive Hero Section with HD Video */}
        <Hero
          isSubpage={true}
          badge={t('contactosPage.badge')}
          pageTitle={t('contactosPage.title')}
          pageSubtitle={t('contactosPage.subtitle')}
          breadcrumbs={[
            { label: t('contactosPage.breadcrumbHome'), href: '/' },
            { label: t('contactosPage.breadcrumbContacts') }
          ]}
          ctaText={language === 'pt' ? 'Enviar Mensagem' : 'Send Message'}
          ctaLink="#formulario"
        />

        {/* 1. Canais Rápidos de Contacto em Cards */}
        <section className="py-16 sm:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-xs font-bold text-[#C35614] uppercase tracking-wider">
                  <span>{t('contactosPage.directChannelsTitle')}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102147] tracking-tight">
                  {language === 'pt' ? 'Como Podemos Ajudar Hoje?' : 'How Can We Assist You Today?'}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {language === 'pt'
                    ? 'Escolha o canal mais conveniente para falar com a nossa equipa de prontidão ou visite a nossa sede em Boane.'
                    : 'Select your preferred channel to connect with our operations desk or visit our headquarters in Boane.'
                  }
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Linhas Telefónicas */}
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-[#C35614]/40 hover:bg-white hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-sm">
                      <Phone className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-[#102147] mb-2">{t('contactosPage.callCenterTitle')}</h3>
                    <p className="text-xs text-slate-500 mb-4">{language === 'pt' ? 'Plantão permanente 24h/7d:' : '24/7 permanent dispatch:'}</p>
                    <div className="space-y-1.5">
                      <a href="tel:+258845393269" className="block text-sm font-bold text-[#102147] hover:text-[#C35614] transition-colors">
                        +258 84 539 3269
                      </a>
                      <a href="tel:+258863013135" className="block text-sm font-bold text-[#102147] hover:text-[#C35614] transition-colors">
                        +258 86 301 3135
                      </a>
                    </div>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-200/80">
                    <span className="text-[11px] font-bold text-emerald-600 uppercase">
                      {language === 'pt' ? 'Atendimento Imediato' : 'Immediate Dispatch'}
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 2: WhatsApp Corporativo */}
              <ScrollReveal animation="fade-up" delay={200}>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-[#C35614]/40 hover:bg-white hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-500/20">
                      <MessageSquare className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-[#102147] mb-2">{t('contactosPage.whatsappTitle')}</h3>
                    <p className="text-xs text-slate-500 mb-4">{language === 'pt' ? 'Converse em tempo real com um consultor:' : 'Chat in real-time with an adviser:'}</p>
                    <p className="text-sm font-bold text-slate-800">
                      +258 84 539 3269
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-200/80">
                    <a
                      href={`https://wa.me/258845393269?text=${encodeURIComponent(language === 'pt' ? 'Olá, gostaria de informações sobre os serviços da DC SECURE GROUP.' : 'Hello, I would like to inquire about DC SECURE GROUP services.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      <span>{language === 'pt' ? 'Abrir conversa WhatsApp →' : 'Start WhatsApp Chat →'}</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 3: E-mail Oficial */}
              <ScrollReveal animation="fade-up" delay={300}>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-[#C35614]/40 hover:bg-white hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#102147] flex items-center justify-center mb-6 shadow-sm">
                      <Mail className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-[#102147] mb-2">{t('contactosPage.emailTitle')}</h3>
                    <p className="text-xs text-slate-500 mb-4">{language === 'pt' ? 'Para propostas e documentação formal:' : 'For formal proposals and tenders:'}</p>
                    <div className="space-y-1.5">
                      <a href="mailto:contacto@dcsecuregroup.co.mz" className="block text-xs font-bold text-[#102147] hover:text-[#C35614] truncate transition-colors">
                        contacto@dcsecuregroup.co.mz
                      </a>
                      <a href="mailto:geral@dcsecuregroup.co.mz" className="block text-xs font-semibold text-slate-600 hover:text-[#C35614] truncate transition-colors">
                        geral@dcsecuregroup.co.mz
                      </a>
                    </div>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-200/80">
                    <span className="text-[11px] font-bold text-shield-blue uppercase">
                      {language === 'pt' ? 'Resposta em até 4h' : 'Reply within 4h'}
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 4: Sede Operacional */}
              <ScrollReveal animation="fade-up" delay={400}>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-[#C35614]/40 hover:bg-white hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-orange-100 text-[#C35614] flex items-center justify-center mb-6 shadow-sm">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-[#102147] mb-2">{t('contactosPage.officeTitle')}</h3>
                    <p className="text-xs text-slate-500 mb-2">{language === 'pt' ? 'Matola Rio, Boane:' : 'Matola Rio, Boane:'}</p>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      Rua da Administração da Matola Rio, nº 19, 2º Andar, Parcela 14993.
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-200/80">
                    <a
                      href="https://maps.google.com/?q=Matola+Rio+Boane+Mozambique"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-[#C35614] hover:text-[#A7450D] transition-colors"
                    >
                      <span>{language === 'pt' ? 'Ver no Google Maps →' : 'View on Google Maps →'}</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* 2. Formulário Interativo + Informações Operacionais */}
        <section id="formulario" className="py-20 sm:py-28 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Formulário (Col 7) */}
              <div className="lg:col-span-7">
                <ScrollReveal animation="fade-right">
                  <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
                    
                    <div className="mb-8">
                      <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#C35614] uppercase tracking-wider mb-2">
                        <Sparkles className="w-4 h-4" />
                        <span>{language === 'pt' ? 'Atendimento Rápido' : 'Rapid Response'}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102147]">
                        {t('contactosPage.formCardTitle')}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2">
                        {language === 'pt'
                          ? 'Preencha os campos abaixo para que o nosso oficial comercial prepare uma cotação sob medida.'
                          : 'Complete the fields below for our operations officer to assemble a tailored proposal.'
                        }
                      </p>
                    </div>

                    {isSubmitted ? (
                      <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                          <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <h4 className="text-xl font-bold text-emerald-900">{t('contact.successMsg')}</h4>
                        <div className="pt-4 flex flex-wrap justify-center gap-3">
                          <button
                            onClick={handleWhatsAppRedirect}
                            className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                          >
                            <MessageSquare className="w-4 h-4 mr-2" />
                            <span>{language === 'pt' ? 'Confirmar via WhatsApp' : 'Confirm on WhatsApp'}</span>
                          </button>
                          <button
                            onClick={() => setIsSubmitted(false)}
                            className="inline-flex items-center px-6 py-3 rounded-full bg-white text-slate-700 border border-slate-300 font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-all"
                          >
                            <span>{language === 'pt' ? 'Nova Mensagem' : 'New Message'}</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {/* Nome Completo */}
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">
                              {t('contact.nameLabel')} *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.nome}
                              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                              placeholder={t('contact.namePlaceholder')}
                              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C35614] focus:border-transparent transition"
                            />
                          </div>

                          {/* Telefone / WhatsApp */}
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">
                              {t('contact.phoneLabel')} *
                            </label>
                            <input
                              type="tel"
                              required
                              value={formData.telefone}
                              onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                              placeholder={t('contact.phonePlaceholder')}
                              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C35614] focus:border-transparent transition"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {/* E-mail */}
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">
                              {t('contact.emailLabel')} *
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder={t('contact.emailPlaceholder')}
                              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C35614] focus:border-transparent transition"
                            />
                          </div>

                          {/* Serviço Pretendido */}
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">
                              {t('contact.serviceLabel')} *
                            </label>
                            <select
                              value={formData.servico}
                              onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C35614] focus:border-transparent transition bg-white"
                            >
                              {servicesList.map((srv, idx) => (
                                <option key={idx} value={srv}>{srv}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Localização */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            {language === 'pt' ? 'Localização do Posto / Imóvel' : 'Facility Location'}
                          </label>
                          <input
                            type="text"
                            value={formData.localizacao}
                            onChange={(e) => setFormData({ ...formData, localizacao: e.target.value })}
                            placeholder={language === 'pt' ? 'Ex: Matola Rio, Boane, Maputo Cidade...' : 'e.g. Matola Rio, Boane, Maputo City...'}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C35614] focus:border-transparent transition"
                          />
                        </div>

                        {/* Mensagem */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            {t('contact.messageLabel')}
                          </label>
                          <textarea
                            rows={4}
                            value={formData.mensagem}
                            onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                            placeholder={t('contact.messagePlaceholder')}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C35614] focus:border-transparent transition resize-none"
                          />
                        </div>

                        {/* Botões de Envio */}
                        <div className="pt-2 flex flex-col sm:flex-row gap-3">
                          <button
                            type="submit"
                            disabled={isLoading}
                            className="flex-1 inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all active:scale-95 disabled:opacity-50"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            <span>{isLoading ? t('contact.sending') : t('contact.btnSubmit')}</span>
                          </button>

                          <button
                            type="button"
                            onClick={handleWhatsAppRedirect}
                            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
                          >
                            <MessageSquare className="w-4 h-4 mr-2" />
                            <span>{language === 'pt' ? 'Enviar via WhatsApp' : 'Submit via WhatsApp'}</span>
                          </button>
                        </div>

                      </form>
                    )}

                  </div>
                </ScrollReveal>
              </div>

              {/* Informações de Apoio & Horários (Col 5) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Horários */}
                <ScrollReveal animation="fade-left" delay={100}>
                  <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-4">
                    <div className="flex items-center space-x-3 text-[#102147]">
                      <Clock className="w-6 h-6 text-[#C35614]" />
                      <h4 className="text-lg font-bold">{t('contact.workingHoursTitle')}</h4>
                    </div>
                    <div className="space-y-3 text-xs text-slate-600 pt-2">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <span>{language === 'pt' ? 'Central 24h & Piquete Tático:' : '24h Command Desk & Patrols:'}</span>
                        <span className="font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">24h / 365 dias</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <span>{language === 'pt' ? 'Atendimento Administrativo:' : 'Administrative Support:'}</span>
                        <span className="font-semibold text-slate-800">{language === 'pt' ? 'Seg - Sex: 08h00 - 17h00' : 'Mon - Fri: 08:00 - 17:00'}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>{language === 'pt' ? 'Gabinete Técnico ao Sábado:' : 'Saturday Technical Desk:'}</span>
                        <span className="font-semibold text-slate-800">08h00 - 13h00</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Localização no Mapa Visual */}
                <ScrollReveal animation="fade-left" delay={200}>
                  <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center space-x-3">
                        <Navigation className="w-5 h-5 text-orange-400" />
                        <h4 className="font-bold text-base">{t('contactosPage.mapTitle')}</h4>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {language === 'pt'
                          ? 'Posicionamento com acesso rápido à EN4, permitindo despacho tático veloz para Boane, Matola, Machava e Grande Maputo.'
                          : 'Strategic position with rapid access to the EN4, enabling agile tactical deployment to Boane, Matola, Machava, and Greater Maputo.'
                        }
                      </p>
                      <div className="pt-2">
                        <a
                          href="https://maps.google.com/?q=Matola+Rio+Boane+Mozambique"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white font-bold text-xs uppercase tracking-wider transition-all"
                        >
                          <span>{language === 'pt' ? 'Abrir no Google Maps' : 'Open in Google Maps'}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

              </div>

            </div>
          </div>
        </section>

        {/* 3. Perguntas Frequentes (FAQ) */}
        <section className="py-20 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-12 space-y-3">
                <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#C35614] uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" />
                  <span>{language === 'pt' ? 'Dúvidas Comuns' : 'Common Questions'}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102147]">
                  {language === 'pt' ? 'Perguntas Frequentes sobre Atendimento' : 'Customer Support FAQ'}
                </h3>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition">
                    <h4 className="text-base font-bold text-[#102147] mb-2">{faq.q}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
      <FloatingWidgets />
    </>
  );
}
