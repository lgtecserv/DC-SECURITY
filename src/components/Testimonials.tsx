'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Testimonials() {
  const { t, language } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      text: language === 'pt' 
        ? 'O atendimento é impecável e os vigilantes são sempre atentos e educados. Os moradores se sentem muito mais seguros desde que contratamos a DC SECURE GROUP para o nosso condomínio.'
        : 'The customer service is impeccable, and the security officers are always courteous and observant. Our residents feel exponentially safer since we engaged DC SECURE GROUP for our community.',
      name: 'Sandra Comé',
      role: language === 'pt' ? 'Chefe de Condomínio Residencial' : 'Residential Condominium Board Head'
    },
    {
      text: language === 'pt'
        ? 'A equipa da DC SECURE GROUP trouxe tranquilidade para o nosso negócio. Hoje sabemos que nossos colaboradores, armazéns e instalações estão devidamente protegidos 24 horas por dia.'
        : 'The DC SECURE GROUP crew brought true peace of mind to our enterprise. We now know that our workforce, logistics warehouses, and facilities are protected around the clock.',
      name: 'João Neves',
      role: language === 'pt' ? 'Director de Operações' : 'Chief Operating Officer'
    },
    {
      text: language === 'pt'
        ? 'A escolta de valores e o rastreamento via satélite nos proporcionaram um nível de segurança sem precedentes no Corredor de Maputo e ligações provinciais.'
        : 'Their armored cash escort and satellite telematics have delivered an unprecedented tier of reliability across the Greater Maputo Corridor and provincial links.',
      name: 'Manuel Cossa',
      role: language === 'pt' ? 'Gestor de Logística & Frotas' : 'Fleet & Logistics Manager'
    },
    {
      text: language === 'pt'
        ? 'A pronta resposta da central quando tivemos um alarme disparado no centro comercial foi inferior a 4 minutos. Agilidade e profissionalismo incomparáveis.'
        : 'The rapid intervention squad response time when a perimeter sensor triggered was under 4 minutes. Outstanding tactical agility and professionalism.',
      name: 'Dr. Lucas Nhantumbo',
      role: language === 'pt' ? 'Administrador de Imóveis' : 'Commercial Property Administrator'
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
                {language === 'pt' 
                  ? 'A confiança dos nossos clientes é o nosso maior património'
                  : 'Our clients trust is our greatest operational asset'
                }
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed mt-4">
                {language === 'pt' ? (
                  <>Na <strong>DC SECURE GROUP, Lda</strong>, cada parceria é construída com dedicação, profissionalismo e resultados comprovados. Veja o que alguns dos nossos clientes têm a dizer sobre a experiência de contar com nossos serviços de segurança privada.</>
                ) : (
                  <>At <strong>DC SECURE GROUP, Lda</strong>, every client partnership is forged with discipline, confidentiality, and proven outcomes. Discover what corporate leaders have to say about our private security services.</>
                )}
              </p>

              <div className="pt-6">
                <Link
                  href="/contactos"
                  className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white font-bold text-sm tracking-wide shadow-md transition-all active:scale-95 group"
                >
                  <span>{language === 'pt' ? 'Agende uma Visita' : 'Schedule a Site Visit'}</span>
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
                aria-label={language === 'pt' ? 'Página 1' : 'Page 1'}
                className={`h-2.5 rounded-full transition-all duration-300 ${activeSlide === 0 ? 'w-8 bg-[#C35614]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
              />
              <button
                onClick={() => setActiveSlide(1)}
                aria-label={language === 'pt' ? 'Página 2' : 'Page 2'}
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
