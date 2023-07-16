import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers';
import { Article, ArticleType } from 'entities/article';
import {
  getArticlePageLimit,
  getArticlePageNumber,
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
} from 'pages';
import { addQueryParams } from 'shared';

interface ArticlesListProps {
  replace?: boolean
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
        extra, rejectWithValue, getState,
      },
    ) => {
      const search = getArticlePageSearch(getState());
      const order = getArticlePageOrder(getState());
      const sort = getArticlePageSort(getState());
      const page = getArticlePageNumber(getState());
      const limit = getArticlePageLimit(getState());
      const type = getArticlePageType(getState());

      try {
        addQueryParams({
          sort, order, search, type,
        });
        const response = await extra.api.get<Article[]>(
          '/articles',
          {
            params: {
              _expand: 'user',
              _limit: limit,
              _page: page,
              _sort: sort,
              _order: order,
              q: search,
              type: type === ArticleType.ALL ? undefined : type,
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
