import { useContext } from 'react';
import ThemeToggle from './ThemeToggle';

import './theme.css';
import { ThemeContext } from './context/ThemeContext';


export default function Home() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('This component must be used under ThemeContext');
    }
    const { theme } = context;

    return (
        <div className={theme}>
            <h1>Home</h1>
            <ThemeToggle />
        </div>
    )
}
