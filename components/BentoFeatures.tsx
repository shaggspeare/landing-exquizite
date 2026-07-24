import React from 'react';
import { useData } from '../hooks/useData';
import { Layers, Puzzle, CheckCircle, Edit3, Sparkles, Globe2, Share2, Smartphone, LayoutDashboard, Zap } from 'lucide-react';

const BentoFeatures: React.FC = () => {
  const data = useData();
  const d = data.bentoFeatures;

  return (
    <section id="features" className="py-20 md:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-ink/50 uppercase">{d.sectionLabel}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl tracking-[-0.02em] text-ink">
            {d.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            {d.sectionSubtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[minmax(160px,auto)]">

          {/* Tile 1: Game Modes */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-cream rounded-card p-6 md:p-8 border-[1.5px] border-ink/12 relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-5 w-11 h-11 rounded-full border-[1.5px] border-ink/20 flex items-center justify-center text-ink">
                <Layers size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-ink mb-2 tracking-[-0.01em]">{d.tiles.learnYourWay.title}</h3>
              <p className="text-ink/60 text-sm mb-6 max-w-sm">{d.tiles.learnYourWay.description}</p>

              <div className="grid grid-cols-2 gap-3 max-w-md">
                <div className="bg-paper p-4 rounded-button border-[1.5px] border-ink/10 flex items-center gap-3">
                  <Layers size={18} className="text-accent" />
                  <span className="font-semibold text-ink text-sm">{d.tiles.learnYourWay.modes[0]}</span>
                </div>
                <div className="bg-paper p-4 rounded-button border-[1.5px] border-ink/10 flex items-center gap-3">
                  <Puzzle size={18} className="text-accent" />
                  <span className="font-semibold text-ink text-sm">{d.tiles.learnYourWay.modes[1]}</span>
                </div>
                <div className="bg-paper p-4 rounded-button border-[1.5px] border-ink/10 flex items-center gap-3">
                  <CheckCircle size={18} className="text-accent" />
                  <span className="font-semibold text-ink text-sm">{d.tiles.learnYourWay.modes[2]}</span>
                </div>
                <div className="bg-paper p-4 rounded-button border-[1.5px] border-ink/10 flex items-center gap-3">
                  <Edit3 size={18} className="text-accent" />
                  <span className="font-semibold text-ink text-sm">{d.tiles.learnYourWay.modes[3]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tile 2: AI Intelligence */}
          <div className="col-span-1 bg-ink rounded-card p-6 text-white relative overflow-hidden flex flex-col">
            <div className="relative z-10">
               <div className="mb-5 w-11 h-11 rounded-full border-[1.5px] border-white/25 flex items-center justify-center text-accent">
                 <Sparkles size={20} />
               </div>
               <h3 className="text-xl font-extrabold mb-2 tracking-[-0.01em]">{d.tiles.aiPowered.title}</h3>
               <p className="text-white/60 text-sm mb-4">{d.tiles.aiPowered.description}</p>
            </div>

            <div className="mt-auto relative w-full h-36 rounded-t-xl overflow-hidden border-[1.5px] border-b-0 border-white/15">
               <img
                  src={d.tiles.aiPowered.image.src}
                  alt={d.tiles.aiPowered.image.alt}
                  className="w-full h-auto object-cover object-top"
               />
            </div>
          </div>

          {/* Tile 3: 40+ Languages */}
          <div className="col-span-1 bg-cream rounded-card p-6 border-[1.5px] border-ink/12 relative overflow-hidden">
             <div className="mb-5 w-11 h-11 rounded-full border-[1.5px] border-ink/20 flex items-center justify-center text-ink">
               <Globe2 size={20} />
             </div>
             <h3 className="text-xl font-extrabold text-ink mb-2 tracking-[-0.01em]">{d.tiles.languages.title}</h3>
             <p className="text-ink/60 text-sm mb-4">{d.tiles.languages.description}</p>

             <div className="text-2xl leading-relaxed opacity-80">
               {d.tiles.languages.flags.split('\n').map((line: string, i: number) => (
                 <span key={i}>{line}{i < d.tiles.languages.flags.split('\n').length - 1 && <br/>}</span>
               ))}
             </div>
          </div>

          {/* Tile 4: Native iOS */}
          <div className="col-span-1 bg-ink rounded-card p-6 text-white relative overflow-hidden flex flex-col justify-center">
            <div className="relative z-10">
              <div className="mb-5 w-11 h-11 rounded-full border-[1.5px] border-white/25 flex items-center justify-center text-white">
                 <Smartphone size={20} />
              </div>
              <h3 className="text-xl font-extrabold mb-2 tracking-[-0.01em]">{d.tiles.nativeIos.title}</h3>
              <p className="text-white/60 text-sm">{d.tiles.nativeIos.description}</p>
            </div>
          </div>

          {/* Tile 5: Share & Discover */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-paper rounded-card p-6 md:p-8 border-[1.5px] border-ink/12 flex flex-col md:flex-row items-start gap-6">
             <div className="flex-1">
               <div className="mb-5 w-11 h-11 rounded-full border-[1.5px] border-ink/20 flex items-center justify-center text-ink">
                 <Share2 size={20}/>
               </div>
               <h3 className="text-xl font-extrabold text-ink mb-2 tracking-[-0.01em]">{d.tiles.shareDiscover.title}</h3>
               <p className="text-ink/60 text-sm mb-4">{d.tiles.shareDiscover.description}</p>
             </div>
             <div className="flex-1 w-full bg-cream rounded-button p-4 border-[1.5px] border-ink/10">
                <div className="flex items-center justify-between text-xs text-ink/40 mb-2 font-mono">
                  <span>{d.tiles.shareDiscover.recentShares}</span>
                  <span>{d.tiles.shareDiscover.viewAll}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 bg-paper p-2 rounded-lg border-[1.5px] border-ink/8">
                    <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-[10px] font-bold text-ink">FR</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-ink text-sm truncate">{d.tiles.shareDiscover.shares[0].name}</p>
                      <p className="text-xs text-ink/40">{d.tiles.shareDiscover.shares[0].wordCount}</p>
                    </div>
                    <Zap size={14} className="text-accent" />
                  </div>
                  <div className="flex items-center gap-3 bg-paper p-2 rounded-lg border-[1.5px] border-ink/8">
                    <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-[10px] font-bold text-ink">ES</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-ink text-sm truncate">{d.tiles.shareDiscover.shares[1].name}</p>
                      <p className="text-xs text-ink/40">{d.tiles.shareDiscover.shares[1].wordCount}</p>
                    </div>
                    <Zap size={14} className="text-accent" />
                  </div>
                </div>
             </div>
          </div>

          {/* Tile 6: Sync */}
          <div className="col-span-1 bg-accent rounded-card p-6 text-white flex flex-col justify-center">
             <div className="mb-5 w-11 h-11 rounded-full border-[1.5px] border-white/30 flex items-center justify-center">
               <Globe2 size={20} />
             </div>
             <h3 className="text-xl font-extrabold mb-2 tracking-[-0.01em]">{d.tiles.seamlessSync.title}</h3>
             <p className="text-white/85 text-sm">{d.tiles.seamlessSync.description}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;