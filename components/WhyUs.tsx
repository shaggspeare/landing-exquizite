import React from 'react';
import { useData } from '../hooks/useData';
import { Zap, Globe, Lock, Code } from 'lucide-react';

const WhyUs: React.FC = () => {
  const data = useData();
  const d = data.whyUs;

  const icons = [Zap, Globe, Lock, Code];

  return (
    <section className="py-20 md:py-28 bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl tracking-[-0.02em] mb-6">{d.sectionTitle}</h2>
            <p className="text-white/60 text-lg mb-10">
              {d.sectionSubtitle}
            </p>

            <div className="space-y-8">
              {d.points.map((point: { title: string; description: string }, i: number) => {
                const Icon = icons[i];
                return (
                  <div key={i} className="flex gap-4">
                    <div className="border-[1.5px] border-white/20 p-3 rounded-xl h-fit">
                      <Icon className="text-accent" size={22} />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg mb-1.5 tracking-[-0.01em]">{point.title}</h3>
                      <p className="text-white/55">{point.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
             <div className="relative rounded-[2rem] border-[6px] md:border-8 border-white/10 bg-[#111] overflow-hidden shadow-xl max-w-[240px] md:max-w-[320px]">
               <img
                 src={d.image.src}
                 alt={d.image.alt}
                 width={1290}
                 height={2796}
                 loading="lazy"
                 decoding="async"
                 className="w-full h-auto block"
               />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;