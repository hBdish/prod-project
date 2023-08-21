import { memo, useCallback } from 'react';
import {
  Button,
  ButtonTheme,
  classNames,
  Icon,
  SwapThemeIconDeprecated,
  ToggleFeatures,
  useAppDispatch,
} from '@/shared';
import { useTheme } from '@/shared/lib/hooks/use-theme/use-theme';
import { saveJsonSettings } from '@/entities';
import { IconRedesigned } from '@/shared/ui/redesigned/icon';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [toggleTheme, dispatch]);

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <IconRedesigned
          Svg={SwapThemeIconDeprecated}
          width={40}
          height={40}
          clickable
          onClick={onToggleHandler}
        />
      }
      off={
        <Button
          theme={ButtonTheme.CLEAR}
          className={classNames('', {}, [className])}
          onClick={onToggleHandler}
        >
          <Icon
            Svg={SwapThemeIconDeprecated}
            width={40}
            height={40}
          />
        </Button>
      }
    />
  );
});

export { ThemeSwitcher };
