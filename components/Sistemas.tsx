
import React from 'react';
import { SYSTEMS } from '../constants';

const Sistemas: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950" id="sistemas">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Sistemas en Operación</h2>
            <p className="text-slate-500">Infraestructuras vivas desarrolladas y operadas por ACM Apps</p>
          </div>
          <div className="h-[1px] flex-grow mx-8 bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
          <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">Sistemas_v2.4</span>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {SYSTEMS.map((system) => (
            <div key={system.id} className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0A2558] transition-all hover:shadow-xl hover:shadow-[#0A2558]/5">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-primary dark:text-accent">
                  <span className="material-symbols-outlined text-3xl">{system.icon}</span>
                </div>
                <span className="px-2 py-1 rounded bg-accent/10 text-accent text-[10px] font-bold font-mono uppercase tracking-tighter">
                  {system.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{system.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed h-20 overflow-hidden">
                {system.description}
              </p>
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{system.category}</span>
                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary dark:group-hover:text-accent transition-colors">arrow_right_alt</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sistemas;
