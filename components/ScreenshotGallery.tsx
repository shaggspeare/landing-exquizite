import React from 'react';
import { useData } from '../hooks/useData';

const ScreenshotGallery: React.FC = () => {
  const data = useData();
  const d = data.screenshotGallery;
  const screenshots = d.screenshots;

  return (
    <section className="py-20 md:py-28 bg-cream border-y border-ink/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
         <h2 className="font-display text-3xl sm:text-4xl tracking-[-0.02em] text-ink">{d.sectionTitle}</h2>
         <p className="mt-4 text-lg text-ink/60">{d.sectionSubtitle}</p>
      </div>

      <div className="relative w-full">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none"></div>

        <div className="flex overflow-x-auto gap-8 pb-8 px-8 no-scrollbar snap-x snap-mandatory">
          {screenshots.map((shot, idx) => (
            <div key={idx} className="flex-shrink-0 snap-center first:pl-20 last:pr-20">
               <div className="rounded-[2rem] border-[6px] md:border-8 border-ink overflow-hidden shadow-xl bg-ink w-[220px] md:w-[280px]">
                 <img
                    src={shot.src}
                    alt={shot.alt}
                    width={1290}
                    height={2796}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto"
                 />
               </div>
               <p className="text-center mt-6 font-semibold text-ink/70 text-sm">{shot.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotGallery;