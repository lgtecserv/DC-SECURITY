import React from 'react';
import { Radio, Wifi, Zap, Lock, Eye, AlertTriangle } from 'lucide-react';

export default function TechFeatures() {
  return (
    <section id="tecnologia" className="py-20 md:py-28 bg-navy-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-shield-blue/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-shield-blue/10 border border-shield-blue/30 text-xs font-semibold text-shield-accent uppercase tracking-wider">
            <span>Diferencial Operacional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tecnologia de Satélite e <span className="gradient-text-blue">Inteligência Operacional</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A convergência entre agentes operacionais de elite e tecnologia avançada de vigilância contínua para prevenir sinistros antes que aconteçam.
          </p>
        </div>

        {/* Feature showcase grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="glass-panel rounded-2xl p-8 border border-white/10 space-y-5 hover:border-shield-accent/40 transition-all">
            <div className="w-14 h-14 rounded-xl bg-shield-blue/20 border border-shield-blue/40 flex items-center justify-center text-shield-accent">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Central de Monitoramento 24/7</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Equipada com videovigilância em tempo real, reconhecimento inteligente de matrículas, sensores perimetrais e supervisores em turnos permanentes de prontidão.
            </p>
            <div className="space-y-2 pt-2 border-t border-navy-800 text-xs text-slate-400">
              <div className="flex items-center justify-between">
                <span>Tempo médio de acionamento:</span>
                <span className="font-bold text-emerald-400">&lt; 3 minutos</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Disponibilidade do centro:</span>
                <span className="font-bold text-white">99.98% SLA</span>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="glass-panel rounded-2xl p-8 border border-shield-accent/30 bg-gradient-to-b from-navy-900/80 to-navy-950 space-y-5 shadow-xl hover:border-shield-accent/60 transition-all">
            <div className="w-14 h-14 rounded-xl bg-shield-accent/20 border border-shield-accent/50 flex items-center justify-center text-shield-accent">
              <Wifi className="w-7 h-7" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Rastreamento Satelital Total</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-shield-blue text-white uppercase">GPS + GLONASS</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Sistema de telemetria satelital com cobertura em todo o território de Moçambique e corredores rodoviários da SADC. Relatórios de ignição, rotas, velocidade e alertas de pânico.
            </p>
            <div className="space-y-2 pt-2 border-t border-navy-800 text-xs text-slate-400">
              <div className="flex items-center justify-between">
                <span>Imobilização remota:</span>
                <span className="font-bold text-shield-accent">Instantânea</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Cerca virtual inteligente:</span>
                <span className="font-bold text-emerald-400">Ativa</span>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="glass-panel rounded-2xl p-8 border border-white/10 space-y-5 hover:border-shield-accent/40 transition-all">
            <div className="w-14 h-14 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-gold-light">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Equipa de Reação Rápida (RR)</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Viaturas e motocicletas táticas dedicadas à intervenção imediata em caso de alarme, pânico ou tentativa de invasão nas zonas residenciais, portuárias e industriais.
            </p>
            <div className="space-y-2 pt-2 border-t border-navy-800 text-xs text-slate-400">
              <div className="flex items-center justify-between">
                <span>Comunicação rádio:</span>
                <span className="font-bold text-white">Criptografada VHF/UHF</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Agentes certificados:</span>
                <span className="font-bold text-emerald-400">100% Homologados</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
