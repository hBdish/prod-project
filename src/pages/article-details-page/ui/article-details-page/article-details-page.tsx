import {
  Button,
  ButtonTheme,
  classNames,
  ReducersList,
  Text,
  TextSize,
  useAppDispatch,
  useDynamicModuleLoader,
  useInitialEffect,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { ArticleDetails, ArticleList, ArticleView } from 'entities/article';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentList } from 'entities/comment';
import { useSelector } from 'react-redux';
import { AddCommentForm } from 'features';
import { useCallback } from 'react';
import { RoutePath } from 'shared/config';
import { ContentPageBlock } from 'widgets';
import {

  getArticleRecommendations,
} from 'pages/article-details-page/model/slice/article-details-page-recommendation-slice';
import { getArticleSelectors } from 'pages/article-details-page/model/slice/article-details-comment-slice';
import {
  fetchArticlesRecommendations,
  fetchCommentsById,
  getArticleCommentsIsLoading,
  getArticleRecommendationsError,
  getArticleRecommendationsIsLoading,
} from '../../model';
import { addCommentsForArticle }
  from '../../model/services/add-comments-for-article/add-comments-for-article';
import styles from './article-details-page.module.scss';

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {

};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<{id: string}>();
  const comments = useSelector(getArticleSelectors.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
  const recommendationsError = useSelector(getArticleRecommendationsError);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useDynamicModuleLoader({ reducers, removeAfterUnmount: true });
  useInitialEffect(() => {
    dispatch(fetchCommentsById(id));
    dispatch(fetchArticlesRecommendations());
  });

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentsForArticle(text));
  }, [dispatch]);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  if (!id) {
    return (
      <ContentPageBlock className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </ContentPageBlock>
    );
  }

  return (
    <ContentPageBlock className={classNames(styles.ArticleDetailsPage, {}, [className])}>
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onBackToList}
      >
        {t('Назад к списку')}
      </Button>
      <ArticleDetails id={id} />
      <Text
        size={TextSize.L}
        className={styles.commentTitle}
        title={t('Рекомендуем') || ''}
      />
      <ArticleList
        className={styles.recommendations}
        articles={recommendations}
        isLoading={recommendationsIsLoading}
        view={ArticleView.SMALL}
        target="_blank"
      />
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
    </ContentPageBlock>
  );
};

export { ArticleDetailsPage };
