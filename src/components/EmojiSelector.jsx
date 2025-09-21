import React from 'react';

const emojiOptions = [
  { emoji: '🌟', label: 'Star' },
  { emoji: '🦋', label: 'Butterfly' },
  { emoji: '🌈', label: 'Rainbow' },
  { emoji: '⭐', label: 'Classic Star' },
  { emoji: '✨', label: 'Sparkles' },
  { emoji: '🌸', label: 'Flower' },
  { emoji: '🎨', label: 'Art' },
  { emoji: '🎵', label: 'Music' }
];

export default function EmojiSelector({ onSelect, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Choose an Icon</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {emojiOptions.map(({ emoji, label }) => (
            <button
              key={label}
              onClick={() => onSelect(emoji)}
              className="p-3 text-3xl hover:bg-gray-100 rounded-lg transition-colors duration-200
                flex flex-col items-center"
              title={label}
            >
              <span role="img" aria-label={label}>{emoji}</span>
              <span className="text-xs text-gray-600 mt-1">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}