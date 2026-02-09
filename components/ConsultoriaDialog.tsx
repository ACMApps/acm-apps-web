
import React, { useState } from 'react';
import { analyzeBusinessProcess } from '../services/geminiService';

interface ConsultoriaDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultoriaDialog: React.FC<ConsultoriaDialogProps> = ({ isOpen, onClose }) => {
  const [description, setDescription] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;
    setLoading(true);
    setResult('');
    const analysis = await analyzeBusinessProcess(description);
    setResult(analysis);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-[#0A2558] text-white">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-accent">psychology</span>
            <h3 className="font-bold text-lg">ConsultorIA Estratégica</h3>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-8 max-h-[70vh] overflow-y-auto">
          {!result ? (
            <form onSubmit={handleAnalyze} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Describe un proceso de tu negocio que quieras optimizar:
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full h-40 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-4 text-sm focus:ring-accent focus:border-accent"
                  placeholder="Ej: Gestionamos pedidos por WhatsApp y el stock se actualiza manualmente al final del día..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#0A2558] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Analizando con ACM IA...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-sm">rocket_launch</span>
                    Iniciar Análisis Técnico
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="prose dark:prose-invert prose-sm max-w-none">
              <div className="p-4 bg-accent/10 border border-accent/20 rounded-xl mb-6 flex items-start gap-3">
                <span className="material-symbols-outlined text-accent">info</span>
                <p className="text-xs text-slate-600 dark:text-slate-300 m-0">
                  Este es un pre-análisis automatizado basado en el Marco Mental de ACM. Para una implementación real, contacte con nuestro equipo.
                </p>
              </div>
              <div className="whitespace-pre-wrap font-sans text-slate-700 dark:text-slate-300 leading-relaxed">
                {result}
              </div>
              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => setResult('')}
                  className="px-6 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Nuevo Análisis
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-[#0A2558] text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultoriaDialog;
