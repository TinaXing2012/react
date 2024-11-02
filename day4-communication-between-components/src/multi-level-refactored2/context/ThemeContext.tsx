import { createContext, ReactElement, ReactNode, useState, useContext } from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
}


const ThemeContext = createContext<ThemeContextType | null>(null);


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );

}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('This component must be used under ThemeContext');
  }
  return context;
}

export default ThemeContext;