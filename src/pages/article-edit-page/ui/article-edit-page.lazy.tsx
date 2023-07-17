import { lazy } from 'react';

const ArticleEditPageLazy = lazy(() => import('./article-edit-page')
  .then((module) => ({ default: module.ArticleEditPage })));

export { ArticleEditPageLazy as ArticleEditPage };
