import { classNames } from 'shared';
import { useTranslation } from 'react-i18next';
import styles from './article-details-page.module.scss';

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
      {t('ArticleDetailsPage')}
    </div>
  );
};

export { ArticleDetailsPage };