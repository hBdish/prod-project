import {
  classNames, ReducersList, useAppDispatch, useDynamicModuleLoader, useInitialEffect,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/article';
import {
  articlePageActions,
  articlePageReducer,
  getArticles,
} from 'pages/article-page/model/slice/article-page-slice';
import {
  fetchArticlesList,
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView,
} from 'pages';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import styles from './article-page.module.scss';

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

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view));
  }, [dispatch]);

  useDynamicModuleLoader({ reducers, removeAfterUnmount: true });
  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlePageActions.initialState());
  });

  return (
    <div className={classNames(styles.ArticlePage, {}, [className])}>
      <ArticleViewSelector view={view} onViewClick={onChangeView} />
      <ArticleList
        articles={articles}
        isLoading={isLoading}
        view={view}
      />
    </div>
  );
};

export { ArticlePage };
