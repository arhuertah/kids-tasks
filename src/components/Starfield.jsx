import React from "react";

export default function Starfield({ count = 100 }) {
  const stars = Array.from({ length: count });

  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-pink-200 via-purple-100 to-blue-200 overflow-hidden">
      {stars.map((_, i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const duration = 2 + Math.random() * 3;
        const size = Math.random() * 2 + 1;

        return (
          <div
            key={i}
            className="star"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
}