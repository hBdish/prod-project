import { lazy } from 'react';

const ArticleDetailsPageLazy = lazy(() =>
  import('./article-details-page').then((module) => ({ default: module.ArticleDetailsPage })),
);

export { ArticleDetailsPageLazy as ArticleDetailsPage };
