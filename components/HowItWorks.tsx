import React from 'react';
import { PlusCircle, Gamepad2, TrendingUp, Users } from 'lucide-react';

const steps = [
  {
    icon: PlusCircle,
    title: "1. Create Sets",
    desc: "Build vocabulary lists or use AI to generate words for any topic instantly."
  },
  {
    icon: Gamepad2,
    title: "2. Choose Game",
    desc: "Pick from 4 engaging game modes that make learning feel like play."
  },
  {
    icon: TrendingUp,
    title: "3. Track Progress",
    desc: "Monitor your streak, mastery levels, and history on your dashboard."
  },
  {
    icon: Users,
    title: "4. Share & Learn",
    desc: "Share your best sets with friends or discover community content."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-xl text-slate-600">Start your learning journey in four simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100 h-full">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform">
                  <step.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-slate-300 border-dashed z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;