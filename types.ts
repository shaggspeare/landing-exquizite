import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}