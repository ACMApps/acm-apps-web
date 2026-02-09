
import React from 'react';

const Consultoria: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A2558] text-white" id="consultoria">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[12px] font-mono font-bold text-accent uppercase tracking-[0.4em] mb-4">ConsultorIA</h2>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">El Marco Mental de ACM</h3>
            
            <p className="text-slate-200 text-xl font-medium mb-8 leading-relaxed italic border-l-2 border-accent/40 pl-6">
              "Nuestra consultoría basada en IA no es un servicio adicional: es el marco desde el que diseñamos cada sistema".
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-accent">troubleshoot</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Análisis de Problemas</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Identificación del cuello de botella real antes de proponer cualquier arquitectura técnica.</p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-accent">psychology_alt</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Decisión Estratégica de IA</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Implementación de inteligencia artificial únicamente donde genera una ventaja competitiva medible.</p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-accent">rule_settings</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Lógica + Automatización</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Combinamos sus reglas de negocio con flujos automáticos para eliminar la fricción operativa.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="h-32 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 group hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-3xl opacity-50 group-hover:opacity-100 transition-opacity">database</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">Input Data</span>
                </div>
                <div className="h-32 bg-accent/10 border border-accent/20 rounded-xl flex flex-col items-center justify-center gap-2 group hover:bg-accent/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-accent">smart_toy</span>
                  <span className="text-[10px] font-mono text-accent uppercase tracking-tighter">IA Framework</span>
                </div>
                <div className="h-32 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 col-span-2 group hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-3xl opacity-50 group-hover:opacity-100 transition-opacity">schema</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">Core Business Logic</span>
                </div>
              </div>
            </div>
            {/* Visual glow effect */}
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full -z-10 opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultoria;
