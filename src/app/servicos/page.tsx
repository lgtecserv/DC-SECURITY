import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import ServicesSection from '@/components/ServicesSection';
import FeaturedSolutions from '@/components/FeaturedSolutions';
import QuoteSimulator from '@/components/QuoteSimulator';

export const metadata = {
  title: 'Serviços & Soluções | DC SECURE GROUP',
  description: 'Conheça todos os serviços de segurança da DC SECURE GROUP: vigilância armada, transporte de valores, proteção VIP, CCTV e rastreio satélite.',
};

export default function ServicosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        
        {/* Expansive Hero Section with HD Video */}
        <Hero
          isSubpage={true}
          badge="OBJECTO SOCIAL HOMOLOGADO"
          pageTitle="Serviços & Soluções"
          pageSubtitle="Soluções integradas e regulamentadas para defesa patrimonial, logística blindada e proteção pessoal em Moçambique."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Serviços & Soluções' }
          ]}
          ctaText="Ver Catálogo"
          ctaLink="#servicos"
        />

        {/* Official Services Section */}
        <ServicesSection />

        {/* Featured Solutions */}
        <FeaturedSolutions />

        {/* Quote Simulator */}
        <div className="mt-12">
          <QuoteSimulator />
        </div>

      </main>

      <Footer />
      <FloatingWidgets />
    </>
  );
}
