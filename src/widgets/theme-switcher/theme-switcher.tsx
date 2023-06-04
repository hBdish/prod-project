import styles from './theme-switcher.module.scss'
import {Button, classNames, ThemeButton, ThemeDark, ThemeLight} from "shared";
import {Theme, useTheme} from "app/providers";


interface ThemeSwitcherProps {
  className?: string
}


const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <ThemeDark /> : <ThemeLight/> }
    </Button>
  );
};

export {ThemeSwitcher};
