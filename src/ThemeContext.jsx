import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext('light');
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState();
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
