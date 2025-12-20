import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoFeatures from './components/BentoFeatures';
import ScreenshotGallery from './components/ScreenshotGallery';
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <BentoFeatures />
        <WhyUs />
        <ScreenshotGallery />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;