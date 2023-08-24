import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  ReducersList,
  StickyLayout,
  ToggleFeatures,
  useAppDispatch,
  useDynamicModuleLoader,
  useInitialEffect,
} from '@/shared';
import { ArticleList, ArticleView } from '@/entities';
import {
  articlePageReducer,
  fetchNextArticlesPage,
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView,
  getArticles,
  initArticlePage,
} from '../../model';
import styles from './article-page.module.scss';
import { ArticlePageGreeting } from '@/features';
import { ContentPageBlock } from '@/widgets';
import { ViewSelectorContainer } from '../view-selector-container/view-selector-container';
import { FiltersContainer } from '../filters-container/filters-container';

interface ArticlePageProps {
  className?: string;
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

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <ContentPageBlock
      data-testid="ArticlePage"
      className={styles.ArticleBlock}
    >
      <ToggleFeatures
        name="isAppRedesigned"
        on={
          <StickyLayout
            left={<ViewSelectorContainer />}
            content={
              <ArticleList
                articles={articles}
                isLoading={isLoading}
                view={view as ArticleView}
                className={styles.list}
                onLoadNextPart={onLoadNextPart}
              />
            }
            right={<FiltersContainer />}
          />
        }
        off={
          <ArticleList
            articles={articles}
            isLoading={isLoading}
            view={view as ArticleView}
            className={styles.list}
            onLoadNextPart={onLoadNextPart}
          />
        }
      />

      <ArticlePageGreeting />
    </ContentPageBlock>
  );
});

export { ArticlePage };
