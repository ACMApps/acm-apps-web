
import React from 'react';
import { INSTITUTIONAL_PROJECTS } from '../constants';

const Institutional: React.FC = () => {
  return (
    <section className="bg-slate-900 py-24 border-y border-white/5" id="institucional">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-white mb-4">Experiencia Institucional</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Escalabilidad y fiabilidad al servicio de la administración pública y proyectos de digitalización territorial.
            </p>
          </div>
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-8">
            {INSTITUTIONAL_PROJECTS.map((project, idx) => (
              <div key={idx} className="p-10 rounded-xl bg-white/5 border border-white/10 group hover:bg-white/[0.07] transition-all cursor-default">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-slate-300 mb-6 text-sm leading-relaxed">{project.description}</p>
                <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest">
                  <span>{project.tag}</span>
                  <span className="material-symbols-outlined text-sm">verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institutional;
