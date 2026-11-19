'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Navigation, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function ContactSection() {
  const { t, language } = useLanguage();

  return (
    <section id="contacto" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-shield-blue uppercase tracking-wider">
            <span>{language === 'pt' ? 'Presença Física e Contacto Direto' : 'Physical Base & Direct Inquiries'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {language === 'pt' ? (
              <>Fale com a <span className="text-shield-blue">DC SECURE GROUP</span></>
            ) : (
              <>Connect with <span className="text-shield-blue">DC SECURE GROUP</span></>
            )}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {language === 'pt' 
              ? 'Nossa sede operacional e administrativa está de portas abertas na Matola Rio, Boane.'
              : 'Our operational and administrative headquarters is readily accessible in Matola Rio, Boane.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3 hover:border-shield-blue/40 hover:shadow-md transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-blue-100 text-shield-blue flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {language === 'pt' ? 'Endereço Comercial & Sede' : 'Commercial Headquarters Address'}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {language === 'pt'
                      ? 'Rua do Posto Administrativo da Matola Rio (Rua da Administração da Matola Rio), nº 19, 2º Andar, Bairro da Matola Rio A.'
                      : 'Rua do Posto Administrativo da Matola Rio, No. 19, 2nd Floor, Matola Rio A Neighborhood.'
                    }
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {language === 'pt' ? 'Edifício de 3 Pisos • Parcela 14993 (DUAT com autorização nº 32)' : '3-Story Complex • Plot 14993 (DUAT License No. 32)'}
                  </p>
                  <p className="text-xs font-bold text-shield-blue mt-0.5">
                    Boane, Província de Maputo — Moçambique
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Phone / 24h Central */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3 hover:border-shield-blue/40 hover:shadow-md transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {language === 'pt' ? 'Central Operacional & Despacho' : 'Tactical Command & Dispatch'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {language === 'pt' ? 'Linha de plantão 24 horas por dia, 7 dias por semana:' : '24/7 round-the-clock emergency dispatch line:'}
                  </p>
                  <p className="text-base font-bold text-emerald-600 mt-1 flex flex-wrap gap-2">
                    <a href="tel:+258845393269" className="hover:underline">+258 84 539 3269</a>
                    <span className="text-slate-400">|</span>
                    <a href="tel:+258863013135" className="hover:underline">+258 86 301 3135</a>
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {language === 'pt' ? 'Atendimento rápido para emergências patrimoniais e escolta.' : 'Immediate response for facility emergencies and armed convoy support.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Electronic Mail & Commercial Inquiries */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3 hover:border-shield-blue/40 hover:shadow-md transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-blue-100 text-shield-blue flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {language === 'pt' ? 'Comunicação Oficial & Propostas' : 'Official Correspondence & RFPs'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {language === 'pt' ? 'Para propostas formais, concursos públicos e parcerias:' : 'For corporate proposals, government tenders, and partnerships:'}
                  </p>
                  <p className="text-sm font-bold text-shield-blue mt-1">
                    <a href="mailto:contacto@dcsecuregroup.co.mz" className="hover:underline">
                      contacto@dcsecuregroup.co.mz
                    </a>
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {language === 'pt' ? 'Direção Executiva:' : 'Executive Leadership:'} <strong className="text-slate-900">Sr. Danício Fabião Chongole</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3 hover:border-shield-blue/40 hover:shadow-md transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-amber-100 text-amber-700 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {language === 'pt' ? 'Horários de Atendimento' : 'Service Schedule'}
                  </h3>
                  <div className="text-xs text-slate-600 mt-1 space-y-1">
                    <div className="flex justify-between">
                      <span>{language === 'pt' ? 'Central de Monitoramento & Segurança:' : 'Tactical Command & Monitoring:'}</span>
                      <strong className="text-emerald-600 font-bold">{language === 'pt' ? '24h / 365 dias' : '24/7 / 365 days'}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === 'pt' ? 'Gabinete Administrativo (Matola Rio):' : 'Administrative Office (Matola Rio):'}</span>
                      <span className="text-slate-700 font-semibold">{language === 'pt' ? 'Segunda a Sexta, 08h00 - 17h00' : 'Monday to Friday, 08:00 - 17:00'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Geographic Location Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <Navigation className="w-5 h-5 text-shield-blue" />
                  <h3 className="font-bold text-slate-900 text-base">
                    {language === 'pt' ? 'Localização Estratégica em Boane / Matola Rio' : 'Strategic Base in Boane / Matola Rio'}
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-slate-500">
                  {language === 'pt' ? 'Coord. Geográfica Sede' : 'HQ Geo Coordinates'}
                </span>
              </div>

              {/* Simulated Map Visual Display */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 h-72 sm:h-96 flex flex-col items-center justify-center text-center p-6 shadow-inner">
                
                {/* Background Map Grid Graphic */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00a8ff_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Radar Ripple Effect */}
                <div className="absolute w-44 h-44 rounded-full border border-shield-accent/30 animate-ping pointer-events-none" />
                <div className="absolute w-24 h-24 rounded-full border border-shield-accent/50 pointer-events-none" />

                {/* Map Marker */}
                <div className="relative z-10 space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-shield-blue text-white mx-auto flex items-center justify-center shadow-2xl shadow-shield-blue/50 ring-4 ring-slate-800">
                    <ShieldCheck className="w-9 h-9" />
                  </div>
                  <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-200 shadow-xl">
                    <h4 className="font-bold text-slate-900 text-sm">DC SECURE GROUP, Lda</h4>
                    <p className="text-[11px] text-slate-600">Rua da Administração da Matola Rio, nr. 19, 2º Andar</p>
                    <p className="text-[10px] text-emerald-600 font-bold font-mono mt-0.5">DUAT 32 • Boane, Moçambique</p>
                  </div>
                </div>

                {/* Corner controls */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs text-slate-300">
                  <span className="bg-slate-950/80 px-2.5 py-1 rounded border border-white/10 text-slate-200 text-[11px]">
                    Hub Operacional Maputo / Boane
                  </span>
                  <a
                    href="https://maps.google.com/?q=Matola+Rio+Boane+Mozambique"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-shield-accent hover:text-white bg-slate-950/80 px-3 py-1 rounded border border-shield-accent/30 text-xs font-bold transition-colors"
                  >
                    <span>{language === 'pt' ? 'Abrir no Google Maps' : 'Open in Google Maps'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* Direct Info footer */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <strong className="text-slate-900 block mb-0.5">
                    {language === 'pt' ? 'Acesso Rodoviário:' : 'Highway Access:'}
                  </strong>
                  {language === 'pt'
                    ? 'Posicionamento estratégico próximo à EN4 e Corredor de Maputo, viabilizando pronta resposta rápida em Matola, Boane e Grande Maputo.'
                    : 'Strategic staging adjacent to the EN4 and Greater Maputo Corridor, enabling rapid dispatch across Matola, Boane, and Maputo.'
                  }
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <strong className="text-slate-900 block mb-0.5">
                    {language === 'pt' ? 'Segurança das Instalações:' : 'Facility Security:'}
                  </strong>
                  {language === 'pt'
                    ? 'Edifício monitorado por CCTV 24 horas, sala de reuniões executiva equipada e receção corporativa permanente.'
                    : 'Facility secured with 24/7 CCTV surveillance, equipped executive boardroom, and permanent corporate reception.'
                  }
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
