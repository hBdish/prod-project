import { classNames } from 'shared';
import { useTranslation } from 'react-i18next';
import styles from './article-page.module.scss';

interface ArticlePageProps {
  className?: string
}

const ArticlePage = (props: ArticlePageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames(styles.ArticlePage, {}, [className])}>
      {t('ArticlePage')}
    </div>
  );
};

export { ArticlePage };
