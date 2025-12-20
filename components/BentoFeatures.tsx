import React from 'react';
import { Layers, Puzzle, CheckCircle, Edit3, Sparkles, Globe2, Share2, Smartphone, LayoutDashboard, Zap } from 'lucide-react';

const BentoFeatures: React.FC = () => {
  return (
    <section id="features" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Features & Highlights</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to master a language
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            From smart AI generation to engaging game modes, Exquizite is packed with tools to help you learn faster.
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
              <h3 className="text-xl font-bold text-slate-900 mb-2">Learn Your Way</h3>
              <p className="text-slate-600 text-sm mb-6 max-w-sm">Choose from 4 interactive learning modes that match your unique learning style.</p>
              
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <div className="bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Layers size={20}/></div>
                  <span className="font-semibold text-slate-700">Flashcards</span>
                </div>
                <div className="bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Puzzle size={20}/></div>
                  <span className="font-semibold text-slate-700">Match Game</span>
                </div>
                <div className="bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg text-green-600"><CheckCircle size={20}/></div>
                  <span className="font-semibold text-slate-700">Quiz Mode</span>
                </div>
                <div className="bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><Edit3 size={20}/></div>
                  <span className="font-semibold text-slate-700">Fill Blanks</span>
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
               <h3 className="text-xl font-bold mb-2">AI-Powered</h3>
               <p className="text-indigo-100 text-sm mb-4">Generate word pairs instantly and get smart hints.</p>
            </div>
            
            {/* Screenshot Snippet: AI Generation */}
            <div className="mt-auto relative w-full h-32 bg-slate-900 rounded-t-xl overflow-hidden border-t border-l border-r border-slate-600 shadow-xl translate-y-2">
               <img
                  src="/images/ai-generation.PNG"
                  alt="AI Generated Words"
                  className="w-full h-auto object-cover object-top"
               />
            </div>
          </div>

          {/* Tile 3: 40+ Languages */}
          <div className="bento-card col-span-1 bg-slate-50 rounded-3xl p-6 border border-slate-100 relative">
             <div className="mb-4 bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center text-emerald-600">
               <Globe2 size={24} />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-2">40+ Languages</h3>
             <p className="text-slate-600 text-sm">Full interface localization and native language support.</p>
          </div>

          {/* Tile 4: Native iOS */}
          <div className="bento-card col-span-1 bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-center">
            <div className="relative z-10">
              <div className="mb-4 bg-slate-800 w-12 h-12 rounded-full flex items-center justify-center text-white">
                 <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Native iOS</h3>
              <p className="text-slate-400 text-sm">Get and app to learn on the go.</p>
            </div>
          </div>

          {/* Tile 5: Share & Discover */}
          <div className="bento-card col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start gap-6">
             <div className="flex-1">
               <div className="mb-4 bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center text-pink-600">
                 <Share2 size={24}/>
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Share & Discover</h3>
               <p className="text-slate-600 text-sm mb-4">Create shareable links to your word sets or copy community sets to your collection. Track views and engagement.</p>
             </div>
             <div className="flex-1 w-full bg-slate-50 rounded-xl p-4 border border-slate-100 border-dashed">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Recent Shares</span>
                  <span>View All</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 bg-white p-2 rounded-lg shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">FR</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-800 text-sm truncate">French Basics</p>
                      <p className="text-xs text-slate-500">24 words</p>
                    </div>
                    <Zap size={14} className="text-yellow-500" />
                  </div>
                  <div className="flex items-center gap-3 bg-white p-2 rounded-lg shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-[10px] font-bold text-red-600">ES</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-800 text-sm truncate">Spanish Kitchen</p>
                      <p className="text-xs text-slate-500">12 words</p>
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
             <h3 className="text-xl font-bold mb-2">Seamless Sync</h3>
             <p className="text-white/90 text-sm">Start on iPhone, continue on Web. Progress follows you.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;