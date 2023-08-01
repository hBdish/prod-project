import { useTranslation } from 'react-i18next';
import { ContentPageBlock } from '@/widgets';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <ContentPageBlock>
      {t('Главная страница')}
    </ContentPageBlock>
  );
}

export { MainPage };
