import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import AboutSection from '@/components/AboutSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesSection from '@/components/ServicesSection';
import HowWeWork from '@/components/HowWeWork';
import OperationsShowcase from '@/components/OperationsShowcase';
import TechFeatures from '@/components/TechFeatures';
import Testimonials from '@/components/Testimonials';
import QuoteSimulator from '@/components/QuoteSimulator';
import FAQSection from '@/components/FAQSection';
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
        <WhyChooseUs />
        <ServicesSection />
        <HowWeWork />
        <OperationsShowcase />
        <TechFeatures />
        <Testimonials />
        <QuoteSimulator />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
