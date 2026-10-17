import React from 'react';
import Hero from './Hero';
import WhatsNew from './WhatsNew';
import Languages from './Languages';
import BentoFeatures from './BentoFeatures';
import WhyUs from './WhyUs';
import ScreenshotGallery from './ScreenshotGallery';
import HowItWorks from './HowItWorks';
import Pricing from './Pricing';
import FAQ from './FAQ';
import DownloadCTA from './DownloadCTA';
import { useSeo } from '../hooks/useSeo';

const LandingPage: React.FC = () => {
  useSeo('home');
  return (
    <>
      <Hero />
      <WhatsNew />
      <Languages />
      <BentoFeatures />
      <WhyUs />
      <ScreenshotGallery />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <DownloadCTA />
    </>
  );
};

export default LandingPage;
