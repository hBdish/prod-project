import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/theme.context';
import { Theme } from '@/shared';

interface UseThemeResult {
  toggleTheme: (saveAction: (theme: Theme) => void) => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme || Theme.LIGHT;
  }, [theme]);

  const toggleTheme = (saveAction: (theme: Theme) => void) => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme?.(newTheme);
    saveAction?.(newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
}
