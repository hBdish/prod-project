import { StateSchema } from '@/app/providers/store-provider';

export const getArticleDetailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading;
