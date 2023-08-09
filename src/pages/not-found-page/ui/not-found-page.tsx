import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared';
import { ContentPageBlock } from '@/widgets';
import styles from './not-found-page.module.scss';

interface NotFoundPageProps {
  className?: string
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <ContentPageBlock
      data-testid="NotFoundPage"
      className={classNames(styles.notFoundPage, {}, [className])}
    >
      {t('Страница не найдена')}
    </ContentPageBlock>
  );
};

export { NotFoundPage };
