import React from 'react';
import { CategoryTotals } from '../types';

interface SummaryPanelProps {
  totals: CategoryTotals;
}

export const SummaryPanel: React.FC<SummaryPanelProps> = ({ totals }) => {
  const finalProduction = totals.Misturado * 256;

  return (
    <div className="mt-12 border-t-4 border-gray-300 pt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Resumo da Produção</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Orange Total */}
        <div className="p-6 rounded-lg bg-orange-100 border-2 border-orange-300 shadow-md">
          <h3 className="text-lg font-semibold text-orange-900 mb-2">Total Orange</h3>
          <p className="text-4xl font-bold text-orange-600">{totals.Orange.toFixed(1)}</p>
          <p className="text-sm text-orange-800 mt-2">tbs (Produção Líquida)</p>
        </div>

        {/* Clarificado Total */}
        <div className="p-6 rounded-lg bg-yellow-50 border-2 border-yellow-300 shadow-md">
          <h3 className="text-lg font-semibold text-yellow-900 mb-2">Total Clarificado</h3>
          <p className="text-4xl font-bold text-yellow-600">{totals.Clarificado.toFixed(1)}</p>
          <p className="text-sm text-yellow-800 mt-2">tbs (Produção Líquida)</p>
        </div>

        {/* Misturado Total */}
        <div className="p-6 rounded-lg bg-orange-700 border-2 border-orange-900 shadow-md">
          <h3 className="text-lg font-semibold text-white mb-2">Total Misturado</h3>
          <p className="text-4xl font-bold text-orange-200">{totals.Misturado.toFixed(1)}</p>
          <p className="text-sm text-orange-100 mt-2">tbs (Produção Líquida)</p>
        </div>
      </div>

      {/* Final Production Highlight */}
      <div className="p-8 rounded-xl bg-gradient-to-r from-green-400 to-green-500 shadow-2xl border-4 border-green-600">
        <h2 className="text-2xl font-bold text-white mb-2">Produção Final</h2>
        <p className="text-sm text-green-50 mb-4">Misturado × 256 (Conversão para unidades finais)</p>
        <div className="text-center">
          <p className="text-7xl font-bold text-white drop-shadow-lg">{finalProduction.toLocaleString('pt-BR')}</p>
          <p className="text-lg text-green-50 mt-4 font-semibold">Unidades de Produção</p>
        </div>
      </div>
    </div>
  );
};
