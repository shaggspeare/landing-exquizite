import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useData } from '../hooks/useData';

const FAQ: React.FC = () => {
  const data = useData();
  const faqs = data.faq.items;

  return (
    <section className="py-20 md:py-28 bg-paper">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl tracking-[-0.02em] text-center text-ink mb-12">{data.faq.sectionTitle}</h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-cream rounded-button p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer border-[1.5px] border-ink/10 hover:border-ink/25 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-ink group-open:text-accent">
                {faq.q}
                <ChevronDown className="ml-4 transition-transform group-open:rotate-180 shrink-0" size={20} />
              </summary>
              <p className="mt-4 text-ink/60 leading-relaxed text-sm">
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