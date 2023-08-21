import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button, ButtonTheme, classNames, ToggleFeatures } from '@/shared';
import { ButtonRedesigned } from '@/shared/ui/redesigned/button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <ButtonRedesigned
          className={classNames('', {}, [className])}
          variant="clear"
          onClick={toggle}
        >
          {t(short ? 'Сокращенный язык' : 'Язык')}
        </ButtonRedesigned>
      }
      off={
        <Button
          className={classNames('', {}, [className])}
          theme={ButtonTheme.CLEAR}
          onClick={toggle}
        >
          {t(short ? 'Сокращенный язык' : 'Язык')}
        </Button>
      }
    />
  );
});

export { LangSwitcher };
