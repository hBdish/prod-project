import { ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '../../../../shared/lib/context/theme.context';
import { Theme } from '@/shared';
import { useJsonSettings } from '@/entities';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children?: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initialTheme } = props;
  const { theme: defaultTheme = Theme.LIGHT } = useJsonSettings();
  const [theme, setTheme] = useState<Theme>(defaultTheme || initialTheme);
  const [isThemeInited, setThemeInited] = useState(false);

  useEffect(() => {
    if (!isThemeInited) {
      setTheme(defaultTheme);
      setThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);

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
