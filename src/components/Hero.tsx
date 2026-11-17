'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Lock, 
  Banknote, 
  UserCheck, 
  Clock, 
  Shield, 
  CheckCircle2 
} from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      image: '/images/security-guard-patrol.jpg',
      badge: 'Vigilância Patrimonial & Defesa Tática',
      headline: 'Segurança de Elite, Proteção Integral e Prontidão 24 Horas',
      description: 'Equipas de guarda e patrulhamento ostensivo uniformizadas com a insígnia oficial da DC SECURE GROUP, prontas para defender o seu património corporativo e residencial.',
      ctaText: 'Solicitar Cotação de Vigilância',
      ctaLink: '#cotacao',
      statLabel: 'Agentes Homologados',
      statValue: '100% Verificados',
    },
    {
      id: 2,
      image: '/images/cash-in-transit.jpg',
      badge: 'Transporte de Fundos e Valores (CIT)',
      headline: 'Custódia Blindada e Logística Segura de Ativos em Moçambique',
      description: 'Viaturas blindadas de alta especificação, escolta armada especializada e monitoramento por satélite criptografado para transporte de numerário e documentos confidenciais.',
      ctaText: 'Contratar Transporte de Valores',
      ctaLink: '#cotacao',
      statLabel: 'Blindagem Certificada',
      statValue: 'Nível III-A',
    },
    {
      id: 3,
      image: '/images/vip-protection.jpg',
      badge: 'Proteção Executiva & Guarda-Costas',
      headline: 'Segurança Pessoal VIP e Escolta com Discrição Absoluta',
      description: 'Oficiais de proteção aproximada (CPO) com formação internacional para acompanhamento de executivos, investidores, diplomatas e figuras públicas.',
      ctaText: 'Falar com Especialista VIP',
      ctaLink: '#cotacao',
      statLabel: 'Prontidão Operacional',
      statValue: 'Ativa 24/7/365',
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <section 
      id="inicio" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Carousel with Smooth Fade Transitions */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out -z-20 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            className="object-cover object-center scale-105 transform duration-10000"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Cinematic Dark Overlays for High Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/60 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/70 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,13,24,0.6)_100%)] -z-10" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12">
        <div className="max-w-3xl space-y-6">
          
          {/* Legal / Status Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-navy-900/90 border border-shield-accent/40 backdrop-blur-md shadow-xl text-xs sm:text-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-shield-accent font-bold tracking-wide uppercase">DC SECURE GROUP, Lda</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-200 font-medium">{active.badge}</span>
          </div>

          {/* Dynamic Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-md">
            {active.headline.split(',')[0]}, <br className="hidden sm:inline" />
            <span className="gradient-text-blue">
              {active.headline.includes(',') ? active.headline.split(',').slice(1).join(',') : ''}
            </span>
          </h1>

          {/* Subtext description */}
          <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
            {active.description}
          </p>

          {/* Quick value badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 font-medium pt-1">
            <div className="flex items-center space-x-2 bg-navy-950/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-shield-accent" />
              <span>Conservatória nº 100709287</span>
            </div>
            <div className="flex items-center space-x-2 bg-navy-950/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-shield-accent" />
              <span>NUIT: 400724423</span>
            </div>
            <div className="flex items-center space-x-2 bg-navy-950/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-shield-accent" />
              <span>{active.statLabel}: <strong className="text-emerald-400">{active.statValue}</strong></span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link 
              href={active.ctaLink} 
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-shield-blue via-blue-600 to-shield-light text-white font-bold text-base shadow-2xl shadow-shield-blue/40 hover:brightness-110 active:scale-95 transition-all"
            >
              <span>{active.ctaText}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link 
              href="#servicos" 
              className="inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-navy-900/80 hover:bg-navy-800 text-slate-200 hover:text-white border border-white/10 backdrop-blur-md font-semibold text-base transition-all"
            >
              <span>Ver Nossos 8 Serviços</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Carousel Controls (Previous / Next Arrows) */}
      <div className="hidden sm:flex absolute right-8 bottom-12 items-center space-x-3 z-20">
        <button
          onClick={prevSlide}
          aria-label="Slide Anterior"
          className="w-12 h-12 rounded-xl bg-navy-900/80 hover:bg-shield-blue text-white border border-white/10 flex items-center justify-center transition-all backdrop-blur-md hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Próximo Slide"
          className="w-12 h-12 rounded-xl bg-navy-900/80 hover:bg-shield-blue text-white border border-white/10 flex items-center justify-center transition-all backdrop-blur-md hover:scale-105 active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2.5 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Ir para Slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentSlide 
                ? 'w-10 bg-shield-accent shadow-md shadow-shield-accent/50' 
                : 'w-2.5 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

    </section>
  );
}
