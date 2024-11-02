import { useContext } from 'react';
import ThemeToggle from './ThemeToggle';

import './theme.css';
import ThemeContext, { useThemeContext } from './context/ThemeContext';


export default function Home() {

    const { theme } = useThemeContext();

    return (
        <div className={theme}>
            <h1>Home Again!!!!</h1>
            <ThemeToggle />
        </div>
    )
}
