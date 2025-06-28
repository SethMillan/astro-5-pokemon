// LISTA DE COLORES SEGUN SU TIPO
export function getTypeColor(type: string) {
  const colors: { [key: string]: string } = {
    normal: 'bg-gray-500/50',
    fire: 'bg-red-500/50',
    water: 'bg-blue-500/50',
    electric: 'bg-yellow-500/50',
    grass: 'bg-green-500/50',
    ice: 'bg-cyan-500/50',
    fighting: 'bg-red-700/50',
    poison: 'bg-purple-500/50',
    ground: 'bg-yellow-700/50',
    flying: 'bg-indigo-500/50',
    psychic: 'bg-pink-500/50',
    bug: 'bg-lime-500/50',
    rock: 'bg-stone-500/50',
    ghost: 'bg-purple-700/50',
    dragon: 'bg-indigo-700/50',
    dark: 'bg-gray-800/50',
    steel: 'bg-gray-400/50',
    fairy: 'bg-pink-300/50',
  };
  return colors[type] || 'bg-gray-500/50';
}