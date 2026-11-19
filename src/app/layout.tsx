import type { Metadata } from 'next';
import './globals.css';
import ScrollToTopOnNavigate from '@/components/ScrollToTopOnNavigate';

export const metadata: Metadata = {
  metadataBase: new URL('https://dcsecuregroup.co.mz'),
  title: 'DC SECURE GROUP, Lda | Segurança Privada e Vigilância Integrada em Moçambique',
  description: 'A DC SECURE GROUP, Lda é líder em proteção e segurança patrimonial, vigilância, controlo de acessos, transporte de valores, proteção VIP, segurança eletrónica e rastreio de frotas por satélite em Moçambique. NUIT: 400724423.',
  keywords: [
    'segurança privada Moçambique',
    'DC Secure Group',
    'vigilância patrimonial Matola Boane Maputo',
    'transporte de fundos e valores Moçambique',
    'guarda costas Moçambique',
    'proteção VIP',
    'rastreio de viaturas satélite',
    'sistemas de segurança eletrónica CCTV alarmes',
    'Danício Fabião Chongole',
    'segurança Boane Matola Rio'
  ],
  authors: [{ name: 'DC SECURE GROUP, Lda' }],
  creator: 'DC SECURE GROUP, Lda',
  publisher: 'DC SECURE GROUP, Lda',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_MZ',
    url: 'https://dcsecuregroup.co.mz',
    title: 'DC SECURE GROUP, Lda | Proteção de Pessoas e Bens',
    description: 'Soluções integradas de segurança de alta tecnologia, transporte de valores, vigilância e rastreio via satélite.',
    siteName: 'DC SECURE GROUP',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-MZ" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-shield-blue selection:text-white">
        <ScrollToTopOnNavigate />
        {children}
      </body>
    </html>
  );
}
