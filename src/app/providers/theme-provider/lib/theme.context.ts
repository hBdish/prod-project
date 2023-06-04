import {createContext} from "react";

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

 interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

 const ThemeContext = createContext<ThemeContextProps>({})

const LOCAL_STORAGE_THEME_KEY = 'theme'

export {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  ThemeContextProps,
  Theme
}
