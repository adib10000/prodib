import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ErrorBoundary from './components/UI/ErrorBoundary';
import { ToastContainer } from './components/UI/Toast';
import MetaTags from './components/SEO/MetaTags';
import StructuredData from './components/SEO/StructuredData';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Materials from './components/Materials';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import HowToOrder from './components/HowToOrder';
import Testimonials from './components/Testimonials';
import ContactForm from './components/Forms/ContactForm';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="min-h-screen bg-slate-900">
          <MetaTags />
          <StructuredData />
          
          <Header />
          <Hero />
          <Services />
          <Materials />
          <Gallery />
          <WhyChooseUs />
          <HowToOrder />
          <Testimonials />
          <ContactForm />
          <FAQ />
          <CTA />
          <Footer />
          <FloatingWhatsApp />
          
          <ToastContainer />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;