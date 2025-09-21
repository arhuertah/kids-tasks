export function Card({ children, isSelected, className = '', ...props }) {
  return (
    <div
      className={`
        relative flex flex-col items-center p-3 rounded-xl 
        bg-white/90 backdrop-blur-sm border-2 transition-all duration-300
        ${isSelected 
          ? 'border-purple-400 shadow-lg shadow-purple-300/30' 
          : 'border-transparent hover:border-gray-300'
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}