import React from 'react';
import { Radio, Wifi, Zap, Lock, Eye, AlertTriangle } from 'lucide-react';

export default function TechFeatures() {
  return (
    <section id="tecnologia" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-xs font-bold text-shield-blue uppercase tracking-wider">
            <span>Diferencial Operacional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tecnologia de Satélite e <span className="text-shield-blue">Inteligência Operacional</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A convergência entre agentes operacionais de elite e tecnologia avançada de vigilância contínua para prevenir sinistros antes que aconteçam.
          </p>
        </div>

        {/* Feature showcase grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm space-y-5 hover:border-shield-blue/40 hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-shield-blue">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Central de Monitoramento 24/7</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Equipada com videovigilância em tempo real, reconhecimento inteligente de matrículas, sensores perimetrais e supervisores em turnos permanentes de prontidão.
            </p>
            <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
              <div className="flex items-center justify-between">
                <span>Tempo médio de acionamento:</span>
                <span className="font-bold text-emerald-600">&lt; 3 minutos</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Disponibilidade do centro:</span>
                <span className="font-bold text-slate-900">99.98% SLA</span>
              </div>
            </div>
          </div>

          {/* Feature 2 (Highlight) */}
          <div className="bg-white rounded-2xl p-8 border-2 border-shield-blue space-y-5 shadow-lg hover:shadow-2xl transition-all relative">
            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-shield-blue">
              <Wifi className="w-7 h-7" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Rastreamento Satelital Total</h3>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-shield-blue text-white uppercase">GPS + GLONASS</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sistema de telemetria satelital com cobertura em todo o território de Moçambique e corredores rodoviários da SADC. Relatórios de ignição, rotas, velocidade e alertas de pânico.
            </p>
            <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
              <div className="flex items-center justify-between">
                <span>Imobilização remota:</span>
                <span className="font-bold text-shield-blue">Instantânea</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Cerca virtual inteligente:</span>
                <span className="font-bold text-emerald-600">Ativa</span>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm space-y-5 hover:border-shield-blue/40 hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Equipa de Reação Rápida (RR)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Viaturas e motocicletas táticas dedicadas à intervenção imediata em caso de alarme, pânico ou tentativa de invasão nas zonas residenciais, portuárias e industriais.
            </p>
            <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
              <div className="flex items-center justify-between">
                <span>Comunicação rádio:</span>
                <span className="font-bold text-slate-900">Criptografada VHF/UHF</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Agentes certificados:</span>
                <span className="font-bold text-emerald-600">100% Homologados</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
