'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldAlert, Home, Phone, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-between p-6">
      
      {/* Top Header */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center py-4">
        <Link href="/" className="inline-block bg-white p-2.5 rounded-2xl shadow-lg">
          <Image
            src="/images/logo-official.png"
            alt="DC SECURE GROUP Logo"
            width={200}
            height={65}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Início</span>
        </Link>
      </div>

      {/* Main 404 Message */}
      <div className="max-w-2xl mx-auto text-center py-12 px-4 space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-[#C35614]/20 border border-[#C35614]/40 text-[#C35614] mx-auto flex items-center justify-center shadow-2xl">
          <ShieldAlert className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400">
            Erro 404 • Perímetro Não Localizado
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Página Não Encontrada
          </h1>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
          O link que você seguiu pode ter sido alterado, removido ou o endereço foi digitado incorretamente.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#C35614] hover:bg-[#A7450D] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Página Inicial</span>
          </Link>

          <Link
            href="/contactos"
            className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/20 transition-all active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>Central de Atendimento</span>
          </Link>
        </div>

        {/* Quick Route Links */}
        <div className="pt-8 border-t border-white/10 text-xs text-slate-400 flex flex-wrap justify-center gap-6">
          <Link href="/quem-somos" className="hover:text-white transition-colors">Quem Somos</Link>
          <span>•</span>
          <Link href="/servicos" className="hover:text-white transition-colors">Serviços & Soluções</Link>
          <span>•</span>
          <Link href="/contactos" className="hover:text-white transition-colors">Fale Connosco</Link>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto w-full text-center py-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} DC SECURE GROUP, Lda. Todos os direitos reservados.</p>
      </div>

    </div>
  );
}
