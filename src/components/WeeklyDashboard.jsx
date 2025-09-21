import { useState } from "react";

const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

export default function WeeklyDashboard({ kid, onTaskComplete }) {
  const today = new Date().toDateString();

  return (
    <div className="mb-6 overflow-x-auto">
      <h2 className="text-xl font-bold mb-3">{kid.name}'s Weekly Tasks</h2>
      <table className="min-w-full border-collapse bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden">
        <thead>
          <tr className="border-b-2 border-gray-400">
            <th className="p-3 border-r border-gray-400"></th>
            {days.map(day => (
              <th key={day} className="p-3 border-r border-gray-400 text-center font-bold">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {kid.tasks.map(task => (
            <tr key={task.id} className="border-b border-gray-400">
              <td className="p-3 border-r border-gray-400 font-medium">{task.title}</td>
              {days.map((day, idx) => {
                const date = new Date();
                date.setDate(date.getDate() - date.getDay() + idx + 1); // align Mon-Sun
                const dateStr = date.toDateString();
                const isDone = task.completed.includes(dateStr);

                return (
                  <td key={day} className="p-3 border-r border-gray-400 text-center">
                    <div className="sparkle-wrapper">
                      <button
                        onClick={(e) => {
                          const btn = e.currentTarget;
                          btn.style.animation = 'none';
                          void btn.offsetWidth; // Trigger reflow
                          btn.style.animation = 'pop 300ms cubic-bezier(0.34, 1.56, 0.64, 1)';
                          onTaskComplete(task.id, dateStr);
                        }}
                        className={`text-2xl transition-colors duration-200 hover:scale-110
                          ${isDone ? "text-yellow-400" : "text-gray-400 hover:text-gray-500"}`}
                        title={isDone ? "Click to unmark" : "Click to mark complete"}
                      >
                        ★
                      </button>
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}