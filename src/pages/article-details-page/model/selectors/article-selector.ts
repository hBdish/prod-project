import { StateSchema } from '@/app/providers';

export const getCanEditArticle = (state: StateSchema) => {
  const articleId = state.articleDetails?.data?.id;
  const userId = state.user.authData?.id;
  if (!articleId || !userId) {
    return false;
  }

  return articleId === userId;
};
