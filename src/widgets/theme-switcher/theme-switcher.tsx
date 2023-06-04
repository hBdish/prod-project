import {
  Button, classNames, ThemeButton, ThemeDark, ThemeLight,
} from 'shared';
import { Theme, useTheme } from 'app/providers';
import styles from './theme-switcher.module.scss';

interface ThemeSwitcherProps {
  className?: string
}

function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <ThemeDark /> : <ThemeLight /> }
    </Button>
  );
}

export { ThemeSwitcher };
