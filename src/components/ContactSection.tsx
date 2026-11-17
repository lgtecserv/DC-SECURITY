import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Building, Navigation, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-shield-blue/10 border border-shield-blue/30 text-xs font-semibold text-shield-accent uppercase tracking-wider">
            <span>Presença Física e Contacto Direto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Fale com a <span className="gradient-text-blue">DC SECURE GROUP</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Nossa sede operacional e administrativa está de portas abertas na Matola Rio, Boane.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-shield-blue/20 text-shield-accent flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Endereço Comercial & Sede</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Rua do Posto Administrativo da Matola Rio (Rua da Administração da Matola Rio), nº 19, 2º Andar, Bairro da Matola Rio A.
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Edifício de 3 Pisos • Parcela 14993 (DUAT com autorização nº 32)
                  </p>
                  <p className="text-xs font-semibold text-shield-accent mt-0.5">
                    Boane, Província de Maputo — Moçambique
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Phone / 24h Central */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Central Operacional & Despacho</h3>
                  <p className="text-xs text-slate-400 mt-1">Linha de plantão 24 horas por dia, 7 dias por semana:</p>
                  <p className="text-base font-bold text-emerald-400 mt-1">
                    <a href="tel:+258840000000" className="hover:underline">+258 84 000 0000</a>
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Atendimento rápido para emergências patrimoniais e escolta.</p>
                </div>
              </div>
            </div>

            {/* Electronic Mail & Commercial Inquiries */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-shield-blue/20 text-shield-accent flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Comunicação Oficial & Propostas</h3>
                  <p className="text-xs text-slate-400 mt-1">Para propostas formais, concursos públicos e parcerias:</p>
                  <p className="text-sm font-semibold text-white mt-1">
                    <a href="mailto:contacto@dcsecuregroup.co.mz" className="text-shield-accent hover:underline">
                      contacto@dcsecuregroup.co.mz
                    </a>
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Direção Executiva: <strong className="text-slate-300">Sr. Danício Fabião Chongole</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-amber-500/20 text-gold flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Horários de Atendimento</h3>
                  <div className="text-xs text-slate-300 mt-1 space-y-1">
                    <div className="flex justify-between">
                      <span>Central de Monitoramento & Segurança:</span>
                      <strong className="text-emerald-400">24h / 365 dias</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Gabinete Administrativo (Matola Rio):</span>
                      <span className="text-slate-400">Segunda a Sexta, 08h00 - 17h00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Geographic Location Card */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-navy-800">
                <div className="flex items-center space-x-3">
                  <Navigation className="w-5 h-5 text-shield-accent" />
                  <h3 className="font-bold text-white text-base">Localização Estratégica em Boane / Matola Rio</h3>
                </div>
                <span className="text-xs font-mono text-slate-400">Coord. Geográfica Sede</span>
              </div>

              {/* Simulated Map Visual Display */}
              <div className="relative rounded-2xl overflow-hidden bg-navy-900 border border-navy-700/80 h-72 sm:h-96 flex flex-col items-center justify-center text-center p-6">
                
                {/* Background Map Grid Graphic */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00a8ff_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Radar Ripple Effect */}
                <div className="absolute w-44 h-44 rounded-full border border-shield-accent/30 animate-ping pointer-events-none" />
                <div className="absolute w-24 h-24 rounded-full border border-shield-accent/50 pointer-events-none" />

                {/* Map Marker */}
                <div className="relative z-10 space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-shield-blue text-white mx-auto flex items-center justify-center shadow-2xl shadow-shield-blue/50 ring-4 ring-navy-950">
                    <ShieldCheck className="w-9 h-9" />
                  </div>
                  <div className="bg-navy-950/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 shadow-lg">
                    <h4 className="font-bold text-white text-sm">DC SECURE GROUP, Lda</h4>
                    <p className="text-[11px] text-slate-300">Rua da Administração da Matola Rio, nr. 19, 2º Andar</p>
                    <p className="text-[10px] text-emerald-400 font-mono mt-0.5">DUAT 32 • Boane, Moçambique</p>
                  </div>
                </div>

                {/* Corner controls */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs text-slate-400">
                  <span className="bg-navy-950/80 px-2.5 py-1 rounded border border-white/5">
                    Hub Operacional Maputo / Boane
                  </span>
                  <a
                    href="https://maps.google.com/?q=Matola+Rio+Boane+Mozambique"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-shield-accent hover:underline bg-navy-950/80 px-3 py-1 rounded border border-shield-accent/30"
                  >
                    <span>Abrir no Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* Direct Info footer */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-navy-900/60 border border-white/5">
                  <strong className="text-white block mb-0.5">Acesso Rodoviário:</strong>
                  Posicionamento estratégico próximo à EN4 e Corredor de Maputo, viabilizando pronta resposta rápida em Matola, Boane e Grande Maputo.
                </div>
                <div className="p-3 rounded-xl bg-navy-900/60 border border-white/5">
                  <strong className="text-white block mb-0.5">Segurança das Instalações:</strong>
                  Edifício monitorado por CCTV 24 horas, sala de reuniões executiva equipada e copa com receção corporativa.
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
