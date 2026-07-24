import React from 'react';
import { Quote } from 'lucide-react';
import { useData } from '../hooks/useData';

const Testimonials: React.FC = () => {
  const data = useData();
  const testimonials = data.testimonials.items;

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-paper border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl tracking-[-0.02em] text-center text-ink mb-12 md:mb-16">{data.testimonials.sectionTitle}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-cream p-8 rounded-card border-[1.5px] border-ink/12 relative">
              <Quote className="text-accent mb-6" size={32} />
              <p className="text-base text-ink/75 mb-6 leading-relaxed">"{t.quote}"</p>
              <div className="pt-4 border-t border-ink/10">
                <p className="font-extrabold text-ink text-sm">{t.author}</p>
                <p className="text-sm text-ink/50">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;