import { useState } from "react";

export default function AddGoalForm({ onAddGoal }) {
  const [title, setTitle] = useState("");
  const [badges, setBadges] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !badges) return;
    onAddGoal(title, parseInt(badges));
    setTitle("");
    setBadges("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Goal title..."
        className="flex-1 px-3 py-2 rounded-lg border"
      />
      <input
        type="number"
        value={badges}
        onChange={(e) => setBadges(e.target.value)}
        placeholder="Badges"
        className="w-24 px-3 py-2 rounded-lg border"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600"
      >
        Add Goal
      </button>
    </form>
  );
}