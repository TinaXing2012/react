import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function ThemeToggle() {

    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('This component must be used under ThemeContext');
    }

    const { theme, toggleTheme } = context;
    return (
        <div>
            <h2>Current Theme: {theme}</h2>
            <button onClick={toggleTheme}>Swith to {theme === 'light' ? 'dark' : 'light'}</button>
        </div>
    )
}
