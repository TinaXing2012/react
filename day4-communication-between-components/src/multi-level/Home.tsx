import ThemeToggle from './ThemeToggle';

import './theme.css';

type PropsType = {
    theme: string;
    toggleTheme: () => void;
}

export default function Home(props: PropsType) {
    const { theme, toggleTheme } = props;
    return (
        <div className={theme}>
            <h1>Home</h1>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
        </div>
    )
}
