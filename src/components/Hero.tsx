import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Award, Eye, Navigation, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradients & tactical grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-shield-blue/20 via-navy-950 to-navy-950 -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      {/* Glowing accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-shield-blue/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Verification Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-shield-accent/30 text-xs sm:text-sm text-slate-200 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-shield-accent font-semibold tracking-wide uppercase">DC SECURE GROUP, Lda</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300">NUIT: 400724423</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Segurança Tática, <span className="gradient-text-blue">Proteção Integral</span> e Tecnologia Avançada.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Empresa moçambicana credenciada, dedicada à salvaguarda de vidas, património corporativo, escolta VIP, transporte seguro de valores e monitoramento via satélite 24 horas por dia.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-shield-accent flex-shrink-0" />
                <span>Vigilância Patrimonial & Controlo Rigoroso</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-shield-accent flex-shrink-0" />
                <span>Transporte de Fundos e Valores Blindado</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-shield-accent flex-shrink-0" />
                <span>Segurança Pessoal VIP & Guarda-Costas</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-shield-accent flex-shrink-0" />
                <span>Rastreio Satélite e Telemetria em Tempo Real</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link 
                href="#cotacao" 
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-shield-blue via-blue-600 to-shield-light text-white font-semibold text-base shadow-xl shadow-shield-blue/25 hover:shadow-shield-blue/40 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span>Solicitar Cotação Imediata</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link 
                href="#servicos" 
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-navy-800/80 hover:bg-navy-700/80 border border-slate-700/80 text-slate-200 hover:text-white font-semibold text-base transition-all"
              >
                <span>Ver Serviços Regulamentados</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Tactical Dashboard Graphic Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-shield-accent/20 to-shield-blue/30 blur-xl opacity-75" />

              {/* Main Card container */}
              <div className="relative glass-panel rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl border border-white/10">
                
                {/* Header card */}
                <div className="flex items-center justify-between pb-4 border-b border-navy-700/80">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-shield-blue/20 border border-shield-blue/50 flex items-center justify-center text-shield-accent">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Status Operacional</h3>
                      <p className="text-xs text-slate-400">Posto Matola Rio • Boane</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    ATIVO 24/7
                  </span>
                </div>

                {/* Tactical Features in visual mini-cards */}
                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-xl bg-navy-900/60 border border-navy-700/60 flex items-start space-x-3.5">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-shield-accent flex-shrink-0 mt-0.5">
                      <Navigation className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Rastreio Satélite</h4>
                        <span className="text-[10px] text-emerald-400 font-mono">100% ONLINE</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">Geolocalização e telemetria veicular permanente.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-navy-900/60 border border-navy-700/60 flex items-start space-x-3.5">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-gold-light flex-shrink-0 mt-0.5">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Transporte de Valores</h4>
                        <span className="text-[10px] text-shield-accent font-mono">BLINDADO</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">Custódia rigorosa e transporte seguro de fundos.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-navy-900/60 border border-navy-700/60 flex items-start space-x-3.5">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 flex-shrink-0 mt-0.5">
                      <Eye className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Vigilância & Controlo</h4>
                        <span className="text-[10px] text-slate-300 font-mono">HOMOLOGADO</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">Postos físicos equipados e rondas ostensivas.</p>
                    </div>
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center space-x-1.5">
                    <Award className="w-4 h-4 text-gold" />
                    <span>Conformidade Legal Integral</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">Parcela 14993</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
