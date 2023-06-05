import { useTranslation } from 'react-i18next';
import { ErrorButton } from 'app/providers/error-boundary';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <div>
      <ErrorButton />
      {t('Главная страница')}
    </div>
  );
}

export { MainPage };
