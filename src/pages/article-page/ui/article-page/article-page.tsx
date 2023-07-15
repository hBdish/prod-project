import {
  classNames, ReducersList, useAppDispatch, useDynamicModuleLoader, useInitialEffect,
} from 'shared';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/article';
import {
  articlePageActions,
  articlePageReducer,
  getArticles,
} from 'pages/article-page/model/slice/article-page-slice';
import {
  fetchArticlesList, fetchNextArticlesPage,
  getArticlePageError, getArticlePageHasMore, getArticlePageInited,
  getArticlePageIsLoading, getArticlePageLimit, getArticlePageNumber,
  getArticlePageView, initArticlePage,
} from 'pages';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { ContentPageBlock } from 'widgets';

interface ArticlePageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlePageReducer,
};

const ArticlePage = (props: ArticlePageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const error = useSelector(getArticlePageError);
  const view = useSelector(getArticlePageView);

  useDynamicModuleLoader({ reducers });
  useInitialEffect(() => {
    dispatch(initArticlePage());
  });

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view));
  }, [dispatch]);

  const onLoadNextPart = useCallback(
    () => {
      dispatch(fetchNextArticlesPage());
    },
    [dispatch],
  );

  return (
    <ContentPageBlock
      onScrollEnd={onLoadNextPart}
      className={classNames('', {}, [className])}
    >
      <ArticleViewSelector
        view={view}
        onViewClick={onChangeView}
      />
      <ArticleList
        articles={articles}
        isLoading={isLoading}
        view={view}
      />
    </ContentPageBlock>
  );
};

export { ArticlePage };
