'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Shield
} from 'lucide-react';

interface HeroProps {
  isSubpage?: boolean;
  pageTitle?: string;
  pageSubtitle?: string;
  badge?: string;
  breadcrumbs?: { label: string; href?: string }[];
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({
  isSubpage = false,
  pageTitle,
  pageSubtitle,
  badge,
  breadcrumbs,
  ctaText = 'Saber mais',
  ctaLink = '#sobre'
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const homeSlides = [
    {
      id: 1,
      badge: 'DC SECURE GROUP • MOÇAMBIQUE',
      headline: 'Protegemos O Que Mais Importa.',
      description: 'Serviços de segurança privada personalizados para empresas e residências em Moçambique com equipas homologadas de prontidão imediata.',
      ctaText: 'Saber mais',
      ctaLink: '/quem-somos',
    },
    {
      id: 2,
      badge: 'VIGILÂNCIA PATRIMONIAL',
      headline: 'Rigor e Defesa de Perímetro',
      description: 'Vigilância ostensiva e controlo de acessos 24 horas por dia com agentes rigorosamente instruídos e fiscalizados.',
      ctaText: 'Nossos Serviços',
      ctaLink: '/servicos',
    },
    {
      id: 3,
      badge: 'TRANSPORTE DE VALORES',
      headline: 'Custódia e Logística Blindada',
      description: 'Transporte de numerário e ativos estratégicos em viaturas blindadas com escolta armada certificada e rastreio via satélite.',
      ctaText: 'Pedir Cotação',
      ctaLink: '/contactos',
    },
    {
      id: 4,
      badge: 'PROTEÇÃO VIP & CPO',
      headline: 'Segurança Pessoal Executiva',
      description: 'Oficiais de proteção aproximada para diplomatas, empresários e investidores internacionais em todo o território nacional.',
      ctaText: 'Falar Connosco',
      ctaLink: '/contactos',
    },
  ];

  // Autoplay reliability
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    }
  }, []);

  // Smooth mouse scroll parallax
  useEffect(() => {
    let animationFrameId: number;
    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Carousel transition on home page
  useEffect(() => {
    if (isSubpage || isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % homeSlides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isSubpage, isPaused, homeSlides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + homeSlides.length) % homeSlides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % homeSlides.length);
  };

  const active = homeSlides[currentSlide];

  return (
    <section
      id="inicio"
      className={`relative flex items-center justify-start overflow-hidden w-full ${
        isSubpage
          ? 'min-h-[110vh] sm:min-h-[125vh] lg:min-h-[135vh] pt-48 sm:pt-56 lg:pt-64 pb-40 sm:pb-52 lg:pb-64'
          : 'min-h-[160vh] sm:min-h-[180vh] lg:min-h-[200vh] pt-52 sm:pt-64 lg:pt-72 pb-64 sm:pb-88 lg:pb-112'
      }`}
      style={{
        minHeight: isSubpage ? '120vh' : '185vh'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 
        LAYER 0: AMPLO VÍDEO DE FUNDO EM ALTA DEFINIÇÃO (EXTRA LONGO & EXPANSIVO)
        Preenche toda a área ampla do Hero estendida para baixo com headroom de parallax
      */}
      <div 
        className="absolute inset-0 w-full h-[135%] -top-[15%] overflow-hidden z-0 pointer-events-none"
        style={{
          transform: `translate3d(0, ${Math.min(scrollY * 0.2, 450)}px, 0)`,
          willChange: 'transform'
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/team-guard-1.jpg"
          onLoadedData={(e) => {
            e.currentTarget.muted = true;
            e.currentTarget.play().catch(() => {});
          }}
          onCanPlay={(e) => {
            e.currentTarget.muted = true;
            e.currentTarget.play().catch(() => {});
          }}
          className="w-full h-full object-cover object-center scale-100 sm:scale-105"
        >
          <source src="/images/hero-video.mp4?v=5" type="video/mp4" />
          <source src="/images/IT_team_inspecting_home_security_32c691d7.mp4?v=5" type="video/mp4" />
        </video>
      </div>

      {/* 
        LAYER 1: MÁSCARA LEVE E NÍTIDA
        Preserva máxima nitidez e claridade do vídeo enquanto garante contraste ideal nos textos
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 z-10 pointer-events-none" />

      {/* 
        LAYER 2: CONTEÚDO AMPLO E AREJADO (HOME OU SUBPÁGINAS)
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        
        {isSubpage ? (
          /* Subpage Layout: Title, Subtitle, Breadcrumbs, and Action */
          <div className="max-w-3xl space-y-4 sm:space-y-5 text-left">
            {badge && (
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-bold text-orange-300 uppercase tracking-wider drop-shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#C35614] animate-pulse" />
                <span>{badge}</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
              {pageTitle}
            </h1>

            {pageSubtitle && (
              <p className="text-base sm:text-xl text-slate-100 font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-2xl">
                {pageSubtitle}
              </p>
            )}

            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200 pt-1 drop-shadow-md">
                {breadcrumbs.map((crumb, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <span className="text-slate-400">/</span>}
                    {crumb.href ? (
                      <Link href={crumb.href} className="hover:text-white transition-colors">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-orange-400 font-bold">{crumb.label}</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}

            {/* Subpage CTA Button */}
            <div className="pt-3 flex items-center space-x-3">
              <Link
                href={ctaLink}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-2xl transition-all duration-300 active:scale-95 group"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contactos"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/30 shadow-2xl transition-all duration-300 active:scale-95"
              >
                <span>Fale Connosco</span>
              </Link>
            </div>
          </div>
        ) : (
          /* Home Layout: Expansive Carousel Headlines and CTAs */
          <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-6 text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-bold text-orange-300 uppercase tracking-wider drop-shadow-md transition-all duration-500">
              <span className="w-2 h-2 rounded-full bg-[#C35614] animate-pulse" />
              <span>{active.badge}</span>
            </div>

            {/* Headline Ampla e Imponente */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_16px_rgba(0,0,0,0.92)] transition-all duration-500 min-h-[90px] sm:min-h-[140px]">
              {active.headline}
            </h1>

            {/* Subtítulo Confortável e Nítido */}
            <p className="text-base sm:text-xl text-slate-100 font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.92)] max-w-xl transition-all duration-500">
              {active.description}
            </p>

            {/* Botões de Ação Amplos */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href={active.ctaLink}
                className="inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-2xl transition-all duration-300 active:scale-95 group"
              >
                <span>{active.ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contactos"
                className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/30 shadow-2xl transition-all duration-300 active:scale-95"
              >
                <span>Fale Connosco</span>
              </Link>
            </div>

            {/* Slide Indicators (Dots) diretamente integrados com o conteúdo */}
            <div className="pt-4 sm:pt-6 flex items-center space-x-3">
              {homeSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? 'w-10 sm:w-12 bg-[#C35614] shadow-md shadow-orange-500/50'
                      : 'w-3 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>

          </div>
        )}

      </div>

      {/* 
        LAYER 3: CONTROLOS DO CARROSSEL & INDICADOR DE SCROLL (APENAS NA HOME)
      */}
      {!isSubpage && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Slide Anterior"
            className="absolute left-3 sm:left-8 top-[38%] sm:top-[42%] -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl z-30 border border-white/20"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Próximo Slide"
            className="absolute right-3 sm:right-8 top-[38%] sm:top-[42%] -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl z-30 border border-white/20"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Indicador de rolagem elegante no fundo do Hero longo */}
          <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-30 pointer-events-none opacity-85">
            <span className="text-[11px] font-semibold text-white/90 uppercase tracking-widest drop-shadow-md">
              Role para explorar
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-white/60 flex items-start justify-center p-1">
              <div className="w-1.5 h-2 rounded-full bg-[#C35614] animate-bounce" />
            </div>
          </div>
        </>
      )}

    </section>
  );
}
