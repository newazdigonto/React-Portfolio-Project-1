import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { OWNER_NAME, TAGLINE, HERO_DESCRIPTION } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-primary-50 to-white">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-800 text-sm font-semibold mb-6 tracking-wide uppercase">
              Available for Projects
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Hello, I'm <span className="text-primary-600">{OWNER_NAME}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 font-medium mb-6">
              {TAGLINE}
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {HERO_DESCRIPTION}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/40"
              >
                Start a Project
                <ArrowRight className="ml-2 -mr-1" size={20} />
              </a>
              <a 
                href="#portfolio" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-base font-bold rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Hero Image / Visual */}
          <div className="relative lg:h-full flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-md lg:max-w-full aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border-8 border-white/50 backdrop-blur-sm">
                <img 
                    src="https://picsum.photos/800/800" 
                    alt="Newaz Ahmed working" 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
                {/* Floating Cards Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border-l-4 border-primary-500">
                    <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                            <ArrowRight size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-900">Digital Solutions</p>
                            <p className="text-xs text-slate-500">Helping businesses scale up</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#services" className="text-slate-400 hover:text-primary-500 transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;