import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from '@/shared/config/i18n/i18n';
import { ThunkConfig } from '@/app/providers';
import { Article } from '@/entities';

export const fetchArticlesRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
  >(
    'articleDetailsPage/fetchArticleRecommendations',
    async (
      props,
      {
        extra, rejectWithValue,
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
        if (!response.data) {
          throw new Error();
        }

        return response.data;
      } catch (e) {
        return rejectWithValue(i18n.t('Нет данных'));
      }
    },
  );
