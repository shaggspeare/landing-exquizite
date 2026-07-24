import React from 'react';
import { PlusCircle, Gamepad2, TrendingUp, Users } from 'lucide-react';
import { useData } from '../hooks/useData';

const icons = [PlusCircle, Gamepad2, TrendingUp, Users];

const HowItWorks: React.FC = () => {
  const data = useData();
  const steps = data.howItWorks.steps.map((step: any, i: number) => ({ icon: icons[i], ...step }));

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl tracking-[-0.02em] text-ink">{data.howItWorks.sectionTitle}</h2>
          <p className="mt-4 text-lg text-ink/60">{data.howItWorks.sectionSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="bg-cream rounded-card p-8 border-[1.5px] border-ink/12 h-full">
                <div className="font-mono text-xs font-bold text-accent mb-4">0{idx + 1}</div>
                <div className="w-12 h-12 rounded-full border-[1.5px] border-ink/20 flex items-center justify-center text-ink mb-5">
                  <step.icon size={22} />
                </div>
                <h3 className="text-lg font-extrabold text-ink mb-2 tracking-[-0.01em]">{step.title}</h3>
                <p className="text-ink/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3.5 w-7 border-t-[1.5px] border-ink/15 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;