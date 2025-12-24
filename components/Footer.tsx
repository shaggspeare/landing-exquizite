import React from 'react';
import { Twitter, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img src="/images/logo.png" alt="Exquizite Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-lg text-slate-900">Exquizite</span>
            </div>
            <p className="text-sm text-slate-500 mb-6">
              Master languages through smart, interactive practice. Built for learners, by learners.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-slate-600"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-slate-600"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-slate-600"><Github size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#features" className="hover:text-primary-600">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-primary-600">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-primary-600">Pricing</a></li>
              <li><a href="#download" className="hover:text-primary-600">Download</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-primary-600">FAQ</a></li>
              <li><a href="#" className="hover:text-primary-600">Contact</a></li>
              <li><a href="#" className="hover:text-primary-600">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-primary-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-600">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© 2025 Exquizite. Master languages, your way.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;