import React, { useState } from 'react';
import { BlenderData, CategoryTotals, JuiceType } from '../types';
import { BlenderCard } from './BlenderCard';
import { SummaryPanel } from './SummaryPanel';

export const App: React.FC = () => {
  const [blenders, setBlenders] = useState<BlenderData[]>(
    Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      type: 'Orange' as JuiceType,
      initialVolume: 0,
      inflow: 0,
      outflow: 0,
      finalVolume: 0,
    }))
  );

  const handleTypeChange = (id: number, type: JuiceType) => {
    setBlenders(blenders.map((b) => (b.id === id ? { ...b, type } : b)));
  };

  const handleInitialVolumeChange = (id: number, volume: number) => {
    setBlenders(blenders.map((b) => (b.id === id ? { ...b, initialVolume: volume } : b)));
  };

  const handleInflowChange = (id: number, volume: number) => {
    setBlenders(blenders.map((b) => (b.id === id ? { ...b, inflow: volume } : b)));
  };

  const handleOutflowChange = (id: number, volume: number) => {
    setBlenders(blenders.map((b) => (b.id === id ? { ...b, outflow: volume } : b)));
  };

  const handleFinalVolumeChange = (id: number, volume: number) => {
    setBlenders(blenders.map((b) => (b.id === id ? { ...b, finalVolume: volume } : b)));
  };

  const calculateTotals = (): CategoryTotals => {
    return {
      Orange: blenders.reduce((sum, b) => {
        if (b.type === 'Orange') {
          const netProduction = b.finalVolume + b.outflow - b.initialVolume - b.inflow;
          return sum + netProduction;
        }
        return sum;
      }, 0),
      Clarificado: blenders.reduce((sum, b) => {
        if (b.type === 'Clarificado') {
          const netProduction = b.finalVolume + b.outflow - b.initialVolume - b.inflow;
          return sum + netProduction;
        }
        return sum;
      }, 0),
      Misturado: blenders.reduce((sum, b) => {
        if (b.type === 'Misturado') {
          const netProduction = b.finalVolume + b.outflow - b.initialVolume - b.inflow;
          return sum + netProduction;
        }
        return sum;
      }, 0),
    };
  };

  const totals = calculateTotals();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🧃 Calculadora de Produção de Suco</h1>
          <p className="text-gray-600 text-lg">Gerencie 8 liquidificadores e acompanhe a produção diária (em tbs)</p>
        </div>

        {/* Blenders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {blenders.map((blender) => (
            <BlenderCard
              key={blender.id}
              blender={blender}
              onTypeChange={(type) => handleTypeChange(blender.id, type)}
              onInitialVolumeChange={(volume) => handleInitialVolumeChange(blender.id, volume)}
              onInflowChange={(volume) => handleInflowChange(blender.id, volume)}
              onOutflowChange={(volume) => handleOutflowChange(blender.id, volume)}
              onFinalVolumeChange={(volume) => handleFinalVolumeChange(blender.id, volume)}
            />
          ))}
        </div>

        {/* Summary Panel */}
        <SummaryPanel totals={totals} />

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>© 2024 Calculadora de Produção de Suco</p>
          <p className="mt-1 text-xs">Unidade de Medida: tbs (tablespoons)</p>
        </div>
      </div>
    </div>
  );
};
