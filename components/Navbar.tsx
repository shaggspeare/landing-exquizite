import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img src="/images/logo.png" alt="Exquizite Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">Exquizite</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Features</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">How it Works</a>
            <a href="#testimonials" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Stories</a>
            <a href="#pricing" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Pricing</a>
            <a 
              href="#download" 
              className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-full font-medium transition-colors text-sm"
            >
              Get App
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a 
              href="#features" 
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              How it Works
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Stories
            </a>
            <a 
              href="#pricing" 
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#download" 
              className="block px-3 py-3 mt-4 text-center text-base font-bold text-white bg-primary-600 hover:bg-primary-700 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Download App
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;