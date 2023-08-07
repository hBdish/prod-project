import { StateSchema } from '@/app/providers/store-provider';

export const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data;
