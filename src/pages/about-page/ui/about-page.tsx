import { useTranslation } from 'react-i18next';
import { ContentPageBlock } from '@/widgets';

function AboutPage() {
  const { t } = useTranslation('about');
  return (
    <ContentPageBlock>
      {t('О сайте')}
    </ContentPageBlock>
  );
}

export { AboutPage };
