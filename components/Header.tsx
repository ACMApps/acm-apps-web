
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 ios-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#0A2558] rounded flex items-center justify-center">
            <span className="text-white font-bold text-[10px]">ACM</span>
          </div>
          <span className="font-bold tracking-tight text-[#0A2558] dark:text-white text-lg uppercase">ACM Apps</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Inicio</a>
          <a href="#sistemas" className="group">
            <span className="text-sm font-medium block group-hover:text-accent transition-colors">Sistemas</span>
            <span className="text-[10px] text-slate-400 block -mt-1 font-normal">Operativa real</span>
          </a>
          <a href="#consultoria" className="group">
            <span className="text-sm font-medium block group-hover:text-accent transition-colors">ConsultorIA</span>
            <span className="text-[10px] text-slate-400 block -mt-1 font-normal">Estrategia IA</span>
          </a>
          <a href="#institucional" className="text-sm font-medium hover:text-accent transition-colors">Institucional</a>
          <a href="#contacto" className="px-5 py-2 bg-[#0A2558] text-white rounded text-sm font-semibold hover:bg-slate-800 transition-all ml-4">
            Contacto
          </a>
        </nav>

        <button className="md:hidden p-2 text-[#0A2558] dark:text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
