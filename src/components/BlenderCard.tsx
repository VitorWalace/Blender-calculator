import React from 'react';
import { BlenderData, JuiceType, getJuiceColor, getJuiceBadgeColor } from '../types';

interface BlenderCardProps {
  blender: BlenderData;
  onTypeChange: (type: JuiceType) => void;
  onInitialVolumeChange: (volume: number) => void;
  onInflowChange: (volume: number) => void;
  onOutflowChange: (volume: number) => void;
  onFinalVolumeChange: (volume: number) => void;
}

export const BlenderCard: React.FC<BlenderCardProps> = ({
  blender,
  onTypeChange,
  onInitialVolumeChange,
  onInflowChange,
  onOutflowChange,
  onFinalVolumeChange,
}) => {
  const netProduction = blender.finalVolume + blender.outflow - blender.initialVolume - blender.inflow;

  return (
    <div className={`p-6 rounded-lg border-2 shadow-md transition-all ${getJuiceColor(blender.type)}`}>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Liquidificador {blender.id}</h3>
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getJuiceBadgeColor(blender.type)}`}>
          {blender.type}
        </span>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-semibold mb-1">Tipo de Suco</label>
          <select
            value={blender.type}
            onChange={(e) => onTypeChange(e.target.value as JuiceType)}
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-white"
          >
            <option value="Orange">Orange</option>
            <option value="Clarificado">Clarificado</option>
            <option value="Misturado">Misturado</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-semibold mb-1">Volume Inicial (tbs)</label>
            <input
              type="number"
              value={blender.initialVolume}
              onChange={(e) => onInitialVolumeChange(Number(e.target.value))}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              min="0"
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Entradas (tbs)</label>
            <input
              type="number"
              value={blender.inflow}
              onChange={(e) => onInflowChange(Number(e.target.value))}
              className="w-full px-3 py-2 border-2 border-green-300 rounded-md focus:outline-none focus:border-green-600 bg-green-50"
              min="0"
              step="0.1"
              placeholder="Recebido"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Saídas / Envase (tbs)</label>
            <input
              type="number"
              value={blender.outflow}
              onChange={(e) => onOutflowChange(Number(e.target.value))}
              className="w-full px-3 py-2 border-2 border-red-300 rounded-md focus:outline-none focus:border-red-600 bg-red-50"
              min="0"
              step="0.1"
              placeholder="Retirado"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Volume Final (tbs)</label>
            <input
              type="number"
              value={blender.finalVolume}
              onChange={(e) => onFinalVolumeChange(Number(e.target.value))}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              min="0"
              step="0.1"
            />
          </div>
        </div>

        <div className="bg-white bg-opacity-50 p-3 rounded-md border-l-4 border-blue-500 mt-4">
          <p className="text-sm font-semibold text-gray-700">Produção Líquida</p>
          <p className={`text-2xl font-bold ${netProduction >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
            {netProduction.toFixed(1)} tbs
          </p>
          <p className="text-xs text-gray-500 mt-1">
            ({blender.finalVolume.toFixed(1)} + {blender.outflow.toFixed(1)}) - ({blender.initialVolume.toFixed(1)} + {blender.inflow.toFixed(1)})
          </p>
        </div>
      </div>
    </div>
  );
};
