import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers';
import { Article } from 'entities/article';

export const fetchArticlesList = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
  >(
    'articlePage/fetchArticlesList',
    async (
      text,
      {
        dispatch, extra, rejectWithValue, getState,
      },
    ) => {
      try {
        const response = await extra.api.get<Article[]>(
          '/articles',
          {
            params: {
              _expand: 'user',
            },
          },
        );

        if (!response.data) {
          throw new Error();
        }

        return response.data;
      } catch (e) {
        return rejectWithValue(i18n.t('Нет данных'));
      }
    },
  );
