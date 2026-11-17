import React from 'react';
import { Shield, Target, Award, Users, CheckCircle, Building2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-28 relative overflow-hidden bg-navy-950">
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-shield-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-shield-blue/10 border border-shield-blue/30 text-xs font-semibold text-shield-accent uppercase tracking-wider">
            <span>Sobre a DC SECURE GROUP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Autoridade, Tradição e <span className="gradient-text-blue">Rigor Operacional</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Fundada sob os mais elevados padrões de disciplina e integridade, a <strong>DC SECURE GROUP, Lda</strong> atua na vanguarda da segurança privada em Moçambique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Corporate Profile & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              <p>
                A <strong className="text-white">DC SECURE GROUP, Lda</strong> é uma sociedade comercial devidamente registada na Conservatória das Entidades Legais sob o <strong className="text-white">nº 100709287</strong>, titular do NUIT <strong className="text-white">400724423</strong>, liderada pelo Sócio Maioritário e Diretor Executivo <strong className="text-white">Sr. Danício Fabião Chongole</strong>.
              </p>
              <p>
                Com domicílio comercial e instalações operacionais em Boane (Rua do Posto Administrativo da Matola Rio, nº 19, Parcela 14993 com DUAT autorizado), dispomos de uma base física estruturada com salas técnicas, centro de monitoramento e capacidade para gerir operações de alta complexidade em todo o território nacional.
              </p>
            </div>

            {/* Core Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-panel p-5 rounded-xl border border-white/5 space-y-2">
                <div className="flex items-center space-x-3 text-white">
                  <div className="p-2 rounded-lg bg-shield-blue/20 text-shield-accent">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base">Missão</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Garantir a inviolabilidade do património e a tranquilidade absoluta de nossos clientes por meio de vigilância tática, inteligência preventiva e tecnologias integradas.
                </p>
              </div>

              <div className="glass-panel p-5 rounded-xl border border-white/5 space-y-2">
                <div className="flex items-center space-x-3 text-white">
                  <div className="p-2 rounded-lg bg-shield-blue/20 text-shield-accent">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base">Visão</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Ser reconhecida como a mais confiável e eficiente empresa de segurança privada em Moçambique, referência em inovação satelital e transporte de valores.
                </p>
              </div>
            </div>

            {/* List of Commitments */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm text-slate-200">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Agentes rigorosamente selecionados, verificados criminalmente e treinados taticamente.</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-200">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Supervisão ostensiva e ronda móvel com comunicação rádio criptografada.</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-200">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Planos de contingência sob medida para indústrias, embaixadas, bancos e residências.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Infographic & Headquarters Card */}
          <div className="lg:col-span-5">
            <div className="relative glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border border-white/10 shadow-2xl">
              <div className="flex items-center space-x-4 pb-6 border-b border-navy-700/80">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-shield-blue to-navy-900 border border-shield-accent/40 flex items-center justify-center text-white shadow-lg">
                  <Building2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Sede Operacional</h4>
                  <p className="text-xs text-slate-400">Edifício Administrativo • Matola Rio</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b border-navy-800">
                  <span className="text-slate-400">Razão Social:</span>
                  <span className="font-semibold text-white">DC SECURE GROUP, Lda</span>
                </div>
                <div className="flex justify-between py-2 border-b border-navy-800">
                  <span className="text-slate-400">Conservatória:</span>
                  <span className="font-semibold text-shield-accent">100709287</span>
                </div>
                <div className="flex justify-between py-2 border-b border-navy-800">
                  <span className="text-slate-400">NUIT Fiscal:</span>
                  <span className="font-semibold text-shield-accent">400724423</span>
                </div>
                <div className="flex justify-between py-2 border-b border-navy-800">
                  <span className="text-slate-400">Sócio Maioritário:</span>
                  <span className="font-semibold text-white">Sr. Danício Fabiao Chongole</span>
                </div>
                <div className="flex justify-between py-2 border-b border-navy-800">
                  <span className="text-slate-400">Província / Distrito:</span>
                  <span className="font-semibold text-white">Maputo / Boane</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">DUAT / Parcela:</span>
                  <span className="font-semibold text-white">DUAT nº 32 / Parcela 14993</span>
                </div>
              </div>

              <div className="pt-2">
                <div className="p-4 rounded-xl bg-navy-900/90 border border-shield-accent/20 flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-gold flex-shrink-0" />
                  <div className="text-xs text-slate-300">
                    <p className="font-semibold text-white">Licenciada para Atividades de Segurança</p>
                    <p className="text-slate-400 mt-0.5">Autorização legal para proteção física, eletrónica e transporte de valores.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
