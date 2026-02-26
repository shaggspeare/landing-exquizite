import React from 'react';
import { useData } from '../hooks/useData';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const data = useData();
  const d = data.pricing;

  return (
    <section id="pricing" className="py-12 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900">{d.sectionTitle}</h2>
          <p className="mt-4 text-xl text-slate-600">{d.sectionSubtitle}</p>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold text-slate-900">{d.planName}</h3>
            <p className="mt-4 text-slate-500">{d.planDescription}</p>
            <div className="mt-8 flex items-baseline justify-center">
              <span className="text-5xl font-extrabold text-slate-900">{d.price}</span>
              <span className="ml-2 text-xl text-slate-500">{d.period}</span>
            </div>
          </div>
          <div className="px-8 pb-8 sm:px-10 sm:pb-10 pt-8 bg-slate-50 border-t border-slate-100">
            <ul className="space-y-4 mb-8">
              {d.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-slate-700">{feature}</p>
                </li>
              ))}
            </ul>
            <a href="#download" className="block w-full bg-primary-600 text-white rounded-xl px-6 py-4 text-center font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-200">
              {d.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;