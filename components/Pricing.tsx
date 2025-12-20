import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-slate-600">Education should be accessible to everyone.</p>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold text-slate-900">Free Forever</h3>
            <p className="mt-4 text-slate-500">Everything you need to master a language.</p>
            <div className="mt-8 flex items-baseline justify-center">
              <span className="text-5xl font-extrabold text-slate-900">$0</span>
              <span className="ml-2 text-xl text-slate-500">/month</span>
            </div>
          </div>
          <div className="px-8 pb-8 sm:px-10 sm:pb-10 pt-8 bg-slate-50 border-t border-slate-100">
            <ul className="space-y-4 mb-8">
              {[
                "Unlimited word sets",
                "Access all 4 game modes",
                "AI word generation",
                "Share your sets",
                "Cross-platform sync"
              ].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-slate-700">{feature}</p>
                </li>
              ))}
            </ul>
            <a href="#download" className="block w-full bg-primary-600 text-white rounded-xl px-6 py-4 text-center font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-200">
              Get Started for Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;