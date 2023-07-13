import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuthData } from 'entities/user';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers';
import { getArticleDetailsData } from 'entities/article/model';
import { fetchCommentsById } from '../fetch-comments-by-article-Id/fetch-comments-by-article-Id';

export const addCommentsForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentsForArticle',
  async (
    text,
    {
      dispatch, extra, rejectWithValue, getState,
    },
  ) => {
    const userData = getAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue(i18n.t('Нет данных'));
    }

    try {
      const response = await extra.api.post<Comment>(
        '/comments',
        {
          articleId: article!.id,
          userId: userData.id,
          text,
        },
      );

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsById(article.id));
      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t('Нет данных'));
    }
  },
);
