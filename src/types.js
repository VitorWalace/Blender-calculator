export const getJuiceColor = (type) => {
    const colors = {
        Orange: 'bg-orange-100 border-orange-300 text-orange-900',
        Clarificado: 'bg-yellow-50 border-yellow-300 text-yellow-900',
        Misturado: 'bg-orange-700 border-orange-900 text-white',
    };
    return colors[type];
};
export const getJuiceBadgeColor = (type) => {
    const colors = {
        Orange: 'bg-orange-500 text-white',
        Clarificado: 'bg-yellow-300 text-gray-900',
        Misturado: 'bg-orange-900 text-white',
    };
    return colors[type];
};
