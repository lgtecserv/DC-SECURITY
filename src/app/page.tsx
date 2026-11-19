import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import FeaturedSolutions from '@/components/FeaturedSolutions';
import Testimonials from '@/components/Testimonials';
import QuoteSimulator from '@/components/QuoteSimulator';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        {/* Hero Section matching Screenshot 1 */}
        <Hero />

        {/* Quem Somos Section matching Screenshot 2 */}
        <AboutSection />

        {/* Services & Solutions Section with DC Official Services */}
        <ServicesSection />

        {/* Featured Solutions (2 Large Cards) matching Screenshot 3 */}
        <div id="solucoes">
          <FeaturedSolutions />
        </div>

        {/* Testimonials Section matching Screenshot 4 */}
        <Testimonials />

        {/* Interactive Quote Calculator */}
        <div id="cotacao">
          <QuoteSimulator />
        </div>

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer matching Screenshot 5 */}
      <Footer />

      {/* Floating Widgets (Fale Connosco & Back to top) */}
      <FloatingWidgets />
    </>
  );
}
