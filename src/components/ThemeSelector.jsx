import React from 'react';

const themes = [
    {
        id: 'cotton-candy',
        name: 'Cotton Candy',
        class: 'bg-gradient-to-b from-pink-200 via-purple-100 to-blue-200'
    },
    {
        id: 'sunset',
        name: 'Sunset',
        class: 'bg-gradient-to-b from-orange-200 via-amber-100 to-yellow-200'
    },
    {
        id: 'ocean',
        name: 'Ocean',
        class: 'bg-gradient-to-b from-cyan-200 via-blue-100 to-indigo-200'
    },
    {
        id: 'spring',
        name: 'Spring',
        class: 'bg-gradient-to-b from-green-200 via-emerald-100 to-teal-200'
    }
];

export default function ThemeSelector({ currentTheme, onThemeChange }) {
    return (
        <div className="fixed top-4 right-4 z-10">
            <select
                value={currentTheme}
                onChange={(e) => onThemeChange(e.target.value)}
                className="bg-white/70 backdrop-blur-sm rounded-lg px-3 py-1 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
                {themes.map(theme => (
                    <option key={theme.id} value={theme.id}>
                        {theme.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export { themes };