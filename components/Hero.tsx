
import React from 'react';

interface HeroProps {
  onOpenConsultoria: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenConsultoria }) => {
  return (
    <section className="relative py-20 lg:py-32 grid-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-[11px] font-mono font-bold text-primary dark:text-accent uppercase tracking-widest">
              Sistemas digitales diseñados desde la operativa real
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-primary dark:text-white leading-[1.1] mb-8">
            Diseñamos y operamos sistemas digitales que resuelven <span className="text-slate-400">procesos reales</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Consultoría tecnológica especializada en la creación de infraestructuras escalables y automatización de procesos para PYMES e instituciones que buscan soberanía digital y eficiencia operativa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#sistemas" 
              className="px-8 py-4 bg-primary text-white text-base font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-primary/20"
            >
              Ver sistemas <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <button 
              onClick={onOpenConsultoria}
              className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-base font-semibold rounded-lg flex items-center justify-center gap-2 hover:border-accent transition-all"
            >
              Consultoría basada en IA
            </button>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none select-none">
        <span className="material-symbols-outlined text-[400px]">settings_input_component</span>
      </div>
    </section>
  );
};

export default Hero;
