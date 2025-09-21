import { Card } from './ui/Card';

export default function KidSelector({ kids, onSelect, selectedKid, onAddKid, onEditKid, onRemoveKid, maxKidsReached }) {
  return (
    <div className="flex justify-center gap-6 mb-8 flex-wrap">
      {kids.map((kid) => (
        <div key={kid.id} className="relative group">
          <button
            onClick={() => onSelect(kid)}
            className={`card-wrapper ${selectedKid?.id === kid.id ? 'scale-110' : 'hover:scale-105'}`}
          >
            <div className={`card-glow ${
              selectedKid?.id === kid.id ? 'card-glow-selected' : 'card-glow-default'
            }`} />
            <Card isSelected={selectedKid?.id === kid.id}>
              <span className="text-4xl mb-1" role="img" aria-label="kid avatar">
                {kid.emoji}
              </span>
              <span className={`font-bold transition-colors duration-300
                ${selectedKid?.id === kid.id ? 'text-purple-600' : 'text-gray-600 group-hover:text-gray-800'}`}>
                {kid.name}
              </span>
            </Card>
          </button>
          <div className="absolute -top-2 -right-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEditKid(kid);
              }}
              className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center
                opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-purple-600"
              title="Edit Kid"
            >
              ✏️
            </button>
          </div>
          <div className="absolute -bottom-1 right-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemoveKid(kid);
              }}
              className="bg-red-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs
                opacity-0 group-hover:opacity-75 transition-opacity duration-200 hover:opacity-100 hover:bg-red-500"
              title="Remove Kid"
            >
              ×
            </button>
          </div>
        </div>
      ))}
      
      {!maxKidsReached && (
        <button
          onClick={onAddKid}
          className="card-wrapper opacity-60 hover:opacity-100"
        >
          <div className="card-glow card-glow-default" />
          <Card>
            <span className="text-4xl mb-1" role="img" aria-label="add kid">
              ➕
            </span>
            <span className="font-bold text-gray-600">
              Add Kid
            </span>
          </Card>
        </button>
      )}
    </div>
  );
}