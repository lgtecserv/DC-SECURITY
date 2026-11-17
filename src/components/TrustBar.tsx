import React from 'react';
import { ShieldCheck, FileCheck, MapPin, Radio } from 'lucide-react';

export default function TrustBar() {
  const credentials = [
    {
      icon: ShieldCheck,
      title: 'Entidade Registada',
      subtitle: 'Conservatória nº 100709287',
      desc: 'Licenciamento oficial e autorizada para serviços de segurança privada.',
    },
    {
      icon: FileCheck,
      title: 'Registo Fiscal NUIT',
      subtitle: 'NUIT: 400724423',
      desc: 'Total conformidade tributária e idoneidade corporativa.',
    },
    {
      icon: MapPin,
      title: 'Sede Própria & DUAT',
      subtitle: 'Matola Rio, Boane',
      desc: 'Edifício com DUAT nº 32, Parcela 14993, com infraestrutura operacional.',
    },
    {
      icon: Radio,
      title: 'Monitoramento Contínuo',
      subtitle: 'Disponibilidade 24/7/365',
      desc: 'Equipas táticas em prontidão de patrulhamento e resposta imediata.',
    },
  ];

  return (
    <div className="relative border-y border-navy-800 bg-navy-900/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex items-start space-x-4 p-4 rounded-xl bg-navy-950/40 border border-white/5 hover:border-shield-accent/20 transition-all"
              >
                <div className="p-2.5 rounded-lg bg-shield-blue/15 text-shield-accent flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">{item.title}</h4>
                  <p className="text-xs font-semibold text-shield-accent mt-0.5">{item.subtitle}</p>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
