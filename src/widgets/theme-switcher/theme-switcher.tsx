import {
  Button, classNames, ThemeDark, ThemeLight, ButtonTheme,
} from 'shared';
import { Theme, useTheme } from 'app/providers';

interface ThemeSwitcherProps {
  className?: string
}

function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <ThemeDark /> : <ThemeLight /> }
    </Button>
  );
}

export { ThemeSwitcher };
