export default function TaskItem({ task, onComplete }) {
  const isCompletedToday = task.completed.includes(new Date().toDateString());

  return (
    <div className="flex justify-between items-center bg-white rounded-lg p-3 shadow mb-2">
      <span className={`font-medium ${isCompletedToday ? "line-through text-gray-400" : ""}`}>
        {task.title}
      </span>
      <button
        disabled={isCompletedToday}
        onClick={() => onComplete(task.id)}
        className={`px-3 py-1 rounded-lg text-white font-bold 
          ${isCompletedToday ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"}`}
      >
        {isCompletedToday ? "Done" : "Complete"}
      </button>
    </div>
  );
}