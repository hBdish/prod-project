import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/counter';

function AboutPage() {
  const { t } = useTranslation('about');
  return (
    <div>
      {t('О сайте')}
    </div>
  );
}

export { AboutPage };
