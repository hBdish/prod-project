import { memo } from 'react';
import { classNames, Text } from 'shared';
import { useTranslation } from 'react-i18next';
import { ArticleListItem } from '../article-list-item/article-list-item';
import { Article, ArticleView } from '../../types/types';
import { ArticleListItemSkeleton } from '../article-list-item/article-list-item-skeleton';
import styles from './article-list.module.scss';

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.BIG,
  } = props;

  const { t } = useTranslation('article');
  const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={styles.card} key={index} view={view} />
    ));

  const renderArticle = (article: Article) => (
    <ArticleListItem
      className={styles.card}
      article={article}
      view={view}
      key={article.id}
    />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
        <Text title={t('Статьи не найдены') ?? ''} />
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});

export { ArticleList };
