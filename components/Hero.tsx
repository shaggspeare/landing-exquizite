import React from 'react';
import { useData } from '../hooks/useData';
import { Globe } from 'lucide-react';
import AppStoreBadge from './AppStoreBadge';

const Hero: React.FC = () => {
  const data = useData();
  const d = data.hero;

  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-28 overflow-hidden bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-20 items-center">

          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span className="text-[11px] font-extrabold tracking-[0.2em] text-ink/50 uppercase">{d.badge}</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-[64px] tracking-[-0.02em] mb-6 leading-[1.05] text-ink">
              {d.titleLine1}
              <br />
              <span className="text-accent">{d.titleLine2}</span>
            </h1>

            <p className="max-w-2xl lg:max-w-md text-base md:text-lg text-ink/60 mb-10 leading-relaxed mx-auto lg:mx-0">
              {d.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row lg:justify-start justify-center items-center gap-4">
              <AppStoreBadge url={d.appStoreUrl} height={54} />
              <a
                href={d.webAppUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-ink border border-ink/25 rounded-full font-semibold hover:border-ink transition-colors"
              >
                <Globe size={20} />
                {d.webAppButton}
              </a>
            </div>
          </div>

          {/* Right Side - 2 Overlapping Screens */}
          <div className="relative mx-auto max-w-[1000px] h-[340px] md:h-[600px] flex justify-center items-start">

          {/* Dashboard Screen (Back, taller) */}
          <div className="absolute left-1/2 -translate-x-[125px] md:-translate-x-[170px] top-0 z-10 w-[170px] md:w-[260px]">
             <div className="rounded-[2.5rem] border-[6px] md:border-8 border-ink overflow-hidden bg-ink shadow-xl">
                <img
                  src={d.images.dashboard.src}
                  alt={d.images.dashboard.alt}
                  width={1290}
                  height={2796}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-auto block"
                />
             </div>
          </div>

          {/* Game Modes Screen (Front, offset down) */}
          <div className="absolute left-1/2 translate-x-[-10px] md:translate-x-[10px] top-20 md:top-32 z-30 w-[170px] md:w-[260px]">
             <div className="rounded-[2.5rem] border-[6px] md:border-8 border-ink overflow-hidden bg-ink shadow-xl">
                <img
                  src={d.images.gameModes.src}
                  alt={d.images.gameModes.alt}
                  width={1290}
                  height={2796}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-auto block"
                />
             </div>
          </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;