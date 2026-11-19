'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      text: 'O atendimento é impecável e os vigilantes são sempre atentos e educados. Os moradores se sentem muito mais seguros desde que contratamos a DC SECURE GROUP para o nosso condomínio.',
      name: 'Sandra Comé',
      role: 'Chefe de condomínio'
    },
    {
      text: 'A equipa da DC SECURE GROUP trouxe tranquilidade para o nosso negócio. Hoje sabemos que nossos colaboradores, armazéns e instalações estão devidamente protegidos 24 horas por dia.',
      name: 'João Neves',
      role: 'Director de Operações'
    },
    {
      text: 'A escolta de valores e o rastreamento via satélite nos proporcionaram um nível de segurança sem precedentes no Corredor de Maputo e ligações provinciais.',
      name: 'Manuel Cossa',
      role: 'Gestor de Logística'
    },
    {
      text: 'A pronta resposta da central quando tivemos um alarme disparado no centro comercial foi inferior a 4 minutos. Agilidade e profissionalismo incomparáveis.',
      name: 'Dr. Lucas Nhantumbo',
      role: 'Administrador de Imóveis'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout matching Trankwyllo Image 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Authority Text + CTA Button */}
          <div className="lg:col-span-5 space-y-5">
            <ScrollReveal animation="fade-right">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102147] tracking-tight leading-snug">
                A confiança dos nossos clientes é o nosso maior património
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed mt-4">
                Na <strong>DC SECURE GROUP, Lda</strong>, cada parceria é construída com dedicação, profissionalismo e resultados comprovados. Veja o que alguns dos nossos clientes têm a dizer sobre a experiência de contar com nossos serviços de segurança privada.
              </p>

              <div className="pt-6">
                <Link
                  href="/contactos"
                  className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white font-bold text-sm tracking-wide shadow-md transition-all active:scale-95 group"
                >
                  <span>Agende uma Visita</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Testimonial Cards Carousel */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {testimonials.slice(activeSlide * 2, activeSlide * 2 + 2).map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Big Quotation Mark matching Trankwyllo */}
                    <div className="text-5xl font-black text-[#102147] leading-none mb-3 font-serif">
                      “
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                      {item.text}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-sm font-bold text-[#102147]">{item.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Dots & Controls */}
            <div className="flex items-center justify-center space-x-2.5 mt-8">
              <button
                onClick={() => setActiveSlide(0)}
                aria-label="Página 1"
                className={`h-2.5 rounded-full transition-all duration-300 ${activeSlide === 0 ? 'w-8 bg-[#C35614]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
              />
              <button
                onClick={() => setActiveSlide(1)}
                aria-label="Página 2"
                className={`h-2.5 rounded-full transition-all duration-300 ${activeSlide === 1 ? 'w-8 bg-[#C35614]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
              />
            </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
