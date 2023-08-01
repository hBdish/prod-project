import { StateSchema } from '@/app/providers';

export const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data;
