import React from 'react';
import { useData } from '../hooks/useData';
import { Zap, Globe, Lock, Code } from 'lucide-react';

const WhyUs: React.FC = () => {
  const data = useData();
  const d = data.whyUs;

  return (
    <section className="py-12 md:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">{d.sectionTitle}</h2>
            <p className="text-slate-400 text-lg mb-8">
              {d.sectionSubtitle}
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-slate-800 p-3 rounded-xl h-fit">
                  <Zap className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{d.points[0].title}</h3>
                  <p className="text-slate-400">{d.points[0].description}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-slate-800 p-3 rounded-xl h-fit">
                  <Globe className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{d.points[1].title}</h3>
                  <p className="text-slate-400">{d.points[1].description}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-slate-800 p-3 rounded-xl h-fit">
                  <Lock className="text-green-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{d.points[2].title}</h3>
                  <p className="text-slate-400">{d.points[2].description}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-slate-800 p-3 rounded-xl h-fit">
                  <Code className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{d.points[3].title}</h3>
                  <p className="text-slate-400">{d.points[3].description}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
             <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl opacity-20 blur-2xl"></div>
             <div className="relative rounded-[2rem] border-[6px] md:border-8 border-slate-800 bg-slate-900 overflow-hidden shadow-2xl max-w-[240px] md:max-w-[320px]">
               <img
                 src={d.image.src}
                 alt={d.image.alt}
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