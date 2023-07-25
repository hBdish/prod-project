import {
  classNames,
  ReducersList,
  Text,
  TextSize,
  useAppDispatch,
  useDynamicModuleLoader,
  useInitialEffect,
  Vstack,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/comment';
import { useSelector } from 'react-redux';
import { AddCommentForm } from 'features';
import { useCallback } from 'react';
import { ContentPageBlock } from 'widgets';
import {
  articleDetailsPageRecommendationReducer,
  getArticleRecommendations,
} from 'pages/article-details-page/model/slice/article-details-page-recommendation-slice';
import {
  articleDetailsCommentReducer,
  getArticleSelectors,
} from 'pages/article-details-page/model/slice/article-details-comment-slice';
import { ArticleDetailsPageHeader } from 'pages/article-details-page/ui/article-details-page-header';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { addCommentsForArticle } from 'pages';
import {
  fetchArticlesRecommendations,
  fetchCommentsById,
  getArticleCommentsIsLoading,
  getArticleRecommendationsError,
  getArticleRecommendationsIsLoading,
} from '../../model';
import styles from './article-details-page.module.scss';

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentReducer,
  articleDetailsRecommendations: articleDetailsPageRecommendationReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleSelectors.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
  const recommendationsError = useSelector(getArticleRecommendationsError);
  const dispatch = useAppDispatch();

  useDynamicModuleLoader({ reducers, removeAfterUnmount: false });
  useInitialEffect(() => {
    dispatch(fetchCommentsById(id));
    dispatch(fetchArticlesRecommendations());
  });

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentsForArticle(text));
  }, [dispatch]);

  if (!id) {
    return (
      <ContentPageBlock className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </ContentPageBlock>
    );
  }

  return (
    <ContentPageBlock className={classNames(styles.ArticleDetailsPage, {}, [className])}>
      <Vstack gap="16">
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRecommendationsList />
        <Text
          size={TextSize.L}
          className={styles.commentTitle}
          title={t('Комментарии') || ''}
        />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList
          isLoading={isLoading}
          comments={comments}
        />
      </Vstack>
    </ContentPageBlock>
  );
};

export { ArticleDetailsPage };
