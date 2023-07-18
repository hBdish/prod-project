import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  classNames, ReducersList, useAppDispatch, useDynamicModuleLoader, useInitialEffect,
} from 'shared';
import { ArticleList } from 'entities/article';
import { ContentPageBlock } from 'widgets';
import {
  fetchNextArticlesPage,
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView,
  initArticlePage,
  articlePageReducer,
  getArticles,
} from '../../model';
import { ArticlePageFilters } from '../article-page-filters/article-page-filters';
import styles from './article-page.module.scss';

interface ArticlePageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlePageReducer,
};

const ArticlePage = memo((props: ArticlePageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const error = useSelector(getArticlePageError);
  const view = useSelector(getArticlePageView);
  const [searchParams] = useSearchParams();
  useDynamicModuleLoader({ reducers });
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
    <div className={styles.ArticleBlock}>
      <ArticleList
        articles={articles}
        isLoading={isLoading}
        view={view}
        className={styles.list}
        onLoadNextPart={onLoadNextPart}
      />
    </div>
  );
});

export { ArticlePage };
