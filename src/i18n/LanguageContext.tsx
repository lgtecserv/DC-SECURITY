'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from './translations';

type TranslationsType = typeof translations['pt'];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string, fallback?: string) => string;
  translations: TranslationsType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'dc_secure_language';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang === 'pt' || savedLang === 'en') {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang === 'pt' ? 'pt-MZ' : 'en';
      } else {
        // Default to PT
        document.documentElement.lang = 'pt-MZ';
      }
    } catch {
      // localStorage may fail in restricted iframe / security environments
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.cookie = `${STORAGE_KEY}=${lang}; path=/; max-age=31536000`;
      document.documentElement.lang = lang === 'pt' ? 'pt-MZ' : 'en';
    } catch {
      // ignore
    }
  };

  /**
   * Helper function to get nested translation value:
   * e.g. t('nav.home') -> translations[language].nav.home
   */
  const t = (path: string, fallback?: string): string => {
    const currentDict = translations[language] || translations['pt'];
    const keys = path.split('.');
    
    let result: any = currentDict;
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        // Fallback to PT if key is missing in EN
        let ptResult: any = translations['pt'];
        for (const ptKey of keys) {
          if (ptResult && typeof ptResult === 'object' && ptKey in ptResult) {
            ptResult = ptResult[ptKey];
          } else {
            ptResult = undefined;
            break;
          }
        }
        return typeof ptResult === 'string' ? ptResult : (fallback || path);
      }
    }

    if (typeof result === 'string') {
      return result;
    }

    return fallback || path;
  };

  const currentTranslations = translations[language] || translations['pt'];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations: currentTranslations as any }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
