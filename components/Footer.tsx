
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10" id="contacto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-[#0A2558] rounded flex items-center justify-center">
                <span className="text-white font-bold text-[9px]">ACM</span>
              </div>
              <span className="font-bold tracking-tight text-[#0A2558] dark:text-white text-base uppercase">ACM Apps</span>
            </div>
            
            <h3 className="text-3xl font-bold mb-6">¿Hay cosas de tu operativa que ya no te funcionan?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md text-lg">
              Hablemos. Antes de construir nada, nos sentamos a analizar por qué los procesos actuales se han quedado pequeños y cómo un sistema diseñado con criterio puede devolverte el control.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-[#0A2558] dark:text-accent">mail</span>
                <span className="text-sm font-medium">contacto@acmapps.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-[#0A2558] dark:text-accent">location_on</span>
                <span className="text-sm font-medium">Málaga, España</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold mb-6 text-slate-800 dark:text-white">Iniciar conversación técnica</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-lg text-sm px-4 py-3 focus:ring-accent focus:border-accent w-full" 
                  placeholder="Nombre" 
                  type="text"
                />
                <input 
                  className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-lg text-sm px-4 py-3 focus:ring-accent focus:border-accent w-full" 
                  placeholder="Email" 
                  type="email"
                />
              </div>
              <textarea 
                className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-lg text-sm px-4 py-3 focus:ring-accent focus:border-accent" 
                placeholder="Cuéntenos sobre su proceso u operativa..." 
                rows={4}
              ></textarea>
              <button className="w-full py-4 bg-[#0A2558] text-white font-bold rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-primary/10">
                Solicitar Análisis Previo
              </button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-10 border-t border-slate-200 dark:border-slate-800">
          <p className="text-xs text-slate-400 font-mono uppercase tracking-widest">
            © 2024 ACM Apps — Ingeniería de Sistemas en Operación
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-slate-500 hover:text-primary transition-colors uppercase tracking-widest font-bold">Aviso Legal</a>
            <a href="#" className="text-xs text-slate-500 hover:text-primary transition-colors uppercase tracking-widest font-bold">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
