import { StateSchema } from '@/app/providers';

import { ArticleSortField, ArticleType, ArticleView } from '@/entities/article';

export const getArticlePageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlePageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlePageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
export const getArticlePageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlePageNumber = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlePageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlePageInited = (state: StateSchema) => state.articlesPage?._inited;
export const getArticlePageSort = (state: StateSchema) => state
  .articlesPage?.sort ?? ArticleSortField.CREATED;
export const getArticlePageOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc';
export const getArticlePageSearch = (state: StateSchema) => state.articlesPage?.search ?? '';
export const getArticlePageType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.ALL;
