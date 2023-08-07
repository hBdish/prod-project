import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';
import {
  fetchNextArticlesPage,
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView,
  getArticles,
  initArticlePage,
} from '@/pages';
import { useAppDispatch, useInitialEffect } from '@/shared';
import { ArticleList, ArticleView } from '@/entities';

interface ArticleInfiniteListProps {
  className?: string
}

const ArticleInfiniteList = (props: ArticleInfiniteListProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const error = useSelector(getArticlePageError);
  const view = useSelector(getArticlePageView);
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlePage(searchParams));
  });

  const onLoadNextPart = useCallback(
    () => {
      dispatch(fetchNextArticlesPage());
    },
    [dispatch],
  );

  return (
    <ArticleList
      articles={articles}
      isLoading={isLoading}
      view={view as ArticleView}
      className={className}
      onLoadNextPart={onLoadNextPart}
    />
  );
};

export { ArticleInfiniteList };
