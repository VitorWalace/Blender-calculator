import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { BlenderCard } from './BlenderCard';
import { SummaryPanel } from './SummaryPanel';
export const App = () => {
    const [blenders, setBlenders] = useState(Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        type: 'Orange',
        initialVolume: 0,
        inflow: 0,
        outflow: 0,
        finalVolume: 0,
    })));
    const handleTypeChange = (id, type) => {
        setBlenders(blenders.map((b) => (b.id === id ? { ...b, type } : b)));
    };
    const handleInitialVolumeChange = (id, volume) => {
        setBlenders(blenders.map((b) => (b.id === id ? { ...b, initialVolume: volume } : b)));
    };
    const handleInflowChange = (id, volume) => {
        setBlenders(blenders.map((b) => (b.id === id ? { ...b, inflow: volume } : b)));
    };
    const handleOutflowChange = (id, volume) => {
        setBlenders(blenders.map((b) => (b.id === id ? { ...b, outflow: volume } : b)));
    };
    const handleFinalVolumeChange = (id, volume) => {
        setBlenders(blenders.map((b) => (b.id === id ? { ...b, finalVolume: volume } : b)));
    };
    const calculateTotals = () => {
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
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h1", { className: "text-4xl font-bold text-gray-800 mb-2", children: "\uD83E\uDDC3 Calculadora de Produ\u00E7\u00E3o de Suco" }), _jsx("p", { className: "text-gray-600 text-lg", children: "Gerencie 8 liquidificadores e acompanhe a produ\u00E7\u00E3o di\u00E1ria (em tbs)" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: blenders.map((blender) => (_jsx(BlenderCard, { blender: blender, onTypeChange: (type) => handleTypeChange(blender.id, type), onInitialVolumeChange: (volume) => handleInitialVolumeChange(blender.id, volume), onInflowChange: (volume) => handleInflowChange(blender.id, volume), onOutflowChange: (volume) => handleOutflowChange(blender.id, volume), onFinalVolumeChange: (volume) => handleFinalVolumeChange(blender.id, volume) }, blender.id))) }), _jsx(SummaryPanel, { totals: totals }), _jsxs("div", { className: "mt-12 text-center text-gray-600 text-sm", children: [_jsx("p", { children: "\u00A9 2024 Calculadora de Produ\u00E7\u00E3o de Suco" }), _jsx("p", { className: "mt-1 text-xs", children: "Unidade de Medida: tbs (tablespoons)" })] })] }) }));
};
