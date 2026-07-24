import React from 'react';
import { useData } from '../hooks/useData';
import { Globe, ArrowRight } from 'lucide-react';
import AppStoreBadge from './AppStoreBadge';

const DownloadCTA: React.FC = () => {
  const data = useData();
  const d = data.downloadCTA;

  return (
    <section id="download" className="py-20 md:py-28 bg-paper">
       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-accent rounded-card p-8 md:p-16 text-center text-white relative overflow-hidden">
           <div className="relative z-10">
             <h2 className="font-display text-3xl md:text-5xl tracking-[-0.02em] mb-6">{d.title}</h2>
             <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto">
               {d.subtitle}
             </p>

             <div className="flex flex-col sm:flex-row justify-center gap-4">
              <AppStoreBadge url={d.appStoreUrl} height={54} />
              <a
                href={d.webAppUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ink text-white rounded-full font-bold hover:bg-ink/85 transition-colors group"
              >
                <Globe size={20} />
                {d.webButton}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <p className="mt-8 text-sm text-white/70">
              {d.disclaimer}
            </p>
           </div>
         </div>
       </div>
    </section>
  );
};

export default DownloadCTA;