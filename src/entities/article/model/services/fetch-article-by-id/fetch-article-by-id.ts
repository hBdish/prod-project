import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from '@/shared/config/i18n/i18n';
import { ThunkConfig } from '@/app/providers/store-provider';
import { Article } from '../../../types/types';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'article/fetchArticleById',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`, {
        params: {
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t('Введен неверный логин или пароль'));
    }
  },
);
