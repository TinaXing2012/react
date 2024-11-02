import React from 'react'

type PropsType = {
    theme: string;
    toggleTheme: () => void;
}

export default function ThemeToggle(props: PropsType) {
    const { theme, toggleTheme } = props;
    return (
        <div>
            <h2>Current Theme: {theme}</h2>
            <button onClick={toggleTheme}>Swith to {theme === 'light' ? 'dark' : 'light'}</button>
        </div>
    )
}
