'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSwitcher from '@/i18n/LanguageSwitcher';

export default function Navbar() {
  const pathname = usePathname();
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menus on route change automatically
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceCategories = [
    { name: t('servicesList.vigilancia.name'), href: '/servicos#vigilancia' },
    { name: t('servicesList.acessos.name'), href: '/servicos#acessos' },
    { name: t('servicesList.valores.name'), href: '/servicos#valores' },
    { name: t('servicesList.vip.name'), href: '/servicos#vip' },
    { name: t('servicesList.cctv.name'), href: '/servicos#cctv' },
    { name: t('servicesList.rastreio.name'), href: '/servicos#rastreio' },
    { name: t('servicesList.treino.name'), href: '/servicos#treino' },
    { name: t('servicesList.k9.name'), href: '/servicos#k9' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans">
      {/* Topbar Navy matching Trankwyllo */}
      <div className="bg-[#102147] text-white text-xs py-2 px-4 hidden lg:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-slate-200">
            <span className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C35614]" />
              <span>{t('topbar.location')}</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Phone className="w-3.5 h-3.5 text-[#C35614]" />
              <span>{t('topbar.phones')}</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Mail className="w-3.5 h-3.5 text-[#C35614]" />
              <span>{t('topbar.email')}</span>
            </span>
          </div>

          {/* Social Icons circle buttons + Language Switcher with flags */}
          <div className="flex items-center space-x-3">
            <LanguageSwitcher variant="compact" />

            <div className="h-4 w-px bg-white/20" />

            <div className="flex items-center space-x-1.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-[#C35614] hover:bg-[#A7450D] flex items-center justify-center text-white transition-transform hover:scale-105 text-[11px] font-bold"
              >
                f
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-7 h-7 rounded-full bg-[#C35614] hover:bg-[#A7450D] flex items-center justify-center text-white transition-transform hover:scale-105 text-[11px] font-bold"
              >
                𝕏
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 rounded-full bg-[#C35614] hover:bg-[#A7450D] flex items-center justify-center text-white transition-transform hover:scale-105 text-[11px] font-bold"
              >
                ig
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-7 h-7 rounded-full bg-[#C35614] hover:bg-[#A7450D] flex items-center justify-center text-white transition-transform hover:scale-105 text-[11px] font-bold"
              >
                in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${scrolled
        ? 'bg-white shadow-md py-2 border-b border-slate-200'
        : 'bg-white shadow-sm py-3 border-b border-slate-100'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center py-1 group">
              <div className="relative flex items-center justify-center transition-transform group-hover:scale-105">
                <Image
                  src="/images/logo-official.png"
                  alt="DC SECURE GROUP Logo"
                  width={240}
                  height={80}
                  className="object-contain h-14 sm:h-16 lg:h-20 w-auto"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7">
              <Link
                href="/"
                className={`text-sm font-semibold transition-colors py-2 ${pathname === '/'
                  ? 'text-[#C35614] border-b-2 border-[#C35614]'
                  : 'text-[#102147] hover:text-[#C35614]'
                  }`}
              >
                {t('nav.home')}
              </Link>

              <Link
                href="/quem-somos"
                className={`text-sm font-semibold transition-colors py-2 ${pathname === '/quem-somos'
                  ? 'text-[#C35614] border-b-2 border-[#C35614]'
                  : 'text-[#102147] hover:text-[#C35614]'
                  }`}
              >
                {t('nav.about')}
              </Link>

              {/* Services & Solutions with Dropdown Menu */}
              <div
                className="relative py-2"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <Link
                  href="/servicos"
                  className={`flex items-center space-x-1 text-sm font-semibold transition-colors ${pathname.startsWith('/servicos')
                    ? 'text-[#C35614] border-b-2 border-[#C35614]'
                    : 'text-[#102147] hover:text-[#C35614]'
                    }`}
                >
                  <span>{t('nav.services')}</span>
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                </Link>

                {/* Dropdown Container */}
                {servicesDropdown && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/80 py-3 mt-1 z-50 animate-fadeIn">
                    <div className="px-4 py-1.5 border-b border-slate-100 mb-1">
                      <Link
                        href="/servicos"
                        onClick={() => setServicesDropdown(false)}
                        className="text-xs font-bold text-[#C35614] hover:underline"
                      >
                        {t('nav.viewAllServices')}
                      </Link>
                    </div>
                    {serviceCategories.map((cat, idx) => (
                      <Link
                        key={idx}
                        href={cat.href}
                        onClick={() => setServicesDropdown(false)}
                        className="flex items-center px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#C35614] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C35614] mr-2.5 opacity-60 flex-shrink-0" />
                        <span>{cat.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contactos"
                className={`text-sm font-semibold transition-colors py-2 ${pathname === '/contactos'
                  ? 'text-[#C35614] border-b-2 border-[#C35614]'
                  : 'text-[#102147] hover:text-[#C35614]'
                  }`}
              >
                {t('nav.contacts')}
              </Link>
            </div>

            {/* Action Buttons: Language Switcher + Trabalhe Connosco */}
            <div className="hidden lg:flex items-center space-x-3.5">
              <LanguageSwitcher variant="pill" />

              <Link 
                href="/contactos" 
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <span>{t('nav.careers')}</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <LanguageSwitcher variant="compact" />
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 active:scale-95 focus:outline-none transition-transform"
                aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
              >
                {isOpen ? <X className="w-6 h-6 text-[#C35614]" /> : <Menu className="w-6 h-6 text-slate-800" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu with independent scroll */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-8 space-y-3 mt-2 shadow-2xl max-h-[calc(100vh-85px)] overflow-y-auto overscroll-contain">
            {/* Mobile Language Switcher */}
            <div className="pb-2 border-b border-slate-100">
              <LanguageSwitcher variant="mobile" />
            </div>

            <Link
              href="/"
              className={`block px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                pathname === '/' ? 'text-[#C35614] bg-orange-50' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/quem-somos"
              className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                pathname === '/quem-somos' ? 'text-[#C35614] bg-orange-50 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              {t('nav.about')}
            </Link>

            <div className="px-4 py-2">
              <Link
                href="/servicos"
                className="block text-xs font-bold text-[#C35614] uppercase tracking-wider mb-2.5 hover:underline"
              >
                {t('nav.viewAllServices')}
              </Link>
              <div className="pl-3 space-y-2 border-l-2 border-slate-200">
                {serviceCategories.map((cat, idx) => (
                  <Link
                    key={idx}
                    href={cat.href}
                    className="block text-xs font-medium text-slate-700 hover:text-[#C35614] py-1 transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contactos"
              className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                pathname === '/contactos' ? 'text-[#C35614] bg-orange-50 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              {t('nav.contacts')}
            </Link>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link 
                href="/contactos" 
                className="w-full flex items-center justify-center px-4 py-3.5 rounded-full bg-[#C35614] text-white font-bold text-center text-xs uppercase tracking-wider shadow-md hover:bg-[#A7450D] active:scale-95 transition"
              >
                <span>{t('nav.careers')}</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
