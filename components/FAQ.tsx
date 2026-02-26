import React from 'react';
import { ChevronDown } from 'lucide-react';
import data from '../data.json';

const faqs = data.faq.items;

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">{data.faq.sectionTitle}</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-slate-50 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer border border-transparent hover:border-slate-200 transition-colors">
              <summary className="flex items-center justify-between font-medium text-slate-900 group-open:text-primary-600">
                {faq.q}
                <ChevronDown className="ml-4 transition-transform group-open:rotate-180" size={20} />
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;