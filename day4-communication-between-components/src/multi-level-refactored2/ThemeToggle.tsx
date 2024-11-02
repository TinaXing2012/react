import { useContext } from "react";
import ThemeContext, { useThemeContext } from "./context/ThemeContext";

export default function ThemeToggle() {

    const { theme, toggleTheme } = useThemeContext();
    return (
        <div>
            <h2>Current Theme: {theme}</h2>
            <button onClick={toggleTheme}>Swith to {theme === 'light' ? 'dark' : 'light'}</button>
        </div>
    )
}
