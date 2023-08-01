import { StateSchema } from '@/app/providers';

export const getArticleRecommendationsIsLoading = (state: StateSchema) => state
  .articleDetailsRecommendations?.isLoading;

export const getArticleRecommendationsError = (state: StateSchema) => state
  .articleDetailsRecommendations?.error;
