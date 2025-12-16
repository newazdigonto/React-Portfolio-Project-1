import React from 'react';
import { SOCIAL_LINKS, OWNER_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold text-white tracking-tighter">
              Newaz<span className="text-primary-500">.</span>
            </a>
            <p className="mt-2 text-slate-400 text-sm">
              Empowering businesses with modern web solutions and robust IT strategies.
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
             <ul className="flex justify-center space-x-6">
                <li><a href="#home" className="hover:text-primary-400 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-primary-400 transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-primary-400 transition-colors">Work</a></li>
             </ul>
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end space-x-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-primary-600 text-slate-400 hover:text-white transition-all duration-300"
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {OWNER_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;