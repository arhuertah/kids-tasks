import React, { useState } from 'react';
import EmojiSelector from './EmojiSelector';

export default function KidForm({ onClose, onSubmit, initialKid = null }) {
  const [name, setName] = useState(initialKid?.name || '');
  const [selectedEmoji, setSelectedEmoji] = useState(initialKid?.emoji || null);
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);

  const isEditMode = !!initialKid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !selectedEmoji) return;
    
    const kidData = {
      name: name.trim(),
      emoji: selectedEmoji,
    };

    if (!isEditMode) {
      // Add mode: include new ID and empty arrays
      kidData.id = Date.now().toString();
      kidData.tasks = [];
      kidData.badges = 0;
      kidData.goals = [];
    }

    onSubmit(kidData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-40">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            {isEditMode ? 'Edit Kid' : 'Add New Kid'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="Enter name..."
              maxLength={20}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Icon
            </label>
            {selectedEmoji ? (
              <button
                type="button"
                onClick={() => setShowEmojiSelector(true)}
                className="text-4xl hover:scale-110 transition-transform duration-200"
              >
                {selectedEmoji}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowEmojiSelector(true)}
                className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg
                  text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                Choose an icon
              </button>
            )}
          </div>
          <button
            type="submit"
            disabled={!name.trim() || !selectedEmoji}
            className={`w-full py-2 rounded-lg font-bold text-white
              ${name.trim() && selectedEmoji
                ? 'bg-purple-500 hover:bg-purple-600'
                : 'bg-gray-300 cursor-not-allowed'
              }`}
          >
            {isEditMode ? 'Save Changes' : 'Add Kid'}
          </button>
        </form>
      </div>
      {showEmojiSelector && (
        <EmojiSelector
          onSelect={(emoji) => {
            setSelectedEmoji(emoji);
            setShowEmojiSelector(false);
          }}
          onClose={() => setShowEmojiSelector(false)}
        />
      )}
    </div>
  );
}