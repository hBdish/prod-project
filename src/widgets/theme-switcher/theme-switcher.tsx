import {
  Button, classNames, ThemeDark, ThemeLight, ButtonTheme,
} from 'shared';
import { Theme, useTheme } from 'app/providers';
import { memo } from 'react';

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
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
});

export { ThemeSwitcher };
