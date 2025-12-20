import React from 'react';

const ScreenshotGallery: React.FC = () => {
  const screenshots = [
    { src: "/images/learning-modes.PNG", alt: "Learning Modes" },
    { src: "/images/match-mode.PNG", alt: "Match Game" },
    { src: "/images/quiz.PNG", alt: "Quiz Mode" },
    { src: "/images/fill-in-blank.PNG", alt: "Fill in the Blank" },
    { src: "/images/ai-generation.PNG", alt: "AI Word Generation" },
    { src: "/images/added-words.PNG", alt: "Added Words" },
    { src: "/images/my-sets.PNG", alt: "My Sets" },
  ];

  return (
    <section className="py-12 md:py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
         <h2 className="text-3xl font-extrabold text-slate-900">Experience the App</h2>
         <p className="mt-4 text-slate-600">Take a closer look at our interactive learning modes.</p>
      </div>
      
      <div className="relative w-full">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        <div className="flex overflow-x-auto gap-8 pb-8 px-8 no-scrollbar snap-x snap-mandatory">
          {screenshots.map((shot, idx) => (
            <div key={idx} className="flex-shrink-0 snap-center first:pl-20 last:pr-20">
               <div className="rounded-[2rem] border-[6px] md:border-8 border-slate-900 overflow-hidden shadow-2xl bg-slate-900 w-[220px] md:w-[280px]">
                 <img 
                    src={shot.src} 
                    alt={shot.alt} 
                    className="w-full h-auto"
                 />
               </div>
               <p className="text-center mt-6 font-semibold text-slate-700">{shot.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotGallery;