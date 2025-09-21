export function Button({ variant = 'primary', className = '', children, ...props }) {
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    success: 'bg-green-500 hover:bg-green-600 text-white'
  };

  return (
    <button
      className={`
        px-4 py-2 rounded-lg font-bold transition-colors duration-200
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}