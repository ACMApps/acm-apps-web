
import React from 'react';

const MobileNav: React.FC = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-950/95 ios-blur border-t border-slate-200 dark:border-slate-800 px-6 py-3 flex justify-between items-center z-50">
      <a href="#" className="flex flex-col items-center text-[#0A2558] dark:text-accent">
        <span className="material-symbols-outlined text-[24px]">home</span>
        <span className="text-[10px] mt-1 font-bold">Inicio</span>
      </a>
      <a href="#sistemas" className="flex flex-col items-center text-slate-400">
        <span className="material-symbols-outlined text-[24px]">layers</span>
        <span className="text-[10px] mt-1">Sistemas</span>
      </a>
      <a href="#consultoria" className="flex flex-col items-center text-slate-400">
        <span className="material-symbols-outlined text-[24px]">psychology</span>
        <span className="text-[10px] mt-1">IA</span>
      </a>
      <a href="#contacto" className="flex flex-col items-center text-slate-400">
        <span className="material-symbols-outlined text-[24px]">mail</span>
        <span className="text-[10px] mt-1">Contacto</span>
      </a>
    </nav>
  );
};

export default MobileNav;
