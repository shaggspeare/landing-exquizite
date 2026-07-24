import React from 'react';
import { useData } from '../hooks/useData';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const data = useData();
  const d = data.pricing;

  return (
    <section id="pricing" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl tracking-[-0.02em] text-ink">{d.sectionTitle}</h2>
          <p className="mt-4 text-lg text-ink/60">{d.sectionSubtitle}</p>
        </div>

        <div className="max-w-lg mx-auto bg-paper rounded-card overflow-hidden border-[1.5px] border-ink/15">
          <div className="p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-extrabold text-ink tracking-[-0.01em]">{d.planName}</h3>
            <p className="mt-4 text-ink/60">{d.planDescription}</p>
            <div className="mt-8 flex items-baseline justify-center">
              <span className="font-display text-5xl tracking-[-0.02em] text-ink">{d.price}</span>
              <span className="ml-2 text-lg text-ink/50">{d.period}</span>
            </div>
          </div>
          <div className="px-8 pb-8 sm:px-10 sm:pb-10 pt-8 bg-cream border-t border-ink/10">
            <ul className="space-y-4 mb-8">
              {d.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-accent" />
                  </div>
                  <p className="ml-3 text-base text-ink/75">{feature}</p>
                </li>
              ))}
            </ul>
            <a href="#download" className="block w-full bg-ink text-white rounded-full px-6 py-4 text-center font-bold text-lg hover:bg-ink/85 transition-colors">
              {d.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;