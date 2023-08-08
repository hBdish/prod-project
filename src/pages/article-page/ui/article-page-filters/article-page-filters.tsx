import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/article';
import {
  articlePageActions,
  fetchArticlesList,
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
  getArticlePageView,
} from '@/pages';
import {
  Card, classNames, Input, SortOrder, useAppDispatch, useDebounce,
} from '@/shared';
import { ArticleTypeTabs, ArticleViewSelector, SortSelector } from '@/features';
import styles from './article-page-filters.module.scss';

interface ArticlePageFiltersProps {
  className?: string
}

const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const view = useSelector(getArticlePageView);
  const dispatch = useAppDispatch();
  const search = useSelector(getArticlePageSearch);
  const order = useSelector(getArticlePageOrder);
  const sort = useSelector(getArticlePageSort);
  const type = useSelector(getArticlePageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);
  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view));
  }, [dispatch]);

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlePageActions.setOrder(newOrder));
    dispatch(articlePageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlePageActions.setSort(newSort));
    dispatch(articlePageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlePageActions.setSearch(search));
    dispatch(articlePageActions.setPage(1));
    debouncedFetchData();
  }, [dispatch, debouncedFetchData]);

  const onChangeType = useCallback((value: ArticleType) => {
    dispatch(articlePageActions.setType(value));
    dispatch(articlePageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

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
