import { Button, classNames, ThemeButton } from 'shared';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string
}

function LangSwitcher({ className }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t('Язык')}
    </Button>
  );
}

export { LangSwitcher };
