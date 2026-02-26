import React from 'react';
import { useData } from '../hooks/useData';
import { Globe, ArrowRight } from 'lucide-react';
import AppStoreBadge from './AppStoreBadge';

const DownloadCTA: React.FC = () => {
  const data = useData();
  const d = data.downloadCTA;

  return (
    <section id="download" className="py-24 bg-white">
       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-primary-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
           
           {/* Decorative circles */}
           <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary-500 opacity-50 blur-3xl"></div>
           <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-600 opacity-50 blur-3xl"></div>
           
           <div className="relative z-10">
             <h2 className="text-3xl md:text-5xl font-extrabold mb-6">{d.title}</h2>
             <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
               {d.subtitle}
             </p>
             
             <div className="flex flex-col sm:flex-row justify-center gap-4">
              <AppStoreBadge url={d.appStoreUrl} height={56} />
              <a
                href={d.webAppUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-700 text-white border border-primary-500 rounded-xl font-bold hover:bg-primary-800 transition-transform hover:-translate-y-1 shadow-lg group"
              >
                <Globe size={24} />
                {d.webButton}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <p className="mt-8 text-sm text-primary-200 opacity-80">
              {d.disclaimer}
            </p>
           </div>
         </div>
       </div>
    </section>
  );
};

export default DownloadCTA;