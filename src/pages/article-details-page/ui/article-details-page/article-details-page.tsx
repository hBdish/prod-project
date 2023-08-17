import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

import { AddCommentForm, ArticleRating, ArticleRecommendationsList } from '@/features';
import { ArticleDetails, CommentList } from '@/entities';
import {
  Card,
  classNames,
  getFeatureFlag,
  ReducersList,
  Text,
  TextSize,
  toggleFeatures,
  useAppDispatch,
  useDynamicModuleLoader,
  useInitialEffect,
  Vstack,
} from '@/shared';
import { ContentPageBlock } from '@/widgets';
import {
  addCommentsForArticle,
  articleDetailsCommentReducer,
  articleDetailsPageRecommendationReducer,
  getArticleSelectors,
} from '@/pages';
import { ArticleDetailsPageHeader } from '@/pages/article-details-page/ui/article-details-page-header';
import {
  fetchArticlesRecommendations,
  fetchCommentsById,
  getArticleCommentsIsLoading,
} from '../../model';
import styles from './article-details-page.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
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
  const dispatch = useAppDispatch();
  const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');
  const isCounterEnabled = getFeatureFlag('isCounterEnabled');

  useDynamicModuleLoader({ reducers, removeAfterUnmount: false });
  useInitialEffect(() => {
    dispatch(fetchCommentsById(id));
    dispatch(fetchArticlesRecommendations());
  });

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentsForArticle(text));
    },
    [dispatch],
  );

  if (!id) {
    return (
      <ContentPageBlock className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </ContentPageBlock>
    );
  }

  const Rating = toggleFeatures({
    name: 'isArticleRatingEnabled',
    // eslint-disable-next-line react/no-unstable-nested-components
    on: () => <ArticleRating articleId={id} />,
    // eslint-disable-next-line react/no-unstable-nested-components
    off: () => <Card>{t('Оценка статей скоро появится')}</Card>,
  });

  return (
    <ContentPageBlock className={classNames(styles.ArticleDetailsPage, {}, [className])}>
      <Vstack gap="16">
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        {Rating}
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
