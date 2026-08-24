import React from 'react';
import { useData } from '../hooks/useData';
import { Headphones, Zap, Route } from 'lucide-react';

const icons = [Headphones, Zap, Route];

const WhatsNew: React.FC = () => {
  const data = useData();
  const d = data.whatsNew;

  return (
    <section className="py-20 md:py-28 bg-ink text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-4 bg-accent/15 border border-accent/40 rounded-full pl-2.5 pr-3.5 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-accent uppercase">{d.sectionLabel}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl tracking-[-0.02em]">
            {d.sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {d.items.map((item: { title: string; description: string }, i: number) => {
            const Icon = icons[i];
            return (
              <div key={i} className="bg-white/[0.04] rounded-card p-6 md:p-8 border-[1.5px] border-white/10 hover:border-accent/50 transition-colors">
                <div className="mb-5 w-11 h-11 rounded-full bg-accent flex items-center justify-center text-white shadow-[0_0_0_6px_rgba(255,61,13,0.12)]">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-extrabold mb-2 tracking-[-0.01em]">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
