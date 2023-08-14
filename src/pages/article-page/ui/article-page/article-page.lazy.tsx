import { lazy } from 'react';

const ArticlePageLazy = lazy(() => import('./article-page').then((module) => ({ default: module.ArticlePage })));

export { ArticlePageLazy as ArticlePage };
