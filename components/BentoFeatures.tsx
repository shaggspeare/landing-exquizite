import React from 'react';
import { useData } from '../hooks/useData';
import { Layers, Puzzle, CheckCircle, Edit3, Sparkles, Globe2, Share2, Smartphone, LayoutDashboard, Zap } from 'lucide-react';

const BentoFeatures: React.FC = () => {
  const data = useData();
  const d = data.bentoFeatures;

  return (
    <section id="features" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">{d.sectionLabel}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {d.sectionTitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            {d.sectionSubtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(160px,auto)]">

          {/* Tile 1: Game Modes - Shows "Choose Activity" screen (Image 4) */}
          <div className="bento-card col-span-1 md:col-span-2 lg:col-span-2 bg-slate-50 rounded-3xl p-6 border border-slate-100 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="mb-4 bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{d.tiles.learnYourWay.title}</h3>
              <p className="text-slate-600 text-sm mb-6 max-w-sm">{d.tiles.learnYourWay.description}</p>
              
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <div className="bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Layers size={20}/></div>
                  <span className="font-semibold text-slate-700">{d.tiles.learnYourWay.modes[0]}</span>
                </div>
                <div className="bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Puzzle size={20}/></div>
                  <span className="font-semibold text-slate-700">{d.tiles.learnYourWay.modes[1]}</span>
                </div>
                <div className="bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg text-green-600"><CheckCircle size={20}/></div>
                  <span className="font-semibold text-slate-700">{d.tiles.learnYourWay.modes[2]}</span>
                </div>
                <div className="bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><Edit3 size={20}/></div>
                  <span className="font-semibold text-slate-700">{d.tiles.learnYourWay.modes[3]}</span>
                </div>
              </div>
            </div>
            
        
          </div>

          {/* Tile 2: AI Intelligence - Shows AI Results (Image 3) */}
          <div className="bento-card col-span-1 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-6 text-white relative overflow-hidden flex flex-col">
            <div className="relative z-10">
               <div className="mb-4 bg-white/20 w-12 h-12 rounded-full flex items-center justify-center text-yellow-300">
                 <Sparkles size={24} />
               </div>
               <h3 className="text-xl font-bold mb-2">{d.tiles.aiPowered.title}</h3>
               <p className="text-indigo-100 text-sm mb-4">{d.tiles.aiPowered.description}</p>
            </div>
            
            {/* Screenshot Snippet: AI Generation */}
            <div className="mt-auto relative w-full h-32 bg-slate-900 rounded-t-xl overflow-hidden border-t border-l border-r border-slate-600 shadow-xl translate-y-2">
               <img
                  src={d.tiles.aiPowered.image.src}
                  alt={d.tiles.aiPowered.image.alt}
                  className="w-full h-auto object-cover object-top"
               />
            </div>
          </div>

          {/* Tile 3: 40+ Languages */}
          <div className="bento-card col-span-1 bg-slate-50 rounded-3xl p-6 border border-slate-100 relative overflow-hidden">
             <div className="mb-4 bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center text-emerald-600">
               <Globe2 size={24} />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-2">{d.tiles.languages.title}</h3>
             <p className="text-slate-600 text-sm mb-4">{d.tiles.languages.description}</p>

             <div className="text-2xl leading-relaxed opacity-80">
               {d.tiles.languages.flags.split('\n').map((line: string, i: number) => (
                 <span key={i}>{line}{i < d.tiles.languages.flags.split('\n').length - 1 && <br/>}</span>
               ))}
             </div>
          </div>

          {/* Tile 4: Native iOS */}
          <div className="bento-card col-span-1 bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-center">
            <div className="relative z-10">
              <div className="mb-4 bg-slate-800 w-12 h-12 rounded-full flex items-center justify-center text-white">
                 <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{d.tiles.nativeIos.title}</h3>
              <p className="text-slate-400 text-sm">{d.tiles.nativeIos.description}</p>
            </div>
          </div>

          {/* Tile 5: Share & Discover */}
          <div className="bento-card col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start gap-6">
             <div className="flex-1">
               <div className="mb-4 bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center text-pink-600">
                 <Share2 size={24}/>
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">{d.tiles.shareDiscover.title}</h3>
               <p className="text-slate-600 text-sm mb-4">{d.tiles.shareDiscover.description}</p>
             </div>
             <div className="flex-1 w-full bg-slate-50 rounded-xl p-4 border border-slate-100 border-dashed">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>{d.tiles.shareDiscover.recentShares}</span>
                  <span>{d.tiles.shareDiscover.viewAll}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 bg-white p-2 rounded-lg shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">FR</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-800 text-sm truncate">{d.tiles.shareDiscover.shares[0].name}</p>
                      <p className="text-xs text-slate-500">{d.tiles.shareDiscover.shares[0].wordCount}</p>
                    </div>
                    <Zap size={14} className="text-yellow-500" />
                  </div>
                  <div className="flex items-center gap-3 bg-white p-2 rounded-lg shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-[10px] font-bold text-red-600">ES</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-800 text-sm truncate">{d.tiles.shareDiscover.shares[1].name}</p>
                      <p className="text-xs text-slate-500">{d.tiles.shareDiscover.shares[1].wordCount}</p>
                    </div>
                    <Zap size={14} className="text-yellow-500" />
                  </div>
                </div>
             </div>
          </div>

          {/* Tile 6: Sync */}
          <div className="bento-card col-span-1 bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl p-6 text-white flex flex-col justify-center">
             <div className="mb-4 bg-white/20 w-12 h-12 rounded-full flex items-center justify-center">
               <Globe2 size={24} />
             </div>
             <h3 className="text-xl font-bold mb-2">{d.tiles.seamlessSync.title}</h3>
             <p className="text-white/90 text-sm">{d.tiles.seamlessSync.description}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;