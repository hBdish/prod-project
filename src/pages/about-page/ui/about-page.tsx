import { useTranslation } from 'react-i18next';
import { ContentPageBlock } from '@/widgets';

function AboutPage() {
  const { t } = useTranslation('about');
  return (
    <ContentPageBlock data-testid="AboutPage">
      {t('О сайте')}
      <button type="button">12345</button>
    </ContentPageBlock>
  );
}

export { AboutPage };
