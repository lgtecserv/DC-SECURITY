import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Legal Details */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <div className="bg-white rounded-lg p-2 inline-flex items-center shadow-md">
                <Image 
                  src="/images/logo.png" 
                  alt="DC SECURE GROUP Logo" 
                  width={150} 
                  height={55} 
                  className="object-contain h-10 w-auto"
                />
              </div>
            </Link>
            
            <p className="text-slate-300 text-xs leading-relaxed">
              <strong>DC SECURE GROUP, Lda</strong> — Sociedade comercial moçambicana especializada em proteção integrada de pessoas e bens, transporte de valores, vigilância e tecnologia satelital.
            </p>

            <div className="pt-2 space-y-1.5 text-[11px] text-slate-400 font-mono">
              <p>Conservatória das Entidades Legais: <strong className="text-slate-200">nº 100709287</strong></p>
              <p>NUIT Fiscal: <strong className="text-slate-200">400724423</strong></p>
              <p>Sócio Maioritário: <strong className="text-slate-200">Sr. Danício Fabião Chongole</strong></p>
            </div>
          </div>

          {/* Col 2: Serviços Oficiais */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Serviços Oficiais</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#servicos" className="hover:text-shield-accent transition-colors">
                  Protecção de Pessoas e Bens
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-shield-accent transition-colors">
                  Vigilância e Controlo de Acessos
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-shield-accent transition-colors">
                  Transporte de Fundos e Valores
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-shield-accent transition-colors">
                  Proteção VIP / Guarda-Costas
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-shield-accent transition-colors">
                  Segurança Electrónica & CCTV
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-shield-accent transition-colors">
                  Rastreio Satélite de Viaturas
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-shield-accent transition-colors">
                  Treinamento & Estudos de Segurança
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navegação Rápida */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#inicio" className="hover:text-shield-accent transition-colors">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-shield-accent transition-colors">
                  Sobre a Empresa
                </Link>
              </li>
              <li>
                <Link href="#tecnologia" className="hover:text-shield-accent transition-colors">
                  Rastreio Satelital
                </Link>
              </li>
              <li>
                <Link href="#cotacao" className="hover:text-shield-accent transition-colors">
                  Pedir Cotação
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-shield-accent transition-colors">
                  Contactos e Sede
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Sede e Contactos */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Sede Operacional</h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-shield-accent flex-shrink-0 mt-0.5" />
                <span>Rua do Posto Administrativo da Matola Rio, nº 19, 2º Andar, Bairro Matola Rio A, Boane - Moçambique</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-shield-accent flex-shrink-0" />
                <span>+258 84 000 0000 (Central 24h)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-shield-accent flex-shrink-0" />
                <span>contacto@dcsecuregroup.co.mz</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="#cotacao"
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-navy-800 hover:bg-shield-blue text-white text-xs font-semibold border border-white/10 transition-colors"
              >
                <span>Solicitar Proposta Comercial</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} DC SECURE GROUP, Lda. Todos os direitos reservados. Licenciado para Atividades de Segurança em Moçambique.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-slate-400">Desenvolvido para Hospedagem de Alta Performance na Vercel</span>
            <a 
              href="#inicio" 
              className="p-2 rounded-lg bg-navy-900 hover:bg-shield-blue text-slate-300 hover:text-white transition"
              aria-label="Voltar ao Topo"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
