import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from '@/shared/config/i18n/i18n';
import { ThunkConfig } from '@/app/providers';
import { Comment } from '@/entities';

export const fetchCommentsById = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'articleDetails/fetchCommentsById',
  async (
    articleId,
    { extra, rejectWithValue },
  ) => {
    try {
      if (!articleId) return rejectWithValue(i18n.t('not id error'));

      const response = await extra.api.get<Comment[]>(
        '/comments',
        {
          params: {
            articleId,
            _expand: 'user',
          },
        },
      );

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t('Введен неверный логин или пароль'));
    }
  },
);
