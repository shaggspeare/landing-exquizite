import React from 'react';
import { Quote } from 'lucide-react';
import data from '../data.json';

const testimonials = data.testimonials.items;

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-12 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-8 md:mb-16">{data.testimonials.sectionTitle}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-3xl relative">
              <Quote className="text-primary-200 mb-6" size={40} />
              <p className="text-lg text-slate-700 mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-bold text-slate-900">{t.author}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;