'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import ServicesSection from '@/components/ServicesSection';
import FeaturedSolutions from '@/components/FeaturedSolutions';
import QuoteSimulator from '@/components/QuoteSimulator';
import { useLanguage } from '@/i18n/LanguageContext';

export default function ServicosPage() {
  const { t, language } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        
        {/* Expansive Hero Section with HD Video */}
        <Hero
          isSubpage={true}
          badge={t('servicosPage.badge')}
          pageTitle={t('servicosPage.title')}
          pageSubtitle={t('servicosPage.subtitle')}
          breadcrumbs={[
            { label: t('servicosPage.breadcrumbHome'), href: '/' },
            { label: t('servicosPage.breadcrumbServices') }
          ]}
          ctaText={t('servicosPage.ctaHero')}
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
