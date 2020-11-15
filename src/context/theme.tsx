import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useRef,
  useState,
  MutableRefObject,
  useContext,
  useEffect,
} from 'react';

export type AppThemes = 'dark' | 'light';
type UpdateAppTheme = Dispatch<SetStateAction<AppThemes>>;

type ThemeContextType = {
  theme: AppThemes;
  setTheme: UpdateAppTheme;
};

const ThemeContext = createContext({} as ThemeContextType);

const ThemeProvider: React.FC = ({ children }) => {
  const root = useRef() as MutableRefObject<HTMLDivElement>;
  const [theme, setTheme] = useState<AppThemes>('dark');
  useEffect(() => {
    root.current.dataset.theme = theme;
  }, [theme]);

  const value = useMemo(
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
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useTheme };
