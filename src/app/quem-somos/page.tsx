import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import { 
  Target, 
  Eye, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Users, 
  MapPin, 
  Lock, 
  Activity, 
  ArrowRight, 
  FileCheck2,
  Phone
} from 'lucide-react';

export const metadata = {
  title: 'Quem Somos | DC SECURE GROUP - Segurança Privada em Moçambique',
  description: 'Conheça a história, compromisso ético e capacidade operacional da DC SECURE GROUP, Lda. Especialistas em vigilância patrimonial, proteção VIP e logística de valores em Moçambique.',
};

export default function QuemSomosPage() {
  const differentiators = [
    {
      icon: ShieldCheck,
      title: 'Homologação e Conformidade Legal',
      description: 'Empresa 100% legalizada perante as autoridades moçambicanas, registada sob Conservatória nº 100709287 e NUIT 400724423.',
    },
    {
      icon: Clock,
      title: 'Central Operacional 24/7/365',
      description: 'Centro de comando permanente com despacho imediato de viaturas táticas e agentes armados para pronta intervenção.',
    },
    {
      icon: Users,
      title: 'Recrutamento & Formação Militarizada',
      description: 'Processo de triagem minucioso, verificação de antecedentes criminais e treino físico e tático contínuo para cada guarda.',
    },
    {
      icon: Lock,
      title: 'Seguro de Responsabilidade Civil',
      description: 'Apólice de seguro abrangente para proteger totalmente as operações patrimoniais e o transporte de fundos em trânsito.',
    },
    {
      icon: Activity,
      title: 'Tecnologia & Rastreio Via Satélite',
      description: 'Sistemas avançados de telemetria e posicionamento global em tempo real para frotas blindadas e patrulhas de ronda.',
    },
    {
      icon: FileCheck2,
      title: 'Supervisão & Fiscalização Noturna',
      description: 'Oficiais inspetores realizam rondas aleatórias diurnas e noturnas para garantir 100% de vigília ativa nos postos dos clientes.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        
        {/* Expansive Hero Section with HD Video */}
        <Hero
          isSubpage={true}
          badge="INSTITUCIONAL • DC SECURE GROUP"
          pageTitle="Quem Somos"
          pageSubtitle="A tranquilidade que você merece, com a confiança que você precisa em Moçambique."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Quem Somos' }
          ]}
          ctaText="Falar Connosco"
          ctaLink="/contactos"
        />

        {/* 1. História & Constituição Legal da Empresa */}
        <section className="py-20 sm:py-28 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Operations Photo */}
              <div className="lg:col-span-5">
                <ScrollReveal animation="fade-right">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group bg-slate-100">
                    <div className="aspect-[4/3] relative">
                      <Image 
                        src="/images/headquarters.jpg?v=2"
                        alt="Sede Operacional da DC SECURE GROUP em Boane Matola Rio"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        priority
                      />
                    </div>
                    <div className="p-5 bg-[#102147] text-white flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-orange-400">Sede Própria Operacional</p>
                        <p className="text-sm font-semibold">Boane, Matola Rio • DUAT 32</p>
                      </div>
                      <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column: Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <ScrollReveal animation="fade-left">
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-xs font-bold text-[#C35614] uppercase tracking-wider">
                    <span>Compromisso Moçambicano</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102147] tracking-tight leading-tight">
                    Segurança de Alto Padrão Adaptada à Realidade Nacional
                  </h2>

                  <div className="border-l-4 border-[#C35614] pl-4 text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                    <p>
                      A <strong>DC SECURE GROUP, Lda</strong> nasceu com a missão de redefinir os parâmetros de proteção patrimonial, escolta armada e transporte de valores em Moçambique. Combinamos disciplina militar, atendimento humanizado e soluções tecnológicas integradas.
                    </p>
                    <p>
                      Sediada estrategicamente em Boane, Matola Rio, com acesso privilegiado ao Corredor de Maputo e à EN4, a empresa mantém prontidão tática em toda a província de Maputo e operações em território nacional.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-xs text-slate-500 block">Conservatória das Entidades:</span>
                      <strong className="text-sm text-[#102147]">Nº 100709287</strong>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="text-xs text-slate-500 block">Identificação Fiscal (NUIT):</span>
                      <strong className="text-sm text-[#102147]">400724423</strong>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4 items-center">
                    <Link
                      href="/contactos"
                      className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white font-bold text-sm tracking-wide shadow-md transition-all active:scale-95 group"
                    >
                      <span>Fale com a Nossa Equipa</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="/servicos"
                      className="inline-flex items-center px-7 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#102147] font-bold text-sm tracking-wide transition-all"
                    >
                      <span>Catálogo de Serviços</span>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        {/* 2. Estatísticas de Impacto Animadas */}
        <section className="py-14 bg-gradient-to-r from-[#102147] via-[#142959] to-[#102147] text-white border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="p-4">
                  <div className="text-4xl sm:text-5xl font-black text-orange-400 mb-2">
                    <AnimatedCounter end={5000} suffix="+" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                    Protecções Confiáveis
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <div className="p-4">
                  <div className="text-4xl sm:text-5xl font-black text-white mb-2">
                    <AnimatedCounter end={5} suffix="+" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                    Anos de Experiência
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <div className="p-4">
                  <div className="text-4xl sm:text-5xl font-black text-orange-400 mb-2">
                    <AnimatedCounter end={150} suffix="+" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                    Especialistas Homologados
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={400}>
                <div className="p-4">
                  <div className="text-4xl sm:text-5xl font-black text-white mb-2">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                    Conformidade Legal
                  </p>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* 3. Pilares Fundamentais: Missão, Visão e Valores */}
        <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold text-[#102147] uppercase tracking-wider">
                  <span>Diretrizes Estratégicas</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102147] tracking-tight">
                  Nossos Pilares Fundamentais
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Princípios éticos e rigor operacional que norteiam cada missão da DC SECURE GROUP em prol de famílias, empresas e instituições.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card Missão */}
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-[#C35614] mb-6 shadow-inner">
                      <Target className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#102147] mb-3">Nossa Missão</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Proporcionar segurança de alto padrão, protegendo vidas, bens patrimoniais e valores através de estratégias preventivas rigorosas, tecnologia de ponta e pessoal altamente capacitado e fiscalizado.
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-[#C35614]">
                    <span>Compromisso diário de proteção</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card Visão */}
              <ScrollReveal animation="fade-up" delay={200}>
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-[#102147] mb-6 shadow-inner">
                      <Eye className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#102147] mb-3">Nossa Visão</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Ser reconhecida como a referência máxima de segurança privada em Moçambique, destacando-se pela prontidão operacional tática, atendimento transparente e soluções customizadas a qualquer escala de desafio.
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-[#102147]">
                    <span>Liderança e excelência contínua</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card Valores */}
              <ScrollReveal animation="fade-up" delay={300}>
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-[#C35614] mb-6 shadow-inner">
                      <Award className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#102147] mb-3">Nossos Valores</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Integridade inegociável, disciplina tática, legalidade estrita, lealdade aos clientes, respeito aos direitos humanos e agilidade absoluta em situações de crise ou contingência operacional.
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-[#C35614]">
                    <span>Ética e disciplina inabaláveis</span>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* 4. Diferenciais Competitivos */}
        <section className="py-20 sm:py-28 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-xs font-bold text-[#C35614] uppercase tracking-wider">
                  <span>Por que escolher a DC</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102147] tracking-tight">
                  Diferenciais que Asseguram a Sua Confiança
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Não entregamos apenas vigilância; fornecemos uma arquitetura completa de defesa e prevenção com supervisão ininterrupta.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((diff, idx) => {
                const Icon = diff.icon;
                return (
                  <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                    <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#C35614]/40 hover:bg-white hover:shadow-xl transition-all duration-300 h-full">
                      <div className="w-12 h-12 rounded-xl bg-[#102147] text-white flex items-center justify-center mb-5 shadow-md">
                        <Icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-lg font-bold text-[#102147] mb-2">
                        {diff.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {diff.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

          </div>
        </section>

        {/* 5. Galeria Operacional de Recursos Táticos */}
        <section className="py-16 bg-slate-100 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-md group">
                  <Image 
                    src="/images/team-guard-1.jpg" 
                    alt="Equipa tática de guarda e patrulha" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
                    <span className="text-[11px] font-bold text-orange-400 uppercase">Operações de Campo</span>
                    <h4 className="text-base font-bold">Vigilância Armada e Desarmada</h4>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-md group">
                  <Image 
                    src="/images/team-guard-3.jpg" 
                    alt="Transporte de valores blindado" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
                    <span className="text-[11px] font-bold text-orange-400 uppercase">Logística Estratégica</span>
                    <h4 className="text-base font-bold">Transporte e Custódia de Fundos</h4>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-md group">
                  <Image 
                    src="/images/vip-protection.jpg" 
                    alt="Proteção de altas individualidades" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
                    <span className="text-[11px] font-bold text-orange-400 uppercase">Segurança Executiva</span>
                    <h4 className="text-base font-bold">Guarda-Costas & Proteção VIP</h4>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* 6. Grande Bloco de Chamada para Ação (CTA) */}
        <section className="py-20 sm:py-24 bg-[#102147] text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            
            <ScrollReveal animation="zoom-in">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-orange-300 font-bold text-xs uppercase tracking-widest border border-white/20 mb-2">
                Prontidão Imediata em Moçambique
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Proteja o Seu Património com Quem Cumpre os Mais Altos Padrões
              </h2>

              <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed pt-2">
                Fale agora com a nossa direção de operações e receba uma avaliação de risco personalizada sem compromisso para a sua empresa ou residência.
              </p>

              <div className="pt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contactos"
                  className="inline-flex items-center px-9 py-4 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white font-bold text-sm uppercase tracking-wider shadow-2xl transition-all active:scale-95 group"
                >
                  <span>Pedir Proposta Oficial</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://wa.me/258845393269?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20reuni%C3%A3o%20com%20a%20DC%20SECURE%20GROUP."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold text-sm uppercase tracking-wider border border-white/30 transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4 mr-2 text-emerald-400" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </ScrollReveal>

          </div>
        </section>

      </main>

      <Footer />
      <FloatingWidgets />
    </>
  );
}
