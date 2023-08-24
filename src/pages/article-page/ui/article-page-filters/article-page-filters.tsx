import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/article';
import { Card, classNames, Input } from '@/shared';
import { ArticleTypeTabs, ArticleViewSelector, SortSelector } from '@/features';
import styles from './article-page-filters.module.scss';
import { useArticleFilters } from '../../lib/hooks/use-article-filters';

interface ArticlePageFiltersProps {
  className?: string;
}

const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const {
    view,
    search,
    order,
    sort,
    type,
    onChangeView,
    onChangeOrder,
    onChangeSort,
    onChangeSearch,
    onChangeType,
  } = useArticleFilters();

  return (
    <div className={classNames('', {}, [className])}>
      <div className={styles.sortWrapper}>
        <SortSelector
          sort={sort as ArticleSortField}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector
          view={view as ArticleView}
          onViewClick={onChangeView}
        />
      </div>
      <Card className={styles.search}>
        <Input
          onChange={onChangeSearch}
          value={search}
          placeholder={t('Поиск') || ''}
        />
      </Card>
      <ArticleTypeTabs
        className={styles.typeTabs}
        value={type as ArticleType}
        onChangeType={onChangeType}
      />
    </div>
  );
});

export { ArticlePageFilters };
