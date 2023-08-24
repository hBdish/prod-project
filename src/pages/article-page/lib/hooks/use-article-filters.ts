import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
  articlePageActions,
  fetchArticlesList,
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
  getArticlePageView,
} from '@/pages';
import { SortOrder, useAppDispatch, useDebounce } from '@/shared';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities';

export function useArticleFilters() {
  const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);
  const debouncedFetchData = useDebounce(fetchData, 500);

  const view = useSelector(getArticlePageView);
  const search = useSelector(getArticlePageSearch);
  const order = useSelector(getArticlePageOrder);
  const sort = useSelector(getArticlePageSort);
  const type = useSelector(getArticlePageType);
  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlePageActions.setView(view));
    },
    [dispatch],
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlePageActions.setOrder(newOrder));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlePageActions.setSort(newSort));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlePageActions.setSearch(search));
      dispatch(articlePageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData],
  );

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlePageActions.setType(value));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  return {
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
  };
}
