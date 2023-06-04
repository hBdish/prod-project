import {
  Button, classNames, ThemeButton, ThemeDark, ThemeLight,
} from 'shared';
import { Theme, useTheme } from 'app/providers';

interface ThemeSwitcherProps {
  className?: string
}

function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <ThemeDark /> : <ThemeLight /> }
    </Button>
  );
}

export { ThemeSwitcher };
