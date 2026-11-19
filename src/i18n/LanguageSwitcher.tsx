'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';

interface LanguageSwitcherProps {
  variant?: 'compact' | 'pill' | 'mobile';
  className?: string;
}

export default function LanguageSwitcher({
  variant = 'compact',
  className = '',
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center space-x-1 bg-white/10 rounded-full p-1 border border-white/15 text-xs ${className}`}>
        <button
          type="button"
          onClick={() => setLanguage('pt')}
          className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full font-bold transition-all ${
            language === 'pt'
              ? 'bg-[#C35614] text-white shadow-sm'
              : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
          aria-label="Mudar para Português"
          title="Português (Moçambique)"
        >
          <span className="text-sm leading-none" role="img" aria-label="Moçambique">🇲🇿</span>
          <span className="tracking-wider">PT</span>
        </button>

        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full font-bold transition-all ${
            language === 'en'
              ? 'bg-[#C35614] text-white shadow-sm'
              : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
          aria-label="Switch to English"
          title="English (International)"
        >
          <span className="text-sm leading-none" role="img" aria-label="United Kingdom">🇬🇧</span>
          <span className="tracking-wider">EN</span>
        </button>
      </div>
    );
  }

  if (variant === 'mobile') {
    return (
      <div className={`w-full p-3 rounded-2xl bg-slate-50 border border-slate-200/80 ${className}`}>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
          {language === 'pt' ? 'Selecione o Idioma:' : 'Select Language:'}
        </p>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setLanguage('pt')}
            className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl font-bold text-xs transition-all ${
              language === 'pt'
                ? 'bg-[#102147] text-white shadow-md border border-[#102147]'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span className="text-base leading-none">🇲🇿</span>
            <span>Português</span>
          </button>

          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl font-bold text-xs transition-all ${
              language === 'en'
                ? 'bg-[#102147] text-white shadow-md border border-[#102147]'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span className="text-base leading-none">🇬🇧</span>
            <span>English</span>
          </button>
        </div>
      </div>
    );
  }

  // Default 'pill' variant for Main Navbar desktop
  return (
    <div className={`inline-flex items-center bg-slate-100 rounded-full p-1 border border-slate-200 text-xs shadow-inner ${className}`}>
      <button
        type="button"
        onClick={() => setLanguage('pt')}
        className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full font-bold transition-all ${
          language === 'pt'
            ? 'bg-[#102147] text-white shadow-sm'
            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
        }`}
        aria-label="Mudar para Português"
        title="Português"
      >
        <span className="text-sm leading-none">🇲🇿</span>
        <span className="font-semibold">PT</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full font-bold transition-all ${
          language === 'en'
            ? 'bg-[#102147] text-white shadow-sm'
            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
        }`}
        aria-label="Switch to English"
        title="English"
      >
        <span className="text-sm leading-none">🇬🇧</span>
        <span className="font-semibold">EN</span>
      </button>
    </div>
  );
}
