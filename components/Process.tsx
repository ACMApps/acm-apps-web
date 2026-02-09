
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Cómo trabajamos con nuestros clientes</h2>
          <p className="text-lg text-primary dark:text-accent font-medium mb-4">Analizamos, diseñamos y acompañamos la evolución de cada sistema</p>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto">
            Huimos del desarrollo "llave en mano" que queda obsoleto al día siguiente. Nuestra diferencia radica en entender la lógica profunda de su negocio antes de escribir una sola línea de código.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="relative p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 group hover:border-accent transition-colors">
              <div className="text-5xl font-black text-slate-200/50 dark:text-slate-800 absolute top-4 right-4 z-0 select-none">
                {step.number}
              </div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-[#0A2558] dark:text-accent text-3xl mb-4">
                  {step.icon}
                </span>
                <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                <p className="text-[10px] font-mono text-slate-400 mb-3 uppercase tracking-wider">{step.subtitle}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
