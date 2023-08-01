import { StateSchema } from '@/app/providers';

export const getArticleDetailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading;
