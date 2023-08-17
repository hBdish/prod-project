import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames, Skeleton } from '@/shared';
import { authDataSelector, RatingCard } from '@/entities';
import { useGetArticleRating, useRateArticle } from '../../api/article-rating';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = (props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();
  const userData = useSelector(authDataSelector);
  const { isLoading, data } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? '',
  });

  const [rateArticleMutationTrigger] = useRateArticle();

  const rating = data?.[0];

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutationTrigger({
          userId: userData?.id ?? '',
          articleId,
          rate: starsCount,
          feedback,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [articleId, rateArticleMutationTrigger, userData?.id],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle],
  );

  const onCansel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle],
  );

  if (isLoading) {
    return (
      <Skeleton
        width="100%"
        height={120}
      />
    );
  }

  return (
    <RatingCard
      onCancel={onCansel}
      onAccept={onAccept}
      title={t('Оцените статью') ?? ''}
      className={classNames('', {}, [className])}
      feedbackTitle={t('Оставьте свой отзыв о статье') ?? ''}
      hasFeedback
      rate={rating?.rate}
    />
  );
};

export { ArticleRating };
