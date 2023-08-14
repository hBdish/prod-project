import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from './article-rating';
import { Skeleton } from '@/shared';

const ArticleRatingLazy = lazy(() =>
  import('./article-rating').then((module) => ({ default: module.ArticleRating })),
);

const ArticleRatingLazySuspense = (props: ArticleRatingProps) => (
  <Suspense
    fallback={
      <Skeleton
        width="100%"
        height={140}
      />
    }
  >
    <ArticleRatingLazy {...props} />
  </Suspense>
);

export { ArticleRatingLazySuspense as ArticleRating };
