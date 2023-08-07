import { memo } from 'react';
import {
  Button, ButtonTheme, classNames, Theme, ThemeDark, ThemeLight,
} from '@/shared';
import { useTheme } from '@/shared/lib/hooks/use-theme/use-theme';

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
