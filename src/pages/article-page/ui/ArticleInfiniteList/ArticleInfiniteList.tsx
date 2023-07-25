import { useAppDispatch, useInitialEffect } from 'shared';
import { useSelector } from 'react-redux';
import {
  fetchNextArticlesPage,
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView,
  getArticles,
  initArticlePage,
} from 'pages';
import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';
import { ArticleList } from 'entities/article';

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
      view={view}
      className={className}
      onLoadNextPart={onLoadNextPart}
    />
  );
};

export { ArticleInfiniteList };
