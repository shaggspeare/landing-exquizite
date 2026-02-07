import React from 'react';
import Hero from './Hero';
import BentoFeatures from './BentoFeatures';
import ScreenshotGallery from './ScreenshotGallery';
import HowItWorks from './HowItWorks';
import WhyUs from './WhyUs';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQ from './FAQ';
import DownloadCTA from './DownloadCTA';

const LandingPage: React.FC = () => {
  return (
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
  );
};

export default LandingPage;
