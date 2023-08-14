import { lazy } from 'react';

const ArticleCreatePageLazy = lazy(() =>
  import('./article-create-page').then((module) => ({ default: module.ArticleCreatePage })),
);

export { ArticleCreatePageLazy as ArticleCreatePage };
