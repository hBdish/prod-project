import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers';
import { Article } from 'entities/article';

export const fetchArticlesRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
  >(
    'articleDetailsPage/fetchArticleRecommendations',
    async (
      props,
      {
        dispatch, extra, rejectWithValue, getState,
      },
    ) => {
      try {
        const response = await extra.api.get<Article[]>(
          '/articles',
          {
            params: {
              _limit: 4,
            },
          },
        );
        console.log(response);
        if (!response.data) {
          throw new Error();
        }

        return response.data;
      } catch (e) {
        return rejectWithValue(i18n.t('Нет данных'));
      }
    },
  );
