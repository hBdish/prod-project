import { StateSchema } from 'app/providers';

export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error;
