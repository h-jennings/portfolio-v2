import React, { Dispatch, MutableRefObject, SetStateAction } from 'react';

export type AppThemes = 'dark' | 'light';
type UpdateAppTheme = Dispatch<SetStateAction<AppThemes>>;

interface ThemeContextType {
  theme: AppThemes;
  setTheme: UpdateAppTheme;
}

const ThemeContext = React.createContext({} as ThemeContextType);

const ThemeProvider: React.FC = ({ children }) => {
  const root = React.useRef() as MutableRefObject<HTMLDivElement>;
  const [theme, setTheme] = React.useState<AppThemes>('dark');
  React.useEffect(() => {
    root.current.dataset.theme = theme;
  }, [theme]);

  const value = React.useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <div className='root' ref={root}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextType {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useTheme };
