import { StateSchema } from 'app/providers';
import { ArticleView } from 'entities/article';

export const getArticlePageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;
export const getArticlePageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlePageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
