import { StateSchema } from '@/app/providers/store-provider';

export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error;
