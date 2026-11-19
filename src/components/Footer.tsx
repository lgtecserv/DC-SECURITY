'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#102147] text-white text-sm relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Column 1: Sobre a Empresa (Replaces Boletim/Newsletter since blog is excluded) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="bg-white rounded-xl p-2.5 inline-flex items-center shadow-md">
                <Image
                  src="/images/logo-official.png"
                  alt="DC SECURE GROUP Logo"
                  width={220}
                  height={75}
                  className="object-contain h-12 w-auto"
                />
              </div>
            </div>

            <h3 className="text-lg font-bold text-white tracking-tight">
              DC SECURE GROUP, Lda
            </h3>

            <p className="text-slate-200 text-sm leading-relaxed max-w-md">
              A tranquilidade que você merece, com a confiança que você precisa.
            </p>

            <p className="text-slate-300 text-xs leading-relaxed max-w-md">
              Sociedade comercial especializada em proteção integrada de pessoas e bens, transporte de valores, vigilância e tecnologia satelital em Moçambique.
            </p>

            <div className="pt-2 space-y-1 text-xs text-slate-400 font-mono">
              <p>Conservatória das Entidades Legais: <strong className="text-white">nº 100709287</strong></p>
              <p>NUIT Fiscal: <strong className="text-white">400724423</strong></p>
              <p>Sócio Maioritário: <span className="text-slate-300">Sr. Danício Fabião Chongole</span></p>
            </div>
          </div>

          {/* Column 2: Links rápidos */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide">
              Links rápidos
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#C35614] transition-colors flex items-center space-x-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#C35614] font-bold">&gt;</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/quem-somos" className="hover:text-[#C35614] transition-colors flex items-center space-x-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#C35614] font-bold">&gt;</span>
                  <span>Quem Somos</span>
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-[#C35614] transition-colors flex items-center space-x-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#C35614] font-bold">&gt;</span>
                  <span>Serviços</span>
                </Link>
              </li>
              <li>
                <Link href="/#solucoes" className="hover:text-[#C35614] transition-colors flex items-center space-x-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#C35614] font-bold">&gt;</span>
                  <span>Soluções</span>
                </Link>
              </li>
              <li>
                <Link href="/contactos" className="hover:text-[#C35614] transition-colors flex items-center space-x-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#C35614] font-bold">&gt;</span>
                  <span>Contacte-nos</span>
                </Link>
              </li>
              <li>
                <Link href="/contactos" className="hover:text-[#C35614] transition-colors flex items-center space-x-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#C35614] font-bold">&gt;</span>
                  <span>Trabalhe Connosco</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Endereço & Contactos */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide">
              Endereço
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C35614] flex-shrink-0 mt-0.5" />
                <span>Rua do Posto Administrativo da Matola Rio, nº 19, 2º Andar, Bairro Matola Rio A, Boane - Moçambique</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#C35614] flex-shrink-0" />
                <a href="mailto:contacto@dcsecuregroup.co.mz" className="hover:text-white transition-colors">
                  contacto@dcsecuregroup.co.mz
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#C35614] flex-shrink-0" />
                <a href="mailto:comercial@dcsecuregroup.co.mz" className="hover:text-white transition-colors">
                  comercial@dcsecuregroup.co.mz
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#C35614] flex-shrink-0" />
                <span>+258 84 539 3269 | +258 86 301 3135</span>
              </div>
            </div>

            {/* Social Icons matching Trankwyllo */}
            <div className="pt-2 flex items-center space-x-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#C35614] hover:bg-[#A7450D] flex items-center justify-center text-white transition-transform hover:scale-105 text-xs font-bold"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#C35614] hover:bg-[#A7450D] flex items-center justify-center text-white transition-transform hover:scale-105 text-xs font-bold"
              >
                ig
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-[#C35614] hover:bg-[#A7450D] flex items-center justify-center text-white transition-transform hover:scale-105 text-xs font-bold"
              >
                in
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#0c1a38] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            © {new Date().getFullYear()} DC SECURE GROUP, Lda. Todos os direitos reservados.
          </p>

          <p className="text-slate-300">
            Website desenvolvido por :{' '}
            <a
              href="https://www.lgtecserv.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#C35614] font-semibold underline underline-offset-2 transition-colors"
            >
              LG TecServ
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
