import { useState } from "react";

export default function AddTaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task..."
        className="flex-1 px-3 py-2 rounded-lg border"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}