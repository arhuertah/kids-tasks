import { useState, useRef, useEffect } from "react";
import { sampleTasks } from "../data/sampleTasks";

export default function AddTaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target) &&
          inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask(title);
    setTitle("");
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (task) => {
    setTitle(task);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  return (
    <div className="relative mb-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            placeholder="New task... (click for suggestions)"
            className="w-full px-3 py-2 rounded-lg border"
          />
          {showSuggestions && (
            <div 
              ref={suggestionsRef}
              className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border max-h-80 overflow-y-auto z-50"
            >
              {sampleTasks.map((category) => (
                <div key={category.category} className="p-2">
                  <h3 className="font-bold text-sm text-purple-600 px-2 py-1">
                    {category.category}
                  </h3>
                  <div className="space-y-1">
                    {category.tasks.map((task) => (
                      <button
                        key={task}
                        type="button"
                        onClick={() => handleSuggestionClick(task)}
                        className="w-full text-left px-2 py-1 text-sm hover:bg-purple-50 rounded transition-colors"
                      >
                        {task}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 whitespace-nowrap"
        >
          Add
        </button>
      </form>
    </div>
  );
}