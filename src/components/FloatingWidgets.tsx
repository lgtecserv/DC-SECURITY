'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function FloatingWidgets() {
  const { t, language } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const whatsappMessage = language === 'pt'
    ? 'Ol%C3%A1%2C%20gostaria%20de%20solicitar%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20DC%20SECURE%20GROUP.'
    : 'Hello%2C%20I%20would%20like%20to%20inquire%20about%20DC%20SECURE%20GROUP%20security%20services.';

  return (
    <>
      {/* Bottom-Left Floating Phone (WhatsApp) & Fale Connosco Pill (Link to /contactos) */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center space-x-2 animate-fadeIn">
        <a
          href={`https://wa.me/258845393269?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('floating.whatsappChat')}
          className="w-12 h-12 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 border-2 border-white"
        >
          <Phone className="w-5 h-5 fill-current" />
        </a>

        <Link
          href="/contactos"
          className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-[#102147] hover:text-[#C35614] font-bold text-xs shadow-2xl border border-slate-200 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <Phone className="w-4 h-4 text-[#C35614]" />
          <span>{language === 'pt' ? 'Fale Connosco' : 'Contact Us'}</span>
        </Link>
      </div>

      {/* Bottom-Right Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label={t('floating.backToTop')}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20 animate-fadeIn"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}
    </>
  );
}
