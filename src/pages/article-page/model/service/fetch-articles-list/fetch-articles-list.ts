import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers';
import { Article } from 'entities/article';
import { getArticlePageLimit } from 'pages';

interface ArticlesListProps{
  page: number
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  ArticlesListProps,
  ThunkConfig<string>
  >(
    'articlePage/fetchArticlesList',
    async (
      props,
      {
        dispatch, extra, rejectWithValue, getState,
      },
    ) => {
      const {
        page = 1,
      } = props;

      const limit = getArticlePageLimit(getState());

      try {
        const response = await extra.api.get<Article[]>(
          '/articles',
          {
            params: {
              _expand: 'user',
              _limit: limit,
              _page: page,
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
