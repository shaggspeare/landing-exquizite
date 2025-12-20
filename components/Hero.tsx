import React from 'react';
import { Apple, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-40 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-[-1]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-16 lg:gap-20 items-center">

          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-8 border border-primary-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Now available on iOS and Web
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 font-display leading-tight">
              <span className="text-slate-900">Master Learning</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-violet-600">
                Through Smart Practice
              </span>
            </h1>

            <p className="max-w-2xl lg:max-w-none text-xl text-slate-600 mb-10 leading-relaxed font-light">
              Create custom word sets, play engaging games, and accelerate your language learning journey with AI-powered tools.
            </p>

            <div className="flex flex-col sm:flex-row lg:justify-start justify-center gap-4">
              <a
                href="https://apps.apple.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Apple size={24} />
                Download on App Store
              </a>
              <a
                href="https://web.app"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <Globe size={24} />
                Try Web App
              </a>
            </div>
          </div>

          {/* Right Side - 3 Stacked Screens */}
          <div className="relative mx-auto max-w-[1000px] h-[400px] md:h-[600px] flex justify-center items-start">

          {/* Quiz Screen (Back) */}
          <div className="absolute left-1/2 -translate-x-[100px] md:-translate-x-[140px] z-10 w-[200px] md:w-[280px] transition-transform hover:z-40 hover:scale-105 duration-300">
             <div className="rounded-[2.5rem] border-8 border-slate-900 overflow-hidden shadow-2xl bg-slate-900">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-24 bg-slate-900 rounded-b-xl z-20"></div>
                <img
                  src="/images/quiz.PNG"
                  alt="Exquizite App Quiz Mode"
                  className="w-full h-auto block"
                />
             </div>
          </div>

          {/* Left Screen (Front) */}
          <div className="absolute left-1/2 -translate-x-[160px] md:-translate-x-[280px] top-12 md:top-20 z-30 w-[200px] md:w-[280px] transition-transform hover:z-40 hover:scale-105 duration-300 -rotate-12">
             <div className="rounded-[2rem] border-[6px] border-slate-900 overflow-hidden shadow-2xl bg-slate-900">
                <img
                  src="/images/learning-modes.PNG"
                  alt="Learning Modes Screen"
                  className="w-full h-auto block"
                />
             </div>
          </div>

          {/* Right Screen (Front) */}
          <div className="absolute left-1/2 translate-x-[-40px] md:translate-x-[0px] top-12 md:top-20 z-30 w-[200px] md:w-[280px] transition-transform hover:z-40 hover:scale-105 duration-300 rotate-12">
             <div className="rounded-[2rem] border-[6px] border-slate-900 overflow-hidden shadow-2xl bg-slate-900">
                <img
                  src="/images/my-sets.PNG"
                  alt="My Sets Screen"
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