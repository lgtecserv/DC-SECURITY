'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Phone, Mail, MapPin, Menu, X, ArrowRight, Clock } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner with Registration & Contact Details */}
      <div className="bg-navy-950/90 border-b border-white/10 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-300">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-slate-400">
              <Shield className="w-3.5 h-3.5 text-shield-accent" />
              <span>Entidade Registada: <strong className="text-white">Conservatória nº 100709287</strong> | NUIT: <strong className="text-white">400724423</strong></span>
            </span>
            <span className="flex items-center space-x-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-shield-accent" />
              <span>Matola Rio, Boane - Moçambique</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-emerald-400">
              <Clock className="w-3.5 h-3.5" />
              <span>Central de Operações 24/7</span>
            </span>
            <a 
              href="tel:+258840000000" 
              className="flex items-center space-x-1 text-white hover:text-shield-accent transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-shield-accent" />
              <span>+258 84 000 0000</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-navy-900/95 backdrop-blur-md shadow-xl border-b border-navy-700/50 py-3' 
          : 'bg-navy-900/80 backdrop-blur-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative bg-white rounded-lg p-1.5 shadow-md flex items-center justify-center transition-transform group-hover:scale-105">
                <Image 
                  src="/images/logo.png" 
                  alt="DC SECURE GROUP Logo" 
                  width={140} 
                  height={50} 
                  className="object-contain h-10 w-auto"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="#inicio" className="text-sm font-medium text-slate-200 hover:text-shield-accent transition-colors">
                Início
              </Link>
              <Link href="#sobre" className="text-sm font-medium text-slate-200 hover:text-shield-accent transition-colors">
                A Empresa
              </Link>
              <Link href="#servicos" className="text-sm font-medium text-slate-200 hover:text-shield-accent transition-colors">
                Serviços Oficiais
              </Link>
              <Link href="#tecnologia" className="text-sm font-medium text-slate-200 hover:text-shield-accent transition-colors">
                Rastreio & Tecnologia
              </Link>
              <Link href="#contacto" className="text-sm font-medium text-slate-200 hover:text-shield-accent transition-colors">
                Contactos
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link 
                href="#cotacao" 
                className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-shield-blue to-blue-600 text-white font-medium text-sm shadow-lg shadow-shield-blue/30 hover:brightness-110 active:scale-95 transition-all"
              >
                <span>Solicitar Cotação</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-navy-800 text-slate-200 hover:text-white focus:outline-none"
                aria-label="Abrir Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-navy-900 border-b border-navy-700/80 px-4 pt-3 pb-6 space-y-3 mt-3 shadow-2xl">
            <Link 
              href="#inicio" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-100 hover:bg-navy-800 hover:text-shield-accent"
            >
              Início
            </Link>
            <Link 
              href="#sobre" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-100 hover:bg-navy-800 hover:text-shield-accent"
            >
              A Empresa
            </Link>
            <Link 
              href="#servicos" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-100 hover:bg-navy-800 hover:text-shield-accent"
            >
              Serviços Oficiais
            </Link>
            <Link 
              href="#tecnologia" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-100 hover:bg-navy-800 hover:text-shield-accent"
            >
              Rastreio & Tecnologia
            </Link>
            <Link 
              href="#contacto" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-100 hover:bg-navy-800 hover:text-shield-accent"
            >
              Contactos
            </Link>

            <div className="pt-4 border-t border-navy-800">
              <Link 
                href="#cotacao" 
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-shield-blue text-white font-medium text-center shadow-lg hover:bg-blue-600 transition"
              >
                <span>Solicitar Cotação Imediata</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
