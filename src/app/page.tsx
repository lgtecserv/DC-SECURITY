import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TechFeatures from '@/components/TechFeatures';
import QuoteSimulator from '@/components/QuoteSimulator';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <AboutSection />
        <ServicesSection />
        <TechFeatures />
        <QuoteSimulator />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
