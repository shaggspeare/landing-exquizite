import React from 'react';
import Hero from './Hero';
import WhatsNew from './WhatsNew';
import BentoFeatures from './BentoFeatures';
import ScreenshotGallery from './ScreenshotGallery';
import HowItWorks from './HowItWorks';
import WhyUs from './WhyUs';
import Pricing from './Pricing';
import FAQ from './FAQ';
import DownloadCTA from './DownloadCTA';
import { useSeo } from '../hooks/useSeo';

const LandingPage: React.FC = () => {
  useSeo('home');
  return (
    <main>
      <Hero />
      <WhatsNew />
      <BentoFeatures />
      <WhyUs />
      <ScreenshotGallery />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <DownloadCTA />
    </main>
  );
};

export default LandingPage;
