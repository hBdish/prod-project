import { Button, classNames, ButtonTheme } from 'shared';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

function LangSwitcher({ className, short }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t(short ? 'Сокращенный язык' : 'Язык')}
    </Button>
  );
}

export { LangSwitcher };
