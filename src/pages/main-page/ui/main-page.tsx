import { useTranslation } from 'react-i18next';
import { ErrorButton } from 'app/providers/error-boundary';
import { Counter } from 'entities/counter';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <div>
      <ErrorButton />
      {/* <ErrorButton /> */}
      {t('Главная страница')}
      {/* <Counter /> */}
    </div>
  );
}

export { MainPage };
