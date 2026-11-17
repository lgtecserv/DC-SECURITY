import React from 'react';
import { Star, Quote, Building2, ShieldCheck, Factory, Truck } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Eng. Manuel Cossa',
      role: 'Diretor de Operações & Logística',
      company: 'Complexo de Armazéns & Distribuição',
      location: 'Boane / Matola',
      icon: Factory,
      text: 'A transição para a DC SECURE GROUP reduziu a zero as tentativas de intrusão nos nossos armazéns. O rigor na troca de turnos e o fardamento tático transmitem uma autoridade impecável que inibe qualquer incidente.',
      rating: 5,
    },
    {
      name: 'Dra. Patrícia Machava',
      role: 'Presidente da Administração',
      company: 'Condomínio Residencial Vista Rio',
      location: 'Matola Rio',
      icon: Building2,
      text: 'Contratámos a equipa para o controlo de acessos e vigilância 24 horas. Os agentes são educados com os moradores e extremamente firmes com a triagem de visitantes. A central de apoio responde com rapidez exemplar.',
      rating: 5,
    },
    {
      name: 'Dr. Lucas Nhantumbo',
      role: 'Gestor de Frotas & Transporte',
      company: 'Empresa de Distribuição Rodoviária',
      location: 'Corredor de Maputo',
      icon: Truck,
      text: 'O rastreamento via satélite e a escolta armada de valores nos deram a tranquilidade que precisávamos para operar à noite na EN4 e ligações regionais. Uma empresa séria com sede próxima e atendimento direto.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-shield-blue/10 border border-shield-blue/30 text-xs font-semibold text-shield-accent uppercase tracking-wider">
            <span>Confiança e Prova Social</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            O Que Dizem os Nossos <span className="gradient-text-blue">Clientes Corporativos</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A satisfação e a integridade do património dos nossos parceiros são o testemunho mais fiel do nosso compromisso operacional.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="glass-panel rounded-2xl p-7 border border-white/5 hover:border-shield-accent/30 transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Decorative quote icon */}
                <Quote className="w-10 h-10 text-shield-blue/20 absolute top-5 right-5 group-hover:text-shield-blue/40 transition-colors pointer-events-none" />

                <div>
                  {/* Star Rating */}
                  <div className="flex items-center space-x-1 mb-4 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-navy-800/80 flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-shield-blue/20 border border-shield-blue/40 flex items-center justify-center text-shield-accent flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.name}</h4>
                    <p className="text-[11px] text-shield-accent font-medium">{item.role}</p>
                    <p className="text-[10px] text-slate-400">{item.company} • {item.location}</p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Trust badge banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-8 h-8 text-emerald-400 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">Prontidão e Integridade Inabaláveis</h4>
              <p className="text-xs text-slate-400">Mais de 99.4% de taxa de renovação e retenção de contratos em Moçambique.</p>
            </div>
          </div>
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-navy-800 text-slate-300 border border-navy-700">
            NUIT: 400724423
          </span>
        </div>

      </div>
    </section>
  );
}
