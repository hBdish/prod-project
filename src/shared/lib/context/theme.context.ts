import { createContext } from 'react';
import { Theme } from '@/shared';

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export type { ThemeContextProps };
