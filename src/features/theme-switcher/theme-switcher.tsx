import { memo, useCallback } from 'react';
import { Button, ButtonTheme, classNames, Theme, ThemeDark, ThemeLight, useAppDispatch } from '@/shared';
import { useTheme } from '@/shared/lib/hooks/use-theme/use-theme';
import { saveJsonSettings } from '@/entities';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [toggleTheme, dispatch]);

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={onToggleHandler}
    >
      {theme === Theme.DARK ? <ThemeDark /> : <ThemeLight />}
    </Button>
  );
});

export { ThemeSwitcher };
