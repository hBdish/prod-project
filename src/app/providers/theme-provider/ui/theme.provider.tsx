import { ReactNode, useMemo, useState } from 'react';
import { ThemeContext } from '../../../../shared/lib/context/theme.context';
import { LOCAL_STORAGE_THEME_KEY, Theme } from '@/shared';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
  children?: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initialTheme } = props;

  const [theme, setTheme] = useState<Theme>(defaultTheme || initialTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
